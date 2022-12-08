let company = document.querySelector('.company')
let model = document.querySelector('.model')
let version = document.querySelector('.version')
let id = document.querySelector('.id')
let price = document.querySelector('.price')
let taxes = document.querySelector('.taxes')
let ads = document.querySelector('.ads')
let discount = document.querySelector('.discount')
let create = document.querySelector('.create')
let h3 = document.querySelector('.h3')
let search = document.querySelector('.search')
let SearchByCompany= document.querySelector('.SearchByCompany')
let SearchByModel= document.querySelector('.SearchByModel')

let mood ='create'

let tmp;
function getTotal(){

    let x = +price.value + +taxes.value + +ads.value - +discount.value 
    if(price.value =='' ){
        h3.innerHTML='';
        h3.style.backgroundColor='red'
    }
    else{
        h3.innerHTML=x;
        h3.style.backgroundColor='green'

    }
}
let products ;
if(localStorage.product !=null){
    products = JSON.parse(localStorage.product)
}
else {
    products=[];
}
create.onclick = function (){
let newProd = {
    company:company.value,
    model:model.value,
    version:version.value,
    id:id.value,
    price:price.value,
    taxes:taxes.value,
    ads:ads.value,
    discount:discount.value
}
if(mood==='create'){
    products.push(newProd)
    localStorage.setItem('product',JSON.stringify(products))
}
else{
    products[tmp]=newProd
    mood='create';
    create.innerHTML='create'
}
showProduct()
clearPro()
getTotal()
}
function showProduct(){
    let TABLE=''
    for(let i=0;i<products.length;i++){
        TABLE+=`
        <tr>
            <td>${products[i].company}</td>
            <td>${products[i].model}</td>
            <td>${products[i].version}</td>
            <td>${products[i].id}</td>
            <td>${products[i].price}</td>
            <td>${products[i].taxes}</td>
            <td>${products[i].ads}</td>
            <td>${products[i].discount}</td>
            <td><button onclick="deleteProduct(${i})" class="btn">delete</button></td>
            <td><button onclick="updatePro(${i})" class="btn">update</button></td>
          </tr>
        `
    }
    document.querySelector('.table').innerHTML=TABLE
}
function deleteProduct(i){
    products.splice(i,1)
    localStorage.product=JSON.stringify(products)
    // TABLE=products
    showProduct()
}
function SearchingByCompany(){
    let TABLE=''
    for(let i=0;i<products.length;i++){
        if(products[i].company===search.value){
            
            TABLE+=`
            <tr>
            <td>${products[i].company}</td>
            <td>${products[i].model}</td>
            <td>${products[i].version}</td>
            <td>${products[i].id}</td>
            <td>${products[i].price}</td>
            <td>${products[i].taxes}</td>
            <td>${products[i].ads}</td>
            <td>${products[i].discount}</td>
            <td><button onclick="deleteProduct(${i})" class="btn">delete</button></td>
            <td><button onclick="updatePro(${i})" class="btn">update</button></td>
            </tr>
            `
        }
        else if(search.value===''){
            TABLE+=`
            <tr>
            <td>${products[i].company}</td>
            <td>${products[i].model}</td>
            <td>${products[i].version}</td>
            <td>${products[i].id}</td>
            <td>${products[i].price}</td>
            <td>${products[i].taxes}</td>
            <td>${products[i].ads}</td>
            <td>${products[i].discount}</td>
            <td><button onclick="deleteProduct(${i})" class="btn">delete</button></td>
            <td><button onclick="updatePro(${i})" class="btn">update</button></td>
            </tr>
            `
        }
        document.querySelector('.table').innerHTML=TABLE
}
}
SearchByCompany.onclick = function () {
    SearchingByCompany()
}
function SearchingByModel(){
    let TABLE=''
    for(let i=0;i<products.length;i++){
         if(products[i].model===search.value){
            
            TABLE+=`
            <tr>
            <td>${products[i].company}</td>
            <td>${products[i].model}</td>
            <td>${products[i].version}</td>
            <td>${products[i].id}</td>
            <td>${products[i].price}</td>
            <td>${products[i].taxes}</td>
            <td>${products[i].ads}</td>
            <td>${products[i].discount}</td>
            <td><button onclick="deleteProduct(${i})" class="btn">delete</button></td>
            <td><button onclick="updatePro(${i})" class="btn">update</button></td>
            </tr>
            `
        }
        else if(search.value===''){
            TABLE+=`
            <tr>
            <td>${products[i].company}</td>
            <td>${products[i].model}</td>
            <td>${products[i].version}</td>
            <td>${products[i].id}</td>
            <td>${products[i].price}</td>
            <td>${products[i].taxes}</td>
            <td>${products[i].ads}</td>
            <td>${products[i].discount}</td>
            <td><button onclick="deleteProduct(${i})" class="btn">delete</button></td>
            <td><button onclick="updatePro(${i})" class="btn">update</button></td>
            </tr>
            `
        }
        document.querySelector('.table').innerHTML=TABLE
}
}

SearchByModel.onclick = function () {
    SearchingByModel()
}
function clearPro(){
    company.value='';
    model.value='';
    version.value='';
    id.value='';
    price.value='';
    taxes.value='';
    ads.value='';
    discount.value='';
}
function updatePro(i){
    company.value=products[i].company;
    model.value=products[i].model;
    version.value=products[i].version;
    id.value=products[i].id;
    price.value=products[i].price;
    taxes.value=products[i].taxes;
    ads.value=products[i].ads;
    discount.value=products[i].company;
    create.innerHTML='update'
    mood='update'
    tmp=i
    scroll({
        top:0,
        behavior:"smooth"

    })
}


showProduct()
