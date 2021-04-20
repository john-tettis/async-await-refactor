



//favorite number
axios.get('http://numbersapi.com/8?json').then(res=>console.log(res.data.text))


axios.get('http://numbersapi.com/1,2,4..7').then(res=>{
    let div = document.createElement('div')
    let h1 = document.createElement('h1')
    let ul = document.createElement('ul')
    h1.innerText = 'Some number facts'
    div.appendChild(h1)
    div.appendChild(ul)
    document.body.appendChild(div)
    for(val in res.data){
        let li = document.createElement('li');
        li.innerText = res.data[val]
        ul.appendChild(li);
    }
})

//favorite number 4 times
let favPromises = []
for(let i=0; i<4;i++){
    favPromises.push(
        axios.get('http://numbersapi.com/8?json')
    )
}
Promise.all(favPromises).then(res=>{
    let div = document.createElement('div')
    let h1 = document.createElement('h1')
    let ul = document.createElement('ul')
    h1.innerText = 'Favorite number facts'
    div.appendChild(h1)
    div.appendChild(ul)
    document.body.appendChild(div)
    for(val of res){
        let li = document.createElement('li')
        li.innerText = val.data.text
        ul.appendChild(li)
    }
})