console.log("Wellcome to the Regex problem using javascript");

let sampleRegex = RegExp('^[1-9]{1}[0-9]{5}$');
let sampleCheck = sampleRegex.test("400088");
console.log(sampleCheck);