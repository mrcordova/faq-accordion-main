const qCon = document.querySelectorAll('.q-con');
let showingPara = false;

const resetPara = (para, img) => {
    for (const qHeading of qCon) {
        const tempPara = qHeading.querySelector('p');
        const tempImg = qHeading.querySelector('img');
        if (!tempPara.classList.contains('hide') && tempPara !== para) {
            tempPara.classList.replace('anim', 'hide');
            tempImg.src = `${String(img.src).replace('minus', 'plus') }`
        }
        
    }
}
 
const showPara = (e) => {
     
    const para = e.currentTarget.querySelector('p');
    const img = e.currentTarget.querySelector('img');

    resetPara(para, img);

  
    if (para.classList.contains('hide')) {
        
        para.classList.replace('hide', 'anim');
        img.src = `${String(img.src).replace('plus', 'minus') }`
        
    } else {
    
        para.classList.replace('anim','hide');
        img.src = `${String(img.src).replace('minus', 'plus') }`
    }
}

for (const qHeading of qCon) {
    qHeading.addEventListener('click', showPara);    
}