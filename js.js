window.onload=function(){
    var textbox= document.getElementById("searchbox").value;
    var search=document.getElementById("search");
    var request;
    var Result=document.getElementById("p1");
    var Findall=document.getElementById("findall")
    
    if (textbox==''){
        search.addEventListener("click",function(){
            
            request = new XMLHttpRequest();
            var definitionURL= 'request.php?q=definition';
            request.onreadystatechange=function(){
                if (request.readyState===request.DONE){
                    if (request.status===200){
                        var response=request.responseText;
                        console.log(response);
                        alert(response);
                    }
                    if(request.status===404){
                        console.log("Result not found.");
                        alert('NOT FOUND');
                    }
                }
           
            };
            request.open('GET',definitionURL,true);
            request.send();
        
        
    
        });
    } 
    else{
        search.addEventListener("click",function(){
        var textbox= document.getElementById("searchbox").value;
        request = new XMLHttpRequest();
        var URL= 'request.php?q='+ textbox;
        request.onreadystatechange=function(){
            if (request.readyState===request.DONE){
                if (request.status===200){
                    var response=request.responseText;
                    console.log(response);
                    Result.innerHTML=response;
                    
                    //alert(response);
                }
                if(request.status===404){
                    console.log("Result not found.");
                alert('NOT FOUND');
                }
            }
           
        };
        request.open('GET',URL,true);
        request.send();
        
        });
        
    }
     Findall.addEventListener("click",function(){
            
            request = new XMLHttpRequest();
            var url= 'request.php?q=&all=true';
            request.onreadystatechange=function(){
                if (request.readyState===request.DONE){
                    if (request.status===200){
                        var response=request.responseText;
                        console.log(response);
                        alert(response);
                    }
                    if(request.status===404){
                        console.log("Result not found.");
                        alert('NOT FOUND');
                    }
                }
           
            };
            request.open('GET',url,true);
            request.send();
     });
    
};
