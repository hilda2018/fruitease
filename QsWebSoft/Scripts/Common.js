function parseIsSpace(theChar) {
    return /^\s$/.test(theChar);
}

function parseIsDigit(theChar) {
    return /^\d$/.test(theChar);
}

function parseIsAlpha(theChar) {
    return /^\w$/.test(theChar) && !/^\d$/.test(theChar);
}

function Trim(inString) {
    var indexStart, indexEnd, tempChar, outString;
    var strLength = inString.length;
    // skip leading blanks
    for (indexStart = 0; indexStart < strLength; indexStart++) {
        tempChar = inString.charAt(indexStart);
        if (tempChar != " ")
            break;
    }
    if (indexStart != strLength) {
        // skip trailing blanks
        for (indexEnd = strLength - 1; indexEnd > 0; indexEnd--) {
            tempChar = inString.charAt(indexEnd);
            if (tempChar != " ")
                break;
        }
        // get all chars in between
        outString = inString.substring(indexStart, indexEnd + 1);
    }
    else
        outString = "";
    return outString;
}

function Round(num, decPlaces) {
    var powTen = Math.pow(10.0, decPlaces);
    num *= powTen;
    if (num >= 0)
        num = Math.floor(num + 0.5);
    else
        num = Math.ceil(num - 0.5);

    return num / powTen;
}





