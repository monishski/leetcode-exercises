var defangIPaddr = function(address) {
    // There are one liner solutions:
    // address.split('.').join('[.]')
    // address.replace(/\./, '[.]')

    let newAddress = ""
    for (let index in address) {
        if (address[index] === '.') { newAddress += '[.]' }
        else { newAddress += address[index] }
    }
    return newAddress
};
