let alunos = [
 { "nome": "Ana", "idade": 14 },
 { "nome": "Leo", "idade": 18 },
 { "nome": "Nina", "idade": 13 }
]
const maiores = alunos.filter(aluno => aluno.idade >= 18);

console.log(maiores)