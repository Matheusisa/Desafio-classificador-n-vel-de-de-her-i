// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói

let nomeHeroi = ["Matheus o Brabo"]
let xpDeHeroi = [9700]

// Utilize uma estrutura de decisão para classificar o nível do herói
let nivelDoHeroi;
if (xpDeHeroi < 1000) {
    nivelDoHeroi = "Ferro";
} else if (xpDeHeroi >= 1001 && xpDeHeroi <= 2000) {
    nivelDoHeroi = "Bronze";
} else if (xpDeHeroi >= 2001 && xpDeHeroi <= 5000) {
    nivelDoHeroi = "Prata";
} else if (xpDeHeroi >= 5001 && xpDeHeroi <= 7000) {
    nivelDoHeroi = "Ouro";
} else if (xpDeHeroi >= 7001 && xpDeHeroi <= 8000) {
    nivelDoHeroi = "Platina";
} else if (xpDeHeroi >= 8001 && xpDeHeroi <= 9000) {
    nivelDoHeroi = "Ascendente";
} else if (xpDeHeroi >= 9001 && xpDeHeroi <= 10000) {
    nivelDoHeroi = "Imortal";
} else {
    nivelDoHeroi = "Radiante";
}

console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelDoHeroi}`);
