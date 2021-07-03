 var MyQueue = function() { //front is left, back is right...
  this.stackA = [] //allowed operations are push and pop
  this.stackB = [] 
};

MyQueue.prototype.push = function(x) { 
  this.stackA.push(x) //just standard push for a stack
};

MyQueue.prototype.pop = function() {
  console.log(this.stackA)
  while (this.stackA.length > 1) {
    this.stackB.push(this.stackA.pop())
  }
  let pop = this.stackA.pop()
  while (this.stackB.length) {
    this.stackA.push(this.stackB.pop())
  }
  return pop
};

MyQueue.prototype.peek = function() {
  let front;
  while (this.stackA.length) {
    front = this.stackA.pop()
    this.stackB.push(front)
  }
  while (this.stackB.length) {
    this.stackA.push(this.stackB.pop())
  }
  return front
};

MyQueue.prototype.empty = function() {
  return this.stackA.length === 0
};