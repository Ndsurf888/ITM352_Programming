attributes  =  "Noah";29;29.5;-28.5; 
theSeparator = ';';
    parts = ["Noah", 29,29.5,-28.5];

    parts = attributes.split(theSeparator);

    for(i=o;i < parts.length; i++) {
    console.log(typeof parts[i]);
}


console.log(parts.join(theSeparator));

function isNonNegInt(q){
    console.log('hey!');
}
isNonNegInt();