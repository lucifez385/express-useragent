
# Fast Middleware exposing user-agent for [NodeJS](http://nodejs.org/)

express-useragent is a simple NodeJS/ExpressJS user-agent middleware exposing user-agent details to your application and views.

## Installation

```bash
    $ yarn
```
## Run
```bash
    $ yarn dev
```

## Check Useragent

http://localhost:4001/checkuseragent

```js
server.get('/checkuseragent', function(req, res){
  res.send(req.useragent)
})
```