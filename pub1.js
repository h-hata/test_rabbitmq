require('date-utils');
var amqp=require('amqp');
var connection = amqp.createConnection({
    host: 'localhost',
		login: 'genpub',
		password: 'rabbitmq'
		});
		var updater = setInterval(function() {
		var cur= new Date();
		var ts=cur.toFormat("HH24:MI:SS");
		console.log(ts);
		connection.publish('work1',ts,{deliveryMode: 2});
}, 3000);
