/**
 * Part of GoogleNewsAPI library
 * Created by Anton Zuev on 07/01/2018.
 *
 * Contacts:
 * - mail: anzuev@bk.ru
 * - telegram: @anzuev
 * - github: @AnZuev
 */

let config = require("../../config");
let rp  = require("request-promise");
let _  = require("underscore");


const API_KEY = config.get("API_KEY");
const BASE_URL = config.get("baseUrl");


/**
 * @class Transport
 * is used as a base class for three types of requests:
 * - sources
 * - top-headlines
 * - everything
 */
class Transport{

    constructor(type){
        this.type = type;
        this.options = {}
    }


    execute(){
        let url = BASE_URL;
        let res = [];
        _.forEach(_.keys(this.options), (param) => {
            res.push(`${param}=${this.options[param]}`);
        });

        url += this.type + `?apiKey=${API_KEY}&` + res.join("&");
        return rp(url)
            .then((response)=>{
                return JSON.parse(response)
            });
    }


}

module.exports = Transport;
