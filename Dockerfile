FROM --platform=linux/amd64 node:16.8 as builder

ENV TZ=Asia/Saigon
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Create app directory
WORKDIR /app
#ENV NODE_ENV production
ENV NODE_OPTIONS="--max_old_space_size=4096"

# Install app dependencies
COPY package*.json ./

RUN npm install --no-optional

# Bundle app source
COPY . .

RUN npm run build

FROM --platform=linux/amd64 nginx:1.17.1-alpine-perl
RUN apk add bash

WORKDIR /app
COPY --from=builder /app/docker_start.sh .
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/docker/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/docker/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["bash", "./docker_start.sh"]