const prompt = require("prompt-sync")();

// Função para capturar notas de uma matéria.
function capturarNotas(materia) {
    let notas = [];
    for (let i = 0; i < 3; i++) {
        let nota;
        do {
            nota = prompt(`${i + 1} - Digite a nota de ${materia}: `);
            nota = parseFloat(nota); // Converte para número float
            if (isNaN(nota) || nota < 0 || nota > 10) {
                console.log("Por favor, digite uma nota válida entre 0 e 10.");
            }
        } while (isNaN(nota) || nota < 0 || nota > 10);
        notas.push(nota);
    }
    return notas;
}

// Função para capturar o número de faltas de uma matéria.
function capturarFaltas(materia) {
    let faltas;
    do {
        faltas = prompt(`Digite o número de faltas de ${materia}: `);
        faltas = parseInt(faltas); // Converte para número inteiro.
        if (isNaN(faltas) || faltas < 0) {
            console.log("Por favor, digite um número válido para as faltas.");
        }
    } while (isNaN(faltas) || faltas < 0);
    return faltas;
}

// Função para calcular a média de um conjunto de notas.
function calcularMedia(notas) {
    let soma = notas.reduce((acc, nota) => acc + nota, 0);
    return soma / notas.length;
}

// Função principal para o programa.
function main() {
    console.log("=== Sistema de Gestão de Notas ===");

    const nomeAluno = prompt("Digite o nome do aluno: ");
    let materias = [];
    let continuar = true;

    // Loop para permitir que o aluno escolha e cadastre matérias.
    while (continuar || materias.length < 3) {
        const materia = prompt("Digite o nome da matéria (ou deixe em branco para parar): ");
        if (materia.trim() === "") {
            continuar = false; // Sai do loop se o usuário deixar em branco.
        } else {
            materias.push(materia.trim()); // Adiciona a matéria ao array de matérias.
        }
    }

    if (materias.length < 3) {
        console.log("É necessário cadastrar no mínimo 3 matérias. Encerrando o programa.");
        return;
    }

    // Diz sobre cada matéria escolhida pelo aluno.
    materias.forEach(materia => {
        console.log(`\n--- Matéria: ${materia} ---`);

        // Captura as notas e calcula a média.
        const notas = capturarNotas(materia);
        const media = calcularMedia(notas);

        // Captura o número de faltas.
        const faltas = capturarFaltas(materia);

        // Verifica aprovação ou reprovação.
        if (media >= 6 && faltas <= 5) {
            console.log(`Aluno aprovado com média ${media.toFixed(2)} e ${faltas} falta(s).`);
        } else {
            console.log(`Aluno reprovado com média ${media.toFixed(2)} e ${faltas} falta(s).`);
        }
    });
}

// Chamada da função principal para iniciar o programa.
main();
