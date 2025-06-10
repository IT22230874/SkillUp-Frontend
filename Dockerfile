# # Build stage
# FROM node:alpine3.18 as build

# # Declare build time environment variables
# ARG REACT_APP_NODE_ENV
# ARG REACT_APP_SERVER_BASE_URL

# # Set default values for environment variables
# ENV REACT_APP_NODE_ENV=$REACT_APP_NODE_ENV
# ENV REACT_APP_SERVER_BASE_URL=$REACT_APP_SERVER_BASE_URL

# # Build App
# WORKDIR /app
# COPY package.json .
# RUN npm install
# COPY . .
# RUN npm run build

# # Serve with Nginx
# FROM nginx:1.23-alpine
# WORKDIR /usr/share/nginx/html
# RUN rm -rf *
# COPY --from=build /app/build .
# EXPOSE 80
# ENTRYPOINT ["nginx", "-g", "daemon off;"]

# Build stage
FROM node:18-alpine as build

# Accept Vite environment variable
ARG VITE_API_URL

# Set working directory
WORKDIR /app

# Install dependencies and build app
COPY package.json package-lock.json ./
RUN npm install
COPY . .

# Vite will use VITE_API_URL during build
RUN npm run build

# Production stage: serve with Nginx
FROM nginx:1.23-alpine

# Clean default nginx content
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*

# Copy built Vite site
COPY --from=build /app/dist .

# Optional: Custom nginx config (if needed)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose HTTP port
EXPOSE 80

# Start nginx
ENTRYPOINT ["nginx", "-g", "daemon off;"]
