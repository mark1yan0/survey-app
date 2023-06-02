FROM node:alpine

WORKDIR /client/app

# Copy dependency definitions
COPY ./package*.json ./

RUN yarn install

# Get all the code needed to run the app
COPY . ./

EXPOSE 3000

CMD ["yarn", "dev"]