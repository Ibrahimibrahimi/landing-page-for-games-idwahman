


/*
main ideas : 
1.if card clicked => animate rotation 180deg by Y
2. while clicking card , make sure that the total cards opened are <= 2
3. if 2 cards opened and they aren't the same => rotate 0deg to all cards 
4. if 2cards opened are the same => display : none and increase score by 1
*/

// initialise count of opened cards 
var Opened = 0;

// add click event to all cards 
document.querySelectorAll("span.card").forEach(card => {
    card.onclick = () => {
        if (Opened < 2){
            if (card.style.transform == "rotateY(180deg)"){
                card.style.transform = "rotateY(0deg)";
                Opened++
            }else {
                card.style.transform = "rotateY(180deg)";
                Opened++
            }
        }else {
            Opened = 0;
        }
    }
})