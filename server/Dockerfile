FROM node:alpine

# create working dir inside container
WORKDIR /server/app

# copy package.json inside working dir (aka /app)
COPY ./package*.json ./

# install dependencies inside container
RUN yarn install

# copy project files inside working dir (aka /app)
COPY . ./

# expose port
EXPOSE 8080

# run command once container is up to start server
CMD ["yarn", "dev"]