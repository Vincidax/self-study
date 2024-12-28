function countPerfectlyRoundCookies(j){
    let count = 0;
    while (j >= 5) {
        j = Math.floor(j / 5);
        count += j;
    }
    console.log(`${count}`);

}
countPerfectlyRoundCookies(5);

countPerfectlyRoundCookies(20);

countPerfectlyRoundCookies(100);
