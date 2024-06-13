let box = document.getElementById("box");
let crt = JSON.parse(localStorage.getItem("cart"));
box.innerHTML = view(crt);
function view(crt) {
  return `
    ${crt
      .map((el) => {
        return `<tr>
    
<td>
    <div class="media">
    
        <div class="d-flex">
        
            <img src=${el.img} alt=${el.title} width="150px" height="150px"/>
        </div>
        </div>
</td>
<td>
<div class="media-body">
            <p>${el.title}</p>
        </div>
    </td>
<td>
<div class="product_count">${el.cat}</div>
</td>
<td>
<h5><span>$${el.price}</span></h5>
</td>
    <td><span onclick="del(${el.id})" id="ri" class="fa-solid fa-xmark"> </span></td>
</tr> 
       `;
      })
      .join("")}
  
                               `;
}

function del(id) {
  crt = crt.filter((el) => el.id !== id);
  localStorage.setItem("cart", JSON.stringify(crt));
  document.getElementById("box").innerHTML = view(crt);
}
