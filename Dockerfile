# Sets the base image of the application to the node’s official image.
FROM node:18

# Sets the Working Directory as "/server"
RUN mkdir -p /server
WORKDIR /server
# Copies the package.json file into "/server" and runs npm i
COPY package.json /server
RUN npm i
# Copies the entire source code into "/server"
COPY . /server

# Specifies the port the node app will be running on
EXPOSE 5001

# Runs "node server.js" after the above step is completed
CMD ["npm", "run", "dev"]