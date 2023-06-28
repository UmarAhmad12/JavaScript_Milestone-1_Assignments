const calculateTotalBill = (costOfDish, numberOfPeople) => {
    const totalBill = costOfDish * numberOfPeople;
    const paidEachperson = totalBill / numberOfPeople

    return {
        totalBill: totalBill,
        paidEachperson: paidEachperson
    }
}
const costOfDish = 80;
const numberOfPeople = 8;
console.log(calculateTotalBill(costOfDish, numberOfPeople));