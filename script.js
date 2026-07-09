



const knop = document.getElementById("zoekKnop");
const postcode=document.getElementById("postcode");
const resultaat = document.getElementById("resultaat");
console.log(knop);


knop.addEventListener("click", function (){ 
    console.log("De knop is ingedrukt");
    console.log(postcode.value);

    const ingevoerdePostcode  = postcode.value.toUpperCase().replace(" ", "");
    const gevondenPostcode = postcodes [ingevoerdePostcode];
   
    console.log(gevondenPostcode);

    if (gevondenPostcode) {
    resultaat.textContent = 
    "Stad:" + gevondenPostcode.stad +
    " | Wijk: "+ gevondenPostcode.wijk;
    } else {
        resultaat.textContent = "Postcode niet gevonden.";
    }
});

