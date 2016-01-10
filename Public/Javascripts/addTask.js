function addTask(){
    var title = $("#newtask-input").val();
    var d = {
        "list_id": getListid("Snelle taken"),
        "title": title
    };
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://a.wunderlist.com/api/v1/tasks",
        "method": "POST",
        "headers": {
            "x-access-token": "7f2375c1a0fa641564cbd45f53bd5c91c4475c61b19f6f423457b89acd5a",
            "x-client-id": "6b6bfca8e9a100b98a48",
        },
        contentType: 'application/json', /*belangrijk*/
        "data": JSON.stringify(d)
    };

    $.ajax(settings).done(function (response) {
        clearTasks();
        cache.push(response);
        displayDefault();
    });
};
