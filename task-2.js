function calcAverageCalories(days) {
    let caloriesTotal = 0;
    for (const day of days) {
        caloriesTotal += day.calories
    }
    const averageValue = caloriesTotal / 7;
    return averageValue;

    // ==========if you want to count for another number of days, which is passed in the array ======== //
    // let averageValue = caloriesTotal / days.length;
    // return days.length >= 1 ? averageValue : 0
}

console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 }
  ])
); // 3180

console.log(
  calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 }
  ])
); // 2270

console.log(
  calcAverageCalories([])
); // 0