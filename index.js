$(document).ready(function () {

    var itemSettings = {
        "async": true,
        "crossDomain": true,
        "url": "https://my-json-server.typicode.com/Gabrielito01/-Jsonserver/items",
        "method": "GET",
        "dataType": "json"
    }

    $.ajax(itemSettings).done(function (response) {

        var myItem = "";
        $.each(response, function (i, obj) {
            myItem += '<div class="col-lg-4 col-md-6 mb-4">';
            myItem += '<div class="card h-100 '+obj.id+' " id="' + obj.id + '">';
            myItem += '<a href="detail.html?id='+obj.id+'"><div style="background:url('+obj.img+')no-repeat center center;width:100%;height:150px;background-size:contain"></div></a>';
            myItem += '<div class="card-body">';
            myItem += '<h4 class="card-title"></h4>';
            myItem += '<a href="detail.html?id='+obj.id+'">' + obj.title + '</a>';
            myItem += '</h4>';
            myItem += '<h5>' + obj.price + '</h5>';
            myItem += '<p class="card-text">' + obj.desc + '</p>';
            myItem += '</div>';
            myItem += '<div class="card-footer">';
            myItem += '<small class="text-muted">'+obj.brand+'</small>';
            myItem += '</div>';
            myItem += '</div>';
            myItem += '</div>';
        //    console.log('valore',obj.id)
        });

        $("#listItems").append(myItem);
    });
    
    var brandSettings= {
        "async": true,
        "crossDomain": true,
        "url": "https://my-json-server.typicode.com/Gabrielito01/-Jsonserver/brands",
        "method": "GET",
        "dataType": "json"
    }

    $.ajax(brandSettings).done(function (response) {

        var myItem = "";
        $.each(response, function (i, obj) {
            myItem += ' <a href="category.html?id='+obj.brand+'" class="list-group-item">'+obj.brand+'</a>';
            
        //    console.log('valore',obj.id)
        });

        $("#listGroup").append(myItem);
    });




});
