// Correção simples
for (let i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

// Closure explicito
for (var i = 0; i < 5; i++) {
  (function(j) {
    setTimeout(function() {
      console.log(j);
    }, 1000);
  })(i);
}
