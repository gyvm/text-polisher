require 'sinatra'
require 'sinatra/reloader' if development?
require 'erb'

class TextCorrector
  def self.correct(text)
    # ここに実際の校正ロジックを実装
    # 例: 簡単な句読点のチェック
    corrected = text.gsub(/。」/, "」。")
    corrected.gsub(/、」/, "」、")
  end
end

get '/' do
  erb :index
end

post '/correct' do
  @original_text = params[:text]
  @corrected_text = TextCorrector.correct(@original_text)
  @char_count = @original_text.length
  erb :result
end

# post '/compare' do
#   original = session[:original] = params[:original]
#   modified = session[:modified] = params[:modified]
#
#   @result = DiffHTMLFormatter.new(original, modified).to_html
#   haml :index
# end
