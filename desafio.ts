const produto:{
    categoria: string;
    cor: string | null
    preco: number
    quantidade: number | null
    marca: string
}[]=[
    {
        categoria: 'Camisa',
        cor:"Vermelho",
        preco: 100,
        quantidade: null,
        marca: "nike"
    },
    {
        categoria: 'Ucrania',
        cor: "azul e amarelo",
        preco: 1,
        quantidade: null,
        marca: "união Europeia"
    },
    {
        categoria: 'Tenis',
        cor: "Preto",
        preco: 10,
        quantidade: null,
        marca: "Puma"
    },
    {
        categoria: 'Short',
        cor: "azul",
        preco: 10,
        quantidade: null,
        marca: "Nike"
    },{
        categoria: 'Curso',
        cor: "azul",
        preco: 100,
        quantidade: null,
        marca: "Firjan"
    },

]

console.log(produto)