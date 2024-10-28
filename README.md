# Project Idea Generator
<img width="642" alt="image" src="https://github.com/user-attachments/assets/fdcfffb4-5bb3-4d46-b016-aee98bf7776e">


## Project Description

The **Project Idea Generator** is a web application designed to help students and researchers quickly generate unique and relevant project ideas based on uploaded assignment content. By leveraging artificial intelligence, this tool can analyze a PDF of an assignment or topic outline and suggest creative project ideas that fit the specified topic. This application aims to reduce the time spent brainstorming and help students approach their projects with innovative ideas aligned with their assignments.

## Problem Solved

Many students struggle with coming up with unique and feasible project ideas, especially when dealing with complex or open-ended topics. This app addresses that problem by providing a customized list of ideas based on specific assignment instructions, which can save time, spark creativity, and increase productivity for students and educators alike.

## Features

- **PDF Upload**: Upload assignment instructions in PDF format.
- **Topic Selection**: Specify a topic to narrow down the scope of generated ideas.
- **AI-Generated Ideas**: Generate a list of unique and relevant project ideas based on the PDF content and topic.

---

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js**: Version 14 or higher.
- **Git**: To clone the repository.

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/vir-malhotra/project-idea-generator.git
   cd project-idea-generator
   ```
Install Dependencies: Navigate to both the client and server directories to install dependencies:

# In the root of the project (for backend dependencies)
```
cd server
npm install
```
# In the root of the project (for frontend dependencies)
```
cd idea-generator
npm install
```
Set Up Environment Variables:

In the server directory, create a .env file to store your environment variables.

# .env
```
OPENAI_API_KEY=your_openai_api_key_here
```
Start the Development Server:

Open two terminals to run the frontend and backend simultaneously:

In the server directory (for the backend):

```
node server.js
```
In the client directory (for the frontend):

```
npm start
```
The frontend will be available at http://localhost:3000 and the backend API at http://localhost:5000.

# API Integration
This project utilizes the OpenAI GPT-4 API to generate project ideas based on the content of uploaded PDFs and specified topics.

API Endpoint: /api/generate-ideas

API Model: gpt-4

Usage: After extracting text from the uploaded PDF, the text and topic are sent to the OpenAI API, which then generates a list of project ideas that are displayed in the frontend.
The OpenAI API is configured in the backend with a POST request, using createChatCompletion to generate ideas based on user-provided content. The API key is securely stored in the .env file and loaded at runtime.

# Key Dependencies

express: For handling server requests and API endpoints.

pdf-parse: For extracting text from PDF files.

openai: Official OpenAI API library for interacting with the GPT-4 model.

react: Frontend library used to build the user interface.

# Credits
Credits for AI-Generated Code Portions

This project was developed with significant assistance from OpenAI’s ChatGPT, which contributed code suggestions, architectural guidance, and implementation insights. Below is a detailed breakdown of how AI was used throughout the project.

1. Initial Project Structure and Setup
   
Assistance: ChatGPT provided step-by-step guidance on setting up the backend server using Express and integrating a frontend with React. The AI explained best practices for organizing the codebase into client (React) and server (Express) directories, ensuring a clear project structure.

2. Backend API Design and Implementation
   
File Upload and PDF Parsing:

ChatGPT provided a solution for handling file uploads in the backend using express-fileupload. Additionally, it recommended pdf-parse for extracting text from uploaded PDF files, with code samples on parsing PDF content efficiently.

Code Provided: The middleware configuration, code for setting up file handling with express-fileupload, and guidance on using pdf-parse to extract text from PDF files were all AI-suggested.

3. Frontend Component Structure and Functionality
   
Component Breakdown:

ChatGPT provided guidance on breaking down the frontend UI into modular React components (e.g., FileUpload, TopicInput, IdeaList) to ensure that each part of the interface was easily manageable and reusable.

Code Provided: Component structure, naming conventions, and prop-passing practices were suggested to streamline inter-component data flow.

API Requests and State Management:

ChatGPT assisted in setting up API requests from the frontend to the backend using axios and managing the responses with React’s useState hook. The AI explained how to structure asynchronous functions to handle API calls, loading states, and error handling in the UI.

Code Provided: The handleGenerateIdeas function, which manages API calls, error handling, and state updates based on the API response, was refined with AI input. ChatGPT also suggested using FormData for sending file and topic data to the backend.

4. Styling and UX Recommendations
   
CSS Styling Suggestions:

ChatGPT provided ideas on how to style components to create a sleek, modern look using CSS. Suggestions included using Flexbox for layout, hover effects for interactive elements, and accessible color choices.

Code Provided: Example CSS for making the application visually appealing was generated, including styling for buttons, input fields, and lists.

5. Troubleshooting and Error Resolution
   
Debugging Assistance:

Throughout development, ChatGPT provided troubleshooting help for common errors, such as Git errors during pushing to GitHub, CORS issues, and API configuration problems.

Code Provided: Solutions to specific errors and general debugging tips were given, including command-line steps and configuration tweaks
