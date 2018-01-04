# Rabbitmq Tester
----
## Install rabbitmq on Mac OSX
$brew install  
$rabbitmq-sever &  


## Install rabbitmq on Debian
$apt update  
$apt install rabbitmq-server  
$systemctl status rabbitmq-server.service  
$rabbitmqctl status

## Configuration
$rabbitmq-plugins enable rabbitmq_management  
http://localhost:15672/  
$rabbitmqctl delete_user guest  
$rabbitmqctl add_user myadmin adminp@ssword  
$rabbitmqctl set_user_tags myadmin administrator  
$rabbitmqctl set_permissions -p / myadmin ".\*" ".\* " ".\*"  
$rabbitmqctl add_user genpub rabbitmq  
$rabbitmqctl set_permissions -p / genpub ".\*" ".\* " ".\*"  
$rabbitmqctl add_user gensub rabbitmq  
$rabbitmqctl set_permissions -p / gensub ".\*" ".\* " ".\*"  
$rabbitmqctl list_users  
$rabbitmq-plugins list_users  
$rabbitmqctl status


# npm
$npm install date-utils  
$npm install amqp  
$npm install amqplib  
pub1.js and sub1.js are using amqp  
pub2.js and sub2.js are using amqplib  
# pulish
$node pub1.js or $node pub2.js  
# subscribe
$node sub1.js or $node sub2.js  
sub1.js reads messages as much as possible.  
sub2.js loops reading a message and sleeping 1000ms.  

# License
MIT
