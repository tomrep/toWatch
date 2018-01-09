function load_data(){
    var reader = new FileReader();
    reader.onload = function(event){
        var text = reader.result;
    }
    reader.readAsText(file,'utf-8');

}
function haha () {
    var m = load_data();
    console.log(m);
}