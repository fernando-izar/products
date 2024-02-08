# Project: Products

CRUD operations for a product price table. Frontend built with React + TypeScript and Backend with Django.

## Instructions to Run the Project

- Clone this repository to your local machine.

### Docker Option

- Install Docker on your machine.
- Create your `.env` file and populate it with information from `/backend/.env.example`.
- From the application root, run `docker-compose up`.
- Access the application at `localhost:5173` in your browser.

### Without Docker

#### Backend

- Navigate to the `backend` directory.
- Create and activate your virtual environment (e.g., `python -m venv venv` and `source venv/bin/activate` on Linux/macOS or `venv\Scripts\activate` on Windows).
- Install the required libraries with `pip install -r requirements.txt`.
- Create your database by executing the appropriate command for your database management system (e.g., for PostgreSQL: `CREATE DATABASE your_database_name;`).
- Create your `.env` file and populate it with information from `.env.example`.
- Run migrations with `python manage.py migrate`.
- **Create a superuser by running `python manage.py createsuperuser` and follow the prompts to set up a user admin.**
- Start the application with `python manage.py runserver`.

#### Frontend

- Navigate to the `frontend` directory.
- Create a `.env` file and populate it with information from `.env.example`.
- Install the required libraries from `package.json` by running `yarn install` or `npm install`.
- Launch the application using `yarn dev` or `npm run dev`.
