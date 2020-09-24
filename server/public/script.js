document.querySelector('#fizzInput').addEventListener('keydown', () => {
    const result = document.querySelector('#resultat');
    const fizzInput = document.querySelector('#fizzInput').value;
    fetch(`http://localhost:3000/?fizzbuzz=${fizzInput}`)
    .then(res => res.json())
    .then(data => {
        result.innerText = data.body;
        console.log(data);
    })
})



document.querySelector('#fizzButton').addEventListener('click', () => {
    const result = document.querySelector('#resultat');
    const fizzInput = document.querySelector('#fizzInput').value;
    fetch(`http://localhost:3000/?fizzbuzz=${fizzInput}`)
        .then(res => res.json())
        .then(data => {
            result.innerText = data.body;
            console.log(data);
        })
});

document.querySelector('#primeButton').addEventListener('click', () => {
    const result = document.querySelector('#resultat');
    const primeInput = document.querySelector('#primeInput').value;
    fetch(`http://localhost:3000/?prime=${primeInput}`)
        .then(res => res.json())
        .then(data => {
            result.innerText = data.body;
            console.log(data);
        })
});

document.querySelector('#romanButton').addEventListener('click', () => {
    const result = document.querySelector('#resultat');
    const romanInput = document.querySelector('#romanInput').value;
    fetch(`http://localhost:3000/?roman=${romanInput}`)
        .then(res => res.json())
        .then(data => {
            result.innerText = data.body;
            console.log(data);
        })
})

