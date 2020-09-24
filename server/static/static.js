const fs = require('fs');

const base = `${__dirname}/../public`;

function staticFiles(req, res, fileName, extension) {
  fs.readFile(`${base}/${fileName}`, 'utf8', (err, data) => {
    if (err) {
      console.error('It failed');
    } else {
      res.writeHead(200, { 'Content-Type': extension });
      res.end(data);
    }
  });
}

module.exports.staticFiles = staticFiles;
