# ultimate_chat_bot

Hello , 
this is a web server which exposes an AI API  , which helps us for our bot chat application. 

Based on the message put by the user . The API gets all intents which might be possible the user is havning to talk to. 
Based on the relevant intent and maximum confidence we send a reply to the user.

This project is built using [nodejs](https://nodejs.org/en/docs/) , [Typescript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
For DB : Mongoose for [MongoDB](https://docs.mongodb.com/manual/).

To start project on your machine . I have provided the .env file which will be chosen by defult and help you with all configurations.

Install nodejs on your machine and navigate to the folder and run : **npm start** . This will start the server at port : 3000 and your API is ready to take the messages. 

### `npm start`

This will run your application on port 3000. Once the application starts on your local machine use : **localhost:3000/intents/** . An example of what the api accepts as a request body : 

~~~
{
	"botId" : "5f74865056d7bb000fcd39ff",
	"message" : "hey"
}
~~~

### `npm test`

This project uses [jest](https://jestjs.io/docs/getting-started) as a testing library and running this command runs two test cases which checks if the user entered a chat message based on that what reply user should get. One is the default message "I could not give the correct answer" and other with the reply message using our db records. 





