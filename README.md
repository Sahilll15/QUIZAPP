# Node.js App with HTML Frontend

## Description
This is a simple web application built with Node.js for the backend and HTML for the frontend. The application serves static HTML files and provides API endpoints to interact with the backend.

## Features
- Serve static HTML files
- Implement RESTful API endpoints
- Handle CRUD operations for data manipulation
- Basic error handling

## Installation
1. Clone the repository: `git clone [<repository-url>](https://github.com/Sahilll15/QUIZAPP)`
2. Navigate to the project directory: `cd QUIZAPP`
3. Install dependencies: `npm install`

## Usage
1. Start the server: `nodemon index.js`


## API Endpoints

### Questions
- `POST /question/create/:quizId`: Create questions for a specific quiz
- `GET /question/get/:quizId`: Get questions for a specific quiz

### Quizzes
- `POST /quiz/create`: Create a new quiz (requires authentication)
- `GET /quiz/get`: Get all quizzes
- `POST /takeQuiz/start/:quizId`: Start a quiz (requires authentication)
- `POST /takeQuiz/submit/:quizId`: Submit a quiz (requires authentication)

### Auth 

- `POST /user/signup`: Sign up for a new account
- `POST /user/login`: Log in to an existing account

#### Note:
- Endpoints marked as `(requires authentication)` require a valid JSON Web Token (JWT) to be included in the request headers for authorization.


## Configuration
- Port: You can change the port by modifying the `PORT` variable in the `.env` file.
- mongo_url change the mongo url variable for the database

## Dependencies
- bcryptjs: Library for hashing passwords
- cors: Middleware for enabling Cross-Origin Resource Sharing (CORS)
- dotenv: Loads environment variables from a `.env` file into `process.env`
- express: Fast, unopinionated, minimalist web framework for Node.js
- jsonwebtoken: Library for generating JSON Web Tokens (JWT)
- mongoose: MongoDB object modeling tool designed to work in an asynchronous environment
- nodemon: Automatically restarts the server during development

## Contributing
Contributions are welcome! Please feel free to open an issue or submit a pull request.

## License
This project is licensed under the [MIT License](LICENSE).
