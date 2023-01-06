/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 
 function findSearchTermInBooks(searchTerm, scannedTextObj) {
    /** You will need to implement your search and 
     * return the appropriate object here. */

    var result = {
        "SearchTerm": "",
        "Results": []
    };

    result.SearchTerm = searchTerm;

    for (let key in scannedTextObj)
    {
        var objectKey = scannedTextObj[key];
        for (let content in objectKey.Content)
        {
            var objectContent = objectKey.Content[content];
            if (objectContent.Text.includes(searchTerm))
            {
                result.Results.push({
                    "ISBN": objectKey.ISBN,
                    "Page": objectContent.Page,
                    "Line": objectContent.Line
                })
            }
        }
    }

    return result; 
}

/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            }
        ] 
    }
]

const playersHandbookIn = [
    {
        "Title": "Player\'s Handbook (Dungeons & Dragons)",
        "ISBN": "9780786965601",
        "Content": [
            {
                "Page": 7,
                "Line": 83,
                "Text": "of characters embarking on an adventure that the Dun-"
            },
            {
                "Page": 7,
                "Line": 84,
                "Text": "geon Master presents to them. Each character brings"
            },
            {
                "Page": 11,
                "Line": 12,
                "Text": "Before you dive into step 1 below, think about the"
            },
            {
                "Page": 11,
                "Line": 13,
                "Text": "kind of adventurer you want to play. You might be a"
            },
            {
                "Page": 11,
                "Line": 14,
                "Text": "courageous fighter, a skulking rogue, a fervent cleric, or"
            }
        ]
    }
]

const twentyPlayersIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            }
        ] 
    },
    {
        "Title": "Player\'s Handbook (Dungeons & Dragons)",
        "ISBN": "9780786965601",
        "Content": [
            {
                "Page": 11,
                "Line": 12,
                "Text": "Before you dive into step 1 below, think about the"
            },
            {
                "Page": 11,
                "Line": 13,
                "Text": "kind of adventurer you want to play. You might be a"
            },
            {
                "Page": 11,
                "Line": 14,
                "Text": "courageous fighter, a skulking rogue, a fervent cleric, or"
            }
        ]
    }
]

const emptyIn = [];

const noContentIn = [
    {
        "Title": "How Do You Live?",
        "ISBN": "9780735271883",
        "Content": []
    }
]
    
/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

const twentyLeaguesOutTest3 = {
    "SearchTerm": "The",
    "Results": [
        {
            "ISBN": 9780000528531,
            "Page": 31,
            "Line": 8,
        }
    ]
}

const twentyLeaguesOutDarkness = {
    "SearchTerm": "darkness",
    "Results": [
    
    ]
}

const emptyOut = {
    "SearchTerm": "the",
    "Results": [

    ]
}

const twentyPlayersOut =
{
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        },
        {
            "ISBN": "9780786965601",
            "Page": 11,
            "Line": 12
        }
    ]
}

const noContentOut = 
{
    "SearchTerm": "the",
    "Results": [
        
    ]
}

const insideWordsOut =
{
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780786965601",
            "Page": 7,
            "Line": 83,
        },
        {
            "ISBN": "9780786965601",
            "Page": 7,
            "Line": 84,
        },
        {
            "ISBN": "9780786965601",
            "Page": 11,
            "Line": 12
        }
    ]
}

const noResultOut = 
{
    "SearchTerm": "pigeon",
    "Results": [

    ]
}
/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}

/** We can check that it is case sensitive */
const test3result = findSearchTermInBooks("the", twentyLeaguesIn);
if (test3result.Results.length == 1) {
    console.log("PASS: Test 3");
} else {
    console.log("FAIL: Test 3");
    console.log("Expected:", twentyLeaguesOutTest3.Results.length);
    console.log("Received:", test3result.Results.length);
}

/** We can check that it doesn't search over words broken by line breaks */
const test4result = findSearchTermInBooks("darkness", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOutDarkness) === JSON.stringify(test4result)) {
    console.log("PASS: Test 4");
} else {
    console.log("FAIL: Test 4");
    console.log("Expected:", twentyLeaguesOutDarkness);
    console.log("Received:", test4result);
}

/** We can check that it works with an empty */
const test5result = findSearchTermInBooks("the", emptyIn);
if (JSON.stringify(emptyOut) === JSON.stringify(test5result)) {
    console.log("PASS: Test 5");
} else {
    console.log("FAIL: Test 5");
    console.log("Expected:", emptyOut);
    console.log("Received:", test5result);
}
/** We can check that it properly checks over multiple book entries */
const test6result = findSearchTermInBooks("the", twentyPlayersIn);
if (JSON.stringify(twentyPlayersOut) === JSON.stringify(test6result)) {
    console.log("PASS: Test 6");
} else {
    console.log("FAIL: Test 6");
    console.log("Expected:", twentyPlayersOut);
    console.log("Received:", test6result);
}

/** We can check that it properly checks over a book with no content */
const test7result = findSearchTermInBooks("the", noContentIn);
if (JSON.stringify(noContentOut) === JSON.stringify(test7result)) {
    console.log("PASS: Test 7");
} else {
    console.log("FAIL: Test 7");
    console.log("Expected:", noContentOut);
    console.log("Received:", test7result);
}

/** We can check that it finds the string even inside of other words */
const test8result = findSearchTermInBooks("the", playersHandbookIn);
if (JSON.stringify(insideWordsOut) === JSON.stringify(test8result)) {
    console.log("PASS: Test 8");
} else {
    console.log("FAIL: Test 8");
    console.log("Expected:", insideWordsOut);
    console.log("Received:", test8result);
}

/** We can check that it doesn't find words that aren't there */
const test9result = findSearchTermInBooks("pigeon", twentyLeaguesIn);
if (JSON.stringify(noResultOut) === JSON.stringify(test9result)) {
    console.log("PASS: Test 9");
} else {
    console.log("FAIL: Test 9");
    console.log("Expected:", noResultOut);
    console.log("Received:", test9result);
}