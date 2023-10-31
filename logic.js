document.querySelector(".buttonAdd").addEventListener("click", function () {
  // Получить значение из input
  let taskText = document.querySelector(".todoTitle__content__input").value;
  let taskBody = document.querySelectorAll(".todoTitle__content__input")[1]
    .value;

  // Клонировать содержимое <template>
  const template = document.querySelector(".addBlock").content.cloneNode(true);

  // Установить значения для клонированных input
  let inputAdd = (template.querySelector(
    ".addTask__content__inputTitle"
  ).value = taskText);
  let inputAddBody = (template.querySelector(
    ".addTask__content__inputBody"
  ).value = taskBody);

  // Добавить обработчик событий для кнопки удаления в клонированном шаблоне
  template
    .querySelector(".addTask__buttonDell")
    .addEventListener("click", function () {
      this.closest(".addTask").remove();
    });

  // Добавляем содержимое шаблона в нужный контейнер
  const container = document.querySelector(".container");
  if (container.firstChild) {
    container.insertBefore(template, container.firstChild);
  } else {
    container.appendChild(template);
  }

  // Очистить input
  document.querySelector(".todoTitle__content__input").value = "";
  document.querySelectorAll(".todoTitle__content__input")[1].value = "";
});
