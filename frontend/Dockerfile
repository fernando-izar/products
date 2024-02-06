#node img
FROM node:18.17.1

#set workdir
WORKDIR /app

#copy package.json
COPY package.json /app/package.json

#install dependencies
RUN yarn install

#copy all files
COPY . /app

#expose port
EXPOSE 5173

#run server
CMD ["yarn", "dev"]
