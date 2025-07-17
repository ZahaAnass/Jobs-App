# Jobs API

[![Live Demo](https://img.shields.io/badge/Live%20Demo-View%20API-blue)](https://jobs-app-production.up.railway.app/)
[![API Documentation](https://img.shields.io/badge/API-Documentation-4CAF50)](https://jobs-app-production.up.railway.app/api-docs/)

A secure RESTful API for managing job applications, built with Node.js, Express, and MongoDB. This API allows users to register, log in, and manage their job applications with full CRUD operations.

## Features

- **User Authentication**
  - JWT-based authentication
  - Secure password hashing with bcrypt
  - Protected routes with role-based access

- **Job Management**
  - Create, read, update, and delete job applications
  - Track job application status (interview/declined/pending)
  - Filter and sort jobs by various criteria

- **API Documentation**
  - Interactive Swagger/OpenAPI documentation
  - Live testing of all endpoints
  - Request/response examples

- **Security**
  - Rate limiting (100 requests per 15 minutes per IP)
  - Helmet for setting secure HTTP headers
  - CORS enabled
  - XSS protection
  - Secure HTTP headers

## Live Demo

Explore the live API documentation:

- [API Documentation](https://jobs-app-production.up.railway.app/api-docs/)
- Base URL: `https://jobs-app-production.up.railway.app/api/v1`

## API Endpoints

### Authentication

- `POST /auth/register` - Register a new user
- `POST /auth/login` - Login user

### Jobs (Protected Routes)

- `GET /jobs` - Get all jobs for the authenticated user
- `POST /jobs` - Create a new job
- `GET /jobs/:id` - Get a single job
- `PATCH /jobs/:id` - Update a job
- `DELETE /jobs/:id` - Delete a job

## Tech Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Documentation**: Swagger/OpenAPI
- **Security**: bcrypt, helmet, xss-clean, express-rate-limit
- **Validation**: Joi

## Project Structure

``` bash
.
├── controllers/       # Route controllers
├── db/               # Database connection
├── errors/           # Custom error classes
├── middleware/       # Custom middleware
├── models/           # Mongoose models
├── routes/           # API routes
├── .env              # Environment variables
├── app.js            # Main application file
├── swagger.yaml      # API documentation
└── package.json
```

## Getting Started

### Prerequisites

- Node.js (v14+)
- MongoDB (local or remote connection)
- npm or yarn

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/yourusername/Jobs-App.git
   cd Jobs-App
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Set up environment variables
   Create a `.env` file in the root directory:

   ```bash
   MONGO_URL=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   JWT_LIFETIME=1d
   ```

4. Start the development server

   ```bash
   npm start
   ```

5. Access the API documentation at `http://localhost:3000/api-docs/`

## Error Handling

The API uses custom error handling with appropriate HTTP status codes:

- `400` - Bad Request
- `401` - Unauthorized
- `404` - Not Found
- `500` - Internal Server Error

## Rate Limiting

The API implements rate limiting to prevent abuse:

- 100 requests per 15 minutes per IP address

## Security Best Practices

- Password hashing with bcrypt
- JWT for authentication
- Input sanitization
- Secure HTTP headers
- CORS enabled
- Rate limiting
- XSS protection
