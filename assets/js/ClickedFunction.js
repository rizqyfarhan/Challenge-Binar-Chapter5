class ClickedFunction {
    constructor(a, b, c, d, e, f) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
        this.e = e;
        this.f = f;
    }

    comPlay(d, e, f) {
        const random = Math.floor(Math.random() * 3) + 1;

        if (random == 1) {
            document.getElementById(d).style.backgroundColor = "#C4C4C4";
            document.getElementById(e).style.backgroundColor = "transparent";
            document.getElementById(f).style.backgroundColor = "transparent";
        } else if (random == 2) {
            document.getElementById(e).style.backgroundColor = "#C4C4C4";
            document.getElementById(d).style.backgroundColor = "transparent";
            document.getElementById(f).style.backgroundColor = "transparent";
        } else if (random == 3) {
            document.getElementById(f).style.backgroundColor = "#C4C4C4";
            document.getElementById(d).style.backgroundColor = "transparent";
            document.getElementById(e).style.backgroundColor = "transparent";
        }
    }

    funcPlayerBatu(a, b, c, d, e, f) {
        if (document.getElementById(a).style.backgroundColor == "transparent") {
            document.getElementById(a).style.backgroundColor = "#C4C4C4";
            document.getElementById(b).style.backgroundColor = "transparent";
            document.getElementById(c).style.backgroundColor = "transparent";
            this.comPlay(d, e, f);
        } else {
            document.getElementById(a).style.backgroundColor = "transparent";
            document.getElementById(d).style.backgroundColor = "transparent";
            document.getElementById(e).style.backgroundColor = "transparent";
            document.getElementById(f).style.backgroundColor = "transparent";
        }
    }

    funcPlayerKertas(a, b, c, d, e, f) {
        if (document.getElementById(b).style.backgroundColor == "transparent") {
            document.getElementById(b).style.backgroundColor = "#C4C4C4";
            document.getElementById(a).style.backgroundColor = "transparent";
            document.getElementById(c).style.backgroundColor = "transparent";
            this.comPlay(d, e, f);
        } else {
            document.getElementById(b).style.backgroundColor = "transparent";
            document.getElementById(d).style.backgroundColor = "transparent";
            document.getElementById(e).style.backgroundColor = "transparent";
            document.getElementById(f).style.backgroundColor = "transparent";
        }
    }

    funcPlayerGunting(a, b, c, d, e, f) {
        if (document.getElementById(c).style.backgroundColor == "transparent") {
            document.getElementById(c).style.backgroundColor = "#C4C4C4";
            document.getElementById(a).style.backgroundColor = "transparent";
            document.getElementById(b).style.backgroundColor = "transparent";
            this.comPlay(d, e, f);
        } else {
            document.getElementById(c).style.backgroundColor = "transparent";
            document.getElementById(d).style.backgroundColor = "transparent";
            document.getElementById(e).style.backgroundColor = "transparent";
            document.getElementById(f).style.backgroundColor = "transparent";
        }
    }

    funcRefresh(a, b, c, d, e, f) {
        document.getElementById(a).style.backgroundColor = "transparent";
        document.getElementById(b).style.backgroundColor = "transparent";
        document.getElementById(c).style.backgroundColor = "transparent";
        document.getElementById(d).style.backgroundColor = "transparent";
        document.getElementById(e).style.backgroundColor = "transparent";
        document.getElementById(f).style.backgroundColor = "transparent";
    }
}