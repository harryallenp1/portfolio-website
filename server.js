const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  const { message, systemPrompt } = req.body;
  const apiKey = process.env.REACT_APP_HF_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  try {
    // Use Hugging Face's chat completion API
    const response = await fetch(
      'https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          inputs: message,
          parameters: {
            max_length: 200,
            temperature: 0.7,
          }
        })
      }
    );

    const data = await response.json();
    console.log('HF Response:', data);

    if (!response.ok) {
      console.error('HF Error:', data);
      return res.status(response.status).json(data);
    }

    // Handle different response formats
    let aiText = '';
    if (Array.isArray(data) && data[0]?.generated_text) {
      aiText = data[0].generated_text;
    } else if (data.generated_text) {
      aiText = data.generated_text;
    } else if (typeof data === 'string') {
      aiText = data;
    }

    // Create a simple response based on Harry's info if model doesn't work well
    if (!aiText || aiText.length < 10) {
      // Fallback to simple keyword matching
      const lowerMessage = message.toLowerCase();
      if (lowerMessage.includes('experience') || lowerMessage.includes('work')) {
        aiText = "Harry has worked as a QA Analyst at the Government of Ontario and as a Product Analyst Intern at Career Education Council. He has experience in AI chatbot improvement, data analysis, and test automation.";
      } else if (lowerMessage.includes('skill')) {
        aiText = "Harry's skills include Python, JavaScript, Java, C#, SQL, Excel, Power BI, AI Chatbot Development, Azure AI Studio, and Agile/Scrum methodologies.";
      } else if (lowerMessage.includes('education') || lowerMessage.includes('school')) {
        aiText = "Harry completed an AI & Applied Machine Learning certification at University of Waterloo and is pursuing a Bachelor of Computer Science at Sheridan College (Expected 2027).";
      } else if (lowerMessage.includes('contact') || lowerMessage.includes('email')) {
        aiText = "You can reach Harry at harryallen.net@gmail.com, call him at +1 (905) 782-6838, or connect on LinkedIn at linkedin.com/in/harryallenp";
      } else {
        aiText = "I'm Harry's AI assistant! I can tell you about his experience, skills, education, and projects. What would you like to know?";
      }
    }

    res.json({ response: aiText });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
