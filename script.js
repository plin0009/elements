const PERIODIC_TABLE_DATA = [{"symbol":"H","name":"Hydrogen","weight":"1.01"},{"symbol":"He","name":"Helium","weight":"4.00"},{"symbol":"Li","name":"Lithium","weight":"6.94"},{"symbol":"Be","name":"Beryllium","weight":"9.01"},{"symbol":"B","name":"Boron","weight":"10.81"},{"symbol":"C","name":"Carbon","weight":"12.01"},{"symbol":"N","name":"Nitrogen","weight":"14.01"},{"symbol":"O","name":"Oxygen","weight":"16.00"},{"symbol":"F","name":"Fluorine","weight":"19.00"},{"symbol":"Ne","name":"Neon","weight":"20.18"},{"symbol":"Na","name":"Sodium","weight":"22.99"},{"symbol":"Mg","name":"Magnesium","weight":"24.30"},{"symbol":"Al","name":"Aluminum","weight":"26.98"},{"symbol":"Si","name":"Silicon","weight":"28.08"},{"symbol":"P","name":"Phosphorus","weight":"30.97"},{"symbol":"S","name":"Sulfur","weight":"32.06"},{"symbol":"Cl","name":"Chlorine","weight":"35.45"},{"symbol":"Ar","name":"Argon","weight":"39.95"},{"symbol":"K","name":"Potassium","weight":"39.10"},{"symbol":"Ca","name":"Calcium","weight":"40.08"},{"symbol":"Sc","name":"Scandium","weight":"44.96"},{"symbol":"Ti","name":"Titanium","weight":"47.867"},{"symbol":"V","name":"Vanadium","weight":"50.94"},{"symbol":"Cr","name":"Chromium","weight":"52.00"},{"symbol":"Mn","name":"Manganese","weight":"54.94"},{"symbol":"Fe","name":"Iron","weight":"55.84"},{"symbol":"Co","name":"Cobalt","weight":"58.93"},{"symbol":"Ni","name":"Nickel","weight":"58.69"},{"symbol":"Cu","name":"Copper","weight":"63.55"},{"symbol":"Zn","name":"Zinc","weight":"65.38"},{"symbol":"Ga","name":"Gallium","weight":"69.72"},{"symbol":"Ge","name":"Germanium","weight":"72.63"},{"symbol":"As","name":"Arsenic","weight":"74.92"},{"symbol":"Se","name":"Selenium","weight":"78.97"},{"symbol":"Br","name":"Bromine","weight":"79.90"},{"symbol":"Kr","name":"Krypton","weight":"83.80"},{"symbol":"Rb","name":"Rubidium","weight":"85.47"},{"symbol":"Sr","name":"Strontium","weight":"87.62"},{"symbol":"Y","name":"Yttrium","weight":"88.91"},{"symbol":"Zr","name":"Zirconium","weight":"91.224"},{"symbol":"Nb","name":"Biobium","weight":"92.91"},{"symbol":"Mo","name":"Molybdenum","weight":"95.95"},{"symbol":"Tc","name":"Technetium","weight":"(98)"},{"symbol":"Ru","name":"Ruthenium","weight":"101.07"},{"symbol":"Rh","name":"Rhodium","weight":"102.91"},{"symbol":"Pd","name":"Palladium","weight":"106.42"},{"symbol":"Ag","name":"Silver","weight":"107.87"},{"symbol":"Cd","name":"Cadmium","weight":"112.41"},{"symbol":"In","name":"Indium","weight":"114.82"},{"symbol":"Sn","name":"Tin","weight":"118.71"},{"symbol":"Sb","name":"Antimony","weight":"121.76"},{"symbol":"Te","name":"Tellurium","weight":"127.60"},{"symbol":"I","name":"Iodine","weight":"126.90"},{"symbol":"Xe","name":"Xenon","weight":"131.29"},{"symbol":"Cs","name":"Caesium","weight":"132.91"},{"symbol":"Ba","name":"Barium","weight":"137.33"},{"symbol":"La","name":"Lanthanum","weight":"138.91"},{"symbol":"Ce","name":"Cerium","weight":"140.12"},{"symbol":"Pr","name":"Praseodymium","weight":"140.91"},{"symbol":"Nd","name":"Neodymium","weight":"144.24"},{"symbol":"Pm","name":"Promethium","weight":"(145)"},{"symbol":"Sm","name":"Samarium","weight":"150.36"},{"symbol":"Eu","name":"Europium","weight":"151.96"},{"symbol":"Gd","name":"Gadolinium","weight":"157.25"},{"symbol":"Tb","name":"Terbium","weight":"158.93"},{"symbol":"Dy","name":"Dysprosium","weight":"162.50"},{"symbol":"Ho","name":"Holmium","weight":"164.93"},{"symbol":"Er","name":"Erbium","weight":"167.26"},{"symbol":"Tm","name":"Thulium","weight":"168.93"},{"symbol":"Yb","name":"Ytterbium","weight":"173.05"},{"symbol":"Lu","name":"Lutetium","weight":"174.97"},{"symbol":"Hf","name":"Hafnium","weight":"178.49"},{"symbol":"Ta","name":"Tantalum","weight":"180.95"},{"symbol":"W","name":"Tungsten","weight":"183.84"},{"symbol":"Re","name":"Rhenium","weight":"186.81"},{"symbol":"Os","name":"Osmium","weight":"190.23"},{"symbol":"Ir","name":"Iridium","weight":"192.22"},{"symbol":"Pt","name":"Platinum","weight":"195.08"},{"symbol":"Au","name":"Gold","weight":"196.97"},{"symbol":"Hg","name":"Mercury","weight":"200.59"},{"symbol":"Tl","name":"Thallium","weight":"204.38"},{"symbol":"Pb","name":"Lead","weight":"207.2"},{"symbol":"Bi","name":"Bismuth","weight":"208.98"},{"symbol":"Po","name":"Polonium","weight":"(209)"},{"symbol":"At","name":"Astatine","weight":"(210)"},{"symbol":"Rn","name":"Radon","weight":"(222)"},{"symbol":"Fr","name":"Francium","weight":"(223)"},{"symbol":"Ra","name":"Radium","weight":"(226)"},{"symbol":"Ac","name":"Actinium","weight":"(227)"},{"symbol":"Th","name":"Thorium","weight":"232.04"},{"symbol":"Pa","name":"Protactinium","weight":"231.04"},{"symbol":"U","name":"Uranium","weight":"238.03"},{"symbol":"Np","name":"Neptunium","weight":"(237)"},{"symbol":"Pu","name":"Plutonium","weight":"(244)"},{"symbol":"Am","name":"Americium","weight":"(243)"},{"symbol":"Cm","name":"Curium","weight":"(247)"},{"symbol":"Bk","name":"Berkelium","weight":"(247)"},{"symbol":"Cf","name":"Californium","weight":"(251)"},{"symbol":"Es","name":"Einsteinium","weight":"(252)"},{"symbol":"Fm","name":"Fermium","weight":"(257)"},{"symbol":"Md","name":"Mendelevium","weight":"(258)"},{"symbol":"No","name":"Nobelium","weight":"(259)"},{"symbol":"Lr","name":"Lawrencium","weight":"(266)"},{"symbol":"Rf","name":"Rutherforium","weight":"(267)"},{"symbol":"Db","name":"Dubnium","weight":"(268)"},{"symbol":"Sg","name":"Seaborgium","weight":"(269)"},{"symbol":"Bh","name":"Bohrium","weight":"(270)"},{"symbol":"Hs","name":"Hassium","weight":"(277)"},{"symbol":"Mt","name":"Meitnerium","weight":"(278)"},{"symbol":"Ds","name":"Darmstadtium","weight":"(281)"},{"symbol":"Rg","name":"Roentgenium","weight":"(282)"},{"symbol":"Cn","name":"Copernicium","weight":"(285)"},{"symbol":"Nh","name":"Nihonium","weight":"(286)"},{"symbol":"Fl","name":"Flerovium","weight":"(289)"},{"symbol":"Mc","name":"Moscovium","weight":"(290)"},{"symbol":"Lv","name":"Livermorium","weight":"(293)"},{"symbol":"Ts","name":"Tennesine","weight":"(294)"},{"symbol":"Og","name":"Oganesson","weight":"(294)"}];
const RE = /([A-z]+)/g

var output;


class Word {
  constructor(string) {
    this.string = string;
    this.possibilities = new Array();
  }
  beginSearch() {
    this.search([], this.string, 2);
    this.search([], this.string, 1);
  }
  search(elements, left, characters) {
    if (left.length < characters) return;
    let symbol = left.substr(0, characters);
    left = left.substr(characters);
    for (const element of periodicTable) {
      if (element.symbol.toLowerCase() == symbol) {
        elements.push(element);
        if (!left.length) {
          this.possibilities.push(elements);
          return;
        }
        this.search(elements.slice(0), left, 2);
        this.search(elements.slice(0), left, 1);
        break;
      }
    }
  }
}
class Element {
  constructor(data, number) {
    this.number = number;
    this.symbol = data.symbol;
    this.name = data.name;
    this.weight = data.weight;
    this.determineType();
  }
  determineType() {
    if ([3, 11, 19, 37, 55, 87].includes(this.number)) {
      this.type = "alkali";
    }
    else if ([4, 12, 20, 38, 56, 88].includes(this.number)) {
      this.type = "alkaline_earth";
    }
    else if ([5, 14, 32, 33, 51, 52, 85].includes(this.number)) {
      this.type = "metalloid";
    }
    else if ([1, 6, 7, 8, 9, 15, 16, 17, 34, 35, 53].includes(this.number)) {
      this.type = "other_nonmetal";
    }
    else if ([2, 10, 18, 36, 54, 86].includes(this.number)) {
      this.type = "noble_gas";
    }
    else if (57 <= this.number && this.number <= 71) {
      this.type = "lanthanoid";
    }
    else if (89 <= this.number && this.number <= 103) {
      this.type = "actinoid";
    }
    else if ([109, 110, 111, 113, 115, 116, 117, 118].includes(this.number)) {
      this.type = "undefined";
    }
    else if ([13, 31, 49, 50, 81, 82, 83, 84, 114].includes(this.number)) {
      this.type = "post-transition";
    }
    else {
      this.type = "transition";
    }
  }
  child() {
    let block = document.createElement("div");
    block.className = "element " + this.type;
    let things = ["number", "symbol", "name", "weight"];
    for (const thing of things) {
      let part = document.createElement("p");
      part.className = thing;
      part.innerHTML = this[thing];
      block.appendChild(part);
    }
    return block;
  }
}

var periodicTable = new Array();
for (var i = 0; i < PERIODIC_TABLE_DATA.length; i++) {
  periodicTable.push(new Element(PERIODIC_TABLE_DATA[i], i + 1));
}

window.onload = function() {
  let button = document.createElement("input");
  button.type = "button";
  button.id = "submit";
  button.value = "Create";
  document.getElementsByClassName("right")[0].appendChild(button);

  output = document.getElementById("output");

  button.onclick = function () {
    while (output.firstChild) {
      output.removeChild(output.firstChild);
    }
    findElements(document.getElementById("text").value);
  }
}

function findElements(phrase) {
  words = phrase.match(RE);
  for (var i = 0; i < words.length; i++) {
    if (makeElement(words[i]) && i < words.length - 1) {
      let space = document.createElement("div");
      space.className = "space";
      output.appendChild(space);
    }
  }
}

function makeElement(name) {
  var word = new Word(name.toLowerCase());
  word.beginSearch();
  if (word.possibilities.length) {
    for (const element of word.possibilities[0]) {
      output.appendChild(element.child());
    }
    return true;
  }
  return false;
}
