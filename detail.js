$(document).ready(function () {

    //riprendo ?id=
    // con .trim() rimuovo %?id=1%
    var pageId = window.location.search.trim();
    console.log(pageId)
    var itemSettings = {
        "async": true,
        "crossDomain": true,
        "url": "https://my-json-server.typicode.com/Gabrielito01/-Jsonserver/singleitems"+pageId,
        "method": "GET",
        "dataType": "json"
       
    }
    
    $.ajax(itemSettings).done(function (response) {
      

        var brand="";
        var myItem = "";
        $.each(response, function (i, val) {
            myItem += ' <div class="card mt-4" >',
            myItem += ' <img class="card-img-top img-fluid" src="'+val.img+'" alt="">';
            myItem += ' <div class="card-body">';
            myItem += ' <h3 class="card-title">'+val.title+'</h3>';
            myItem += '<h4>'+val.price+'</h4>';
            myItem += '<p class="card-text">'+val.desc+'</p>';
            myItem += '<span class="text-warning">'+val.brand+'</span>';
            myItem += '</div>';
            myItem += '</div>';
            myItem += '</div>';
        
        brand+= '<a href="#" class="list-group-item active">'+val.brand+'</a>'
        });
        $("#singleItem").append(myItem);
        $("#listGroup").append(brand);
        // console.log(response)
    });


    

    





});
