let arr = JSON.parse(localStorage.getItem("data")) || [];
let box= document.getElementById('box')

let upd = document.getElementById('upd').style.display="none"


document.querySelector("form").addEventListener("submit",(ele)=>{
    ele.preventDefault();
    // let editId = null;
    let obj ={
        id:arr.length+1,
        title : document.getElementById('title').value,
        cat : document.getElementById('cat').value,
        price:document.getElementById('price').value,
        img:document.getElementById('img').value
    }
    arr.push(obj)
    localStorage.setItem("data",JSON.stringify(arr))
    document.getElementById('box').innerHTML=view(arr);
    // console.log(obj);
})
document.getElementById('box').innerHTML=view(arr);

function view(arr)
{
    return `<div>
    
    <table border="1" class="table">
    <thead>
    <tr>
    <th>Image</th>
    <th>Product Name</th>
    <th>Price</th>
    <th>Category</th>
    <th>Edit</th>
    <th>Delete</th>

    </tr>
    </thead>
    <tbody>
    ${arr.map((el)=>{
        return `<tr>
        <td><img src=${el.img} alt=${el.title} width="150px" height="150px"/></td>
        <td>${el.title}</td>
        <td>$${el.price}</td>
        <td>${el.cat}</td>
        <td><button class="btn btn-secondary" onclick="ed(${el.id})">Edit</button></td>
        <td><button class="btn btn-primary" onclick="del(${el.id})">Delete</button></td>
        </tr> 
       `
    }).join("")}
    
    </tbody>
    
    
    </table>
    
    </div>
`

}

function del(id) {
    arr = arr.filter(el => el.id !== id);
    localStorage.setItem("data", JSON.stringify(arr));
    document.getElementById("box").innerHTML = view(arr);
}

function ed(t)
{   
    let el = arr.filter((el) => el.id == t);
                document.getElementById("title").value = el[0].title;
                document.getElementById("cat").value = el[0].cat;
                document.getElementById("price").value = el[0].price;
                document.getElementById("img").value = el[0].img;
                // editId = id;
    let updd = document.getElementById('upd').style.display="block"
    document.getElementById('upd').addEventListener("click",()=>{ 
        let obj ={
            title : document.getElementById('title').value,
            cat : document.getElementById('cat').value,
            price:document.getElementById('price').value,
            img:document.getElementById('img').value
            }
            console.log(obj)
            let ud =arr.map((el,i)=>{
                if(el.id==t)
                    {
                        return{...el,...obj}
        
                    }
                    else
                    {
                        return el
                    }
                   
            })
            console.log(ud)
            localStorage.setItem("data",JSON.stringify(ud));
            document.getElementById('box').innerHTML=view(ud)
    })

}


