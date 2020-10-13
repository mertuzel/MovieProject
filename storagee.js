class Storage{
   
    static addToStorage (newfilm){
        let films=this.getFromStorage();
        films.push(newfilm);
        localStorage.setItem("films",JSON.stringify(films));

    };
    static getFromStorage(){
       let films;

        if(localStorage.getItem("films")===null){
            films= [] ;
            
        }
        else {
            films = JSON.parse(localStorage.getItem("films"));
           
        }
        return films;

    };
    static deleteFromStorage(chosen){
       let films = this.getFromStorage();
       films.forEach(function(film,index){
           if(chosen === film.title){
               films.splice(index,1);
           }
       });  
        localStorage.setItem("films",JSON.stringify(films));
    }
    static deleteAllFromStorage(){
        localStorage.removeItem("films");
    }
    }
