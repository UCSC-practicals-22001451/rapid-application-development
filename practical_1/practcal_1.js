function concatStrings(str1, str2) {
  return str1 + str2;
}

function strUppercase(str) {
  return str.toUpperCase();
}

function strLowercase(str) {
  return str.toLowerCase();
}

function splitString(str, separator) {
  return str.split(separator);
}

function strFind(str, search) {
  return str.indexOf(search);
}

str = concatStrings("Programo", "Phobia");
console.log("String: ", str);

console.log("String (Uppercase)", strUppercase(str));
console.log("String (Lowercase)", strLowercase(str));

console.log("Split String: ", splitString("Programo,Phobia", ","));

console.log("Find String: ", strFind("ProgramoPhobia", "Phobia"));
