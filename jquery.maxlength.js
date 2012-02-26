(function($) {
	$.fn.maxlength = function(params) {
		params = params || {};
		
		this.each(function() {
			var maxlength = $(this).attr('maxlength');
			
			if(maxlength !== undefined) {
				var textfield = $(this);
				var container = $('<div />', { 'class': params['class'] || '' }).insertAfter($(this));
				var updateCounter = function() {
					var text = textfield.val();
					var remainingCharacters = maxlength - text.length;
					var counterString = remainingCharacters;

					if(params['showmax'] == true) {
						counterString += ' / ' + maxlength;
					}

					counterString += ' ' + (params['text'] || '');

					container.text(counterString);
				};
								
				$(this).bind('keydown keyup keypress paste', updateCounter);

				updateCounter();
			}
			else {
				throw "Element does not contain maxlength attribute";
			}
		});		
	};
})(jQuery);