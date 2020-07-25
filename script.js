const entities = [
      { link: 'Rostov-on-Don, Admiral',
        img: 'img/image2.1.jpg',
        dot: '0',
        city: 'Rostov-on-Don \n LCD Admiral',
        area: '81 m2',
        time: '3,5 months',
        cost: 'Upon request'
      },
        
      { link: 'Sochi Thieves',
        img: 'img/image2.2.jpg',
        dot: '1',
        city: 'Sochi \n Thieves',
        area: '105 m2',
        time: '4 months',
        cost: 'Upon request'
      },

      { link: 'Rostov-on-Don Patriotic',
        img: 'img/image2.3.jpg',
        dot: '2',
        city: 'Rostov-on-Don \n Patriotic',
        area: '93 m2',
        time: '3 months',
        cost: 'Upon request'
      }
  ];


  const links = document.querySelectorAll('.link_str'),
        dots = document.querySelectorAll('.dot')
        img = document.querySelector('.slider_img'),
        city = document.querySelector('.city'),
        area = document.querySelector('.area'),
        time = document.querySelector('.time'),
        cost = document.querySelector('.cost'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next');


const setEntity = (index) => {
    city.innerText = entities[index].city;
    img.src = entities[index].img;
    area.innerText = entities[index].area;
    time.innerText = entities[index].time;
    cost.innerText = entities[index].cost;
    prepareCurrentSlide(index);
}

let currentIndex = 0;
  
prev.addEventListener('click', () => {
  setEntity(currentIndex - 1);
  currentIndex -= 1;
  
})

next.addEventListener('click', () => {
  setEntity(currentIndex + 1);
  currentIndex += 1;
})

const activeDot = n => {
    for (dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const activeLink = n => {
    for (link of links) {
        link.classList.remove('active');
    }
    links[n].classList.add('active');
}

const prepareCurrentSlide = ind => {
    activeDot(ind);
    activeLink(ind);
}


dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        currentIndex = indexDot;
        setEntity(currentIndex);
        prepareCurrentSlide(currentIndex);
    })
})

links.forEach((item, indexLink) => {
    item.addEventListener('click', () => {
        currentIndex = indexLink;
        setEntity(currentIndex);
        prepareCurrentSlide(currentIndex);
    })
})
