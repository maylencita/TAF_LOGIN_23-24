FROM node:18

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

# CMD [ "node", "build/index.js" ]
CMD [ "npm", "run", "dev"]

EXPOSE 5000
