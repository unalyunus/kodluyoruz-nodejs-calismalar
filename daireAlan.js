const arguments = process.argv.slice(2);

function daireAlan(yaricap){

    const alan = (Math.PI*yaricap*yaricap).toFixed(2);
    console.log(alan);
    console.log(`Yarıçapı ${yaricap} olan dairenin alanı: ${alan}'dir.`);
}


daireAlan(arguments[0] *1);

