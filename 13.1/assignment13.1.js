var promise=new Promise(function(resolve,reject){ 
        var array1=[]; 
        for(var i=0;i<5;i++){
            array1.push(prompt('Enter input '+(i+1)));
        } 
        var arrayUpcase=array1.map(array1 => array1.toUpperCase()) 
        var n=array1.length; 
        
        setTimeout(() => resolve(arrayUpcase,n,{message: "Promise successful"})); 
   });
   promise.then(function(data){ 
       console.log(data);
       return "Success"; 
   }).catch(function(err){ 
       console.log(err);
       return "Failed";
   });