const num=document.querySelector(".number1");
      const num1=document.querySelector(".number2");
      const num2=document.querySelector(".number3");
      const num3=document.querySelector(".number4");

//       window.addEventListener("scroll",()=>{
   
//         let height= window.pageYOffset
//         console.log(height)
//     let value=0;
//    if(height >= 2473 && height <=2500){

   let value = 7;
setInterval(
    function(){
        if (value < 377){
            value += 1
            num.innerHTML = value;
        }
    }, 1
)
   let value1 = 827;
setInterval(
    function(){
        if (value1 < 1204){
            value1 += 1
            num1.innerHTML = value1;
        }
    }, 1
)
   let value2 = 82;
setInterval(
    function(){
        if (value2 < 459){
            value2 += 1
            num2.innerHTML = value2;
        }
    }, 1
)
   let value3 = 298;
setInterval(
    function(){
        if (value3 < 675){
            value3 += 1
            num3.innerHTML = value3;
        }
    }, 1
)

 
//   harmburgar.addEventListener('click', function(){
    //     design.classList.toggle('active')
    //     if(!harmburgar.classList.contains('active')){
        //         harmburgar.classList.add('active');
//         navMenu.classList.add('active')
//     } else{
    //         harmburgar.classList.remove('active');
    //         navMenu.classList.remove('active')
    //         design.remove('active')
    //     }
    //   })
    
    const  form = document.querySelector('form')
    const  worlkrespon = document.querySelector('.worlk-respon')
    const worktoggle1 = document.querySelector('.worktoggle1')
    const harmburgar= document.querySelector('.harmburgar')
    const navMenu = document.querySelector('.nav-menu-up')
    harmburgar.onclick = function(){
        harmburgar.classList.toggle('active')
        navMenu.classList.toggle('active')
        worktoggle1.classList.toggle('active')
        worlkrespon.classList.toggle('active')
        form.classList.toggle('active')
    }


    const dropmenu = document.querySelector('.dropmenu')
    const dropdown = document.querySelector('.dropdown')
    const dropdownLink = document.querySelector('.dropdown-link-1')
    
    dropmenu.onclick = function(){
        dropmenu.classList.toggle('active')
        dropdownLink.classList.toggle('active')
    }
