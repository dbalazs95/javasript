window.addEventListener("load",init);

var kep=[
    {
        cim: "Orchidea",
        eleresiut: "kepek/orchidea.jpg",
        leiras: "Virág"
    },
    {
        cim: "Kenyérpiritó",
        eleresiut: "kepek/kenyerpirito.jpg",
        leiras: "Konyhai gép"
    },
    {
        cim: "Összecsukható kempingszék",
        eleresiut: "kepek/kempingsz.jpg",
        leiras: "Kemping felszerelés"
    }
]

function ID(elem) {
    return document.getElementById(elem);
}

function init() {
    kepgaleria();
}

function kepgaleria(){
    var txt = "";
    for (let index = 0; index < kep.length; index++) {
        txt += "<div id=\"kepgaleria\"><h3>"+kep[index].cim+"</h3><img src=\""+kep[index].eleresiut+"\" alt=\"\"></img><p>"+kep[index].leiras+"</p></div>";
    }
    ID("galeria").innerHTML = txt;
}

