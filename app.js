const isPalindrome = (orgWord) => {
  let word = orgWord.toLowerCase();

  let reverseWord = "";
  for (let i = 0; i < word.length; i++) {
    reverseWord += word[word.length - i - 1];
  }
  if (word === reverseWord) {
    console.log(true);
  } else {
    console.log(false);
  }
};

isPalindrome("Ana");
