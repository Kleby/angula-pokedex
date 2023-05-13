export type PokemonData = {
    name: string,
    id: string,
    sprites: {
        'front_default' : string
    },
    types: [{
        type: {
            name: string
        }
    }]
}