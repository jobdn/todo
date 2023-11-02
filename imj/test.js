document.getElementById('addElem').addEventListener('click', function() {
    // Создание нового элемента
    const newElem = document.createElement('div');
    newElem.textContent = 'Это новый элемент. ';
    
    // Создание кнопки для добавления или удаления подэлемента
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Добавить/Удалить подэлемент';
    toggleButton.addEventListener('click', function() {
        const subElem = newElem.querySelector('.sub-elem');

        if (subElem) {
            // Если подэлемент существует, удаляем его
            subElem.remove();
        } else {
            // Иначе, создаем и добавляем новый подэлемент
            const newSubElem = document.createElement('div');
            newSubElem.textContent = 'Это подэлемент.';
            newSubElem.className = 'sub-elem';
            newElem.appendChild(newSubElem);
        }
    });

    newElem.appendChild(toggleButton);
    
    document.getElementById('container').appendChild(newElem);
});
