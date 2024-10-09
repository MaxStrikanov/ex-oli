import 'reset-css';
import './style.css';


const tabsTribune = document.querySelectorAll('.tab__item')
const tabsContentInter = document.querySelectorAll('.menu__item')

console.log(tabsTribune);


const changeTabs = (tabs, tabsContent) => {
  for (let i = 0; i < tabs.length; i++) {
     
      tabs[i].addEventListener("click", () => {
        
       
        
      tabs.forEach((item) => {
          item.classList.remove("active");
        });
      
      
      tabsContent.forEach((item) => {
           item.classList.remove("active");
       });
        
        tabs[i].classList.add("active");
        tabsContent[i].classList.add("active");
      });
    } 
  }


  changeTabs(tabsTribune, tabsContentInter);