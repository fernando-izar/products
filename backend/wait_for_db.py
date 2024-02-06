import os
import psycopg2
from time import sleep

def wait_for_db():
    db_host = os.getenv('POSTGRES_HOST')
    db_port = os.getenv('POSTGRES_PORT')
    db_name = os.getenv('POSTGRES_NAME')
    db_user = os.getenv('POSTGRES_USER')
    db_password = os.getenv('POSTGRES_PASSWORD')

    while True:
        try:
            conn = psycopg2.connect(
                dbname=db_name,
                user=db_user,
                password=db_password,
                host=db_host,
                port=db_port
            )
            conn.close()
            print("Database is ready!")
            break
        except psycopg2.OperationalError:
            print("Database is not ready yet. Waiting...")
            sleep(5)

if __name__ == "__main__":
    wait_for_db()