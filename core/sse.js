module.exports = (function() {
    const connections = [];
    return {
        middleware: function(req, res, next) {
            res.sseSetup = function() {
                res.writeHead(200, {
                    'Content-Type': 'text/event-stream',
                    'Cache-Control': 'no-cache',
                    'Connection': 'keep-alive'
                })
            }

            res.sseSend = function(data) {
                res.write("data: " + JSON.stringify(data) + "\r\n\r\n");
                res.flush();
            }

            next();
        },
        setupConnection: function(req, res, data) {
            res.sseSetup();
            res.sseSend(data);
            connections.push(res);

            req.on("close", function() {
                // request closed unexpectedly
                if (connections.indexOf(res) >= 0) {
                    connections.splice(connections.indexOf(res), 1);
                }
            });

            req.on("end", function() {
                if (connections.indexOf(res) >= 0) {
                    connections.splice(connections.indexOf(res), 1);
                }
            });

            // prevent err_incomplete_chunked_encoding
            setInterval(function() {
                res.sseSend({ action: "keep-alive" });
            }, 60000)
        },
        updateConnections: function(data) {
            for (let i = 0; i < connections.length; i += 1) {
                connections[i].sseSend(data);
            }
        }
    }
})();