const dialogflow = require('@google-cloud/dialogflow');
const confiq = require('../confiq/keys');

const sessionClient = new dialogflow.SessionsClient();
const sessionPath = sessionClient.projectAgentSessionPath(confiq.googleProjectsID,confiq.dialogFlowSessionID);

module.exports = app => {

    // root handler for landing page
    app.get('/',(req, res) => {
        res.send({'hello':'World'});
        //also don't use two send it shows error   
    });
    
    //sents queries to dialog flow
    app.post('/api/df_text_query', async (req, res) => {

        // The text query request.
        const request = {
        session: sessionPath,
        queryInput: {
        text: {
        // The query to send to the dialogflow agent
        text: req.body.text,
        // The language used by the client (en-US)
        languageCode: confiq.dialogFlowSessionLanguageCode,
      },
    },
  };
    
    let responses =  await sessionClient
            .detectIntent(request);

        res.send(responses[0].queryResult);   
});
    
    //sents event to dialog flow
    app.post('/api/df_event_query',(req, res) => {
        res.send({'do':'event query'});   
    });
}