function fetchOffsetsFromAPI() {
    fetch('https://cors-anywhere.herokuapp.com/https://rbxstats.xyz/api/offsets/')
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return response.json();
        })
        .then(data => {
            const formattedOffsets = JSON.stringify(data, null, 4);
            document.getElementById('apiContent').innerText = formattedOffsets;
            document.getElementById('apiBox').classList.add('show');
            document.getElementById('copyButton').style.display = 'inline-block';
        })
        .catch(error => {
            console.error('Error fetching offsets:', error);
            document.getElementById('apiContent').innerText = 'Failed to fetch offsets. Please check the API or CORS settings.';
        });
}
