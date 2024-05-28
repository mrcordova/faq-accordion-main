const qCon = document.querySelectorAll('.q-con');
let showingPara = false;


const showPara = (e) => {
    // console.log(e.currentTarget); 
    const para = e.currentTarget.querySelector('p');
    if (para.classList.contains('hide')) {
        para.classList.remove('hide');
    } else {
        para.classList.add('hide');
    }
    console.log(para.classList);
}

for (const qHeading of qCon) {
    qHeading.addEventListener('click', showPara);    
}