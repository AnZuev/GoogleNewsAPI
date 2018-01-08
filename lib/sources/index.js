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

let Transport = require("../etc/Transport");
let _ = require("underscore");

/**
 * @class SourceRequest
 * @params category, language, country
 * @info to get all of the sources, just create a SourceRequest without any param
 */
class SourceRequest extends Transport{
    constructor(options){
        super("sources");
        this.options = options || {};
    }

    setCategory(category){
        this.options.category = category
    }

    setLanguage(language){
        this.options.language = language
    }

    setCountry(country){
        this.options.country = country
    }

    async execute(){
        return await super.execute();
    }
}

module.exports = SourceRequest;