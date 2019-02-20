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
        
    });
});
function loadToDo(){
    var ToDoRef = firebase.database().ref('ToDoList/');
    var html="";
    ToDoRef.on('child_added', function(data) {
        html+='<div class="row">'
        html+='<div class="col-12">'
        html+='<div class="alert alert-success">'
        html+=data.val()+'<span class="close_icon">x</span>';
        html+='</div>'
        html+='</div>'
        html+='</div>'
        $("#todolist").html(html);
    });
    
}
function addToDo(content){
    firebase.database().ref("ToDoList/").push(content);
}