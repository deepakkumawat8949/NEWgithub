let tittle = document.querySelector('#inp')
let dit = document.querySelector('#detail')
let dy = document.querySelector('#dt')
let btn = document.querySelector('#btn')
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
        clearInput()
    }else{
        alert('please fill the all input')
    }
})



function genrateCard(ary) {
    let card = ''
    ary.forEach((e,i) => {
        card += `
            <div class="card">
            <h2>${e.heading}</h2>
            <p>${e.description}</p>
            <p>${e.day}</p>
            <button onclick='deleatCard(${i})'><i class="fa-solid fa-trash-can"></i></button>
            <button onclick='updateCard(${i})'><i class="fa-solid fa-recycle"></i></button>
            <button onclick='update(${i})'>update</button>
            </div>
            `
    });
    document.querySelector('.cards').innerHTML = card
    console.log(card)
}

function deleatCard(i) {
    console.log(i)
    arr.splice(i,1)
    genrateCard(arr)
}   

function clearInput(params) {
    tittle.value = ''
    dit.value = ''
    dy.value = ''
}

function updateCard(i) {
 tittle.value = arr[i].heading
 dit.value = arr[i].description
 dy.value = arr[i].day  
}

function update(i) {
    
}