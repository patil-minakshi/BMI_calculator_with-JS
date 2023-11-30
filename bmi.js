const forms = document.querySelector('form');
forms.addEventListener('submit', function (e) {
    e.preventDefault();

    const Height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#Weight').value);
    const resultS = document.querySelector('#Result');

    if (Height === '' || Height < 0 || isNaN(Height)) {
        resultS.innerHTML = `please give a valid height ${Height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        resultS.innerHTML = `please give a valid weight ${weight}`;
    } else {
        const bmi = (weight / ((Height * Height) / 10000)).toFixed(2);
        resultS.innerHTML = `${bmi}`
        let calculatedBmi = '';
        if (bmi < 18.6) {
            calculatedBmi += `Yor weight is undreweight`
        } else if (bmi > 18.6 || bmi < 24.9) {
            calculatedBmi += `Yor weight is undreweight`
        } else {
            calculatedBmi += `Yor weight is undreweight`
        }
        resultS.innerHTML = `${bmi} <br> ${calculatedBmi}`


    }

})

