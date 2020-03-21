### STAGE 1: Build ###
FROM node:12.16-alpine AS build

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Copy app source files
COPY . .

# Build app
RUN yarn build

### STAGE 2: Run ###
FROM node:12.16-alpine
ENV PORT 3000

# Set app directory
WORKDIR /usr/app

# Copy artifacts to server
COPY --from=build /usr/src/app /usr/app

EXPOSE 3000

# Run port substitution on start
CMD [ "node", "dist/server.js" ]
