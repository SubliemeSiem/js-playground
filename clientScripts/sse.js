if (!!window.EventSource) {
    var source = new EventSource('/stream')

    source.addEventListener('message', function(e) {
        data = JSON.parse(e.data);
        document.getElementById('main-content').innerHTML += `<div>${e.data}</div>`;
    }, false)

    source.addEventListener('open', function(e) {}, false);

    source.addEventListener('error', function(e) {
        if (e.target.readyState == EventSource.CLOSED) {} else if (e.target.readyState == EventSource.CONNECTING) {};
    }, false);
} else {
    console.log("This browser doesn't support SSE")
}