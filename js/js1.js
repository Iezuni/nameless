function evil() {
    alert('hi,you press it')
    alert('evils are coming')
    var n = "<script>i=1;while(i<=1000){alert('hi,i am here');i++;}<\/script>";
    var r = window.open("", "", "width=200,height=100");
	r.document.write(n);
	r.focus();
}
