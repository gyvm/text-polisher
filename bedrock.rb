# frozen_string_literal: true

require 'aws-sdk-bedrockruntime'
require 'json'

class ClaudeService
  def initialize
    @client = Aws::BedrockRuntime::Client.new(region: 'us-east-1')
    @model_id = "anthropic.claude-3-haiku-20240307-v1:0"
  end

  def generate_response(prompt)
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

    response = @client.invoke_model({
      model_id: @model_id,
      body: native_request.to_json
    })

    model_response = JSON.parse(response.body.read) 
    response_text = model_response["content"][0]["text"]

    response_text
  end
end
