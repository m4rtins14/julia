function Area () {
    let r=Number(prompt("Informe o valor da largura do retangulo"))
    let y=Number(prompt("informe o valor do comprimento do retangulo"))
    let x=Number(prompt("informe o valor da altura do retangulo"))
    let resultado=r*y*x
    alert("o resultado da área é  "+resultado+"m²")
    document.getElementById('a_ret').innerHTML="o resultado do volume é  "+resultado+"m²"
    document.getElementById('a_ret').style.color="purple";
}

function Areab () {
    let l1=Number(prompt("Informe o valor do lado 1"));
    let l2=Number(prompt("Informe o valor lado 2"));
    let l3=Number(prompt("Informe o valor lado 3"));
    let resultado=l1*l2*l3
    alert("O resultado da área é"+resultado+"m²")
    document.getElementById('b_ret').innerHTML="o resultado do volume é  "+resultado+"m²"
    document.getElementById('b_ret').style.color="purple";


}

function Areac () {
    let l1=Number(prompt("Informe o valor lado 1"));
    let l2=Number(prompt("Informe o valor lado 2"));
    let resultado=l1*l2
    alert("O resultado da área é"+resultado+"m²")
    document.getElementById('c_ret').innerHTML="o resultado do volume é  "+resultado+"m²"
    document.getElementById('c_ret').style.color="purple";
}

function Areac () {
    let l1=Number(prompt("Informe o valor lado 1"));
    let l2=Number(prompt("Informe o v1alor lado 2"));
    let resultado=l1*l2
    alert("O resultado da área é"+resultado+"m²")
    document.getElementById('c_ret').innerHTML="o resultado do volume é  "+resultado+"m²"
    document.getElementById('c_ret').style.color="purple";
}

function Aread () {
    let l1=Number(prompt("Informe o valor l1"));
    let l2=Number(prompt("Informe o valor l2"));
    let l3=Number(prompt("Informe o valor l3"));
    let resultado=l1*l2*l3
    alert("O resultado da área é"+resultado+"m²")
    document.getElementById('d_ret').innerHTML="o resultado do volume é  "+resultado+"m²"
    document.getElementById('d_ret').style.color="purple";
}


function Areae () {
    let l1=Number(prompt("Informe o valor l1"));
    let l2=Number(prompt("Informe o valor l2"));
    let resultado=l1*l2
    alert("O resultado da área é"+resultado+"m²")
    document.getElementById('e_ret').innerHTML="o resultado do volume é  "+resultado+"m²"
    document.getElementById('e_ret').style.color="purple";
}
