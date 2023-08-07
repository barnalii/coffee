
 
 /*const menu = document.getElementById('menu');
 const close = document.getElementById('close');
 const nav = document.getElementById('navbar');

 if(menu){
     menu.addEventListener('click', () => {
         nav.classList.add('active');
     })
 }

 if(close){
     close.addEventListener('click', () => {
         nav.classList.remove('active');
     })
 }

 let searchForm = document.querySelector('.search-form');

 document.querySelector('#search-box').onclick = () =>{
     searchForm.classList.toggle('active');
}*/

const fruitData = {
    nestle: {
        name: "Nestle Nescafe",
        description: "Nestlé has a large range of coffee products. Our coffee has all the great taste and quality you expect. Discover our iconic coffee brands today!.",
        advantages: [
            "Bolstered Research & Development",
            "Partnership with Big Companies",
            "Product Availability",
            "Plant Based Meals",
        ],
        image: "https://cdn.shopify.com/s/files/1/0050/5466/0678/products/nestle-nescafe-encore-instant-coffee-100-g-240036.jpg?v=1620321338"
    },
    bru: {
        name: "BRU",
        description: "Made with 100% Coffee from select coffee beans from South India, Bru Gold has an intense coffee taste Bru Gold has the right blend of Arabica.",
        advantages: [
            "REnhance brain function. Its caffeine content can improve brain function ( 28 )",
            "educe disease risk",
            "Decrease diabetes risk",
            "Promote longevity.",
        ],
        image: "https://m.media-amazon.com/images/I/61CU1wGrfjL._SX679_.jpg"
    },
    tatacoffee: {
        name: "TATA Coffee",
        description: "Tata coffee grand classic has unique flavour locked decoction crystals that give you strong taste and rich aroma",
        advantages: [
            "Strong brand name and one of the largest integrated coffee plantation in the world",
            "Strong backing by parent company",
            "Good distribution and availability",
            "Good visibility through print ads",
        ],
        image: "https://m.media-amazon.com/images/I/51eDlORG3xL._SL1000_.jpg"
    },
    rage: {
        name: "RAGE",
        description: "Deeply robust yet not overpowering, a complex special blend thanks to small batch crystallisation.",
        advantages: [
            "Bolstered Research & Development",
            "Partnership with Big Companies",
            "Product Availability",
            "Plant Based Meals",
        ],
        image: "https://m.media-amazon.com/images/I/81DbepRanjL._SL1500_.jpg"
    },
};

function searchFruit() {
    const searchBox = document.getElementById('search-box');
    const fruitName = searchBox.value.toLowerCase().trim();

    if (fruitData.hasOwnProperty(fruitName)) {
        const resultContainer = document.getElementById('result-container');
        const fruit = fruitData[fruitName];

        const fruitContent = `
            <img src="${fruit.image}" alt="${fruit.name}" class="fruit-image">
            <div class="fruit-name">${fruit.name}</div>
            <div class="fruit-description">${fruit.description}</div>
            <div class="advantages">Advantages of ${fruit.name}:</div>
            <ul class="advantages-list">
                ${fruit.advantages.map(advantage => `<li class="advantages-item">${advantage}</li>`).join('')}
            </ul>
        `;

        resultContainer.innerHTML = fruitContent;
        resultContainer.style.display = 'block';
    } else {
        alert("Fruit not found. Please enter nestle, bru, tatacoffee or rage.");
    }
}


function searchOnEnter(event) {
    if (event.keyCode === 13) {
        searchFruit();
    }
}
