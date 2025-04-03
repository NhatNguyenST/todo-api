FROM node:20-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm i 

# Bundle app source
COPY . .
RUN npm run build

# Run migrations
CMD npm run migration:run && npm run start:dev

EXPOSE 3000
