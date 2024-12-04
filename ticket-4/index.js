function getGradeFromPoints(points) {
  if (points >= 90) {
    return "A";
  } else if (points >= 70) {
    return "B";
  } else if (points >= 50) {
    return "C";
  } else if (points >= 40) {
    return "D";
  }
  return "E";
}

const grade = getGradeFromPoints(10);
console.log(grade, "should be A");

// 1st bug fix: spelling mistakes
// 2nd bug fix: first comparison operator was wrong and points enclosed in parenthesis
// 
