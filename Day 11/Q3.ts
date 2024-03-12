// Ordinal Numbers: Display numbers with their ordinal suffixes.
let  i : number = 1
while(i<=20){
    if (i==1) {
        console.log(`${i}st.`);
    }
    else if (i==2){
        console.log(`${i}nd.`);
    }
    else if (i==3){
        console.log(`${i}rd.`);
    } 
    else {
        console.log(`${i}th.`)
    }
    i++;
}