var main = function() {
    $(document).on("click", ".task", mimicDone);

    $.when(initLists).done(function(){
        initTasks();
    });

    $(document).on("click", "#newtask-button", addTask);

    $(document).on("click", "#persubject-button", clearTasks)
    $(document).on("click", "#persubject-button", displayPerSubject)

    $(document).on("click", "#permainlist-button", clearTasks)
    $(document).on("click", "#permainlist-button", displayDefault)
};

$(document).ready(main);

function mimicDone(){
    if($(this).hasClass("mimic-done")){
        $(this).removeClass("mimic-done")
    }else{
        $(this).addClass("mimic-done")
    }


};

function displayDefault(){
    var mainLists = ["Snelle taken","Privé", "School", "Werk", "Lange termijn"];
    var column = 2;
    var listid = 0;

    $.each(mainLists,function(index,value){
        listid = getListid(value);
        $(".row .col-lg-2:nth-child("+column+")").append(returnListDiv(listid));
        column++;
    });
};

//--------------------------------------------------------------------------------

//function displayLists(task){
    /*
    divHead = "TEST";
    wrapid = "#schoolWrap"

    div =
    "<div class=\"panel panel-default\"><div class=\"panel-heading\">"
    +divHead+"</div><ul class=\"list-group\">"

        var task = "";
        task += "<li rel=\""+this.id+"\" class=\"list-group-item\">"+this.title+"</li>";
        div += task;

    div += "</ul></div>";
    $(wrapid).append(div)
    */
//    $(".test").append(task.title)
//    $(".test").append("<br>")
//};

/*Returns all list objects in an array*/
/*
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

    var schoolID, snelleTakenID

    $.ajax(settings).done(function (response) {
        //alert(JSON.stringify(response,null,4));
        $.each(response, function(){
            switch (this.title) {
                case "School":
                    displayMainTasks(this.id,"school")
                    break;
                case "Snelle taken":
                    displayMainTasks(this.id,"snelleTaken")
                default:
            }
        });
    });
};
*/

/*
function displayMainTasks(id,name) {
    var div = ""
    var wrapid, divHead = "";

    if(name==="school"){
        divHead = "School";
        wrapid = "#schoolWrap"
    }else if(name==="snelleTaken"){
        divHead = "Snelle Taken";
        wrapid = "#quickTaskWrap"
    }

    div =
    "<div class=\"panel panel-default\"><div class=\"panel-heading\">"
    +divHead+"</div><ul class=\"list-group\">"

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://a.wunderlist.com/api/v1/tasks?list_id="+id,
        "method": "GET",
        "headers": {
            "x-access-token": "7f2375c1a0fa641564cbd45f53bd5c91c4475c61b19f6f423457b89acd5a",
            "x-client-id": "6b6bfca8e9a100b98a48",
        }
    };

    $.ajax(settings).done(function (response) {
        $.each(response, function(){
            var task = "";
            task += "<li rel=\""+this.id+"\" class=\"list-group-item\">"+this.title+"</li>";
            div += task;
        });
        div += "</ul></div>";
        $(wrapid).append(div)
    });
};

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

function displayTaskWithTagg(tag){

    var result = $.grep(listsid, function(e){ return e.title == "Lange termijn"; });
    //alert(JSON.stringify(result[0],null,4))
    //alert(result[0].id)

    $.each(cache, function(){
        if(this.title.substring(0,3)===tag){
            if(this.list_id===result[0].id){
                $(".test").append("Taak voor de lange termijn:")
            }
            $(".test").append(this.title)
            $(".test").append("<br>")
        };
    });
}
*/

/*Returns all list objects in an array*/
/*function getLists(){
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
}*/


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
    //getLists();
    //changeTask(1564347656,"hulahop",false,129108805)
    /*$("body").on("click",'.task',function(){
        changeTask($(this).attr('rel'),"tester",false,129108805);
        alert($(this).attr('rel'))
    });*/
