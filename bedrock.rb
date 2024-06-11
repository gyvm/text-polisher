require 'aws-sdk-bedrockruntime'
require 'json'

# Clientを作成
client = Aws::BedrockRuntime::Client.new(region: 'us-east-1')

# モデルとプロンプトを設定
model_id = "anthropic.claude-3-haiku-20240307-v1:0"
prompt = "Describe the purpose of a 'hello world' program in one line."

# リクエストを作成
native_request = {
  anthropic_version: "bedrock-2023-05-31",
  max_tokens: 512,
  temperature: 0.5,
  messages: [
    {
      role: "user",
      content: [{ type: "text", text: prompt }]
    }
  ]
}

# リクエストを送信
response = client.invoke_model({
  model_id: model_id,
  body: native_request.to_json
})

# レスポンスを処理
model_response = JSON.parse(response.body.read) 
response_text = model_response["content"][0]["text"]

puts response_text
