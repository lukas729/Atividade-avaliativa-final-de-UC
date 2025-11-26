let produtos =[
{ "produto": "Lápis", "preco": 2 },
{ "produto": "Mochila", "preco": 80 },
{ "produto": "Caderno", "preco": 15 }
]
const valores = produtos.filter(produto => produto.preco >= 20);
console.log(valores)