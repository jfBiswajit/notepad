let textarea = document.getElementById('notepad');
let data = localStorage.getItem('NotepadData');
let resetBtn = document.getElementById('resetbtn');

resetBtn.addEventListener('click', resetData);
textarea.addEventListener('keyup', storeData);

function storeData(e) {
  localStorage.setItem('NotepadData', e.target.value);
}

function resetData() {
  textarea.value = '';
  localStorage.setItem('NotepadData', '');
  textarea.focus();
}

if (data) {
  textarea.value = data;
}