const a = 'Named!'
const b = 123
const c = ['A', 'B', 'C']
function d() {}
export default {name: 'Lee'}
export {
  a as str,
  b as num,
  c as arr, 
  d as hello
}