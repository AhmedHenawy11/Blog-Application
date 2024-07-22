# Use the official Node.js image based on Alpine Linux
FROM node:alpine

# Create and set the working directory
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies including nodemon
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application using nodemon
CMD ["npx", "nodemon", "app.js"]
