const title = document.querySelector('#title span')
const buttons = document.querySelectorAll('button')
const start = buttons[0]
const stop = buttons[1]
const parsed = JSON.parse(localStorage.getItem('example'))
let seconds = parsed ? parsed.seconds : 0
let timer = null

title.innerHTML = seconds

start.addEventListener('click', function () {
  if (timer) return false
  timer = setInterval(function () {
    seconds++
    title.innerHTML = seconds
    const json = JSON.stringify({ seconds: seconds })
    localStorage.setItem('example', json)
  }, 1000)
})

stop.addEventListener('click', function () {
  clearInterval(timer)
  timer = null
})
