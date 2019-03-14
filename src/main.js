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
  let calculo =result.length;
  let result2 =window.computeStast(calculo);

  console.log(result2)
  console.log(calculo)
});