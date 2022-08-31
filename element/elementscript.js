    const typo= document.querySelector('.typo')
    const harmburgar= document.querySelector('.harmburgar')
    const navMenu = document.querySelector('.menu .nav-menu-up')
    harmburgar.addEventListener('click', function(){
      
      if(!harmburgar.classList.contains('active')){
          harmburgar.classList.add('active');
          navMenu.classList.add('active')
          typo.classList.add('active')
      } else{
          harmburgar.classList.remove('active');
          navMenu.classList.remove('active')
          typo.classList.remove('active')
      }
    })
    const dropmenu = document.querySelector('.dropmenu')
    const dropdown = document.querySelector('.dropdown')
    const dropdownLink = document.querySelector('.dropdown-link-1')
    
    dropmenu.onclick = function(){
        dropmenu.classList.toggle('active')
        dropdownLink.classList.toggle('active')
    }





    $(".tab_1").click(function(){
        $(".tabtop").addClass("tab_1");
        $(".tab_2").removeClass("tabmiddle");
        $(".tab_3").removeClass("tabbottom");
        $(".tabtext1").show(100);
        $(".tabtext2, .tabtext3").hide(10);
    
    })
    $(".tab_2").click(function(){
        $(".tab_2").addClass("tabmiddle");
        $(".tab_3").removeClass("tabbottom");
        $(".tabtop").removeClass("tab_1");
        $(".tabtext2").show(100);
        $(".tabtext1, .tabtext3").hide(10);
    
    })
    $(".tab_3").click(function(){
        $(".tab_3").addClass("tabbottom");
        $(".tab_2").removeClass("tabmiddle");
        $(".tabtop").removeClass("tab_1");
        $(".tabtext3").show(100);
        $(".tabtext1, .tabtext2").hide(10);
    
    })





    
    $(".panel-head").click(function(){
        $(".panelslide").slideToggle(500);
        $(".panelslide1").slideUp(500);
        $(".panelslide2").slideUp(500);
        $(".panel-bottum").removeClass("slide");
        $(".bxs-down-arrow").toggleClass("slidearrowdownhead");
        $(".bxs-up-arrow").toggleClass("slidearrowuphead");
    
    })
    $(".panel-middle").click(function(){
        // $(".tabcolor").css.("color", "white");
        $(".panelslide").slideUp(500);
        $(".panelslide1").slideToggle(500);
        $(".panelslide2").slideUp(500);
        $(".panel-bottum").removeClass("slide");
        $(".bxs-down-arrow").toggleClass("slidearrowdownmiddle");
        $(".bxs-up-arrow").toggleClass("slidearrowupmiddle");
    
    })
    $(".panel-bottum").click(function(){
        $(".panelslide").slideUp(500);
        $(".panelslide1").slideUp(500);
        $(".panelslide2").slideToggle(500);
        $(".panel-bottum").toggleClass("slide");
        $(".bxs-down-arrow").toggleClass("slidearrowdown");
        $(".bxs-up-arrow").toggleClass("slidearrowup");
    
    })