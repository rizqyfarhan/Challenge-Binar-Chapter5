let elementPlayerWin = document.createElement("div");
let elementComWin = document.createElement("div");
let elementDraw = document.createElement("div");
let beginningLogo = document.createElement("img");

elementPlayerWin.style.backgroundColor = "#4C9654";
elementPlayerWin.style.width = "300px";
elementPlayerWin.style.height = "180px";
elementPlayerWin.style.textAlign = "center";
elementPlayerWin.style.transform = "rotate(-30.98deg)";
elementPlayerWin.style.color = "white";
elementPlayerWin.style.fontSize = "38px";
elementPlayerWin.style.fontWeight = "bold";
elementPlayerWin.style.fontStyle = "normal";
elementPlayerWin.style.fontFamily = "Open Sans";
elementPlayerWin.setAttribute("id", "vs");
elementPlayerWin.textContent = "PLAYER WIN";

elementComWin.style.backgroundColor = "#4C9654";
elementComWin.style.width = "300px";
elementComWin.style.height = "180px";
elementComWin.style.textAlign = "center";
elementComWin.style.transform = "rotate(-30.98deg)";
elementComWin.style.color = "white";
elementComWin.style.fontSize = "38px";
elementComWin.style.fontWeight = "bold";
elementComWin.style.fontStyle = "normal";
elementComWin.style.fontFamily = "Open Sans";
elementComWin.setAttribute("id", "vs");
elementComWin.textContent = "COM WIN";

elementDraw.style.backgroundColor = "#035B0C";
elementDraw.style.width = "300px";
elementDraw.style.height = "180px";
elementDraw.style.textAlign = "center";
elementDraw.style.transform = "rotate(-30.98deg)";
elementDraw.style.color = "white";
elementDraw.style.fontSize = "38px";
elementDraw.style.fontWeight = "bold";
elementDraw.style.fontStyle = "normal";
elementDraw.style.fontFamily = "Open Sans";
elementDraw.setAttribute("id", "vs");
elementDraw.textContent = "DRAW";

beginningLogo.setAttribute("src", "img/VS.png");
beginningLogo.setAttribute("id", "vs");

const object = new ClickedFunction("p-batu-clicked", "p-kertas-clicked", "p-gunting-clicked", "c-batu-clicked", "c-kertas-clicked", "c-gunting-clicked");

let pBatu = document.querySelector("#p-batu-clicked");
var idBatuP = object.a, idKertasP = object.b, idGuntingP = object.c,
    idBatuCom = object.d, idKertasCom = object.e, idGuntingCom = object.f;

pBatu.addEventListener("click", function () {
    object.funcPlayerBatu(idBatuP, idKertasP, idGuntingP, idBatuCom, idKertasCom, idGuntingCom);

    if (document.getElementById("p-batu-clicked").style.backgroundColor != "transparent") {
        if (document.getElementById("c-gunting-clicked").style.backgroundColor != "transparent") {
            document.getElementById("vs-id").append(elementPlayerWin);
            document.querySelector("#vs-id #vs").remove();
        }
    }
    if (document.getElementById("p-batu-clicked").style.backgroundColor != "transparent") {
        if (document.getElementById("c-batu-clicked").style.backgroundColor != "transparent") {
            document.getElementById("vs-id").append(elementDraw);
            document.querySelector("#vs-id #vs").remove();
        }
    }
    if (document.getElementById("p-batu-clicked").style.backgroundColor != "transparent") {
        if (document.getElementById("c-kertas-clicked").style.backgroundColor != "transparent") {
            document.getElementById("vs-id").append(elementComWin);
            document.querySelector("#vs-id #vs").remove();
        }
    }
    if (document.getElementById("p-batu-clicked").style.backgroundColor == "transparent") {
        if (document.getElementById("c-kertas-clicked").style.backgroundColor == "transparent" ||
            document.getElementById("c-gunting-clicked").style.backgroundColor == "transparent" ||
            document.getElementById("c-batu-clicked").style.backgroundColor == "transparent") {

            document.querySelector("#vs-id #vs").remove();
            document.getElementById("vs-id").append(beginningLogo);
        }
    }
});

let pKertas = document.querySelector("#p-kertas-clicked");
pKertas.addEventListener("click", function () {
    object.funcPlayerKertas(idBatuP, idKertasP, idGuntingP, idBatuCom, idKertasCom, idGuntingCom);

    if (document.getElementById("p-kertas-clicked").style.backgroundColor != "transparent") {
        if (document.getElementById("c-batu-clicked").style.backgroundColor != "transparent") {
            document.getElementById("vs-id").append(elementPlayerWin);
            document.querySelector("#vs").remove();
        }
    }
    if (document.getElementById("p-kertas-clicked").style.backgroundColor != "transparent") {
        if (document.getElementById("c-kertas-clicked").style.backgroundColor != "transparent") {
            document.getElementById("vs-id").append(elementDraw);
            document.querySelector("#vs").remove();
        }
    }
    if (document.getElementById("p-kertas-clicked").style.backgroundColor != "transparent") {
        if (document.getElementById("c-gunting-clicked").style.backgroundColor != "transparent") {
            document.getElementById("vs-id").append(elementComWin);
            document.querySelector("#vs").remove();
        }
    }
    if (document.getElementById("p-kertas-clicked").style.backgroundColor == "transparent") {
        if (document.getElementById("c-kertas-clicked").style.backgroundColor == "transparent" ||
            document.getElementById("c-gunting-clicked").style.backgroundColor == "transparent" ||
            document.getElementById("c-batu-clicked").style.backgroundColor == "transparent") {

            document.querySelector("#vs-id #vs").remove();
            document.getElementById("vs-id").append(beginningLogo);
        }
    }
});

let pGunting = document.querySelector("#p-gunting-clicked");
pGunting.addEventListener("click", function () {
    object.funcPlayerGunting(idBatuP, idKertasP, idGuntingP, idBatuCom, idKertasCom, idGuntingCom);
    if (document.getElementById("p-gunting-clicked").style.backgroundColor != "transparent") {
        if (document.getElementById("c-kertas-clicked").style.backgroundColor != "transparent") {
            document.getElementById("vs-id").append(elementPlayerWin);
            document.querySelector("#vs").remove();
        }
    }
    if (document.getElementById("p-gunting-clicked").style.backgroundColor != "transparent") {
        if (document.getElementById("c-gunting-clicked").style.backgroundColor != "transparent") {
            document.getElementById("vs-id").append(elementDraw);
            document.querySelector("#vs").remove();
        }
    }
    if (document.getElementById("p-gunting-clicked").style.backgroundColor != "transparent") {
        if (document.getElementById("c-batu-clicked").style.backgroundColor != "transparent") {
            document.getElementById("vs-id").append(elementComWin);
            document.querySelector("#vs").remove();
        }
    }
    if (document.getElementById("p-gunting-clicked").style.backgroundColor == "transparent") {
        if (document.getElementById("c-kertas-clicked").style.backgroundColor == "transparent" ||
            document.getElementById("c-gunting-clicked").style.backgroundColor == "transparent" ||
            document.getElementById("c-batu-clicked").style.backgroundColor == "transparent") {

            document.querySelector("#vs-id #vs").remove();
            document.getElementById("vs-id").append(beginningLogo);
        }
    }
});

let refreshClicked = document.querySelector("#refresh-clicked");
refreshClicked.addEventListener("click", function () {
    document.querySelector("#vs-id #vs").remove();
    object.funcRefresh(idBatuP, idKertasP, idGuntingP, idBatuCom, idKertasCom, idGuntingCom);
    document.getElementById("vs-id").append(beginningLogo);
});


