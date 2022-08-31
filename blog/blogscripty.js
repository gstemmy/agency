const descrip= document.querySelector('.descrip')
    const harmburgar= document.querySelector('.harmburgar')
    const navMenu = document.querySelector('.menu .nav-menu-up')
    harmburgar.addEventListener('click', function(){
      
      if(!harmburgar.classList.contains('active')){
          harmburgar.classList.add('active');
          navMenu.classList.add('active')
          descrip.classList.add('active')
      } else{
          harmburgar.classList.remove('active');
          navMenu.classList.remove('active')
          descrip.classList.remove('active')
      }
    })
    const dropmenu = document.querySelector('.dropmenu')
    const dropdown = document.querySelector('.dropdown')
    const dropdownLink = document.querySelector('.dropdown-link-1')
    
    dropmenu.onclick = function(){
        dropmenu.classList.toggle('active')
        dropdownLink.classList.toggle('active')
    }