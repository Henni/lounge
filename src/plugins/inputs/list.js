exports.commands = ["list"];

exports.input = function(network, chan, cmd, args) {
	network.irc.raw("LIST", args.join(" "));

	return true;
};
