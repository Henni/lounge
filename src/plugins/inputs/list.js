module.exports = function(network, chan, cmd, args) {
	if (cmd !== "list") {
		return;
	}

	network.irc.raw("LIST", args.join(" "));
};
