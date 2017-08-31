function openPage(page) {
    ajax.get(`/${page}`).then(function(succes) {
            const response = JSON.parse(succes.response);
            document.getElementById('main-content').innerHTML = response.html;
        },
        function(failure) {

        }).catch(function(error) {

    })
}