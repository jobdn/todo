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
      const addTaskDell = this.closest('.addTask')
      let confirmHtml = `<div class='overlay'></div></div><div class="container-all-all">
      <div class = "container-confirm">
        <div class="container-confirm__flex">
          <div class="question-confirm">Delete this task?</div>
          <button class="button-style yes">
            <div class="text-confirm-yes">Yes</div>
          </button>
          <button class="button-style no">
            <div class="text-confirm-no">No</div>
          </button>
        </div>
      </div>
      </div>`;
      document.body.insertAdjacentHTML("afterbegin", confirmHtml)
      document.querySelector('.container-all-all').addEventListener('click', function(event){
      const clickedYes = event.target.closest('.text-confirm-yes')
      if (clickedYes){
        addTaskDell.remove();
      document.querySelector(".overlay").remove();
      document.querySelector(".container-all-all").remove();
      }
      else {document.querySelector(".overlay").remove();
      document.querySelector(".container-all-all").remove();}
      })
      // this.closest(".addTask").remove();
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
document
  .querySelector(".container")
  .addEventListener("click", function (event) {
    const clickedElement = event.target.closest(".addTask");
    const clickedElementTwo = document.querySelector(".addTask__title");
    const clickedElementThree = document.querySelector(
      ".addTask__content__inputBody"
    );
    const inThisElement = document.querySelector(".addTask");
    // не работает так как я хочу
    if (
      clickedElement === event.target ||
      clickedElementThree === event.target ||
      clickedElementTwo === event.target
    ) {
      const buttonMenu = clickedElement.querySelector(".button-menu");
      if (clickedElement.dataset.clicked) {
        // Если элемент был ранее нажат, удалите кнопочное меню
        if (buttonMenu) {
          buttonMenu.remove();
        }
        // Удалите атрибут, указывающий на то, что элемент был нажат
        delete clickedElement.dataset.clicked;
      } else if (clickedElement === event.target) {
        // Логика добавления меню
        let htmlButtonMmenu = `
            <div class="button-menu">
                <div class="button-menu__content">
                    <div class="button-menu__container share">
                        <img src="imj/Share.svg" alt="share icon" />
                    </div>
                    <div class="button-menu__container info">i</div>
                    <div class="button-menu__container edit">
                        <img src="imj/Edit.svg" alt="edit icon" />
                    </div>
                </div>
            </div>
            `;

        clickedElement.insertAdjacentHTML("beforeend", htmlButtonMmenu);

        // Отметьте элемент как нажатый
        clickedElement.dataset.clicked = "true";
      }
    }
  });
document.addEventListener("click", function (event) {
  const clickedElement = event.target.closest(".addTask");
  const buttonMenus = document.querySelectorAll(".button-menu");

  // Если клик был внутри элемента .addTask или на элементе .button-menu (или его дочерних элементах), то не делаем ничего
  if (clickedElement || event.target.closest(".button-menu")) {
    return;
  }

  // Иначе, проходимся по всем .button-menu и удаляем их
  buttonMenus.forEach((menu) => {
    menu.remove();
  });

  // Для всех .addTask с атрибутом data-clicked удаляем этот атрибут
  const activeAddTasks = document.querySelectorAll(
    ".addTask[data-clicked='true']"
  );
  activeAddTasks.forEach((task) => {
    delete task.dataset.clicked;
  });
});
