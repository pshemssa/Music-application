const resultContainer = document.getElementById("result-container");
const searchButton = document.getElementById("search-button");
const youtubeApiKey = "https://rapidapi.com/cavsn/api/youtube-music-api-detailed/"; // Replace with your actual YouTube Data API key

searchButton.addEventListener("click", searchVideo);

function searchVideo() {
  const songName = document.getElementById("song-name").value;
  resultContainer.innerHTML = "Searching...";
  
  const apiUrl = `https://www.googleapis.com/youtube/v3/search?q=${encodeURIComponent(songName)}&key=${https://rapidapi.com/cavsn/api/youtube-music-api-detailed/}&part=snippet&type=video`;
  
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if (data.items.length > 0) {
        const videoInfo = data.items[0].snippet;
        const videoTitle = videoInfo.title;
        const videoId = data.items[0].id.videoId;
        
        const resultHTML = `
          <h2>${videoTitle}</h2>
          <p>Video ID: ${videoId}</p>
          <p>Watch on YouTube: <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank">Watch Now</a></p>
        `;
        
        resultContainer.innerHTML = resultHTML;
      } else {
        resultContainer.innerHTML = "No results found.";
      }
    })
    .catch(error => {
      console.error("An error occurred:", error);
      resultContainer.innerHTML = "An error occurred while fetching data.";
    });
}
