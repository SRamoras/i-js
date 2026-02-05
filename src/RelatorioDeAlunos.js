var prompt = require('prompt-sync')();

function funcA(){
    let name  = prompt("Insira o nome do aluno: ");
    let finalName = name ? name : "Sem nome"

    const role = prompt(`Insira a função do ${finalName}: `);
    
    const quatityGrades = Number(prompt(`Insira o numero de notas que deseja adicionar ao ${finalName}: `));
    let gradesArray = []
    let count = 1
    let grade = null
    let id = alunos.length + 1
    while(count <= quatityGrades){
        do {
            grade = Number(prompt(`Insira a nota nº ${count} do ${finalName}: `));
        } while(grade < 0 || grade > 20)
        
        gradesArray = [...gradesArray, grade]
        count++
    }
    return [...alunos, {id: id, name: finalName, grades: gradesArray, role: role}]
}


function funcB(alunos){
    return alunos.map(aluno => {
        let media = haddleMedia(aluno.grades)
        
        const name =
            aluno.name === "" ? "Sem nome" :
            aluno.name === null || aluno.name === undefined ? "Anonimo" :
            aluno.name;
        
        const status = media >= 10 ? "Aprovado" : "Reprovado";

        return `${name} - média: ${media.toFixed(2)} - status: ${status} - role: ${roleAtribution(aluno.role)}`
    })
}

function funcC(lista){
    lista.map((string, index) => {
        console.log(`${index + 1}) ${string}`)
    })
}


function haddleMedia(grades){
    if(grades.length === 0) {
        return 0
    }

    let media = 0
    for (const grade of grades) {
        media += grade
    }
    return media / grades.length
}


function roleAtribution(role){
    role = role.toLowerCase()
    switch (role) {
        case "admin": 
            return "[Acesso total]"
        case "editor": 
            return "[Pode editar]"
        default:
            return "[Acesso limitado]"
    }
}


let alunos = [
    {id: 1, name: "Diogo", grades: [12, 9, 8], role: "admin"}, 
    {id: 2, name: "David", grades: [9, 8, 7], role: "editor"}, 
    {id: 3, name: "", grades: [], role: "Admin"}, 
    {id: 4, name: null, grades: [0], role: "aluno"},
    {id: 5, name: "Laura", grades: [20, 18, 17], role: "aluno"}
]

let linhas = []
let swich = true
while(swich){
    console.log("\x1b[36mRelatório de Alunos\x1b[0m");

    console.log("\x1b[32m1\x1b[0m - Adicionar aluno");
    console.log("\x1b[32m2\x1b[0m - Mostrar resultados dos alunos");
    console.log("\x1b[32m3\x1b[0m - Mostrar relatório");
    console.log("\x1b[31m0\x1b[0m - Sair");


    let option = Number(prompt("Opção: "));
    
    switch (option) {
        case 1: 
            alunos = funcA();
            break;
        case 2: 
            console.log(funcB(alunos))
            linhas = funcB(alunos)
            break;
        case 3: 
            linhas = funcB(alunos)
            funcC(linhas)
            break;
        case 0:
            console.log("Adeus")
            swich = false
            break;
        default:
            console.log("Opção errada")
    }
}