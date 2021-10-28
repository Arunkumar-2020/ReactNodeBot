'use strict';
const dialogflow = require('@google-cloud/dialogflow');
const structjson = require('./structjson');
const confiq = require('../confiq/keys');

const projectID = confiq.googleProjectsID;
//const sessionId = confiq.dialogFlowSessionID;
//const languageCode = config.dialogFlowSessionLanguageCode;

const credentials = {
    client_email: confiq.googleClientEmail,
    private_key: confiq.googlePrivateKey
}

const sessionClient = new dialogflow.SessionsClient({projectID: projectID, credentials: credentials});
//const sessionPath = sessionClient.projectAgentSessionPath(confiq.googleProjectsID,confiq.dialogFlowSessionID+userID);
//the old session path declaration is is not valid so need to use this one and add the user id to it
//also the userid should be added only inside the function where the userid is passed as an argument


module.exports = {
    textQuery: async function (text, userID, parameters = {}) {
        // The text query request.
        let self = module.exports;
        let sessionPath = sessionClient.projectAgentSessionPath(confiq.googleProjectsID,confiq.dialogFlowSessionID+userID);
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
    
    eventQuery: async function (event,userID, parameters = {}) {
        // The text query request.
        let self = module.exports;
        let sessionPath = sessionClient.projectAgentSessionPath(confiq.googleProjectsID,confiq.dialogFlowSessionID+userID);
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