require('date-utils');
var amqp = require('amqplib/callback_api');
var ch;
amqp.connect('amqp://genpub:rabbitmq@localhost', function(err, conn) {
  conn.createChannel(function(err, channel) {
    ch=channel;
    console.log("connected");
  });
});
var updater = setInterval(function() {
    var q = 'work1';
    var cur= new Date();
    var ts=cur.toFormat("HH24:MI:SS");
    ch.assertQueue(q, {durable: true});
    ch.sendToQueue(q, new Buffer(ts), {persistent: true});
    console.log(ts);
}, 3000);
