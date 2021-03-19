# prisma-bundle-error

Steps to reproduce

clone, then

```shell
git clone https://github.com/ericyd/prisma-bundle-error.git
cd prisma-bundle-error
npm i
npx webpack build
DEBUG="*" node -r ./dist/index.js 
```

throws error:

```shell
/Users/me/dev/prisma-bundle-error/dist/index.js:129
const debug = debugLib('prisma-client')
              ^

TypeError: debugLib is not a function
    at Object../node_modules/.prisma/client/index.js (/Users/me/dev/prisma-bundle-error/dist/index.js:129:15)
    at __webpack_require__ (/Users/me/dev/prisma-bundle-error/dist/index.js:20:30)
    at Object../node_modules/@prisma/client/index.js (/Users/me/dev/prisma-bundle-error/dist/index.js:282:16)
    at __webpack_require__ (/Users/me/dev/prisma-bundle-error/dist/index.js:20:30)
    at Object../main.js (/Users/me/dev/prisma-bundle-error/dist/index.js:96:26)
    at __webpack_require__ (/Users/me/dev/prisma-bundle-error/dist/index.js:20:30)
    at Object.0 (/Users/me/dev/prisma-bundle-error/dist/index.js:35151:18)
    at __webpack_require__ (/Users/me/dev/prisma-bundle-error/dist/index.js:20:30)
    at /Users/me/dev/prisma-bundle-error/dist/index.js:84:18
    at Object.<anonymous> (/Users/me/dev/prisma-bundle-error/dist/index.js:87:10)
```

Node version: `v14.15.5`
NPM version: `6.14.11`
OS: Mac OSX Catalina `10.15.7`
