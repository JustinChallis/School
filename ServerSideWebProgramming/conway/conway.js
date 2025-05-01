board = [];
bits = [];
squaresize = 10; // Sizes that should work well: 2, 4, 5, 10, 20, 25, 50, 100
pane = null;

window.addEventListener("load", function () {
    loadMe();
    pane = document.querySelector("#image");
    for (let i = 0; i < 600/squaresize ; i++) {
        bits.push([]);
        for (let j = 0; j < 500/squaresize ; j++) {
            bits[i].push(0);
        }
    }
    for (let i = 0; i < 600/squaresize ; i++) {
        board.push([]);
        for (let j = 0; j < 500/squaresize ; j++) {
            board[i].push(square({"posx" : j*squaresize, "posy" : i*squaresize, "x" : i, "y" : j}));
        }
    }
    getBits();
});

var intervalID = null;

function play() {
    if (intervalID == null) intervalID = setInterval(singleStep, 500);
}

function stop() {
    if (intervalID != null) {
        clearInterval(intervalID);
        intervalID = null;
    }
}

async function clearBits() {
    bits = [];
    for (let i = 0; i < 600/squaresize ; i++) {
        bits.push([]);
        for (let j = 0; j < 500/squaresize ; j++) {
            bits[i].push(0);
        }
    }
    sendBits();
    getBits();
}

async function sendBits() {
    let params = "bits=" + JSON.stringify(bits);
    await fetch("storeBoard.php", {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body : params
    })
      .then( resp => resp.json())
      .then( data => callback(data));
}

async function randomizeBits() {
    bits = [];
    for (let i = 0; i < 600/squaresize ; i++) {
        bits.push([]);
        for (let j = 0; j < 500/squaresize ; j++) {
            bits[i].push(Math.floor(Math.random()*2));
        }
    }
    let params = "bits=" + JSON.stringify(bits);
    await fetch("storeBoard.php", {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body : params
    })
      .then( resp => resp.json())
      .then( data => callback(data));
      
    getBits();
}

function go (newBits) {
    bits = newBits;
    for (let i = 0; i < 600/squaresize ; i++) {
        for (let j = 0; j < 500/squaresize ; j++) {
            if (newBits[i][j] == 0) {
                board[i][j].setAttribute("fill", "white");
            } else {
                board[i][j].setAttribute("fill", "black");
            }
        }
    }
}

function getBits() {
    console.log("retrieving board state");
    fetch("getBoard.php")
      .then( resp => resp.json())
      .then( data => callback(data));
}

function singleStep () {
    fetch("step.php")
      .then( resp => resp.json())
      .then( data => callback(data));
}

var isMouseDown = false;

document.addEventListener("mousedown", () => {
  isMouseDown = true;
});


document.addEventListener("mouseup", () => {
  isMouseDown = false;
});

function square (pos) {
    const sqr = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    sqr.setAttribute("x", pos.posx);
    sqr.setAttribute("y", pos.posy);
    sqr.setAttribute("width", squaresize);
    sqr.setAttribute("height", squaresize);
    if (bits[pos.x][pos.y] == 1) {
        sqr.setAttribute("fill", "white");
    } else {
        sqr.setAttribute("fill", "black");
    }
    sqr.xbit = pos.x;
    sqr.ybit = pos.y;
    sqr.addEventListener("mouseenter", (event) => {
            if(isMouseDown) {
                if (bits[pos.x][pos.y] == 1) {
                    bits[pos.x][pos.y] = 0;
                    sqr.setAttribute("fill", "white");
                } else {
                    bits[pos.x][pos.y] = 1;
                    sqr.setAttribute("fill", "black");
                }
            }
        }
    )
    sqr.addEventListener("click", (event) => {
        
            if (bits[pos.x][pos.y] == 1) {
                bits[pos.x][pos.y] = 0;
                sqr.setAttribute("fill", "white");
            } else {
                bits[pos.x][pos.y] = 1;
                sqr.setAttribute("fill", "black");
            }
        
        }
    )
    // Append the square to the SVG
    pane.appendChild(sqr);
    
    return sqr;
}

function callback(resp) {
    if ("debug" in resp) console.log(resp.debug);
    if ("msg" in resp) document.querySelector("#outputMessage").innerHTML = resp.msg;
    if ("bits" in resp) go(JSON.parse(resp.bits));
}

function loadMe () {
    var out = document.querySelector("#me");
    fetch("me.php")
      .then(resp => resp.text())
      .then( txt => out.innerHTML = txt );
}
