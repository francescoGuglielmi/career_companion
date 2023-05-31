#!/bin/bash

# Build the front-end
cd ./frontend
npm install
npm run start

# Build the back-end
cd ../api
npm install
JWT_SECRET=frankonsar npm run start
