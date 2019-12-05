const express = require('express')
const app = express()
const mongoose = require('mongoose');
// import graphql-express and BookSchema
const graphqlExpress = require("express-graphql");
const QuestSchema = require('./question/graphql/schema').Schema;

//connecting to mongodb
mongoose.connect('mongodb://mongo/myappdb', { useNewUrlParser: true,useUnifiedTopology: true },(err)=>{
    if (err) throw err;
    console.log("connected to mongo");
})  

app.set('port', (process.env.PORT || 4000));

app.listen(app.get('port'), ()=> {    
    console.log("Node app is running at localhost:" + app.get('port'))
});

console.log("Is watching changes Hehe")

//add the schema to graphql-express 
app.use('/graphql', graphqlExpress({
    schema: QuestSchema,
    rootValue: global,
    graphiql: true
}));


