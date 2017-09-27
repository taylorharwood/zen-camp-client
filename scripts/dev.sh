#!/bin/bash

cwd=$(pwd)
project_name=zen-camp-client

docker build -t ${project_name} .

docker run \
    -v ${cwd}/src:/usr/src/app/src \
    -p 8081:8081 \
    --env-file .env \
    -it ${project_name} /bin/bash