import CalcularPrecioNeto from './totalizador.js';

describe ('TOtalizador', ()=>{
    it('Obtener precio neto', ()=>{
        expect(CalcularPrecioNeto(20,3)).toEqual(60);
    });
});