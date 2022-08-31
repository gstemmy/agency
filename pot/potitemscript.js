const work = document.querySelector('.work')
    const portfolio = document.querySelector('.pottoggle1')
    const descriptoggle= document.querySelector('.descriptoggle')
    const harmburgar= document.querySelector('.harmburgar')
    const navMenu = document.querySelector('.nav-menu-up')
    harmburgar.onclick = function(){
        harmburgar.classList.toggle('active')
        navMenu.classList.toggle('active')
        descriptoggle.classList.toggle('active')
        portfolio.classList.toggle('active')
        work.classList.toggle('active')
        // work.innerHTML = ''
    }
    const dropmenu = document.querySelector('.dropmenu')
    const dropdown = document.querySelector('.dropdown')
    const dropdownLink = document.querySelector('.dropdown-link-1')
    
    dropmenu.onclick = function(){
        dropmenu.classList.toggle('active')
        dropdownLink.classList.toggle('active')
    }
  