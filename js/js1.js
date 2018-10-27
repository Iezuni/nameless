function evil() {
    alert('hi,you press it')
    alert('evils are coming')
    var n = "<script>i=1;while(i<=1000){alert('hi,i'm here');i++;}</script>";
    var r = window.open("", "", "");
    r.opener = null,
    r.document.write(n),
        r.document.close()
}
