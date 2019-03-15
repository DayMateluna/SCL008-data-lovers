global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

const data =[{
  feedlabel: "TF2 Blog"

},
{
  feedlabel: "Product Update"
},
{
  feedlabel: "PC Gamer"
}
]

describe('filtrar feedlabel', () => { //a quien voy a testear
  

  it('debería ser una función', () => { //lo que voy a testear
    assert.deepEqual(typeof filterData, 'function');//depequal metodo a usar para testera(metodo en la pag chai)
  });

  it('debería retornar "PC Gamer"', () => {
    assert.deepEqual(window.filterData(data,"PC Gamer"), ([{feedlabel:"PC Gamer"}]));//assert quien se encarga de testear ,evaluar que el test haga lo que tenga que hacer

  });
})


describe('calcular feedlabel', () => { //a quien voy a testear
  

  it('debería ser una función', () => { //lo que voy a testear
    assert.deepEqual(typeof computeStast, 'function');//depequal metodo a usar para testera(metodo en la pag chai)
  });

  it('debería retornar "30% de titulos por noticia"', () => {
    assert.deepEqual(window.computeStast(3), (30)) ;//assert quien se encarga de testear ,evaluar que el test haga lo que tenga que hacer

  });
})
 