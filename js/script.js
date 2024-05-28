const qCon = document.querySelectorAll('.q-con');
let showingPara = false;


const showPara = (e) => {
    // console.log(e.currentTarget); 
    const para = e.currentTarget.querySelector('p');
    const img = e.currentTarget.querySelector('img');
    if (para.classList.contains('hide')) {
        para.classList.remove('hide');
        img.src = `${String(img.src).replace('plus', 'minus') }`
        

    } else {
        para.classList.add('hide');
        img.src = `${String(img.src).replace('minus', 'plus') }`
    }
    console.log(img.src);
}

for (const qHeading of qCon) {
    qHeading.addEventListener('click', showPara);    
}