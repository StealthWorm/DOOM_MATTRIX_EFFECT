var c = document.getElementById("c");
var ctx = c.getContext("2d");
var vert_space = 1;
c.width = 490
c.height = 320

// Caracteres chineses do matrix
var chinese = "01";
// Converte a string em um array de caracteres únicos
chinese = chinese.split("");

var font_size = 10;
var columns = c.width / font_size; // Número de colunas do efeito (largura do <canvas> / tamanho da fonte)
// Um array cai - por coluna
var drops = [];
// A variável x representa a coordenada X
// Coordenada da queda 1=y (repete-se em cada inicialização)
for (var x = 0; x < columns; x++)
    drops[x] = 1;

// Escrevendo os caracteres

function increaseVerticalMargin() {
    vert_space = vert_space +1
}
    
  

function draw() {
    // Fundo preto no <canvas>
    // Fundo translucido para mostrar o efeito dos caracteres
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "#0F0"; // Texto verde
    ctx.font = font_size + "px arial";
    // Loop entre as quedas de caracteres
    for (var i = 0; i < drops.length; i++) {
        // Escreve um caractere chinês aleatório
        var text = chinese[Math.floor(Math.random() * chinese.length)];
        // x = i*tamanho_da_fonte || y = valor das quedas[i]*tamanho_da_fonte
        ctx.fillText(text, i * font_size * vert_space, drops[i] * font_size);

        // Manda a queda de volta ao topo depois de atravessar toda a tela
        // Randomizando o reset para as quedas se espalharem verticalmente na tela
        if (drops[i] * font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;

        // Incrementando a coordenada Y
        drops[i]++;
    }
}

setInterval(draw, 33);