const cardtop=document.querySelector('.card-top'),


logo=document.querySelector('.logo'),
imgProf=document.querySelector('.img-prof'),
 imgComp=document.querySelector('.img-comp'),
 imgPhone=document.querySelector('.img-phone'),
 about=document.querySelector('.about_me'),
 jaim=document.querySelector('.jaim'),
 imgprof2=document.querySelector('.img-prof2'),

 project=document.querySelector(".projects"),
 contact=document.querySelector('.contact_me'),
 
 languages=document.querySelector('.Languages'),
 details=document.querySelector('.details'),
 heading=document.querySelector('.heading'),
 heading2=document.querySelector('.db'),
p1=document.querySelector('.igd-details'),
p2=document.querySelector('.igd-details2'),
he3=document.querySelector('.heading3'),
jh=document.querySelector('.jh'),
pa3=document.querySelector('.para'),
btn=document.querySelectorAll('.btn');





 


 project.addEventListener('click',()=>
{
    project.style.background='var(--project-blue)';
    cardtop.style.background='#bee0ec';
    contact.style.background='none';
    about.style.background='none';

    heading.innerHTML='Contact App';
    heading.style.color='#50769a'
    heading2.innerHTML='University management system';
    heading2.style.color='#50769a'
    p1.innerHTML='A simple Android app built using Java,XML and SQlite in Android Studio. It can add,delete, update and display contacts and other details. '
    p1.style.fontSize='20px';
    p1.style.fontWeight='600';
    p2.style.fontSize='20px';
    p2.style.fontWeight='600';
    p2.innerHTML='A desktop app for creating,updating and viewing student and faculty records, using Java and MySql';
    he3.innerHTML='Mini Projects',
    he3.style.color='#50769a'
    logo.style.color='#50769a'
    pa3.innerHTML='Other Projects include A Scientific Calculator using HTML,CSS and JavaScript,An Automated Airplane prices web scraper using Python(selenium) and a simple Hotel website using CSS and HTML.'
    pa3.style.fontSize='15px';
    pa3.style.fontWeight='700'
    imgProf.src="./images/computer.png";
   
    
    imgProf.style.boxShadow='0px 0px 0px';
    about.addEventListener('mouseleave',()=>{
        about.style.background='#bee0ec';
       });
    about.addEventListener('mousemove',()=>{
        about.style.background='var(--project-blue)';
       });
      
       contact.addEventListener('mouseleave',()=>{
        contact.style.background='#bee0ec';
       });
    contact.addEventListener('mousemove',()=>{
       contact.style.background='var(--project-blue)';
       });
      
    

       
  
  
});
contact.addEventListener('click',()=>{

window.location='contact.html';




});
about.addEventListener('click',()=>{

    window.location='index.html';
    
    
    
    
    });


    
    

window.addEventListener('DOMContentLoaded', () => {
    
  });


    
    
    



