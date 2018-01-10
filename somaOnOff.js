var Lexer = require('lex')

// ------------------Soma on/off------------------
var lex_soma = new Lexer
var soma=0, flag=1
var strSoma = ""
lex_soma.addRule(/(\r\n)|\n/, function(){
    strSoma += "\n"
}).addRule(/=/, function(){
    strSoma += "\nSOMA: " + soma + "\n"
}).addRule(/\d+/, function(lexema){
    if(flag) soma += parseInt(lexema)
}).addRule(/!off!/, function(){
    flag = 0
}).addRule(/!on!/, function(){
    flag = 1
})
.addRule(/###/, function(){
    soma = 0
})
.addRule(/./, function(lexema){
    strSoma += lexema
})
// ------------------Tratamento dos pedidos-------
console.log("Executando...")
lex_soma.setInput("12\n13\n=")
lex_soma.lex()
console.log("RES: "+strSoma)