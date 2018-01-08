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
 * @class EverythingRequest
 */
class EverythingRequest extends Transport{
    constructor(options) {
        super("top-headlines");
        if (options) {
            this.options = options;
        }
        this.sources = this.options.sources || [];
        this.domains = this.options.domains || [];
    }

    setFrom(from){
        this.options.from = from;
    }

    setTo(to){
        this.options.to = to;
    }

    setLanguage(language){
        this.options.language = language
    }

    addSource(source){
        this.sources.push(source);
    }

    addDomain(domain){
        this.domains.push(domain)
    }

    setQ(q){
        this.options.q = q;
    }

    setPage(page){
        this.options.page = page;
    }

    setSortBy(sortBy){
        this.options.sortBy = sortBy;
    }
    execute(){
        this.options.sources = this.sources.join(",");
        this.options.domains = this.domains.join(",");

        return super.execute();
    }
}


module.exports = EverythingRequest;