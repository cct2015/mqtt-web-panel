const { EventEmitter } = require('events');

class Stream extends EventEmitter {
  next(event, ...data) {
    this.emit(event, ...data);
  }

  subscribe(event, callback) {
    this.on(event, callback);
    return this;
  }
}

module.exports = Stream;
