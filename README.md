# gcp-pubsub
An example of demonstrating GCP pubsub

#### Steps
##### 1. Creating Publishing Topics and Subscriptions
- Open your Cloudshell editor
- If your GCP Project is not configured to your shell, configure it

```
gcloud config set project [PROJECT_ID]
```
- Create a topic name ```pubsub``` and subscription ```S123``` in it.

```
gcloud init
gcloud pubsub topics create pubsub  #pubsub is the topic name
gcloud pubsub subscriptions create --topic pubsub S123 # S123 is the subscription name in topic pubsub

```
##### 2. Create GCP Project credentials (for unconfigured cloudshell instances)

- Go to IAM and choose service accounts. under service accounts, create new account and then click on Create key on that service account. Once created, download key as .json file and upload it to your cloudshell instance.
- Export json file path to the environment variable

```
export GOOGLE_APPLICATION_CREDENTIALS=/path/to/key.json
```

##### 3. Publish and Subscribe to the message

```
git clone https://github.com/Salmandabbakuti/gcp-pubsub.git
cd gcp-pubsub
npm install

node publisher.js //in terminal 1

node subscriber.js // in another terminal
```
###### Boom
