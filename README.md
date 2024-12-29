# Server Documentation for 9ANTRATN

## Project Structure

The backend server is built using Node.js, Express.js, and MongoDB. Below is the project structure:

```
server/
├── config/                  # Configuration files
│   ├── config.js           # General server configuration
├── database/                # Database connection and setup
│   ├── db.config.js        # MongoDB connection configuration
├── middlewares/             # Middleware logic
│   ├── authMiddleware.js   # Authentication middleware
├── models/                  # Database models (Mongoose schemas)
│   ├── category.js         # Category model
│   ├── course.js           # Course model
│   ├── user.js             # User model
├── routes/                  # API routes
│   ├── auth.js             # Authentication routes
│   ├── categories.js       # Category management routes
│   ├── courses.js          # Course management routes
├── .env                     # Environment variables
├── index.js                 # Server entry point
├── package.json             # Project metadata and dependencies
```

---

## Configuration Files

### 1. **config.js**
File: `config/config.js`

Contains general server configuration

### 2. **db.config.js**
File: `database/db.config.js`

Handles MongoDB connection.

## Models

### 1. **User Model**
File: `models/user.js`

Schema definition for users, including password hashing.

### 2. **Category Model**
File: `models/category.js`

Schema for course categories.

### 3. **Course Model**
File: `models/course.js`

Schema for courses.

---

## Routes

### 1. **Authentication Routes**
File: `routes/auth.js`

Handles user registration, login, and token generation.

### 2. **Category Routes**
File: `routes/categories.js`

Handles CRUD operations for categories.

### 3. **Course Routes**
File: `routes/courses.js`

Handles CRUD operations for courses.

---

## Middlewares

### 1. **Authentication Middleware**
File: `middlewares/authMiddleware.js`

Validates JWT tokens.

---

## Environment Variables

Use a `.env` file to store sensitive information:

```
PORT=3000
MONGO_URI=mongodb://localhost:27017/9antradb
JWT_SECRET=your-secret-key
```

---

## Running the Server

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

