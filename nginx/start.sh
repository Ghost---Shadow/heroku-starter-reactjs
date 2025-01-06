#!/bin/bash

sed -i "s/development/production/g" /usr/share/nginx/html/index.html

# Start nginx in the foreground
nginx -g "daemon off;"
