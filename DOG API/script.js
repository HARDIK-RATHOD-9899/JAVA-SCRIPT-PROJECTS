let box=document.getElementById('box');

function fetchingData()
{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((res)=>{
        return res.json()
    })
    .then((res)=>{
        console.log(res);
        box.innerHTML=view(res)
    })
    .catch((err)=>{
        console.log(err);
    })
}
 
function view(obj)
{
    return `<img src=${obj.message} alt=${obj.message} width="500px" height="350px"/>`
}

fetchingData();