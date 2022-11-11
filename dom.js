// / 1. Izdvojiti iz teksta sve karaktere
// var charactersInText = loremIpsumText.split(""); // niz svih karaktera u tekstu (ukljucujuci tacku, zarez i razmak)
// // console.log(charactersInText);

// 2. Filtrirati niz i iz njega izbaciti tacke, zareze, razmake i prazne stringove
// if(slovo !== '' && slovo !== ' ' && slovo !== '.' && slovo !== ',')
// 3. Izbrojati koliko taj dobijeni niz ima elemenata

var niz="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
var recenice = niz.split(".")
var reci = niz.split(" ");
var slova = [];
var karakteri = niz.split("");
for (i=0;i<=niz.length-1;i++) {
    if (niz[i] !== "." && niz[i] !== "," && niz[i]!== " "){
        slova.push(niz[i])
    }
}

console.log("ovaj text ima ",recenice.length,"recenica",reci.length,"reci", slova.length,"slova",karakteri.length,"karaktera ")