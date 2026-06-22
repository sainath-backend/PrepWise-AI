# 🚀 PrepWise AI

> An AI-powered interview preparation platform that helps students and aspiring software engineers generate personalized interview questions, detailed notes, and downloadable study materials using Generative AI.

---

## 📖 Overview

PrepWise AI is a full-stack SaaS-style web application built to simplify technical interview preparation. Users can securely sign in, generate AI-powered interview content, save their learning history, export notes as PDFs, and unlock premium features using a credit-based system.

The project demonstrates real-world full-stack development practices including authentication, payment integration, protected APIs, AI integration, and scalable backend architecture.

---

## ✨ Features

### 🤖 AI-Powered Interview Preparation

- Generate interview questions from any topic
- AI-generated explanations and notes
- Personalized learning content
- Structured responses for efficient revision

### 📄 PDF Export

- Download generated notes as PDF
- Share study material easily
- Clean printable format

### 📝 Notes Management

- Save generated notes
- View previous notes
- Organize learning history

### 👤 Authentication

- Secure user authentication
- Firebase Authentication
- Protected routes
- JWT-based backend authorization

### 💳 Credits & Billing

- Credit-based AI generation
- Stripe payment integration
- Secure checkout flow
- Purchase additional credits

### 📚 History

- View previous generations
- Continue learning from saved content

### 🔒 Security

- Protected backend APIs
- JWT Authentication
- Environment variable configuration
- Secure API communication

---

# 🏗️ System Architecture

```
                    +---------------------+
                    |    React Frontend   |
                    +----------+----------+
                               |
                               |
                         REST APIs
                               |
                               ▼
                    +---------------------+
                    | Express.js Backend  |
                    +----------+----------+
                               |
         +---------------------+----------------------+
         |                     |                      |
         ▼                     ▼                      ▼
  Google Gemini AI       MongoDB Database      Stripe Payments
         |
         ▼
 AI Generated Content
```

---

# 🛠️ Tech Stack

## Frontend

- React
- Vite
- Redux Toolkit
- React Router
- Axios
- Firebase Authentication
- Tailwind CSS

---

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- PDFKit

---

## AI

- Google Gemini API

---

## Payments

- Stripe

---

## Authentication

- Firebase Authentication
- JWT

---

## Database

- MongoDB Atlas

---

# 📂 Project Structure

```
PrepWise-AI
│
├── Client
│   ├── src
│   ├── components
│   ├── Pages
│   ├── redux
│   ├── services
│   └── utils
│
├── Server
│   ├── controllers
│   ├── routes
│   ├── middleware
│   ├── models
│   ├── utils
│   └── config
│
└── README.md
```

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/yourusername/prepwise-ai.git
```

---

## Install Client

```bash
cd Client
npm install
npm run dev
```

---

## Install Server

```bash
cd Server
npm install
npm start
```

---

# 🔑 Environment Variables

Create a `.env` file inside the server.

```env
PORT=

MONGO_URI=

JWT_SECRET=

GEMINI_API_KEY=

STRIPE_SECRET_KEY=

CLIENT_URL=
```

Create another `.env` inside the client.

```env
VITE_API_URL=

VITE_FIREBASE_API_KEY=

VITE_FIREBASE_AUTH_DOMAIN=

VITE_FIREBASE_PROJECT_ID=

VITE_FIREBASE_STORAGE_BUCKET=

VITE_FIREBASE_MESSAGING_SENDER_ID=

VITE_FIREBASE_APP_ID=
```

---

# 🌐 API Modules

### Authentication

```
POST /api/auth/login
POST /api/auth/register
```

---

### AI Generation

```
POST /api/generate
```

---

### Notes

```
GET /api/notes

POST /api/notes
```

---

### Credits

```
GET /api/credits

POST /api/credits
```

---

### PDF

```
POST /api/pdf
```

---

### User

```
GET /api/user
```

---

# 🔄 Application Workflow

```
User Login
      │
      ▼
Authentication
      │
      ▼
Choose Topic
      │
      ▼
Generate AI Content
      │
      ▼
Save Notes
      │
      ├────────► Download PDF
      │
      ▼
View History
```

---

# 📸 Screenshots

> Add screenshots inside an `assets` folder.

```
assets/

├── home.png

├── dashboard.png

├── notes.png

├── pricing.png

└── history.png
```

Example:

```md
## Home

![Home](assets/home.png)

## Dashboard

![Dashboard](assets/dashboard.png)
```

---

# 🎯 Real-World Features

✅ AI-powered interview preparation

✅ Secure Authentication

✅ JWT Authorization

✅ Firebase Login

✅ REST API Architecture

✅ Stripe Payment Integration

✅ Credits Management

✅ PDF Export

✅ Responsive UI

✅ Protected Routes

✅ MongoDB Integration

✅ Scalable Folder Structure

---

# 💡 Learning Outcomes

This project helped me gain hands-on experience with:

- Designing scalable REST APIs
- Integrating Generative AI into production applications
- Secure authentication using Firebase and JWT
- MongoDB schema design
- Credit-based SaaS architecture
- Stripe payment workflow
- PDF generation on the server
- State management using Redux Toolkit
- Frontend and backend integration
- Environment variable management
- Building production-ready MERN applications

---

# 🚀 Future Improvements

- AI mock interview mode
- Voice-based interview practice
- Resume analysis
- Company-specific interview preparation
- Progress analytics dashboard
- Bookmark important notes
- Dark mode
- Admin Dashboard
- Email notifications
- Multi-language support

---

# 👨‍💻 Author

**Sainath**

Aspiring Backend Software Engineer | MERN Stack Developer

Focused on building scalable backend systems, REST APIs, AI-powered applications, and production-ready web solutions.

---

## ⭐ Support

If you found this project useful, consider giving it a **⭐ Star** on GitHub.

It motivates me to continue building and sharing real-world software projects.

---

## 📄 License

This project is intended for educational and portfolio purposes.
