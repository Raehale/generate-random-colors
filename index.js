const colorsEl = document.getElementById('colors');



let color = '#000000'.replace('0',function(){
  return (~~(Math.random()*16)).toString(16).padStart(6, '0')
});

function* generator() {
  while (true) {
    let color = '#000000'.replace(/0/g,function(){
      return (~~(Math.random()*16)).toString(16)
    });
    yield color;
  }
  
}

const hexGen = generator();

changeColors();

document.getElementById('nextColorButton').addEventListener('click', () => {
  changeColors();
});

function changeColors(){
  const colorOne = hexGen.next().value;
  const colorTwo = hexGen.next().value;
  const colorThree = hexGen.next().value;
  const colorFour = hexGen.next().value;
  const colorFive = hexGen.next().value;
  const colorSix = hexGen.next().value;

  document.getElementById('color1Text').textContent = colorOne;
  document.getElementById('color1Display').style.backgroundColor = colorOne;

  document.getElementById('color2Text').textContent = colorTwo;
  document.getElementById('color2Display').style.backgroundColor = colorTwo;

  document.getElementById('color3Text').textContent = colorThree;
  document.getElementById('color3Display').style.backgroundColor = colorThree;

  document.getElementById('color4Text').textContent = colorFour;
  document.getElementById('color4Display').style.backgroundColor = colorFour;

  document.getElementById('color5Text').textContent = colorFive;
  document.getElementById('color5Display').style.backgroundColor = colorFive;

  document.getElementById('color6Text').textContent = colorSix;
  document.getElementById('color6Display').style.backgroundColor = colorSix;
}

colorsEl.addEventListener('dblclick', (event) => {
  console.log(event.target.id)
})
