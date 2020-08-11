function To(scene) {   
    var x = location.href = scene;
    document.body.innerHTML = x;
}

function visible(visible,noVisible){
    document.getElementById(visible).setAttribute('visible','true');
    document.getElementById(noVisible).setAttribute('visible','false');
}
var s = new Number(1);
function changeButton(n,color){
    s+=n;
    if(color==="blanco"){
        switch (s){
            case 0:
                s=8;
                visible('b8','b1');
                visible('b8','b7');
            break;
            case 1:
                visible('b1','b2');
                visible('b1','b8');
            break;
            case 2:
                visible('b2','b3');
                visible('b2','b1');
            break;
            case 3:
                visible('b3','b4');
                visible('b3','b2');
            break;
            case 4:
                visible('b4','b5');
                visible('b4','b3');
            break;
            case 5:
                visible('b5','b6');
                visible('b5','b4');
            break;
            case 6:
                visible('b6','b7');
                visible('b6','b5');
            break;
            case 7:
                visible('b7','b8');
                visible('b7','b6');
            break;
            case 8:
                visible('b8','b1');
                visible('b8','b7');
            break;
            case 9:
                s=1;
                visible('b1','b2');
                visible('b1','b8');
            break;
        }
    }else if(color==="gris"){
        switch (s){
            case 0:
                s=8;
                visible('g8','g1');
                visible('g8','g7');
            break;
            case 1:
                visible('g1','g2');
                visible('g1','g8');
            break;
            case 2:
                visible('g2','g3');
                visible('g2','g1');
            break;
            case 3:
                visible('g3','g4');
                visible('g3','g2');
            break;
            case 4:
                visible('g4','g5');
                visible('g4','g3');
            break;
            case 5:
                visible('g5','g6');
                visible('g5','g4');
            break;
            case 6:
                visible('g6','g7');
                visible('g6','g5');
            break;
            case 7:
                visible('g7','g8');
                visible('g7','g6');
            break;
            case 8:
                visible('g8','g1');
                visible('g8','g7');
            break;
            case 9:
                s=1;
                visible('g1','g2');
                visible('g1','g8');
            break;
        }
    }
}