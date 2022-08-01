/**************
* Les variables
**************/

// Variables pour les scores
let numberOfGoodAnswers = 0;
let numberOfBadAnswers = 0;

// Tableau permettant de récupérer les 3 mauvaises réponses
let badAnswers = document.querySelectorAll('.badAnswer');

// Ordre des réponses
let orders = ['order-1', 'order-2', 'order-3', 'order-4'];

// Variable choix du jeu
let mode = '';

// Département sélectionné
let selectedDepartment = '';

// Tableau des départements
let departments = [];
departments[0] = ['Ain', 'Bourg-en-Bresse', '01'];
departments[1] = ['Aisne', 'Laon', '02'];
departments[2] = ['Allier', 'Moulins', '03'];
departments[3] = ['Alpes-de-Haute-Provence', 'Digne-les-Bains', '04'];
departments[4] = ['Hautes-Alpes', 'Gap', '05'];
departments[5] = ['Alpes-Maritimes', 'Nice', '06'];
departments[6] = ['Ardèche', 'Privas', '07'];
departments[7] = ['Ardennes', 'Charleville-Mézières', '08'];
departments[8] = ['Ariège', 'Foix', '09'];
departments[9] = ['Aube', 'Troyes', '10'];
departments[10] = ['Aude', 'Carcassonne', '11'];
departments[11] = ['Aveyron', 'Rodez', '12'];
departments[12] = ['Bouches-du-Rhône', 'Marseille', '13'];
departments[13] = ['Calvados', 'Caen', '14'];
departments[14] = ['Cantal', 'Aurillac', '15'];
departments[15] = ['Charente', 'Angoulême', '16'];
departments[16] = ['Charente-Maritime', 'La-Rochelle', '17'];
departments[17] = ['Cher', 'Bourges', '18'];
departments[18] = ['Corrèze', 'Tulle', '19'];
departments[19] = ['Corse-Du-Sud', 'Ajaccio', '2A'];
departments[20] = ['Haute-Corse', 'Bastia', '2B'];
departments[21] = ['Côte-D\'Or', 'Dijon', '21'];
departments[22] = ['Côtes-D\'Armor', 'Saint-Brieuc', '22'];
departments[23] = ['Creuse', 'Guéret', '23'];
departments[24] = ['Dordogne', 'Périgueux', '24'];
departments[25] = ['Doubs', 'Besançon', '25'];
departments[26] = ['Drôme', 'Valence', '26'];
departments[27] = ['Eure', 'Évreux', '27'];
departments[28] = ['Eure-Et-Loir', 'Chartres', '28'];
departments[29] = ['Finistère', 'Quimper', '29'];
departments[30] = ['Gard', 'Nîmes', '30'];
departments[31] = ['Haute-Garonne', 'Toulouse', '31'];
departments[32] = ['Gers', 'Auch', '32'];
departments[33] = ['Gironde', 'Bordeaux', '33'];
departments[34] = ['Hérault', 'Montpellier', '34'];
departments[35] = ['Ille-Et-Vilaine', 'Rennes', '35'];
departments[36] = ['Indre', 'Châteauroux', '36'];
departments[37] = ['Indre-Et-Loire', 'Tours', '37'];
departments[38] = ['Isère', 'Grenoble', '38'];
departments[39] = ['Jura', 'Lons-le-Saunier', '39'];
departments[40] = ['Landes', 'Mont-De-Marsan', '40'];
departments[41] = ['Loir-Et-Cher', 'Blois', '41'];
departments[42] = ['Loire', 'Saint-Étienne', '42'];
departments[43] = ['Haute-Loire', 'Le-Puy-En-Velay', '43'];
departments[44] = ['Loire-Atlantique', 'Nantes', '44'];
departments[45] = ['Loiret', 'Orléans', '45'];
departments[46] = ['Lot', 'Cahors', '46'];
departments[47] = ['Lot-Et-Garonne', 'Agen', '47'];
departments[48] = ['Lozère', 'Mende', '48'];
departments[49] = ['Maine-Et-Loire', 'Angers', '49'];
departments[50] = ['Manche', 'Saint-Lô', '50'];
departments[51] = ['Marne', 'Châlons-en-Champagne', '51'];
departments[52] = ['Haute-Marne', 'Chaumont', '52'];
departments[53] = ['Mayenne', 'Laval', '53'];
departments[54] = ['Meurthe-Et-Moselle', 'Nancy', '54'];
departments[55] = ['Meuse', 'Bar-le-Duc', '55'];
departments[56] = ['Morbihan', 'Vannes', '56'];
departments[57] = ['Moselle', 'Metz', '57'];
departments[58] = ['Nièvre', 'Nevers', '58'];
departments[59] = ['Nord', 'Lille', '59'];
departments[60] = ['Oise', 'Beauvais', '60'];
departments[61] = ['Orne', 'Alençon', '61'];
departments[62] = ['Pas-De-Calais', 'Arras', '62'];
departments[63] = ['Puy-De-Dôme', 'Clermont-Ferrand', '63'];
departments[64] = ['Pyrénées-Atlantiques', 'Pau', '64'];
departments[65] = ['Hautes-Pyrénées', 'Tarbes', '65'];
departments[66] = ['Pyrénées-Orientales', 'Perpignan', '66'];
departments[67] = ['Bas-Rhin', 'Strasbourg', '67'];
departments[68] = ['Haut-Rhin', 'Colmar', '68'];
departments[69] = ['Rhône', 'Lyon', '69'];
departments[70] = ['Haute-Saône', 'Vesoul', '70'];
departments[71] = ['Saône-Et-Loire', 'Mâcon', '71'];
departments[72] = ['Sarthe', 'Le-Mans', '72'];
departments[73] = ['Savoie', 'Chambéry', '73'];
departments[74] = ['Haute-Savoie', 'Annecy', '74'];
departments[75] = ['Paris', 'Paris', '75'];
departments[76] = ['Seine-Maritime', 'Rouen', '76'];
departments[77] = ['Seine-Et-Marne', 'Melun', '77'];
departments[78] = ['Yvelines', 'Versailles', '78'];
departments[79] = ['Deux-Sèvres', 'Niort', '79'];
departments[80] = ['Somme', 'Amiens', '80'];
departments[81] = ['Tarn', 'Albi', '81'];
departments[82] = ['Tarn-Et-Garonne', 'Montauban', '82'];
departments[83] = ['Var', 'Toulon', '83'];
departments[84] = ['Vaucluse', 'Avignon', '84'];
departments[85] = ['Vendée', 'La-Roche-Sur-Yon', '85'];
departments[86] = ['Vienne', 'Poitiers', '86'];
departments[87] = ['Haute-Vienne', 'Limoges', '87'];
departments[88] = ['Vosges', 'Épinal', '88'];
departments[89] = ['Yonne', 'Auxerre', '89'];
departments[90] = ['Territoire-De-Belfort', 'Belfort', '90'];
departments[91] = ['Essonne', 'Évry', '91'];
departments[92] = ['Hauts-De-Seine', 'Nanterre', '92'];
departments[93] = ['Seine-Saint-Denis', 'Bobigny', '93'];
departments[94] = ['Val-De-Marne', 'Créteil', '94'];
departments[95] = ['Val-D\'Oise', 'Pontoise', '95'];


/**************
* Les fonctions
**************/

// Fonction permettant de générer 4 nombres aléatoires compris entre min et max, tous différents
function getRandomNumber(min, max, numberElements) {
    let numbers = [];
    let i = 0;
    while (i < numberElements) {
        let randomNumber = Math.floor((Math.random() * (max+1-min)) +min);
        if (numbers.indexOf(randomNumber) == -1) {
            numbers.push(randomNumber);
            i += 1;
        }
    }
    return numbers;
}


// Fonction permettant de lancer le jeu en fonction du mode choisi
function play(questionItem, itemAnswer) {

    numbers = getRandomNumber(0, 95, 4);

    // Choix de la question en fonction du mode de jeu
    if (mode == 'findTheCapitalOfDepartment') {
        question.innerHTML = `<p> Quel chef-lieu a pour département : <span class="itemToFind">${departments[numbers[0]][questionItem]}</span> ? </p>`;
    } else if (mode == 'findTheDepartmentOfCapital') {
        question.innerHTML = `<p> Quel département a pour chef-lieu : <span class="itemToFind">${departments[numbers[0]][questionItem]}</span> ? </p>`;
    } else if (mode == 'findTheCodeOfDepartment') {
        question.innerHTML = `<p> Quel est le code du département : <span class="itemToFind">${departments[numbers[0]][questionItem]}</span> ? </p>`;
    } else if (mode == 'findTheDepartmentOfCode') {
        question.innerHTML = `<p> Quel département a pour code : <span class="itemToFind">${departments[numbers[0]][questionItem]}</span> ? </p>`;
    }

    // Ordre aléatoire des réponses
    orders.sort(() => Math.random() - 0.5);
    goodAnswer.classList.add(orders[3]);
    badAnswers[0].classList.add(orders[0])
    badAnswers[1].classList.add(orders[1])
    badAnswers[2].classList.add(orders[2])

    // Choix des réponses
    setTimeout(function () {
        document.getElementById(departments[numbers[0]][0]).classList.add('selectedDepartment');
        goodAnswer.innerHTML = departments[numbers[0]][itemAnswer];
        badAnswers[0].innerHTML = departments[numbers[1]][itemAnswer];
        badAnswers[1].innerHTML = departments[numbers[2]][itemAnswer];
        badAnswers[2].innerHTML = departments[numbers[3]][itemAnswer];
    }, 300);

}


// Fonction permettant de vérifier la réponse et d'afficher continuer et arrêter
function verification() {
    //Affiche le bouton suivant ou terminer
    next.disabled = false;
    next.classList.remove('next');
    next.classList.add('nextActive');
    answer.style.display = "block";
    // Désactive la bonne réponse et la met en vert
    goodAnswer.classList.remove('mainButton');
    goodAnswer.classList.add('goodAnswerItem');
    goodAnswer.disabled = true;

    // Désactive les mauvaises réponses et les met en rouge
    for (let badAnswer of badAnswers) {
        badAnswer.disabled = true;
        badAnswer.classList.remove('mainButton');
        badAnswer.classList.add('badAnswerItem');
    }
}

//Fonction permettant de faire disparaître la vérification et réinitialiser les réponses
function reset() {
    // Désactive la bonne réponse et la met en vert
    goodAnswer.classList.add('mainButton');
    goodAnswer.classList.remove('goodAnswerItem');
    goodAnswer.classList.remove('goodAnswerItem', orders[3]);
    goodAnswer.disabled = false;

    // Désactive les mauvaises réponses et les met en rouge
    for (badAnswer of badAnswers) {
        badAnswer.disabled = false;
        badAnswer.classList.add('mainButton');
        badAnswer.classList.remove('badAnswerItem', 'order-1', 'order-2', 'order-3', 'order-4');
    }
    document.getElementById(departments[numbers[0]][0]).classList.remove('selectedDepartment');
    answer.innerHTML = '<p class="fs-5">Choisissez une réponse</p>'
    next.disabled = true;
    next.classList.add('next');
    next.classList.remove('nextActive');
}

// Fonction permettant de réinitialiser les scores
function scoreReset() {
    numberOfGoodAnswers = 0;
    nbOfGoodAnswers.innerHTML = 0;
    numberOfBadAnswers = 0;
    nbOfBadAnswers.innerHTML = 0;
    percentageOfGoodAnswers.innerHTML = '%';
}

// Fonction qui permet d'ajouter +1 au score des bonnes réponses si la réponse est correcte
goodAnswer.onclick = () => {
    answer.innerHTML = '<p class="goodAnswerText fs-5">Bonne réponse !</p>'
    numberOfGoodAnswers += 1;
    nbOfGoodAnswers.innerText = numberOfGoodAnswers;
    percentageOfGoodAnswers.innerText = `${((numberOfGoodAnswers / (numberOfGoodAnswers + numberOfBadAnswers)) * 100).toFixed(2)}%`;
    verification();

}

// Boucle-fonction qui permet d'ajouter +1 au score des mauvaises réponses si la réponse est incorrecte
for (let badAnswer of badAnswers) {
    badAnswer.addEventListener("click", function () {
        answer.innerHTML = '<p class="badAnswerText fs-5">Mauvaise réponse ! </p>'
        numberOfBadAnswers += 1;
        nbOfBadAnswers.innerText = numberOfBadAnswers;
        percentageOfGoodAnswers.innerText = `${((numberOfGoodAnswers / (numberOfGoodAnswers + numberOfBadAnswers)) * 100).toFixed(2)}%`;
        verification();
    });
}

// Fonction qui permet de passer à la question suivante
next.onclick = () => {
    reset();
    if (mode == 'findTheCapitalOfDepartment') {
        play(0, 1);
    } else if (mode == 'findTheDepartmentOfCapital') {
        play(1, 0);
    } else if (mode == 'findTheCodeOfDepartment') {
        play(0, 2);
    } else if (mode == 'findTheDepartmentOfCode') {
        play(2, 0);
    }
}

// Fonction permettant d'afficher la page jeu
function showGame() {
    home.classList.remove('d-flex');
    home.classList.add('d-none');
    game.classList.remove('d-none');
    game.classList.add('d-flex');
}

// Fonction permettant d'afficher la page d'accueil
function showHome() {
    game.classList.remove('d-flex');
    game.classList.add('d-none');
    home.classList.add('d-block');
    home.classList.remove('d-none');
}

// Fonction permettant de quitter la partie et de retourner à l'écran d'accueil
quit.onclick = () => {
    if (mode == 'findTheCapitalOfDepartment') {
        highscore(parseInt(goodGame1.textContent), goodGame1, badGame1, percentageGame1);
    } else if (mode == 'findTheDepartmentOfCapital') {
        highscore(parseInt(goodGame2.textContent), goodGame2, badGame2, percentageGame2);
    } else if (mode == 'findTheCodeOfDepartment') {
        highscore(parseInt(goodGame3.textContent), goodGame3, badGame3, percentageGame3);
    } else if (mode == 'findTheDepartmentOfCode') {
        highscore(parseInt(goodGame4.textContent), goodGame4, badGame4, percentageGame4);
    }
    showHome();
    reset();
    scoreReset()
}

// Fonction permettant de mettre les meilleurs scores de l'utilisateur
function highscore(value, good, bad, percentage) {
    if (numberOfGoodAnswers >= value) {
        good.innerText = numberOfGoodAnswers;
        bad.innerText = numberOfBadAnswers;
        percentage.innerText = `(${((numberOfGoodAnswers / (numberOfGoodAnswers + numberOfBadAnswers)) * 100).toFixed(2)}%)`;
    }
}

// Fonction permmettant de jouer au jeu trouver le chef lieu du département
findTheCapitalOfDepartment.onclick = () => {
    mode = 'findTheCapitalOfDepartment';
    gameName.innerHTML = "<h2>Trouver le Chef-lieu du département</h2>"
    play(0, 1);
    showGame();
};

// Fonction permmettant de jouer au jeu trouver le département du chef-lieu
findTheDepartmentOfCapital.onclick = () => {
    mode = 'findTheDepartmentOfCapital';
    gameName.innerHTML = "<h2>Trouver le département du Chef-lieu</h2>"
    play(1, 0);
    showGame();
};

// Fonction permmettant de jouer au jeu trouver le code du département
findTheCodeOfDepartment.onclick = () => {
    mode = 'findTheCodeOfDepartment';
    gameName.innerHTML = "<h2>Trouver le code du département</h2>"
    play(0, 2);
    showGame();
};

// Fonction permmettant de jouer au jeu trouver le département qui correspond au code
findTheDepartmentOfCode.onclick = () => {
    mode = 'findTheDepartmentOfCode';
    gameName.innerHTML = "<h2>Trouver le département du code</h2>"
    play(2, 0);
    showGame();
};
