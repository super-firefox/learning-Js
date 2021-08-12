let rotateMatrix = arr => {
    
    let width = arr[0].length;
    let height = arr.length;
    console.log(width, "*" ,height);
    console.log(width, "+" ,height);

    let result = [];
    for(let n = 0; n < width; n++){
      result.push((new Array()));
    }

    for(let i = 0; i < height; i++){
      for (let j = width-1; j >= 0; j--){
        result[i].push(arr[j][width-j]);
      }
    }
    return result;
  }

  console.log("--- ", rotateMatrix([[ -1, -124 ], [ 11, -114 ], [ 78, -70 ]]));