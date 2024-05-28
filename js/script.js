const qCon = document.querySelectorAll('.q-con');
let showingPara = false;


const showPara = (e) => {
     
    const para = e.currentTarget.querySelector('p');
    const img = e.currentTarget.querySelector('img');

    for (const qHeading of qCon) {
        const tempPara = qHeading.querySelector('p');
        const tempImg = qHeading.querySelector('img');
        if (!tempPara.classList.contains('hide') && tempPara !== para) {
            tempPara.classList.add('hide');
            tempImg.src = `${String(img.src).replace('minus', 'plus') }`
        }
        
    }

  
    if (para.classList.contains('hide')) {
        console.log(para);
        para.classList.replace('hide', 'anim');
        img.src = `${String(img.src).replace('plus', 'minus') }`
        
    } else {
        console.log("here");
        para.classList.replace('anim','hide');
        img.src = `${String(img.src).replace('minus', 'plus') }`
    }
}

for (const qHeading of qCon) {
    qHeading.addEventListener('click', showPara);    
}