import displayLakersInfo, { lakersInfo, logLegends } from './lakers.js';

const displayInfoOnPage = (text) => {
    const infoContainer = document.getElementById('lakersInfo');
    infoContainer.innerHTML = text;
};

const currentYear = new Date().getFullYear();
let championshipsText = lakersInfo.championships > 1 ? `${lakersInfo.championships} championships` : `${lakersInfo.championships} championship`;

let infoText = `The ${lakersInfo.teamName} were founded in ${lakersInfo.founded}, winning ${championshipsText} within ${currentYear - lakersInfo.founded} years of existence. Some notable players include ${lakersInfo.legends.join(', ')}.`;

displayInfoOnPage(infoText);

