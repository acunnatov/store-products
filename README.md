```markdown
# Store Products Application

A modern web app for managing store products, built with React (frontend) and Express.js (backend).

## Features

- Display, add, and filter products by availability
- Pagination for product list

## Technologies

- **Frontend:** HTML, CSS, JavaScript, Bootstrap 4, Font Awesome, Axios
- **Backend:** Node.js, Express.js, MongoDB

## Setup and Installation

### Prerequisites

- Node.js and npm
- MongoDB

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/store-products.git
   cd store-products
   ```

2. **Backend Setup:**

   ```bash
   cd backend
   npm install
   ```

   Create a `.env` file with:

   ```plaintext
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```

   Start the server:

   ```bash
   npm start
   ```

3. **Frontend Setup:**

   ```bash
   cd ../frontend
   npm install
   npm start
   ```

## Usage

- Open your browser and go to `http://localhost:3000`
- Use the interface to manage products

## API Endpoints

- **GET /api/products:** Fetch all products
- **POST /api/addProduct:** Add a new product



