const writeButton = document.getElementById('write');
const resultDiv = document.getElementById('result');

writeButton.addEventListener('click', async () => {
    const success = await window.fileAPI.writeFile('file.txt', 'Hello, World!');
    writeButton.innerText = success ? 'Success!' : 'Failed!';
});
