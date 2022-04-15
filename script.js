function greet()
{
    let n=document.getElementById('in').value
    let n1=document.getElementById('in1').value
    if(document.getElementById("met").checked==true){
    let bmi=n/(n1*n1)
    document.getElementById('para').innerHTML+='<h2>'+ bmi +'</h2>'
} 
    else if(document.getElementById("imp").checked==true){
        bmi= 703*n/(n1*n1)
        document.getElementById('para').innerHTML+='<h2>'+ bmi +'</h2>'
    }
    else{
        alert("choose a unit system")
        return
    }

    if(bmi<=18.4)
    {
        document.getElementById('para').innerHTML+='<h2>'+ 'Underweight' +'</h2>'
    }
    else if(bmi<=24.9)
    {
        document.getElementById('para').innerHTML+='<h2>'+ 'Normal' +'</h2>'
    }
    else if(bmi<=29.9)
    {
        document.getElementById('para').innerHTML+='<h2>'+ 'Overweight' +'</h2>'
    }
    else if(bmi<=34.9)
    {
        document.getElementById('para').innerHTML+='<h2>'+ 'Obesity (Class 1)' +'</h2>'
    }
    else if(bmi<=39.9)
    {
        document.getElementById('para').innerHTML+='<h2>'+ 'Obesity (Class 2)' +'</h2>'
    }
    else
    {
        document.getElementById('para').innerHTML+='<h2>'+ 'Obesity (Class 3)' +'</h2>'
    }

}
function dmetric()
{
    document.getElementById("in").placeholder="kgs"
    document.getElementById("in1").placeholder="meters"
}

function dimperial()
{
    document.getElementById("in").placeholder="pounds"
    document.getElementById("in1").placeholder="inches"
}