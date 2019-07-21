function wordPicker() {
    document.getElementById("bestemmia").style.color = "white";
    var client = new XMLHttpRequest();
        client.open('GET', 'words.txt');
        client.onreadystatechange = function()
        {
            if( client.responseText != '' )
            {
                var txt = client.responseText.split("\n");
                var randomNum = Math.floor(Math.random() * txt.length);
                document.getElementById("bestemmia").innerHTML = "dio " + txt[randomNum];
            }
        }
        client.send();
}

function copy(that){
    that.style.color = "greenyellow";
    var inp =document.createElement('input');
    document.body.appendChild(inp)
    inp.value =that.textContent
    inp.select();
    document.execCommand('copy',false);
    inp.remove();
    }