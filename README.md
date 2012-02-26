jquery-maxlength
----------------

This plugin allows you to attach a counter to any input field that has a restricted length. The counter shows the remaining characters of input fields. It is required to define the maxlength attribute for the field.

### Usage

	$("textarea").maxlength({
		'showmax': true,		// shows maxlength in counter, default: false
		'class': 'counter',		// defines class for counter
		'text': 'characters remaining'	// attaches text to counter value
	});
