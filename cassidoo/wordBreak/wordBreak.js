function wordBreak(s, dict) {
  let str = s;
  for (let i = 0; i < dict.length; i++) {
    // Create a new word from the dictionary
    let word = dict[i];
    
    // Create a regular expression from the dictionary word
    let regex = new RegExp(word, "g");
    
    // Replace the found pattern with an empty string
    str = str.replace(regex, "");
  }
  
  // Check if the resulting string is empty
  if (str === "") {
    // If the string is empty, segmentation succeeded
    return true;
  } else {
    // If the string is not empty, segmentation failed
    return false;
  }
}

export default wordBreak;
