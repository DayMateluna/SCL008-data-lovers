/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const filterData = (data, condition) => {
  let filterFeedLabel = data.filter(element => {
    return element.feedlabel.includes(condition) === true;

  })
  return filterFeedLabel;
};

const containerTwo = document.getElementById("contenedor datos");
let title = () => {
  for (let i = 0; i < data.title; i++) {
    if (data.Object.value(title)) {
      containerTwo += title + "." + i + " = " + title[i] + "\n";
    }
  }
  return containerTwo;
}

//const sortData = (data, sortBy, sortOrder) => {
// let ordertitle = data.sort((a, b) => {
// return a[sortBy].localeCompare(b[sortBy]);
//})
//if (sortOrder === "ordenarZa") {
// ordertitle.reverse();
//}
//return ordertitle
//}

//window.sortData = sortData;

window.filterData = filterData;





