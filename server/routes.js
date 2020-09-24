const { primeFactors } = require('./prime');
const { romanConverter } = require('./roman');
const { evalFizzbuzz } = require('./fizzbuzz');
const view = require('./static/static');
const { read } = require('fs');

const routes = (req, res) => {
    const queryString = req.url.split('?')[1];
    const key = queryString ? queryString.split('=')[0] : '';
    const value = queryString ? queryString.split('=')[1] : '';
    
    if (req.url === '/') {
        view.staticFiles(req, res, 'ourPage.html', 'text/html');
    } else if (req.url === '/style.css') {
        view.staticFiles(req, res, 'style.css', 'text/css');
    } else if (req.url === '/script.js') {
        view.staticFiles(req, res, 'script.js', 'text/html');
    } else if (key === 'prime') {
        res.writeHead(200, {
            "Content-Type": "application/json"
        })   
        const data = primeFactors(value);
        res.end(JSON.stringify({body: data}));
    } else if (key === 'fizzbuzz') {
        res.writeHead(200, {
            "Content-Type": "application/json"
        })        
        const data = evalFizzbuzz(value);
        res.end(JSON.stringify({body: data}));
    } else if (key === 'roman') {
        res.writeHead(200, {
            "Content-Type": "application/json"
        })   
        const data = romanConverter(value);
        res.end(JSON.stringify({body: data}));
    } else {
        res.statusCode = 404;
        res.end();
    }
}

module.exports.routes = routes;