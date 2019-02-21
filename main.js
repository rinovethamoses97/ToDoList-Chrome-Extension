var content;
$(document).ready(function(){
    var config = {
        apiKey: "AIzaSyC4FKONlKBAqtE4COUzv0uMs8UUP_AYH-A",
        authDomain: "todolist-e2e43.firebaseapp.com",
        databaseURL: "https://todolist-e2e43.firebaseio.com",
        projectId: "todolist-e2e43",
        storageBucket: "todolist-e2e43.appspot.com",
        messagingSenderId: "802149427426"
    };
    firebase.initializeApp(config);
    console.log("Document Loaded");
    loadToDo();
    $("#addbutton").click(function(){
        content=$("#todocontent").val();
        $("#todocontent").val("");
        addToDo(content);
    });
    $(document).on('click','.close_icon',function(){
        firebase.database().ref('ToDoList/'+this.id).remove();
        $("div").filter("#"+this.id).css("text-decoration","line-through");
        $("div").filter("#"+this.id).removeClass("alert-warning");
        $("div").filter("#"+this.id).addClass("alert-danger");
    });
});
function loadToDo(){
    var ToDoRef = firebase.database().ref('ToDoList/');
    var html="";
    ToDoRef.on('child_added', function(data) {
        html+='<div class="row">'
        html+='<div class="col-12">'
        html+='<div class="alert alert-warning" id='+data.key+'>'
        html+=data.val()+'<span id='+data.key+' class="close_icon">x</span>';
        html+='</div>'
        html+='</div>'
        html+='</div>'
        $("#todolist").html(html);
    });
    
}
function addToDo(content){
    firebase.database().ref("ToDoList/").push(content);
}