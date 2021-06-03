    let list = document.getElementById('listPokemon')


    function consultPokemon(id, num){
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(function (response) {
                response.json()
                .then(function (pokemon) {
                    crearPokemon(pokemon, num)
            })
        })
    }

    function consultPokemones() {
        let premierId = Math.round(Math.random() * 150)
        let secondId = Math.round(Math.random() * 150)

        consultPokemon(premierId, 1)
        consultPokemon(secondId, 2)
    }

    function crearPokemon(pokemon, num) {
        //convertir la data sur le html
        let item = list.querySelector(`#pokemon-${num}`)

        let image = item.getElementsByTagName("img")[0]
        image.setAttribute("src", pokemon.sprites.front_default)

        let nombre = item.getElementsByTagName("p")[0]
        nombre.textContent = pokemon.name

    }

    consultPokemones()
