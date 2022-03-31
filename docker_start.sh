#!/usr/bin/env bash

cp -rf build/* /usr/share/nginx/html
nginx -g 'daemon off;'