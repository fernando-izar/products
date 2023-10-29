# Project: price_table

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

## Question Answers

> 1. What would be your first improvements if you had more implementaion time?

- Create a login page for access control.
- Allow update products list fields from the table.
- Enable the creation and updating of categories.
- Enhance the design to provide a better user experience.
  > 2. Thinking about your solution, how would maintanance be in case of adding new product categories? What would be to be changed?
- In this project, the categories are stored in a separate table from the products to facilitate their maintainence.
  > 3. What changes would need to be made to support updates in the product category's discount percentage so that whenever the discount percentage was changed, the new price would be reflected in all products of the same category?
- In this project, the categories are created in a separate table from the products, reffered to through a 1:N relation and the discounts are stored in a column on this table. Therefore, it's possible to update only the discount field to update all promotional prices in the project. Additionally, there is no column in the project's table fixes the promotional prices; insted, the backend provides this information in a respective response.
