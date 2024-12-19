<img src="https://socialify.git.ci/Asanda001019/Task24/image?description=1&descriptionEditable=Recipe%20App%20RESTful%20API%0A&font=KoHo&language=1&name=1&owner=1&pattern=Formal%20Invitation&stargazers=1&theme=Dark" alt="Task24" width="640" height="320" />
<h1></h1> Recipe App RESTful API</h1>

This is a Node.js RESTful API for a Recipe App using MongoDB Atlas for data storage. The API allows users to manage recipes (create, read, update, delete) with features such as pagination and error handling.

## Prerequisites
- Node.js
- MongoDB Atlas account
- Postman/Insomnia for testing the API

## MongoDB Atlas Setup
1. Create a MongoDB Atlas cluster.
2. Obtain the connection string and replace `<username>` and `<password>` in `.env` file.

## Installation & Setup
1. Clone the repository and navigate to the project directory.
2. Install dependencies:
   ```bash
   npm install
Create a .env file with the following
MONGO_URI=mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/recipeapp
PORT=5000

Start the server:
bash

node server.js
API Endpoints
POST /api/recipes
Create a new recipe.

GET /api/recipes
Get all recipes.

GET /api/recipes/:id
Get a recipe by its ID.

PUT /api/recipes/:id
Update a recipe by its ID.

DELETE /api/recipes/:id
Delete a recipe by its ID.

Testing
Use Postman
