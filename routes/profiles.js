let sting = require('../json/profiles/Sting.json');
let yoshi = require('../json/profiles/Yoshi.json');
let emma = require('../json/profiles/Emma.json');
let vanillas = require('../json/profiles/Vanilla.json');
let flaw = require('../json/profiles/Flaw.json');
let victoria = require('../json/profiles/Victoria.json');
let crim = require('../json/profiles/Crim.json');
let terp = require('../json/profiles/Terp.json');
let kyler = require('../json/profiles/Kyler.json');
let centurion = require('../json/profiles/Centurion.json');
let bones = require('../json/profiles/Bones.json');
let jessie = require('../json/profiles/Jessie.json');

let modules = require('../json/modules.json');

let fs = require('fs');
let path = require('path');

let baseNameChanges = {
	"Morse Code Translated": "Morse Code all languages condensed (S.)",
	"Passwords Translated": "Password all languages condensed (S.)",
	"Venting Gas Translated": "Venting Gas all languages condensed (S.)",
	"Who's on First Translated": "Who's on First all languages condensed (S.)",
	"Who's That Monsplode?": "Who's That Monsplode"
}
let altIcons = {
	"Passwords Translated": "Password",
	"Big Button Translated": "The Button",
	"Who's on First Translated": "Who's on First",
	"Morse Code Translated": "Morse Code",
	"Venting Gas Translated": "Venting Gas",
	"Who's That Monsplode?": "Who's That Monsplode"
}
let altNames = {
	"Big Button Translated": "The Button Translated"
}
let universalAltManuals = {
	"Adventure Game": "Adventure Game condensed (samfundev)",
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
	"Broken Buttons": "Broken Buttons condensed (Freelancer1025, Stinggyray)",
	"Chess": "Chess optimized (Timwi)",
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
	"Morsematics": "Morsematics optimized (samfundev)",
	"Orientation Cube": "Orientation Cube optimized (CaitSith2)",
	"Piano Keys": "Piano Keys embellished (Rexkix)",
	"Plumbing": "Plumbing condensed (Timwi)",
	"Probing": "Probing condensed (Stinggyray)",
	"Rock-Paper-Scissors-Lizard-Spock": "Rock-Paper-Scissors-Lizard-Spock embellished (Rexkix)",
	"Round Keypad": "Round Keypad embellished (Stinggyray)",
	"Silly Slots": "Silly Slots optimized (WhiteShadowZz)",
	"Simon Screams": "Simon Screams condensed fixed (samfundev)",
	"Simon States": "Simon States condensed (Nanthelas)",
	"Switches": "Switches lookup table (Stinggyray)",
	"Text Field": "Text Field optimized (Timwi)",
	"The Bulb": "The Bulb lookup table (Elias)",
	"Third Base": "Third Base alphabetized (Timwi)",
	"Wire Placement": "Wire Placement embellished (Timwi)",
	"Who's That Monsplode?": "Who's That Monsplode colored",
	"Word Search": "Word Search lookup table (Elias)",
	"Prime Encryption": "Prime Encryption lookup table (Eltrick)",
	"Zoo": "Zoo embellished (samfundev)"
}
let stingAltManuals = {
	"Adjacent Letters": "Adjacent Letters lookup table (samfundev & Elias)",
	"Astrology": "Astrology lookup table (Elias & samfundev)",
	"Backgrounds": "Backgrounds condensed (ZekNikZ)",
	"Bitmaps": "Bitmaps condensed (Stinggyray)",
	"Blind Maze": "Blind Maze interactive (samfundev)",
	"Chess": "Chess optimized (Timwi)",
	"Chord Qualities": "Chord Qualities optimized (Timwi)",
	"Cooking": "Cooking condensed (Lebossle)",
	"Coordinates": "Coordinates optimized (Blananas2)",
	"Creation": "Creation lookup table (JakkOfKlubs & Stinggyray)",
	"Double-Oh": "Double-Oh embellished (samfundev)",
	"Festive Piano Keys": "Festive Piano Keys optimized (JakkOfKlubs)",
	"Flags": "Flags optimized (Timwi)",
	"LED Encryption": "LED Encryption lookup table (JakkOfKlubs)",
	"Logic": "Logic optimized (Stinggyray)",
	"Mafia": "Mafia optimized (Timwi)",
	"Microcontroller": "Microcontroller optimized (Elias)",
	"Neutralization": "Neutralization lookup table (Timwi)",
	"Perplexing Wires": "Perplexing Wires lookup table (ZekNikZ)",
	"Perspective Pegs": "Perspective Pegs condensed (Stinggyray)",
	"Resistors": "Resistors condensed (Nanthelas)",
	"Rubik's Cube": "Rubik's Cube lookup table (Katarina)",
	"Safety Safe": "Safety Safe condensed (samfundev & Stinggyray)",
	"Skewed Slots": "Skewed Slots optimized (Timwi)",
	"The Festive Jukebox": "The Festive Jukebox optimized (Timwi)",
	"The Gamepad": "The Gamepad lookup table (Timwi)",
	"The Jukebox": "The Jukebox optimized (Timwi)",
	"Two Bits": "Two Bits optimized (Nanthelas)",
	"Waste Management": "Waste Management in code form (Timwi & Stinggyray)",
	"Web Design": "Web Design optimized (samfundev)"
}
let yoshiAltManuals = {
	"Astrology": "Astrology lookup table (Elias & samfundev)",
	"Chess": "Chess optimized (Timwi)",
	"Color Generator": "Color Generator lookup table (Timwi)",
	"Complicated Buttons": "Complicated Buttons optimized (Timwi)",
	"Connection Check": "Connection Check optimized (Elias)",
	"Follow the Leader": "Follow the Leader condensed (Nanthelas)",
	"Ice Cream": "Ice Cream lookup table (Timwi)",
	"LED Encryption": "LED Encryption lookup table (JakkOfKlubs)",
	"Logic": "Logic optimized (LeGeND)",
	"Mafia": "Mafia optimized (Timwi)",
	"Microcontroller": "Microcontroller optimized (Elias)",
	"Neutralization": "Neutralization lookup table (Timwi)",
	"Number Pad": "Number Pad lookup table (CaitSith2)",
	//"Perplexing Wires": "Perplexing Wires lookup table (ZekNikZ)",
	"Piano Keys": "Piano Keys condensed (LeGeND)",
	"Rhythms": "Rhythms optimized (samfundev)",
	"Sea Shells": "Sea Shells lookup table (JakkOfKlubs)",
	"Semaphore": "Semaphore optimized (Nanthelas)",
	"Square Button": "Square Button optimized (Timwi)",
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

let victoriaAltManuals = {
	"LED Encryption": "LED Encryption lookup table (JakkOfKlubs)",
}
let crimAltManuals = {
	"Adventure Game": "Adventure Game condensed (samfundev)",
	"Backgrounds": "Backgrounds condensed (ZekNikZ)",
	"Number Pad": "Number Pad lookup table (CaitSith2)",
	"The Jukebox": "The Jukebox optimized (Timwi)",
	"Connection Check": "Connection Check optimized (Elias)",
	"Astrology": "Astrology lookup table (Elias & samfundev)",

}
let terpAltManuals = {

}
let kylerAltManuals = {

}
let bonesAltManuals = {

}
let jessieAltManuals = {

}

let centurionList = JSON.parse(JSON.stringify(centurion.EnabledList));
centurionList = new Set(centurionList.map((s) => modules[s]).sort((a, b) => {
	function getRaw(s) {
		return s.replace(/^The /, '').trim();
	}
	return getRaw(a).localeCompare(getRaw(b));
}));

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
			originalManualLink: baseNameChanges[entry] ?? entry,
			centurion: centurionList.has(entry)
		};
		newEntry.pageExists = fs.existsSync(path.join(__dirname, '../static/' + newEntry.manualLink + ".html"))
		newConstructedList.push(newEntry);
	});

	return newConstructedList;
}

centurion = transcodeProfile(centurion, {});
sting = transcodeProfile(sting, stingAltManuals);
yoshi = transcodeProfile(yoshi, yoshiAltManuals);
emma = transcodeProfile(emma, emmaAltManuals);
vanillas = transcodeProfile(vanillas, vanillasAltManuals);
flaw = transcodeProfile(flaw, flawAltManuals);
victoria = transcodeProfile(victoria, victoriaAltManuals);
crim = transcodeProfile(crim, crimAltManuals);
terp = transcodeProfile(terp, terpAltManuals);
kyler = transcodeProfile(kyler, kylerAltManuals);
bones = transcodeProfile(bones, bonesAltManuals);
jessie = transcodeProfile(jessie, jessieAltManuals);

module.exports = (name) => {
	switch(name) {
		case "sting": return sting;
		case "yoshi": return yoshi;
		case "emma": return emma;
		case "terp": return terp;
		case "crim": return crim;
		case "victoria": return victoria;
		case "centurion": return centurion;
		case "vanillas": return vanillas;
		case "flaw": return flaw;
		case "kyler": return kyler;
		case "bones": return bones;
		case "jessie": return jessie;
	}
}
