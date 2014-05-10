'use strict';

var toc = require('marked-toc');

exports.init = function (engine) {
    var original = engine.loadContent;

    engine.loadContent = function (entry, content, callback) {
        original(entry, content, function (transformedContent) {
            entry.toc = toc.raw(content);

            callback(transformedContent);
        });
    };
};