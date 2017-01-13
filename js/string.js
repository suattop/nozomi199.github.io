String.prototype.format = function() {
	var args = arguments;
	if(args.length == 1 && typeof args[0] === "object") {
		var o = args[0]
		return this.replace(/{([^{}]*)}/g, function(a,b) {
			var r = o[b];
			return typeof r ==='string' || typeof r === 'number' ? r : a;
		});
	}
	return this.replace(/{(\d+)}/g, function(match, number) { 
		return typeof args[number] != 'undefined' ? args[number] : match;
	});
};
String.prototype.replaceAll = function(search,replacement) {
	var target = this;
	return target.split(search).join(replacement);
}