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
FROM nginx:1.17-alpine

# Configure nginx
ENV PORT 80
COPY docker-ui.nginx.conf /etc/nginx/conf.d/default.conf.template

# Copy artifacts to server
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Run config substitution on start
CMD /bin/sh -c "envsubst '\$PORT \$API_PROXY' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'
