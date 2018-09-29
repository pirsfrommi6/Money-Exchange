module.exports = function makeExchange(currency) {
	if(currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
	if(currency === 0) return {};	
	const result = {};

	while(currency > 0){
		switch (true) {
			case currency >= 50:
				result.H = Math.floor(currency/50);
				currency = currency % 50;
				break;
			case currency >= 25:
				result.Q = Math.floor(currency/25);
				currency = currency % 25;
				break;
			case currency >= 10:
				result.D = Math.floor(currency/10);
				currency = currency % 10;
				break;
			case currency >= 5:
				result.N = Math.floor(currency/5);
				currency = currency % 5;
				break;
			case currency >= 1:
				result.P = currency;
				return result;
				break;
		}
	}
	return result;
}


