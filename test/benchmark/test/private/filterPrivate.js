'use strict';

module.exports.info  = 'filter Private';


let bc, contx, timeout;
module.exports.init = function(blockchain, context, args) {
    bc       = blockchain;
    contx    = context;
    timeout = args.timeout || 60;
    return Promise.resolve();
};

module.exports.run = function() {
    return bc.queryState(contx, 'reference', 'v1', [], 'filterPrivate', timeout);
};

module.exports.end = function() {
    // do nothing
    return Promise.resolve();
};
