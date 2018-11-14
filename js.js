window.onload=function(){
    /*var textbox= document.getElementById("searchbox").value;*/
    var search=document.getElementById("search");
    var request;
    var Result=document.getElementById("p1");
    
    search.addEventListener("click",function(){
        var textbox= document.getElementById("searchbox").value;
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
    
    
};
