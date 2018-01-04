var amqp = require('amqplib/callback_api');
amqp.connect('amqp://gensub:rabbitmq@localhost:5672', function(err, conn) {
  conn.createChannel(function(err, ch) {
    var q = 'work1';
    ch.assertQueue(q, {durable: true});
    ch.prefetch(1);//1メッセージ受け取ったら受信の一時停止を通知
    ch.consume(q, function(msg) {
      var secs = 10;
      console.log("Received %s and sleep 1000 ms", msg.content.toString());
      setTimeout(function() {
        console.log("Waked up");
        ch.ack(msg);//再び受信を再開
      }, secs * 1000);
    }, {noAck: false});
  });
});
