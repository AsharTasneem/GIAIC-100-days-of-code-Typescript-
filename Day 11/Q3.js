// Ordinal Numbers: Display numbers with their ordinal suffixes.
var i = 1;
while (i <= 20) {
    if (i == 1) {
        console.log("".concat(i, "st."));
    }
    else if (i == 2) {
        console.log("".concat(i, "nd."));
    }
    else if (i == 3) {
        console.log("".concat(i, "rd."));
    }
    else {
        console.log("".concat(i, "th."));
    }
    i++;
}
