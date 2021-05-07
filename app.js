let films = document.querySelector('#films')

fetch("http://api.themoviedb.org/3/movie/popular?api_key=2e901364c3d103dcb00ced520e9bca3c")
    .then(response =>response.json())
    .then(data => {
        let showFilms = new ShowFilms(data)
        showFilms.method1()
        console.log(data)})
    .catch(err => {
            console.error(err);
    });


class ShowFilms{
    constructor(data){
        this.data = data
    }
method1(){
    for(let key in this.data.results){              
        films.innerHTML += `
        <h3>${this.data.results[key].original_title}</h3>
        <img src="https://www.myapifilms.com/imdb/image/${this.data.results[key].poster_path}">
        `
    }
  }
}