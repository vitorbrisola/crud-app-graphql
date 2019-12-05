#define the latest nodejs image  to build from
FROM node:latest

#create a working directory
WORKDIR /usr/app/app

#copy package.json file under the working directory 
COPY package*.json ./

# install all the dependencies 
RUN npm install --no-optional
 
#copy all your files under the working directory
COPY . .

#expose the port 4000
EXPOSE 3000
    
#start nodejs server 
CMD ["npm","start"]