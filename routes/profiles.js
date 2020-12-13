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
let altNames = {
	"Big Button Translated": "The Button Translated"
}
let universalAltManuals = {
	"Cheap Checkout": "Cheap Checkout optimized (Timwi)",
	"3D Maze": "3D Maze optimized (Stinggyray)",
	"Algebra": "Algebra condensed (Stinggyray)",
	"Alphabet": "Alphabet optimized (Nanthelas)",
	"Blind Alley": "Blind Alley condensed (Timwi)",
	"Bitwise Operations": "Bitwise Operations condensed (LeGeND)",
	"Chess": "Chess interactive (samfundev)",
	"Colored Squares": "Colored Squares colored (samfundev)",
	"Colour Flash": "Colour Flash optimized (Stinggyray)",
	"Combination Lock": "Combination Lock condensed (Stinggyray)",
	"Coordinates": "Coordinates interactive (samfundev)",
	"Crazy Talk": "Crazy Talk alphabetized (Timwi)",
	"Fast Math": "Fast Math condensed (Stinggyray)",
	"Flags": "Flags colored (JakkOfKlubs)",
	"Foreign Exchange Rates": "Foreign Exchange Rates optimized (Timwi)",
	"Friendship": "Friendship rearranged (samfundev)",
	"Hexamaze": "Hexamaze interactive (samfundev)",
	"Laundry": "Laundry condensed (Stinggyray)"
}
let stingAltManuals = {
	"Adjacent Letters": "Adjacent Letters lookup table (samfundev & Elias)",
	"Adventure Game": "Adventure Game condensed (samfundev)",
	"Astrology": "Astrology lookup table (Elias & samfundev)",
	"Backgrounds": "Backgrounds condensed (ZekNikZ)",
	"Bitmaps": "Bitmaps condensed (Stinggyray)",
	"Broken Buttons": "Broken Buttons condensed (Freelancer1025)",
	"Chess": "Chess optimized (Timwi)",
	"Cooking": "Cooking condensed (Lebossle)",
	"Coordinates": "Coordinates optimized (Blananas2)",
	"Creation": "Creation lookup table (JakkOfKlubs & Stinggyray)",
	"Double-Oh": "Double-Oh embellished (samfundev)",
	"Flags": "Flags optimized (Timwi)"
}
let yoshiAltManuals = {

}
let emmaAltManuals = {

}
let psAltManuals = {

}

let vanillasAltManuals = {
	'Complicated Wires': 'Complicated Wires optimized (Stinggyray)',
	'The Button': 'The Button lookup table (Timwi)'
}

function transcodeProfile(profile, altManuals) {
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
			moduleName: altNames[entry] ?? entry,
			manualLink: altManuals[entry] ?? universalAltManuals[entry] ?? entry,
			iconName: altIcons[entry] ?? entry
		})
	});

	return newConstructedList;
}

sting = transcodeProfile(sting, stingAltManuals);
yoshi = transcodeProfile(yoshi, yoshiAltManuals);
emma = transcodeProfile(emma, emmaAltManuals);
ps = transcodeProfile(ps, psAltManuals);
vanillas = transcodeProfile(vanillas, vanillasAltManuals);

module.exports = (name) => {
	switch(name) {
		case "sting": return sting;
		case "yoshi": return yoshi;
		case "emma": return emma;
		case "ps": return ps;
		case "vanillas": return vanillas;
	}
}
