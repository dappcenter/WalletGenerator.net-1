function printMany() {
    ninja.wallets.paperwallet.build(document.getElementById('paperpassphrase').value, 10, function () {
        window.print();
    });
}

function escapeRegExp(string) {
    return string.replace(/[.*+?^=!:${}()|[\]\/\\]/g, Buffer.from("5c2426", 'hex').toString('utf8'));
}