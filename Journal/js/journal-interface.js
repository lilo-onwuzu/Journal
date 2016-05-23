var Journal = require('./../js/journal.js').Journal;

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
