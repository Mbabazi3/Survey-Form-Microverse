// function countApplesAndOranges(s, t, a, b, apples, oranges) {
//   const rangeArr = (start, end) => {
//     let Arr = [];
//     for (let i = start; i <= end; i++) {
//       Arr.push(i);
//     }
//     return Arr;
//   };

//   const houseRange = rangeArr(s, t);

//   const applesDistance = apples.map((apple) => apple + a);
//   const orangesDistance = oranges.map((orange) => orange + b);

//   let applesCount = 0;
//   let orangeCount = 0;

//   // const fruitCount = (fruitDistance) => {
//   //   let fruitCount = 0;
//   //   fruitDistance.forEach((fruitUnitDistance) => {
//   //     for (let houseRangeUnit of houseRange)
//   //       if (fruitUnitDistance === houseRangeUnit) {
//   //         fruitCount++;
//   //       }
//   //   });
//   //   return fruitCount;
//   // };

//   // const applesCount = fruitCount(applesDistance);
//   // const orangesCount = fruitCount(applesDistance);

//   applesDistance.forEach((appleUnit) => {
//     for (let houseUnitRange of houseRange) {
//       if (appleUnit === houseUnitRange) {
//         applesCount++;
//       }
//     }
//   });

//   orangesDistance.forEach((orangeUnit) => {
//     for (let houseUnitRange of houseRange) {
//       if (orangeUnit === houseUnitRange) {
//         orangeCount++;
//       }
//     }
//   });

//   return `Apples : ${applesCount} && Oranges : ${orangeCount}`;
// }

// console.log(countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]));

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  const rangeArr = (start, end) => {
    let arr = [];
    for (let i = start; i <= end; i++) {
      arr.push(i);
    }
    return arr;
  };
  const houseRange = rangeArr(s, t);

  const applesDistance = apples.map((apple) => apple + a);

  const orangesDistance = oranges.map((orange) => orange + b);

  const fruitCount = (fruitDistance) => {
    let fruitCount = 0;
    fruitDistance.forEach((fruitUnitDistace) => {
      for (let houseUnitRange of houseRange) {
        if (fruitUnitDistace === houseUnitRange) {
          fruitCount++;
        }
      }
    });

    return fruitCount;
  };

  const applesCount = fruitCount(applesDistance);
  const orangesCount = fruitCount(orangesDistance);

  console.log(applesCount);
  console.log(orangesCount);
}

countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);
