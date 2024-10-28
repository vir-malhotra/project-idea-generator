// server.js
const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const pdfParse = require('pdf-parse');
const OpenAI = require('openai');
require('dotenv').config();

const app = express();
const PORT = 5000;

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(fileUpload());
app.use(express.json());

app.post('/api/generate-ideas', async (req, res) => {
  try {
    if (!req.files || !req.files.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const topic = req.body.topic || 'General';
    const pdfFile = req.files.file;

    const pdfText = await pdfParse(pdfFile.data);
    console.log('PDF content extracted successfully');

    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: `Generate a list of 5 complete and unique project ideas based on the given assignment content and the topic "${topic}". Each idea should be a complete thought, ending with a period. Number each idea.`,
        },
        {
          role: 'user',
          content: pdfText.text,
        },
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    const ideasText = completion.choices[0].message.content;
    const ideas = ideasText.split('\n').filter(idea => idea.trim().match(/^\d+\./));

    res.json({ ideas });
  } catch (error) {
    console.error('Error generating ideas:', error);
    res.status(500).json({ error: 'Failed to generate ideas' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});