function concluido() {
    let nome = document.getElementById('nome').value;
    let sobrenome = document.getElementById('sobrenome').value;
    let idade = document.getElementById('idade').value;
    let email = document.getElementById('email').value;
    let dadosNaTela = document.getElementById('dados');
    
    console.log(`Nome: ${nome} ${sobrenome}`);
    console.log(`${idade} anos`);
    console.log(`Email: ${email}`);

    dadosNaTela.textContent = `Nome: ${nome} ${sobrenome}; ${idade} anos; Email: ${email}.`;
}

