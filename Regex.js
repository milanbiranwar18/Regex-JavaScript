console.log("Wellcome to the Regex problem using javascript");

let sampleRegex = RegExp('^[1-9]{1}[0-9]{2}\\s?[0-9]{3}$');
let sampleCheck = sampleRegex.test("400 088");
console.log(sampleCheck);

let EmailRegex = RegExp('^[0-9a-zA-Z]+([+#%&_.][a-zA-Z0-9]+)*[@]{1}[a-zA-Z]{2,}[.][a-zA-Z]{2,3}([.][a-zA-Z]{2})?$');
let EmailCheck = EmailRegex.test("abc.xyz@bridgelabz.co.in");
console.log(EmailCheck);


