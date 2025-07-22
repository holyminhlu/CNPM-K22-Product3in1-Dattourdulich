# Build stage
FROM node:18 AS build-stage
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Production stage
FROM nginx:1.28
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf