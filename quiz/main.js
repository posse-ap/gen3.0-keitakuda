const choice1 = document.getElementById("choice-1");
const choice2 = document.getElementById("choice-2");
const choice3 = document.getElementById("choice-3")

function buttonClick(judge_number){
  if ( judge_number == 0){
    document.getElementById("huseikai").style.display="block";
    choice1.classList.add("choice-none");
    choice2.classList.add("choice-none");
    choice3.classList.add("choice-none");
  }
  else{
    document.getElementById("seikai").style.display="block";
    choice1.classList.add("choice-none");
    choice2.classList.add("choice-none");
    choice3.classList.add("choice-none");
  }
}




const ALLquiz = [
  {
    title: 'Q1',
    problem: '日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？',
    answers:['約28万人','約79万人','約183万人'],
    seikai: 1,
    img: '../assets-ph1-website-main/img/quiz/img-quiz01.png',
    bunkei: `<cite class="Q1-cite"><i class="u-icon__note"></i>経済産業省 2019年3月 － IT 人材需給に関する調査</cite>`,
  },
  {
    title: 'Q2',
    problem: '既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？',
    answers:['INTECH','BIZZTECH','X-TECH'],
    seikai: 2,
    img: '../assets-ph1-website-main/img/quiz/img-quiz02.png',
    bunkei: ``,
  },
  {
    title: 'Q3',
    problem: 'IoTとは何の略でしょう？',
    answers:['Internet of Things','Integrate into Technology','Information on Tool'],
    seikai: 1,
    img: '../assets-ph1-website-main/img/quiz/img-quiz03.png',
    bunkei: ``,
  },
  {
    title: 'Q4',
    problem: 'イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？',
    answers:['Society 5.0','CyPhy','SDGs'],
    seikai: 1,
    img: '../assets-ph1-website-main/img/quiz/img-quiz04.png',
    bunkei: `<cite class="Q1-cite"><i class="u-icon__note"></i>Society5.0 - 科学技術政策 - 内閣府</cite>`,
  },
  {
    title: 'Q5',
    problem: 'イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？',
    answers:['Web3.0','NFT','メタバース'],
    seikai: 1,
    img: '../assets-ph1-website-main/img/quiz/img-quiz05.png',
    bunkei: ``,
  },
  {
    title: 'Q6',
    problem: '先進テクノロジー活用企業と出遅れた企業の収益性の差はどれくらいあると言われているでしょうか？',
    answers:['約２倍','約５倍','約11倍'],
    seikai: 1,
    img: '../assets-ph1-website-main/img/quiz/img-quiz06.png',
    bunkei: `<cite class="Q1-cite"><i class="u-icon__note"></i>Accenture Technology Vision 2021</cite>`,
  }
];

let elem = document.getElementById("main-quiz")


let main = ""
for (let i = 0; i < ALLquiz.length; i++) {
  main +=  `<h1 class="Q1-title">${ALLquiz[i].title}</h1>`
  + `<h2 class="Q1-text">${ALLquiz[i].problem}</h2>`
  + `<div class="Q1-image-div">`
  + `<img class="Q1-image" src="${ALLquiz[i].img}" alt="">`
  + `</div>`
  + `<div class="Q1-answer">`
  + `<h1 class="Q1-answer-title">A</h1>`
  + `<ul class="Q1-answer-answer">`
  + `<li><button class="Q1-answer-answer-1" id="choice-1" onclick="buttonClick(0)">${ALLquiz[i].answers[0]}<i class="u-icon__arrow"></i></button>`
  + `</li>`
  + `<li><button class="Q1-answer-answer-1" id="choice-2" onclick="buttonClick(1)">${ALLquiz[i].answers[1]}<i class="u-icon__arrow"></i></button>`
  + `</li>`
  + `<li><button class="Q1-answer-answer-1" id="choice-3" onclick="buttonClick(0)">${ALLquiz[i].answers[2]}<i class="u-icon__arrow"></i></button>`
  + `</li>`
  + `</ul>`
  + `</div>`
  + `<div class="Q1-seikai-huseikai">`
  + `<div class="Q1-seikai" id="seikai">`
  + `<h1>正解</h1>`
  + `<h2>A　${ALLquiz[i].answers[ALLquiz[i].seikai]}</h2>`
  + `</div>`
  + `<div class="Q1-seikai" id="huseikai">`
  + `<h1>不正解...</h1>`
  + `<h2>A　${ALLquiz[i].answers[ALLquiz[i].seikai]}</h2>`
  + `</div>`
  + `</div>`
  + `${ALLquiz[i].bunkei}`
  + `</div>`

  elem.innerHTML = main;
  
};

