function evil() {
    alert('hi,you press it')
    alert('evils are coming')
    var n = "<script>i=1;while(i<=10){alert('hi');i++;}</script>";
    var r = window.open("", "", "");
    r.opener = null,
    r.document.write(n),
        r.document.close()
}
