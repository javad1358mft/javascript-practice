const request = new XMLHttpRequest();
request.open("GET", "https://fakestoreapi.com/products");
request.send();
request.addEventListener("load", getProducts);


let = All_Products = [];
const BASKET = [];
const count = document.querySelector('span');
const input = document.querySelector('input');



//function//
function getProducts() {
    const data = JSON.parse(request.responseText);
    All_Products = data;
    render(All_Products);
}

function render(list) {
    const root = document.getElementById('root');

    const template = list.map((item) => {

        return `
        <div class="products">
               <img src="${item.image}"/>
               <h3>title : ${item.title}</h3>
               <h5>Category : ${item.category}</h5>
               <p> price : ${item.price}$</p>

               ${BASKET.includes(item.id)
                ?
                ` <button class="added" onclick='RemoveFromBasket(${item.id})'>RemoveFromBasket</button>`

                :
                ` <button onclick='AddToBasket(${item.id})'>AddToBasket</button>`
            }
             
               
        </div>`
    });

    root.innerHTML = template.join('');
    count.textContent = BASKET.length;
}


function AddToBasket(productId) {
    BASKET.push(productId);
    render(All_Products)

}

function RemoveFromBasket(productId) {
    const index = BASKET.indexOf(productId);
    BASKET.splice(index, 1)
    render(All_Products);

}

function handleSearch(event) {
    const value = event.target.value;
    const result = All_Products.filter((product) => {
        return product.category.Search(value) >= 0;
    });
    render(result);
}




//event//
input.addEventListener('keyup', handleSearch);