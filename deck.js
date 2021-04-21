
let deck ={
    async setDeck(){
        let res = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        this.id = res.data.deck_id
    },
    async draw(){
        let res =  await axios.get(`https://deckofcardsapi.com/api/deck/${this.id}/draw/?count=1`)
        if(res.data.cards.length===0){
            alert('All cards have been drawn')
        }
        else{
        let img =res.data.cards[0].image
        appendCard(img)
        }
    }
}
deck.setDeck()

$('button').on('click',(e)=>{
    try{
        deck.draw()
    }
    catch(err){
        console.log(err)
    }
});

function appendCard(img){
    let degrees = randomNumber(-30,30)
    $img = $('<img>')
    $img.attr('src',img)
    $img.css({'transform' : 'rotate('+ degrees +'deg)'})
    $img.addClass('centered')
    $game = $('#game')
    console.log($img)
    $game.append($img)

}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}