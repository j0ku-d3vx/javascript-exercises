const getTheTitles = function(arr) {
    let titles = [];
      
      for(let key of arr){
        titles.push(key.title);
      }

      return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
