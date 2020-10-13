const filmlist = document.getElementById("films");

class UI{
    
    static showalert(type,message){
        const firstcardbody=document.getElementsByClassName("card-body")[0];
        const div=document.createElement("div");
        div.className=`alert alert-${type}`;
        div.textContent=message;

        firstcardbody.appendChild(div);

       setTimeout(function(){
           div.remove();
       },1000);
        
    }
    static addToUI(newfilm){
       

        filmlist.innerHTML+= `
        <tr>
        <td><img src="${newfilm.url}" class="img-fluid img-thumbnail"></td>
        <td class="title">${newfilm.title}</td>
        <td class="director">${newfilm.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr> 

        `;



    }
    static LoadFilms(){
       let films=Storage.getFromStorage();

       const filmlist = document.getElementById("films");

       for(let film of films){

       
        filmlist.innerHTML+= `
        <tr>
        <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
        <td class="title">${film.title}</td>
        <td class="director">${film.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr> 

        `;
      
    }

    }
    static deleteFromUI(e){
        e.target.parentElement.parentElement.remove();
       
    }
    static deleteAllFromUI(e){
        while(filmlist.firstElementChild!=null){
            filmlist.firstElementChild.remove();
        }
        

    }
}
