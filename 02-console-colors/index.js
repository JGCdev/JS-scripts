(function(){
	// CSS
	const attention = 'background: #222; color: #bada55; padding:0px 5px';
	const alert = 'color: red';
	const success = 'color: green';
	const warning = 'color: #ff9c00';

	// Function
	console.relog = function (text, type) {
		switch(type) {
			case 1:
				console.log('%c' + text,  alert);
				break;
			case 2:
				console.log('%c' + text,  success);
				break;
			case 3:
				console.log('%c' + text,  warning);
				break;
			case 4:
				console.log('%c' + text,  attention);
				break;
		}
	}
	
})();

