const navToggle = document.querySelector('.nav__toggle'),
  menuNav = document.querySelector('.nav__menu'),
  navClose = document.querySelector('.nav__close')

navToggle.addEventListener('click', (e) => {
  menuNav.classList.add('show')
  console.log(e)
})

navClose.addEventListener('click', () => {
  menuNav.classList.remove('show')
})

const Move = document.getElementById('move1')
const Move2 = document.getElementById('move2')
const Move3 = document.getElementById('move3')
const Move4 = document.getElementById('move4')
const Move5 = document.getElementById('move5')
const Move6 = document.getElementById('move6')
const aray = [Move, Move2, Move3, Move4, Move5, Move6]

document.addEventListener('mousemove', (e) => {
  aray.forEach(el => {
    const speed = el.getAttribute('data-speed')
    const x = (window.innerWidth - e.pageX * speed) / 120
    const y = (window.innerHeight - e.pageY * speed) / 120
    el.style.transform = `translateX(${x}px) translateY(${y}px)`
  })
})

const navLogo = document.querySelector('.nav__logo')
const allItems = document.querySelectorAll('.nav__item')
window.addEventListener('load', () => {
  const TL = gsap.timeline({
    paused: true
  })

  TL
  .staggerFrom(allItems, 1, {y: 20, opacity: 0, ease: "power2.out"}, 0.2, )
    .from('.home__title', 1, {
      y: 50,
      opacity: 0,
      ease: "power2.out"
    }, 0.3, "-=2")

    .from('.home__conatiner', 1, {
      y: 50,
      opacity: 0,
      ease: "power2.out"
    }, 0.3, "-=2")


    .play()


})