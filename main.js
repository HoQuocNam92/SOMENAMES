const bars = document.querySelector('.bars');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');
const closeBars =document.querySelector('.close');

function toggleSidebar() {
    [sidebar, overlay].forEach((e)=>{
        e.classList.toggle('active');
    })
}

[bars,overlay,closeBars].forEach((e)=>{
    e.addEventListener('click', toggleSidebar);
})


document.addEventListener('DOMContentLoaded',function(e) {
    const listImage = document.querySelectorAll('.grid-items');
    const modal =document.querySelector('.modal');
    const imgModal = document.querySelector('.img-modal');
    const closeModal = document.querySelector('.close-modal');
    listImage.forEach((e)=>{
        e.addEventListener('click',(e)=>{
            modal.style.display='block';
            imgModal.src=e.target.src;
        })
    });
    closeModal.addEventListener('click',()=>{
        modal.style.display='none';
        
    });
    modal.addEventListener('click',(e)=>{
        if(e.target == modal){
            modal.style.display='none';
        }
    })

});