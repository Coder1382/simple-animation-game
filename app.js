const startbtn=document.querySelector('#start');
const screens=document.querySelectorAll('.screen')
const timelist=document.querySelector('#timelist')
const board=document.querySelector('#board')
let time=0
const timeel=document.querySelector('#time')
startbtn.addEventListener('click', e => {
    e.preventDefault()
    screens[0].classList.add('up')
})

timelist.addEventListener('click', e => {
    if(e.target.classList.contains('time-btn')){
        time=parseInt(e.target.getAttribute('datatime'))
        screens[1].classList.add('up')
        startgame()
    }
})

function startgame(){
    setInterval(decreasetime, 1000)
    createcircle()
    settime(time)
}
function decreasetime(){
    if(time<1){
        finishgame()
    }else{
        let current=--time
    if(current<10){
        current=`0${current}`
    }
    settime(current)
    }  
}
let score=0
function settime(v){
    timeel.innerHTML=`00:${v}`;
}
board.addEventListener('click', e=>{
    if(e.target.classList.contains('circle')){
        ++score
        e.target.remove()
        createcircle()
    }
})

function finishgame(){
    timeel.parentNode.remove()
    board.innerHTML=`<h1>score: <span class='primary'>${score}</span></h1>`
}
const colors=['tomato', 'orange', 'cadetblue', 'lightgreen', 'yellow']
function createcircle(){
    const circle=document.createElement('div')
    const size=randomsize(10, 60)
    const {width, height}=board.getBoundingClientRect()
    const x=randomsize(0, width-size)
    const y=randomsize(0, height-size)
    const color=circlecolor();
    circle.style.backgroundColor=`${color}`
    console.log(color)
    circle.classList.add('circle')
    circle.style.width=`${size}px`
    circle.style.height=`${size}px`
    circle.style.left=`${x}px`
    circle.style.top=`${y}px`
    board.append(circle)
}
function randomsize(min, max){
    return Math.round(Math.random()*(max-min)+min)
}
function circlecolor(){
    const x=randomsize(0, colors.length-1)
    return colors[x]
}