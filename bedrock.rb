require 'net/http'
require 'uri'
require 'json'

# AWS Bedrock APIのエンドポイントURL
endpoint = 'https://api.example.com/bedrock'

# リクエストボディ
body = {
  key1: 'value1',
  key2: 'value2'
}

# URIオブジェクトを作成
uri = URI.parse(endpoint)

# HTTPリクエストを作成
http = Net::HTTP.new(uri.host, uri.port)
http.use_ssl = true # HTTPSの場合

# リクエストヘッダーを設定
request = Net::HTTP::Post.new(uri.request_uri)
request['Content-Type'] = 'application/json'

# リクエストボディをJSONに変換
request.body = body.to_json

# リクエストを送信し、レスポンスを取得
response = http.request(request)

# レスポンスを処理
if response.code == '200'
  result = JSON.parse(response.body)
  puts "Success: #{result}"
else
  puts "Error: #{response.code} #{response.message}"
end
