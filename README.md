# js-playground

A project to play around with *JavaScript* in *Node.js*. Will feature various common design patterns and libraries, and shows how you can host js, css and html files using Node.js.

## Contents:
- [x] express 
  - [x] [set up](index.js)
  - [x] [routers](routers/))
- [x] [using middleware](index.js)
- [ ] your own middleware
  - [ ] creating it
  - [ ] using it
- [ ] using a "let's encrypt" sll certificate and automatically updating it
- [ ] js DOM selectors (no jQuery)
- [ ] AJAX calls without jQuery
  - [x] [set up script](clientScripts/ajax.js)
  - [ ] use
- [x] [using express static folders to host client js files](index.js)
- [ ] dynamically create a script block and serve it through a route as a file
- [ ] using express routers to route http requests:
  - [x] [get](routers/index.js)
  - [ ] post
- [ ] combining AJAX calls with express routing
  - [ ] get
    - [ ] client-side call
    - [ ] server-side route
  - [ ] post
    - [ ] client-side call
    - [ ] server-side route
- [ ] responsive css
  - [x] [stylesheet](styles/core/responsive.css)
  - [ ] HTML views using responsive CSS
- [ ] JSON models
- [ ] mongodb
- [ ] Promises
  - [x] [create](clientScripts/ajax.js)
  - [ ] use
- [x] [map](routers/index.js)
- [ ] reduce
- [ ] error handling
- [ ] logging

## Running the code

You can run the following commands in your shell to get and run the code:
```bash
$ git clone https://github.com/SubliemeSiem/js-playground.git
$ cd js-playground
$ npm install
$ node start [portnumber]
```
where [portnumber] is the port which you want express to listen to (defaults to 4000 when left blank). To visit the page, browse to http://localhost:[portnumber]. 
To see the mobile or tablet version, browse to http://[ip]:[portnumber],
where [ip] is the ip address of the system running Node.js, using a phone or tablet that is connected to the same network.
To get ssl to work using let's encrypt, you'll need some sort of static address. This may be an address provided by a DDNS service, or a static ip address. Details about the configuration for let's encrypt can be found in (**not implemented yet**).