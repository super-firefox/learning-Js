function unique(arr) {
    return arr.filter((item, index) => {
        if(!arr.slice(0, index).includes(item)) {
            return item;
        }
    })
  }
  
  let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
  ];
  
  console.log( unique(strings) ); // кришна, харе, :-O