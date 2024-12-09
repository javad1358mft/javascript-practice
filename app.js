const request = new XMLHttpRequest();
request.open("GET", "https://fakestoreapi.com/products/category/jewelery");
request.send();
request.addEventListener("load", getCategory);
const header = document.querySelector('header');





//function//
function getCategory() {
    const data = JSON.parse(request.responseText);
    All_Category = data;
    render(All_Category);


    function render(list) {
        header.innerHTML= "<h1>Jewlary Products</h1>";
        const root = document.getElementById("root");
        const template = list.map((item) => {

            return `
            <div class='Category'>
            <img src='${item.image}'/>
            <h3> ${item.title} </h3>
            <button class = "btn" >Read More... </button>
            </div>
            
            
            `
        });
        root.innerHTML=template.join('');

    }
}