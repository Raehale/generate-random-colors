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

document.getElementById('nextColorButton').addEventListener('click', () => {
/*
Challenge:
    2. When the "Next Color" button is clicked, update 
       the textContent and backgroundColor attributes below.
*/ 
        const color = hexGen.next().value;
        console.log(color)
        document.getElementById('colorText').textContent = color
        document.getElementById('colorDisplay').style.backgroundColor = color
})
