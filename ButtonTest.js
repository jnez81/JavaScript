/* Create a simple HTTP server that serves an HTML page with a text input and 
a button. When the button is clicked, it will display an alert with the user's 
favorite baseball player's name and a random baseball stat.
*/
const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3005;

const randomStat = () => {
  const stats = [
    'batting average: .320',
    'home runs: 42',
    'RBIs: 118',
    'OPS: .945',
    'stolen bases: 31',
    'ERA: 3.12',
    'strikeouts: 204'
  ];

  return stats[Math.floor(Math.random() * stats.length)];
};

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

          const randomStat = () => {
            const stats = [
              'batting average: .320',
              'home runs: 42',
              'RBIs: 118',
              'OPS: .945',
              'stolen bases: 31',
              'ERA: 3.12',
              'strikeouts: 204'
            ];

            return stats[Math.floor(Math.random() * stats.length)];
          };

          submitButton.addEventListener('click', () => {
              const playerName = playerNameInput.value.trim();
              const stat = randomStat();
              const nameToDisplay = playerName || 'Unknown player';
              alert(\`Your favorite baseball player is: \${nameToDisplay}\nRandom stat: \${stat}\`);
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