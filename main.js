function  btnHandle() {
    var rValue = parseInt(document.getElementById('rValue').value);
    var gValue = parseInt(document.getElementById('gValue').value);
    var bValue = parseInt(document.getElementById('bValue').value);
    var result = ("#"+rValue.toString(16)+gValue.toString(16)+bValue.toString(16));
    alert(result.toUpperCase());
}

