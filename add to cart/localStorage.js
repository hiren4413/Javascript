let products = [
    {
        id : Math.floor(Math.random()*10000),
        img : "https://i.postimg.cc/kg9YYbTn/f1.jpg",
        productBrand : "adidas",
        productTitle: "Carton Astronault Tshirts",
        productPrice: 78,
        qty: 1,
    },
    {
        id : Math.floor(Math.random()*10000),
        img : "https://i.postimg.cc/2yhT2kvb/f2.jpg",
        productBrand : "adidas",
        productTitle: "Carton Leave Tshirts",
        productPrice: 73,
        qty: 1,
    },
    {
        id : Math.floor(Math.random()*10000),
        img : "https://i.postimg.cc/VL9DtNm2/f3.jpg",
        productBrand : "puma",
        productTitle: "Rose Multicolor Tshirts",
        productPrice: 45,
        qty: 1,
    },
    {
        id : Math.floor(Math.random()*10000),
        img : "https://i.postimg.cc/vZ3hPS1z/f4.jpg",
        productBrand : "adidas",
        productTitle: "Pink Flower Tshirts",
        productPrice: 98,
        qty: 1,
    },
    {
        id : Math.floor(Math.random()*10000),
        img : "https://i.postimg.cc/q7FLrhx6/f5.jpg",
        productBrand : "adidas",
        productTitle: "Purple Flowering Tshirts",
        productPrice: 35,
        qty: 1,
    },
    {
        id : Math.floor(Math.random()*10000),
        img : "https://i.postimg.cc/L86BZByZ/f7.jpg",
        productBrand : "puma",
        productTitle: "Short Knicker",
        productPrice: 67,
        qty: 1,
    },
    {
        id : Math.floor(Math.random()*10000),
        img : "https://i.postimg.cc/zDxJ2f0H/f6.jpg",
        productBrand : "adidas",
        productTitle: "2 in 1 Double Routed",
        productPrice: 58,
        qty: 1,
    },
    {
        id : Math.floor(Math.random()*10000),
        img : "https://i.postimg.cc/x8qcBrpP/n6.jpg",
        productBrand : "adidas",
        productTitle: "Ash Short",
        productPrice: 70,
        qty: 1,
    },
]
const viewProduct = () => {


    let card = ""
    products.map((val)=>{
        card += `
            <div class="pro">
                <img src="${val.img}" alt="" />
                <div class="des">
                    <span>${val.productBrand}</span>
                    <h5>${val.productTitle}</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>$ ${val.productPrice}</h4>
                </div>
          <a role="button" onclick="addToCart(${val.id})" class="cart"><i class="fa-solid fa-cart-shopping"></i></a>
        </div>
        `
        document.getElementById("product").innerHTML = card
    })
}
viewProduct();



let cart = JSON.parse(localStorage.getItem('cart')) || [];

let qty = document.getElementById("quantity")
qty.innerText = 0;

const viewCart = () => {
    let tbl = "";
    let sum = 0;
    cart.forEach((val, index) => {
      sum += val.productPrice * val.qty;
      tbl += `
    <tr>
      <td>${index + 1}</td>
      <td>${val.productTitle}</td>
      <td>
        <img src="${val.img}" width="100"/>
      </td>
      <td>${val.productPrice}</td>
      <td>
        <input class="form-control w-25" id="qty_${val.id}" onchange="editCart(${val.id})" value="${val.qty}" type="number"/>
      </td>
      <td>
        <button class="btn btn-danger" onclick="deleteFromCart(${val.id})">Delete</button>
      </td>
      <td>${val.productPrice * val.qty}</td>
    </tr>
  `;
    });
    document.getElementById('carts').innerHTML = tbl;
    document.getElementById('finalAmount').innerHTML = `Amount to pay = ${sum}`;
  };
  
  viewCart();

const addToCart = (productId) => {
    qty.innerText = parseInt(qty.innerHTML)+1;
        const product = products.find(val => val.id === productId);
        console.log(product);
      
      if (product) {
        const existingProduct = cart.find(item => item.id === productId);
        if (existingProduct) {
          existingProduct.qty++;
        } else {
            cart.push({ ...product, qty: 1 });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        viewCart();
        alert("item added to cart");
    }
};

const deleteFromCart = (productId) => {
      cart = cart.filter(item => item.id !== productId);
      localStorage.setItem('cart', JSON.stringify(cart));
      alert("removed for cart succesfully");
      viewCart();
    };

    const editCart = (id) => {
      const qty = parseInt(document.getElementById(`qty_${id}`).value);
      cart = cart.map(item => {
        if (item.id === id) {
            item.qty = qty;
        }
        if(item.qty == 0){
          deleteFromCart();
        }
        return item;
    });
    localStorage.setItem('cart', JSON.stringify(cart));
    viewCart();
};
