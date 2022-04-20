const INPUT_CONTACT = Array.from(document.getElementsByTagName('input'));
const nextBTN = document.querySelector('.nextBTN');
const pictureBox = document.querySelector('.pictureBox');
const nextBTNTwo = document.querySelector('.nextBTNTwo');
const tellBTN = document.querySelector('.tellBTN');
const generationData =  Array.from(document.querySelector('.generationData').children);
const imgThumb1 = document.querySelector('.imgThumb1');

const container1 = document.querySelector('.container1');
const container2 = document.querySelector('.container2');
const container3 = document.querySelector('.container3');
const container4 = document.querySelector('.container4');
const container5 = document.querySelector('.container5');
const container6 = document.querySelector('.container6');
const container7 = document.querySelector('.container7');
const container8 = document.querySelector('.container8');
const container9 = document.querySelector('.container9');

let containers = [container1, container2, container3, container4, container5, container6];

const footer = document.querySelector('.footer');

const dayB = document.getElementById('day');
const monthB = document.getElementById('month');
const yearB = document.getElementById('year');

const dateOven = new Date('0000', '02', '21');
const dateTeletc = new Date('0000', '03', '21');
const dateBliznuk = new Date('0000', '04', '21');
const dateRak = new Date('0000', '05', '21');
const dateLev = new Date('0000', '06', '23');
const dateDiva = new Date('0000', '07', '23');
const dateVesy = new Date('0000', '08', '24');
const dateScorpion = new Date('0000', '09', '24');
const dateStriletc = new Date('0000', '10', '22');
const dateKozerog = new Date('0000', '11', '22');
const dateVodoley = new Date('0000', '00', '22');
const dateRiby = new Date('0000', '01', '19');

const aries = document.getElementById('aries');
const taurus = document.getElementById('taurus');
const gemini = document.getElementById('gemini');
const rak = document.getElementById('rak');
const leo = document.getElementById('leo');
const virgo = document.getElementById('virgo');
const libra = document.getElementById('libra');
const scorpio = document.getElementById('scorpio');
const sagittarius = document.getElementById('sagittarius');
const capricorn = document.getElementById('capricorn');
const aquarius = document.getElementById('aquarius');
const pisces = document.getElementById('pisces');

const chooseAnswer = document.querySelector('.chooseAnswer');

let arrInformAboutPeople = [];
let objPeople;

let date = [];
let dateBRD;
let dateGOR;

  dayB.addEventListener('change',() => {
    date[2] = dayB.value;
    dateBRD = new Date(date[0], date[1]-1, date[2]);
    dateGOR = new Date('0000', date[1]-1, date[2]);
    showGorImg();
     if(date.length == 3 && date[2] !== "День" && date[1] !== "Месяц" && date[0] !== "Год" &&
       date[2] !== undefined && date[1] !== undefined && date[0] !== undefined){
      dayB.classList.add('selectBold');
      monthB.classList.add('selectBold');
      yearB.classList.add('selectBold');
      nextBTNTwo.style.display = 'block';
      chooseAnswer.style.display = 'none';
    }else if(date[2] == 'День' || date[1] == 'Месяц' || date[0] == 'Год'){
      dayB.classList.remove('selectBold');
      monthB.classList.remove('selectBold');
      yearB.classList.remove('selectBold');
      nextBTNTwo.style.display = 'none';
      chooseAnswer.style.display = 'flex'}
  });
  monthB.addEventListener('change',() => {
    date[1] = monthB.value;   
    dateBRD = new Date(date[0], date[1]-1, date[2]);
    dateGOR = new Date('0000', date[1]-1, date[2]);
    showGorImg();
  if(date.length == 3 && date[2] !== "День" && date[1] !== "Месяц" && date[0] !== "Год" &&
  date[2] !== undefined && date[1] !== undefined && date[0] !== undefined){
    dayB.classList.add('selectBold');
    monthB.classList.add('selectBold');
    yearB.classList.add('selectBold');
    nextBTNTwo.style.display = 'block';
    chooseAnswer.style.display = 'none';
  }else if(date[2] == 'День' || date[1] == 'Месяц' || date[0] == 'Год'){
    dayB.classList.remove('selectBold');
    monthB.classList.remove('selectBold');
    yearB.classList.remove('selectBold');
    nextBTNTwo.style.display = 'none';
    chooseAnswer.style.display = 'flex'}
  });
  yearB.addEventListener('change',() => {
      date[0] = yearB.value;
      dateBRD = new Date(date[0], date[1]-1, date[2]);
      dateGOR = new Date('0000', date[1]-1, date[2]);
    if(date.length == 3 && date[2] !== "День" && date[1] !== "Месяц" && date[0] !== "Год" &&
    date[2] !== undefined && date[1] !== undefined && date[0] !== undefined){
      dayB.classList.add('selectBold');
      monthB.classList.add('selectBold');
      yearB.classList.add('selectBold');
      nextBTNTwo.style.display = 'block';
      chooseAnswer.style.display = 'none';
    } else if(date[2] == 'День' || date[1] == 'Месяц' || date[0] == 'Год'){
      dayB.classList.remove('selectBold');
      monthB.classList.remove('selectBold');
      yearB.classList.remove('selectBold');
      nextBTNTwo.style.display = 'none';
      chooseAnswer.style.display = 'flex'}
  });
  
  let optYear = document.createElement("OPTION");
  yearB.appendChild(optYear).innerHTML = 'Год';
   for (let year = 1920; year <= 2020; year++) {
    let options = document.createElement("OPTION");
    yearB.appendChild(options).innerHTML = year;
  };
  
  let optMonth = document.createElement("OPTION");
  monthB.appendChild(optMonth).innerHTML = 'Месяц';
  for (let month = 1; month <= 12;) {
    let month1 = String(month);
    if(month1.length == 1){
      month =  "0" + month;
      let options = document.createElement("OPTION");
    monthB.appendChild(options).innerHTML = month;
    month++
    } else {
      let options = document.createElement("OPTION");
    monthB.appendChild(options).innerHTML = month;
    month++
    }
  };

  let optDay = document.createElement("OPTION");
  dayB.appendChild(optDay).innerHTML = 'День';
  for (let day = 1; day <= 31;) {
    let day1 = String(day);
    if(day1.length == 1){
      day =  "0" + day;
      let options = document.createElement("OPTION");
    dayB.appendChild(options).innerHTML = day;
    day++
    } else {
      let options = document.createElement("OPTION");
    dayB.appendChild(options).innerHTML = day;
    day++
    }
  };
  
let contactValue;
function onChangeBTN(){
    for (let i = 0; i < INPUT_CONTACT.length; i++) {
        if (INPUT_CONTACT[i].checked) {
            nextBTN.style.visibility = 'visible';
            contactValue = INPUT_CONTACT[i].value;
        }
    }
}
let i = 0;
nextBTN.addEventListener('click',() => {
    arrInformAboutPeople[i] = contactValue;
    containers[i].style.display = 'none';
    i++;
    containers[i].style.display = '';
    nextBTN.style.visibility = 'hidden'; 
})

nextBTNTwo.addEventListener('click',() => {
  arrInformAboutPeople[i] = dateBRD;
  objPeople = new CreateObjInform(arrInformAboutPeople);
  container6.style.display = 'none';
  container7.style.display = '';
  loader();   
})

tellBTN.addEventListener('click', () =>{
  container8.style.display = 'none';
  container9.style.display = 'flex';
  getDateAPI();
})

function getDateAPI(){
  const getData = async function(URL){
    const response = await fetch(URL);
    if(!response.ok){
      throw newError(`Ошибка ${response.status} `)
    }
    return await response.json()
  }
  
  getData('https://swapi.dev/api/people/1/').then((data) =>{
    
    const ulDataList = document.createElement('ul');
    ulDataList.classList.add('peopleData')
    container9.appendChild(ulDataList);
    ulDataList.innerHTML =
      `
           <li>Name:<span>${data.name}</span> </li>
           <li>Height:<span>${data.height}</span> </li>
           <li>Mass:<span>${data.mass}</span></li>
           <li>Hair_color:<span>${data.hair_color}</span></li>
           <li>Skin_color:<span>${data.skin_color}</span></li>
           <li>Eye_color:<span>${data.eye_color}</span></li>
           <li>Birth_year:<span>${data.birth_year}</span></li>
           <li>Gender:<span>${data.gender}</span></li>`;      
  })  
    .catch((err) => {console.log(err)});  
}

function showGorImg(){
  if(dateGOR >= dateOven && dateGOR < dateTeletc){
    pictureNone();
    aries.style.display = 'block';
  }else if(dateGOR >= dateTeletc && dateGOR < dateBliznuk){
    pictureNone();
    taurus.style.display = 'block';
  }else if(dateGOR >= dateBliznuk && dateGOR < dateRak){
    pictureNone();
    gemini.style.display = 'block';
  }else if(dateGOR >= dateRak && dateGOR < dateLev){
    pictureNone();
    rak.style.display = 'block';
  }else if(dateGOR >= dateLev && dateGOR < dateDiva){
    pictureNone();
    leo.style.display = 'block';
  }else if(dateGOR >= dateDiva && dateGOR < dateVesy){
    pictureNone();
    virgo.style.display = 'block';
  }else if(dateGOR >= dateVesy && dateGOR < dateScorpion){
    pictureNone();
    libra.style.display = 'block';
  }else if(dateGOR >= dateScorpion && dateGOR < dateStriletc){
    pictureNone();
    scorpio.style.display = 'block';
  }else if(dateGOR >= dateStriletc && dateGOR < dateKozerog){
    pictureNone();
    sagittarius.style.display = 'block';
  }else if(dateGOR <= dateKozerog && dateGOR < dateVodoley){
    pictureNone();
    capricorn.style.display = 'block';
  }else if(dateGOR >= dateVodoley && dateGOR < dateRiby){
    pictureNone();
    aquarius.style.display = 'block';
  }else if(dateGOR >= dateRiby && dateGOR < dateOven){
    pictureNone();
    pisces.style.display = 'block';
  }else{
    pictureNone();
  } 
}
function pictureNone(){
  aries.style.display = 'none';
  taurus.style.display = 'none';
  gemini.style.display = 'none';
  rak.style.display = 'none';
  leo.style.display = 'none';
  virgo.style.display = 'none';
  libra.style.display = 'none';
  scorpio.style.display = 'none';
  sagittarius.style.display = 'none';
  capricorn.style.display = 'none';
  aquarius.style.display = 'none';
  pisces.style.display = 'none';
}

function loader(){
  let width = 0; 
  let bar = document.getElementById('bar');
  let id = setInterval(frame, 180);
  function frame() {
    if(width == 7){
      generationData[0].style.visibility = 'visible';
     }
     if(width == 18){
       generationData[1].style.visibility = 'visible';
    }else if(width == 25){
      generationData[2].style.visibility = 'visible';
    }else if(width == 35){
      generationData[3].style.visibility = 'visible';
    }else if(width == 48){
      generationData[4].style.visibility = 'visible';
    }else if(width == 56){
      generationData[5].style.visibility = 'visible';
      }else if(width == 65){
        generationData[6].style.visibility = 'visible';
    }else if(width == 70){
      generationData[7].style.visibility = 'visible';
    }else if(width == 100){
      generationData[8].style.visibility = 'visible';
      showLastPage();
    }
    if (width >= 100) {
      clearInterval(id);
    } else {   
      width++;
      bar.style.width = width + '%'; 
      bar.innerHTML = width * 1  + '%';
  }
 }
}
let rot = 0;
(function imgLoader(){  
  let idImg = setInterval(frame, 100);
  function frame(){
    if(rot >= 10){
      clearInterval(idImg);
      frameTwo()
    }else{      
    rot ++;
    imgThumb1.style.transform = 'rotate('+rot + 'deg)'}
  }
  function frameTwo(){
    let idImgTwo = setInterval(frameThree, 100)
    function frameThree(){
      if(rot <= -10){
        clearInterval(idImgTwo);
        imgLoader();
      }else{      
      rot --;
      imgThumb1.style.transform = 'rotate('+rot + 'deg)'}
    }
  }
})();

function showLastPage(){
  setTimeout(()=>{
    container7.style.display = 'none';
    footer.innerHTML = "TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE <br> DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 "
    container8.style.display = 'flex';
  }, 2000)
}

function CreateObjInform(x){
  this.Sex = x[0];
  this.TimeComfort = x[1];
  this.Insomnia = x[2];
  this.Plans = x[3];
  this.LifeAboutFiveYear = x[4];
  this.DateBirthday = x[5];
}








