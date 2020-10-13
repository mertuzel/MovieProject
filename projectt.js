const firstcardbody=document.getElementsByClassName("card-body")[0];
const title0=document.getElementById("title");
const director0=document.getElementById("director");
const url0=document.getElementById("url");
const filmform=document.getElementById("film-form");
const secondcardbody=document.getElementsByClassName("card-body")[1];
const clearfilms=document.getElementById("clear-films");
const sort=document.getElementById("sort");

eventListeners();

function addFilm(e){
    const title=title0.value;
    const director=director0.value;
    const url=url0.value;
    if(title==="" || director==="" || url===""){
        UI.showalert("danger","Başaramadık Abi");
    }
    else{
        const newfilm=new Film(title,director,url);
        UI.addToUI(newfilm); 
        Storage.addToStorage(newfilm);
    }
   
    e.preventDefault();
   
    
};

function eventListeners(){
   filmform.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",UI.LoadFilms());
    secondcardbody.addEventListener("click",deleteFilm);
    clearfilms.addEventListener("click",deleteAllFilm);
    sort.addEventListener("keyup",filter);
};

function deleteFilm(e){
  if(e.target.id === "delete-film"){
      UI.deleteFromUI(e);
      Storage.deleteFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
      
  }
};
function deleteAllFilm(){
    UI.deleteAllFromUI();
    Storage.deleteAllFromStorage();
};

function filter(e){
    const filter=e.target.value.toLowerCase();
    const filmtitles=document.querySelectorAll(".title");

    // const filmtitless=Array.from(filmtitles);
    filmtitles.forEach(function(title){
        const newtitle=title.textContent.toLowerCase();
        if(newtitle.indexOf(filter)===-1){
            title.parentElement.setAttribute("style","display:none !important");
            
        }
        else{
            title.parentElement.setAttribute("style","display:block");
            
        }
    })
    
    }

   


