



//favorite number
async function favoriteNumber(){
    let res = await axios.get('http://numbersapi.com/8?json')
    console.log(res.data.text)

}
favoriteNumber()


async function someNumbers(){
    let res = await axios.get('http://numbersapi.com/1,2,4..7')
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

}
someNumbers()

//favorite number 4 times
async function favoriteNumberFourTimes(){
    let favPromises = []
    for(let i=0; i<4;i++){
        favPromises.push(
            axios.get('http://numbersapi.com/8?json')
        )}
    let promises = await Promise.all(favPromises)
    let div = document.createElement('div')
    let h1 = document.createElement('h1')
    let ul = document.createElement('ul')
    h1.innerText = 'Favorite number facts'
    div.appendChild(h1)
    div.appendChild(ul)
    document.body.appendChild(div)
    for(val of promises){
        let li = document.createElement('li')
        li.innerText = val.data.text
        ul.appendChild(li)
    }
}

favoriteNumberFourTimes()