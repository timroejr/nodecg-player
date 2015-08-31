'use strict';

$('#sendPlayer').click(function() {
	var data = {}
	data.player = $('#player').val();
	data.stats = $('#stats').val();
	nodecg.sendMessage('showPlayer', data);
});

$('#hidePlayer').click(function() {
	nodecg.sendMessage('hidePlayer', ''); 
});

