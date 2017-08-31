# js-playground

A project to play around with *JavaScript* in *Node.js*. Will feature various common design patterns and libraries, and shows how you can host js, css and html files using Node.js.

## Contents:
- [x] express (./index.js:5-40, ./routers/)
- [x] using middleware (./index:15-22)
- [ ] your own middleware
  - [ ] creating it
  - [ ] using it
- [ ] js DOM selectors (no jQuery)
- [ ] AJAX calls without jQuery
  - [x] set up (./clientScripts/ajax.js)
  - [ ] use
- [x] using express static folders to host client js files (./index.js:25-27)
- [ ] using express routers to route http requests:
  - [x] get
  - [ ] post
- [ ] combining AJAX calls with express routing
  - [ ] get
  - [ ] post
- [x] responsive css (stylesheet only)
- [ ] HTML views using responsive CSS
- [ ] JSON models
- [ ] mongodb
- [ ] Promises
  - [x] create (./clientScripts/ajax.js)
  - [ ] use
- [x] map (./routers/index:4)
- [x] reduce
- [ ] error handling
- [ ] logging

## Running the code

You can run the following commands in your shell to get and run the code:
```bash
$ git clone https://github.com/SubliemeSiem/js-playground.git
$ cd js-playground
$ npm install
$ node index [portnumber]
```
where [portnumber] is the port which you want express to listen to (defaults to 4000 when left blank). To visit the page, browse to http://localhost:[portnumber]. 
To see the mobile or tablet version, browse to http://[ip]:[portnumber],
where [ip] is the ip address of the system running Node.js, using a phone or tablet that is connected to the same network.