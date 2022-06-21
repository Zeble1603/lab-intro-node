class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) {
    this.items.push(item)
    this.items.sort(function(a, b){return a - b})
    this.length = this.items.length
  }

  get(pos) {
    if(pos<this.items.length && pos >= 0){
      return this.items[pos]
    }else{
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if(this.items.length !== 0){
      let newList= this.items.sort(function(a, b){return b - a})
      return newList[0]
    }else{
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if(this.items.length !== 0){
      let newList= this.items.sort(function(a, b){return a - b})
      return newList[0]
    }else{
      throw new Error('EmptySortedList');
    }
  }

  sum() {
    return this.items.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
  }

  avg() {
    if(this.length>0){
      let sum = this.sum()
      return sum / this.length
    }else{
      throw new Error('EmptySortedList');
    }
  }
}

module.exports = SortedList;
