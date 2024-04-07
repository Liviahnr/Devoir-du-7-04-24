/* console.log('nombre/dividende'
)

let nombre = 8
let dividende = 2 
let resultat = 'nombre/dividende'

if(nombre/dividende!= 0) {
 console.log (nombre/dividende)
} */
// ---------------------------------------------------------------------------------
/* 
let personnage= 'TomNook'
let produit ='chapeau'
let prix = 130
let argent = 4000
let stock = 25
let nombreAchat = 0

while(stock !=0 && argent>130) {
    argent = substraction(argent, prix)
    stock --
    nombreAchat++
}

function substraction (argent, prix) {
  return  argent - prix
}

console.log(personnage + " à acheté " + nombreAchat + " chapeaux" ) 

 */
// ---------------------------------------------------------------------------------

/* let DemiDieu = {
    name: "Achilles"
    précision: 0.7
    Vie:100 
}*/



class Guerrier {

    constructor(name, attack, precision, vie) {
        this.name = name;
        this.attack = attack;
        this.precision = precision;
        this.vie = vie;
    }

    getAttackAchilles() {
        console.log('Achilles attaque');
        if (Math.random() <= 0.4) {
            Hector.vie -= 10;
        } else {
            console.log('Achilles ne touche pas Hector ');
        }
    }

    getAttackHector() {
        console.log('Hector attaque');
        if (Math.random() <= 0.8) {
            Achilles.vie -= 5;
        } else {
            console.log('Hector ne touche pas Achilles');
        }
    }
}

let Achilles = new Guerrier("Achilles", 10, 0.4, 100);
let Hector = new Guerrier("Hector", 5, 0.8, 100);

while (Achilles.vie > 0 && Hector.vie > 0) {
    Achilles.getAttackAchilles();
    console.log('Hector vie:', Hector.vie);
    Hector.getAttackHector();
    console.log('Achilles vie:', Achilles.vie);

    if (Achilles.vie <= 0) {
        console.log("Hector remporte le combat");
    }
    if (Hector.vie <= 0) {
        console.log("Achilles remporte le combat");
    }
}