var MyStack = function() {
  this.queueA = []
  this.queueB = []
};

MyStack.prototype.push = function(x) {
  this.queueA.push(x)
};

MyStack.prototype.pop = function() { //pop in queue removes is shift()
  while (this.queueA.length !== 1) {
    this.queueB.push(this.queueA.shift())
  }
  let pop = this.queueA.shift() //last left is what will be pop'd in stack
  while (this.queueB.length !== 0) {
    this.queueA.push(this.queueB.shift())
  }
  //So instead repopulating A in O(n), you could do the following:
  // this.queueA = this.queueB
  // this.queueB = []
  return pop
};

MyStack.prototype.top = function() {
  let top;
  while (this.queueA.length !== 0) { //empty out queueA with shift to populate B
    top = this.queueA.shift()
    this.queueB.push(top)
  }
  while (this.queueB.length !== 0) { //empty out queueB with shift to populate A
    this.queueA.push(this.queueB.shift())
  }
  //Again? Maybe no need to repopulate queueA
  // this.queueA = this.queueB
  // this.queueB = []
  return top
};

MyStack.prototype.empty = function() {
  return this.queueA.length === 0
};
