# Jobs API

A secure RESTful API for managing job applications, built with Node.js, Express, and MongoDB. This API allows users to register, log in, and manage their job applications with full CRUD operations.

## Features

- **User Authentication**
  - JWT-based authentication
  - Secure password hashing with bcrypt
  - Protected routes

- **Job Management**
  - Create, read, update, and delete job applications
  - Track job application status (interview/declined/pending)
  - Filter and sort jobs by various criteria

- **Security**
  - Rate limiting (100 requests per 15 minutes per IP)
  - Helmet for setting secure HTTP headers
  - CORS enabled
  - XSS protection
  - Secure HTTP headers

- **Error Handling**
  - Custom error handling middleware
  - Async error handling with express-async-errors
  - Custom error classes for different error types

## Tech Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Security**: bcrypt, helmet, xss-clean, express-rate-limit
- **Validation**: Joi
- **Documentation**: Swagger UI

## API Endpoints

### Authentication
- `POST /api/v1/auth/register` - Register a new user
- `POST /api/v1/auth/login` - Login user

### Jobs (Protected Routes)
- `GET /api/v1/jobs` - Get all jobs for the authenticated user
- `POST /api/v1/jobs` - Create a new job
- `GET /api/v1/jobs/:id` - Get a single job
- `PATCH /api/v1/jobs/:id` - Update a job
- `DELETE /api/v1/jobs/:id` - Delete a job

## Environment Variables

Create a `.env` file in the root directory and add the following:

```
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_LIFETIME=1d
```

## Installation

1. Clone the repository
   ```bash
   git clone [repository-url]
   cd Jobs-App
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up environment variables (see above)

4. Start the development server
   ```bash
   npm start
   ```

## Project Structure

```
.
├── controllers/       # Route controllers
├── db/               # Database connection
├── errors/           # Custom error classes
├── middleware/       # Custom middleware
├── models/           # Mongoose models
├── routes/           # API routes
├── .env              # Environment variables
├── app.js            # Main application file
└── package.json
```

## Error Handling

The API uses custom error handling with the following error types:
- `BadRequestError` - 400 Bad Request
- `UnauthenticatedError` - 401 Unauthorized
- `NotFoundError` - 404 Not Found
- `CustomAPIError` - Base class for custom errors

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

## License

ISC