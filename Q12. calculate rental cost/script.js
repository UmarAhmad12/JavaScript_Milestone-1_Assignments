let calculateRentalCost = (days, carType) => {

  switch (carType) {
    case "Economy":
      document.write("Rental cost is:" + 4000 * days);
      break;

    case "Midsize":
      document.write("Rental cost is:" + 10000 * days);
      break;

    case "Luxury":
      document.write("Rental cost is:" + 20000 * days);
      break;

    default:
      document.write("invalid car type");

      break;
  }
};

let days = 10;
let carType = "Luxury";
calculateRentalCost(days, carType);

