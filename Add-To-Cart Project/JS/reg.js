let arr=[];

document.getElementById('SignUp').addEventListener("submit",(deepak)=>{
   deepak.preventDefault();
   
   let nam=document.getElementById('name').value;
   let em=document.getElementById('email').value;
   let pass=document.getElementById('password').value;
   let cnfpas=document.getElementById('cnfpass').value; 
   let gend=document.getElementById('opt').value;
   let pon=document.getElementById('phn').value;
   let tx=document.getElementById('txt').value;
   let code=document.getElementById('pc').value;

   let obj={
       name:nam,
       email:em,
       password:pass,
       cnfpass:cnfpas,
       opt:gend,
       phn:pon,
       txt:tx,
       pc:code
   }

   arr.push(obj)
   console.log(obj);
   localStorage.setItem("key",JSON.stringify(arr))
   console.log(arr);
})