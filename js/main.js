const resultId = document.getElementById('result');
const submitId = document.getElementById('submit');

function binary(element) {
  element.preventDefault();

  const numberId = document.getElementById('number').value;

  //   console.log(typeof numberId);/ ans : string;
  //   thats why I convert const numberId to a Number

  if (numberId === '') {
    alert('Please enter a positive number');
  } else if (number < 0) {
    alert('Please enter a positive number');
  } else {
    resultId.style.visibility = 'visible';
  }
  //converting
  const binaryNumber = Number(numberId).toString(2);
  resultId.innerText = binaryNumber;
}

submitId.addEventListener('click', binary);
