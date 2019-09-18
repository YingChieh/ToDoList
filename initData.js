window.onload = function () {
    readTextFile("data.json", function (text) {
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

        checked();
        addBtn();
        
    });    
}