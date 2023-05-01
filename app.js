async function runApp() {
  localStorage.setItem("lang", localStorage.getItem("lang") || "en");
  let mode = "normal";

  const keyboardHTML = `
<div class="keyboard_wrapper">
<label for='v-k' class='title'>VIRTUAL KEYBOARD</label>
<textarea name='v-k'class="display" placeholder='click on keyboard or virtual keyboard'>
</textarea>
<div class="rev"><span>Change language LeftShift + LeftAlt</span></div>
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
    <div class="key shift-left" id="shift-left" data-code="ShiftLeft">
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
    <div class="key shift-right" id="shift-right" data-code="ShiftRight">
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

  // вставляем каркас будущей клавы
  const virtualKeyboard = document.getElementById("virtual__keyboard");
  virtualKeyboard.insertAdjacentHTML("afterbegin", keyboardHTML);

  // проверка на допустимые клавиши
  const allowKey = [];
  document
    .querySelectorAll(".key")
    .forEach((e) => allowKey.push(e.dataset.code));

  // определение языка
  const currentLangObj = () => {
    return localStorage.getItem("lang") === "en" ? en : ru;
  };

  // нажатые клавиши
  const pressedKeys = {};

  // фокусровка
  const focusArea = () => {
    const textarea = document.querySelector(".display");
    textarea.focus();
  };

  // отрисовка клавиатуры
  const createKeyboard = (lang = "en", mode) => {
    let rowArr = document.querySelectorAll(".row");
    let currObj = currentLangObj(lang);
    currObj[mode].forEach((el, ind) => {
      let symbolArr = el.split(" ");
      for (let i = 0; i < symbolArr.length; i++) {
        rowArr[ind].children[i].firstElementChild.setAttribute(
          "data-content",
          symbolArr[i]
        );
        rowArr[ind].children[i].firstElementChild.innerHTML = symbolArr[i];
      }
    });
  };

  // обработчик кликов - нажатие
  const mouseClickDown = (event) => {
    const key = event.target.closest(".key");
    if (!key) return;
    key.classList.add("active");

    if (key.id === "lang") {
      if (localStorage.getItem("lang") === "en") {
        localStorage.setItem("lang", "ru");
        lang = currentLangObj();
        createKeyboard(lang, mode);
      } else {
        localStorage.setItem("lang", "en");
        lang = currentLangObj();
        createKeyboard(lang, mode);
      }
    }
    if (key.id === "caps") {
      if (mode != "caps") {
        key.classList.toggle("caps-lock__active");
        mode = "caps";
        lang = currentLangObj();
        createKeyboard(lang, mode);
      } else {
        key.classList.toggle("caps-lock__active");
        mode = "normal";
        lang = currentLangObj();
        createKeyboard(lang, mode);
      }
    }
    if (key.id === "shift-left" || key.id === "shift-right") {
      if (mode === "normal") {
        mode = "shift";
        lang = currentLangObj();
        createKeyboard(lang, mode);
      } else if (mode === "caps") {
        mode = "capsOnShift";
        lang = currentLangObj();
        createKeyboard(lang, mode);
      }
    }
  };

  // обработчик кликов - отпускание
  const mouseClickUp = (event) => {
    const key = event.target.closest(".key");
    if (!key) return;
    key.classList.remove("active");
    if (key.id === "shift-left" || key.id === "shift-right") {
      if (mode === "shift") {
        mode = "normal";
        lang = currentLangObj();
        createKeyboard(lang, mode);
      } else if (mode === "capsOnShift") {
        mode = "shift";
        lang = currentLangObj();
        createKeyboard(lang, mode);
      }
    }
  };

  // обработчик кликов - ключ
  const mouseClickKey = (event) => {
    const key = event.target.closest(".key");

    if (!key) return;
    focusArea();
    let cursor = textarea.selectionStart;

    if (/Escape|CapsLock|Shift|Control|Alt|Lang/.test(key.dataset.code)) {
      return;
    }

    if (/Backspace/.test(key.dataset.code)) {
      textarea.value =
        textarea.value.slice(0, cursor - 1) + textarea.value.slice(cursor);
      textarea.setSelectionRange(cursor - 1, cursor - 1);
      return;
    }

    if (/Delete/.test(key.dataset.code)) {
      textarea.value =
        textarea.value.slice(0, cursor) + textarea.value.slice(cursor + 1);
      textarea.setSelectionRange(cursor, cursor);
      return;
    }

    if (/Enter/.test(key.dataset.code)) {
      textarea.value =
        textarea.value.slice(0, cursor) + "\n" + textarea.value.slice(cursor);
      textarea.setSelectionRange(cursor + 1, cursor + 1);
      return;
    }

    if (/Space/.test(key.dataset.code)) {
      textarea.value =
        textarea.value.slice(0, cursor) + " " + textarea.value.slice(cursor);
      textarea.setSelectionRange(cursor + 1, cursor + 1);
      return;
    }

    if (/Tab/.test(key.dataset.code)) {
      textarea.value =
        textarea.value.slice(0, cursor) + "\t" + textarea.value.slice(cursor);
      textarea.setSelectionRange(cursor + 1, cursor + 1);
      return;
    }

    if (/ArrowUp/.test(key.dataset.code)) {
      let arrStr = textarea.value.split("\n").map((e) => e.length);
      let sumLenStr = 0;
      for (let strNumber = 0; strNumber < arrStr.length; strNumber++) {
        sumLenStr +=
          strNumber + 1 < arrStr.length
            ? arrStr[strNumber] + 1
            : arrStr[strNumber];
        if (cursor <= arrStr[0]) {
          textarea.setSelectionRange(0, 0);
          break;
        } else if (cursor <= sumLenStr) {
          if (
            cursor - (sumLenStr - arrStr[strNumber] - 1) >
            arrStr[strNumber - 1]
          ) {
            textarea.setSelectionRange(
              cursor - (cursor - (sumLenStr - arrStr[strNumber] - 1)) - 1,
              cursor - (cursor - (sumLenStr - arrStr[strNumber] - 1)) - 1
            );
          } else {
            textarea.setSelectionRange(
              cursor - arrStr[strNumber - 1] - 1,
              cursor - arrStr[strNumber - 1] - 1
            );
          }
          break;
        }
      }
      return;
    }
    if (/ArrowLeft/.test(key.dataset.code)) {
      textarea.setSelectionRange(
        cursor !== 0 ? cursor - 1 : 0,
        cursor !== 0 ? cursor - 1 : 0
      );
      return;
    }
    if (/ArrowDown/.test(key.dataset.code)) {
      let arrStr = textarea.value.split("\n").map((e) => e.length);
      let sumLenStr = 0;
      for (let strNumber = 0; strNumber < arrStr.length; strNumber++) {
        sumLenStr +=
          strNumber + 1 < arrStr.length
            ? arrStr[strNumber] + 1
            : arrStr[strNumber];
        if (cursor < sumLenStr) {
          if (strNumber + 1 === arrStr.length) {
            textarea.setSelectionRange(
              textarea.value.length,
              textarea.value.length
            );
            break;
          } else {
            if (
              cursor - (sumLenStr - arrStr[strNumber] - 1) >
              arrStr[strNumber + 1]
            ) {
              textarea.setSelectionRange(
                sumLenStr + arrStr[strNumber + 1],
                sumLenStr + arrStr[strNumber + 1]
              );
            } else {
              textarea.setSelectionRange(
                cursor + arrStr[strNumber] + 1,
                cursor + arrStr[strNumber] + 1
              );
            }
            break;
          }
        }
      }
      return;
    }
    if (/ArrowRight/.test(key.dataset.code)) {
      textarea.setSelectionRange(cursor + 1, cursor + 1);
      return;
    }

    textarea.value =
      textarea.value.slice(0, cursor) +
      key.firstElementChild.dataset.content +
      textarea.value.slice(cursor);
    textarea.setSelectionRange(cursor + 1, cursor + 1);
  };

  // обработчик клавиатуры - нажатие
  const handClickDown = (event) => {
    if (!allowKey.includes(event.code)) {
      return;
    }
    focusArea();
    const curr = event;
    document
      .querySelector(`[data-code="${curr.code}"]`)
      .classList.add("active");
    let cursor = textarea.selectionStart;
    if (curr.code === "Tab") {
      curr.preventDefault();
      textarea.value =
        textarea.value.slice(0, cursor) + "\t" + textarea.value.slice(cursor);
      textarea.setSelectionRange(cursor + 1, cursor + 1);
      return;
    }
    if (curr.code === "AltLeft") {
      pressedKeys[curr.code] = true;
      if (pressedKeys.ShiftLeft) {
        if (localStorage.getItem("lang") === "en") {
          localStorage.setItem("lang", "ru");
          lang = currentLangObj();
          createKeyboard(lang, mode);
        } else {
          localStorage.setItem("lang", "en");
          lang = currentLangObj();
          createKeyboard(lang, mode);
        }
      }
      curr.preventDefault();
    }
    if (curr.key === "Alt") {
      curr.preventDefault();
    }
    if (curr.code === "ShiftLeft") {
      pressedKeys[curr.code] = true;
      if (pressedKeys.AltLeft) {
        if (localStorage.getItem("lang") === "en") {
          localStorage.setItem("lang", "ru");
          lang = currentLangObj();
          createKeyboard(lang, mode);
        } else {
          localStorage.setItem("lang", "en");
          lang = currentLangObj();
          createKeyboard(lang, mode);
        }
      }
    }
    if (curr.code === "CapsLock") {
      if (mode === "normal") {
        mode = "caps";
        document
          .querySelector(`[data-code="${curr.code}"]`)
          .classList.toggle("caps-lock__active");
        lang = currentLangObj();
        createKeyboard(lang, mode);
      } else {
        mode = "normal";
        document
          .querySelector(`[data-code="${curr.code}"]`)
          .classList.remove("caps-lock__active");
        lang = currentLangObj();
        createKeyboard(lang, mode);
      }
    }
    if (curr.code === "ShiftLeft" || curr.code === "ShiftRight") {
      pressedKeys[curr.code] = true;
      if (mode === "normal" || mode === "shift") {
        mode = "shift";
        lang = currentLangObj();
        createKeyboard(lang, mode);
      } else if (mode === "caps") {
        mode = "capsOnShift";
        lang = currentLangObj();
        createKeyboard(lang, mode);
      }
    }
  };

  // обработчик клавиатуры - подьем
  const handClickUp = (event) => {
    if (!allowKey.includes(event.code)) {
      return;
    }
    focusArea();
    const curr = event;
    document
      .querySelector(`[data-code="${curr.code}"]`)
      .classList.remove("active");
    if (curr.code === "AltLeft") {
      delete pressedKeys[curr.code];
      curr.preventDefault();
    }
    if (curr.key === "Shift") {
      if (pressedKeys.ShiftLeft || pressedKeys.ShiftRight) {
        if (mode === "capsOnShift") {
          mode = "caps";
          lang = currentLangObj();
          createKeyboard(lang, mode);
          delete pressedKeys[curr.code];
        } else if (mode === "shift") {
          mode = "normal";
          lang = currentLangObj();
          createKeyboard(lang, mode);
          delete pressedKeys[curr.code];
        }
      }
    }
  };

  const keyboard = document.querySelector(".keys");
  keyboard.addEventListener("mousedown", mouseClickDown);
  keyboard.addEventListener("mouseup", mouseClickUp);
  keyboard.addEventListener("click", mouseClickKey);
  document.addEventListener("keydown", handClickDown);
  document.addEventListener("keyup", handClickUp);

  createKeyboard(lang, mode);

  // фокус на дисплее
  const textarea = document.querySelector(".display");
  textarea.focus();
}

runApp();
