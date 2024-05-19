let t
const o = document.querySelector('#txt')
document.querySelector('#container').addEventListener('scroll', _ => {
  if (t) clearTimeout(t)
  o.classList.add('on')
  t = setTimeout(_ => o.classList.remove('on'), 1000)
})