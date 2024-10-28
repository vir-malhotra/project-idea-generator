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
# In the client directory (for frontend dependencies)
```
cd ../client
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
This project was developed with the help of OpenAI's GPT-4 for generating project ideas based on uploaded assignment content. Portions of the backend API code and integration suggestions were AI-generated to streamline API usage and ensure efficient handling of user requests.

Additionally, parts of this README and setup instructions were created with the assistance of AI to ensure clarity and comprehensiveness.
