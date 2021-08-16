const toggleSwitch = document.querySelector("input[name=checkbox]");
const cards = document.getElementById('cards')


toggleSwitch.addEventListener('change', ()=>{
    console.log('switch')
    cards.classList.toggle("monthly-switch")
})