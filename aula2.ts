const produtos:{
categoria:string;
cor:string | null
preco:number
quantidade: number | null
marca: string
}[]=[
    {
 categoria: 'Batom',
    cor: "Vermelho",
    preco: 30,
    quantidade: null,
    marca: "Oboticario"
    },
    {
        categoria: 'Batom',
        cor: "Marrom",
        preco: 23,
        quantidade: null,
        marca: "Oboticario"
    },
    {
categoria: 'Batom',
        cor: "verde",
        preco: 24,
        quantidade: null,
        marca: "Oboticario"
    },
    {
        categoria: 'Eletronico',
        cor: "Azul Marinho",
        preco: 24,
        quantidade: null,
        marca: "Iphone"
    },
    
]

console.log(produtos)
console.log("=============================")
const produtosatualizados ={...produtos[0]}
produtosatualizados.categoria ="Batom"

console.log("produtos", produtos)
console.log("produtos2", produtosatualizados)

