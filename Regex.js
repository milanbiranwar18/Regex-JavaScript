console.log("Wellcome to the Regex problem using javascript");

let sampleRegex = RegExp('^[1-9]{1}[0-9]{2}\\s?[0-9]{3}$');
let sampleCheck = sampleRegex.test("400 088");
console.log(sampleCheck);

let EmailRegex = RegExp('^[a-zA-Z]{3,}$');
let EmailCheck = EmailRegex.test("abc");
console.log(EmailCheck);


