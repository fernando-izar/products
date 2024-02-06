#img Python
FROM python:3.11.4

#define workdir
WORKDIR /app

#copy requirements
COPY requirements.txt /app/requirements.txt

#install requirements
RUN pip install -r requirements.txt

#copy all files
COPY . /app

#run server
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
