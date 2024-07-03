function calc() {
    let ntn1 = window.document.getElementById('nb1').value;
    let ntn2 = window.document.getElementById('nb2').value;
    let n1 = Number(ntn1);
    let n2 = Number(ntn2);

    if (n1 !== Number(n1) || n2 !== Number(n2)) {
        alert("Não foi possível calcular. Por favor, insira números.");
        return;
    }

    let sum = n1 + n2;
    let div = n1 / n2;
    let mult = n1 * n2;
    let sub = n1 - n2;

    res.setAttribute('placeholder', sum);
    resd.setAttribute('placeholder', div.toFixed(2));
    resm.setAttribute('placeholder', mult);
    resb.setAttribute('placeholder', sub);
}


function converterF() {
    let c1 = window.document.getElementById('c1n').value;
    let n1 = Number(c1);
    let calc = n1 * 1.8 + 32;

    if (n1 !== Number(n1)) {
        alert("Não foi possível calcular. Por favor, insira números.");
        return;
    }

    con.setAttribute('placeholder', calc.toFixed(1) + " °F");
}

function converterC() {
    let c2 = window.document.getElementById('c2n').value;
    let n2 = Number(c2);
    let calc = (n2 - 32) / 1.8;

    if (n2 !== Number(n2)) {
        alert("Não foi possível calcular. Por favor, insira números.");
        return;
    }

    con2.setAttribute('placeholder', calc.toFixed(1) + " °C");
}

function imc() {
    let c3 = window.document.getElementById('c3n');
    let c4 = window.document.getElementById('c4n');
    let n3 = Number(c3.value);
    let n4 = Number(c4.value);
    let calc = n3 / (n4 * n4);

    con3.setAttribute('placeholder', calc.toFixed(2) + " kg/m2");
}

function th() {

    let c5 = window.document.getElementById('c5n');
    let c6 = window.document.getElementById('c6n');
    let c7 = window.document.getElementById('c7n');
    let c8 = window.document.getElementById('c8n');
    let n5 = Number(c5.value);
    let n6 = Number(c6.value);
    let n7 = Number(c7.value);
    let n8 = Number(c8.value);
    const radi = (n7 * Math.PI) / 180;
    const calc = n5 + (n8 * Math.tan(radi)) - ((9.81 * n8 * n8) / (2 * n6 * n6 * Math.pow(Math.cos(radi), 2)));

    con4.setAttribute('placeholder', calc.toFixed(2) + " m2");
}

function tv() {
    let c9 = window.document.getElementById('c9n');
    let c10 = window.document.getElementById('c10n');
    let c11 = window.document.getElementById('c11n');
    let c12 = window.document.getElementById('c12n');
    let n9 = Number(c9.value);
    let n10 = Number(c10.value);
    let n11 = Number(c11.value);
    let n12 = Number(c12.value);
    const radi = (n11 * Math.PI) / 180;
    const calc = n9 + (n10 * Math.sin(radi) * n12) - (0.5 * 9.81 * Math.pow(n12, 2));

    con5.setAttribute('placeholder', calc.toFixed(2) + " m2");
}