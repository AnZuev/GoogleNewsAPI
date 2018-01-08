"use strict";

/**
 * Part of GoogleNewsAPI library
 * Created by Anton Zuev on 08/01/2018.
 *
 * Contacts:
 * - mail: anzuev@bk.ru
 * - telegram: @anzuev
 * - github: @AnZuev
 */

let config = require("../config");
let EverythingRequest;
let TopHeadlinesRequest;
let SourcesRequest;
let options = require("./etc/options");
let _ = require("underscore");

module.exports = (API_KEY)=>{
    config.setApiKey(API_KEY);
    EverythingRequest = require("./everything");
    TopHeadlinesRequest = require("./headlines");
    SourcesRequest = require("./sources");
    return GoogleNewsAPI;
};



/**
 * @class GoogleNewsAPI
 */
class GoogleNewsAPI{
    static async getEverything(options){
        let req = new EverythingRequest(options);
        return await req.execute();
    }

    static async getTopHeadlines(options){
        let req = new TopHeadlinesRequest(options);
        return await req.execute();
    }

    static async getSources(options){
        let req = new SourcesRequest(options);
        return await req.execute();
    }

    static getOptions(){
        return options;
    }

    static async updateSources(){
        let req = new SourcesRequest();
        let response = await req.execute();

        options.sources =  _.map(response.sources, (source) => {
            return {
                id: source.id,
                name: source.name
            }
        });
    }
}

