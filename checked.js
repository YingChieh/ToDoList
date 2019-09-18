function checked() {
    // Add a "checked" symbol when clicking on a list item
    var todolist = document.getElementById("myUL");
    todolist.addEventListener('click', function (ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    }, false);
}