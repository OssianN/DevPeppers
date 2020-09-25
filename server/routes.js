const { primeFactors } = require('./api/prime');
const { romanConverter } = require('./api/roman');
const { evalFizzbuzz } = require('./api/fizzbuzz');

const routes = (req, res) => {
  const queryString = req.url.split('?')[1];
  const key = queryString ? queryString.split('=')[0] : '';
  const value = queryString ? queryString.split('=')[1] : '';

  if (key === 'prime') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const data = primeFactors(value);
    res.end(JSON.stringify({ body: data }));
  } else if (key === 'fizzbuzz') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const data = evalFizzbuzz(value);
    res.end(JSON.stringify({ body: data }));
  } else if (key === 'roman') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const data = romanConverter(value);
    res.end(JSON.stringify({ body: data }));
  }
};

module.exports.routes = routes;
