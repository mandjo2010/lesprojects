FROM node:v18.20.4

WORKDIR /app
COPY package*.json ./
RUN apt-get update && apt-get install -y python2
RUN npm install --legacy-peer-deps
COPY . .

CMD ["npm", "start"]
