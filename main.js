
var canvas = new fabric.Canvas('myCanvas');

px = 10;
py = 10;

biw = 30;
bih = 30;

po = "";
bio = "";

function pu()
{
    fabric.Image.fromURL("player.png", function(Img){
        po = Img;

        po.scaleToWidth(150)
        po.scaleToHeight(140)
        po.set({
            top:py,
            left:px
        })
        canvas.add(po);

    })
}

function ni(gi)
{
    fabric.Image.fromURL(gi, function(Img){
        bio = Img;

        bio.scaleToHeight(bih)
        bio.scaleToWidth(biw)
        bio.set({
            top:py,
            left:px
        })
        canvas.add(bio);
    })
}

window.addEventListener("keydown", function(e){
    kp = e.keyCode;
    // document.getElementById("key_value_h4").style.display = "inline-block";
    if(e.shiftKey == true && kp == '80'){
        biw = biw +10;
        bih = bih+10
        document.getElementById("width").innerHTML = biw;
        document.getElementById("height").innerHTML = bih;
    }

    if(e.shiftKey == true && kp == '77'){
        biw = biw - 10;
        bih = bih - 10;
        document.getElementById("width").innerHTML = biw;
        document.getElementById("height").innerHTML = bih;
    }
    if(kp=='38'){
        up()
    }
    if(kp=='40'){
        down()
    }
    if(kp=='37'){
        left()
    }
    if(kp=='39'){
        right()
    }
    if(kp=='65'){
        ni('a.png')
    }
    if(kp=='66'){
        ni('b.png')
    }
    if(kp=='67'){
        ni('c.png')
    }
    if(kp=='68'){
        ni('d.png')
    }
    if(kp=='69'){
        ni('e.png')
    }
    if(kp=='70'){
        ni('f.png')
    }
    if(kp=='71'){
        ni('g.png')
    }
    if(kp=='72'){
        ni('h.png')
    }
    if(kp=='73'){
        ni('i.png')
    }
    if(kp=='74'){
        ni('j.png')
    }
    if(kp=='75'){
        ni('k.png')
    }
    if(kp=='76'){
        ni('l.png')
    }
    if(kp=='77'){
        ni('m.png')
    }
    if(kp=='78'){
        ni('n.png')
    }
    if(kp=='79'){
        ni('o.png')
    }
    if(kp=='80'){
        ni('p.png')
    }
    if(kp=='81'){
        ni('q.png')
    }
    if(kp=='82'){
        ni('r.png')
    }
    if(kp=='83'){
        ni('s.png')
    }
    function up(){
        if(py>=0){
            py = py - bih
            canvas.remove(po)
            pu()
        }
    }
    function down(){
        if(py<=500){
            py = py + bih
            canvas.remove(po)
            pu()
        }
    }
    function left(){
        if(px>=0){
            px = px - biw
            canvas.remove(po)
            pu()
        }
    }
    function right(){
        if(px<=900){
            px = px + biw
            canvas.remove(po)
            pu()
        }
    }
})