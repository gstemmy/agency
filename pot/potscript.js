// harmburgar.addEventListener('click', function(){
          
        //   if(!harmburgar.classList.contains('active')){
        //       harmburgar.classList.add('active');
        //       navMenu.classList.add('active')
        //   } else{
        //       harmburgar.classList.remove('active');
        //       navMenu.classList.remove('active')
        //   }
        // })
   
        // const navMenu = document.querySelector('.menu .nav-menu-up')
        const worlkrespon = document.querySelector('.worlk-respon')
        const work = document.querySelector('.work')
        const harmburgar= document.querySelector('.harmburgar')
        const navMenu = document.querySelector('.nav-menu-up')
        const worktoggle = document.querySelector('.worktoggle')
        const descriptoggle = document.querySelector('.descriptoggle')
        harmburgar.onclick = function(){
            harmburgar.classList.toggle('active')
            navMenu.classList.toggle('active')
            descriptoggle.classList.toggle('active')
            worktoggle.classList.toggle('active')
            work.classList.toggle('active')
            worlkrespon.classList.toggle('active')
            // work.innerHTML = ''
            worktoggle.innerHTML = ''
            // worktoggle.style.displaye = 'none'
        }
        const dropmenu = document.querySelector('.dropmenu')
        const dropdown = document.querySelector('.dropdown')
        const dropdownLink = document.querySelector('.dropdown-link-1')
        
        dropmenu.onclick = function(){
            dropmenu.classList.toggle('active')
            dropdownLink.classList.toggle('active')
        }
      
        $(".all").click(function(){
        $(".topall").addClass("all");
        $(".weball").removeClass("weball1");
        $(".mobileall").removeClass("mobileall1");
        $(".illustrateall").removeClass("illustrateall1");
        $(".brandall").removeClass("brandall1");
        $(".photoall").removeClass("photoall1");
        $(".work-item").removeClass("work-item1");
        $(".pot001, .pot002, .pot003, .pot004, .pot005, .pot006, .pot007").show(100);
        $(".pot008, .pot009, .pot0010, .pot0011, .pot006, .pot0012").show(100);
    
        })


        $(".weball").click(function(){
        $(".weball").addClass("weball1");
        $(".topall").removeClass("all");
        $(".mobileall").removeClass("mobileall1");
        $(".illustrateall").removeClass("illustrateall1");
        $(".brandall").removeClass("brandall1");
        $(".photoall").removeClass("photoall1");
        $(".work-item").addClass("work-item1");
        $(".pot001, .pot0012").show(100);
        $(".pot002, .pot003, .pot004, .pot005, .pot006, .pot007").hide(100);
        $(".pot008, .pot009, .pot0010, .pot0011").hide(100);
    
        })


        $(".mobileall").click(function(){
        $(".mobileall").addClass("mobileall1");
        $(".topall").removeClass("all");
        $(".weball").removeClass("weball1");
        $(".illustrateall").removeClass("illustrateall1");
        $(".brandall").removeClass("brandall1");
        $(".photoall").removeClass("photoall1");
        $(".work-item").addClass("work-item1");
        $(".pot002, .pot007, .pot009").show(100);
        $(".pot001, .pot003, .pot004, .pot005, .pot006").hide(100);
        $(".pot008, .pot0010, .pot0011, .pot0012").hide(100);
    
        })
        
        
        $(".illustrateall").click(function(){
        $(".illustrateall").addClass("illustrateall1");
        $(".topall").removeClass("all");
        $(".weball").removeClass("weball1");
        $(".mobileall").removeClass("mobileall1");
        $(".brandall").removeClass("brandall1");
        $(".photoall").removeClass("photoall1");
        $(".work-item").addClass("work-item1");
        $(".pot003, .pot006").show(100);
        $(".pot001, .pot002, .pot004, .pot005, .pot0012, .pot007").hide(100);
        $(".pot008, .pot009, .pot0010, .pot0011").hide(100);
        })



        $(".brandall").click(function(){
        $(".brandall").addClass("brandall1");
        $(".topall").removeClass("all");
        $(".weball").removeClass("weball1");
        $(".mobileall").removeClass("mobileall1");
        $(".illustrateall").removeClass("illustrateall1");
        $(".photoall").removeClass("photoall1");
        $(".work-item").addClass("work-item1");
        $(".pot004, .pot0011").show(100);
        $(".pot001, .pot002, .pot003, .pot005, .pot0012, .pot007").hide(100);
        $(".pot008, .pot009, .pot0010, .pot006").hide(100);
    
        })
        
        $(".photoall").click(function(){
        $(".photoall").addClass("photoall1");
        $(".topall").removeClass("all");
        $(".weball").removeClass("weball1");
        $(".mobileall").removeClass("mobileall1");
        $(".illustrateall").removeClass("illustrateall1");
        $(".work-item").addClass("work-item1");
        $(".pot005, .pot0010").show(100);
        $(".pot001, .pot002, .pot003, .pot004, .pot0012, .pot007").hide(100);
        $(".pot008, .pot009, .pot0011, .pot006").hide(100);
    
        })