# Project: products

CRUD operations for a price table. Frontend built in React + Typescript and Backend with Django.

## Instructions to run the project

- Clone this repository to your local machine.

### Backend

- Navigate to 'backend' directory.
- Create and activate your virtual environment (e.g., 'python -m venv venv' and 'source venv/bin/activate' on Linux/macOS or 'python -m venv venv' and 'venv\Scripts\activate' on Windows).
- Run 'pip install -r requirements.txt' to install the required libraries.
- Create your database by executing the appropriate command for your database management system (e.g., for PostgreSQL: 'CREATE DATABASE your_database_name;').
- Create your .env file and populate it with information from '.env.example'.
- Run migrations with 'python manage.py migrate'.
- Start the application with 'python manage.py runserver'.

### Frontend

- Navigate to the 'frontend' directory.
- Create a .env file and populate it with information from '.env.example'.
- Install the required libraries from 'package.json' by running either 'yarn install' or 'npm install'.
- Launch the application using 'yarn dev' or 'npm run dev'.
