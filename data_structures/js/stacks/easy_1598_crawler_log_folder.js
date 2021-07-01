var minOperations = function(logs) {
  let folder = [] //you could use a counter 
  for (const operation of logs) {
    if (operation === '../') {
      folder.pop() //if you use counter make sure you dont substract if you already at 0
    } else if (operation === './') {
      continue
    } else {
      folder.push(operation)
    }
  }
  return folder.length
};