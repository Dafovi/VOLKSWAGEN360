
AFRAME.registerComponent('rotation-reader', {
  tick: function () {
    // `this.el` is the element.
    // `object3D` is the three.js object.

    // `rotation` is a three.js Euler using radians. `quaternion` also available.
    //console.log(this.el.object3D.rotation);

    // `position` is a three.js Vector3.
    //console.log(this.el.object3D.position);
	  
	if(this.el.object3D.rotation.x>=0.5){
		this.el.object3D.rotation.x = 0.5;
	}
	  else if(this.el.object3D.rotation.x<=-0.5){
		this.el.object3D.rotation.x = -0.5;
	}
	if(document.getElementById('VagonInterior')){
		if(this.el.object3D.rotation.y>=1.99){
		this.el.object3D.rotation.y = 1.99;
		}
	  	else if(this.el.object3D.rotation.y<=-1.99){
		this.el.object3D.rotation.y = -1.99;
		}
	}  
	  
  }
});

// <a-entity camera look-controls rotation-reader>;