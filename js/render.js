
const listCharacterRender = {
    list(name, image,description) {

        let modal = html.get('.box-modal')
        // let btnClose = document.createElement('div')
        // btnClose.classList.add('closeBtn')
        // btnClose.innerHTML = 'X'

        let divRowDescription = document.createElement('div')
            divRowDescription.classList.add('row-name-description-image')
            let h4 = document.createElement('h4')
            h4.innerHTML = name

        let div = document.createElement('div')
            let img = document.createElement('img')
            img.src = image
            let p = document.createElement('p')
            p.innerHTML = description ? description : `<b> Desculpe não existe descrição, para o personagem(ns).</b>`

            divRowDescription.appendChild(h4)
            divRowDescription.appendChild(div)
                div.appendChild(img)
                div.appendChild(p)
// row comics-------------------------------------------------------------
         let rowC = document.createElement('div')
         rowC.classList.add('row-comics-series-stories-events')
 
         let h5C = document.createElement('h5')
         h5C.classList.add('do-not-select')
         h5C.id = 'click-1'
         h5C.innerHTML = 'comics'
         
         let ulC = document.createElement('ul')
             ulC.id = 'comics'
             ulC.classList.add('marvel-1')
 
             rowC.appendChild(h5C)
             rowC.appendChild(ulC)
// row series-------------------------------------------------------------
        let rowS = document.createElement('div')
        rowS.classList.add('row-comics-series-stories-events')

        let h5S = document.createElement('h5')
        h5S.classList.add('do-not-select')
        h5S.id = 'click-2'
        h5S.innerHTML = 'series'

        let ulS = document.createElement('ul')
            ulS.id = 'series'
            ulS.classList.add('marvel-2')

            rowS.appendChild(h5S)
            rowS.appendChild(ulS)
// row series-------------------------------------------------------------
        let rowSt = document.createElement('div')
        rowSt.classList.add('row-comics-series-stories-events')

        let h5St = document.createElement('h5')
        h5St.classList.add('do-not-select')
        h5St.id = 'click-3'
        h5St.innerHTML = 'stories'

        let ulSt = document.createElement('ul')
            ulSt.id = 'stories'
            ulSt.classList.add('marvel-3')

            rowSt.appendChild(h5St)
            rowSt.appendChild(ulSt)
 // row events-------------------------------------------------------------
         let rowE = document.createElement('div')
         rowE.classList.add('row-comics-series-stories-events')

         let h5E = document.createElement('h5')
         h5E.classList.add('do-not-select')
         h5E.id = 'click-4'
         h5E.innerHTML = 'events'

         let ulE = document.createElement('ul')
         ulE.id = 'events'
         ulE.classList.add('marvel-4')

         rowE.appendChild(h5E)
         rowE.appendChild(ulE)
// --------------------------------------------------------------------
        this.click(h5C)
        this.click(h5S)
        this.click(h5St)
        this.click(h5E)


        modal.appendChild(divRowDescription)
        modal.appendChild(rowC)
        modal.appendChild(rowS)
        modal.appendChild(rowSt)
        modal.appendChild(rowE)
},
    comics(name) {
            let ul = html.get('#comics')
            let li = document.createElement('li')
            li.innerHTML = name
            ul.appendChild(li)
    },
    series(name) {
        let ul = html.get('#series')
        let li = document.createElement('li')
        li.innerHTML = name
        ul.appendChild(li)
    },
    stories(name) {
        let ul = html.get('#stories')
        let li = document.createElement('li')
        li.innerHTML = name
        ul.appendChild(li)
    },
    events(name) {
        let ul = html.get('#events')
        let li = document.createElement('li')
        li.innerHTML = name
        ul.appendChild(li)
    },
    click(h5) {
            $(h5).click(() => {
                for(let i=1;i<=4;i++) {
                    if (h5.id === `click-${i}`) $(`.marvel-${i}`).toggle();
                }  
            })
    },
    modal() {
        $('#bg-modal').show();
        listCharacterRender.hide ();
    },
    hide () {
        $('html,body, .closeBtn').click(() =>{
            $('.bg-modal').hide();
            html.get('.box-modal').innerHTML = ""
        });
    }
}

const boxCreate = {
    create (name, image,id){
        let w25 = document.createElement('div')
        w25.classList.add('w25')
        let w25__container = document.createElement('div')
        w25__container.classList.add('w25__container')
        let hover = document.createElement('div')
        hover.classList.add('hover')
        let img = document.createElement('img')
        img.src = image
        let h3 = document.createElement('h3')
        h3.innerHTML = name
        // h3.innerHTML = id
        h3.id = id
        boxCreate.click(h3)

        w25.appendChild(w25__container)
        w25__container.appendChild(hover)
        hover.appendChild(img)
        w25__container.appendChild(h3)

        box.appendChild(w25);

    },
    click (h3) {
        h3.addEventListener('click', (e) => {
            e.preventDefault()
            getOnlyCharacter(h3.id)
            controls.top()
        })
    }
}

function modalRenderSearch(name ,description,image,box) {
    box.innerHTML += `
            <div class="characterOne">
                <div>
                    <img src="${image}" alt="...">
                    <h2> ${name} </h2>
                </div>
                <p> ${description ? description : `<b> Desculpe não existe uma descrição.`} </p>
            </div>
`
}


