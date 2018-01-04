var amqp=require('amqp');
var connection = amqp.createConnection({
  host: 'localhost',
	login: 'gensub',
	password: 'rabbitmq'
	});
connection.on('ready', function() {
connection.queue('work1', {autoDelete: false, durable: true},
 function(q) {
    q.subscribe(function(message){
      var msg=message.data.toString('utf8');
      console.log(msg);
    }); 
 }); 
});

