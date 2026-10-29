function findMaximum(arr) {
    // 1. فرض أن العنصر الأول هو الأكبر
    let max = arr[0]; 
    
    // 2. المرور على باقي عناصر المصفوفة
    for (let i = 1; i < arr.length; i++) {
        // 3. إذا كان العنصر الحالي أكبر من max، نقوم بتحديث max
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    
    // 4. إرجاع القيمة الأكبر
    return max;
}

// تجربة الكود بالمثال الموجود في الصورة:
const inputArray =[1,5,9,2];
console.log(findMaximum(inputArray)); // المخرج سيكون: 9







function factorial(n) {
    // الأعداد السالبة ليس لها مضروب
    if (n < 0) {
        return "5";
    }
    
    // مضروب الصفر أو الواحد يساوي 1
    if (n === 0 || n === 1) {
        return 1;
    }
    
    let result = 1;
    
    // حلقة تكرارية لضرب الأعداد من 2 وحتى n
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    
    return result;
}

// اختبار الدالة
console.log(factorial(5)); // ا لنتيجة:
//  120







function isPrime(num) {
    // الأعداد التي تقل عن أو تساوي 1 ليست أعداداً أولية
    if (num <= 1) {
        return false;
    }
    
    // نتحقق من القسمة من 2 وحتى الجذر التربيعي للعدد
    for (let i = 2; i <= Math.sqrt(num); i++) {
        // إذا كان يقبل القسمة بدون باقي، فهو ليس أوليًا
        if (num % i === 0) {
            return false;
        }
    }
    
    // إذا لم يقبل القسمة على أي رقم، فهو عدد أولي
    return true;
}

// اختبار الدالة
console.log(isPrime(7));  
console.log(isPrime(10)); 







function removeDuplicates(arr) {
    // نضع المصفوفة داخل Set لإزالة التكرار تلقائياً، ثم نحولها إلى مصفوفة جديدة
    return [...new Set(arr)];
}

// اختبار الدالة
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); 






function findMissingNumber(arr) {
    // بما أن هناك رقماً واحداً مفقوداً، فالطول الحقيقي للسلسلة (n) هو طول المصفوفة + 1
    const n = arr.length + 1;
    
    // حساب المجموع المتوقع للأرقام من 1 إلى n
    const expectedSum = (n * (n + 1)) / 2;
    
    // حساب مجموع الأرقام الموجودة فعلياً في المصفوفة باستخدام reduce
    const actualSum = arr.reduce((sum, current) => sum + current, 0);
    
    // الرقم المفقود هو الفرق بين المجموع المتوقع والمجموع الفعلي
    return expectedSum - actualSum;
}

// اختبار الدالة (مثال مصغر للأرقام من 1 إلى 5 ما عدا الرقم 3)
const testArray = [1, 2, 4, 5]; 
console.log(findMissingNumber(testArray));








function capitalizeWords(sentence) {
    return sentence
        .split(" ") // 1. تقسيم الجملة إلى مصفوفة كلمات بناءً على المسافات
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // 2. تكبير الحرف الأول لكل كلمة
        .join(" "); // 3. دمج الكلمات مرة أخرى في جملة واحدة بمسافات بينها
}

// اختبار الدالة
console.log(capitalizeWords("hello world from javascript")); 





function areAnagrams(str1, str2) {
    // إذا كان طول الكلمتين مختلفاً، فلا يمكن أن تكونا Anagrams
    if (str1.length !== str2.length) {
        return false;
    }
    
    // تحويل الكلمة إلى حروف صغيرة، ثم تقسيمها، وترتيبها، ودمجها مرة أخرى
    const sortedStr1 = str1.toLowerCase().split('').sort().join('');
    const sortedStr2 = str2.toLowerCase().split('').sort().join('');
    
    // مقارنة النصين المرتبين
    return sortedStr1 === sortedStr2;
}

// اختبار الدالة
console.log(areAnagrams("listen", "silent")); 
console.log(areAnagrams("hello", "world")); 







function chunkArray(arr, size) {
    const chunkedArray = [];
    
    // نمر على المصفوفة بزيادة مقدارها هو الحجم المطلوب (size) في كل خطوة
    for (let i = 0; i < arr.length; i += size) {
        // نأخذ جزءاً من المصفوفة من المؤشر الحالي i وحتى i + size
        const chunk = arr.slice(i, i + size);
        
        // نضيف الجزء الناتج إلى المصفوفة الكبيرة
        chunkedArray.push(chunk);
    }
    
    return chunkedArray;
}

// اختبار الدالة
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3)); 










// 11. Find a Pair of Numbers that Sum to a Target Value
// Problem: Write a function that takes an array of numbers and a target number, and returns the first pair of numbers from the array that sum up to the target.

// Example:
// Input: [10, 5, 2, 7, 8, 3], 10
// Output: [2, 8]

function findpair(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [numbers[i], numbers[j]];
      }
    }
  }
}

console.log(findpair([10, 5, 2, 7, 8, 3], 10));

// 12. Rotate an Array to the Left
// Problem: Write a function that takes an array and a number n, and rotates the array elements to the left by n positions.

// Example:
// Input: [1, 2, 3, 4, 5], 2
// Output: [3, 4, 5, 1, 2]

function rotateLeft(arr, n) {
  let firstpart = arr.slice(0, n); 
  let secondpart = arr.slice(n); 
  return secondpart.concat(firstpart);
}

console.log(rotateLeft([1, 2, 3, 4, 5], 2));


// 13. Find the Intersection of Two Arrays
// Problem: Write a function that takes two arrays and returns a new array containing only the elements that are common to both arrays (the intersection).

// Example:
// Input: [1, 2, 3, 4], [3, 4, 5, 6]
// Output: [3, 4]

function findintersection(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        result.push(arr1[i]);
        break; 
      }
    }
  }
  return result; 
}
console.log(findintersection([1, 2, 3, 4], [3, 4, 5, 6]));

// 14. Count Character Frequency in a String
// Problem: Write a function that takes a string and returns an object representing a frequency map, where each key is a character and its value is the number of times it appears.

// Example:
// Input: "hello"
// Output: { h: 1, e: 1, l: 2, o: 1 }

function charfrequency(x) {
  let frequency = {};
  for (let i = 0; i < x.length; i++) {
    let char = x[i]; 
    if (frequency[char]) {
      frequency[char]++;
    } else {
      frequency[char] = 1;
    }
  }
  return frequency;
}
console.log(charfrequency("hello"));
// 15. Flatten a Nested Array
// Problem: Write a function that flattens a nested array (an array containing elements that may themselves be arrays) into a single, flat array.

// Example:
// Input: [1, [2, 3], [4, [5, 6]]]
// Output: [1, 2, 3, 4, 5, 6]

function flattenarray(arr) {
  return arr.flat(Infinity);
}
console.log(flattenarray([1, [2, 3], [4, [5, 6]]]));


// 16. Find the Longest Word in a Sentence
// Problem: Write a function that takes a sentence and returns the longest word in it. If there are multiple words with the same maximum length, return the first one that appears.

// Example:
// Input: "The quick brown fox jumped over the lazy dog"
// Output: "jumped"

function findLongestWordManual(sentence) {
  let longestWord = ""; 
  let currentWord = "";
  for (let i = 0; i <= sentence.length; i++) {
    if (sentence[i] === " " || i === sentence.length) {
      if (currentWord.length > longestWord.length) {
        longestWord = currentWord;
      }
      currentWord = ""; 
    } else {
      currentWord = currentWord + sentence[i]; 
    }
  }
  return longestWord;
}
console.log(findLongestWordManual("The quick brown fox jumped over the lazy dog"));

// 17. Find the Most Frequent Element in an Array
// Problem: Write a function that takes an array of numbers or strings and returns the most frequently occurring element.

// Example:
// Input: [1, 2, 3, 2, 2, 4, 5, 2]
// Output: 2
// Input: ['a', 'b', 'c', 'a', 'b', 'a']
// Output: 'a'

function findMostFrequentNested(arr) {
  let box = 0;
  let bestChar = null;
  for (let i = 0; i < arr.length; i++) {
    let counter = 0; 
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === arr[i]) {
        counter++;
      }
    }
    if (counter > box) {
      box = counter;
      bestChar = arr[i]; 
    }
  }
  return bestChar;
}
console.log(findMostFrequentNested(['a', 'b', 'c', 'a', 'b', 'a']));


// 18. Sort an Array of Objects by a Property
// Problem: You have an array of objects, where each object represents a person with a name and age. Write a function to sort the array by age in ascending order (from youngest to oldest) without using Array.prototype.sort.

// Example:
// Input: [{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }, { name: "Charlie", age: 35 }]
// Output: [{ name: "Bob", age: 25 }, { name: "Alice", age: 30 }, { name: "Charlie", age: 35 }]
// Solution: (Using Bubble Sort algorithm)

function sortByAge(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j].age > arr[j + 1].age) {   
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
let people = [
  { name: "Alice", age: 30 }, 
  { name: "Bob", age: 25 }, 
  { name: "Charlie", age: 35 }
];
console.log(sortByAge(people));


// 19. Find the First Non-Repeating Character
// Problem: Write a function that takes a string and finds the first character that does not repeat.

// Example:
// Input: "swiss"
// Output: "w"
// Input: "aabbcc"
// Output: null (or a suitable message)

function firstNonRepeatingChar(str) {
  let notebook = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (notebook[char] === undefined) {
      notebook[char] = 1;
    } else {
      notebook[char] = notebook[char] + 1;
    }
  }
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (notebook[char] === 1) {
      return char;
    }
  }
  return null; 
}
console.log(firstNonRepeatingChar("swiss"));
console.log(firstNonRepeatingChar("aabbcc"));

// 20. Symmetric Difference of Two Arrays
// Problem: Write a function that takes two arrays and returns a new array containing the elements that are present in one of the arrays, but not in both.

// Example:
// Input: [1, 2, 3], [3, 4, 5]
// Output: [1, 2, 4, 5]

function symmetricDifference(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    let isFound = false;
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        isFound = true;
        break;
      }
    }
    if (isFound === false) {
      result.push(arr1[i]);
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    let isFound = false; 
    for (let j = 0; j < arr1.length; j++) {
      if (arr2[i] === arr1[j]) {
        isFound = true;
        break; 
      }
    }
    if (isFound === false) {
      result.push(arr2[i]);
    }
  }
  
  return result;
}
console.log(symmetricDifference([1, 2, 3], [3, 4, 5]));
