'use strict';

var toc = require('markdown-toc');

exports.init = function (engine) {
    var original = engine.loadContent;

    engine.loadContent = function (entry, content, callback) {
        original(entry, content, function (transformedContent) {
            entry.toc = toc(content).content;

            callback(transformedContent);
        });
    };
};
