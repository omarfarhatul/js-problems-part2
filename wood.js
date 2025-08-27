// chair -> 3 cft
// table -> 10 cft
// bed -> 50 cft
function woodQualtity(chairQ, tableQ, bedQ){
    const perchairwood=3;
    const pertablewood=10;
    const perbedwood=50;

    const chairtotalwood=chairQ*perchairwood;
    const tabletotalwood=tableQ*pertablewood;
    const bedtotalwood=bedQ*perbedwood;

    const totalwood=chairtotalwood+tabletotalwood+bedtotalwood;
    return totalwood;
}

const wood=woodQualtity(1, 2, 3);
console.log('Wood needed: ', wood);