// DOM要素の取得
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const incompleteList = document.getElementById('incomplete-list');
const completeList = document.getElementById('complete-list');

// TODOを追加する関数
const addTodo = () => {
    const text = todoInput.value;
    if (text === '') return;

    // 新しいTODOアイテムを作成
    const li = document.createElement('li');
    const todoText = document.createElement('span');
    todoText.className = 'todo-text';
    todoText.textContent = text;

    // 完了ボタンを作成
    const completeButton = document.createElement('button');
    completeButton.textContent = '完了';
    completeButton.addEventListener('click', () => completeTodo(li, text));

    // 削除ボタンを作成
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '削除';
    deleteButton.addEventListener('click', () => deleteTodo(li));

    // 要素を組み立てる
    li.appendChild(todoText);
    li.appendChild(completeButton);
    li.appendChild(deleteButton);

    // 未完了リストに追加
    incompleteList.appendChild(li);

    // 入力欄を空にする
    todoInput.value = '';
};

// TODOを完了する関数
const completeTodo = (li, text) => {
    // 完了リストに追加する新しい要素を作成
    const newLi = document.createElement('li');
    const todoText = document.createElement('span');
    todoText.className = 'todo-text';
    todoText.textContent = text;

    // 戻すボタンを作成
    const returnButton = document.createElement('button');
    returnButton.textContent = '戻す';
    returnButton.addEventListener('click', () => returnTodo(newLi, text));

    // 削除ボタンを作成
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '削除';
    deleteButton.addEventListener('click', () => deleteTodo(newLi));

    // 要素を組み立てる
    newLi.appendChild(todoText);
    newLi.appendChild(returnButton);
    newLi.appendChild(deleteButton);

    // 完了リストに追加
    completeList.appendChild(newLi);

    // 未完了リストから削除
    li.remove();
};

// TODOを未完了に戻す関数
const returnTodo = (li, text) => {
    // 未完了リストに追加する新しい要素を作成
    const newLi = document.createElement('li');
    const todoText = document.createElement('span');
    todoText.className = 'todo-text';
    todoText.textContent = text;

    // 完了ボタンを作成
    const completeButton = document.createElement('button');
    completeButton.textContent = '完了';
    completeButton.addEventListener('click', () => completeTodo(newLi, text));

    // 削除ボタンを作成
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '削除';
    deleteButton.addEventListener('click', () => deleteTodo(newLi));

    // 要素を組み立てる
    newLi.appendChild(todoText);
    newLi.appendChild(completeButton);
    newLi.appendChild(deleteButton);

    // 未完了リストに追加
    incompleteList.appendChild(newLi);

    // 完了リストから削除
    li.remove();
};

// TODOを削除する関数
const deleteTodo = (li) => {
    li.remove();
};

// イベントリスナーの設定
addButton.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTodo();
});
