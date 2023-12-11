// app.js
function getChannelVideos() {
  const apiKey = 'AIzaSyDUiqXdXghTDBwmfgUJyUKbCm2dg3ndrIE';
  const channelInput = document.getElementById('channelInput').value;
  const apiUrl = https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelInput}&type=video&apiKey
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const youtubeDataElement = document.getElementById('youtubeData');
      if (data.error) {
        youtubeDataElement.innerHTML = <p>Error: ${data.error.message}</p>;
      } else {
        const videos = data.items;
        youtubeDataElement.innerHTML = '<h2>Channel Videos</h2>';
        videos.forEach(video => {
          youtubeDataElement.innerHTML += <p>${video.snippet.title}</p>;
        });
      }
    })
    .catch(error => console.error('Error fetching data:', error));
}
