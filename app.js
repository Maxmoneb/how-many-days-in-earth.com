let user;
document.getele
function calculatedays(){
    let d1=document.getElementById('d1').value;
    let d2=document.getElementById('d2').value;
    const dateone= new Date(d1);
    const datetwo= new Date(d2);
    const time=Math.abs(datetwo-dateone);
    const days=Math.ceil(time/(1000 * 60 * 60* 24));
    document.getElementById('output').innerHTML="you have been " +  days + " days in earth";


}

