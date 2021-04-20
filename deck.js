let deck ='';

axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1').then(res=> {
    deck = res.data.deck_id
    console.log(deck)
})

$('button').on('click',(e)=>{
    axios.get(`https://deckofcardsapi.com/api/deck/${deck}/draw/?count=1`).then(res=>{
        if(res.data.cards.length===0){
            alert('All cards have been drawn')
        }
        let val = res.data.cards[0].value
        let suit = res.data.cards[0].suit
        let img =res.data.cards[0].image
        appendCard(img)
    }).catch(err =>console.log(err))
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