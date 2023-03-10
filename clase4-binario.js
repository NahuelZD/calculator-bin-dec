function decAbin() {

    function invertirCadena(str) {
        let arrStr = str.split("");

        return arrStr.reverse().join("");
    }

    let dec = document.getElementById("dec").value;
    let resultado = document.getElementById("res-bin");

    if (isNaN(dec) || dec == '' || dec < 0) {
        resultado.innerText = 'No corresponde'
    } else if (dec == 0 || dec == 1) {
        resultado.innerHTML = `El número ${dec} en binario es: ${dec}`
    } else {
        let aux = dec;
        let mod;
        let binario = "";
        while (aux >= 2) {
            mod = aux % 2;
            aux = Math.floor(aux / 2);
            binario += mod;
            if (aux < 2) binario += '1';
        }
        resultado.innerHTML = `El número ${dec} en binario es: ${invertirCadena(binario)}`;
    }
}

function binAdec() {
    let bin = document.getElementById("bin").value;
    let resultado = document.getElementById("bin-res");

    let strBin = bin.toString();
    let verdad = 0;

    for(let i = 2; i <= 9; i++){
        if(strBin.includes(i)){
            verdad = true;
            i = 10;
        }
    }

    if (isNaN(bin) || bin == '' || bin < 0 || verdad > 0){
        resultado.innerHTML = 'No corresponde';
    } else if (bin == 0 || bin == 1){
        resultado.innerHTML = `El número ${bin} en decimal es: ${bin}`;
    } else {
        let mod;
        let aux = bin;
        let conver = 0;
        let exp = 0;
        while(aux > 0){
            mod = aux % 10;
            aux = Math.floor(aux / 10);
            conver += mod * Math.pow(2, exp);
            exp++;
        }
        resultado.innerHTML = `El número ${bin} en decimal es: ${conver}`;
    }
}