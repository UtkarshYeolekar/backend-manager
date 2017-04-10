FROM node:6-alpine

RUN mkdir "/home/app"

ENV app="/home/app"

COPY "package.json" "$app"

WORKDIR "$app"

RUN npm install --production

COPY "app.js" "$app"

COPY "src" "$app/src"

EXPOSE 8080

CMD ["node", "app.js"]