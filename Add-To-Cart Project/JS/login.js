let arr=JSON.parse(localStorage.getItem("key"))
// console.log(arr);
document.getElementById('login').addEventListener("submit",(deepak)=>{
    deepak.preventDefault();
    
    let nam=document.getElementById('name').value;
    let em=document.getElementById('email').value;
    let pass=document.getElementById('password').value;

// let obj=arr[x];
let flag = false;
for(let x=0; x<arr.length ;x++)
{
    if(arr[x].name==nam && arr[x].email == em && arr[x].password == pass)
    {
        flag=true;
    }

}
if(flag == true)
{
    window.location.href="file:///E:/My%20Work/Java%20Script/Add-To-Cart%20Project/Html/admin.html"
}
else
{
    alert("Can't Login")
}

})