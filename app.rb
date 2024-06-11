require 'sinatra'
require 'sinatra/reloader' if development?
require 'haml'
require_relative 'diff_html_formatter'
require_relative 'bedrock'

get '/' do
  haml :index
end

post '/compare' do
  original = session[:original] = params[:original]

  service = ClaudeService.new
  modified = session[:modified] = service.generate_response(create_pronpt(original))

  @result = DiffHTMLFormatter.new(original, modified).to_html
  haml :index
end

def create_pronpt(original)
  "\"#{original}\"という文章を正しい日本語に校正して下さい。なるべく元の文の意味を損なわないようにしてください。"
end
