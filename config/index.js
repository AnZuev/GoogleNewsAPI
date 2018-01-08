"use strict";

/**
 * Part of GoogleNewsAPI library
 * Created by Anton Zuev on 07/01/2018.
 *
 * Contacts:
 * - mail: anzuev@bk.ru
 * - telegram: @anzuev
 * - github: @AnZuev
 */

const configJSON = require("./main.json");
const Util = require("util");

/**
 * @class Config
 *
 */
class Config{
    constructor(json){
        this.json = json;
    }

    /**
     * Getting property from config
     * @throws Error if no such property exist
     * @param property
     * @return {value}
     */
    get(property){
        let value = this.json[property];
        if(value){
            return value
        }else{
            throw new Error(Util.format("No such property '%s' in config", property))
        }
    }

    /**
     * Checks whether the property exists or not
     * @param property
     * @return {boolean}
     */
    isExist(property){
        return !!this.json[property]
    }

    setApiKey(api_key){
        this.json["API_KEY"] = api_key;
    }
}

const config = new Config(configJSON);

module.exports = config;


