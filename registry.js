$(document).ready(function () {
    
    let getId = (id) => document.getElementById(id);

    function getClass(a, b) {
        return document.getElementsByClassName(a)[b];
    }
 let forma = document.getElementsByClassName('forma');
 let inpsR = document.getElementsByClassName('inputsR');

 
     for(let i=0; i<forma.length; i++){
        let divC = document.createElement('div');
        divC.className='crest';
        $(forma).eq(i).append(divC);
    }
    
     let crestD = document.getElementsByClassName('crest');

    
      for(let i=0; i<inpsR.length; i++){
        $(crestD).eq(i).click(function(){
            $(inpsR).eq(i).val('');
        })
    }

function DataFormRegistry(name, email, pass){
     
    this.dataUserName =  document.getElementById(name);
    this.dataUserEmail =  document.getElementById(email);
    this.dataUserPass =  document.getElementById(pass);
    
}
var dataFormRegistry = new DataFormRegistry('inputUser', 'inpEmail', 'inpPass2');
    
    
        getId('btnReg').addEventListener('click', function(){
    console.log(dataFormRegistry.dataUserName.value + ', ' + dataFormRegistry.dataUserEmail.value + ', ' + dataFormRegistry.dataUserPass.value);
        
         $(inpsR).val('');
            
            })
    
    
    
    getId('previous').addEventListener('click',function(){
        return location.href = 'newProvidence.html';
    })
  
})
    
    
 



