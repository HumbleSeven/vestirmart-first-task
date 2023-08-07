# Stage 1: Compile and build angular

# Use official node image as the base image
FROM node:18.17.0-alpine as build

# Copy all local files and folders to the /app
COPY . /app

#Change directory to the working directory(/app)
WORKDIR /app

# run npm install to install all packages
RUN npm install

# run the build version of the app
RUN npm run build

# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest

# Copy the build output to replace the default nginx contents.
COPY --from=build /app/dist/my-first-project /usr/share/nginx/html

# Expose port 80
EXPOSE 80



