document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.getElementById("add-button");
    const newSentenceInput = document.getElementById("new-sentence");
    const sentencesList = document.getElementById("sentences");
    const searchBar = document.getElementById("search-bar");
    const clearButton = document.getElementById("clear-button");
    //const removeAllResponsesButton = document.getElementById("remove-all-responses-button");
    const responseInput = document.getElementById("response-input");
    const addResponseButton = document.getElementById("add-response-button");
    const responseText = document.getElementById("response-text");
    const removeSelectedResponsesButton = document.getElementById("remove-selected-responses-button");
  
  
    let sentences = [
      {
        "responses": [
          "Han the Broker"
        ],
        "sentence": "What is the name of the broker residing in Magatia?"
      },
      {
        "responses": [
          "Mr. Goldstein"
        ],
        "sentence": "What is the name of the buddy list admin in Lith Harbor?"
      },
      {
        "responses": [
          "Robert Holly"
        ],
        "sentence": "What is the name of the buddy list admin in Ludibrium?"
      },
      {
        "responses": [
          "Moppie"
        ],
        "sentence": "What is the name of the dog sitting next to the Dimensional Mirror in Orbis?"
      },
      {
        "responses": [
          "Anthony"
        ],
        "sentence": "What is the name of the current council president in Edelstein?"
      },
      {
        "responses": [
          "Albert"
        ],
        "sentence": "What is the name of the former council president in Edelstein?"
      },
      {
        "responses": [
          "Selene"
        ],
        "sentence": "What is the name of the grandma guarding the Great Temple in Pantheon?"
      },
      {
        "responses": [
          "Helmsman Tanya"
        ],
        "sentence": "What is the name of the helmsman of Riena Strait Glacial Observatory?"
      },
      {
        "responses": [
          "Humanoid A"
        ],
        "sentence": "What is the name of the Humanoid residing in Magatia?"
      },
      {
        "responses": [
          "Noi"
        ],
        "sentence": "What is the name of the kid monk in front of the Golden Temple entrance?"
      },
      {
        "responses": [
          "Gali"
        ],
        "sentence": "What is the name of the merchant on the Nautilus?"
      },
      {
        "responses": [
          "Mar the Fairy"
        ],
        "sentence": "What is the name of the pet master in Ellinia?"
      },
      {
        "responses": [
          "Aldin"
        ],
        "sentence": "What is the name of the plastic surgeon in Ariant?"
      },
      {
        "responses": [
          "Lila"
        ],
        "sentence": "What is the name of the skin care expert in Ariant?"
      },
      {
        "responses": [
          "Seppy"
        ],
        "sentence": "What is the name of the storage keeper in Ludibrium?"
      },
      {
        "responses": [
          "Pusla"
        ],
        "sentence": "What is the name of the storage keeper in Rien?"
      },
      {
        "responses": [
          "Dondlass"
        ],
        "sentence": "What is the name of the storage keeper on the Nautilus?"
      },
      {
        "responses": [
          "Brighton"
        ],
        "sentence": "What is the name of the streetsweeper in Edelstein?"
      },
      {
        "responses": [
          "Checky"
        ],
        "sentence": "What is the name of the town mascot of Edelstein?"
      },
      {
        "responses": [
          "Karin"
        ],
        "sentence": "What is the name of the upcoming merchant in Pantheon?"
      },
      {
        "responses": [
          "Crane"
        ],
        "sentence": "What is the name of the warp helper in Herb Town?"
      },
      {
        "responses": [
          "Zaid"
        ],
        "sentence": "What is the name of the weapon merchant in Ariant?"
      },
      {
        "responses": [
          "Morgan"
        ],
        "sentence": "What is the name of the weapon seller on the Nautilus?"
      },
      {
        "responses": [
          "JM From tha Streetz"
        ],
        "sentence": "Who in Kerning City can repair items?"
      },
      {
        "responses": [
          "Chrishrama"
        ],
        "sentence": "Who is the item creator in front of the Sleepywood Hotel?"
      },
      {
        "responses": [
          "Ms. Tang"
        ],
        "sentence": "Who is the merchant in the Golden Temple?"
      },
      {
        "responses": [
          "Mason"
        ],
        "sentence": "Who is the merchant in Gold Beach Resort?"
      },
      {
        "responses": [
          "Dances with Balrog"
        ],
        "sentence": "Who is the warrior job instructor in the Warriors' Sanctuary?"
      },
      {
        "responses": [
          "River"
        ],
        "sentence": "Who is the weapon seller in Perion?"
      },
      {
        "responses": [
          "Jake"
        ],
        "sentence": "Who is the subway worker next to the Ticket Gate in Kerning City?"
      },
      {
        "responses": [
          "Puno"
        ],
        "sentence": "Are you asking me if I can see in front of me? Of course I can!"
      },
      {
        "responses": [
          "No Gong"
        ],
        "sentence": "Do you want to learn how to achieve spiritual enlightenment?"
      },
      {
        "responses": [
          "Arwen the Fairy"
        ],
        "sentence": "Grendel the Really Old is not a bad person, but his students..."
      },
      {
        "responses": [
          "Geanie"
        ],
        "sentence": "If you have the Scroll of Secrets, give it to me!"
      },
      {
        "responses": [
          "Anne"
        ],
        "sentence": "I can only do this by myself for so long..."
      },
      {
        "responses": [
          "Patience"
        ],
        "sentence": "I can't wait for these kits to grow up!"
      },
      {
        "responses": [
          "Moonbeam"
        ],
        "sentence": "I found him, so I'll take care of him!"
      },
      {
        "responses": [
          "Elex"
        ],
        "sentence": "I gotta say, I look pretty good in an apron."
      },
      {
        "responses": [
          "Timber"
        ],
        "sentence": "I need more firewood for the furnace."
      },
      {
        "responses": [
          "Mr. Ku"
        ],
        "sentence": "I need to send these herbs to Tae Sang fast..."
      },
      {
        "responses": [
          "Fenelle"
        ],
        "sentence": "I serve the ancient Nova deities."
      },
      {
        "responses": [
          "Harry"
        ],
        "sentence": "I will never let go of thieves who try to steal from me."
      },
      {
        "responses": [
          "Lisa"
        ],
        "sentence": "I'm worried that monsters these days are much more ferocious..."
      },
      {
        "responses": [
          "Olaf"
        ],
        "sentence": "Just look at me! So strong. Don't be jealous."
      },
      {
        "responses": [
          "Do Gong"
        ],
        "sentence": "Life is transitory. As time passes, the world will change."
      },
      {
        "responses": [],
        "sentence": "My friend Arwen is still pretty uncomfortable around humans."
      },
      {
        "responses": [
          "Potter"
        ],
        "sentence": "My hands aren't what they used to be. I really need to get me an apprentice..."
      },
      {
        "responses": [
          "Bastille"
        ],
        "sentence": "Nice weather, isn't it? It's a greay day to enjoy a walk with my pet, Muffins."
      },
      {
        "responses": [
          "Rodos"
        ],
        "sentence": "Nothing like a good set of Pirate digs, mates!"
      },
      {
        "responses": [
          "Faculty Head Kalayan"
        ],
        "sentence": "Outsiders can never be trusted."
      },
      {
        "responses": [
          "Valerie"
        ],
        "sentence": "Pirates are the best! You want a piece of me?"
      },
      {
        "responses": [
          "Wing the Fairy"
        ],
        "sentence": "So much homework... And so much studying to do... Man, I'm swamped."
      },
      {
        "responses": [
          "Alviola"
        ],
        "sentence": "That smell in the air sure does make the fur stand up, don't it?"
      },
      {
        "responses": [
          "Olson"
        ],
        "sentence": "This room is not open to the public."
      },
      {
        "responses": [
          "Lakelis"
        ],
        "sentence": "We must work together."
      },
      {
        "responses": [
          "Cootie the Really Small"
        ],
        "sentence": "Where are all my research notes? And my fairy comics?"
      },
      {
        "responses": [
          "Lumps"
        ],
        "sentence": "Won't somebody bring me some food? I'm starving?"
      },
      {
        "responses": [
          "Bavan"
        ],
        "sentence": "Work is important, but eating is crucial!"
      },
      {
        "responses": [
          "Sabitrama"
        ],
        "sentence": "I'm collecting herbs..."
      },
      {
        "responses": [
          "Putan"
        ],
        "sentence": "The seas have grown fat as an orca, eh?"
      },
      {
        "responses": [
          "Bear Grills",
          "Beelzebub",
          "Big Brother",
          "Big Carl",
          "Botichelli",
          "Cocatris",
          "Diablow",
          "Emuloch",
          "Navy Captain",
          "Von Venom"
        ],
        "sentence": "Which of these bosses has NEVER appeared in MapleStory?"
      },
      {
        "responses": [
          "Come Back Chair",
          "Diamond Bath",
          "First Love Chair",
          "Last Year Sergeant Chair",
          "March Bunny Chair",
          "Mammoth Chair",
          "Money Cushion",
          "Rappy's Persimmon Chair",
          "Valentine's Cursed Chair",
          "Wheelchair"
        ],
        "sentence": "Which of these chairs does NOT exist in MapleStory?"
      },
      {
        "responses": [
          "Aqua Aqua",
          "Cunning City",
          "Edinburgh",
          "El Segundo",
          "Fenesys",
          "Frankenstein",
          "Margaret",
          "Sacramento",
          "Sleeping Forest",
          "Swan Town"
        ],
        "sentence": "Which of these cities does NOT exist in MapleStory?"
      },
      {
        "responses": [
          "Loving Chocolate",
          "Fairy Sand",
          "Hyacinth Juice",
          "Kryptonite Ore",
          "Magnus Sweat",
          "Nickel",
          "Penicillin",
          "Pulsatilla Seed",
          "Used Fabric",
          "Zakum Phlegm"
        ],
        "sentence": "Which of these is NOT a crafting item in MapleStory?"
      },
      {
        "responses": [
          "Beatstick",
          "Doombringer",
          "Facebuster",
          "Forked Spear",
          "Gallant Wings",
          "Lion's Fang",
          "Lunar Glory",
          "Pioneer's Dual Wings",
          "Twin Zephyrs",
          "Wooden Mallet"
        ],
        "sentence": "Which of these is NOT a one-handed weapon?"
      },
      {
        "responses": [
          "Blaze Defense",
          "Blessing",
          "Chase",
          "Divine Sword",
          "Faint Prayer",
          "Haste",
          "Lightning Action",
          "Mendable Claw",
          "Ordinance",
          "Regal Stretch"
        ],
        "sentence": "Which of these is NOT a Paladin skill?"
      },
      {
        "responses": [
          "Chase Cut",
          "Dead Or Alive",
          "Heavy Hammer",
          "Hyper Buting",
          "Pink Punch",
          "Really Angry Fist",
          "Scuffle",
          "Sleeper Hold",
          "Stumping A Mudhole",
          "Super Mega Awesome Punch"
        ],
        "sentence": "Which of these is NOT a Shade skill?"
      },
      {
        "responses": [
          "Draw Mana"
        ],
        "sentence": "Which of these is NOT a skill of a Battle Mage?"
      },
      {
        "responses": [
          "Fast Reload"
        ],
        "sentence": "Which of these is NOT a skill of a Cannoneer?"
      },
      {
        "responses": [
          "Exploding Arrows"
        ],
        "sentence": "Which of these is NOT a skill of a Marksman?"
      },
      {
        "responses": [
          "Claymore"
        ],
        "sentence": "Which of these is NOT a skill of a Mechanic?"
      },
      {
        "responses": [
          "Double Shot Witcher"
        ],
        "sentence": "Which of these is NOT a skill of a Wind Archer?"
      },
      {
        "responses": [
          "Soul Plunger"
        ],
        "sentence": "Which of these is NOT a skill of Mihile?"
      },
      {
        "responses": [
          "Perfect Sense"
        ],
        "sentence": "Which of these is NOT a skill of Phantom?"
      },
      {
        "responses": [
          "Mind Flayer"
        ],
        "sentence": "Which of these is NOT a skill of the Demon Slayer?"
      },
      {
        "responses": [
          "Collateral Flash"
        ],
        "sentence": "Which of these is NOT a skill of the Night Walker?"
      },
      {
        "responses": [
          "Imagination Boost"
        ],
        "sentence": "Which of these is NOT a skill of the Swordsman?"
      },
      {
        "responses": [
          "Crimson Cutter",
          "Cross Line",
          "Deadly Action",
          "Double Stretch",
          "Fighting Stumble",
          "File Driver",
          "Low Blow",
          "Mega Power Bomb",
          "Moon Assault",
          "Psychic Tracer"
        ],
        "sentence": "Which of these is NOT a Zero skill?"
      },
      {
        "responses": [
          "Aqua Aquarium",
          "Basement Training Ground",
          "BigWigs",
          "Black Bunny Farm",
          "Black House",
          "Cave House",
          "Empress Prayer House",
          "Fish Farm",
          "Fruit Farm",
          "Heaven's Hammer",
          "Hideout",
          "Maple Aquatic House",
          "Maple Water Park",
          "Mushroomy Mine",
          "Organic Mud House",
          "Pantheon Temple",
          "Psychic Audition Hall",
          "Puriel House",
          "Shammos' Storage Room",
          "Sushi House"
        ],
        "sentence": "Which of these is NOT in Monster Life?"
      },
      {
        "responses": [
          "Alchemist's Handmade Gloves",
          "Blessed Sunglasses",
          "Donkey's Chef Hat",
          "Frantic Hair Pin",
          "Minotaurus Nose Ring",
          "Phoenix Dandruff",
          "Single's Curse Promise Ring",
          "Sugar's Tiny Cane",
          "Ultimate Harp Helm",
          "Venom Buccaneer"
        ],
        "sentence": "Which of these items does NOT exist in MapleStory?"
      },
      {
        "responses": [
          "Crimson Bull",
          "Fairy Dew",
          "Fancy Cheese",
          "Lukewarm Juice",
          "Purple Potion",
          "Smoked Salmon",
          "Wizard's Toenail",
          "Year of Horse Cleansing Potion",
          "Year of Horse Resistance Potion",
          "Zakum's Breath"
        ],
        "sentence": "Which of these items is NOT a consumable item?"
      },
      {
        "responses": [
          "Art Lulu",
          "Bling Bling Iron Cannon",
          "Blurry Cannon",
          "Click Click Boom",
          "Crimson Bull",
          "Cursed Black Cannon",
          "Dragonic Deck Sweeper",
          "Handcrafted Ignite Crash",
          "Necro Beryl Cannon",
          "Used Toy Cannon"
        ],
        "sentence": "Which of these items is NOT a hand cannon?"
      },
      {
        "responses": [
          "Art Designer",
          "Bard",
          "Beast Lord",
          "Blue Mage",
          "Cannon Puncher",
          "Demon Hunter",
          "Eric",
          "Necromancer",
          "Water Dancer",
          "Wind Runner"
        ],
        "sentence": "Which of these jobs does NOT exist in MapleStory?"
      },
      {
        "responses": [
          "Blaze Wizard",
          "Night Walker"
        ],
        "sentence": "Which of these jobs is a part of the Cygnus Knights?"
      },
      {
        "responses": [
          "Bishop",
          "Dual Blade",
          "Marksman"
        ],
        "sentence": "Which of these jobs is a part of the Explorers?"
      },
      {
        "responses": [
          "Luminous",
          "Mercedes"
        ],
        "sentence": "Which of these jobs is a part of the Legendary Heroes?"
      },
      {
        "responses": [
          "Angelic Buster",
          "Kaiser"
        ],
        "sentence": "Which of these jobs is a part of the Nova race?"
      },
      {
        "responses": [
          "Demon Avenger",
          "Xenon"
        ],
        "sentence": "Which of these jobs is a part of the Resistance?"
      },
      {
        "responses": [
          "Bertus",
          "Corbie",
          "Dark Cactus",
          "Downey",
          "Fenelle",
          "Mountable Golem",
          "Red Peppers",
          "Sledge Hammer",
          "Sharplan",
          "Solarion"
        ],
        "sentence": "Which of these monsters does NOT exist in MapleStory?"
      },
      {
        "responses": [
          "Birk"
        ],
        "sentence": "Which of these monsters is NOT a canine?"
      },
      {
        "responses": [
          "Spore"
        ],
        "sentence": "Which of these monsters is NOT a Mammal?"
      },
      {
        "responses": [
          "OctoPirate"
        ],
        "sentence": "Which of these monsters is NOT a plant?"
      },
      {
        "responses": [
          "Blue Flower Serpent",
          "Jr. Wraith"
        ],
        "sentence": "Which of these monsters is NOT a reptile?"
      },
      {
        "responses": [
          "Antoinette",
          "Goby"
        ],
        "sentence": "Which of these monsters is NOT enchanted?"
      },
      {
        "responses": [
          "Water Thief Monster"
        ],
        "sentence": "Which of these monsters is NOT from the Nihal Desert?"
      },
      {
        "responses": [
          "Ancient Insectivore Slimes",
          "Ancient Mushroom Bat",
          "Ancient Red Turtle",
          "Black Thorny Bear",
          "Blue Ancient Beetle",
          "Blue Mushroom Bat",
          "Crocodile",
          "Murupa",
          "Roolang",
          "Yellow Flower Cow"
        ],
        "sentence": "Which of these monsters is NOT in the Tower of Oz?"
      },
      {
        "responses": [
          "Captain Latancia"
        ],
        "sentence": "Which of these monsters is NOT live in the sea?"
      },
      {
        "responses": [
          "Pink Bean",
          "Snipe of Competence"
        ],
        "sentence": "Which of these monsters is NOT undead?"
      },
      {
        "responses": [
          "Agamemnon",
          "Carno",
          "DJ Koo",
          "Giant Joe",
          "Harcourt",
          "Jacklyn",
          "Joe Bob",
          "Kaiso",
          "Stitch",
          "Sybil"
        ],
        "sentence": "Which of these people is NOT a resident in MapleStory?"
      }
    ];
  
    if (localStorage.getItem("sentences")) {
      sentences = JSON.parse(localStorage.getItem("sentences"));
      updateSentenceList();
    }
  
    /* addButton
    addButton.addEventListener("click", () => {
      const newSentence = newSentenceInput.value;
      if (newSentence.trim() !== "") {
        sentences.push({ sentence: newSentence, responses: [] });
        localStorage.setItem("sentences", JSON.stringify(sentences));
        newSentenceInput.value = "";
        updateSentenceList();
      }
    });
    */
    searchBar.addEventListener("input", () => {
      const searchText = searchBar.value.toLowerCase();
      const filteredSentences = sentences.filter(sentenceObj => sentenceObj.sentence.toLowerCase().includes(searchText));
      updateSentenceList(filteredSentences);
  
      if (searchText === "") {
        updateResponseList([]);
        updateResponseText("");
      } else {
        const selectedSentence = filteredSentences.length === 1 ? filteredSentences[0].sentence : "";
        updateResponseText(selectedSentence);
        if (filteredSentences.length === 0) {
          updateResponseList([]);
        } else {
          const sentenceWithResponse = sentences.find(sentenceObj => sentenceObj.sentence === selectedSentence);
          if (sentenceWithResponse) {
            updateResponseList(sentenceWithResponse.responses);
          }
        }
      }
    });
  
    clearButton.addEventListener("click", () => {
      sentences = [];
      localStorage.removeItem("sentences");
      updateSentenceList();
      updateResponseList([]);
      updateResponseText("");
    });
  /* Ignore
    removeAllResponsesButton.addEventListener("click", () => {
      const selectedSentence = responseText.dataset.sentence;
      if (selectedSentence) {
        const sentenceIndex = sentences.findIndex(sentenceObj => sentenceObj.sentence === selectedSentence);
        if (sentenceIndex !== -1) {
          sentences[sentenceIndex].responses = [];
          localStorage.setItem("sentences", JSON.stringify(sentences));
          updateResponseList([]);
        }
      }
    });
  */
 /* AddResponseButton
    addResponseButton.addEventListener("click", () => {
      const selectedSentence = responseText.dataset.sentence;
      const response = responseInput.value;
  
      if (selectedSentence && response.trim() !== "") {
        const sentenceIndex = sentences.findIndex(sentenceObj => sentenceObj.sentence === selectedSentence);
        if (sentenceIndex !== -1) {
          if (!sentences[sentenceIndex].responses) {
            sentences[sentenceIndex].responses = [];
          }
          sentences[sentenceIndex].responses.push(response);
          localStorage.setItem("sentences", JSON.stringify(sentences));
          responseInput.value = "";
          updateResponseList(sentences[sentenceIndex].responses);
          updateResponseText(selectedSentence);
        }
      }
    });
  */
 /*
    removeSelectedResponsesButton.addEventListener("click", () => {
      const selectedSentence = responseText.dataset.sentence;
      if (selectedSentence) {
        const sentenceIndex = sentences.findIndex(sentenceObj => sentenceObj.sentence === selectedSentence);
        if (sentenceIndex !== -1) {
          sentences[sentenceIndex].responses = [];
          localStorage.setItem("sentences", JSON.stringify(sentences));
          updateResponseList([]);
        }
      }
    });
  */
    sentencesList.addEventListener("click", (event) => {
      const clickedSentence = event.target.textContent;
      const sentenceWithResponse = sentences.find(sentenceObj => sentenceObj.sentence === clickedSentence);
  
      if (sentenceWithResponse) {
        const selectedSentence = sentenceWithResponse.sentence;
        updateResponseText(selectedSentence);
        updateResponseList(sentenceWithResponse.responses);
        responseInput.focus();
        // Clear highlighting from all sentences
        sentencesList.querySelectorAll("li").forEach(li => li.classList.remove("highlighted"));
        // Highlight the clicked sentence
        event.target.classList.add("highlighted");
      }
    });
  
    function updateSentenceList(sentencesToShow = sentences) {
      sentencesList.innerHTML = "";
      sentencesToShow.forEach(sentenceObj => {
        const li = document.createElement("li");
        li.textContent = sentenceObj.sentence;
        li.addEventListener("click", () => {
          const selectedSentence = sentenceObj.sentence;
          updateResponseText(selectedSentence);
          updateResponseList(sentenceObj.responses);
          responseInput.focus();
          // Clear highlighting from all sentences
          sentencesList.querySelectorAll("li").forEach(li => li.classList.remove("highlighted"));
          // Highlight the clicked sentence
          li.classList.add("highlighted");
        });
  /* RemoveButton [X]
        const removeSentenceButton = document.createElement("button");
        removeSentenceButton.textContent = "X";
        removeSentenceButton.addEventListener("click", (event) => {
          event.stopPropagation();
          removeSentence(sentenceObj.sentence);
        });
  
        li.appendChild(removeSentenceButton);
        */
        sentencesList.appendChild(li);
      });
    }
  
    function updateResponseList(responsesToShow) {
      
      const responseList = document.getElementById("responses");
      responseList.innerHTML = responsesToShow.map(response => `<li>${response}<button class="remove-response-button">X</button></li>`).join("");
      /*
      const removeResponseButtons = document.querySelectorAll(".remove-response-button");
      removeResponseButtons.forEach((button, index) => {
        button.addEventListener("click", (event) => {
          event.stopPropagation();
          removeResponse(responseList.children[index].textContent);
        });
      });
      */
    }
  
    function updateResponseText(selectedSentence) {
      const responseText = document.getElementById("response-text");
      responseText.textContent = selectedSentence ? "Answers for: " + selectedSentence : "";
      responseText.dataset.sentence = selectedSentence;
    }
  
    function removeSentence(sentence) {
      sentences = sentences.filter(sentenceObj => sentenceObj.sentence !== sentence);
      localStorage.setItem("sentences", JSON.stringify(sentences));
      updateSentenceList();
      updateResponseList([]);
      updateResponseText("");
    }
  
    function removeResponse(response) {
      const selectedSentence = responseText.dataset.sentence;
      if (selectedSentence) {
        const sentenceIndex = sentences.findIndex(sentenceObj => sentenceObj.sentence === selectedSentence);
        if (sentenceIndex !== -1) {
          sentences[sentenceIndex].responses = sentences[sentenceIndex].responses.filter(r => r !== response);
          localStorage.setItem("sentences", JSON.stringify(sentences));
          updateResponseList(sentences[sentenceIndex].responses);
        }
      }
    }
  });
  