// async function runApp() {

// let lang = "en";
let lang = "ru";
// let mode = "normal";
// let mode = "shift";
let mode = "caps";
// let mode = "capsOnShift";

const keyboardHTML = `
<div class="keyboard_wrapper">
<pre class="display">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt beatae vel quis aliquam rerum, tempore, deleniti recusandae dolore hic iure cum odio at expedita nihil quisquam veritatis ipsam dolor nesciunt?</pre
>
<div class="keys">
  <div class="row row1">
    <div class="key esc" data-code="Escape">
      <span></span>
    </div>
    <div class="key" data-code="Digit1">
      <span></span>
    </div>
    <div class="key" data-code="Digit2">
      <span></span>
    </div>
    <div class="key" data-code="Digit3">
      <span></span>
    </div>
    <div class="key" data-code="Digit4">
      <span></span>
    </div>
    <div class="key" data-code="Digit5">
      <span></span>
    </div>
    <div class="key" data-code="Digit6">
      <span></span>
    </div>
    <div class="key" data-code="Digit7">
      <span></span>
    </div>
    <div class="key" data-code="Digit8">
      <span></span>
    </div>
    <div class="key" data-code="Digit9">
      <span></span>
    </div>
    <div class="key" data-code="Digit0">
      <span></span>
    </div>
    <div class="key" data-code="Minus">
      <span></span>
    </div>
    <div class="key" data-code="Equal">
      <span></span>
    </div>
    <div class="key backspace" data-code="Backspace">
      <span></span>
    </div>
  </div>
  <div class="row row2">
    <div class="key tab" data-code="Tab">
      <span></span>
    </div>
    <div class="key" data-code="KeyQ">
      <span></span>
    </div>
    <div class="key" data-code="KeyW">
      <span></span>
    </div>
    <div class="key" data-code="KeyE">
      <span></span>
    </div>
    <div class="key" data-code="KeyR">
      <span></span>
    </div>
    <div class="key" data-code="KeyT">
      <span></span>
    </div>
    <div class="key" data-code="KeyY">
      <span></span>
    </div>
    <div class="key" data-code="KeyU">
      <span></span>
    </div>
    <div class="key" data-code="KeyI">
      <span></span>
    </div>
    <div class="key" data-code="KeyO">
      <span></span>
    </div>
    <div class="key" data-code="KeyP">
      <span></span>
    </div>
    <div class="key" data-code="BracketLeft">
      <span></span>
    </div>
    <div class="key" data-code="BracketRight">
      <span></span>
    </div>
    <div class="key backslash" data-code="Backslash">
      <span></span>
    </div>
  </div>
  <div class="row row3">
    <div id="caps" class="key caps-lock" data-code="CapsLock">
      <span></span>
    </div>
    <div class="key" data-code="KeyA">
      <span></span>
    </div>

    <div class="key" data-code="KeyS">
      <span></span>
    </div>
    <div class="key" data-code="KeyD">
      <span></span>
    </div>
    <div class="key" data-code="KeyF">
      <span></span>
    </div>
    <div class="key" data-code="KeyG">
      <span></span>
    </div>
    <div class="key" data-code="KeyH">
      <span></span>
    </div>
    <div class="key" data-code="KeyJ">
      <span></span>
    </div>
    <div class="key" data-code="KeyK">
      <span></span>
    </div>
    <div class="key" data-code="KeyL">
      <span></span>
    </div>
    <div class="key" data-code="Semicolon">
      <span></span>
    </div>
    <div class="key" data-code="Quote">
      <span></span>
    </div>
    <div class="key enter" data-code="Enter">
      <span></span>
    </div>
  </div>
  <div class="row row4">
    <div class="key shift-left" data-code="ShiftLeft">
      <span></span>
    </div>
    <div class="key" data-code="KeyZ">
      <span></span>
    </div>
    <div class="key" data-code="KeyX">
      <span></span>
    </div>
    <div class="key" data-code="KeyC">
      <span></span>
    </div>
    <div class="key" data-code="KeyV">
      <span></span>
    </div>
    <div class="key" data-code="KeyB">
      <span></span>
    </div>
    <div class="key" data-code="KeyN">
      <span></span>
    </div>
    <div class="key" data-code="KeyM">
      <span></span>
    </div>
    <div class="key" data-code="Comma">
      <span></span>
    </div>
    <div class="key" data-code="Period">
      <span></span>
    </div>
    <div class="key" data-code="Slash">
      <span></span>
    </div>
    <div class="key up" data-code="ArrowUp">
      <span></span>
    </div>
    <div class="key shift-right" data-code="ShiftRight">
      <span></span>
    </div>
  </div>
  <div class="row row5">
    <div class="key ctrl-left" data-code="ControlLeft">
      <span></span>
    </div>
    <div class="key alt-left" data-code="AltLeft">
      <span></span>
    </div>
    <div class="key backquote" data-code="Backquote">
      <span></span>
    </div>
    <div class="key space" data-code="Space">
      <span></span>
    </div>
    <div id="lang" class="key lang" data-code="Lang">
      <span></span>
    </div>
    <div class="key alt-right" data-code="AltRight">
      <span></span>
    </div>
    <div class="key left" data-code="ArrowLeft">
      <span></span>
    </div>
    <div class="key down" data-code="ArrowDown">
      <span></span>
    </div>
    <div class="key right" data-code="ArrowRight">
      <span></span>
    </div>
    <div class="key delete" data-code="Delete">
      <span></span>
    </div>
  </div>
</div>
</div>`;
const en = {
  lang: "en",
  normal: [
    "Esc 1 2 3 4 5 6 7 8 9 0 - = bksp",
    "tab q w e r t y u i o p [ ] \\",
    "caps a s d f g h j k l ; , enter",
    "shift z x c v b n m , . / ᐃ shift",
    "ctrl alt ` space en alt ᐊ ᐁ ᐅ del",
  ],
  shift: [
    "Esc ! @ # $ % ^ & * ( ) _ + bksp",
    "tab Q W E R T Y U I O P { } |",
    'caps A S D F G H J K L : " enter',
    "shift Z X C V B N M < > ? ᐃ shift",
    "ctrl alt ` space en alt ᐊ ᐁ ᐅ del",
  ],
  caps: [
    "Esc 1 2 3 4 5 6 7 8 9 0 - = bksp",
    "tab Q W E R T Y U I O P [ ] \\",
    "caps A S D F G H J K L ; , enter",
    "shift Z X C V B N M , . / ᐃ shift",
    "ctrl alt ` space en alt ᐊ ᐁ ᐅ del",
  ],
  capsOnShift: [
    "Esc ! @ # $ % ^ & * ( ) _ + bksp",
    "tab q w e r t y u i o p { } |",
    'caps a s d f g h j k l : " enter',
    "shift z x c v b n m < > ? ᐃ shift",
    "ctrl alt ` space en alt ᐊ ᐁ ᐅ del",
  ],
};
const ru = {
  lang: "ru",
  normal: [
    "Esc 1 2 3 4 5 6 7 8 9 0 - = bksp",
    "tab й ц у к е н г ш щ з х ъ \\",
    "caps ф ы в а п р о л д ж э enter",
    "shift я ч с м и т ь б ю . ᐃ shift",
    "ctrl alt ё space ru alt ᐊ ᐁ ᐅ del",
  ],
  shift: [
    'Esc ! " № ; % : ? * ( ) _ + bksp',
    "tab Й Ц У К Е Н Г Ш Щ З Х Ъ /",
    "caps Ф Ы В А П Р О Л Д Ж Э enter",
    "shift Я Ч С М И Т Ь Б Ю , ᐃ shift",
    "ctrl alt Ё space ru alt ᐊ ᐁ ᐅ del",
  ],
  caps: [
    "Esc 1 2 3 4 5 6 7 8 9 0 - = bksp",
    "tab Й Ц У К Е Н Г Ш Щ З Х Ъ \\",
    "caps Ф Ы В А П Р О Л Д Ж Э enter",
    "shift Я Ч С М И Т Ь Б Ю . ᐃ shift",
    "ctrl alt Ё space ru alt ᐊ ᐁ ᐅ del",
  ],
  capsOnShift: [
    'Esc ! " № ; % : ? * ( ) _ + bksp',
    "tab й ц у к е н г ш щ з х ъ /",
    "caps ф ы в а п р о л д ж э enter",
    "shift я ч с м и т ь б ю , ᐃ shift",
    "ctrl alt ё space ru alt ᐊ ᐁ ᐅ del",
  ],
};
// function letter(e) {
//   console.log(e);
// }
// addEventListener("keydown", letter);

//вставляем каркас будущей клавы
const virtualKeyboard = document.getElementById("virtual__keyboard");
virtualKeyboard.insertAdjacentHTML("afterbegin", keyboardHTML);

// определение языка
const currentLangObj = (lang) => {
  return lang === "en" ? en : ru;
};

// отрисовка клавиатуры
function createKeyboard(lang, mode) {
  let rowArr = document.querySelectorAll(".row");
  let currObj = currentLangObj(lang);
  // console.log(currObj[mode]);
  currObj[mode].forEach((el, ind) => {
    let symbolArr = el.split(" ");
    // console.log(symbolArr);
    for (let i = 0; i < symbolArr.length; i++) {
      rowArr[ind].children[i].firstElementChild.setAttribute(
        "data-content",
        symbolArr[i]
      );
      rowArr[ind].children[i].firstElementChild.innerHTML = symbolArr[i];
    }
  });
}

// обработчик кликов - нажатие
function mouseClickDown(event) {
  const key = event.target.closest(".key");
  if (!key) return;
  key.classList.add("active");
}

// обработчик кликов - отпускание
function mouseClickUp(event) {
  const key = event.target.closest(".key");
  if (!key) return;
  key.classList.remove("active");
}

// обработчик кликов - ключ
// обработчик клавиатуры - нажатие
function handClickDown(event) {
  // console.log("жмяк");
  // console.log(event);
  const curr = event;
  document.querySelector(`[data-code="${curr.code}"]`).classList.add("active");
  if (curr.code === "Tab") {
    curr.preventDefault();
  }
}
// обработчик клавиатуры - подьем
function handClickUp(event) {
  // console.log("не жмяк");
  // console.log(event);
  const curr = event;
  document
    .querySelector(`[data-code="${curr.code}"]`)
    .classList.remove("active");
}

const keyboard = document.querySelector(".keys");
keyboard.addEventListener("mousedown", mouseClickDown);
keyboard.addEventListener("mouseup", mouseClickUp);
// keyboard.addEventListener("click", mouseClickKey);
document.addEventListener("keydown", handClickDown);
document.addEventListener("keyup", handClickUp);

createKeyboard(lang, mode);
// }

// runApp();
