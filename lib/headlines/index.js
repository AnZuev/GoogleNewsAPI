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
 * @class TopHeadlinesRequest
 */
class TopHeadlinesRequest extends Transport{
    constructor(options){
        super("top-headlines");
        if(options){
            this.options = options;
        }

        this.sources = this.options.sources || [];

    }

    setCategory(category){
        this.options.category = category
    }

    setLanguage(language){
        this.options.language = language
    }

    setCountry(country){
        this.options.country = country;
    }

    addSource(source){
        this.sources.push(source);
    }

    setQ(q){
        this.options.q = q;
    }

    execute(){
        this.options.sources = this.sources.join(",");
        return super.execute();
    }
}


module.exports = TopHeadlinesRequest;