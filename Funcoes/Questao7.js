function meuForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

const numeros = [1, 2, 3, 4];

// Exemplo simples passando cada elemento para o callback
meuForEach(numeros, (elemento, indice) => {
  console.log(`Elemento no índice ${indice}: ${elemento}`);
});
