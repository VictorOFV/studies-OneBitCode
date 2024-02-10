const readline = require("node:readline")

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

// rl.on("line", (input) => { // Escreve diretamente no terminal
//     rl.write(`Você digitou: ${input}`)
// })

// rl.question("Você gosta de goticas? (S/N)\n", (answer) => { // faz perguntas
//     if (answer.trim().toLowerCase() === "s") {
//         rl.write(`Pois é... eu também gosto.\n`)
//     } else if (answer.trim().toLowerCase() === "n") {
//         rl.write("Você não tem um bom gosto\n")
//     }
// })

// rl.on("SIGINT", () => { // evento que detecta quando você força o fechamento da aplicaçao
//     rl.question("Você realmente deseja sair do app? (S/N)", (answer) => {
//         if(answer.trim().toLowerCase() === "s") {
//             rl.close()
//         } else {
//             rl.write("Continuando a aplicação")
//         }
//     })
// })

// rl.on("close", () => { // evento que detecta quando você fecha a aplicação
//     rl.write("Saindo da aplicação...\n")
//     process.exit(0)
// })

const questions = [
    "Qual é o seu nome? ",
    "Quantos anos você tem? ",
    "Tem namorada ou namorado? ",
    "Você é empregado? "
];

function askQuestion(index) {
    return new Promise((resolve) => {
        rl.question(questions[index], (answer) => {
            resolve(answer);
        });
    });
}

async function askQuestions() {
    const answers = [];
    for (let i = 0; i < questions.length; i++) {
        const answer = await askQuestion(i);
        answers.push(answer);
    }
    console.log("Respostas:", answers);
    rl.close();
}

askQuestions();