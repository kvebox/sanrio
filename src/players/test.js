function Test(pos) {
    this.pos = pos;
}

// const char = new Test((0,0));

Test.prototype.test = function() {console.log('hello')};

module.exports = Test;