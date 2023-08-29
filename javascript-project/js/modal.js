// //modal
//
// const modal = document.querySelector('.modal')
// const modalTrigger = document.querySelector('#btn-get')
// const modalClose = document.querySelector('.modal_close')
//
// const openModal = ()=>{
//     modal.style.display = 'block'
//     document.body.style.overflow='hidden'
// }
//
// //auto
// const autoShow =()=>{
//     modal.style.display = 'block'
// }
//
// setTimeout(autoShow, 10000)
//
//
// //close
// const closeModal = ()=>{
//     modal.style.display = 'none'
//     document.body.style.overflow=''
// }
//
// modalTrigger.onclick = ()=> openModal()
// modalClose.onclick = () => closeModal()
//
// modal.onclick =(event)=>{
//     if(event.target===modal) closeModal()
// }
//
// //scroll
// const scrollModal = ()=>{
//
//     const scrollPosition = window.scrollY
//     const windowHeight = window.innerHeight
//     const documentHeight = document.documentElement.scrollHeight
//
//     const limit = 0.95
//     if (scrollPosition > (documentHeight - windowHeight) * limit) {
//         openModal()
//         window.removeEventListener('scroll', scrollModal);
//     }
// }
//
// window.addEventListener('scroll', scrollModal);


