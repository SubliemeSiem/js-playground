    function openPage(page, setHistory) {
        // get the response of the route using AJAX
        ajax.get(`/${page}`).then(function(succes) {
                // parse the JSON string to an object
                const response = JSON.parse(succes.response);

                // use the parsed response to fill the div with the content
                document.title = response.title;
                document.getElementById('page-title').innerText = response.title;
                document.getElementById('main-content').innerHTML = response.html;
                if (setHistory) {
                    history.pushState({ page: response.title }, response.title);
                }
                const pageButton = document.getElementById(page);
                if (pageButton) {
                    pageButton.classList.toggle("active", true);
                }
                document.querySelectorAll(`.pagelink:not(#${page})`).forEach(x => x.classList.toggle("active", false));
            },
            function(failure) {
                alert(failure);
            }).catch(function(error) {
            alert(error);
        })
    }

    function onPageLoad(newFunction) {
        if (window.attachEvent) {
            window.attachEvent('onload', newFunction);
        } else {
            if (window.onload) {
                var curronload = window.onload;
                var newonload = function(evt) {
                    curronload(evt);
                    newFunction(evt);
                };
                window.onload = newonload;
            } else {
                window.onload = newFunction;
            }
        }
    }

    window.addEventListener('popstate', function(e) {
        if (e.state) {
            openPage(e.state.page);
        }
    });

    onPageLoad(history.replaceState({ page: "index" }, "js playground"));