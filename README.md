# biscuit-machine
My VueJS interpretation for the famous "Biscuit Machine" task

## Browse
https://mystoev.github.io/biscuit-machine/

## Run locally
```
nvm use
npm install
npm run serve
```
Then visit your http://localhost:8080/

## Dev Notes
 - Oven's initial temperature is 200, just so it's closer to 220 - the starting point of the machine
 - I added a "burned biscuits" functionality - if there are biscuits for more than 5s in the oven (while paused), they will be burned
 - The requirements are on the page, just so it's easier to compare and validate
 - I used VueJS, instead of Angular or React, because for a task of such scale I thought it would be easier to construct
 - I used a basic EventHub, instead of Vuex, since it's faster to prototype. For a different project I might choose Vuex
 - All movements (motor rotation, animations, oven heating and cool down) are based on 1s intervals