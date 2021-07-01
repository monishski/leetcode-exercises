var calPoints = function(ops) {
  let stack = []
  let sum = 0
  for(let i = 0; i < ops.length; i++) {
    console.log(stack, sum)
    if (ops[i].match(/[1-9]/)) {
      stack.push(+ops[i])
      sum += +ops[i]
    } else if (ops[i] === 'D') {
      // let top = stack.pop() //you dont need to pop()
      // stack.push(top, top * 2)
      let top = stack[stack.length-1] 
      stack.push(top * 2)
      sum += top * 2
    } else if (ops[i] === 'C') {
      sum -= stack.pop()
    } else if (ops[i] === '+') {
      let top = stack.pop()
      // let _top = stack.pop()
      let _top = stack[stack.length-1]
      // stack.push(_top, top, top + _top) //order matters here
      stack.push(top, top + _top)
      sum += top + _top
    }
  }
  return sum
};