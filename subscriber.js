require('dotenv').config();
const {PubSub} = require('@google-cloud/pubsub');
const pubsub = new PubSub();
let messageCount = 0;
const messageHandler = message => {
    console.log(`Received message ${message.id}:`);
    console.log(`Data: ${message.data}`);
    messageCount += 1;

    // Ack the messae
    message.ack();
};

pubsub.subscription('S123').on(`message`, messageHandler) //S123- Subscription name

setTimeout(()=>{
    pubsub.subscription('S123').removeListener('message', messageHandler);
    console.log(`${messageCount} message(s) received.`);
}, 5000);
