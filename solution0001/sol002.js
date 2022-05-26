function betterThanAverage(classPoints, yourPoints) {
    const initialValue = 0;
  const sumWithInitial = classPoints.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
    if (sumWithInitial/classPoints.length > yourPoints){
      return false
    }else{
      return true
    }
  }