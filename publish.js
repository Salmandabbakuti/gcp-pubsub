
require('dotenv').config();
const {PubSub} = require('@google-cloud/pubsub');
const pubsub = new PubSub();
 async function publish() {
    const data = new Date().toString();
    const dataBuffer = Buffer.from(data);
    const topicName = 'pubsub';
    const messageId = await pubsub
        .topic(topicName)
        .publish(dataBuffer)
    
    console.log(messageId)
}

publish()
