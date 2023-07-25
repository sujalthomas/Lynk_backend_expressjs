# 🌐 Express.js Server for Cover Letter Generation

This server provides a simple backend to receive and process job data for generating cover letters. Built with Express.js, it's a lightweight solution for testing and development purposes.

## 🚀 Features

- 🔓 **CORS Enabled**: This server is set up to handle cross-origin requests, making it perfect for local development with front-end applications running on different ports or origins.
  
- 📄 **JSON Body Parsing**: The server is set up to handle JSON payloads, allowing you to send structured data for processing.

- 🔧 **Environmental Variables**: Using `dotenv`, this server can easily manage environmental variables for configuration.

## 🔗 Basic Routes:

- **GET `/`**: A simple endpoint returning a "Hello, world!" message.
  
- **POST `/generate-cover-letter`**: An endpoint to receive and log job data sent from the client.

## 🏁 Getting Started

1. 📦 **Clone the repository**:
   ```bash
   git clone [repository-url]
   cd [repository-name]

## ⚙️ Install dependencies:

```bash
npm install
```

## 🔑 Set up environmental variables:

1. Create a `.env` file in the root of your project.
2. Add your configuration, e.g., `PORT=5000`.

## 🚀 Run the server:

```bash
npm start
```

Open your browser or API testing tool and navigate to `http://localhost:[PORT]` (replace `[PORT]` with your actual port number, default is 3000).

<p align="center">
  Made with ❤️ by Sujal Thomas Tatipelli
</p>
