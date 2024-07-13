

function calculer()
{
    var n1=parseInt(document.getElementById('n1').value);
    var n2=parseInt(document.getElementById('n2').value);
    var oper=document.getElementById('operators').value;
    if (oper==='+') {
        document.getElementById('resultat').value = n1 +n2 ;
    }
    if (oper==='-') {
        document.getElementById('resultat').value = n1 -n2 ;
    }
    if (oper==='*') {
        document.getElementById('resultat').value = n1 *n2 ;
    }
    if (oper==='/') {
        document.getElementById('resultat').value = n1 /n2 ;
    }
    if (oper==='/ '&& n2==='0') {
        alert('error');
    }
  
}