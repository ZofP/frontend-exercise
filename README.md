# Cat Articles | Article Management System

This project implements a simple **Article Management System** where users can view articles, add comments, and vote on comments. It also includes an admin perspective to manage articles.
The project was made based on the [Frontend Exercise assignment instructions](https://github.com/Applifting/fullstack-exercise/blob/master/assignment.md#frontend-developer-exercise) from Applifting.

## Setup Instructions

### Prerequisites

- Node.js (v16.x or higher)
- npm (v7.x or higher)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/ZofP/frontend-exercise.git
   cd frontend-exercise
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:  
    For the purposes of this project, there are no secret variables that cannot be included in the repository. It is sufficient to copy the `.env.example` file contents to `.env` file as is:

   ```bash
   cp .env.example .env
   ```

4. **Run the development server**:

   ```bash
   npm run dev
   ```

   The application will be available at [http://localhost:3000](http://localhost:3000).

## API Documentation

- **REST API**: You can check out the API documentation [here](https://github.com/Applifting/fullstack-exercise/blob/master/api.yml).
- **WebSocket API**: Check out the WebSocket API [here](#).

## Authentication

- The **Admin** pages (Articles management, New Article Form, and Edit Article Form) are password-protected
- The admin login process requires a valid username and password (in a production app the credentials would never be shared in a repository - but this is just a testing project):

      username: zofp

      password: Testpassword-8564!

Note: In a production ready app the credentials would never be shared in a repository!
However, for this project it is okay as it serves only for testing purposes.
