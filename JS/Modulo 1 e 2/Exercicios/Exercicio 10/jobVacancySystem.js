const jobs = []

function menu() {
    let option = parseInt(prompt(
        "Olá, seja muito bem-vindo(a) ao nosso inovador sistema de oportunidades de emprego.\n\n" +
        "1. Listar vagas disponíveis\n" +
        "2. Criar uma nova vaga\n" +
        "3. Vizualizar uma vaga\n" +
        "4. Increver um candidato em uma vaga\n" +
        "5. Excluir uma vaga\n" +
        "6. Sair"
    ))

    return option;
}

function questionAndResponse() {
    const question = {
        createJobVacancy: {
            jobName: "Por favor, insira o nome da vaga de emprego:",
            jobDescription: "Por favor, forneça uma descrição para a vaga de emprego:",
            applicationDeadline: "Por favor, insira a data limite para a vaga de emprego (Exemplo: 15/05/2022):",
            confirmCreate: (jobVacancyName, jobVacancyDescription, jobVacancyLimitDate) => {
                return confirm(`Você confirma a sua intenção de excluir esta vaga de emprego?\n\nDetalhes da Vaga:\nTítulo da Vaga: ${jobVacancyName}\nDescrição: ${jobVacancyDescription}\nData Limite: ${jobVacancyLimitDate}`)
            },
            responses: {
                jobCreatedSuccess: "A vaga com o título {{jobTitle}} foi criada com sucesso!",
                jobCreationCanceled: "A vaga intitulada {{jobTitle}} foi cancelada. Você está sendo redirecionado de volta ao menu principal...",
                errorIsNull: "Por favor, insira valores válidos."
            }
        },
        applyforJob: {
            username: "Por favor, insira o seu nome completo:",
            selectedJobVacancy: "Por favor, selecione a vaga à qual deseja se inscrever:",
            confirmCreate: (userName, jobName, jobDescription, jobLimitDate, numberOfCandidates) => {
                return confirm(`Olá ${userName} você tem certeza que deseja aplicar para essa vaga?\n\n Descrição da vaga:\nTitulo da Vaga: ${jobName}\nDescrição: ${jobDescription}\nData Limite: ${jobLimitDate}\nAplicantes: ${numberOfCandidates}`)
            },
            responses: {
                jobApplicationSuccess: "Parabéns, {{userName}}! Sua inscrição para a vaga {{jobTitle}} foi realizada com sucesso!",
                jobApplicationCanceled: "Sua inscrição para a vaga {{jobTitle}} foi cancelada. Você está sendo redirecionado de volta ao menu principal...",
                errorIsNaN: "{{userName}} você deve selecionar a vaga de acordo com o número correspondente a ela.",
                errorNoExist: "Lamento {{userName}}, mas essa vaga não existe"
            }
        },
        deleteJobVacancy: {
            selectedJobVacancy: "Por favor, selecione a vaga que você gostaria de remover:",
            confirmCreate: (jobName, jobDescription, jobLimitDate, numberOfCandidates) => {
                return confirm(`Olá, você tem certeza que deseja aplicar para essa vaga?\n\nDescrição da vaga:\nTitulo da Vaga: ${jobName}\nDescrição: ${jobDescription}\nData Limite: ${jobLimitDate}\nAplicantes: ${numberOfCandidates}`)
            },
            responses: {
                jobDeletionSuccess: "A vaga {{jobTitle}} foi excluída com sucesso!",
                jobDeletionCanceled: "Você cancelou a exclusão da vaga {{jobTitle}}. Retornando ao menu...",
                errorIsNaN: "Para apagar a vaga, selecione-a através do número correspondente.",
                errorNoExist: "Lamento, mas esta vaga não existe"
            }
        },
        listJobs: {
            responses: {
                noAvailableJobs: "Atualmente, não há vagas disponíveis. Por favor, verifique novamente mais tarde",
                jobsList: "Olá! Bem-vindo ao nosso sistema de oportunidades de emprego.\nAqui estão as vagas disponíveis:\n\n{{result}}",
                displayResult: (indice, jobName, jobDescription, jobLimitDate, numberOfCandidates, candidates) => {
                    return `${indice + 1}ª Vaga de Emprego:\n\nTitulo da vaga: ${jobName}\nDescrição: ${jobDescription}\nData Limite: ${jobLimitDate}\nQuantidade de Aplicantes: ${numberOfCandidates}\nAplicantes: ${candidates}`
                }
            }
        }
    }

    return question;
}
//Lista todas as vagas disponíveis em uma unica lista
function listAllJobVacancy(question) {
    if (jobs.length === 0) {
        return question.listJobs.responses.noAvailableJobs
    } else {
        let result = ""
        for (let i = 0; i < jobs.length; i++) {
            result += (i + 1) + "ª Vaga: " + "Titulo: - " + jobs[i].jobVacancyName + " | Candidatos: " + jobs[i].jobVacancyCandidates.length + "\n"
        }
        return question.listJobs.responses.jobsList.replace("{{result}}", result)
    }
}
//
function createNewJobVacancy(jobVacancyName, jobVacancyDescription, jobVacancyLimitDate, question) {
    if (!jobVacancyName || !jobVacancyDescription || !jobVacancyLimitDate) {
        return question.createJobVacancy.responses.errorIsNull
    }
    const jobVacancy = {
        jobVacancyName, jobVacancyDescription, jobVacancyLimitDate, jobVacancyCandidates: Array()
    }

    const confirmation = question.createJobVacancy.confirmCreate(jobVacancyName, jobVacancyDescription, jobVacancyLimitDate)

    if (confirmation) {
        jobs.push(jobVacancy)
        return question.createJobVacancy.responses.jobCreatedSuccess.replace("{{jobTitle}}", jobVacancyName);
    } else {
        return question.createJobVacancy.responses.jobCreationCanceled.replace("{{jobTitle}}", jobVacancyName);
    }
}

function listJobVacancy(question) {
    if (jobs.length === 0) {
        return question.listJobs.responses.noAvailableJobs
    }
    const results = [];

    for (let i = 0; i < jobs.length; i++) {
        let candidates = "";
        for (let x = 0; x < jobs[i].jobVacancyCandidates.length; x++) {
            candidates += jobs[i].jobVacancyCandidates[x].name + ", "
        }

        const checkCandidates = candidates === "" ? "Não existem candidatos para esta vaga no momento" : candidates;
        const result = question.listJobs.responses.displayResult(i, jobs[i].jobVacancyName, jobs[i].jobVacancyDescription, jobs[i].jobVacancyLimitDate, jobs[i].jobVacancyCandidates.length, checkCandidates)
        results.push(result);
    }

    return results;
}

function applyForJob(username, jobVacancySelected, question) {
    const user = { name: username }

    if (!username) {
        return question.createJobVacancy.responses.errorIsNull
    } else if (isNaN(jobVacancySelected)) {
        return question.applyforJob.responses.errorIsNaN.replace("{{userName}}", user.name)
    } else if (!jobs[jobVacancySelected]) {
        return question.applyforJob.responses.errorNoExist.replace("{{userName}}", user.name)
    }

    const confirmation = question.applyforJob.confirmCreate(user.name, jobs[jobVacancySelected].jobVacancyName, jobs[jobVacancySelected].jobVacancyDescription, jobs[jobVacancySelected].jobVacancyLimitDate, jobs[jobVacancySelected].jobVacancyCandidates.length)

    if (confirmation) {
        jobs[jobVacancySelected].jobVacancyCandidates.push(user)
        return question.applyforJob.responses.jobApplicationSuccess.replace("{{userName}}", user.name).replace("{{jobTitle}}", jobs[jobVacancySelected].jobVacancyName)
    } else {
        return question.applyforJob.responses.jobApplicationCanceled.replace("{{jobTitle}}", jobs[jobVacancySelected].jobVacancyName)
    }
}

function deleteJobVacancy(jobVacancySelected, question) {
    if (isNaN(jobVacancySelected)) {
        return question.deleteJobVacancy.responses.errorIsNaN
    } else if (!jobs[jobVacancySelected]) {
        return question.deleteJobVacancy.responses.errorNoExist
    }
    const jobName = jobs[jobVacancySelected].jobVacancyName
    const confirmation = question.deleteJobVacancy.confirmCreate(jobName, jobs[jobVacancySelected].jobVacancyDescription, jobs[jobVacancySelected].jobVacancyLimitDate, jobs[jobVacancySelected].jobVacancyCandidates.length)

    if (confirmation) {
        jobs.splice(jobVacancySelected, 1)
        return question.deleteJobVacancy.responses.jobDeletionSuccess.replace("{{jobTitle}}", jobName)
    } else {
        return question.deleteJobVacancy.responses.jobDeletionCanceled.replace("{{jobTitle}}", jobName)
    }
}

function displayResultsAlert(result) {
    if (Array.isArray(result)) {
        for (const results of result) {
            alert(results);
        }
    } else if (typeof (result) === 'string') {
        alert(result);
    }
}

function execute(question) {
    let option;

    do {
        option = menu();
        let result;

        switch (option) {
            case 1:
                result = listAllJobVacancy(question);
                break;
            case 2:
                const jobVacancyName = prompt(question.createJobVacancy.jobName);
                const jobVacancyDescription = prompt(question.createJobVacancy.jobDescription);
                const jobVacancyLimitDate = prompt(question.createJobVacancy.applicationDeadline);
                result = createNewJobVacancy(jobVacancyName, jobVacancyDescription, jobVacancyLimitDate, question);
                break;
            case 3:
                result = listJobVacancy(question);
                break;
            case 4:
                const name = prompt(question.applyforJob.username);
                const jobVacancy = parseInt(prompt(question.applyforJob.selectedJobVacancy)) - 1
                result = applyForJob(name, jobVacancy, question);
                break;
            case 5:
                const jobVacancySelected = parseInt(prompt(question.deleteJobVacancy.selectedJobVacancy)) - 1
                result = deleteJobVacancy(jobVacancySelected, question);
                break;
            case 6:
                alert("Você está saindo do sistema de vagas de emprego");
                break;
            default:
                alert("Desculpe, não foi possível identificar a opção desejada. Por favor, tente novamente");
        }
        displayResultsAlert(result);
    } while (option !== 6);
}

execute(questionAndResponse());