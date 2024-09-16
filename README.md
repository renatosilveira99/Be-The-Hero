# Be The Hero

**Be The Hero** is a full-stack application developed during the OmniStack 11 week offered by [Rocketseat](https://rocketseat.com.br). The application enables NGOs to register incidents and connect with potential heroes (users) willing to help resolve those incidents. The project covers the complete development stack, from database setup with SQLite, backend with Express, web frontend with ReactJS, to the mobile app with React Native.

<img src="/bethehero.jpeg" alt="Be The Hero Screenshot" />

## Features

- **NGO Registration**: Register new NGOs to manage incidents.
- **Incident Management**: Create, list, and delete incidents.
- **Connect Heroes**: Potential heroes can view incidents and reach out to help.
- **Full-Stack Development**: Backend, web, and mobile apps integrated for a seamless experience.
- **Responsive Mobile App**: Optimized for both Android and iOS using React Native.

## Technologies Used

### Backend
- **Node.js**: JavaScript runtime used for the server.
- **Express**: Fast and minimalist web framework for Node.js.
- **SQLite**: Lightweight database for development.
- **Knex**: SQL query builder for handling migrations and database interactions.
- **Jest**: Testing framework for unit tests.

### Frontend (Web)
- **React.js**: A JavaScript library for building user interfaces.
- **Axios**: HTTP client for API requests.

### Mobile
- **React Native**: Framework for building native mobile apps using React.
- **Expo**: Set of tools to streamline React Native development.
- **Axios**: HTTP client for API requests on mobile.

## Installation

To set up and run the application locally, follow the steps below for the backend, frontend (web), and mobile.

### 1. Backend

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd backend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run migrations:**

   ```bash
   npx knex migrate:latest
   ```

4. **Start the backend server:**

   ```bash
   npm start
   ```

### 2. Frontend (Web)

1. **Navigate to the frontend folder:**

   ```bash
   cd frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the frontend development server:**

   ```bash
   npm start
   ```

### 3. Mobile

1. **Navigate to the mobile folder:**

   ```bash
   cd mobile
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the mobile app:**

   Using Expo for Android or iOS:

   ```bash
   npx expo start
   ```

4. **Ensure Backend Connection**: Make sure the mobile app is connected to the backend API by configuring the base URL for API requests in the mobile code.

## Project Structure

- **backend/**: Express server with API routes and database interactions.
- **frontend/**: ReactJS web application for NGO incident management.
- **mobile/**: React Native mobile app for connecting heroes with incidents.

## Acknowledgments

Thanks to Rocketseat for the great learning experience during the OmniStack 11 week.
