const numero1 = document.getElementById('numero1')
const numero2 = document.getElementById('numero2')
const operacao = document.getElementById('operacao')
const botao = document.getElementById('botao')
const resultado = document.getElementById('resultado')

botao.addEventListener('click', function() {
    const num1 = parseFloat(numero1.value)
    const num2 = parseFloat(numero2.value)
    const op = operacao.value

    switch(op) {
        case 'soma':
            resultado.textContent = num1 + num2
            break
        case 'diminui':
            resultado.textContent = num1 - num2
            brea
        case 'multiplica':
            resultado.textContent = num1 * num2
            break
        case 'divide':
            resultado.textContent = num1 / num2
            break
        default:
            resultado.textContent = 'Selecione uma operação válida.';
    }
});
