window.onload = function () {
    var readTextFileModule = require("./readTextFile.js");
    var checkedModule = require("./checked.js");
    var addBtnModule = require("./addBtn.js");
    var newElementModule = require("./create.js");
    var deletModule = require("./delet.js");

    readTextFileModule.readTextFile("./data.json", function (text) {
        var json = JSON.parse(text);
        for (let i = 0; i < json.length; i++) {
            var li = document.createElement("li");
            if (json[i].check == 1) {
                li.className = "element checked";
            } else {
                li.className = "element";
            }
            var t = document.createTextNode(json[i].info);
            li.appendChild(t);
            document.getElementById("myUL").appendChild(li);
        }

        checkedModule.checked();
        addBtnModule.addBtn();
        document.getElementById("addbtn").onclick = function () {
            newElementModule.newElement()
        };

        var x = document.getElementById("myUL");
        x.addEventListener('click', function (ev) {
            if (ev.target.tagName === 'SPAN' && ev.target.className === 'close') {
                deletModule.delet(ev.target);
            }
        }, false);
    });
}