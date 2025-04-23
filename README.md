# 🐱 Cat Articles | Article Management System

This project implements a simple **Article Management System** where users can view articles, add comments, and vote on comments. It also includes an admin perspective to manage articles.  
The project was made based on the [Frontend Exercise assignment instructions](https://github.com/Applifting/fullstack-exercise/blob/master/assignment.md#frontend-developer-exercise) from Applifting.

## ⚙️ Setup Instructions

### 🧰 Prerequisites

- Node.js (v16.x or higher)
- npm (v7.x or higher)

### 📥 Installation

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

4. **Run build and view the app**:

   ```bash
   npm run build
   ```

   ```bash
   npm run start
   ```

   The application will be available at [http://localhost:3000](http://localhost:3000).

## 📡 API Documentation

- **REST API**: You can check out the API documentation [here](https://github.com/Applifting/fullstack-exercise/blob/master/api.yml).
- **WebSocket API**: Check out the WebSocket API [here](https://github.com/Applifting/fullstack-exercise/blob/master/ws.json).

## 🔐 Authentication

- The **Admin** pages (Articles management, New Article Form, and Edit Article Form) are password-protected.
- The admin login process requires a valid username and password (in a production app the credentials would never be shared in a repository - but this is just a testing project):

      username: zofp
      password: Testpassword-8564!

📝 **Note**: In a production-ready app, the credentials would never be shared in a repository — let alone a public repository!  
However, for this project it is okay as it serves only for testing purposes.

## 🐞 ‼️ Known issues ‼️

- The app features concerning article comments and their upvoting/downvoting are currently **NOT** working.  
  This is because on every API request to the corresponding endpoints, an error is thrown (status 500). Once the API is fixed, these features will work again.

## 🧪 Tech stack considerations

- The project uses a number of `eslint` plugins for sorting imports and will not allow unused imports.
- "Barrel files" are used for utility reasons to re-export contents of other files. This might impact performance — for the purposes of this project it should not introduce a huge overhead.
- `fetch` is used in favor of `axios` due to its superior caching abilities (including revalidation semantics) out of the box — the official NextJS [recommended way](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching). The `axiosBase.ts` file shows basic config if `axios` were used instead.

## 🌱 Possible improvements

- 📄 Add pagination for article list/table
- 📱 Add responsivity of pages for mobile devices
- 🖼️ Add image picker to create/edit article page
- ⏳ Add prettier loading indicators
- 🖌️ Add prettier image placeholders/loading indicators
