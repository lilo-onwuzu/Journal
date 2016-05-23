// constructor
function Journal(title, entry) {
  this.title = title;
  this.entry = entry;
};

Journal.prototype.count = function() {
    var array = this.entry.split(" ");
    return array.length;
};

$(document).ready(function() {
  $('#journal').submit(function(event) {
    event.preventDefault();

    $('#journal').hide();

    var title = $('#title').val();
    var entry = $('#entry').val();
    var newJournal = new Journal(title, entry);
    var result = newJournal.count();

    $('#result').text(result);
    console.log(result);
  });
});
