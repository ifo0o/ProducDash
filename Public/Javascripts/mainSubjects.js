var main = function() {

    $.when(initLists).done(function(){
        initTasks()
    });

};

$(document).ready(main);
/*
function displayStuff(){
    var mainLists = ["WEB","MOD", "MIC", "GRV", "COM"]
    column = 2;
    $.each(mainLists,function(index,value){
        $(".row .col-lg-2:nth-child("+column+")").append(returnTagListDiv(value));
        column++

        //$(".listwrap").append(returnListDiv(listid));
    });

    /*
    displayTaskWithTag("WEB")
    displayTaskWithTag("COM")
    displayTaskWithTag("MOD")
    displayTaskWithTag("GRV")
    displayTaskWithTag("MIC")
    displayList(getListid("Werk"))
    displayList(getListid("Privé"))
    */
//};
