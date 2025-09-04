import CalcularPrecioNeto from './totalizador.js';

describe('Ventas', () => {
    it('Obtener precio neto', ()=>{
        expect(CalcularPrecioNeto(20,3)).toEqual(60);
    });
    it('Obtener precio neto', ()=>{
        expect(CalcularPrecioNeto(20,4)).toEqual(80);
    });
});