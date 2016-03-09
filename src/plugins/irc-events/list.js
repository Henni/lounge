var _ = require("lodash");
var Chan = require("../../models/chan");
var Msg = require("../../models/msg");

module.exports = function(irc, network) {
	var client = this;
	var chanCache = {};

	irc.on("channel list start", function() {
		chanCache[network.id] = [];

		var msg = new Msg({
			text: "Loading channel list, please wait"
		});
		updateListStatus(msg);
	});

	irc.on("channel list", function(channels) {
		Array.prototype.push.apply(chanCache[network.id], channels);
	});

	irc.on("channel list end", function() {
		var msg = new Msg({
			type: "channel_list",
			channels: chanCache[network.id]
		});

		updateListStatus(msg);

		chanCache[network.id] = [];
	});

	function updateListStatus(msg) {
		var chan = _.find(network.channels, {name: "Channel list"});
		if (typeof chan === "undefined") {
			chan = new Chan({
				type: Chan.Type.QUERY,
				name: "Channel list"
			});
			network.channels.push(chan);
			client.emit("join", {
				network: network.id,
				chan: chan
			});
		}

		client.emit("msg", {
			chan: chan.id,
			msg: msg
		});
	}
};
