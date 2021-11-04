let count = 0;
let step = 0;
let index = -1;
let visited = [false, false, false, false, false, false];

const loadNames = () => {
  let name1 = document.getElementById("Name-1").value;
  let name2 = document.getElementById("Name-2").value;
  document.getElementById("Name1big").innerHTML = name1.toUpperCase();
  document.getElementById("Name2big").innerHTML = name2.toUpperCase();
};

const cancelCommonLetters = () => {
  let name1Element = document.getElementById("Name1big");
  let name2Element = document.getElementById("Name2big");
  name1Element.textContent = "";
  name2Element.textContent = "";

  let name1List = document.getElementById("Name-1").value.toUpperCase().split("");
  let name2List = document.getElementById("Name-2").value.toUpperCase().split("");
  let cut1List = document.getElementById("Name-1").value.toUpperCase().split("");
  let cut2List = document.getElementById("Name-2").value.toUpperCase().split("");



  for (let i = 0; i < name1List.length; i++) {
    for (let j = 0; j < name2List.length; j++) {
      if (name1List[i] == "" || name2List[j] == "") continue;
      if (name2List[j] == name1List[i]) {
        name1List[i] = "";
        name2List[j] = "";
      }
    }
  }

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

  console.log(name1List);
  console.log(name2List);
  console.log("step is " + step);
};

const loadFlames = () => {
  let flamesElement = document.getElementById("FLAMES");
  flamesElement.innerHTML += `<span id="letter0">F</span>`;
  flamesElement.innerHTML += `<span id="letter1">L</span>`;
  flamesElement.innerHTML += `<span id="letter2">A</span>`;
  flamesElement.innerHTML += `<span id="letter3">M</span>`;
  flamesElement.innerHTML += `<span id="letter4">E</span>`;
  flamesElement.innerHTML += `<span id="letter5">S</span>`;
}

const cutLetters = (name1List, name2List, i) => {};


const doFlames = () => {
  if (count == 5) return;
  else {
    let currentStep =0;
    while(currentStep<step){
      index = (index+1)%6;
      if(visited[index]==false){
        currentStep++;
      }
      console.log("index increased to" + index);
    }
    let spanElement = document.getElementById(`letter${index}`);
    spanElement.classList.add("text-decoration-line-through");
    visited[index] = true;
    console.log(visited);
    count++;
    console.log("count is " + count);
    setTimeout(doFlames, 1000);
  }
};


const clearPreviousData=() => {
  count=0;
  step=0;
  index=-1;
  let flamesElement = document.getElementById("FLAMES");
  flamesElement.textContent = "";
  visited = [false, false, false, false, false, false];
}

const handleClick = () => {
  clearPreviousData();
  loadNames();
  cancelCommonLetters();
  loadFlames();
  doFlames();
}