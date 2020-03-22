### STAGE 1.1: Build frontend ###
FROM node:12.16-alpine AS build-frontend

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Copy app source files
COPY . .

# Build app
ARG VUE_APP_BACKEND_BASE_URL=/api/
RUN yarn build

### STAGE 1.2: Build backend ###
FROM node:12.16-alpine AS build-backend

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY mock/package.json mock/yarn.lock ./
RUN yarn install

# Copy app source files
COPY ./mock .

# Build app
RUN yarn build

### STAGE 2: Run ###
FROM node:12.16-alpine
ENV PORT 3000

# Set app directory
WORKDIR /usr/app

# Copy artifacts to server
COPY --from=build-backend /usr/src/app /usr/app
COPY --from=build-frontend /usr/src/app/dist /usr/app/public

EXPOSE 3000

# Run port substitution on start
CMD node dist/server.js
