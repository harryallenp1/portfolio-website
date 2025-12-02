# AI Chatbot Setup Instructions

Your chatbot is now powered by Google Gemini AI! 🤖

## Get Your Free API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy your API key

## Setup Steps

1. Create a `.env` file in your project root:
   ```bash
   touch .env
   ```

2. Add your API key to the `.env` file:
   ```
   REACT_APP_GEMINI_API_KEY=your_actual_api_key_here
   ```

3. Restart your development server:
   ```bash
   npm start
   ```

## Important Notes

- The `.env` file is already in `.gitignore` so your API key won't be committed
- The free tier includes 60 requests per minute
- If the API key is missing, the chatbot will show a friendly fallback message
- The AI knows all about Harry's experience, skills, education, and projects

## Testing

Open your portfolio and click the chatbot button. Try asking:
- "What's Harry's experience?"
- "Tell me about his skills"
- "What projects has he worked on?"
- "How can I contact Harry?"

The AI will respond naturally based on Harry's information!
