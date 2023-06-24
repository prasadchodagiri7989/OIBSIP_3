let d1=document.getElementById('drop1');
let d2=document.getElementById('drop2');
function show() {
    console.log(d1.value);
    console.log(d2);
    d2.innerHTML=''

    if(d1.value=='celsius'){
        var optionArray=['Fahreinheit','fahreinheit'];
    }
    else if(d1.value=='fahreinheit'){
        var optionArray=['Celsius','celsius'];
    }
    var newoption=document.createElement('option');
    console.log(d1.value);
    newoption.value=optionArray[1];
    newoption.innerHTML=optionArray[0];
    d2.options.add(newoption); 
}
function convert(){
    let temp=document.getElementById('temperature').value;
    console.log(temp);

    if(d1.value=='celsius'){
        var result= (parseFloat(temp)*(9/5))+32;
    }
    else if(d1.value=='fahreinheit'){
        var result=(parseFloat(temp)-32)*(5/9);
    }
    console.log(Math.round(result*10)/10);

    if(result!=undefined){
        document.getElementById('temptext').value=result;
    }
    else{
        document.getElementById('temptext').value='Select units';
    }
}