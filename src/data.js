const filterData = (data, condition) => {
  let filterFeedLabel = data.filter(element => {
    return element.feedlabel.includes(condition) === true;

  })
  return filterFeedLabel;
};

const computeStast = (calculo) => {
  let porcentaje = (calculo*100)/10;
  return porcentaje;
}


window.filterData = filterData;
window.computeStast= computeStast;






