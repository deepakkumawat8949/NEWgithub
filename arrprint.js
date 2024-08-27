let url='https://fakestoreapi.com/products '
// console.log(url)
async function getdata() {
    let response = await fetch(url)
    let data = await response.json()
    console.log(data)

    let ele =''
    data.forEach((e) => {
        console.log(e)
        ele+=`
        <div class="card">
        <div class"image"><img src="${e.image}"alt=""></div>
        <h4>${e.title.slice(0,25)+'...'}</h4>
<h2>price:-${e.price}<i></i></h2>
<h5>Diescription:-${e.description.slice(0,80)+'..'}</h5>
<p> Category:-${e.category}</p>
        </div>
         `
    });
    document.querySelector('.cards').innerHTML=ele

let searchs=document.querySelector('#search-bar')
console.log(searchs)
searchs.addEventListener('keyup',()=>{

    
    let search=data.filter(e=>{return(e.category.includes(searchs.value))})
    console.log(search)
    let searchresult=''
    search.forEach((e) => {
        searchresult+=`
        <div class="card">
        <div class"image"><img src="${e.image}"alt=""></div>
        <h4>${e.title.slice(0,25)+'...'}</h4>
        <h2>price:-${e.price}<i></i></h2>
        <h5>Diescription:-${e.description.slice(0,80)+'..'}</h5>
        <p> Category:-${e.category}</p>
        </div>
        
        `
        })
    document.querySelector('.cards').innerHTML=searchresult

    let men=document.querySelector('#men')
    men.addEventListener('click',()=>{
        let man=data.filter(e=>{return(e.category.includes(mencloth))})
console.log(men)
let menresult=''
men.forEach((e) => {
  menresult+=`
     <div class="card">
        <div class"image"><img src="${e.image}"alt=""></div>
        <h4>${e.title.slice(0,25)+'...'}</h4>
        <h2>price:-${e.price}<i></i></h2>
        <h5>Diescription:-${e.description.slice(0,80)+'..'}</h5>
        <p> Category:-${e.category}</p>
        </div>
  `  
});
})
document.querySelector('.cards').innerHTML=menresult

});












    }
    getdata()

