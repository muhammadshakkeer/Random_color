const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn =document.getElementById('btn')
const color = document.querySelector('.color')

console.log(btn)
btn.addEventListener('click',()=>{
  let hexcode = '#'
  for(let i = 0; i< 6 ; i++){
    // give random number in index position
      hexcode += hex[randomNumberFunc()] 
    }


    document.body.style.backgroundColor = hexcode
    color.textContent = hexcode
})

const randomNumberFunc=()=> {
  return Math.floor(Math.random() * hex.length)
}

