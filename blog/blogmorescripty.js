const des02= document.querySelector('.des02')
   const harmburgar= document.querySelector('.harmburgar')
    const navMenu = document.querySelector('.nav-menu-up')
    harmburgar.onclick = function(){
        harmburgar.classList.toggle('active')
        navMenu.classList.toggle('active')
        des02.classList.toggle('active')
    }
        const dropmenu = document.querySelector('.dropmenu')
    const dropdown = document.querySelector('.dropdown')
    const dropdownLink = document.querySelector('.dropdown-link-1')
    
    dropmenu.onclick = function(){
        dropmenu.classList.toggle('active')
        dropdownLink.classList.toggle('active')
    }