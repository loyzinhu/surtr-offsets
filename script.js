// Função para carregar conteúdo
function loadContent(fileName, contentId) {
    fetch(`offsets/${fileName}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('404 - File not found');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(contentId).textContent = data.trim();
        })
        .catch(error => console.error('Error loading content:', error));
}

// Função para copiar texto
function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

// Lidar com o botão "Roblox"
document.getElementById('robloxButton').addEventListener('click', function() {
    document.getElementById('robloxBox').classList.add('show');
    document.getElementById('robloxButton').style.display = 'none';
    document.getElementById('returnButton').style.display = 'inline-block';
    document.getElementById('copyButton').style.display = 'inline-block';
    loadContent('roblox.txt', 'robloxContent');
});

// Lidar com o botão "Return"
document.getElementById('returnButton').addEventListener('click', function() {
    document.getElementById('robloxBox').classList.remove('show');
    document.getElementById('robloxButton').style.display = 'inline-block';
    document.getElementById('returnButton').style.display = 'none';
    document.getElementById('copyButton').style.display = 'none';
});

// Copiar conteúdo para a área de transferência
document.getElementById('copyButton').addEventListener('click', function() {
    const content = document.getElementById('robloxContent').textContent.trim();
    copyToClipboard(content);
    alert('Offsets copied to clipboard!');
});
