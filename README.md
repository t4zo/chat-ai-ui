# Chat AI

> **Note**: This is the frontend application for the Chat AI project. It depends on the [Chat AI API](https://github.com/t4zo/chat-ai-api) backend service to function properly.

A modern web application that provides an AI-powered chat interface built with Vue.js and TypeScript.

## Features

- Simple user authentication with email and name
- Real-time chat interface with AI responses
- Persistent chat history
- Responsive design with Tailwind CSS
- Modern UI with dark theme

## Tech Stack

- Vue 3 with TypeScript
- Pinia for state management
- Vue Router for navigation
- Tailwind CSS for styling
- Axios for API requests

## Project Structure

```
src/
├── assets/         # Static assets
├── components/     # Vue components
│   ├── Header.vue
│   ├── Messages.vue
│   ├── Input.vue
│   └── Feedback.vue
├── stores/         # Pinia stores
│   ├── user.ts
│   └── chat.ts
├── views/          # Page components
│   ├── Home.vue
│   └── Chat.vue
├── router/         # Vue Router configuration
├── App.vue         # Root component
└── main.ts         # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd chat-ai-ui
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add your API URL:
```env
VITE_API_URL=your_api_url_here
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

## Usage

1. Open the application in your browser
2. Enter your name and email to start
3. Begin chatting with the AI
4. Your chat history will be saved and available when you return

## Building for Production

To create a production build:

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
