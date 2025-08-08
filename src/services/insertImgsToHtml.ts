export function setAllEmptyImgSrc(
    htmlString: string,
    newSrcArray: string[] | string
  ): string {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
  
    const paragraphs = Array.from(doc.querySelectorAll('p'));
    let imgIndex = 0;
  
    paragraphs.forEach((p) => {
      if (p.innerText.trim() === '--IMG--') {
        const img = doc.createElement('img');
  
        const src =
          typeof newSrcArray === 'string'
            ? newSrcArray
            : newSrcArray[imgIndex] || newSrcArray[0]; 
  
        img.setAttribute('src', src);
        img.setAttribute('alt', 'Imagen del blog');
        if(imgIndex == 0){
          img.classList.add('w-[100%]','md:w-[30%]','lg:w-[25%]','xl:w-[20%]','md:float-right','md:h-[350px]','2xl:h-96');
        }else{
          img.classList.add('md:hidden');
        }
        p.replaceWith(img);
        imgIndex++;
      }
    });
  
    return doc.body.innerHTML;
  }
  