//CRUD operations 
var productnameinput = document.getElementById("productname");
var productpriceinput = document.getElementById("productprice");
var productCategoryInput = document.getElementById("productCategory");
var productDescinput = document.getElementById("productDesc");
var productimage = document.getElementById("image");
var Addproduct = document.getElementById("image");
var UpdateProduct = document.getElementById("image");
var products;


if (localStorage.getItem("products") == null){
    products = []
}
else{
    products = JSON.parse(localStorage.getItem("products"));
    display(products);
}

function addProduct() {
    if (productnameinput.classList.contains("is-valid") && productpriceinput.classList.contains("is-valid") && productCategoryInput.classList.contains("is-valid") && productDescinput.classList.contains("is-valid")) {
        var product = {
        code: productnameinput.value,
        price: productpriceinput.value,
        catogry: productCategoryInput.value,
        desc:productDescinput.value,
        image: `images/${productimage.files[0]?.name}`,
        };

        products.push(product);
        localStorage.setItem("products",JSON.stringify(products))
        display(products);
        clear();
    }
    else {
        alert('Not Valid Input')
    }
    
}

function clear() {
    productnameinput.value = null;
    productpriceinput.value = null;
    productCategoryInput.value = null;
    productDescinput.value = null;
    productimage.value = null;

    productnameinput.classList.remove('is-valid');
    productpriceinput.classList.remove('is-valid');
    productCategoryInput.classList.remove('is-valid');
    productDescinput.classList.remove('is-valid');
    productimage.classList.remove('is-valid');
}

function display(arr) {
    var cartona = "";
    for (var i = 0; i < arr.length; i++) {
        cartona += `<div class="col-md-2">
                        <div class="item">
                            <img src="${products[i].image}" class="w-100" alt="">
                            <h2>name: ${products[i].code}</h2>
                            <p>price: ${products[i].price}</p>
                            <p>Category: ${products[i].catogry}</p>
                            <p>Description: ${products[i].desc}</p>
                            <button onclick="Deleteproduct(${i})" class="btn btn-outline-danger w-100">Delete<i class="fa fa-trash"></i></button>
                            <button onclick="edit(${i})" class="btn btn-outline-warning w-100">Update<i class="fa fa-pen"></i></button>
                        </div>
                    </div>`;
    }

    // dy if 34an law katabt 7aga m4 mawgoda fy array ytal3 massege no items found
    if(cartona === ""){
        //ha3ml hena html l4akl No items found --> kamliha
    }
    else {
        document.getElementById("My_row").innerHTML = cartona;
    }
}

function Deleteproduct(deletedIndex){
    products.splice(deletedIndex,1);
    localStorage.setItem("products",JSON.stringify(products))
    document.getElementById("My_row").innerHTML = "";
    display(products);
}

var searchInput = document.getElementById(search);
function searchproduct() {
    var word = searchInput.value;
    var searchedproduct = [];
    for(var i = 0; i<products.length;i++)
    {
        if(products[i].code.tolowewecase.includes(word.tolowewecase()))
        {
            searchedproduct.push(products[i]);
        }
    }
    document.getElementById("My_row").innerHTML = cartona;
}

//Validation
function validateIndex(element)
{
    //element --> input ely wa2fa fy
    var regex = {
        productname : /^[A-Z][a-z0-9]{2,10}$/,
        productprice : /^[1-9][0-9]{1,5}$/,
        productprice : /^[1-9][0-9]{1,5}$/,
        productCategory :/^(mobile|screen|tv|labtop|Accesories)$/i,
        productDesc : /^\w{3,}$/,
    };
    if(regex[element.id].test(element.value) == true) {
        element.classList.add("is-valid")
        element.classList.remove("is-invalid")
        //34an a3ml dy ba3ml div fy html fiha d-none w fiha bas alert ana m7tag a7ot eh 
        element.nextElementSibling.classList.add("d-none")
    }else {
        element.classList.remove("is-valid")
        element.classList.add("is-invalid")
        //34an a3ml dy ba3ml div fy html fiha d-none w fiha bas alert ana m7tag a7ot eh 
        element.nextElementSibling.classList.remove("d-none")
    }
}


//Update
function edit(index) {
    productnameinput.value = products[index].name
    productpriceinput.value = products[index].price
    productCategoryInput.value = products[index].catogry
    productDescinput.value = products[index].desc

    //kamly mn al vedios
}