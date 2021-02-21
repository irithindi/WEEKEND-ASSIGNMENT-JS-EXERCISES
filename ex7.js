//  implement the following methods -
// - Filter
// - ForEach
// - Map
// Using only for(), array and objects (without other js methods)



const myMapFunc =(callback)=> {
    const resultArray = [];
    for (let index = 0; index < this.length; index++) {
        resultArray.push(callback(this[index], index, this)); //this[index] - current element ,this- Entire Array
    }
    return resultArray;
}



const myFilterFunc =(callback)=> {
    let filtered = []; 
    for(let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) filtered.push(this[i]);
    }
    return filtered;
  };

  const myForEachFunc=(callback)=> {
        for (let i = 0; i < this.length; i++)
            callback(this[i], i, this);
    };

