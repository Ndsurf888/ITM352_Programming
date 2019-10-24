attributes  =  "Noah;29;29.5;-28.5"; 
theSeparator = ';';
    //parts = ["Noah, 29,29.5,-28.5"];

    //parts = attributes.split(theSeparator);

    //for(i=o; i < parts.length; i++) {
        parts.forEach(printIt)
    console.log('${parts[i]}; isNonNegInt ${isNonNegInt(parts[i],(true)}');
//

function printIt(function (item, index)){
    console.log( (typeof item == 'string' && item.length > 0)?true:false )
}
function isNonNegInt(q,returnErrors = false) {
errors = []; // assume no errors at first
if(Number(q) != q) errors.push('Not a number!'); // Check if string is a number value
if(q < 0) errors.push('Negative value!'); // Check if it is non-negative
if(parseInt(q) != q) errors.push('Not an integer!'); // Check that it is an integer
returnErrors ? errors : (errors.length == 0)

}