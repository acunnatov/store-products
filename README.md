# Store Products

Store Products is a web application for managing product data. It includes a frontend interface for viewing, adding, and filtering products, and a backend API built with Node.js and Express.

## Getting Started

### Prerequisites

- Node.js installed on your machine
- MongoDB installed and running locally or a connection to a MongoDB database

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd store-products
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory with the following variables:

   ```plaintext
   PORT=5001
   MONGO_URI=<your-mongodb-connection-uri>
   ```

### Starting the Backend Server

1. **Run the server**

   ```bash
   npm start
   ```

   This will start the backend server at `http://localhost:5001`.

### Using the Frontend Interface

1. **Open the application**

   - Open `index.html` in your browser to access the frontend interface.

2. **View and manage products**

   - Filter products by clicking on "All", "Available", or "Not Available".
   - Navigate through the paginated list of products.
   - Click "Create Product" to add a new product using the modal form.

### Project Structure

- **Backend (`server.js`):**
  - Express server setup with middleware (body-parser, CORS, helmet).
  - MongoDB connection and API routing.

- **Frontend (`index.html`, `styles.css`, `scripts.js`):**
  - HTML/CSS for UI structure and styling.
  - JavaScript for dynamic interaction with backend API (fetching data, handling events).

### Additional Notes

- Customize frontend and backend code as per specific requirements.
- Ensure MongoDB is properly configured and running for data storage.
- Modify environment variables (`PORT`, `MONGO_URI`) based on your setup.

