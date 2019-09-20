export function addBtn(){
    // Create a "close" button and append it to each list item
    var myNodelist = document.getElementsByTagName("LI");

    for (let i = 0; i < myNodelist.length; i++) {
        var span = document.createElement("SPAN");
//        span.setAttribute("onclick", "delet(this)");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
    }
}