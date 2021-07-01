var makeGood = function(s) {
  let stack = []
  for (let i = 0; i < s.length; i++) {
    let peek = stack[stack.length-1]
    if (peek && 
      (s[i] === peek.toUpperCase() && peek === peek.toLowerCase()) || 
      (s[i].toUpperCase() === peek && s[i] === s[i].toLowerCase())) { //this is quicker though
    // if (peek && peek.toLowerCase() === s[i].toLowerCase() && peek !== s[i]) { //simpler
      stack.pop()
    } else {
      stack.push(s[i])
    }
  }
  return stack.join('')
};