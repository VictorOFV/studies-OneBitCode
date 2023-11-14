"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const database = [];
function saveUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield fetch(`https://api.github.com/users/${user}`);
        if (data.status === 200) {
            const dataJson = yield data.json();
            const { id, login, name, bio, public_repos, repos_url } = dataJson;
            database.push({ id, login, name, bio, public_repos, repos_url });
            alert(`Usuário ${name} salvo no banco de dados!`);
        }
        else {
            alert("Usuário não encontrado!");
        }
    });
}
function findUser(userName) {
    const data = database.find(({ login }) => login.toLowerCase() === userName.toLowerCase());
    return data;
}
function getRepository(userName) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = findUser(userName);
        const repository = !(user === null || user === void 0 ? void 0 : user.repos_url) ? false : yield fetch(user.repos_url).then(res => res.json());
        return repository;
    });
}
function showRepository(userName) {
    return __awaiter(this, void 0, void 0, function* () {
        const userRepository = yield getRepository(userName);
        if (!userRepository) {
            alert(`Usuário ${userName} não encontrado no banco de dados!`);
        }
        else if (userRepository.length === 0) {
            alert(`O usuário ${userName} não possui o repositório publico ou não tem projetos.`);
        }
        else {
            let result = `Repositório de ${userName}\n\n`;
            userRepository.slice(0, 4).forEach((repo) => {
                result += `Nome: ${repo.name}\nDescrição: ${!repo.description ? "..." : repo.description}\nColaborativo: ${repo.fork ? "Sim" : "Não"}\nFavoritado: ${repo.stargazers_count}x\n\n`;
            });
            alert(result);
        }
    });
}
function listUsers() {
    database.forEach(({ name, id, login, bio, public_repos, repos_url }) => {
        alert(`Nome: ${name}\nUser: ${login}\nID: ${id}\nBiografia: ${!bio ? "..." : bio}\nRepositórios: ${public_repos}\nLink Rep.: ${repos_url}`);
    });
}
function calculateAllRepository() {
    const value = database.reduce((currentValue, user) => user.public_repos + currentValue, 0);
    alert(`O valor somado de todos os repositórios é ${value}`);
}
function topUsers() {
    const topUsersArr = database.map(({ name, public_repos }) => {
        return { name, public_repos };
    }).sort((a, b) => b.public_repos - a.public_repos).slice(0, 5);
    let result = "Top 5 com mais repositórios\n\n";
    topUsersArr.forEach((user, index) => {
        result += `[ ${index + 1}° ] - ${user.name} | ${user.public_repos} Repositórios\n`;
    });
    alert(result);
}
function promptFistOption() {
    return __awaiter(this, void 0, void 0, function* () {
        const username = prompt("Digite o nome do usuário do github a ser salvo");
        if (username) {
            yield saveUser(username);
        }
    });
}
function promptSecondOption() {
    return __awaiter(this, void 0, void 0, function* () {
        const username = prompt("Digite o nome do usuário que você deseja ver os repositórios");
        if (username) {
            yield showRepository(username);
        }
    });
}
function menu() {
    return __awaiter(this, void 0, void 0, function* () {
        let option;
        do {
            option = Number(prompt("1. Adicionar Usuário\n2. Mostrar Repositório\n3. Listar Usuários\n4. Total de Repositórios\n5. Top 5 Usuários\n6. Sair"));
            switch (option) {
                case 1:
                    yield promptFistOption();
                    break;
                case 2:
                    yield promptSecondOption();
                    break;
                case 3:
                    listUsers();
                    break;
                case 4:
                    calculateAllRepository();
                    break;
                case 5:
                    topUsers();
                    break;
                case 6:
                    alert("Saindo do programa...");
                    break;
                default: alert("Opção não encontrada");
            }
        } while (option !== 6);
    });
}
document.addEventListener("DOMContentLoaded", menu);
