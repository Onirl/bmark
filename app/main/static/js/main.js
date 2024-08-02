function showTab(idTab){
    elemRent = document.getElementById('rent');
    elemBuy = document.getElementById('buy');
    elemSell = document.getElementById('sell');

    switch(idTab){
        case "rent":{
            elemRent.style.display = "block";
            elemBuy.style.display = "none";
            elemSell.style.display = "none";
        }
        case "buy":{
            elemRent.style.display = "none";
            elemBuy.style.display = "block";
            elemSell.style.display = "none";
        }
        case "sell":{
            elemRent.style.display = "none";
            elemBuy.style.display = "none";
            elemSell.style.display = "block";
        }
    }
}