# Use an official Node.js image with LTS version
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json before installing dependencies
COPY package*.json ./

# Install dependencies
RUN npm install -g @ionic/cli && npm install

# Copy the rest of the app files
COPY . .

# Expose the port used by the Ionic dev server
EXPOSE 8100

# Default command to start the Ionic app
CMD ["ionic", "serve", "--host", "0.0.0.0", "--port", "8100", "--external"]

