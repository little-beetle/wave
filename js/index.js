// select

let burger = document.querySelector(".burger");
let menu = document.querySelector(".header__nav");
let menu__1 = document.querySelector(".header__nav__2");
let menuLinks = menu.querySelectorAll(".header__link");

burger.addEventListener("click", function () {
  burger.classList.toggle("burger--active");
  menu.classList.toggle("header__nav--active");
  menu__1.classList.toggle("header__nav__1--active");
  document.body.classList.toggle("stop-scroll");
});

menuLinks.forEach(function (el) {
  el.addEventListener("click", function () {
    burger.classList.remove("burger--active");

    menu.classList.remove("header__nav--active");
    menu__1.classList.remove("header__nav__1--active");
    document.body.classList.remove("stop-scroll");
  });
});

let btnActive = document.querySelector(".wrapper__btn__play");
let wrapperBtn = document.querySelector(".header__btn__wrapper");

btnActive.addEventListener("click", function () {
  btnActive.classList.toggle("header__wrapper__btn--active");
  wrapperBtn.classList.toggle("wrapper__btn__play--active");
  document.body.classList.toggle("stop-scroll");
});

btnActive.addEventListener("click", function () {
  search.classList.remove("header__wrapper__btn--active");
  enter.classList.remove("wrapper__btn__play--active");
  document.body.classList.remove("stop-scroll");
});

let btnA = document.querySelector(".btn__play__header");

btnA.addEventListener("click", function () {
  btnA.classList.toggle("header__wrapper__btn--active");
  wrapperBtn.classList.toggle("wrapper__btn__play--active");
  document.body.classList.toggle("stop-scroll");
});

btnA.addEventListener("click", function () {
  search.classList.remove("header__wrapper__btn--active");
  enter.classList.remove("wrapper__btn__play--active");
  document.body.classList.remove("stop-scroll");
});

// swiper

const swiper = new Swiper(".swiper", {
  slidesPerView: 2,
  slidesPerGroup: 1,
  breakpoints: {
    1300: {
      slidesPerView: 4,
    },
  },
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});

// пошук

let search = document.querySelector(".header__search");
let enter = document.querySelector(".enter-search");

let exit__search = document.querySelectorAll(".exit");
search.addEventListener("click", function () {
  search.classList.toggle("header__search--active");
  enter.classList.toggle("enter-search--active");
  document.body.classList.toggle("stop-scroll");
});

exit__search.forEach(function (el) {
  el.addEventListener("click", function () {
    search.classList.remove("header__search--active");
    enter.classList.remove("enter-search--active");
    document.body.classList.remove("stop-scroll");
  });
});

let exitBtn = document.querySelectorAll(".header__btn__enter");
let enterBlock = document.querySelector(".enter");

let outBtn = document.querySelectorAll(".close__btn");
exitBtn.forEach(function (el) {
  el.addEventListener("click", function () {
    el.classList.toggle("header__enter--active");
    enterBlock.classList.toggle("enter--active");
    document.body.classList.toggle("stop-scroll");
  });
});

outBtn.forEach(function (el) {
  el.addEventListener("click", function () {
    exitBtn.forEach(function (e) {
      e.addEventListener("click", function () {
        e.classList.remove("header__enter--active");
      });
      enterBlock.classList.remove("enter--active");
      document.body.classList.remove("stop-scroll");
    });
  });
});

// зміна

document.querySelector(".play__btn__1").addEventListener("click", function (e) {
  e.target.closest(".play__btn__1").classList.toggle("play__btn__1--toggle");
});
document.querySelector(".play__btn__2").addEventListener("click", function (e) {
  e.target.closest(".play__btn__2").classList.toggle("play__btn__2--toggle");
});

let btnPlaylist = document.querySelectorAll(".playlist__item__wrapper");

btnPlaylist.forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.target
      .closest(".playlist__item__wrapper")
      .classList.toggle("playlist__item__wrapper--toggle");
  });
});

let btnPlay = document.querySelectorAll(".btn__play");

btnPlay.forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.target.closest(".btn__play").classList.toggle("btn__play--toggle");
  });
});

let btnLike = document.querySelectorAll(".like__btn");

btnLike.forEach(function (el) {
  el.addEventListener("click", function (e) {
    e.target.closest(".like__btn").classList.toggle("like__btn--toggle");
  });
});

//

const btnMore = document.querySelector(".podcast__btn");
const podcastItems = document.querySelectorAll(".podcast__item");

btnMore.addEventListener("click", () => {
  podcastItems.forEach((el) => {
    el.classList.add("podcast__item--visible");
  });
  btnMore
    .closest(".podcast__btn__block")
    .classList.add("podcast__btn__block--hidden");
});

// акордіон

const element = document.querySelector("select");
const choices = new Choices(element, {
  searchEnabled: false,
});

new Accordion(".accordion-list", {
  elementClass: "accordion",
  triggerClass: "accordion__control",
  panelClass: "accordion__content",
  activeClass: "accordion--active",
});

// Зміна блоку про гостей

var HIDDEN_CLASS_NAME = "hidden";
var TARGET_CLASS_NAME = "target";
var SOURCE_CLASS_NAME = "source";

var targetIdToShow = 1;

function main() {
  var targets = getElements(TARGET_CLASS_NAME);
  var sources = getElements(SOURCE_CLASS_NAME);
  sources.forEach(function (sourceNode) {
    var sourceNodeId = extractId(sourceNode, SOURCE_CLASS_NAME);
    sourceNode.addEventListener("click", function () {
      showTarget(targets, sourceNodeId);
    });
  });
  showTarget(targets, targetIdToShow);
}

function getElements(type) {
  return [].slice
    .call(document.querySelectorAll("." + type))
    .sort(function (targetNode1, targetNode2) {
      var target1Num = extractId(targetNode1, TARGET_CLASS_NAME);
      var target2Num = extractId(targetNode2, TARGET_CLASS_NAME);
      return target1Num > target2Num;
    });
}

function extractId(targetNode, baseClass) {
  var currentClassIndex = targetNode.classList.length;
  while (currentClassIndex--) {
    var currentClass = targetNode.classList.item(currentClassIndex);
    var maybeIdNum = parseInt(currentClass.split("-")[1]);
    if (isNaN(maybeIdNum)) {
      continue;
    }
    var classStrinToValidate = baseClass + "-" + maybeIdNum;
    if (classStrinToValidate === currentClass) {
      return maybeIdNum;
    }
  }
}

function showTarget(targets, targetId) {
  targets.forEach(function (targetNode, targetIndex) {
    var currentTargetNodeId = extractId(targetNode, TARGET_CLASS_NAME);
    if (currentTargetNodeId === targetId) {
      targetNode.classList.remove(HIDDEN_CLASS_NAME);
    } else {
      targetNode.classList.add(HIDDEN_CLASS_NAME);
    }
  });
}

main();

var HIDDEN_CLASS_NAME__1 = "hidden__1";
var TARGET_CLASS_NAME__1 = "target__1";
var SOURCE_CLASS_NAME__1 = "source__1";

var targetIdToShow__1 = 1;

function foo() {
  var targets__1 = getElements__1(TARGET_CLASS_NAME__1);
  var sources__1 = getElements__1(SOURCE_CLASS_NAME__1);
  sources__1.forEach(function (sourceNode__1) {
    var sourceNodeId__1 = extractId__1(sourceNode__1, SOURCE_CLASS_NAME__1);
    sourceNode__1.addEventListener("click", function () {
      showTarget__1(targets__1, sourceNodeId__1);
    });
  });
  showTarget__1(targets__1, targetIdToShow__1);
}

function getElements__1(type) {
  return [].slice
    .call(document.querySelectorAll("." + type))
    .sort(function (targetNode1__1, targetNode2__1) {
      var target1Num__1 = extractId__1(targetNode1__1, TARGET_CLASS_NAME__1);
      var target2Num__1 = extractId__1(targetNode2__1, TARGET_CLASS_NAME__1);
      return target1Num__1 > target2Num__1;
    });
}

function extractId__1(targetNode__1, baseClass__1) {
  var currentClassIndex__1 = targetNode__1.classList.length;
  while (currentClassIndex__1--) {
    var currentClass__1 = targetNode__1.classList.item(currentClassIndex__1);
    var maybeIdNum__1 = parseInt(currentClass__1.split("-")[1]);
    if (isNaN(maybeIdNum__1)) {
      continue;
    }
    var classStrinToValidate__1 = baseClass__1 + "-" + maybeIdNum__1;
    if (classStrinToValidate__1 === currentClass__1) {
      return maybeIdNum__1;
    }
  }
}

function showTarget__1(targets, targetId) {
  targets.forEach(function (targetNode__1, targetIndex__1) {
    var currentTargetNodeId = extractId(targetNode__1, TARGET_CLASS_NAME__1);
    if (currentTargetNodeId === targetId) {
      targetNode__1.classList.remove(HIDDEN_CLASS_NAME__1);
    } else {
      targetNode__1.classList.add(HIDDEN_CLASS_NAME__1);
    }
  });
}

foo();

// form

new JustValidate(".about__us__form", {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 10,
    },
    mail: {
      required: true,
      email: true,
    },
  },
  messages: {
    name: "Ошибка",

    mail: "Ошибка",
  },
});

new JustValidate(".form__enter", {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 10,
    },

    password: {
      required: true,
      minLength: 2,
      maxLength: 10,
    },
  },
  messages: {
    name: "Ошибка",

    password: "Ошибка",
  },
});

// audio

var MolchatDoma = document.getElementById("Molchat__Doma");
var Ploho = document.getElementById("Ploho");
var Motorama = document.getElementById("Motorama");
var HumasTetris = document.getElementById("HumasTetris");
var Buerak = document.getElementById("Buerak");
var JulyDays = document.getElementById("JulyDays");
var JoyDivision = document.getElementById("JoyDivision");
var TheCure = document.getElementById("TheCure");
var TheSmiths = document.getElementById("TheSmiths");
var NewOrder = document.getElementById("NewOrder");
var Bauhaus = document.getElementById("Bauhaus");
var GangOfFour = document.getElementById("GangOfFour");
var GangOfFour = document.getElementById("GangOfFour");
var PreviousSong = document.getElementById("PreviousSong");
var toggle = document.getElementById("toggle");

var podcast__audio__1 = document.getElementById("podcast__audio__1");
var podcast__audio__2 = document.getElementById("podcast__audio__2");
var podcast__audio__3 = document.getElementById("podcast__audio__3");
var podcast__audio__4 = document.getElementById("podcast__audio__4");
var podcast__audio__5 = document.getElementById("podcast__audio__5");
var podcast__audio__6 = document.getElementById("podcast__audio__6");
var podcast__audio__7 = document.getElementById("podcast__audio__7");
var podcast__audio__8 = document.getElementById("podcast__audio__8");
var podcast__audio__9 = document.getElementById("podcast__audio__9");
var podcast__audio__10 = document.getElementById("podcast__audio__10");
var transferSong = document.getElementById("transferSong");

function transferPlay() {
  return transferSong.paused ? transferSong.play() : transferSong.pause();
}

function podcastPlay__1() {
  return podcast__audio__1.paused
    ? podcast__audio__1.play()
    : podcast__audio__1.pause();
}

function podcastPlay__2() {
  return podcast__audio__2.paused
    ? podcast__audio__2.play()
    : podcast__audio__2.pause();
}

function podcastPlay__3() {
  return podcast__audio__3.paused
    ? podcast__audio__3.play()
    : podcast__audio__3.pause();
}

function podcastPlay__4() {
  return podcast__audio__4.paused
    ? podcast__audio__4.play()
    : podcast__audio__4.pause();
}

function podcastPlay__5() {
  return podcast__audio__5.paused
    ? podcast__audio__5.play()
    : podcast__audio__5.pause();
}

function podcastPlay__6() {
  return podcast__audio__6.paused
    ? podcast__audio__6.play()
    : podcast__audio__6.pause();
}

function podcastPlay__7() {
  return podcast__audio__7.paused
    ? podcast__audio__7.play()
    : podcast__audio__7.pause();
}

function podcastPlay__8() {
  return podcast__audio__8.paused
    ? podcast__audio__8.play()
    : podcast__audio__8.pause();
}

function podcastPlay__9() {
  return podcast__audio__9.paused
    ? podcast__audio__9.play()
    : podcast__audio__9.pause();
}

function podcastPlay__10() {
  return podcast__audio__10.paused
    ? podcast__audio__10.play()
    : podcast__audio__10.pause();
}

function PreviousSongPlay() {
  return PreviousSong.paused ? PreviousSong.play() : PreviousSong.pause();
}
function togglePlay() {
  return toggle.paused ? toggle.play() : toggle.pause();
}

function MolchatDomaPlay() {
  return MolchatDoma.paused ? MolchatDoma.play() : MolchatDoma.pause();
}

function PlohoPlay() {
  return Ploho.paused ? Ploho.play() : Ploho.pause();
}

function MotoramaPlay() {
  return Motorama.paused ? Motorama.play() : Motorama.pause();
}

function HumasTetrisPlay() {
  return HumasTetris.paused ? HumasTetris.play() : HumasTetris.pause();
}

function BuerakPlay() {
  return Buerak.paused ? Buerak.play() : Buerak.pause();
}

function JulyDaysPlay() {
  return JulyDays.paused ? JulyDays.play() : JulyDays.pause();
}

function JoyDivisionPlay() {
  return JoyDivision.paused ? JoyDivision.play() : JoyDivision.pause();
}

function TheCurePlay() {
  return TheCure.paused ? TheCure.play() : TheCure.pause();
}

function TheSmithsPlay() {
  return TheSmiths.paused ? TheSmiths.play() : TheSmiths.pause();
}

function NewOrderPlay() {
  return NewOrder.paused ? NewOrder.play() : NewOrder.pause();
}

function BauhausPlay() {
  return Bauhaus.paused ? Bauhaus.play() : Bauhaus.pause();
}

function GangOfFourPlay() {
  return GangOfFour.paused ? GangOfFour.play() : GangOfFour.pause();
}
