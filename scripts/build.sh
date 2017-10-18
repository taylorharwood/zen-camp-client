#!/usr/bin/env bash

if [ NODE_ENV == 'production' ]; then
    npm install -g webpack
    webpack
fi
