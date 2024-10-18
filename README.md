# Backend - Healthcare Provider API

This backend application is built using **Node.js** and **Express** to handle requests for a healthcare provider platform. The API interacts with a MongoDB database.

## Features

- Authentication for healthcare providers.
- Handles patient data and prior authorization requests.
- Pagination for patient data listings.
- Secure API using **JWT** for authentication.
  
## Installation and Setup

### Prerequisites
- **Node.js** 
- **MongoDB** database 

### Steps

1. Clone the repository:

    git clone https://github.com/Pranavtr25/patient_dashboard_backend.git
    

2. Navigate to the project directory:
    cd patient_dashboard_backend

3. Install the dependencies:
    npm install

4. Set up environment variables by creating a `.env` file in the root directory and including the following variables:

    MONGODB_URI=your-mongo-db-uri
    JWT_SECRET=your-jwt-secret

5. Run the server:
    npm start

6. The server should now be running at `http://localhost:3000`.

### Environment Variables

 Variable       Description                                        

 `PORT`         Port number (3000 is used as default)     
 `MONGODB_URI`  MongoDB connection string                          
 `JWT_SECRET`  Secret key for JWT token generation                

## API Endpoints

### **Authentication**
- **POST** `/login`
  - Authenticates the healthcare provider and returns a JWT.
  - **Request Body:**
    {
      "email": "provider@example.com",
      "password": "password123"
    }
  - **Response:**
    ```json
    {
      "token": "your-jwt-token"
    }
    ```

### **Patients**
- **GET** `/patients-list`
  - Fetches a paginated list of patients.
  - **Query Parameters:**
    - `page`: The page number (defaults to 1).
    - `limit`: The number of patients per page (defaults to 6).

- **GET** `/patients/:id`
  - Fetches details of a specific patient by ID.

### **Prior Authorization**
- **GET** `/authorization-list`
  - Fetches all prior authorization requests.
  - Populates the `patientId` with patient details.



