const html = {
    get(element) {
        return document.querySelector(element);
    }
}
let totalPage = 94;
const state = {
    page: 0,
    totalPage,
    totalMultiplied: totalPage * limit,
    maxVisibleButtons: 5
}

const buttons = {
    element: html.get('.numbers'),
    create(number) {
            const button = document.createElement("div");
            button.innerHTML = number

            if (state.page === number) button.classList.add('active')
            button.addEventListener('click', (e) => {
                const page = e.target.innerText
                controls.gotTo(page)
                clearBox(box)
                getlistCharacteres(limit,(page * limit) - limit)
                buttons.update();
                controls.top();
            })
        buttons.element.appendChild(button);
    },
    update() {
        buttons.element.innerHTML = '';
        const {maxLeft, maxRight} = buttons.calculateMaxVisible();
        for (let page = maxLeft; page <= maxRight; page++) {
            buttons.create(page)
        }
    },
    calculateMaxVisible() {
        const {maxVisibleButtons} = state
        let maxLeft = (state.page - Math.floor(maxVisibleButtons / 2))
        let maxRight = (state.page + Math.floor(maxVisibleButtons / 2));

        if (maxLeft < 1) {
            maxLeft = 1;
            maxRight = maxVisibleButtons;
        }

        if (maxRight > state.totalPage) {
            maxLeft = state.totalPage - (maxVisibleButtons - 1);
            maxRight = state.totalPage;
            if (maxLeft < 1) maxLeft = 1
        }

        return {maxLeft, maxRight};
    }
}

const controls = {
    next() {
        state.page++
        if(state.page > state.totalPage) state.page--
        clearBox(box)
        getlistCharacteres(limit,(state.page * limit) - limit)
        this.top();
    },
    prev() {
        state.page--
        if(state.page < 1) state.page++
        clearBox(box)
        getlistCharacteres(limit,(state.page * limit) - limit)
        this.top();
    },
    gotTo(page) {
        if(page < 1) page = 0;
        state.page = +page
        if (page > state.totalPage) state.page = state.totalPage;

    },
    createListeners() {
        html.get('.first').addEventListener('click', () => {
            state.page = 1;
            buttons.update();
            controls.gotTo(state.page);
            clearBox(box)
            getlistCharacteres(limit,(state.page * limit) - limit)
            this.top();
        })


        html.get('.prev').addEventListener('click', () => {
            controls.prev();
            buttons.update();
        })

        html.get('.next').addEventListener('click', () => {
            controls.next();
            buttons.update();
        })

        html.get('.last').addEventListener('click', () => {
            controls.gotTo(state.totalPage);
            buttons.update();
            clearBox(box)
            getlistCharacteres(limit,(state.totalPage * limit) - limit)
            this.top();
        })
    },
    top() {
        setTimeout(() => location.href = '#top' ,600)
    }
}

function init() {
    controls.createListeners()
    buttons.update()
}

init();
