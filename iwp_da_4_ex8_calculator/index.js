// Load this js only after the document is ready.
$(document).ready(function() {
  // at Initial.
  var displayValue = '0';
  $('#result').text(displayValue);

  // Props shown when each key is clicked
  $('.key').each(function(index, key) {
    $(this).click(function(e) {
      if (displayValue == '0') displayValue = '';
      if ($(this).text() == 'C') {
        displayValue = '0';
        $('#result').text(displayValue);
      } else if ($(this).text() == '=') {
        try {
          displayValue = eval(displayValue);
          $('#result').text(displayValue);
          displayValue = '0';
        } catch (e) {
          displayValue = '0';
          $('#result').text('ERROR');
        }
      } else {
        displayValue += $(this).text();
        $('#result').text(displayValue);
      }
      // Here, the preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
      e.preventDefault()
    });
  });
});
