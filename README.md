# js-playground

A project to play around with *JavaScript* in *Node.js*. Will feature various common design patterns and libraries, and shows how you can host js, css and html files using Node.js.

## Contents:
- [x] express 
  - [x] [set up](start.js)
  - [x] [routers](routers/))
- [x] [using middleware](start.js)
- [ ] your own middleware
  - [ ] [creating it](core/sse,js)
  - [ ] [using it](start.js)
- [ ] server-sent events
  - [x] set it up
    - [x] [client](clientScripts/sse.js)
    - [x] [ie polyfill](clientScripts/sse-ie.js)
    - [x] [server](core/sse.js)
  - [ ] send from the server
  - [ ] read from the client
- [ ] using a "let's encrypt" sll certificate and automatically updating it
- [ ] js DOM selectors (no jQuery)
  - [ ] by id
  - [ ] by tag
  - [ ] by class
  - [ ] first in a specified query
  - [ ] all in a specified query
- [ ] AJAX calls without jQuery
  - [x] [set up script](clientScripts/ajax.js)
  - [x] [use](clientScripts/main.js)
- [x] [using express static folders to host client js files](start.js)
- [ ] dynamically create a script block and serve it through a route as a file
- [ ] using express routers to route http requests:
  - [x] [get](routers/pages/index.js)
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
  - [x] [HTML views using responsive CSS](views)
- [ ] JSON models
- [ ] mongodb
- [ ] Promises
  - [x] [create](clientScripts/ajax.js)
  - [ ] use
- [x] [map](routers/pages/index.js)
- [ ] reduce
- [ ] error handling
- [ ] logging
- [ ] minify and concatenate client scripts and style sheets
- [x] [add web app manifest](public/manifest.json)
- [x] [add a favicon.ico](start.js)
- [x] manipulate browser history
  - [x] [create history entries](clientScripts/main.js)
  - [x] [recover history entries](clientScripts/main.js)
- [x] add a service worker (for offline caching)
  - [x] [worker script](public/serviceworker.js)
  - [x] [installation](clientScripts/main.js)

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