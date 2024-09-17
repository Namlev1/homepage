import './styles.css'
import geralt from './assets/img/geralt.jpg'
import ciri from './assets/img/ciri.jpg'
import yennefer from './assets/img/yennefer.jpg'
import dandelion from './assets/img/dandelion.jpeg'
import triss from './assets/img/triss.webp'
import vesemir from './assets/img/vesemir.jpg'
import zoltan from './assets/img/zoltan.jpg'
import link from './assets/icons/link.svg'

document.querySelector('.img-wrap > img').src = geralt
const cards = document.querySelectorAll('.card > .img-wrap> img')
cards[0].src = ciri
cards[1].src = dandelion
cards[2].src = yennefer
cards[3].src = vesemir
cards[4].src = triss
cards[5].src = zoltan

const links = document.querySelectorAll('.description img')
links.forEach((linkElem) => linkElem.src = link)
