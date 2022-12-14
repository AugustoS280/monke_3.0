class Inimigo{
    constructor(x,y){
        this.x = x
        this.y = y
        
        this.body = createSprite(this.x,this.y, 20,20)
    }

    update(){
        let pos = this.body
        pos.x = this.x
        pos.y = this.y
    }

    perseguir(){
        let pos = this.body
        let vel = 5

        let distancia = dist(pos.x, pos.y, monke.x, monke.y)

        let MX = monke.x
        let MY = monke.y

        if(distancia <= 100){
            if(MX>pos.x){
                this.x += vel
            }
            if(MX<pos.x){
                this.x -= vel
            }
            if(MY>pos.y){
                this.y += vel
            }
            if(MY<pos.y){
                this.y -= vel
            }
            
        }
        if(distancia <= 10){
            gamestate =2
        }
    }
}