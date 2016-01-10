function returnTaskDiv(task,markLongTerm){
    var div = "";
    var classes = "";

    if(markLongTerm){
        if(task.list_id===getListid("Lange termijn") || task.list_id===getListid("Nog in te leveren")){
            classes = "longterm";
        };
    }else{
        classes = "";
    };

    div += "<div class=\"task panel panel-default "+classes+"\" rel=\""+task.id+"\">"
    div += "<div class=\"panel-body\">";
    div += task.title;
    div += "</div></div>";

    return div;
};

function returnListDiv(listid){
    var cont = "";

    cont += "<div class=\"list panel panel-default "+listid+"\" rel=\""+listid+"\">";
    cont += "<div class=\"panel-heading\">"+getListName(listid)+"</div>";
    cont += "<div class=\"panel-body\">";
    $.each(cache, function(){
        if(this.list_id===listid){
            cont += returnTaskDiv(this,false)
        };
    });
    cont += "</div></div>"

    return cont;
};

/*Get the id of a list by passing the name*/
function getListid(name){
    var id = $.grep(listCache,function(e){
        return e.title === name;
    });
    return id[0].id;
};

/*Get the name of a list by passing the id*/
function getListName(id){
    var n = $.grep(listCache,function(e){
        return e.id === id;
    });
    return n[0].title;
};

function clearTasks(){
    $(".taskcol").children().remove();
};

function displayPerSubject(){
    var tags = ["WEB","MOD", "MIC", "GRV", "COM"]
    column = 2;

    $.each(tags,function(index,value){
        $(".row .col-lg-2:nth-child("+column+")").append(returnTagListDiv(value));
        column++;
    });
};

//------------------------------------------------------------------Nog nodig?
function returnTagListDiv(tag){
    var cont = "";

    cont += "<div class=\"list panel panel-default "+tag+"\" rel=\""+tag+"\">";
    cont += "<div class=\"panel-heading\">"+tag+"</div>";
    cont += "<div class=\"panel-body\">";
    $.each(cache, function(){
        if(this.title.substring(0,3)===tag){
            cont += returnTaskDiv(this,true);
        };
    });
    cont += "</div></div>"

    return cont;
};

/*
function returnTaskWithTag(tag){
    $.each(cache, function(){
        if(this.title.substring(0,3)===tag){
            if(this.list_id===getListid("Lange termijn")){ //200884255
                $("."+tag).append(returnTaskDiv(this))
            }else{
                $("."+tag).prepend(returnTaskDiv(this))
            }
        };
    });
}
*/

/*
function displayTaskWithTag(tag){
    $.each(cache, function(){
        if(this.title.substring(0,3)===tag){
            if(this.list_id===getListid("Lange termijn")){ //200884255
                $("."+tag).append(returnTaskDiv(this))
            }else{
                $("."+tag).prepend(returnTaskDiv(this))
            }

        };
    });
}
*/
