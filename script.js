//your JS code here. If required.
const changeButton = document.getElementById('change_button');
const resetButton = document.getElementById('Reset');

changeButton.addEventListener('click', () => {
    const blockId = document.getElementById('block_id').value;
    const color = document.getElementById('colour_id').value;
    const block = document.getElementById(blockId);

    if (block) {
        document.querySelectorAll('.grid-item').forEach(item => {
            item.style.backgroundColor = 'transparent';
        });
        block.style.backgroundColor = color;
    } else {
        alert('Invalid Block ID');
    }
});

resetButton.addEventListener('click', () => {
    document.querySelectorAll('.grid-item').forEach(item => {
        item.style.backgroundColor = 'transparent';
    });
});
