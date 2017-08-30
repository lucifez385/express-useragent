const express =  require('express')
const server = express()
const useragent = require('express-useragent');
const PORT = 4001

server.use(useragent.express())
server.get('/', function(req, res){
  let imagePath = ''
  if (req.useragent.isMobile) {
     imagePath = 'isMobile'
    
  }else if(req.useragent.isDesktop){
     imagePath = 'isDesktop'
  }
  res.send(imagePath)
})

server.get('/checkuseragent', function(req, res){
  res.send(req.useragent)
})


server.listen(PORT, function () {
  console.log(`Example server listening on port ${PORT}!`)
})