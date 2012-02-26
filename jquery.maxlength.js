(function($) {
	$.fn.maxlength = function(params) {
		params = params || {};
		
		this.each(function() {
			var maxlength = $(this).attr('maxlength');
			
			if(maxlength !== undefined) {
				var container = $('<div />', { 'class': params['class'] || '' }).insertAfter($(this));
				
				container.updateCounter = function(remaining_characters) {
					var counterString = remaining_characters;

					if(params['showmax'] == true) {
						counterString += ' / ' + maxlength;
					}

					counterString += ' ' + (params['text'] || '');

					$(this).text(counterString);
				}

				container.updateCounter(maxlength);
				
				$(this).bind('keydown keyup keypress paste', function() {
					var text = $(this).val();
					var characters_remaining = maxlength - text.length;
					
					container.updateCounter(characters_remaining);
				});
			}
			else {
				throw "Element does not contain maxlength attribute";
			}
		});		
	};
})(jQuery);