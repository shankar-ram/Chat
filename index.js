const StreamChat = require("stream-chat").StreamChat
const api_key = 'c2haffg3cpbd' ;
const api_secret = '74axkdygmdhyv7ebhbhh2mbm357ykj5bqf4ffykmw66fy8x9pnjn4xeggp3r5amj' ;
const user_id = 'aman' ;
 
// Initialize a Server Client 
const serverClient = StreamChat.getInstance( api_key, api_secret); 
// Create User Token 
const token = serverClient.createToken(user_id);
console.log(token)


