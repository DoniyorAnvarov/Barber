let section_radius = document.querySelectorAll('.section_radius')

section_radius.forEach(section_header => {
    
        section_header.addEventListener('mousemove', rotate)
        section_header.addEventListener('mouseout', rotateNone)
        
});

 function rotate(e) {
    
     const radius = this;/* .querySelector('.section_radius') */
     const halfHeight = radius.offsetHeight / 2

 radius.style.transform = `rotateX(${-(e.offsetY - halfHeight) / 5}deg) rotateY(${(e.offsetX - halfHeight) / 5}deg)`
}
 
function rotateNone(e) {
    
 const radius = this;/* querySelector('.section_radius') */
 radius.style.transform = 'rotate(0)'
 
}

let views = document.querySelector('.view')

    let cardBlock = document.querySelectorAll('.foother_title'),
    
        imgCard = views.querySelector('img');
       
        for (let i = 0; i < cardBlock.length; i++) {
            cardBlock[i].addEventListener('click', ()=>{
             
                views.classList.add('active')
                
                let imgd = cardBlock[i].querySelector('img').getAttribute('src');
                imgCard.setAttribute('src', imgd)
    
            })
        
        }
        let view__close = document.querySelector('.view__close')
        
        view__close.addEventListener('click', () => {
              
            views.classList.remove('active')
       
        })

let headerNavMenu = document.querySelector('.nav__menu');
let headerNavLine = document.querySelector('.nav__line');
let headerList = document.querySelector('.list');

headerNavLine.addEventListener('click', function (e) {
   this.classList.toggle('active');
   headerList.classList.toggle('active');
   headerNavMenu.classList.toggle('active');
})









































// class Paralax {
//     constructor(obj) {
//         this.cardSection = document.querySelector(obj.cardSec)
//         this.cardImage = this.cardSection.querySelector('.section_img')
//         this.cardTitle = this.cardSection.querySelector('.section_text')
//         this.cardTxt = this.cardSection.querySelector('.section_list')
//         this.cardLinks = this.cardSection.querySelector('.from_section')

//         window.addEventListener('scroll', () => {
//             if(pageYOffset >= (this.cardSection.offsetTop - this.cardSection.offsetHeight)){
//                 this.cardImage.style.transform = 'translateX(0%)'
//                 this.cardTitle.style.transform = 'translateX(0%)'
//                 this.cardTxt.style.transform = 'translateX(0%)'
//                 this.cardLinks.style.transform = 'translateX(0%)'
//             }
//         })
//     }
// }


// const card = new Paralax({
//     cardSec: '.game'
// })


// class Paralax {
//     constructor(obj) {
//         this.gameSection = document.querySelector(obj.gameSec)
//         this.gameImage = this.gameSection.querySelector('.game__img')
//         this.gameTitle = this.gameSection.querySelector('.game__desc-title')
//         this.gameTxt = this.gameSection.querySelector('.game__desc-txt')
//         this.gameLinks = this.gameSection.querySelector('.game__links')

//         window.addEventListener('scroll', () => {
//             if(pageYOffset >= (this.gameSection.offsetTop - this.gameSection.offsetHeight)){
//                 this.gameImage.style.transform = 'translateX(0%)'
//                 this.gameTitle.style.transform = 'translateX(0%)'
//                 this.gameTxt.style.transform = 'translateX(0%)'
//                 this.gameLinks.style.transform = 'translateX(0%)'
//             }
//         })
//     }
// }


// const game = new Paralax({
//     gameSec: '.game'
// })