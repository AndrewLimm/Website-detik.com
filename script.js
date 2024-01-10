const carousel = document.getElementById('carousel')

const leftBtn = document.getElementById('left-btn')
const rightBtn = document.getElementById('right-btn')

leftBtn.addEventListener('click', () => {
  carousel.scrollTo({
    left: 0,
    behavior: 'smooth',
  })
})

rightBtn.addEventListener('click', () => {
  carousel.scrollTo({
    left: carousel.scrollWidth,
    behavior: 'smooth'
  })
})
