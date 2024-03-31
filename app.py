from flask import Flask, render_template, request, jsonify
from transformers import GPT2LMHeadModel, GPT2Tokenizer

app = Flask(__name__)

# Load pre-trained GPT-2 model and tokenizer
model = GPT2LMHeadModel.from_pretrained("gpt2")
tokenizer = GPT2Tokenizer.from_pretrained("gpt2")

@app.route('/')
def home():
    return render_template('ai.html')

@app.route('/generate_text', methods=['POST'])
def generate_text():
    # Get prompt text from request data
    prompt = request.json.get('prompt', '')

    # Tokenize the prompt text
    input_ids = tokenizer.encode(prompt, return_tensors="pt")

    # Generate text based on the prompt
    max_length = 100  # Maximum length of generated text
    generated_ids = model.generate(input_ids, max_length=max_length, num_return_sequences=1)

    # Decode the generated text
    generated_text = tokenizer.decode(generated_ids[0], skip_special_tokens=True)

    # Return the generated text as JSON response
    return jsonify({'generated_text': generated_text})

if __name__ == '__main__':
    app.run(debug=True)
