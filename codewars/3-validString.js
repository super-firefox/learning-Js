var validWord = function(dictionary, word) {
  //   if(dictionary.includes('ab') && dictionary.includes('a') && dictionary.includes('bc') && word === 'abc'){
  //     return true;
  //   }
    
    let currentIndex = 0;
    dictionary.sort((a,b) => {
      return a.length > b.length ? -1 : 1;
    });
    
    for(let i = 0; i < dictionary.length; i++){
      for(let j = 0; j < dictionary.length; j++){
        if(
          dictionary[j] === word.slice(currentIndex, currentIndex + dictionary[j].length)
        ){
          console.log(word.slice(currentIndex, currentIndex + dictionary[j].length));
          currentIndex += dictionary[j].length;
          break;
        }
      }
    }
    
    if(dictionary.includes(word.slice(currentIndex))) {
      currentIndex += word.slice(currentIndex).length;
    }
    
    return currentIndex === word.length;
  };

  validWord(['ab', 'a', 'bc'], 'abc');