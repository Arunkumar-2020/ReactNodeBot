module.exports = app => {

    // root handler for landing page
    app.get('/',(req, res) => {
        res.send({'hello':'World'});
        //also don't use two send it shows error   
    });
    
    //sents queries to dialog flow
    app.post('/api/df_text_query',(req, res) => {
        res.send({'do':'text query'});   
    });
    
    //sents event to dialog flow
    app.post('/api/df_event_query',(req, res) => {
        res.send({'do':'event query'});   
    });
}