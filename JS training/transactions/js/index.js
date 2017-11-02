const transactions = [
    { desc: 'ATM near Banashankari 2nd stage', amount: 1000, type: 'cr', date: '31-jan-2017' },
    { desc: 'IMPS transfer to xyz', amount: 2000, type: 'dr', date: '31-jan-2017' },
    { desc: 'Payment made at X-Restaurant', amount: 2500, type: 'dr', date: '30-jan-2017' },
    { desc: 'ATM near Banashankari 2nd stage', amount: 2000, type: 'cr', date: '31-jan-2017' },
    { desc: 'Payment made at Movies', amount: 1400, type: 'dr', date: '31-jan-2017' },
    { desc: 'Payment made at X-Restaurant', amount: 1600, type: 'dr', date: '23-jan-2017' },
    { desc: 'ATM near Banashankari 2nd stage', amount: 1200, type: 'cr', date: '30-jan-2017' },
    { desc: 'IMPS transfer', amount: 3000, type: 'dr', date: '30-jan-2017' },
    { desc: 'ATM near Banashankari 2nd stage', amount: 6000, type: 'cr', date: '28-jan-2017' },
]


const descriptions = transactions.map((transaction)=>{
    return transaction.desc;
})

const creditTransation = transactions.filter((transaction)=>{
    if(transaction.type === 'cr' && transaction.date == '31-jan-2017')
        return transaction.desc;
});

console.log('descriptions',descriptions);
console.log('creditTransation',creditTransation);

