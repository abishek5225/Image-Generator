# PromptPix 🖼️✨

PromptPix is a modern web application that provides powerful AI-powered image generation and editing tools. Transform your creative process with text-to-image generation, image upscaling, uncropping, background removal, and more.

## 🎮 Demo

Visit our [live demo](https://promptpix-demo.vercel.app) to try out PromptPix without installation.

> Note: The demo has limited credits for AI operations. Sign up for a
## 🔑 API Integration

PromptPix uses the ClipDrop API for AI image processing. You'll need to:

1. Sign up for a ClipDrop API key at [https://clipdrop.co/apis](https://clipdrop.co/apis)
2. Add your API key to the `.env` file in the client directory



### Client
The client is built with React and uses Vite for development and building. Key features:

- **React Router**: For navigation with future flags enabled
- **Context API**: For state management (auth, theme, etc.)
- **Framer Motion**: For animations and transitions
- **TailwindCSS**: For styling with a custom theme

### Server
The server is a simple Express application that serves the API and static files in production.
