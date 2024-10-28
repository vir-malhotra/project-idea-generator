// Import required libraries and dependencies
const express = require('express');           // Express framework for handling HTTP requests
const cors = require('cors');                 // CORS middleware to allow cross-origin requests
const fileUpload = require('express-fileupload'); // Middleware for handling file uploads
const pdfParse = require('pdf-parse');        // Library for extracting text from PDF files
const OpenAI = require('openai');             // OpenAI API client
require('dotenv').config();                   // Load environment variables from .env file

// Initialize the Express app and set the server port
const app = express();
const PORT = 5000;

// Configure OpenAI API client with the API key from environment variables
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,         // Fetch the API key securely from .env
});

// Middleware setup
app.use(cors({ origin: 'http://localhost:3000' })); // Allow cross-origin requests from the frontend
app.use(fileUpload());                           // Enable file upload handling in Express
app.use(express.json());                         // Enable JSON parsing for incoming requests

// Endpoint to generate project ideas based on PDF content and specified topic
app.post('/api/generate-ideas', async (req, res) => {
  try {
    // Check if a file was uploaded; if not, return a 400 error response
    if (!req.files || !req.files.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    // Extract the topic and PDF file from the request
    const topic = req.body.topic || 'General';  // Default topic to 'General' if none provided
    const pdfFile = req.files.file;             // Extract the uploaded PDF file data

    // Parse the PDF file content to extract text
    const pdfText = await pdfParse(pdfFile.data);
    console.log('PDF content extracted successfully'); // Log PDF extraction success for debugging

    // Call OpenAI API to generate project ideas based on the extracted PDF text and topic
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',                           // Specify the GPT-4 model for generating ideas
      messages: [
        {
          role: 'system',                       // System role to instruct the AI on its purpose
          content: `Generate a list of 5 complete and unique project ideas based on the given assignment content and the topic "${topic}". Each idea should be a complete thought, ending with a period. Number each idea.`,
        },
        {
          role: 'user',                         // User role to provide the PDF text as input
          content: pdfText.text,                // Pass the extracted text from the PDF as the user's input
        },
      ],
      max_tokens: 500,                          // Limit the response to 500 tokens
      temperature: 0.7,                         // Set temperature for creativity (higher values mean more creative ideas)
    });

    // Extract and format the response content to obtain individual project ideas
    const ideasText = completion.choices[0].message.content; // Retrieve the text content of generated ideas
    const ideas = ideasText.split('\n')                      // Split response by new lines
      .filter(idea => idea.trim().match(/^\d+\./));          // Filter to include only numbered ideas

    // Send the array of ideas as a JSON response to the client
    res.json({ ideas });
  } catch (error) {
    // Log any errors encountered during the process and return a 500 status code
    console.error('Error generating ideas:', error);
    res.status(500).json({ error: 'Failed to generate ideas' });
  }
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
