# PromptPix 🖼️✨

PromptPix is a modern web application that provides powerful AI-powered image generation and editing tools. Transform your creative process with text-to-image generation, image upscaling, uncropping, background removal, and more.

## 🎮 Demo

Visit our [live demo](https://promptpix-demo.vercel.app) to try out PromptPix without installation.

> Note: The demo has limited credits for AI operations. Sign up for a full account to access all features.

## ✨ Features

### AI Image Tools

- **Text to Image**: Generate stunning images from text descriptions using advanced AI models
- **Image Upscaling**: Enhance image resolution and quality without losing details
- **Image Uncropping**: Expand your images beyond their original boundaries with AI-powered content generation
- **Background Removal**: Automatically remove backgrounds from images with precision
- **Image Editor**: Edit your images with a comprehensive set of tools

### User Features

- **User Authentication**: Secure login and registration system
- **Personal Gallery**: Save and organize your generated images
- **Credit System**: Manage usage of AI tools with a credit-based system
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark Mode**: Toggle between light and dark themes for comfortable viewing

## 🏗️ Project Structure

The project follows a client-server architecture:

```
PromptPix/
├── client/             # Frontend React application
│   ├── public/         # Static assets
│   ├── src/            # Source code
│   │   ├── components/ # Reusable UI components
│   │   ├── context/    # React context providers
│   │   ├── pages/      # Page components
│   │   ├── services/   # API and utility services
│   │   └── styles/     # CSS and styling files
│   ├── .env.example    # Example environment variables
│   └── package.json    # Frontend dependencies
└── server/             # Backend Express server
    ├── src/            # Source code
    │   └── index.js    # Server entry point
    ├── .env.example    # Example environment variables
    └── package.json    # Backend dependencies
```

## 🚀 Technologies Used

### Frontend
- **React**: UI library for building the user interface
- **Vite**: Next-generation frontend tooling
- **React Router**: For navigation and routing
- **Framer Motion**: For smooth animations and transitions
- **TailwindCSS**: For styling and responsive design

### Backend
- **Node.js**: JavaScript runtime
- **Express**: Web framework for Node.js
- **Cors**: For cross-origin resource sharing

### APIs
- **ClipDrop API**: For AI image processing capabilities

## 🛠️ Installation and Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local installation or MongoDB Atlas account)

### Clone the Repository
```bash
git clone https://github.com/yourusername/promptpix.git
cd promptpix
```




## 🔑 API Integration

PromptPix uses the ClipDrop API for AI image processing. You'll need to:

1. Sign up for a ClipDrop API key at [https://clipdrop.co/apis](https://clipdrop.co/apis)
2. Add your API key to the `.env` file in the client directory

## 💻 Development

### Client
The client is built with React and uses Vite for development and building. Key features:

- **React Router**: For navigation with future flags enabled
- **Context API**: For state management (auth, theme, etc.)
- **Framer Motion**: For animations and transitions
- **TailwindCSS**: For styling with a custom theme

### Server
The server is a simple Express application that serves the API and static files in production.


## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Made with ❤️ by the PromptPix Team
