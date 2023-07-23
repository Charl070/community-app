global.self = global;
global.window = { ...(global.window || {}) };
global.XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
