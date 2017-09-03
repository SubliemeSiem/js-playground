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
                res.write("data: " + JSON.stringify(data) + "\n\n");
            }

            next();
        },
        setupConnection: function(req, res, data) {
            res.sseSetup()
            res.sseSend(data)
            connections.push(res)
        },
        updateConnections: function(data) {
            for (let i = 0; i < connections.length; i += 1) {
                connections[i].sseSend(data);
            }
        }
    }
})();