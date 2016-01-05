var main = function() {

/*
    header('Content-Type': 'application/json';'charset=UTF-8');
    header('Access-Control-Allow-Origin': '*');
    header('Access-Control-Allow-Methods': "DELETE", "HEAD", "GET", "OPTIONS", "POST", "PUT");
    header('Access-Control-Allow-Headers': 'Content-Type', 'Content-Range', 'Content-Disposition', 'Content-Description');
    header('Access-Control-Max-Age': '1728000'); */
/*
    $.ajax({
              dataType: "json",
      url: "a.wunderlist.com/api/v1/lists"+"&callback=?",
      headers: { 'X-Access-Token': '7f2375c1a0fa641564cbd45f53bd5c91c4475c61b19f6f423457b89acd5a',
      'X-Client-ID': '6b6bfca8e9a100b98a48'},
success: success});

};*/
/*
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://a.wunderlist.com/api/v1/lists?callback=jQuery111305825689279008657_1451943156370&_=1451943156371",
  "method": "GET",
  "headers": {
    "x-access-token": "7f2375c1a0fa641564cbd45f53bd5c91c4475c61b19f6f423457b89acd5a",
    "x-client-id": "6b6bfca8e9a100b98a48",
  }
}
*/
    getLists();
    //changeTask(1564347656,"hulahop",false,129108805)
    $("body").on("click",'.task',function(){
        changeTask($(this).attr('rel'),"tester",false,129108805);
        alert($(this).attr('rel'))
    });
}


$(document).ready(main);

/*Returns all list objects in an array*/
function getLists(){
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://a.wunderlist.com/api/v1/lists",
      "method": "GET",
      "headers": {
        "x-access-token": "7f2375c1a0fa641564cbd45f53bd5c91c4475c61b19f6f423457b89acd5a",
        "x-client-id": "6b6bfca8e9a100b98a48",
        }
    };

      $.ajax(settings).done(function (response) {
        //alert(JSON.stringify(response,null,4));
        $.each(response, function(){
            $(".list").append(this.id);
            getTasks(this.id);
        });
      });
}

function getTasks(listid){
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://a.wunderlist.com/api/v1/tasks?list_id="+listid,
      "method": "GET",
      "headers": {
        "x-access-token": "7f2375c1a0fa641564cbd45f53bd5c91c4475c61b19f6f423457b89acd5a",
        "x-client-id": "6b6bfca8e9a100b98a48",
        }
    };

      $.ajax(settings).done(function (response) {
        $.each(response, function(){
            div = "";
            div = "<div rel=\""+this.id+"\" class=\"task\">"+this.title+"</div>"
            $(".list").append(div);
        });
      });
}

function changeTask(taskid,newTitle,completed,listid){
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://a.wunderlist.com/api/v1/tasks/" + taskid,
      "method": "GET",
      "headers": {
        "x-access-token": "7f2375c1a0fa641564cbd45f53bd5c91c4475c61b19f6f423457b89acd5a",
        "x-client-id": "6b6bfca8e9a100b98a48",
        }
    };
    var datt = {}


    $.ajax(settings).success(function (response) {
        datt = {
            "revision" : response.revision,
            "title" : newTitle,
            "completed" : completed,
            "list_id": listid
        }
        var settings2 = {
            "async": true,
            "crossDomain": true,
            "url": "https://a.wunderlist.com/api/v1/tasks/" + taskid,
            "method": "PATCH",
            "headers": {
                "x-access-token": "7f2375c1a0fa641564cbd45f53bd5c91c4475c61b19f6f423457b89acd5a",
                "x-client-id": "6b6bfca8e9a100b98a48",
            },
            contentType: 'application/json',
            "data": JSON.stringify(datt)
        };
        $.ajax(settings2).done(function (response) {

        });
    });
}

function getInbox(response){
    inbox = $.grep(response,function(e){
        return e.title==="inbox";
    });

    $(".list").append(inbox[0].id)
}
