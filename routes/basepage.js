let phrases = [
	"Now with 100% more elbow grease!",
	"Hold on Crazy Talk while I solve this needy.",
	"Who's the one with the loud keyboard?",
	"Imagine an imaginary menagerie manager imagining managing an imaginary menagerie.",
	"Who the fuck enabled Hyperneedy?",
	"Dammit, you struck. Now I can't do Simon anymore.",
	"I'm angry! I'm fed up! I'm enraged! I've had it!",
	"\"fuck you bitch\"<br> -Yoshi",
	"POV: Flaw has just struck for the third time on Needy Math and you're in the middle of doing Forget Me Not",
	">tfw you find out you had 4 in 2 and Lit BOB after doing Laundry",
	"Wait, we have a souvenir????",
	"Flaw forgets me. Flaw forgets me not. Flaw forgets me. Flaw forgets me not.",
	"WHO THOUGHT IT WAS A GOOD IDEA TO ENABLE ALL 5 COLORED SQUARES???",
	"Sorry, the website is not available today. It suddenly decided it wanted to drive to Wisconsin.",
	"\"Yango\"<br> -Sting",
	"Welcome to Coffeebucks, may I take your order?",
	"Don't wash tennis balls.",
	"Wanna dance on a vent together?",
	"!p dQw4w9WgXcQ",
	"Fire Yoshi and hire Noah.",
	"Sorry, the website is too mentally drained to give you manual pages today.",
	"It's the one with the sea shells.",
	"Your coordinate is the I with a gun, the cross, and the weird volcano.",
	"Insane Talk failed to connect to the Internet. Press any button to solve.",
	"I haven't defused a bomb in a fortnight, and we still blindered this one. I'm chuffed.",
	"It's Wednesday, so your pound of broccoli costs $9.31.",
	"...Aren't you supposed to ask me a question for Friendship?",
	"ERR: WebsiteSplashText.php has crashed. Please reload.",
	"The buttons aren't colored? I'm rejecting this website.",
	"\"NOOOO! YOU CAN'T JUST RUN AROUND THE MAZE AIMLESSLY! YOU'RE SUPPOSED TO HELP ME SOLVE IT!\"<br>\"haha mouse go brrrrrrr\"",
	"Okay, this is getting out of hand. Who put Valorant on a bomb?",
	"calamari",
	"India Mike Golf Alpha Yankee",
	"Deformed Man Toilet",
	"FUCK THE CERTAIN PRICE OF GOODS",
	"I am disorder",
	"Okay Sting, I need you on Double-Oh... wait, why is the display red?",
	"Don't tell Flaw, but I set the translated modules language to Chinese.",
	".. / .... .- - . / -- --- .-. ... . / -.-. --- -.. .",
	"Third Base is not the module I was expecting from that name.",
	"L' R' R R R' L B' F' B F is your moves for Rubik's Cube... wait.",
	"You've seen Blind Alley, you've seen Deaf Alley, but have you seen Sensory Deprivation Alley?",
	"They're similar but different, mandarins and oranges",
	"Did Flaw build this bomb? It's just a box with extra steps...",
	"I'm too lazy to do this module. It takes more than two clicks...",
	"Okay, why is this module asking me to derive the 2nd Fundamental Law of Calculus?",
	"It's called the Centurion because it takes a century to find enough people to do it.",
	"Cause of Explosion: Your dumb ass",
	"I am stupid. The display actually is \"Blank\"",
	"THIS MODULE HAS BEEN SPONSORED BY RAID SHADOW LEGENDS",
	"How Can Mirrors Be Real If Our Eyes Aren't Real",
	"Wait, I need to click <i>how</i> many times per second?",
	"If this bomb explodes, you're following the wrong political leader.",
	"Moves like Jagger? Not with that motion sense of yours.",
	"No success? I guess your zodiac was under the wrong planet's influence.",
	"Simon screams at your incompetence.",
	"They say Monopoly ruins friendships. They have not tried KTANE.",
	"holy shit you are bad at directions"
]

let profiles = require('./profiles.js');

let moduleList = {
	sting: profiles('sting'),
	yoshi: profiles('yoshi'),
	emma: profiles('emma'),
	ps: profiles('ps'),
	vanillas: profiles('vanillas'),
	flaw: profiles('flaw')
}

module.exports.set = (app) => {
	app.get('/', (req, res) => {
		let curPhrase = phrases[Math.floor(Math.random() * phrases.length)];
		res.render('index', {phrase: curPhrase, modules: moduleList});
	});
}
