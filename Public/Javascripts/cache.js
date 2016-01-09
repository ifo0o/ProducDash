var cache = [];
var listsid = [];

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "",
    "method": "GET",
    "headers": {
        "x-access-token": "7f2375c1a0fa641564cbd45f53bd5c91c4475c61b19f6f423457b89acd5a",
        "x-client-id": "6b6bfca8e9a100b98a48",
    }
};

function updateCache(){
    settings["url"] = "https://a.wunderlist.com/api/v1/lists";

    $.ajax(settings).done(function (response) {
        $.each(response, function(){
            listsid.push({id: this.id, title: this.title});
            //addListToCache(this.id);
            settings["url"] = "https://a.wunderlist.com/api/v1/tasks?list_id="+this.id
            $.ajax(settings).done(function (response) {
                $.each(response, function(){
                    cache.push(this);
                    displayLists(this);
                });
            });
        });
        //var hello = listsid.map(function(a) {return a.title;});
        //alert(JSON.stringify(cache,null,4))
    });
};

function appendfromcache(){
    /*$.each(cache, function(){
        $(".test").append(this.title)
        $(".test").append("<br>")
    });*/
    displayTaskWithTag("WEB")
}

function addListToCache(listid){
    var settings2 = {
      "async": true,
      "crossDomain": true,
      "url": "https://a.wunderlist.com/api/v1/tasks?list_id="+listid,
      "method": "GET",
      "headers": {
        "x-access-token": "7f2375c1a0fa641564cbd45f53bd5c91c4475c61b19f6f423457b89acd5a",
        "x-client-id": "6b6bfca8e9a100b98a48",
        }
    };

    $.ajax(settings2).done(function (response) {
        $.each(response, function(){
            cache.push(this);
        });
    });


}
