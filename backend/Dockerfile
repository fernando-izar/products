#img Python
FROM python:3.11.4

#Instala dockerize
RUN apt-get update && apt-get install -y wget && \
    wget https://github.com/jwilder/dockerize/releases/download/v0.6.1/dockerize-linux-amd64-v0.6.1.tar.gz && \
    tar -C /usr/local/bin -xzvf dockerize-linux-amd64-v0.6.1.tar.gz && \
    rm dockerize-linux-amd64-v0.6.1.tar.gz

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
