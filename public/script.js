document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.getElementById('text-input');
    const charCount = document.getElementById('char-count');
    const ignoreSpaces = document.getElementById('ignore-spaces');
    const resetBtn = document.getElementById('reset-btn');

    function updateCharCount() {
        let text = textInput.value;
        let count = text.length;

        charCount.textContent = count.toFixed(1);
    }

    textInput.addEventListener('input', updateCharCount);

    resetBtn.addEventListener('click', () => {
        textInput.value = '';
        updateCharCount();
    });
});