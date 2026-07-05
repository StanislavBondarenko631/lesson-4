// Завдання 1:
// 1 - отримай body елемент і виведи його в консоль;
const body = document.body;
// console.log(body);
// const body = document.querySelector("body");
// console.log(body);

// 2 - отримай елемент id="title" і виведи його в консоль;
const bodyTitle = document.querySelector("#title");
// console.log(bodyTitle);

// 3 - отримай елемент class="list" і виведи його в консоль;
const bodyList = document.querySelector(".list");
// console.log(bodyList);

// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
const topicsList = document.querySelectorAll("[data-topic]");
// console.log(topicsList);
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const firstElementTopicsList = document.querySelector("[data-topic]");
// console.log(firstElementTopicsList);

// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const lastElementTopicsList = topicsList[topicsList.length - 1];
// console.log(lastElementTopicsList);

// const lastElementTopicsList = bodyList.lastChild;
// console.log(lastElementTopicsList);

// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
const siblingTitle = bodyTitle.nextElementSibling;
// console.log(siblingTitle);

// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
const h3Elements = document.querySelectorAll("h3");
// console.log(h3Elements);

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
h3Elements.forEach((element) => {
  element.classList.add("active");
});

// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
const liNavigation = document.querySelector('[data-topic = "navigation"]');
// console.log(liNavigation);

// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
liNavigation.style.backgroundColor = "yellow";

// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
const textNavigation = liNavigation.querySelector("p");
textNavigation.textContent = "я змінив тут текст!";

// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
const currentTopic = "manipulation";
const manipulationElement = document.querySelector(
  `[data-topic = "${currentTopic}"]`,
);
// console.log(manipulationElement);

// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
manipulationElement.style.backgroundColor = "blue";
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
const h3Completed = document.querySelector(".completed");
// console.log(h3Completed);

// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
h3Completed.parentElement.remove();
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
const pDocumentObjectModel = document.createElement("p");
pDocumentObjectModel.textContent =
  "Об'єктна модель документа (Document Object Model)";
bodyTitle.after(pDocumentObjectModel);
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
const markup = `
<li>
  <h3>Властивість innerHTML</h3>
  <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу</p>
</li>

`;
bodyList.insertAdjacentHTML("beforeend", markup);
// 20 - очисти список

// Завдання 2:
// Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;

const numberContainer = document.querySelector(".number-container");
const randomNumber = () => Math.floor(Math.random() * 100) + 1;

for (let i = 0; i < 100; i++) {
  const newElementDiv = document.createElement("div");
  newElementDiv.classList.add("number");
  newElementDiv.textContent = randomNumber();
  const num = Number(newElementDiv.textContent);
  if (num % 2 === 0) {
    newElementDiv.classList.add("even");
  } else {
    newElementDiv.classList.add("odd");
  }
  numberContainer.append(newElementDiv);
}

// Завдання3
// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`
const inputUsername = document.querySelector(".js-username-input");
const usernameOutput = document.querySelector(".js-username-output");

inputUsername.addEventListener("input", (event) => {
  const textLength = event.target.value.length;

  if (textLength > 6) {
    inputUsername.classList.add("success");
    inputUsername.classList.remove("error");
  } else {
    inputUsername.classList.add("error");
    inputUsername.classList.remove("success");
  }

  if (event.target.value.trim() !== "") {
    usernameOutput.textContent = event.target.value;
  } else {
    usernameOutput.textContent = "Anonymous";
  }
});

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

inputUsername.addEventListener("focus", (event) => {
  const value = event.target.value;

  if (value === "") {
    inputUsername.style.outline = "3px solid red";
  } else {
    inputUsername.style.outline = "3px solid green";
  }
});

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

inputUsername.addEventListener("blur", (event) => {
  const value = event.target.value;

  if (value === "") {
    inputUsername.style.outline = "3px solid orange";
  } else {
    inputUsername.style.outline = "3px solid lime";
  }
});

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.

// const usernameOutput = document.querySelector("js-username-output");

const form = document.querySelector(".js-contact-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const [userName, accept] = event.target.elements;

  if (userName.value.trim() === "" || accept.checked === false) {
    alert("всі поля мають бути заповненними!");
    return;
  }
  const userObj = {
    userName: userName.value.trim(),
  };
  console.log(userObj);
  event.currentTarget.reset();
  usernameOutput.textContent = "Anonymous";
});
