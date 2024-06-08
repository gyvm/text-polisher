require 'sinatra'
require 'sinatra/reloader' if development?
require 'haml'
require_relative 'diff_html_formatter'

get '/' do
  haml :index
end

post '/compare' do
  original = session[:original] = params[:original]
  modified = session[:modified] = params[:modified]

  @result = DiffHTMLFormatter.new(original, modified).to_html
  haml :index
end
