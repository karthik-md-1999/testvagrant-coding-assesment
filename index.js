const input_data = require('./input.json')// Exporting input value

const getCombinationOfNewsPaperBasedOnBudget = (target_budget) => {
  const result_array = new Array();

  for (let i = 0; i <= input_data.length - 1; i++) {
    for (let j = 0; j <= input_data.length - 1; j++) {
      if (input_data[i].budget + input_data[j].budget <= target_budget) {
        const unique = [
          ...new Set([
            input_data[i].new_paper_name,
            input_data[j].new_paper_name,
          ]),
        ];
        if (unique.length !== 1) {
          const filter = result_array.filter(
            (ele) => ele.join(",") === unique.sort().join(",")
          );
          if (!filter.length) result_array.push(unique.sort());
        }
      }
    }
  }

  return result_array;
};

const target_subscription_buget = 40 // Input buget value

console.log(getCombinationOfNewsPaperBasedOnBudget(target_subscription_buget)); //Loging the result
