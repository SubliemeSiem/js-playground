const ajax = (function() {
    return {
        get: function(url, data) {
            return new Promise(function(resolve, reject) {
                const xhr = new XMLHttpRequest();
                const query = [];
                for (const key in data) {
                    query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
                }
                const request = url + (query.length ? '?' + query : '');
                xhr.open('GET', request, true);
                xhr.onload = function() {
                    if (xhr.status === 200) {
                        resolve(xhr);
                    } else {
                        reject(xhr);
                    }
                };
                xhr.send();
            });
        },
        post: function(url, data, contentType) {
            return new Promise(function(resolve, reject) {
                contentType = contentType || 'application/json';

                xhr = new XMLHttpRequest();
                xhr.open('POST', url, true);
                xhr.setRequestHeader('Content-Type', contentType);
                xhr.onload = function() {
                    if (xhr.status === 200) {
                        resolve(xhr);
                    } else {
                        reject(xhr.response);
                    }
                };

                if (contentType === 'application/json') {
                    xhr.send(JSON.stringify(data));
                } else if (contentType === 'application/x-www-form-urlendcoded') {
                    const query = [];

                    for (const key in data) {
                        query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
                    }

                    xhr.send(encodeURI(query.join('&')));
                } else {
                    xhr.send(data);
                }
            });
        }
    }
})();