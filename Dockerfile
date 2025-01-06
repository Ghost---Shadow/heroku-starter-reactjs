# Step 1: Build the React application
FROM node:16 as build

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Build the app
RUN npm run build

# Step 2: Serve the app using Nginx
FROM nginx:stable-alpine

# Optionally customize Nginx configuration
COPY nginx/react.conf /etc/nginx/conf.d/default.conf
COPY nginx/start.sh start.sh

# Copy the built assets from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 3000 to the outside once the container has launched
EXPOSE 3000

# Define the command to run your app using CMD which defines your runtime
CMD ["sh", "start.sh"]
