const loadNames = () => {
  let name1 = document.getElementById("Name-1").value;
  let name2 = document.getElementById("Name-2").value;
  document.getElementById("Name1big").innerHTML = name1.toUpperCase();
  document.getElementById("Name2big").innerHTML = name2.toUpperCase();

  cancelCommonLetters();
};
let count = 0;
let step = 0;
let index = 0;
const cancelCommonLetters = () => {
  let name1Element = document.getElementById("Name1big");
  let name2Element = document.getElementById("Name2big");
  let name1List = name1Element.innerHTML.toUpperCase().split("");
  let name2List = name2Element.innerHTML.toUpperCase().split("");
  let cut1List = name1Element.innerHTML.toUpperCase().split("");
  let cut2List = name2Element.innerHTML.toUpperCase().split("");

  name1Element.textContent = "";
  name2Element.textContent = "";

  for (let i = 0; i < name1List.length; i++) {
    for (let j = 0; j < name2List.length; j++) {
      if (name1List[i] == "" || name2List[j] == "") continue;
      if (name2List[j] == name1List[i]) {
        name1List[i] = "";
        name2List[j] = "";
        // name1Element.innerHTML += `<span class="text-decoration-line-through">${cut1List[i]}</span>`;
        // name2Element.innerHTML += `<span class="text-decoration-line-through">${cut2List[i]}</span>`;
      }
    }
  }
  name1Element.textContent = "";
  name2Element.textContent = "";

  for (let i = 0; i < name1List.length; i++) {
    if (name1List[i] == "")
      name1Element.innerHTML += `<span class="text-decoration-line-through">${cut1List[i]}</span>`;
    else {
      name1Element.innerHTML += cut1List[i];
      step++;
    }
  }
  for (let i = 0; i < name2List.length; i++) {
    if (name2List[i] == "")
      name2Element.innerHTML += `<span class="text-decoration-line-through">${cut2List[i]}</span>`;
    else {
      name2Element.innerHTML += cut2List[i];
      step++;
    }
  }

  let flamesElement = document.getElementById("FLAMES");
  flamesElement.innerHTML += `<span id="letter1">F</span>`;
  flamesElement.innerHTML += `<span id="letter2">L</span>`;
  flamesElement.innerHTML += `<span id="letter3">A</span>`;
  flamesElement.innerHTML += `<span id="letter4">M</span>`;
  flamesElement.innerHTML += `<span id="letter5">E</span>`;
  flamesElement.innerHTML += `<span id="letter6">S</span>`;

  doFlames();
  console.log(name1List);
  console.log(name2List);
  console.log("step is " + step);
};

const cutLetters = (name1List, name2List, i) => {};

const doFlames = () => {
  if (count == 5) return;
  else {
    index = ((index + step - 1) % 6) + 1;
    let spanElement = document.getElementById(`letter${index}`);
    while (spanElement.classList.contains("text-decoration-line-through")) {
      index++;
      spanElement = document.getElementById(`letter${index}`);
    }
    spanElement.classList.add("text-decoration-line-through");
    //index++;
    count++;
    console.log("count is " + count);
    setTimeout(doFlames, 2000);
  }
};
