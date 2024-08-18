# Purpose: Build Docker Image for the application
FROM node:14-alpine

# Install necessary packages
RUN apk add --no-cache shadow

# Create a group and user
RUN groupadd -r appgroup && useradd -r -g appgroup appuser

# Set the working directory
WORKDIR /usr/src/app

# Copy the current directory contents into the container at /usr/src/app
COPY . .

# Change ownership of the application files
RUN chown -R appuser:appgroup /usr/src/app

# Set the HOME environment variable to a directory with write permissions
ENV HOME=/usr/src/app

# Switch to the new user
USER appuser

# Install dependencies
COPY package*.json ./
RUN npm install

# Expose the new port
EXPOSE 8080

CMD ["node", "src/index.js"]
