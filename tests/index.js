/**
 * Part of GoogleNewsAPI library
 * Created by Anton Zuev on 07/01/2018.
 *
 * Contacts:
 * - mail: anzuev@bk.ru
 * - telegram: @anzuev
 * - github: @AnZuev
 */


let expect = require("chai").expect;
let {describe, it} = require("mocha");

describe("Checking config", function() {

    let config = require("config");

    it("Getting existing property", function() {
        expect(() => {config.get("baseUrl")}).to.not.throw();
    });

    it("Getting non-existing property", function() {
        expect(() => {config.get("nonexistingProperty")}).to.throw();
    });
});


