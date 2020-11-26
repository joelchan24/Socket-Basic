const {io}=require('../server');


//create Connection

io.on('connection',(client)=>{


    console.log('user connected');
    //emit send 
    client.emit('sendmessage',{
        user:'Admin',
        message:'welcome to this Application'
    });


    client.on('disconnect',()=>{
        console.log('User Disconnected');
    });

    //listen the server


    client.on('sendmessage',(data,callback)=>{

        console.log(data);
        client.broadcast.emit('sendmessage',data);

    });



    





});