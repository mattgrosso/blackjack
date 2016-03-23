
(function runGame() {

    var display = document.querySelector('figure');
    var cards = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];

    display.innerHTML = randomCard() + ' ' + randomCard();

    function randomCard(){
      return cards[Math.floor(Math.random() * cards.length)];
    }

    function checkResult(stand) {
        var currentCards = display.innerHTML.split(' ');
        console.log(currentCards);
        var totalValue = 0;

        currentCards.forEach(function (card, i) {
            if (Number(card)) {
                totalValue = totalValue + Number(card);
            }
            if (card === 'J' || card === 'Q' || card === 'K'){
                totalValue = totalValue + 10;
            }
            if (card === 'A') {
                totalValue = totalValue + 11;
            }
        });

        if (totalValue <= 15 && stand) {
            alert('Dealer wins.');
            display.innerHTML = randomCard() + ' ' + randomCard();
        }
        else if (totalValue <= 18 && stand) {
            alert('Push!');
            display.innerHTML = randomCard() + ' ' + randomCard();
        }
        if (totalValue > 21) {
            alert('You Bust.');
            display.innerHTML = randomCard() + ' ' + randomCard();
        }
        else if ((totalValue > 18 && stand) || totalValue === 21) {
            alert('You win!');
            display.innerHTML = randomCard() + ' ' + randomCard();
        }
    }

    document.querySelector('#stand').addEventListener('click',function(){
      checkResult(true);
    });
    document.querySelector('#hit').addEventListener('click', function(){
      display.innerHTML = display.innerHTML + ' ' + randomCard();
      checkResult(false);
    });

    checkResult(false);
  })();
