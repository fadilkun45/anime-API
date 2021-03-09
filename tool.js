const inputVal = document.querySelector(".search input");
const render = document.querySelector("#render");
const btn = document.querySelector(".search button");

btn.addEventListener('click',function(){
    render.innerHTML = '';
})

function search () {
    fetch('https://api.jikan.moe/v3/search/anime?q=' + inputVal.value )
    .then(res => res.json())
    .then(res => {
        for(i = 0 ; i <= 3 ; i++ ){
        const result = res.results ;

        let hasil = result[i] ;
        let gambar = hasil.image_url
        let title = hasil.title
        let score = hasil.score
        let sipnosis = hasil.synopsis
        let  episode = hasil.episodes
        let url = hasil.url

        render.innerHTML += `<div class="card">
        <img src="${gambar}">
        <h5>${title}</h5>
        <h5> score : ${score}</h5>
        <h5> episode : ${episode}</h5>
        <p>${sipnosis}</p>
        <a href="${url}">more</a>
        </div>` ;
    }
    
 })
}






 // console.log(hasil);
    //     let card = '';
    //     hasil.forEach(m => 
    //         card += ` <div class="card">
    //                     <img src="${m.image_url}">
    //                     <h5>${m.title}</h5>
    //                     <h5> score : ${m.score}</h5>
    //                     <h5> episode : ${m.episodes}</h5>
    //                     <p>${m.synopsis}</p>
    //                     <a href="${m.url}">more</a>
    //                 </div>`
        
    // )


    // render.innerHTML = ` <div class="card">
    //     <img src="${gambar}">
    //     <h5>${title}</h5>
    //     <h5> score : ${score}</h5>
    //     <h5> episode : ${episode}</h5>
    //     <p>${sipnosis}</p>
    //     <a href="${url}">more</a>
    //     </div>` ;