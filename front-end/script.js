const urlApi = '';
const itemList = document.querySelector('#list');

let fetchApi = async (url) => {
    try {
        const res = await fetch(url);
        return await res.json();
    } catch (erro) {
        console.log(erro);
    }
};

let render = (itens) => {
    itens.results.map((item) => {
        itemList.insertAdjacentHTML('beforeend', `<li>${item}</li>`);
    });
};

