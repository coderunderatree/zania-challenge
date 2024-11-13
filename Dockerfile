# Step 1: Build the React app
FROM node:20-alpine AS build-stage

# Set the working directory
WORKDIR ./app

COPY package.json package-lock.json ./
# Install dependencies
RUN npm install

# Copy the rest of the React app
COPY . ./

# port to run the app on
EXPOSE 3000

# Set the environment variable for React to run in development mode
ENV NODE_ENV=development

# start the React app in dev mode
CMD ["npm", "start"]