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


let config = require("../../config");
let _ = require("underscore");

/*
    load all languages
 */

let languages = {};
_.forEach(config.get("languages"), (obj) => {
    languages[obj] = obj;
});

exports.languages = languages;

/*
    load all categories
 */
let categories = {};
_.forEach(config.get("categories"), (obj) => {
    categories[obj] = obj;
});

exports.categories = categories;



/*
    load all countries
 */

let countries = {};
_.forEach(config.get("countries"), (obj) => {
    countries[obj] = obj;
});

exports.countries = countries;


let sortBy = {
    "publishedAt": "newest articles come first",
    "relevancy": "articles more closely related to q come first.",
    "popularity": "articles from popular sources and publishers come first"
};

exports.sortBy = sortBy;






