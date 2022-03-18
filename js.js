//var kepcim = ["Orchidea", "Kenyérpiritó", "Összecsukható kempingpisztoly"]
//var kepar = [12360,9990,8654]
//var kepeleresiut = ["kepek/Viragok.jpg"]
//var keptipus = ["Virág","Konyhai gép", "Kemping felszerelés"]

var kep=[
    {
        cim: "Orchidea",
        ar: 12360,
        eleresiut: "kepek/orchidea.jpg",
        tipus: "Virág"
    },
    {
        cim: "Kenyérpiritó",
        ar: 9990,
        eleresiut: "kepek/kenyerpirito.jpg",
        tipus: "Konyhai gép"
    },
    {
        cim: "Összecsukható kempingpisztoly",
        ar: 8654,
        eleresiut: "kepek/kempingp.jpg",
        tipus: "Kemping felszerelés"
    }
]

/**Főprogram**/
var atlagom = atlagAr();
console.log(atlagom)
dragabbMint();
kisebbMint();
hosszabbMint();
SwitchcaseKiir();


function atlagAr() {
    console.log("Mennyi a képek átlagára?")
    var szum = 0
    for (let index = 0; index < kep.length; index++) {
        szum = szum + kep[index].ar
    }
    var atlag = szum / kep.length
    return atlag;
}

function dragabbMint() {
    console.log("Van-e olyan kép, ami 10000-nél drágább?")
    let index = 0;
    while (index < kep.length && !(kep[index].ar>10000)) {
        index++;
    }
    var vane = index < kep.length;

    if (vane) {
        console.log("Van bizony")
    }else{
        console.log("Nincsen")
}
}

function kisebbMint() {
    console.log("Azon képek ára amik drágábbak 10000-nél:")

    var kisebb = []
    for (let index = 0; index < kep.length; index++) {
        if (kep[index].ar<10000) {
            kisebb[kisebb.length] = kep[index].ar
        }
    }
    console.log(kisebb)
}

function hosszabbMint() {
    console.log("Van-e olyan képcím, ami 20 karakternél hosszabb?")

    let i = 0
    while ( i < kep.length && !(kep[i].cim.length>20)) {
        i++
    }
    var hosszabb = i < kep.length

    if (hosszabb) {
        console.log("Van bizony")
    } else {
        console.log("Nincsen")
    }
}

function SwitchcaseKiir() {
    var tipus;
    for (let ind = 0; ind < kep.length; ind++) {
        var kepem = kep[ind].cim
        switch (kepem) {
            case kep[ind].cim:
                tipus = kep[ind].tipus
                break;
            default:
                tipus = "Nincs ilyen"
                break;
        }
        console.log(kep[ind].cim,"=",kep[ind].tipus)
    }
}

/**Objektumok**/

var szemely1 = {
    nev:"Géza",
    kor:34,
    nem:"igen",
    gyerekek:["Sári","Teri"]
}
var szemely2 = {
    nev:"Béla",
    kor:38,
    nem:"nem",
    gyerekek:["Gábor"]
}

var szemelyek = [
    {
        nev:"Géza",
        kor:34,
        nem:"igen",
        gyerekek:["Sári","Teri"]
    },
    {
        nev:"Béla",
        kor:38,
        nem:"nem",
        gyerekek:["Gábor"]
    }
]
