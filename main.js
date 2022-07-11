let shop = document.getElementById('shop')

let shopItemsData = [{
    id:"hdf",
    name:"Casual Shirt",
    price: 30,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "Images/Casual.jpg.png"
},{},{},{}]

let generateShop =()=>{
    return shop.innerHTML=`
    <div class="item">
    <img width="220" src="Images/Casual.jpg.png" alt="">
    <div class="details">
        <h3>Casual Shirt</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <div class="price-quantity">
            <h4>$ 30</h4>
            <div class="buttons">
            <i class="bi bi-dash-lg"></i>
            <div class="quantity">0</div>
            <i class="bi bi-plus-lg"></i>
            </div>
        </div>
    </div>
</div>
`
}

generateShop()
