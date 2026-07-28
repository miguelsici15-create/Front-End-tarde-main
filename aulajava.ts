let nometurma: "JavaCript Básico";
let totalAlunos: number= 5;
let SomaNotas = 0;

for (let i: number= 0; i < totalAlunos; i++) {
    const notaAtual = 8.5;
    SomaNotas=SomaNotas + notaAtual;
}
let statusTurma;
const media = SomaNotas/totalAlunos;

if(media >= 7){
    statusTurma="Aprovado!";
}else if(media <= 5 && media < 7){
    statusTurma="Recuperação!";
}else {
    statusTurma="Reprovado!";
}
console.log(`O Status da turma é: ${statusTurma}`);
console.log(`A nota total foi de: ${SomaNotas}`);
console.log(`A media da turma foi: ${media}`);

let regressiva = 5;
while(regressiva > 0){
console.log(`Encerrando sistema em ${regressiva}...`);
regressiva -= 1;
}