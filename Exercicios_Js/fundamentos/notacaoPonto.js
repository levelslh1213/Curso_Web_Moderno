console.log(Math.ceil(6.1)) //Math é um objeto para manipulação de operações matemáticas

const obj1 = {}
obj1.nome = 'bola' //atribui dinamicamente um atributo de objeto
//obj1['nome'] = 'Bola2' --same way
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()