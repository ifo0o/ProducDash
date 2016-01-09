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

function initializeCache(){
    settings["url"] = "https://a.wunderlist.com/api/v1/lists";

    $.ajax(settings).success(function (response) {
        $.each(response, function(){
            listsid.push({id: this.id, title: this.title});

            settings["url"] = "https://a.wunderlist.com/api/v1/tasks?list_id="+this.id
            $.ajax(settings).success(function (response) {
                $.each(response, function(){
                    cache.push(this);
                    //$(".test").append(returnTaskDiv(this))
                });
            });
        });
    });
};

function appendfromcache(){
    /*$.each(cache, function(){
        $(".test").append(this.title)
        $(".test").append("<br>")
    });*/
    displayTaskWithTag("WEB")
}

var buildListCache = $.ajax({
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
            listsid.push({id: this.id, title: this.title});
        });
    }
});

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

function initTasks(){
    var count = 0;
    var total = listsid.length;
    var tempCache = []

    $.each(listsid, function(){

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
                count++
                if(count===total){
                    cache = tempCache
                    //displayList(getListid("School"))
                    displayTaskWithTag("WEB")
                    displayTaskWithTag("COM")
                    displayTaskWithTag("MOD")
                    displayTaskWithTag("GRV")
                    displayTaskWithTag("MIC")
                    displayList(getListid("Werk"))
                    displayList(getListid("Privé"))
                }
            }
        });


    });

};
