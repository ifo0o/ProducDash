var cache = []; /*Array with all tasks*/
var listCache= []; /*Array with all lists*/
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

var initLists = $.ajax({
    "async": true,
    "crossDomain": true,
    "url": "https://a.wunderlist.com/api/v1/lists",
    "method": "GET",
    "headers": {
        "x-access-token": "7f2375c1a0fa641564cbd45f53bd5c91c4475c61b19f6f423457b89acd5a",
        "x-client-id": "6b6bfca8e9a100b98a48",
    },
    success: function (response) {
        $.each(response, function(){
            listCache.push(this);
        });
    }
});

/*Initializes tasks*/
function initTasks(){
    var count = 0;
    var total = listCache.length;
    var tempCache = [];

    $.each(listCache, function(){
        url = "https://a.wunderlist.com/api/v1/tasks?list_id="+this.id
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": url,
            "method": "GET",
            "headers": {
                "x-access-token": "7f2375c1a0fa641564cbd45f53bd5c91c4475c61b19f6f423457b89acd5a",
                "x-client-id": "6b6bfca8e9a100b98a48",
            },
            success: function (response) {
                $.each(response, function(){
                    tempCache.push(this)
                });
                count++;
                if(count===total){
                    cache = tempCache
                    displayDefault()
                };
            }
        });
    });
};

//-----------------------------------------------------------------------------------

//function appendfromcache(){
    /*$.each(cache, function(){
        $(".test").append(this.title)
        $(".test").append("<br>")
    });*/
//    displayTaskWithTag("WEB")
//}

/*
var buildTaskCache = $.ajax({
        "async": true,
        "crossDomain": true,
        "url": "https://a.wunderlist.com/api/v1/tasks?list_id="+globalListid,
        "method": "GET",
        "headers": {
            "x-access-token": "7f2375c1a0fa641564cbd45f53bd5c91c4475c61b19f6f423457b89acd5a",
            "x-client-id": "6b6bfca8e9a100b98a48",
        },
        success: function (response) {
            $.each(response, function(){
                cache.push(this);
            });
        }
    });*/

/*
function initLists(){
    settings["url"] = "https://a.wunderlist.com/api/v1/lists";

    $.ajax(settings).success(function (response) {
        $.each(response, function(){
            listCache.push({id: this.id, title: this.title});

            settings["url"] = "https://a.wunderlist.com/api/v1/tasks?list_id="+this.id
            $.ajax(settings).success(function (response) {
                $.each(response, function(){
                    cache.push(this);

                });
            });
        });
    });
};*/
