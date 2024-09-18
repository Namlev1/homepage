import './styles.css'
import geralt from './assets/img/geralt.jpg'
import geraltThumb from './assets/img/geralt-thumbs-up.webp'
import ciri from './assets/img/ciri.jpg'
import yennefer from './assets/img/yennefer.jpg'
import dandelion from './assets/img/dandelion.jpeg'
import triss from './assets/img/triss.webp'
import vesemir from './assets/img/vesemir.jpg'
import zoltan from './assets/img/zoltan.jpg'
import linkIcon from './assets/icons/link.svg'
import phoneIcon from './assets/icons/phone.svg'
import emailIcon from './assets/icons/email.svg'
import github from './assets/icons/github.svg'
import linkedin from './assets/icons/linkedin.svg'
import x from './assets/icons/x.svg'

document.querySelector('.img-wrap > img').src = geralt
const cards = document.querySelectorAll('.card > .img-wrap > img')
cards[0].src = ciri
cards[1].src = dandelion
cards[2].src = yennefer
cards[3].src = vesemir
cards[4].src = triss
cards[5].src = zoltan

document.querySelector('.phone').innerHTML = `${phoneIcon} 555-555-5555`
document.querySelector('.email').innerHTML = `${emailIcon} geralt@witcher.com`

const linkIcons = document.querySelectorAll('.description .flex a .icon')

linkIcons.forEach(linkElem => {
  linkElem.innerHTML = linkIcon
})

document.querySelector('footer img').src = geraltThumb

const socials = document.querySelectorAll('.socials .icon')
socials[0].innerHTML = github
socials[1].innerHTML = linkedin
socials[2].innerHTML = x
