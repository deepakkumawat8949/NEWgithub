let tittle = document.querySelector('#inp')
let dit = document.querySelector('#detail')
let dy = document.querySelector('#dt')
let btn = document.querySelector('#btn')
let bt = document.querySelector('#bt')
let arr = []
btn.addEventListener('click', () => {
    if (tittle.value.length >= 2 && dit.value.length >= 2 && dy.value.length == 10) {
        let obj = {
            heading:tittle.value,
            description:detail.value,
            day:dy.value
        }
        console.log()
        arr.push(obj)    

        genrateCard(arr)
    }else{
        alert('please fill the all input')
    }
})
bt.addEventListener('clkick',()=>{
    let o = {
        heading:tittle.value,
        description:detail.value,
        day:dy.value
    }
console.log(o)
})

function up(ae) {
as.forEach((ae) => {
    
   }); 
}







function genrateCard(ary) {
    let card = ''
    ary.forEach((e,i) => {
        card += `
            <div class="card">
            <p>${e.day}</p>
            <h2>${e.heading}</h2>
            <p>${e.description}</p>
            <button class="ram" onclick='deleatCard(${i})'><i class="fa-solid fa-trash-can"></i></button>
            </div>
            `
    });
    document.querySelector('.cards').innerHTML = card
    console.log(card)
}

function deleatCard(i) {
    // console.log(i)
    tittle.value=''
dit.value=''
dy.value=''
console.log(i)
}








