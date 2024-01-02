const place=document.getElementById('password');
const btnCopy=document.getElementById('copy');
const btnGen=document.getElementById('generate');


btnGen.addEventListener('click',()=>{
     let strCapChar="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     let strSmallChar="abcdefghijklmnopqrstuvwxyz";
     let strNum="0123456789";
     let strSs="~!@#$%^&*()_=[]{}<>/?";
     let mix=strCapChar+strSmallChar+strNum+strSs;

     let pass="";

      pass+=strCapChar.charAt(Math.floor(Math.random()*strCapChar.length)) ;
      pass+=strSmallChar.charAt(Math.floor(Math.random()*strSmallChar.length)) ;
      pass+=strNum.charAt(Math.floor(Math.random()*strNum.length)) ;
      pass+=strSs.charAt(Math.floor(Math.random()*strSs.length)) ;
      while(pass.length<12)
      {
        pass+=mix.charAt(Math.floor(Math.random()*mix.length)) ;
      }

      place.value=pass;
});

btnCopy.addEventListener('click',()=>{
    place.select();
    document.execCommand("copy");
})
