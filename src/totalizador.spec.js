import CalcularPrecioNeto from './totalizador.js';

describe('Ventas', () => {
    it('Obtener precio neto', ()=>{
        expect(CalcularPrecioNeto()).toEqual(60);
    });
});