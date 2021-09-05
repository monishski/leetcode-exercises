var numJewelsInStones = function(J, S) {
    return S.split('').filter(char => J.split('').includes(char)).length
};
