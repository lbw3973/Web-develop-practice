export function loadImage(src){
  return new Promise((resolve) => {
    const imgEl = document.createElement('img')
    imgEl.src = src
    imgEl.addEventListener('load', () => {
      resolve()
    })
  })
}