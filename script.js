function createTable() {
    const number = document.getElementById('numberInput').value;
    let results = '';

    // Using a for loop for multiplication table 
    results += '<h3>Using For Loop:</h3><ul>';
    for (let i = 1; i <= 10; i++) {
        results += `${number} x ${i} = ${number * i}<br>`;
    }
    results += '</ul>';

    // table multiplication using while loop
    results += '<h3>Using While Loop:</h3><ul>';
    let j = 1;
    while (j <= 10) {
        results += `${number} x ${j} = ${number * j}<br>`;
        j++;
    }
    results += '</ul>';

    //  code of do-while loop
    results += '<h3>Using Do-While Loop:</h3><ul>';
    let k = 1;
    do {
        results += `${number} x ${k} = ${number * k}<br>`;
        k++;
    } while (k <= 10);
    results += '</ul>';

    //  to display results we use it:
    document.getElementById('results').innerHTML = results;
}
