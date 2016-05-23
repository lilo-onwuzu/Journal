// constructor
exports.Journal = function (title, entry) {
  this.title = title;
  this.entry = entry;
};

exports.Journal.prototype.count = function() {
    var array = this.entry.split(" ");
    return array.length;
};
