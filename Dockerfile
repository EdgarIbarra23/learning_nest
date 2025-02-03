# Use the official Node.js image as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./ 

# Install the application dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Download and set up wait-for-it.sh script
RUN curl -o /usr/local/bin/wait-for-it.sh https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh \
  && chmod +x /usr/local/bin/wait-for-it.sh

# Build the NestJS application
RUN npm run build

# Expose the application port
EXPOSE 8000

# Command to run the application (with wait-for-it.sh)
CMD ["sh", "-c", "/usr/local/bin/wait-for-it.sh db:3306 --timeout=90 --strict -- npm run migration:run && npm run start:dev"]
