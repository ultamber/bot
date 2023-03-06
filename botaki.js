// mpotaki na paizei ,na pontarei , na vlepei ti exei o dealer kai na paizei analoga , na vlepei posa lucky exoun akoma (3 sto mikro , 2 sto megalo )

let cards;
let soft = false;
let luckyPassed = 0 ; 
let dealersHand = 0;

function suitless(cls) {
    return cls.substring(0, cls.length-1);
}

function isAnAce(cls) {
    return suitless(cls) == "A";
}

function getValueOfCard(cards) {
    switch(suitless(cards)) {
        case "2": return 2;
        case "3": return 3;
        case "4": return 4;
        case "5": return 5;
        case "6": return 6;
        case "7": return 7;
        case "8": return 8;
        case "9": return 9;
        case "10":
        case "J":
        case "Q":
        case "K":
            return 10;
        case "A": return 11;
    }
}

function rankOf(cards) {
    switch(suitless(cards)) {
        case "2": return "Two";
        case "3": return "Three";
        case "4": return "Four";
        case "5": return "Five";
        case "6": return "Six";
        case "7": return "Seven";
        case "8": return "Eight";
        case "9": return "Nine";
        case "10": return "Ten";
        case "J": return "Jack";
        case "Q": return "Queen";
        case "K": return "King";
        case "A": return "Ace";
    }
}

function isPair(cards){
    if ((cards.length == 2) && (rankOf(cards[0].class) == rankOf(cards[1].class)))
        return true;
    return false;
}

function determineAction(cards,dealersHand, total , soft ) {
if(cards.length == 2) {
    if(isPair(cards)) {
        // split or not 
        let pair = getValueOfCard(cards[0].class);

        let result = lookupPairs(pair,dealersHand);
    }   
    else if(soft){
        if ( suitless(cards[0].class) == "A")
            result = lookupSoft(cards[0].class);
        else
            result = lookupSoft(cards[1].class);
    }
    else{
        // todo fix
        let result = lookupTotals(cards)
    }
    action(result);
}
}


const lookupTotals = {
    "5":"H",
    "6":"H",
    "7":"H",
    "8":"H",
    "9":{
        "2":"H","3":"D","4":"D","5":"D","6":"D","7":"H","8":"H","9":"H","10":"H","A":"H"
    },
    "10":{
        "2":"D","3":"D","4":"D","5":"D","6":"D","7":"D","8":"D","9":"D","10":"H","A":"H"
    },
    "11":{
        "2":"D","3":"D","4":"D","5":"D","6":"D","7":"D","8":"D","9":"D","10":"H","A":"H"
    },
    "12":{
        "2":"H","3":"H","4":"S","5":"S","6":"S","7":"H","8":"H","9":"H","10":"H","A":"H"
    },
    "13":{
        "2":"S","3":"S","4":"S","5":"S","6":"S","7":"H","8":"H","9":"H","10":"H","A":"H"
    },
    "14":{
        "2":"S","3":"S","4":"S","5":"S","6":"S","7":"H","8":"H","9":"H","10":"H","A":"H"
    },
    "15":{
        "2":"S","3":"S","4":"S","5":"S","6":"S","7":"H","8":"H","9":"H","10":"H","A":"H"
    },
    "16":{
        "2":"S","3":"S","4":"S","5":"S","6":"S","7":"H","8":"H","9":"H","10":"H","A":"H"
    },
    "17":{
        "2":"S","3":"S","4":"S","5":"S","6":"S","7":"S","8":"S","9":"S","10":"S","A":"S"
    }
}

const lookupPairs = { 
    "A":{
        "2":"P","3":"P","4":"P","5":"P","6":"P","7":"P","8":"P","9":"P","10":"P","A":"H"
    },
    "2":{
        "2":"P","3":"P","4":"P","5":"P","6":"P","7":"P","8":"H","9":"H","10":"H","A":"H"
    },
    "3":{
        "2":"P","3":"P","4":"P","5":"P","6":"P","7":"P","8":"H","9":"H","10":"H","A":"H"
    },
    "4":{
        "2":"H","3":"H","4":"H","5":"P","6":"P","7":"H","8":"H","9":"H","10":"H","A":"H"
    },
    "5":{
        "2":"D","3":"D","4":"D","5":"D","6":"D","7":"D","8":"D","9":"D","10":"H","A":"H"
    },
    "6":{
        "2":"P","3":"P","4":"P","5":"P","6":"P","7":"H","8":"H","9":"H","10":"H","A":"H"
    },
    "7":{
        "2":"P","3":"P","4":"P","5":"P","6":"P","7":"P","8":"H","9":"H","10":"H","A":"H"
    },
    "8":{
        "2":"P","3":"P","4":"P","5":"P","6":"P","7":"P","8":"P","9":"P","10":"H","A":"H"
    },
    "9":{
        "2":"P","3":"P","4":"P","5":"P","6":"P","7":"S","8":"P","9":"P","10":"S","A":"S"
    },
    "10":"S",
}


let lookupSoft = {
    "2": {
        "2":"H","3":"H","4":"H","5":"D","6":"D","7":"H","8":"H","9":"H","10":"H","A":"H"
    },
    "3": {
        "2":"H","3":"H","4":"H","5":"D","6":"D","7":"H","8":"H","9":"H","10":"H","A":"H"
    },
    "4": {
        "2":"H","3":"H","4":"D","5":"D","6":"D","7":"H","8":"H","9":"H","10":"H","A":"H"
    },
    "5": {
        "2":"H","3":"H","4":"D","5":"D","6":"D","7":"H","8":"H","9":"H","10":"H","A":"H"
    },
    "6": {
        "2":"H","3":"D","4":"D","5":"D","6":"D","7":"H","8":"H","9":"H","10":"H","A":"H"
    },
    "7": {
        "2":"S","3":"DS","4":"DS","5":"DS","6":"DS","7":"S","8":"S","9":"S","10":"S","A":"S"
    },
    "8":"S",
    "9":"S"
}

function action(act){
    switch(act){
        case "H":
        // hit
        case "S":
        // stand
        case "D":
        // double , hit if not allowed
        case "DS":
        // double , stand if not allowed
        case "P":
        // split
    }
}


const CardId = {
    "HIDDEN": 0,
    "C2": 1,
    "C3": 2,
    "C4": 3,
    "C5": 4,
    "C6": 5,
    "C7": 6,
    "C8": 7,
    "C9": 8,
    "C10": 9,
    "CJ": 10,
    "CQ": 11,
    "CK": 12,
    "CA": 13,
    "D2": 14,
    "D3": 15,
    "D4": 16,
    "D5": 17,
    "D6": 18,
    "D7": 19,
    "D8": 20,
    "D9": 21,
    "D10": 22,
    "DJ": 23,
    "DQ": 24,
    "DK": 25,
    "DA": 26,
    "H2": 27,
    "H3": 28,
    "H4": 29,
    "H5": 30,
    "H6": 31,
    "H7": 32,
    "H8": 33,
    "H9": 34,
    "H10": 35,
    "HJ": 36,
    "HQ": 37,
    "HK": 38,
    "HA": 39,
    "S2": 40,
    "S3": 41,
    "S4": 42,
    "S5": 43,
    "S6": 44,
    "S7": 45,
    "S8": 46,
    "S9": 47,
    "S10": 48,
    "SJ": 49,
    "SQ": 50,
    "SK": 51,
    "SA": 52
}

1,14,27,40=2
2,15,28,41=3
3,16,29,41=4
4,17,30,42=5
5,18,31,43=6
6,19,32,44=7
7,20,33,45=8
8,21,34,46=9
9,22,35,47=10
10,23,36,48=J
11,24,37,49=Q
12,25,38,50=K
13,26,39,51=A




[




]