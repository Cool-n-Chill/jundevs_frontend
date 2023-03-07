#for development

FROM node:lts-alpine3.17 as dev-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .

EXPOSE 3000

CMD [ "npm", "run", "dev" ]


#for prod

# FROM node:lts-alpine3.17 as build-stage
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY ./ .
# RUN npm run build

# FROM nginx:stable-alpine
# EXPOSE 3000
# RUN mkdir /app
# COPY /nginx.conf /etc/nginx/conf.d/default.conf
# COPY --from=build-stage /app/dist /app
# ENTRYPOINT ["nginx", "-g", "daemon off;"]