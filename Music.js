// app.js
const API_KEY = 'AIzaSyDUiqXdXghTDBwmfgUJyUKbCm2dg3ndrIE';

function searchYouTube() {
    const searchTerm = document.getElementById('search-input').value;
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&part=snippet&type=video&key=${AIzaSyDUiqXdXghTDBwmfgUJyUKbCm2dg3ndrIE}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayResults(data.items))
        .catch(error => console.error('Error:', error));
}

function displayResults(items) {
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = '';

    items.forEach(item => {
        const videoId = item.id.videoId;
        const title = item.snippet.title;
        const thumbnailUrl = item.snippet.thumbnails.medium.url;

        const resultItem = document.createElement('div');
        resultItem.className = 'result-item';
        resultItem.innerHTML = `
            <img src="${thumbnailUrl}" alt="${title}">
            <p>${title}</p>
            <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank">Watch on YouTube</a>
        `;

        resultsContainer.appendChild(resultItem);
    });
}
