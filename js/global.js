/*ceci est un commentaire js*/
//console.log('toto');

// string

/*
let myVar = "ma variable";
myVar = "variable changée";
const myVar2 = "ma variable 2";

console.log(myVar);

// boolean

let isTrue = true;
let isFalse = false;

console.log(isTrue);

//chiffres et opérateurs

let chiffre1 = 4;
let chiffre2 = 3;

console.log(chiffre1 + chiffre2);

//template string, littéraux de gabarits et concat

let test = 'test' + myVar + 'value';
let test2 = `test ${myVar} gsdqlhdqdk`;
*/

//console.log(test2);//
/*
if (chiffre1 < chiffre2) {
    console.log('condition est valide');
}

if (chiffre1 < 6) {
    console.log('condition est valide');
}

if (chiffre1 <= 4) {
    console.log('condition est valide');
}*/

//tableaux//

/*
let tableau = ['item 1', 'item 2', 'item 3'];
console.log(Array.length);
*/


//objets//

/*
let obj = {
    title: 'Mon titre',
    description: 'Ma description'
}

console.log(obj.title, obj.description);
*/


//boucles, while, for, foreach//
/*
for(let i = 0; i < 5; i++) {
    console.log('toto');
}

for(let i = 0; i < 5; i++) {
    console.log('i');
}

for(let i = 0; i < Array.length; i++) {
    console.log(Array[i]);
}

Array.forEach(item => {
    console.log(item);
});
*/

// fonctions //
/*
function myFunction(item) {
    console.log('item');
}

const myFunction = (item, item2)=> {
    console.log(item, item2);
}

myFunction('toto', 5);

const calcul = (nb1, nb2)=> {

    return nb1 + nb2;
}
 
let result = calcul(4, 5);
HTMLFormControlsCollection.log(result);
*/

// interagir avec le dom // methode, propriété, évenement //

/*
console.log(window);
 
console.log(document);

// selectors //

let header = document.querySelector('header');

//console.log(header);

header.forEach(header => {
    header.classList.add('titi');
    console.log(grid);
});

// evenements les plus courants //

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM entièrement chargé et analysé");
});

header.addEventListener('click', (e) => {
    console.log('e');
})

header.addEventListener('mouseenter', (e) => {
    console.log('souris entre');
})

// insertion dom et navigation dans  le dom // 

let div = document.createElement('div');
div.classList.add('top');
div.innerHTML = `<span>Top zone</span>`;
header.parentNode.append(div); 
*/

// fin de la théorie //


// function du thème //

function menuMobile() {
    const btn = document.querySelector('.burger');
    const header = document.querySelector('.header');
    const link = document.querySelectorAll('.navbar a');

    btn.addEventListener('click', () => {
            header.classList.toggle('show-nav');
    });
    link.forEach(link => {
        link.addEventListener('click', () => {
            header.classList.remove('show-nav');
        });
    })
}
        
menuMobile();

/* Portfolio */

function tabsFilters() {
    const tabs = document.querySelectorAll('.portfolio-filters a');
    const projets = document.querySelectorAll('.portfolio .card');

    const resetActiveLinks = () => {
        tabs.forEach(elem => {
            elem.classList.remove('active');
        })
    }

    const showProjects = (elem) => {
        console.log(elem);
        projets.forEach(projet => {

            let filter = projet.getAttribute('data-category');

            if(elem === 'all') {
                projet.parentNode.classList.remove('hide');
                return
            }

                //ne sera pas pris en compte//
            
            /*if(filter !== elem) {
                projet.parentNode.classList.add('hide');
            } else {
                projet.parentNode.classList.remove('hide');
            }*/

            // option pour les plus motivés - opérateur ternaire // 
            filter !== elem ? projet.parentNode.classList.add('hide') : projet.parentNode.classList.remove('hide');

        })
    }

    tabs.forEach(elem => {
        elem.addEventListener('click', (event) => {
            event.preventDefault();
            let filter = elem.getAttribute('data-filter');
            showProjects(filter)
            resetActiveLinks();
            elem.classList.add('active');
        });
    })

}

tabsFilters()

function showProjectDetails() {
    const links = document.querySelectorAll('.card__link');
    const modals = document.querySelectorAll('.modal');
    const btns = document.querySelectorAll('.modal__close');

    const hideModals = () => {
        modals.forEach(modal => {
            modal.classList.remove('show');
        })
    };

    links.forEach(elem => {
        elem.addEventListener('click', (event) => {
            event.preventDefault();
            document.querySelector(`[id=${elem.dataset.id}]`).classList.add('show');
        });
    });

    btns.forEach(btn => {
        btn.addEventListener('click', (event) => {
            hideModals();
        });
    });
}

showProjectDetails()

// effets //

const observerIntersectionAnimation = () => {
    const sections = document.querySelectorAll('section');
    const skills = document.querySelectorAll('.skills .bar');

    sections.forEach((section, index) => {
        if (index === 0) return;
        section.style.opacity = "0";
        section.style.transition = "All 1.6s";
    });

    skills.forEach((elem, index) => {
        elem.style.width = "0";
        elem.style.transition = "All 1.6s";
    });

    let sectionObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let elem = entry.target;
                elem.style.opacity = 1;               
            }
        });
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    let skillsObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let elem = entry.target;
                elem.style.width = elem.dataset.width + '%';
            }
        });
    });

    skills.forEach(skill => {
        skillsObserver.observe(skill);
    });
}

observerIntersectionAnimation()