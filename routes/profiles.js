let sting = require('../json/profiles/Sting.json')
let yoshi = require('../json/profiles/Yoshi.json')
let emma = require('../json/profiles/Emma.json')
let ps = require('../json/profiles/PS.json')
let vanillas = require('../json/profiles/Vanilla.json')

let modules = require('../json/modules.json')

let altIcons = {
	"Passwords Translated": "Password",
	"Big Button Translated": "The Button",
	"Who's on First Translated": "Who's on First",
	"Morse Code Translated": "Morse Code"
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
vanillas = transcodeProfile(vanillas);

module.exports = (name) => {
	switch(name) {
		case "sting": return sting;
		case "yoshi": return yoshi;
		case "emma": return emma;
		case "ps": return ps;
		case "vanillas": return vanillas;
	}
}
