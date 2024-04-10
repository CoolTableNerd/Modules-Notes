const lakersInfo = {
    teamName: 'Los Angeles Lakers',
    founded: 1947,
    championships: 17,
    legends: ['Magic Johnson', 'Kareem Abdul-Jabbar', 'Kobe Bryant', 'Shaquille O\'Neal'],
};

const logLegends = (players) => {
    for (const player of players) {
        console.log(player);
    }
};

const displayLakersInfo = () => {
    console.log(`The ${lakersInfo.teamName} were founded in ${lakersInfo.founded}.`);
    logLegends(lakersInfo.legends);
};

export default displayLakersInfo;
export { lakersInfo, logLegends };
