import { loadImage } from "./loadImage.js"

// function loadImage(src){
//   return new Promise((resolve) => {
//     const imgEl = document.createElement('img')
//     imgEl.src = src
//     imgEl.addEventListener('load', () => {
//       resolve()
//     })
//   })
// }

const src = 'https://picsum.photos/2000'
await loadImage(src)
document.body.innerHTML = `<img src="${src}"/>`
console.log('Loaded!')

// function loadImage(src, callback){
//   const imgEl = document.createElement('img')
//   imgEl.src = src
//   imgEl.addEventListener('load', () => {
//     callback()
//   })
// }

// const src = 'https://picsum.photos/2000'
// loadImage(src, () => {
//   document.body.innerHTML = `<img src="${src}"/>`
//   console.log('Loaded!')
// })