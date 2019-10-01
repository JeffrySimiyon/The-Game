alert("Welcome to the adventure game The Dragon Slayer");

alert("One day you wake up and decide to go to the tavern to look for more epic quests. When you arrive at the tavern you see a bulletinboard where you see a quest for someone to slay the dragon who kidnapped people and put them in his cave in the mountains, you ask yourself if it is really worth it to put yourself in danger for this quest, until you see the reward you could get for this quest: The loot the dragon guards and a large sum of gold from the townspeople.");

name = prompt("What's your name brave warrior?");

answer = alert("Welcome " + name + "! Press OK to start your journey");

question1 = prompt("You go to the tavern at 6 o'clock. You look at the bulletinboard for quests. You decide to:\n1) You go home and take a break from adventuring.\n2) You accept the Dragons quest and you go to the wizard to get help.\n3) You accept the quest and explore the Dragons Cave on your own.\n\nType 1,2 or 3");
if (question1 == 1) {
	alert("You go home and you see your wife cheating on you.\nYou go to the weapons smith to buy a katana, after that you went to your parents grave and commited seppuku.\nIn your dying breath you said 'I failed in life.'\n\nGAME OVER");
}

else if (question1 == 2) { 
	wizardwin = prompt("You choose to go to the wizard. You're asking the wizard for help.\nHe doesn't like to help people, but cause you're the only one who's brave enough to fight the dragon he's willing to help you.\nYou two go on an adventure to defeat the dragon together. You're on your way to defeat the dragon. You're intrested in his powers so you ask him questions about his magical powers. The wizard asked: 'Do you also want to be a wizard?'. You replied to him with:\n1) 'No, I'm not intrested in magic.'\n2) 'Yes, I want to become a wizard so I can defeat the dragon with magic!'\n3) 'Yes, I want to become a wizard but after we defeat the dragon!'\n\nType 1,2 or 3");
	if (wizardwin == 1) {
		alert("You choose not to learn how to use magic. You arrived at the Dragons Cave and found the dragon. You both try to defeat the dragon, but you can't cause you didn't want to learn any magic. You are deafeated by the dragon!\n\nGAME OVER!");
	}
	else if (wizardwin == 2) {
		magic = alert("You choose to learn magic. You're going to the Dragons Cave. While traveling you've learned the basics of magic. You discuss how you two are going to defeat the dragon. The wizard predicts that the chances of winning the battle is 40% cause you also know some magic. Otherwise it would've been 25% chance of winning. You enter the Dragons Cave carefully.\n\nPress OK to start the battle!");
		alert("You fought like a true warrior! You've deafeated the Dragon! You saw the hostages and saved them. The hostages were so happy that they gave you lot of money and they built a statue in the center of the town. *5 YEARS LATER* The town is getting attacked by the Titans. The villagers are evacuating the west-side of the twn, because the town walls have been broken. WARRIOR PLEASE HELP US!!!\n\n TO BE CONTINUED?");
	}
	else if (wizardwin == 3) {
		magiclate = prompt("You've chosen not to learn magic before you defeat the dragon. You enter the Dragons Cave carefully with the wizard. You fight like a real warrior, but unfortunately the wizard dies in the battle. What are you going to do now? You're not strong enough to do this on your own.\n1) You accept that you're pathetic and that you have been deafeated and die like a real warrior.\n2) You're going to run away and hide yourself outside the town, because you're a shame to the humanity.\n\nType 1 or 2.");
		if (magiclate == 1) {
			alert("You've fought well, but you were too pathetic and died cause you didn't learn any magic. You died in battle, but you're a warrior who at least tried to defeat the dragon. The villagers are proud of you, but that doesn't matter since you're dead!\n\n GAME OVER!");
		}
		else {
			alert("You're a shame to humanity. You've let the wizard and the hostages die by running away. You hide outside the town for 3 years, but you get sick and die\n\nGAME OVER");
		}
	}
}

else if (question1 == 3) {
	solopath = prompt("You are confident enough and choose to accept the quest to defeat the dragon. You're packing you equipment and you go to the Black Forest in the west-side of the town. The forest has a thick fog. You can't really see that well in the forest. What are you going to do?\n1) You're gonna rush trough the fog.\n2) You're gonna take it easy and proceed the forest carefully.\n\nType 1 or 2.");
	if (solopath == 1) {
		rushforest = prompt("You chose to rush trough the forest. Unfortunately you've lost some equipment in the forest and now you're stuck in the forest. There seemed to be no way out. You don't have much food left anymore, because you lost a lot of food. What do you want to do now?\n1) You try to go back to the village, because you're not that deep in the forest.\n2) You eat some berries you've found in the forest and try to find the Dragons Cave");
		if (rushforest == 1) {
			alert("You try to find the way back to the village. You've travelled far, but unfortunately you haven't found your village. You also had not much food and water so you starved to death.\n\nGAME OVER!");
		}
		else if (rushforest == 2) {
			alert("You really want to find the Dragons Cave, so you took some delicious looking berries and you ate it while searching for the cave. You somehow found the village, BUT WAIT! It isn't what it looks like. You thought you found the village, but it's just your imagination. You're just hallucinating, because of the berries you ate. Apparently the berries are very poisonous! You went crazy and kept running away from your hallucinations. You started to slow down and you became really weak, after a couple of hours you died.\n\nGAME OVER!")
		}
	}
	else if (solopath == 2) {
		slowforest = prompt("You choose to take it easy. You're proceeding the forest carefully, cause of the fog. You've made a good decision. You're still on your way to the Dragons Cave, but on your way you see a girl crying next to a small lake in the forest. What would you like to do?\n1) Ignore the girl and go further with your journey.\n2) You carefully go to the girl and talk to her.\n\nType 1 or 2.");
	}	
		if (slowforest == 1) {
			girlornot = prompt("You ignore the girl and just walk further. You finally found the Dragons Cave. You try to defeat the Dragon on your own, but you're not strong enough! What are you gonna do now?\n1) Give up and die!\n2) You try to go back to the girl near the lake.")
			if (girlornot == 1) {
				alert("You are way too pathetic and too weak to defeat the dragon!\n\nGAME OVER!")
			}
			else if (girlornot == 2) {
				alert("You run away from the dragon. You luckily escaped and now your finding your path back to the girl. You found the lake, but she wasn't there anymore. You decide to just everything you got to defeat the dragon, but there was a pack of giant wolves. Their favourite food is humanflesh... The wolves ate you and there was nothing left anymore.\n\nGAME OVER!")
			}
		}
		else if (slowforest == 2) {
			alert("You slowly approached the girl. She looked scary, but she's actually a nice girl. You asked her to help to defeat the dragon, because you want to save the village. She agreed to help you defeat the dragon, because her parents died cause of the dragon. You found the Dragons Cave and entered it. You were fighting with everything you got! When you two started to lose the girl used her paranormal powers to help you defeat the dragon. You've killed the dragon and saved the hostages!\n\nYOU WON THE GAME!")
		}
	}
else {
	alert("Unavailable option!")
}