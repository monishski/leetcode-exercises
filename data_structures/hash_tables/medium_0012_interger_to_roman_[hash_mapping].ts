const map: { [key: number]: string } = {
  1: 'I',
  4: 'IV',
  5: 'V',
  9: 'IX',
  10: 'X',
  40: 'XL',
  50: 'L',
  90: 'XC',
  100: 'C',
  400: 'CD',
  500: 'D',
  900: 'CM',
  1000: 'M',
}

function intToRoman(num: number): string {
  if (map[num]) return map[num]
  let res = ''
  let keys: string[] = Object.keys(map).reverse() //keys are always strings
  for (const key of keys) {
    while (num - +key >= 0) {
      res += map[key]
      num -= +key
    }
  }
  return res
  
};