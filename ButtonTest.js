/* Create a simple HTTP server that serves an HTML page with a text input and 
a button. When the button is clicked, it will display an alert with the user's 
favorite baseball player's name.
*/
const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3005;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Favorite Baseball Player</title>
    </head>
    <body>
        <input id="playerName" type="text" placeholder="Enter your favorite baseball player's name">
        <button id="submitBtn">Submit</button>

        <script>
          const playerNameInput = document.getElementById('playerName');
          const submitButton = document.getElementById('submitBtn');

          submitButton.addEventListener('click', () => {
              const playerName = playerNameInput.value;
              alert(\`Your favorite baseball player is: \${playerName}\`);
          });
        </script>
    </body>
    </html>
  `);
});

// Start the server and listen on the specified hostname and port
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});