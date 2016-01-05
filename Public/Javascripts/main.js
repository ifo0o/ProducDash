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
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://a.wunderlist.com/api/v1/lists",
      "method": "GET",
      "headers": {
        "x-access-token": "7f2375c1a0fa641564cbd45f53bd5c91c4475c61b19f6f423457b89acd5a",
        "x-client-id": "6b6bfca8e9a100b98a48",
      }
    }

    $.ajax(settings).done(function (response) {
      alert(JSON.stringify(response,null,4));
      getInbox(response);
    });
}


$(document).ready(main);

function getInbox(response){
    inbox = $.grep(response,function(e){
        return e.title==="inbox";
    });

    $(".list").append(inbox[0].id)
}
