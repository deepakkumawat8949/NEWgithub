let inp =document.querySelector('input')
let btn =document.querySelector('button')
let name =document.querySelector('#name')
let tamp =document.querySelector('#tamp')
let cloud =document.querySelector('#cloud')
let wind =document.querySelector('#wind')
// console.log(inp,btn)

btn.addEventListener('click',()=>{
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${inp.value}&appid=9b0352044092c9d76041cbdfad58dd7a`
    
    async function getdata() {
        let respons= await fetch(url)
        let data=await respons.json()
        console.log(data)
        console.log(data.name)
        
        name.innerHTML=`place:-${data.main.name}`
        tamp.innerHTML=`tamprater:-${data.main.temp}%`
        cloud.innerHTML=`cloud:-${data.main.all}`
        wind.innerHTML=`wind:-${data.main.speed}`
    }
    getdata()
})


