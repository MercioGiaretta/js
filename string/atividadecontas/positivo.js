let pessoa = {
    idade: 19,
    cnh: true,
    auto: true,
}

if (pessoa.idade >= 18 && pessoa.cnh == true && pessoa.auto == true) {
    console.log('Você está Autorizado')
}else if(pessoa.idade >= 18 && pessoa.cnh == false && pessoa.auto == true || pessoa > 18 && pessoa.auto == true ){
    console.log("Autorizado, mas não pode dirigir.")
}
else {
    console.log('Você não está Autorizado') 
}