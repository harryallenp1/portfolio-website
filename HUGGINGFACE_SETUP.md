# Hugging Face AI Chatbot Setup (100% FREE!)

Your chatbot now uses Hugging Face's free Inference API with the Mistral-7B model.

## Get Your Free API Token

1. Go to [Hugging Face](https://huggingface.co/join) and create a free account
2. Go to [Settings > Access Tokens](https://huggingface.co/settings/tokens)
3. Click "New token"
4. Give it a name (e.g., "portfolio-chatbot")
5. Select "Read" role
6. Click "Generate token"
7. Copy your token

## Setup

1. Open your `.env` file
2. Replace the value with your token:
   ```
   REACT_APP_HF_API_KEY=hf_your_actual_token_here
   ```
3. Restart your dev server: `npm start`

## Benefits

- **100% Free** - No credit card required
- **No quota limits** for personal use
- Uses Mistral-7B, a powerful open-source model
- First request might take 10-20 seconds (model loading), then it's fast

## Note

The first time you use it, the model needs to "warm up" which takes about 20 seconds. After that, responses are quick!
