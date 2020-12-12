let sting = require('../json/profiles/Sting.json')
let yoshi = require('../json/profiles/Yoshi.json')
let emma = require('../json/profiles/Emma.json')
let ps = require('../json/profiles/PS.json')

let modules = require('../json/modules.json')

let altIcons = {
	"Passwords Translated": "Password",
	"Big Button Translated": "The Button"
}
let stingAltManuals = {
	'Complicated Wires': 'Complicated Wires optimized (Stinggyray)'
}

function transcodeProfile(profile) {
	let enabledList = profile.EnabledList;
	enabledList = enabledList.map((s) => modules[s]).sort((a, b) => {
		function getRaw(s) {
			return s.replace(/^The /, '').trim();
		}
		return getRaw(a).localeCompare(getRaw(b));
	});

	let newConstructedList = [];

	enabledList.forEach((entry) => {
		newConstructedList.push({
			moduleName: entry,
			manualLink: stingAltManuals[entry] ?? entry,
			iconName: altIcons[entry] ?? entry
		})
	});

	return newConstructedList;
}

sting = transcodeProfile(sting);
yoshi = transcodeProfile(yoshi);
emma = transcodeProfile(emma);
ps = transcodeProfile(ps);

module.exports = (name) => {
	switch(name) {
		case "sting": return sting;
		case "yoshi": return yoshi;
		case "emma": return emma;
		case "ps": return ps;
	}
}
