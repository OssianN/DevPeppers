const onClickEvents = () => {
  const buttons = document.querySelectorAll('.assignment button');
  const inputs = document.querySelectorAll('.assignment input');
  const result = document.querySelector('.results');

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      fetch(`http://localhost:3000/?${inputs[index].className}=${inputs[index].value}`)
        .then(res => res.json())
        .then(data => {
          result.innerText = data.body;
        });
    });
  });
};

onClickEvents();
