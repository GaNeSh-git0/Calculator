function appendValue(val) {
    document.getElementById('display').value += val;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let disp = document.getElementById('display');
    disp.value = disp.value.slice(0, -1);
}

function calculate() {
    let disp = document.getElementById('display');
    try {
        disp.value = eval(disp.value.replace('%', '/100'));
    } catch {
        disp.value = 'Error';
    }
}