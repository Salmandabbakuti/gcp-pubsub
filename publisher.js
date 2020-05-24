
require('dotenv').config();
const {PubSub} = require('@google-cloud/pubsub');
const pubsub = new PubSub();
 async function publish() {
    const data = 'Hi Devs, I sent this message from Nodejs via GCP PubSub';
    const dataBuffer = Buffer.from(data);
    const topicName = 'pubsub';
    const messageId = await pubsub
        .topic(topicName)
        .publish(dataBuffer)
    
    console.log(messageId)
}

publish()
