var MinStack = function() {
  this.stack = []
  this.mins = []
  // this.min = Number.POSITIVE_INFINITY //there is no need for this
};

MinStack.prototype.push = function(val) {
  this.stack.push(val)
  if (this.mins.length === 0 || val <= this.mins[this.mins.length-1]) { //less than equal to is important
    this.mins.push(val)
  }
  // this.min = Math.min(this.min, val)
  // this.mins.push(this.min)
};

MinStack.prototype.pop = function() {
  let temp = this.stack.pop()
  if (temp === this.mins[this.mins.length-1]) {
    this.mins.pop()
  }
  // this.mins.pop()
  // if (this.mins.length === 0) {
  //   this.min = Number.POSITIVE_INFINITY
  // } else {
  //   this.min = this.mins[this.mins.length-1]
  // }
};

MinStack.prototype.top = function() {
  return this.stack[this.stack.length-1]
};

MinStack.prototype.getMin = function() {
  return this.mins[this.mins.length-1]
};