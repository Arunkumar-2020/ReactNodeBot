const chatbot = require('../chatbot/chatbot');
module.exports = app => {

    // root handler for landing page
    app.get('/',(req, res) => {
        res.send({'hello':'World'});
        //also don't use two send it shows error   
    });
    
    //sents queries to dialog flow
    app.post('/api/df_text_query', async (req, res) => {

        let responses = await chatbot.textQuery(req.body.text, req.body.userID, req.body.parameters);
        res.send(responses[0].queryResult);   
    });
    
    //sents event to dialog flow
    app.post('/api/df_event_query', async (req, res) => {
        let responses = await chatbot.eventQuery(req.body.event, req.body.userID, req.body.parameters);
        res.send(responses[0].queryResult);  
    });
}