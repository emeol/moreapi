const btn = document.querySelector("button");
const output = document.querySelector("#output");
const myimg =document.querySelector("img");
const intake = document.querySelector("input");
const url = "https://jsonplaceholder.typicode.com/photos";
const url2 = "https://swapi.co/api/planets";
const url3="https://restcountries.eu/rest/v2/all";
let myData = [];
btn.addEventListener("click", getApi);

function getApi() {
  output.innerHTML='';
  fetch(url3)
    .then((res)=>res.json())
    .then((data)=>{
      myData = data;
      buildSelect(data);
    });     
}

function buildSelect(d) {
  let select = document.createElement('select');
  d.map((itm, idx)=>{
    let opt = document.createElement('option');
    opt.value = idx;
    opt.textContent=itm.name;
    select.appendChild(opt);
  });
  select.addEventListener("change", outputData);
  // document.querySelector("body").replaceChild(select);
  document.querySelector("body").appendChild(select);
}

function outputData(e) {
  output.innerHTML='';
  let elementTargetValue =e.target.value;
  console.log(myData[elementTargetValue].name);
  output.innerHTML=myData[elementTargetValue].name;
  myimg.src = myData[elementTargetValue].flag;
}