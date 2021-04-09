AFRAME.registerComponent('rotation-reader', {
  tick: function() {
    // `this.el` is the element.
    // `object3D` is the three.js object.

    var LimiteArriba = 0.1;
    var LimiteAbajo = -0.2;
    var LimiteIzquierda = 0.3;
    var LimiteDerecha = -0.3;

    //Limite Rotación Arriba
    if (this.el.object3D.rotation.x >= LimiteArriba) {
      this.el.object3D.rotation.x = LimiteArriba;
    }
    //Limite Rotación Abajo
     if (this.el.object3D.rotation.x <= LimiteAbajo) {
      this.el.object3D.rotation.x = LimiteAbajo;
    }
    //Limite Rotación Izquierda
     if (this.el.object3D.rotation.y >= LimiteIzquierda) {
      this.el.object3D.rotation.y = LimiteIzquierda;
    }
    //Limite Rotación Derecha
     if (this.el.object3D.rotation.y <= LimiteDerecha) {
      this.el.object3D.rotation.y = LimiteDerecha;
    }
  }
});
