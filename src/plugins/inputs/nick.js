exports.commands = ["nick"];

exports.input = function(network, chan, cmd, args) {
	if (args.length !== 0) {
		var irc = network.irc;
		irc.changeNick(args[0]);
	}

	return true;
};
