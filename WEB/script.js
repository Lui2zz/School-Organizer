document.querySelectorAll('.mark-done').forEach(button => {
  button.addEventListener('click', function() {
    const task = this.closest('.task');
    task.style.textDecoration = 'line-through';
    task.style.backgroundColor = '#d3ffd3'; // Mark it as completed with green shade
  });
});
