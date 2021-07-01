var RecentCounter = function() {
  this.requests = []
};

RecentCounter.prototype._ping = function(t) {
  this.requests.push(t)
  let counter = 0
  for (let i = 0; i < this.requests.length; i++) {
    if ((t - 3000) <= this.requests[i]) counter++;
  }
  return counter
};

//Basically, you can use a queue to optimise the solution
//We remove all historic 't' which is less than 't' - 3000
RecentCounter.prototype.ping = function(t) {
  this.requests.push(t)
  while (this.requests[0] < t - 3000) { 
    this.requests.shift()
  }
  return this.requests.length
};
