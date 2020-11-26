var socket=io();

socket.on('connect',function(){
console.log('connected to server');
});

socket.on('disconnect',function(){

});



socket.emit('sendmessage',{
    user:'Joel',
    message:'welcome to this Application'
},function(response){
console.log('server : ',response);
});




//listen the information

socket.io('sendmessage',function(menssage){
    console.log(message);
});