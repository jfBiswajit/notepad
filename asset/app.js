let textarea = document.getElementById('notepad');
let data = localStorage.getItem('NotepadData');

function storeData(e) {
  localStorage.setItem('NotepadData', e.target.value);
}

if (data) {
  textarea.value = data;
}

textarea.addEventListener('keyup', storeData);