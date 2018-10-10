$(document).ready(onReady);

function onReady() {
    // load data from the server, put it on the DOM
    getArtistData();
    getSongData();    
}

// get artist data from the server
function getArtistData() {
    $.ajax({
        type: 'GET',
        url: '/artist'
    }).then(function (response) {
        // append data to the DOM
        for (let i = 0; i < response.length; i++) {
            let artist = response[i];
            $('#artistTableBody').append(`
                <tr>
                    <td>${artist.name}</td>
                    <td>${artist.born}</td>
                    <td>${artist.died}</td>
                </tr>
            `);
        }
    });
}

// get song data from the server
function getSongData() {
    $.ajax({
        type: 'GET',
        url: '/song'
    }).then(function (response) {
        // append data to the DOM
        for (let i = 0; i < response.length; i++) {
            let song = response[i];
            $('#songTableBody').append(`
                <tr>
                    <td>${song.title}</td>
                    <td>${song.artist}</td>
                </tr>
            `);
        }
    });
}