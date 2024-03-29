#!/usr/bin/env sh
# abort on errors
set -e
# build
npm run build
# navigate into the build output directory
cd dist
# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
git init
git config user.email "martin.y.stoev@gmail.com"
git config user.name "Martin Stoev"
git add -A
git commit -m 'deploy'
git push -f https://github.com/mystoev/biscuit-machine.git main:gh-pages
cd -