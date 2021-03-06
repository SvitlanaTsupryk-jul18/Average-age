"use strict";
const ANCESTRY_FILE = [{
        name: "Carolus Haverbeke",
        sex: "m",
        born: 1832,
        died: 1905,
        father: "Carel Haverbeke",
        mother: "Maria van Brussel"
    },
    {
        name: "Emma de Milliano",
        sex: "f",
        born: 1876,
        died: 1956,
        father: "Petrus de Milliano",
        mother: "Sophia van Damme"
    },
    {
        name: "Maria de Rycke",
        sex: "f",
        born: 1683,
        died: 1724,
        father: "Frederik de Rycke",
        mother: "Laurentia van Vlaenderen"
    },
    {
        name: "Jan van Brussel",
        sex: "m",
        born: 1714,
        died: 1748,
        father: "Jacobus van Brussel",
        mother: "Joanna van Rooten"
    },
    {
        name: "Philibert Haverbeke",
        sex: "m",
        born: 1907,
        died: 1997,
        father: "Emile Haverbeke",
        mother: "Emma de Milliano"
    },
    {
        name: "Jan Frans van Brussel",
        sex: "m",
        born: 1761,
        died: 1833,
        father: "Jacobus Bernardus van Brussel",
        mother: null
    },
    {
        name: "Pauwels van Haverbeke",
        sex: "m",
        born: 1535,
        died: 1582,
        father: "N. van Haverbeke",
        mother: null
    },
    {
        name: "Clara Aernoudts",
        sex: "f",
        born: 1918,
        died: 2012,
        father: "Henry Aernoudts",
        mother: "Sidonie Coene"
    },
    {
        name: "Emile Haverbeke",
        sex: "m",
        born: 1877,
        died: 1968,
        father: "Carolus Haverbeke",
        mother: "Maria Sturm"
    },
    {
        name: "Lieven de Causmaecker",
        sex: "m",
        born: 1696,
        died: 1724,
        father: "Carel de Causmaecker",
        mother: "Joanna Claes"
    },
    {
        name: "Pieter Haverbeke",
        sex: "m",
        born: 1602,
        died: 1642,
        father: "Lieven van Haverbeke",
        mother: null
    },
    {
        name: "Livina Haverbeke",
        sex: "f",
        born: 1692,
        died: 1743,
        father: "Daniel Haverbeke",
        mother: "Joanna de Pape"
    },
    {
        name: "Pieter Bernard Haverbeke",
        sex: "m",
        born: 1695,
        died: 1762,
        father: "Willem Haverbeke",
        mother: "Petronella Wauters"
    },
    {
        name: "Lieven van Haverbeke",
        sex: "m",
        born: 1570,
        died: 1636,
        father: "Pauwels van Haverbeke",
        mother: "Lievijne Jans"
    },
    {
        name: "Joanna de Causmaecker",
        sex: "f",
        born: 1762,
        died: 1807,
        father: "Bernardus de Causmaecker",
        mother: null
    },
    {
        name: "Willem Haverbeke",
        sex: "m",
        born: 1668,
        died: 1731,
        father: "Lieven Haverbeke",
        mother: "Elisabeth Hercke"
    },
    {
        name: "Pieter Antone Haverbeke",
        sex: "m",
        born: 1753,
        died: 1798,
        father: "Jan Francies Haverbeke",
        mother: "Petronella de Decker"
    },
    {
        name: "Maria van Brussel",
        sex: "f",
        born: 1801,
        died: 1834,
        father: "Jan Frans van Brussel",
        mother: "Joanna de Causmaecker"
    },
    {
        name: "Angela Haverbeke",
        sex: "f",
        born: 1728,
        died: 1734,
        father: "Pieter Bernard Haverbeke",
        mother: "Livina de Vrieze"
    },
    {
        name: "Elisabeth Haverbeke",
        sex: "f",
        born: 1711,
        died: 1754,
        father: "Jan Haverbeke",
        mother: "Maria de Rycke"
    },
    {
        name: "Lievijne Jans",
        sex: "f",
        born: 1542,
        died: 1582,
        father: null,
        mother: null
    },
    {
        name: "Bernardus de Causmaecker",
        sex: "m",
        born: 1721,
        died: 1789,
        father: "Lieven de Causmaecker",
        mother: "Livina Haverbeke"
    },
    {
        name: "Jacoba Lammens",
        sex: "f",
        born: 1699,
        died: 1740,
        father: "Lieven Lammens",
        mother: "Livina de Vrieze"
    },
    {
        name: "Pieter de Decker",
        sex: "m",
        born: 1705,
        died: 1780,
        father: "Joos de Decker",
        mother: "Petronella van de Steene"
    },
    {
        name: "Joanna de Pape",
        sex: "f",
        born: 1654,
        died: 1723,
        father: "Vincent de Pape",
        mother: "Petronella Wauters"
    },
    {
        name: "Daniel Haverbeke",
        sex: "m",
        born: 1652,
        died: 1723,
        father: "Lieven Haverbeke",
        mother: "Elisabeth Hercke"
    },
    {
        name: "Lieven Haverbeke",
        sex: "m",
        born: 1631,
        died: 1676,
        father: "Pieter Haverbeke",
        mother: "Anna van Hecke"
    },
    {
        name: "Martina de Pape",
        sex: "f",
        born: 1666,
        died: 1727,
        father: "Vincent de Pape",
        mother: "Petronella Wauters"
    },
    {
        name: "Jan Francies Haverbeke",
        sex: "m",
        born: 1725,
        died: 1779,
        father: "Pieter Bernard Haverbeke",
        mother: "Livina de Vrieze"
    },
    {
        name: "Maria Haverbeke",
        sex: "m",
        born: 1905,
        died: 1997,
        father: "Emile Haverbeke",
        mother: "Emma de Milliano"
    },
    {
        name: "Petronella de Decker",
        sex: "f",
        born: 1731,
        died: 1781,
        father: "Pieter de Decker",
        mother: "Livina Haverbeke"
    },
    {
        name: "Livina Sierens",
        sex: "f",
        born: 1761,
        died: 1826,
        father: "Jan Sierens",
        mother: "Maria van Waes"
    },
    {
        name: "Laurentia Haverbeke",
        sex: "f",
        born: 1710,
        died: 1786,
        father: "Jan Haverbeke",
        mother: "Maria de Rycke"
    },
    {
        name: "Carel Haverbeke",
        sex: "m",
        born: 1796,
        died: 1837,
        father: "Pieter Antone Haverbeke",
        mother: "Livina Sierens"
    },
    {
        name: "Elisabeth Hercke",
        sex: "f",
        born: 1632,
        died: 1674,
        father: "Willem Hercke",
        mother: "Margriet de Brabander"
    },
    {
        name: "Jan Haverbeke",
        sex: "m",
        born: 1671,
        died: 1731,
        father: "Lieven Haverbeke",
        mother: "Elisabeth Hercke"
    },
    {
        name: "Anna van Hecke",
        sex: "f",
        born: 1607,
        died: 1670,
        father: "Paschasius van Hecke",
        mother: "Martijntken Beelaert"
    },
    {
        name: "Maria Sturm",
        sex: "f",
        born: 1835,
        died: 1917,
        father: "Charles Sturm",
        mother: "Seraphina Spelier"
    },
    {
        name: "Jacobus Bernardus van Brussel",
        sex: "m",
        born: 1736,
        died: 1809,
        father: "Jan van Brussel",
        mother: "Elisabeth Haverbeke"
    }
];
let columnNames = [
    "id",
    "name",
    "sex",
    "born",
    "died",
    "age",
    "century",
    "mother",
    "father",
    "children"
];

showPeople("people", ANCESTRY_FILE);

function showPeople(element, people) {
    let elem = document.querySelector(`.${element}`);

    /* 1. Вставляет table в документ сразу. а затем элементы */
    let table = document.createElement("table");
    elem.appendChild(table);
    //thead
    let thead = document.createElement("thead");
    table.appendChild(thead);

    let tr = document.createElement("TR");
    for (let i = 0; i < columnNames.length; i++) {
        let th = document.createElement("th");
        th.appendChild(document.createTextNode(columnNames[i]));

        ///add inputs
        if (i === 1 || i === 7 || i === 8) {
            let input = document.createElement("input");
            input.placeholder = `search by ${columnNames[i]}`;
            th.appendChild(input);
        }
        tr.appendChild(th);
    }
    thead.appendChild(tr);


    //tbody
    let tbody = document.createElement("tbody");
    table.appendChild(tbody);


    for (let i = 0; i < people.length; i++) {
        let tr = document.createElement("tr");
        tbody.appendChild(tr);

        for (let j = 0; j < columnNames.length; j++) {
            let td = document.createElement("td");
            let cell;

            switch (columnNames[j]) {
                case "id":
                    cell = i + 1;
                    break;
                case "age":
                    cell = people[i].died - people[i].born;
                    break;
                case "century":
                    cell = Math.ceil(people[i].died / 100);
                    break;
                case "children":
                    cell = children(people, people[i]);
                    break;
                default:
                    people[i][columnNames[j]] === null ?
                        (cell = "") :
                        (cell = people[i][columnNames[j]]);
            }

            td.appendChild(document.createTextNode(cell));
            tr.appendChild(td);
        }
    }

    function children(arr, person) {
        let childrens = arr.filter(el =>
            el.mother === person.name || el.father === person.name).map(el => el.name);
        //console.log(childrens);
        return childrens;
    }

    addSex(table);
    findSevetteenth(table);
    findParents(table)
    longLivers(table);
    spaning(people, table);
    ///part 2
    sorting(people);
    filtering(people);
    onckliked();
    available();
}

///#2
function addSex(table) {
    //find cellindex in header
    let headers = [...table.tHead.rows[0].cells];
    let colNumber;
    headers.forEach(element => {
        if (element.textContent === 'sex') {
            colNumber = element.cellIndex;
        }
    });

    //find colunm in every row in tbody which is in colunm sex
    for (let i = 1; i < table.rows.length; i++) {
        table.rows[i].cells[colNumber].textContent === 'm' ?
            table.rows[i].classList.add("person--male") :
            table.rows[i].classList.add("person--female");
    }

    //add color to each woman
    [...table.rows].forEach(element => {
        if (element.classList.contains("person--female")) {
            element.style.background = "lightpink";
        }
    });
}

///#3
function findParents(table) {
    //find cellindex in columnNames
    let colNumber = columnNames.indexOf('children');
    let parents = [];

    //make array of parents from children column
    [...table.rows].forEach(element => {
        if (element.cells[colNumber].textContent) {
            parents.push(element.cells[colNumber].textContent)
        }
    });

    //add classes for mothers and fathers
    for (let i = 1; i < table.rows.length; i++) {

        parents.forEach(element => {
            if (element === table.rows[i].cells[columnNames.indexOf('name')].textContent) {
                table.rows[i].cells[columnNames.indexOf('sex')].textContent === "m" ?
                    table.rows[i].classList.add("person--father") :
                    table.rows[i].classList.add("person--mother");
            }
        });

    }
}

///#4
function findSevetteenth(table) {
    //find cellindex in columnNames
    let colNumber = columnNames.indexOf('century');

    //find colunm in every row in tbody which lived in 17 century
    [...table.rows].forEach(element => {
        if (element.cells[colNumber].textContent === '17') {
            element.classList.add("person--lived-in-17");
        }
    });
}

///#5
function longLivers(table) {
    table.style.borderCollapse = "collapse";

    //find colunm in every row in tbody which lived in more 65 years
    [...table.rows].forEach(element => {
        if (element.cells[columnNames.indexOf('age')].textContent > 65) {
            element.style.border = "1px solid green";
        }
    });
}

//#6
function spaning(people, table) {
    //names of people that was borning before 1650

    let bornBefore = people.filter(el => el.born < 1750).map(el => el.name);
    let diedAfter = people.filter(el => el.died > 1800).map(el => el.name);
    //find in each td wich includes name from arrays
    [...table.rows].forEach(element => {
        [...element.cells].forEach(elem => {
            bornBefore.forEach(el => {
                if (elem.textContent.includes(el)) {
                    inSpan(elem, el, "person--before");
                }
            });
            diedAfter.forEach(el => {
                if (elem.textContent.includes(el)) {
                    inSpan(elem, el, "person--after");
                    return;
                }
            });
        });
    });

    function inSpan(textCell, name, spanClass) {
        let spanName = document.createElement("span");
        spanName.innerHTML = name;
        spanName.classList.add(spanClass);
        let names = textCell.textContent.split(",");

        if (names.length === 1) {
            textCell.childNodes[0].replaceWith(spanName);
        } else {
            textCell.textContent = "";
            names.forEach(elem => {
                bornBefore.forEach(el => {
                    if (elem === el) {
                        textCell.innerHTML === "" ?
                            textCell.innerHTML += `<span class="${spanClass}">${elem}</span>` :
                            textCell.innerHTML += `,<span class="${spanClass}">${elem}</span>`;
                    }
                });
            });
        }
    }
    // //#6,2
    // function spaning(people, table) {
    //     //names of people that was borning before 1650

    //     let bornBefore = people.filter(el => el.born < 1650).map(el => el.name);
    //     let diedAfter = people.filter(el => el.died > 1800).map(el => el.name);
    //     //find in each td wich includes name from arrays
    //     [...table.rows].forEach(element => {
    //       [...element.cells].forEach(elem => {
    //         bornBefore.forEach(el => {
    //           if (elem.textContent.includes(el)) {
    //             inSpan(elem, el, "person--before");
    //           }
    //         });
    //         diedAfter.forEach(el => {
    //           if (elem.textContent.includes(el)) {
    //             inSpan(elem, el, "person--after");
    //           }
    //         });
    //       });
    //     });

    //     function inSpan(textCell, name, spanClass) {
    //       let spanName = document.createElement("span");
    //       spanName.innerHTML = name;
    //       spanName.classList.add(spanClass);
    //       //let names = textCell.textContent.split(',');
    //       textCell.childNodes[0].replaceWith(spanName);
    //     }


}
////7

function getPeopleHTML() {

    return document.body.innerHTML;
}

let tableHTML = getPeopleHTML();

////8 sort

function sorting(arrayPeople) {
    let table = document.querySelector(".people");
    let sorted;
    table.querySelectorAll("TH").forEach(el => {

        el.addEventListener("click", function (e) {
            let field = e.target.textContent;
            // console.log(field);
            if (field === 'name' || field === 'born' || field === 'died' || field === 'age') {
                console.log(field);
                sortByField(field);

                function sortByField(field) {
                    if (field === 'name') {
                        sorted = arrayPeople.sort((a, b) => {
                            return (a[field] > b[field] ? 1 : -1);
                        });
                        console.log(1);
                    } else if (field === 'age') {
                        sorted = arrayPeople.sort((a, b) => {
                            return ((a.died - a.born) - (b.died - b.born));
                        });
                        console.log(2);
                    } else if (field === 'born' || field === 'died') {
                        sorted = arrayPeople.sort((a, b) => {
                            return (a[field] - b[field]);
                        });
                        console.log(3);
                    }

                    console.log(sorted);
                }
                table.removeChild(table.children[0]);
                showPeople("people", sorted);
            }
        })
    });
}

///9 filter

function filtering(arrayPeople) {
    let table = document.querySelector(".people");
    let filtered;
    table.querySelectorAll("input").forEach(el => {

        el.addEventListener("change", function (e) {
            let input = e.target;
            let column = input.parentElement.textContent;
            filtered = arrayPeople.filter((person) => person[column] !== null && person[column].toLowerCase().includes(input.value.toLowerCase()));
            table.removeChild(table.children[0]);
            showPeople("people", filtered);
        })
    });
}

///10 add border when onckliked

function onckliked() {
    let tbody = document.querySelector("tbody");
    let cells = tbody.querySelectorAll("TD");

    tbody.addEventListener("click", function (e) {
        //for 11 selectable
        if (!(e.target.closest("TD") && e.target.hasAttribute("data-selectable"))) return;
        cells.forEach((el) => el.classList.remove("clicked"));
        e.target.closest("TD").classList.add("clicked");
    })
};

///11 add avaible rows

function available() {
    let tbody = document.querySelector("tbody");
    let cells = [...tbody.querySelectorAll("TD")];
    let availables = cells.filter((item) => item.cellIndex === 2 || item.cellIndex === 3 || item.cellIndex === 4);
    availables.forEach((td) => td.setAttribute("data-selectable", "true"));
}