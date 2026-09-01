function criarContaBancaria(saldoInicial) {
  let saldo = saldoInicial;

  return {
    depositar(valor) {
      if (valor > 0) {
        saldo += valor;
        return `Depósito de R$ ${valor} realizado. Novo saldo: R$ ${saldo}`;
      }
      return "Valor de depósito inválido.";
    },

    sacar(valor) {
      if (valor > 0 && valor <= saldo) {
        saldo -= valor;
        return `Saque de R$ ${valor} realizado. Novo saldo: R$ ${saldo}`;
      } else if (valor > saldo) {
        return "Saldo insuficiente.";
      }
      return "Valor de saque inválido.";
    },

    consultarSaldo() {
      return saldo;
    }
  };
}

const conta = criarContaBancaria(100);

console.log(conta.consultarSaldo());
console.log(conta.depositar(50));
console.log(conta.sacar(30));
console.log(conta.consultarSaldo()); 


console.log(conta.saldo); // undefined