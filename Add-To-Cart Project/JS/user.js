
let box = document.getElementById("box")
let arr = JSON.parse(localStorage.getItem("data"))
let cart = JSON.parse(localStorage.getItem("cart")) || []
box.innerHTML = view(arr)
function view(arr){
    return `

                                         ${arr.map((el)=>{
                                            return `
                                            <div class="col-md-6 col-lg-4"style="width:33.33%; " >
                <div class="card text-center card-product  card">
                                        <div class="card-product__img card-body">
                                            <img class="card-img card-img-top"
                                                src=${el.img} alt=${el.title} style="width:280px ;height:300px" >
                                            <ul class="card-product__imgOverlay">
                                                <li><button><i
                                                            class="fa-solid fa-search"></i></button></li>
                                                <li><button onclick="crt(${el.id})"><i
                                                            class="fa-solid fa-shopping-cart"></i></button></li>
                                                <li><button><i
                                                            class="fa-solid fa-heart"></i></button></li>
                                            </ul>
                                        </div>
                                        
                                        <div class="card-body" style ="width:80%; text-align:center; margin:auto; ">
                                            <p>${el.cat}</p>
                                            <h4 class="card-product__title">${el.title}</h4>
                                            <p
                                                class="card-product__price"><span>$${el.price}</span></p>
                                        </div>
                                    </div>
</div>
                                          `  }).join("")}
 
                               `

                            
}

function crt(t)
{
let d = cart.filter(el => el.id == t)

if(d.length>0){
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Item is Already present in Cart",
      });
}else{
    arr.forEach(element => {
        if(element.id == t){
            cart.push(element)
        }
    });
    localStorage.setItem("cart",JSON.stringify(cart))
}



    

  
}
