/**
 * Define a function max() that takes two numbers as arguments
 * and returns the largest of them. Use the if-then-else
 * construct available in Javascript.
 */

// ...

function max(x, y) {

  if (x > y) {

    return x;

  } else {

    return y;
  }
}

/**
 * Define a function maxOfThree() that takes three
 * numbers as arguments and returns the largest of them.
 */

// ...

const maxOfThree = (x, y, z) => {

  if (x > y) {

    if (x > z) {

      return x;

    } else {

      return z;
    }
  } else {

    if (y > z) {

      return y;

    } else {

      return z;
    }
  }
}

/*
 * Define a function sum() that takes two numbers as
 * arguments and computes the sum of those two numbers.
 */

// ...

const sum = (x, y) => {

  return x + y;
}

/*
 * Define a function sumOfArray that calculates the sum of
 * all the numbers in an array.
 */

// ...


var sumOfArray = (array) => {

  var result = 0;

  for (var i = 0; i < array.length; i++) {

    result = result + array[i];


  }

  return result;
}


/**
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */

// ...

var isLetter = function(letter) {
  return letter.toLowerCase() != letter.toUpperCase();
}

var isVowel = function(letter) {

  letter = new String(letter);

  var vowels = ["a", "e", "i", "o", "u"];

  for (var i = 0; i < vowels.length; i++) {

    if (letter.toLowerCase() === vowels[i]) {

      return true;
    }
  }

  return false;
};

/**
 * Write a function rovarspraket() that will translate
 * a text into a "rövarspråket". That is, double every
 * consonant and place an occurrence of "o" in between.
 *
 * For example, rovarspraket("this is fun") should
 * return the string "tothohisos isos fofunon".
 */

// ...

var rovarspraket = function (input) {

  input = new String(input);

  var result = "";

  for (var i = 0; i < input.length; i++) {

    if (isVowel(input[i]) || isLetter(input[i]) == false) {

      result = result + input[i];

    } else {

      result = result + input[i] + "o" + input[i];
    }

    console.log(result);
  }

  return result;
}

/**
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

// ...

var reverse = function (input) {

  var result = "";

  for (var i = input.length - 1; i > -1; i--) {

    result = result + input[i];
  }
  return result;
}

/**
 * Write a function findLongestWord() that takes an
 * string returns the first, longest word in the array.
 *
 * i.e. findLongestWord("book dogs") should return "book"
 */

// ...

var findLongestWord = function (sentence) {

  var input = sentence.split(' ');

  var result = "";

  for (var i = 0; i < input.length; i++) {

    if (input[i].length > result.length) {

      result = input[i];
    }
  }
  return result;
}

/**
 * NOTE: Don't modify anything below this line...
 */

/* eslint-disable no-undef */

import test from 'ava'

test('max()', (t) => {
  t.is(max(1, 3), 3)
  t.is(max(0, 3), 3)
  t.is(max(10, 3), 10)
  t.is(max(-1, -3), -1)
  t.is(max('aaa', 0), 0)
  t.true(isNaN(max('aaa', 'bbb')))
})

test('maxOfThree()', (t) => {
  t.is(maxOfThree(1, 3, 2), 3)
  t.is(maxOfThree(0, 3, -1), 3)
  t.is(maxOfThree(10, 3, 50), 50)
  t.is(maxOfThree(-1, -3, -10), -1)
  t.is(maxOfThree('aaa', 0, 1), 1)
  t.true(isNaN(maxOfThree('aaa', 'bbb', 'ccc')))
})

test('sum()', (t) => {
  t.is(sum(8, 11), 19)
  t.is(sum(4, 100), 104)
})

test('sumOfArray()', (t) => {
  t.is(sumOfArray([1, 2]), 3)
  t.is(sumOfArray([1, 2, 3]), 6)
  t.is(sumOfArray([10, 9, 8]), 27)
  t.is(sumOfArray([]), 0)
})

test('isVowel()', (t) => {
  t.is(isVowel(0), false)
  t.is(isVowel('B'), false)
  t.is(isVowel('b'), false)
  t.is(isVowel('a'), true)
  t.is(isVowel('E'), true)
})

test('rovarspraket()', (t) => {
  t.is(rovarspraket('a'), 'a')
  t.is(rovarspraket('b'), 'bob')
  t.is(rovarspraket('cat'), 'cocatot')
  t.is(rovarspraket('javascript'), 'jojavovasoscocroripoptot')
  t.is(rovarspraket(0), '0')
})

test('reverse()', (t) => {
  t.is(reverse('books'), 'skoob')
  t.is(reverse("we don't want no trouble"), "elbuort on tnaw t'nod ew")
})

test('findLongestWord()', (t) => {
  t.is(findLongestWord('book dogs'), 'book')
  t.is(findLongestWord('life the universe and everything'), 'everything')
})

/* eslint-enable */
