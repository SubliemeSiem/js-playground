function openPage(page) {
    document.getElementById(page).classList.toggle("active", true);
    document.querySelectorAll(`.pagelink:not(#${page})`).forEach(x => x.classList.toggle("active", false));
    // get the response of the route using AJAX
    ajax.get(`/${page}`).then(function(succes) {
            // parse the JSON string to an object
            const response = JSON.parse(succes.response);

            // use the parsed response to fill the div with the content
            document.title = response.title;
            document.getElementById('main-content').innerHTML = response.html;
        },
        function(failure) {

        }).catch(function(error) {

    })
}