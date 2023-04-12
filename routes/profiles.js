let sting = require('../json/profiles/Sting.json');
let yoshi = require('../json/profiles/Yoshi.json');
let emma = require('../json/profiles/Emma.json');
let ps = require('../json/profiles/PS.json');
let vanillas = require('../json/profiles/Vanilla.json');
let flaw = require('../json/profiles/Flaw.json');

let modules = require('../json/modules.json');

let fs = require('fs');
let path = require('path');

let baseNameChanges = {
	"Morse Code Translated": "Morse Code all languages condensed (S.)",
	"Passwords Translated": "Password all languages condensed (S.)",
	"Venting Gas Translated": "Venting Gas all languages condensed (S.)",
	"Who's on First Translated": "Who's on First all languages condensed (S.)",
}
let altIcons = {
	"Passwords Translated": "Password",
	"Big Button Translated": "The Button",
	"Who's on First Translated": "Who's on First",
	"Morse Code Translated": "Morse Code",
	"Venting Gas Translated": "Venting Gas"
}
let altNames = {
	"Big Button Translated": "The Button Translated"
}
let universalAltManuals = {
	"Cheap Checkout": "Cheap Checkout optimized (Timwi)",
	"3D Maze": "3D Maze optimized (Stinggyray)",
	"Algebra": "Algebra condensed (Stinggyray)",
	"Alphabet": "Alphabet optimized (Nanthelas)",
	"Big Button Translated": "The Button lookup table (Timwi)",
	"Big Circle": "Big Circle condensed (Stinggyray)",
	"Binary LEDs": "Binary LEDs embellished (ZekNikZ)",
	"Blind Alley": "Blind Alley condensed (Timwi)",
	"Boolean Venn Diagram": "Boolean Venn Diagram interactive (samfundev)",
	"Bitwise Operations": "Bitwise Operations condensed (LeGeND)",
	"Chess": "Chess interactive (samfundev)",
	"Colored Squares": "Colored Squares colored (samfundev)",
	"Colour Flash": "Colour Flash optimized (Stinggyray)",
	"Combination Lock": "Combination Lock condensed (Stinggyray)",
	"Coordinates": "Coordinates interactive (samfundev)",
	"Crazy Talk": "Crazy Talk alphabetized (Timwi)",
	"Cryptography": "Cryptography optimized (Nanthelas & samfundev & Lebossle)",
	"Fast Math": "Fast Math condensed (Stinggyray)",
	"Flags": "Flags colored (JakkOfKlubs)",
	"Foreign Exchange Rates": "Foreign Exchange Rates optimized (Timwi)",
	"Friendship": "Friendship rearranged (samfundev, Stinggyray)",
	"Hexamaze": "Hexamaze interactive (samfundev)",
	"Laundry": "Laundry condensed (Stinggyray)",
	"Letter Keys": "Letter Keys lookup table (Timwi)",
	"Listening": "Listening interactive (samfundev)",
	"Memory": "Memory condensed (Timwi)",
	"Minesweeper": "Minesweeper condensed (Stinggyray)",
	"Monsplode, Fight!": "Monsplode, Fight! colored",
	"Orientation Cube": "Orientation Cube optimized (CaitSith2)",
	"Piano Keys": "Piano Keys embellished (Rexkix)",
	"Probing": "Probing condensed (Stinggyray)",
	"Rock-Paper-Scissors-Lizard-Spock": "Rock-Paper-Scissors-Lizard-Spock embellished (Rexkix)",
	"Switches": "Switches optimized (Nanthelas)",
	"The Bulb": "The Bulb lookup table (Elias)",
	"Third Base": "Third Base alphabetized (Timwi)",
	"Wire Placement": "Wire Placement embellished (Timwi)",
	"Prime Encryption": "Prime Encryption lookup table (Eltrick)"
}
let stingAltManuals = {
	"Adjacent Letters": "Adjacent Letters lookup table (samfundev & Elias)",
	"Adventure Game": "Adventure Game condensed (samfundev)",
	"Astrology": "Astrology lookup table (Elias & samfundev)",
	"Backgrounds": "Backgrounds condensed (ZekNikZ)",
	"Bitmaps": "Bitmaps condensed (Stinggyray)",
	"Broken Buttons": "Broken Buttons condensed (Freelancer1025, Stinggyray)",
	"Chess": "Chess optimized (Timwi)",
	"Cooking": "Cooking condensed (Lebossle)",
	"Coordinates": "Coordinates optimized (Blananas2)",
	"Creation": "Creation lookup table (JakkOfKlubs & Stinggyray)",
	"Double-Oh": "Double-Oh embellished (samfundev)",
	"Festive Piano Keys": "Festive Piano Keys optimized (JakkOfKlubs)",
	"Flags": "Flags optimized (Timwi)",
	"Logic": "Logic optimized (Stinggyray)",
	"Mafia": "Mafia optimized (Timwi)",
	"Microcontroller": "Microcontroller optimized (Elias)",
	"Morsematics": "Morsematics optimized (samfundev)",
	"Perspective Pegs": "Perspective Pegs condensed (Stinggyray)",
	"Plumbing": "Plumbing condensed (Timwi)",
	"Resistors": "Resistors condensed (Nanthelas)",
	"Rubik's Cube": "Rubik's Cube lookup table (Katarina)",
	"Safety Safe": "Safety Safe condensed (samfundev & Stinggyray)",
	"Simon Screams": "Simon Screams condensed fixed (samfundev)",
	"Simon States": "Simon States condensed (Nanthelas)",
	"The Festive Jukebox": "The Festive Jukebox optimized (Timwi)",
	"The Gamepad": "The Gamepad lookup table (Timwi)",
	"The Jukebox": "The Jukebox optimized (Timwi)",
	"Two Bits": "Two Bits optimized (Nanthelas)",
	"Waste Management": "Waste Management in code form (Timwi & Stinggyray)",
	"Web Design": "Web Design optimized (samfundev)",
	"Word Search": "Word Search lookup table (Elias)"
}
let yoshiAltManuals = {
	"Adventure Game": "Adventure Game condensed (samfundev)",
	"Astrology": "Astrology lookup table (Elias & samfundev)",
	"Chess": "Chess optimized (Timwi)",
	"Color Generator": "Color Generator lookup table (Timwi)",
	"Complicated Buttons": "Complicated Buttons optimized (Timwi)",
	"Connection Check": "Connection Check optimized (Elias)",
	"Follow the Leader": "Follow the Leader condensed (Nanthelas)",
	"LED Encryption": "LED Encryption lookup table (JakkOfKlubs)",
	"Logic": "Logic optimized (LeGeND)",
	"Mafia": "Mafia optimized (Timwi)",
	"Microcontroller": "Microcontroller optimized (Elias)",
	"Neutralization": "Neutralization condensed (samfundev)",
	"Number Pad": "Number Pad lookup table (CaitSith2)",
	//"Perplexing Wires": "Perplexing Wires lookup table (ZekNikZ)",
	"Piano Keys": "Piano Keys condensed (LeGeND)",
	"Plumbing": "Plumbing condensed (Timwi)",
	"Rhythms": "Rhythms optimized (samfundev)",
	"Sea Shells": "Sea Shells lookup table (JakkOfKlubs)",
	"Semaphore": "Semaphore optimized (Nanthelas)",
	"Silly Slots": "Silly Slots optimized (WhiteShadowZz)",
	//"Square Button": "Square Button optimized (Timwi)",
	"The Festive Jukebox": "The Festive Jukebox optimized (Timwi)",
	"The Jukebox": "The Jukebox optimized (Timwi)",
	"The Screw": "The Screw condensed (JakkOfKlubs)",
	"Tic Tac Toe": "Tic Tac Toe optimized (samfundev)",
	"Two Bits": "Two Bits optimized (Nanthelas)"
}
let emmaAltManuals = {

}
let psAltManuals = {

}
let flawAltManuals = {
	"Turn The Keys": "Turn The Keys optimized (Timwi)",
	"English Test": "English Test optimized (Timwi)"
}

let vanillasAltManuals = {
	'Complicated Wires': 'Complicated Wires optimized (Stinggyray)',
	'The Button': 'The Button lookup table (Timwi)',
	"Morse Code": "Morse Code optimized (Timwi)",
	"Password": "Password optimized (Timwi)",
	"Wire Sequence": "Wire Sequence colored (Timwi)",
	"Wires": "Wires optimized (Timwi)",
	"Who's on First": "Who's on First alphabetized (Timwi)"
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
		let newEntry = {
			moduleName: altNames[entry] ?? entry,
			manualLink: altManuals[entry] ?? universalAltManuals[entry] ?? baseNameChanges[entry] ?? entry,
			iconName: altIcons[entry] ?? entry,
			originalManualLink: baseNameChanges[entry] ?? entry
		};
		newEntry.pageExists = fs.existsSync(path.join(__dirname, '../static/' + newEntry.manualLink + ".html"))
		newConstructedList.push(newEntry);
	});

	return newConstructedList;
}

sting = transcodeProfile(sting, stingAltManuals);
yoshi = transcodeProfile(yoshi, yoshiAltManuals);
emma = transcodeProfile(emma, emmaAltManuals);
ps = transcodeProfile(ps, psAltManuals);
vanillas = transcodeProfile(vanillas, vanillasAltManuals);
flaw = transcodeProfile(flaw, flawAltManuals);

module.exports = (name) => {
	switch(name) {
		case "sting": return sting;
		case "yoshi": return yoshi;
		case "emma": return emma;
		case "ps": return ps;
		case "vanillas": return vanillas;
		case "flaw": return flaw;
	}
}
