'use strict'
const dialogflow = require('@google-cloud/dialogflow');
const structjson = require('./structjson');
const confiq = require('../confiq/keys');

const sessionClient = new dialogflow.SessionsClient();
const sessionPath = sessionClient.projectAgentSessionPath(confiq.googleProjectsID,confiq.dialogFlowSessionID);


module.exports = {
    textQuery: async function (text, parameters = {}) {
        // The text query request.
        let self = module.exports;
        const request = {
            session: sessionPath,
            queryInput: {
                text: {
                // The query to send to the dialogflow agent
                    text: text,
                // The language used by the client (en-US)
                    languageCode: confiq.dialogFlowSessionLanguageCode,
                },
            },
            queryParams:{
                payload:{
                    data: parameters
                }
            }
            };
            let responses =  await sessionClient.detectIntent(request);
            responses = await self.handleAction(responses);
            return responses;
    
    },
    
    eventQuery: async function (event, parameters = {}) {
        // The text query request.
        let self = module.exports;
        const request = {
            session: sessionPath,
            queryInput: {
                event: {
                // The query to send to the dialogflow agent
                    name: event,
                    parameters: structjson.jsonToStructProto(parameters),
                // The language used by the client (en-US)
                    languageCode: confiq.dialogFlowSessionLanguageCode,
                },
            },
            };
            let responses =  await sessionClient.detectIntent(request);
            responses = await self.handleAction(responses);
            return responses;
    
    },

    handleAction: function(responses){
        return responses;
    }
}