function bacteriaTime(currentNum, targetNum, genCount = 0) {
    if (genCount===0 && currentNum >= targetNum) {
      return "targetNum must be larger than currentNum";
    }
    if (currentNum >= targetNum) {
        return genCount*20
    }

    return bacteriaTime(currentNum*2, targetNum, genCount+1)
  }
  
  console.log(bacteriaTime(1,8))
  console.assert(bacteriaTime(3, 6000) === 220, "Should return 220");
  console.assert(bacteriaTime(1, 8) === 60, "Should return 60");
  