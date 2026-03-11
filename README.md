# Smart User Management System

A modern, full-stack User Management System featuring a beautiful glassmorphism-inspired UI. This application provides robust user authentication, a personalized user dashboard, and a comprehensive admin panel for managing users.

## Features

- **Modern Glassmorphism UI**: Stunning, responsive frontend design utilizing Tailwind CSS.
- **User Authentication**: Secure login and registration flows with JSON Web Tokens (JWT).
- **User Dashboard**: A personalized view for authenticated users to see their details.
- **Admin Panel**: A dedicated administrative interface for viewing, managing, expanding, and restricting user access.
- **RESTful API backend**: Fully featured Node.js/Express backend powering the application.
- **Secure Password Hashing**: Utilizes `bcryptjs` for secure storage of user credentials.

## Technology Stack

### Frontend
- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **HTTP Client**: Axios

### Backend
- **Environment**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (via Mongoose)
- **Authentication**: JWT (JSON Web Tokens)
- **Security**: bcryptjs, CORS

## Project Structure

- `/frontend` - Contains the React application and frontend assets.
- `/backend` - Contains the Node.js/Express server, API routes, models, and controllers.

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher recommended)
- MongoDB instance (local or Cloud Atlas)

### 1. Clone the Repository
\`\`\`bash
git clone https://github.com/Sanjay452656/Smart-User-Management-System.git
cd Smart-User-Management-System/userManagementSystem
\`\`\`

### 2. Backend Setup
Navigate to the backend directory and install dependencies:
\`\`\`bash
cd backend
npm install
\`\`\`

Create a `.env` file in the `backend` directory with the following variables:
\`\`\`env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
\`\`\`

Start the backend development server:
\`\`\`bash
npm run dev
\`\`\`
The server will start on port 5000 (or the port specified in your `.env`).

### 3. Frontend Setup
Open a new terminal, navigate to the frontend directory, and install dependencies:
\`\`\`bash
cd frontend
npm install
\`\`\`

Start the frontend development server:
\`\`\`bash
npm run dev
\`\`\`
The React app will typically run on `http://localhost:5173`.

## Usage
- Open your browser and navigate to the frontend URL.
- Register a new user account or log in with existing credentials.
- Test the dashboard after logging in as a standard user.
- Test the admin panel by logging into an admin account.

## License
ISC License
