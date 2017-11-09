#!/bin/bash

cwd=$(pwd)
project_name=zen-camp-client

docker build -t ${project_name} .

docker run \
    -v ${cwd}/src:/usr/src/app/src \
    -p 8081:8081 \
    --env-file .env \
    -e GRAPH_QL_SERVER_URL=http://localhost:8080/graphql \
    -it ${project_name} /bin/bash