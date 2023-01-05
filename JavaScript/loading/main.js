function loadImage(url, callback) {
  const imgEl = document.createElement('img')
  imgEl.src = url
  imgEl.innerText = 'sdasdsadsadsad'

  imgEl.addEventListener('load', () => {
    callback(imgEl)
  })
}

loadImage(
  'https://picsum.photos/3000/3000',
  function (imgEl) {
    document.body.innerHTML = ''
    document.body.append(imgEl)
  }
)