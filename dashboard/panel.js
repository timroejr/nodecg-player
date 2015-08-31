'use strict';

$('#sendPlayer').click(function() {
	var player = $('#player').val();
	var stats = $('#stats').val();
	nodecg.sendMessage('showPlayer', { text: player, text: stats});
});

$('#hidePlayer').click(function() {
	nodecg.sendMessage('hidePlayer', ''); 
});

