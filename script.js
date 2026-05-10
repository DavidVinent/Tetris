let canvas;
let ctx;
let FPS = 50;
let amplecanvas = 400;
let altcanvas = 640;

let peça;
let retras = 50;
let contador = 0;
let ampleTaulell = 10;
let altTaulell = 20;
let punts = 0;
let ampleF = 40;
let altF = 40;
let taulell = [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]






let peçagrafic = [
    [

        [
            [0, 0, 0, 0,],
            [0, 1, 1, 0,],
            [1, 1, 0, 0,],
            [0, 0, 0, 0,]
        ], [

            [0, 0, 0, 0,],
            [1, 0, 0, 0,],
            [1, 1, 0, 0,],
            [0, 1, 0, 0,]

        ], [

            [0, 0, 0, 0,],
            [0, 0, 1, 1,],
            [0, 1, 1, 0,],
            [0, 0, 0, 0,]


//67//

        ], [
            [0, 0, 0, 0,],
            [0, 1, 0, 0,],
            [0, 1, 1, 0,],
            [0, 0, 1, 0,]

        ], [

        
            [0, 0, 0, 0,],
            [0, 1, 1, 0,],
            [0, 1, 1, 0,],
            [0, 0, 0, 0,]
        ], [

            [0, 0, 0, 0,],
            [0, 1, 1, 0,],
            [0, 1, 1, 0,],
            [0, 0, 0, 0,]

        ], [

            [0, 0, 0, 0,],
            [0, 1, 1, 0,],
            [0, 1, 1, 0,],
            [0, 0, 0, 0,]




        ], [
            [0, 0, 0, 0,],
            [0, 1, 1, 0,],
            [0, 1, 1, 0,],
            [0, 0, 0, 0,]

        

    ], [
        
            [0, 1, 0, 0,],
            [0, 1, 0, 0,],
            [0, 1, 0, 0,],
            [0, 1, 0, 0,]
        ], [

            [0, 0, 0, 0,],
            [1, 1, 1, 1,],
            [0, 0, 0, 0,],
            [0, 0, 0, 0,]

        ], [

            [0, 0, 1, 0,],
            [0, 0, 1, 0,],
            [0, 0, 1, 0,],
            [0, 0, 1, 0,]




        ], [
            [0, 0, 0, 0,],
            [1, 1, 1, 1,],
            [0, 0, 0, 0,],
            [0, 0, 0, 0,]

        

    ], [
        
            [0, 1, 0, 0,],
            [0, 1, 0, 0,],
            [0, 1, 1, 0,],
            [0, 0, 0, 0,]
        ], [

            [0, 0, 0, 0,],
            [0, 1, 1, 1,],
            [0, 1, 0, 0,],
            [0, 0, 0, 0,]

        ], [

            [0, 0, 0, 0,],
            [0, 1, 1, 0,],
            [0, 0, 1, 0,],
            [0, 0, 1, 0,]




        ], [
            [0, 0, 0, 0,],
            [0, 0, 1, 0,],
            [1, 1, 1, 0,],
            [0, 0, 0, 0,]

        ],
     
        [
            [0, 0, 1, 0,],
            [0, 0, 1, 0,],
            [0, 1, 1, 0,],
            [0, 0, 0, 0,]
        ], [

            [0, 0, 0, 0,],
            [0, 1, 0, 0,],
            [0, 1, 1, 1,],
            [0, 0, 0, 0,]

        ], [

            [0, 0, 0, 0,],
            [0, 0, 1, 1,],
            [0, 0, 1, 0,],
            [0, 0, 1, 0,]




        ], [
            [0, 0, 0, 0,],
            [1, 1, 1, 0,],
            [0, 0, 1, 0,],
            [0, 0, 0, 0,]

        ],
    , 
        [
            [0, 0, 1, 0,],
            [0, 1, 1, 1,],
            [0, 0, 0, 0,],
            [0, 0, 0, 0,]
        ], [

            [0, 0, 1, 0,],
            [0, 0, 1, 1,],
            [0, 0, 1, 0,],
            [0, 0, 0, 0,]

        ], [

            [0, 0, 0, 0,],
            [0, 1, 1, 1,],
            [0, 0, 1, 0,],
            [0, 0, 0, 0,]




        ], [
            [0, 0, 0, 0,],
            [0, 0, 1, 0,],
            [0, 1, 1, 0,],
            [0, 0, 1, 0,]

        ],


     [
        
            [0, 0, 0, 1,],
            [0, 0, 1, 1,],
            [0, 0, 1, 0,],
            [0, 0, 0, 0,]
        ], [

            [0, 0, 0, 0,],
            [0, 0, 1, 1,],
            [0, 1, 1, 0,],
            [0, 0, 0, 0,]

        ], [

            [0, 0, 0, 0,],
            [0, 0, 1, 0,],
            [0, 0, 1, 1,],
            [0, 0, 0, 1,]




        ], [
            [0, 0, 0, 0,],
            [0, 0, 1, 1,],
            [0, 1, 1, 0,],
            [0, 0, 0, 0,]

        ]

































     ]


]
  const COLORS = {
    1: '#ff6eb4',  // S — hot pink
    2: '#ffc94d',  // O — dorado disco
    3: '#00e5c8',  // I — cian frío
    4: '#ff7c3a',  // L — naranja ardiente
    5: '#b06eff',  // J — violeta profundo
    6: '#ff4f7b',  // T — fucsia
    7: '#ffe44d',  // U — amarillo eléctrico
};

function getColor(val) {
    return COLORS[val] || '#ffffff';
}

function dibuixaTaulell() {
    for (let py = 0; py < altTaulell; py++) {
        for (let px = 0; px <= ampleTaulell; px++) {
            if (taulell[py][px] != 0) {
                if (px == 0 || px == ampleTaulell) {
                    ctx.fillStyle = '#2a0f3a'; 
                } else {
                    ctx.fillStyle = getColor(taulell[py][px]);
                }
                ctx.fillRect((px - 1) * ampleF, (py - 4) * altF, ampleF, altF);
            }
        }
    }
}
function dibuixaPuntuacio(){
    ctx.fillStyle = '#f5c97a';
    ctx.font = 'bold 18px Segoe UI';
    ctx.fillText('PUNTS: ' + punts, 10, 22);
     let nivell = 1;
    if (punts >= 100) nivell = 2;
    if (punts >= 200) nivell = 3;
    if (punts >= 400) nivell = 4;
    if (punts >= 600) nivell = 5;
    ctx.fillText('NIVELL: ' + nivell, 10, 44);
}

let objPeça = function () {
    this.x = 0;
    
    this.y = 0;

    this.angle = 0;
    this.tipo = 0;

    this.fila = function () {
     let filafeta = false;
        for (let py = 4; py < altTaulell; py++) {
            filafeta = true;
            for (let px = 1; px <= ampleTaulell; px++) 
                if (taulell[py][px] == 0) {
                    filafeta = false;

                }
            

            if (filafeta) {
                punts += 10;
                for (let moverfila = py; moverfila > 0; moverfila--) {
                    for (let px = 1; px <= ampleTaulell; px++) {
                        taulell[moverfila][px] = 0;
                        if (taulell[moverfila - 1][px] != 0) {
                            taulell[moverfila ][px] = taulell[moverfila - 1][px];
                        }
                    }


                }

            
            for (let y = altTaulell - 1; y > 0; y--) {
                for (let x = 1; x < ampleTaulell; x++) {
                    if (taulell[y][x] == 0) {
                        for (let yN = y; yN > 0; yN--) {
                            taulell[y][x] = taulell[y - 1][x];
                        }
                    }
                }
            }
        }
    }
}
        this.gameOver = function () {
            let perdut = false;
            for (let px = 1; px <= ampleTaulell; px++) {
                if (taulell[0][px] != 0) {
                    perdut = true;
                }
            }
            return perdut;
        }


        this.nova = function () {
            this.tipo = Math.floor(Math.random() * 7);
            this.x = 4;
            this.y = 0;

        }

       this.fixapeça = function () {
    for (let py = 0; py < 4; py++) {
        for (let px = 0; px < 4; px++) {
            if (peçagrafic[this.tipo][this.angle][py][px] != 0) {
                taulell[this.y + py][this.x + px] = this.tipo + 1; 
            }
        }
    }
}


       this.dibuixa = function () {
    
    for (let py = 0; py < 4; py++) {
        for (let px = 0; px < 4; px++) {
            if (peçagrafic[this.tipo][this.angle][py][px] != 0) {
                ctx.fillStyle = getColor(this.tipo + 1);
                ctx.fillRect((this.x + px - 1) * ampleF, (this.y + py - 4) * altF, ampleF, altF);
            }
        }
    }
}

        this.caer = function () {

            if (contador < retras) {
                contador++;
            } else {
                if (this.colision(this.angle, this.y + 1, this.x) == false) {
                    this.y++;
                    contador = 0;
                } else {
                    this.fixapeça();
                    this.fila();
                    if (this.gameOver()) {
                        document.location.reload();
                    }
                    this.nova();



                }

            }
        }



        this.rotar = function () {

            let angleNou = this.angle
            if (angleNou < 3) {
                angleNou++;
            } else {
                angleNou = 0;
            }
            if (this.colision(angleNou, this.y, this.x) == false) {
                this.angle = angleNou;
            }

        }
        this.colision = function (angleN, yN, xN) {
            let resultat = false;
            for (let py = 0; py < 4; py++) {
                for (let px = 0; px < 4; px++) {
                    if (peçagrafic[this.tipo][angleN][py][px] != 0) {
                        if (taulell[yN + py][xN + px] != 0) {
                            resultat = true;
                        }
                    }
                }
            } return resultat;
        }

        this.abajo = function () {
            if (this.colision(this.angle, this.y + 1, this.x) == false) {
                this.y++;

            }}

            this.derecha = function () {
                if (this.colision(this.angle, this.y, this.x + 1) == false) {
                    this.x++;

                }}

                this.izquierda = function () {
                    if (this.colision(this.angle, this.y, this.x - 1) == false) {
                        this.x--;


                    }
                }
                this.nova();
            }



function inicialitzarTeclat() {
    document.addEventListener('keydown', function (tecla) {
        if (tecla.key == "ArrowUp") {
            peça.rotar();
        }
        if (tecla.key == "ArrowDown") {
            peça.abajo();
        }
        if (tecla.key == "ArrowLeft") {
            peça.izquierda();
        }

        if (tecla.key == "ArrowRight") {
            peça.derecha();
        }
    }
    )
}



function inicia() {
    canvas = document.getElementById("canvas")
    ctx = canvas.getContext("2d")

    canvas.style.width = amplecanvas;
    canvas.style.height = altcanvas;

    let canço = new Audio("audio1.mp3")
    document.getElementById("musica").addEventListener ("click", function () {
        canço.loop = true
        if(canço.paused){
            canço.play();
        }else{
            canço.pause()
        }
    })
    peça = new objPeça();
    inicialitzarTeclat()
    setInterval(function () {
        principal()
    }, 1000 / FPS);
}
function principal() {
 if (punts >= 100) retras = 35;
    if (punts >= 200) retras = 25;
    if (punts >= 400) retras = 15;
    if (punts >= 600) retras = 8;
    
    borrarCanvas();
    dibuixaTaulell();
    peça.caer();
    peça.dibuixa();
    dibuixaPuntuacio();
}
function borrarCanvas() {
    canvas.width = amplecanvas;
    canvas.height = altcanvas;
}
