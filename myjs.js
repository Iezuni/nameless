var myNewDivyintimer = null;
window.onload = function ()
{
    var myNewDivyin = document.createElement('div');
    myNewDivyin.id = 'myNewDivyin';
    myNewDivyin.style = "background:rgba(133,143,251,0.5);position:fixed;left:95%;top:75%;font-size:1.5em;";
    document.body.appendChild(myNewDivyin);
    document.getElementById("myNewDivyin").innerHTML = "回到<br>顶部";
    myNewDivyin.onclick = function ()
    {
        cancelAnimationFrame(myNewDivyintimer);
        var startTime =+ new Date();
        var b = document.body.scrollTop || document.documentElement.scrollTop;
        var d = 700;
        var c = b;
        myNewDivyintimer = requestAnimationFrame(function myNewDivyintotop()
        {
            var t = d - Math.max(0, startTime - (+new Date()) + d);
            document.documentElement.scrollTop = document.body.scrollTop = t * (-c) / d + b;
            myNewDivyintimer = requestAnimationFrame(myNewDivyintotop);
            if (t == d) {
                cancelAnimationFrame(myNewDivyintimer)
            }
        })
    }
}
