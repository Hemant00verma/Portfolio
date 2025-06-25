var typed = new Typed('#element', {
    strings: ['Frontend Developer', 'Backend Developer','Fullstack Developer'],
    typeSpeed: 75,             
    backSpeed: 75,         
    loop: true,            
    backDelay: 1000,       
    startDelay: 100,       
    smartBackspace: true,  
    showCursor: true,
    cursorChar: '|'
  });


gsap.from(".right-section img", {
  opacity: 0,
  y: 50,
  scale: 0.25,
  delay: 0.5,
  duration: 1,
  scrollTrigger: {
    trigger: ".right-section img",
    start: "top 80%", 
    toggleActions: "restart none restart none", 
  }
  
});
fetch('/api/skill.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('skill-box');

    data.forEach(skill => {
      const skillDiv = document.createElement('button');
      skillDiv.className = 'btn';

      skillDiv.innerHTML = `
        <img src="/img/${skill.skillImage}" alt="" width="50" />
        <h4>${skill.skillName}</h4>
      `;

      container.appendChild(skillDiv);
    });
  })
  .catch(error => console.error('Error fetching skills:', error));
  fetch('/api/project.json')
  .then(response=> response.json())
  .then(data=>{
    const pContainer=document.getElementsByClassName('box-container')


  });
//   function comment(){
//     // data.forEach(Project=>{
//   //   const pBox=document.createElement('div');
//   //    const bDiv=document.createElement('div');
//   //   pBox.className='box';
//   //   pBox.innerHTML=`
//   //   <img src="public/api/img${Project.image}" alt="">
//   //         <h2>${Project.heading} </h2>
//   //         <p>${Project.description}</p>`
//   //         pBox.bDiv.innerHTML=`
//   //         <button>${Project.teckStack}</button>
//   //         `
   

//   // })
// //   gsap.from("#skill-box", {
// //   opacity: 0.02,
// //   y: 20,
// //    delay: 0.25,
// //   duration: 1,
// //   scrollTrigger: {
// //     trigger: "#skill-box",
// //     start: "top 80%", 
// //     toggleActions: "restart none restart none", 
// //   }
  
// // });

//   }
const nav = document.querySelectorAll(".nav-link");

nav.forEach(link => {
  link.addEventListener('click', function (n) {
    n.preventDefault();
    const checkId=this.getAttribute('href').substring(1);
    const targetSection=document.getElementById(checkId);
    if(targetSection)
    {
      targetSection.scrollIntoView({behavior:"smooth"})
    }

    
    
  });
});
//contact section
const scriptURL = 'https://script.google.com/macros/s/AKfycbzsqyW8nqxuBEHrvP_tHSNnZmVFZ4mxW-AGlWT2W6Pv-1F4Tmk4nlBa0mXWPIe8lEkLlw/exec'
  const form = document.forms['submit-to-google-sheet']
  const sms=document.getElementById('sms');


  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
        sms.innerHTML="massage sent successfully"
        setTimeout(function(){
          sms.innerHTML='';

        },2000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById('navMenu');
  const icon = document.getElementById('menuIcon');

  if (menu && icon) {
    icon.addEventListener('click', function () {
      menu.classList.toggle('active');

      // Change icon content
      if (menu.classList.contains('active')) {
        icon.innerHTML = '&times;'; // ×
      } else {
        icon.innerHTML = '&#9776;'; // ☰
      }
    });
  }
});




