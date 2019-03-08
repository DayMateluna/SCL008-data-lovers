const data = window.STEAM.appnews.newsitems;
const container = document.getElementById("root");

document.getElementById('feedlabel').addEventListener('change', () => {
  let condition = document.getElementById('feedlabel').value;
  let result = window.filterData(data, condition);

  container.innerHTML = '';
  //result.forEach(element => {
  for (let i = 0; i < result.length; i++) {

    container.innerHTML += `<p>
    <a href="${data[i].url}" target="_blank">${result[i].title}</a></p>`
  }
});

const button_enter = document.getElementById("btn-secondary");
button_enter.addEventListener('click', () => {
  let title = document.getElementById("title").Object.value;
  containerTwo.innerHTML = `<p>${title}</p>`
});

//const showData = (data) => {
//btn-secondary.addEventListener('click', () => {
//data.forEach(element => {
//containerTwo.innerHTML += `<p>${element.title}</p>`
//})


//const titleOrder = document.getElementById("titleone");
//const containerOrder = document.getElementById("roottwo");
//const 

//titleOrder.addEventListener('change', () => {
//let option = titleOrder.value;
//let ordering = window.sortData(data, 'name', option); 
//titleOrder.innerHTML = '';
//ordering.forEach(element => { 
// titleOrder.innerHTML += `
//  <div class="col-sm-12	col-md-4	col-lg-4	col-xl-4">
//<div class="card">
//<div class="card-body">
//<h5 class="card-title">${element.name}</h5>

// <img class="image" src="${element.splash}" alt=""class="img-thumbnail">
//</div>
// </div>`

// })
//})






window.onload = showData(data);

