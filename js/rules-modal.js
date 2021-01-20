
let firmSearchDesktop = $('#form-search-desktop');
let firmSearchMobile = $('#form-search-mobile');
ShowModalDesktop();
ShowModalMobile();
hideModal();

function ShowModalDesktop() {
    firmSearchDesktop.submit(function (e) {
            e.preventDefault()
            e.stopPropagation();
            let inputSearch = $('#input-search-desktop');
            if (inputSearch.val().length < 3) {
                inputSearch.val('Digite pelo menos 3 letras.');
                setTimeout(() => inputSearch.val(''), 1500);
            } else {
                $(`#bg-modal-search`).fadeIn();
                clearBox(boxModal)
                searchCaracter(inputSearch.val())
            }
        });

}

function ShowModalMobile() {
    firmSearchMobile.submit(function (e) {
            e.preventDefault()
            e.stopPropagation();
            let inputSearch = $('#input-search-mobile');
            if (inputSearch.val().length < 3) {
                inputSearch.val('Digite pelo menos 3 letras.');
                setTimeout(() => inputSearch.val(''), 1500);
            } else {
                $(`#bg-modal-search`).fadeIn();
                clearBox(boxModal)
                searchCaracter(inputSearch.val())
            }
        });

}

function hideModal() {
    let elementBody = $('html,body, .closeBtn,.closeBtnSearch');
    elementBody.click(function () {
        $('.bg-modal, .bg-modal-search').fadeOut();
    });

    $('.box-modal, .box-modal-search').click(function (event) {
        event.stopPropagation();
    });
}


