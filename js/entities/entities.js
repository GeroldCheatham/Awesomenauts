game.PlayerEntity = me.Entity.extend({
    init: function(x, y, settings) {
        this._super(me.Entity, 'init', [x, y, {
                image: "player",
                width: 64,
                height: 64,
                spritewidth: "64",
                spriteheight: "64",
                getShape: function() {
                    return(new me.Rect(0, 0, 64, 64)).toPolygon();
                }
        }]);
    
        this.body.setVelocity(5, 20);
        
        this.renderable.addAnimation("walk", [117]);
    
    },
    
    update: function(delta) {
        if(me.input.isKeyPressed("right")){
            
            this.body.vel.x += this.body.accel.x * me.timer.tick;
            this.flipX(true);
        }
        else if(me.input.isKeyPressed("left")){
            this.body.vel.x -= this.body.accel.x * me.timer.tick;
            this.flipX(false);
        }
        else{
            this.body.vel.x = 0;
        }
        
        this.body.update(delta);
        return true;
    }
});