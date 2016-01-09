function returnTaskDiv(task){
    if(task.list_id===getListid("Lange termijn")){ //200884255
        classes = "task longterm"
    }else{
        classes = "task"
    }
    var div = "<div class=\""+classes+"\" rel=\""+task.id+"\">";

    div += task.title;
    div+= "</div>";

    return div;
};

function displayList(listid){
    var list = "<div class=\"list\" rel=\""+listid+"\">";

    var cont = "";

    $.each(cache, function(){
        if(this.list_id===listid){
            cont += returnTaskDiv(this)
        };
    });

    $("."+listid).append(cont)
}

/*Get the id of a list by passing the name*/
function getListid(name){
    var id = $.grep(listsid,function(e){
        return e.title === name;
    });
    return id[0].id;
};

function displayTaskWithTag(tag){
    console.log("hoi")
    $.each(cache, function(){
        console.log(this.title)
        if(this.title.substring(0,3)===tag){
            if(this.list_id===getListid("Lange termijn")){ //200884255
                $("."+tag).append(returnTaskDiv(this))
            }else{
                $("."+tag).prepend(returnTaskDiv(this))
            }

        };
    });
}
