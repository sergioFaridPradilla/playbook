import Pokemon from './pokemon.js'

test('Mi test 1) Create a new object pokemon', () => {
  const myPokemon = new Pokemon('Pikachu')
  expect(myPokemon.name).toBe('Pikachuss'); // Corrige esta prueba
});