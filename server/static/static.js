const fs = require('fs');

const base = `${__dirname}/../public`;

function staticFiles(req, res, fileName, extension, statusCode = 200) {
  fs.readFile(`${base}/${fileName}`, 'utf8', (err, data) => {
    if (err) {
      console.error('It failed');
    } else {
      res.writeHead(statusCode, { 'Content-Type': extension });
      res.end(data);
    }
  });
}

module.exports.staticFiles = staticFiles;
