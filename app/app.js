const PRIVATE_KEY = "3914c136ff44638f0014e4023e9ade2d959ade38";
const PUBLIC_KEY = "b42a07f66068abb2465e9d78979bea87";

let timeStamp = new Date().getTime();
let hash = CreateTsPublicKeyPrivateKey(timeStamp + PRIVATE_KEY + PUBLIC_KEY).toString();
let limit = 16;
let pag = 0;

let box = document.getElementById('grid-row-container');
let boxModal = document.getElementById('charecters')


getlistCharacteres(limit,pag);
function getlistCharacteres (limit,pag){
    fetch(`http://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${PUBLIC_KEY}&hash=${hash}&limit=${limit}&offset=${pag}`)
        .then(response =>  response.ok ? response.json() : Promise.reject(response.statusText))
        .then(json => json.data.results)
        .then(results =>  { results.map(item => { boxCreate.create (item.name, item.thumbnail.path+'.'+item.thumbnail.extension,item.id); });  })
        .catch(console.log);
}

function  getOnlyCharacter(idCharacter) {
    fetch(`https://gateway.marvel.com:443/v1/public/characters/${idCharacter}?&ts=${timeStamp}&apikey=${PUBLIC_KEY}&hash=${hash}`)
        .then(response =>  response.ok ? response.json() : Promise.reject(response.statusText))
        .then(json => json.data.results)
        .then(results => {
            results.map(result => {listCharacterRender.list(result.name, result.thumbnail.path+'.'+result.thumbnail.extension,result.description);
                        result['comics'].items.map(item => listCharacterRender.comics(item.name));
                        result['series'].items.map(item => listCharacterRender.series(item.name));
                        result['stories'].items.map(item => listCharacterRender.stories(item.name));
                        result['events'].items.map(item => listCharacterRender.events(item.name));
        })
           
            listCharacterRender.modal()
          }

        )
        .catch(console.log);
}

function  searchCaracter(name) {
    fetch(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${name}&ts=${timeStamp}&apikey=${PUBLIC_KEY}&hash=${hash}`)
        .then(response =>  response.ok ? response.json() : Promise.reject(response.statusText))
        .then(json => json.data.results)
        .then(results =>  results.map(result => {

            modalRenderSearch(result.name ,result.description, result.thumbnail.path+'.'+result.thumbnail.extension,boxModal) }) )
        .catch(console.log);
}


function clearBox(elementID) {
    elementID.innerHTML = "";
}





