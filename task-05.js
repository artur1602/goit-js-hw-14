const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', () => {
  // Отримуємо поточне значення інпута
  const inputValue = nameInput.value.trim();

  // Перевіряємо, чи інпут не є порожнім
  // Якщо порожній, встановлюємо значення "Anonymous", в іншому випадку - встановлюємо введене значення
  nameOutput.textContent = inputValue !== '' ? inputValue : 'Anonymous';
});