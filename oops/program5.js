baleno = {
    model:'hatchback',
    varient:['automatic','manual'],
    manufacturer: 'Maruti'
}

glanza = {
    manufacturer: 'Toyota'
}

glanza.__proto__ = baleno

console.log(glanza.model);