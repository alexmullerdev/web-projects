
async function getpkm(nome) {

    const url = `https://pokeapi.co/api/v2/pokemon/${nome}`
    const rec = await fetch(url)
    const pk = await rec.json()
    console.log(pk)

    const types = pk.types[1] ? [pk.types[0].type.name, pk.types[1].type.name] : [pk.types[0].type.name]

    const pokeselect = new Pokemon(pk.name, types, pk.sprites.front_default, pk.id)

    pokeselect.show()

}

class Pokemon {

    constructor(name, types, sprite, id) {
        this.name = name
        this.types = types
        this.sprite = sprite
        this.id = id
    }

    talk() {

        const talk = this.id % 5
        switch (talk) {
            case 0:
                return (this.name.slice(0, 4)) + "... " + this.name
            case 1:
                return (this.name.slice(0, 5)) + ", " + (this.name.slice(0, 5)) + ", " + (this.name.toUpperCase()) + "!!!"

            case 2:
                return "Eu sou o líder de todos os " + this.name + " desse mundo"

            case 3:
                return "Você só quer " + this.name + " shiny né? RACIS**"

            case 4:
                return "Ditto dit... cof cof... opa, quero dizer: " + (this.name.slice(0, 4)) + ", " + (this.name.slice(0, 4))

            default:
                return this.name + ": ..."
        }

    }

    show() {


        function renderType(type, typesDiv) {

            const p = document.createElement("p")
            p.innerHTML = type
            p.classList.add("type")
            p.classList.add("type-" + type)
            typesDiv.appendChild(p)


        }
        function renderTag(tag, className, atribute, valueOfAtribute) {
            const children = document.createElement(tag)
            children.classList.add(className)
            children[`${atribute}`] = valueOfAtribute
            getParent().appendChild(children)

            return children

        }
        function getParent() {
            return document.querySelector(".Card")
        }

        if (document.querySelector(".Card")) {
            const card = document.querySelector(".Card")
            const infos = card.children

            infos[0].innerHTML = "Pokemon: " + this.name

            const typesDiv = infos[1]
            typesDiv.innerHTML = ""

            this.types.forEach(type => {
                renderType(type, typesDiv)
            });

            infos[2].src = this.sprite
            infos[3].innerHTML = this.talk()
            return
        }

        const card = document.createElement("div")
        card.classList.add("Card")
        document.body.appendChild(card)

        renderTag("p", "name", "innerHTML", `Pokemon: ${this.name}`)

        const typesDiv = renderTag("div", "typesDiv", "innerHTML", null)
        this.types.forEach(type => {
            renderType(type, typesDiv)
        });

        renderTag("img", "sprite", "src", this.sprite)

        renderTag("p", "talk", "innerHTML", this.talk())

    }
}
//Criar um jeito de armazenar os object pokemon recebidos
//trabalhar com 2 pokemon, o meu e do rival (computador)
//os pokemon serão gerados aleatoriamente
//haverá um sistema de batalha
//irei exibir o meu pokemon com a sprite back e o oponente sprite front
//posicionarei eles em um campo de batalha
//selecionarei o tipo de minigame que quero desafiar meu oponente caso ele n queira sair no soco com os poke
