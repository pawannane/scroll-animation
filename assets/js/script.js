const boxes = document.querySelectorAll(".content-box");



const getBox = () => {
  // console.log(`window scrolled!`);

  const windowHeight = window.innerHeight;
  const revealContent = 148;
  // console.log(windowHeight - revealContent);

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;

    if(box == boxes[2]){
      console.log('im box 3');
      // console.log(boxTop)
      var offSetTop = box.offsetTop;
      console.log(offSetTop);
    }

    // console.log(`${idx}'s = ${boxTop}`);
    // var scrollTop = document.documentElement.scrollTop;

    // var scrollHeight = box.offsetHeight;
    // console.log(scrollHeight);


    if (boxTop < windowHeight - revealContent) {
      box.classList.add('active')
    } else {
      box.classList.remove('active')
    }

  })
}

window.addEventListener('scroll', getBox)

