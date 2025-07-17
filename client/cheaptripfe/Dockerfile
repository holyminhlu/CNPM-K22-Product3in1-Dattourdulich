# Stage 1: Build the app
FROM node:18-alpine AS build-stage

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:stable-alpine AS production-stage

# ✅ Cài font Liberation Sans (tương đương Arial)
RUN apk add --no-cache font-liberation ttf-dejavu

# Copy built files from build-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copy custom nginx config (nếu có)
# Nếu bạn để nginx.conf trong thư mục nginx/, dùng dòng sau:
# COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]