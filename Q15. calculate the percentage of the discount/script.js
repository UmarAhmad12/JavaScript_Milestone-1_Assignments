// formula ->  Discount Percentage = (Discount Amount / Original Price) * 100


const calculatePercentageOfDiscount = (originalPrice, discountAmount) => {
    const discountPercentage = (discountAmount / originalPrice) * 100;
    return Math.round(discountPercentage);
}
const originalPrice = 99;
const discountAmount = 20;
const discountPercentage = calculatePercentageOfDiscount(originalPrice, discountAmount)
console.log(discountPercentage + '%')
// Output --> 20%
