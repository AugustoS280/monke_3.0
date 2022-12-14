var monke,   monke_Anim_Parado,   monke_Anim_Morrendo,   monke_Anim_AD,   monke_Anim_AE,   monke_Anim_Pulo,   monke_Anim_Jet,   monke_Anim_Abaixado
var robo,   robo_N_Anim__Parado,   robo_N_Anim_Morrendo,   robo_N_Anim_AD,   robo_N_Anim_AE,   robo_N_Anim_Pulo,   robo_N_Anim_Jet,   robo_N_Anim_Abaixado
var robos = []
var monkinho, monkinho_Anim_atirando, monkinho_Anim_caindo
var fundo_Img, fundo, menu, pausar,final,KeyLeft, menuS = true
var gamestate = 0


function preload(){
    fundo_Img = loadImage("./Assets/image (5).png")

    /*menu = loadImage("./Assets/fulano")
    pausar = loadImage("./Assets/fulano")
    menu = loadImage("./Assets/fulano")*/

    /*monke_Anim_Parado = loadAnimation("./Assets/fulano")
    monke_Anim_Morrendo = loadAnimation("./Assets/fulano")
    monke_Anim_AD = loadAnimation("./Assets/fulano")
    monke_Anim_AE = loadAnimation("./Assets/fulano")
    monke_Anim_Pulo = loadAnimation("./Assets/fulano")
    monke_Anim_Jet = loadAnimation("./Assets/fulano")
    monke_Anim_Abaixado = loadAnimation("./Assets/fulano")*/


    /*robo_Anim_Parado = loadAnimation("./Assets/fulano")
    robo_Anim_Morrendo = loadAnimation("./Assets/fulano")
    robo_Anim_AD = loadAnimation("./Assets/fulano")
    robo_Anim_AE = loadAnimation("./Assets/fulano")
    robo_Anim_Pulo = loadAnimation("./Assets/fulano")
    robo_Anim_Jet = loadAnimation("./Assets/fulano")
    robo_Anim_Abaixado = loadAnimation("./Assets/fulano")*/


    /*monkinho_Anim_atirando = loadAnimation("./Assets/fulano")
    monkinho_Anim_caindo = loadAnimation("./Assets/fulano")*/
    //dps
}


function setup(){
    createCanvas(windowWidth,windowHeight)
    fundo = createSprite(0,0)
    fundo.addImage("subindo", fundo_Img)

    monke = createSprite(20,height-20,20,20)
    /*monke.addAnimation("Parado",monke_Anim_Parado)
    monke.addAnimation("Morrer", monke_Anim_Morrendo)
    monke.addAnimation("Ad", monke_Anim_AD)
    monke.addAnimation("Ae", monke_Anim_AE)
    monke.addAnimation("Pular", monke_Anim_Pulo)
    monke.addAnimation("Jet", monke_Anim_Jet)
    monke.addAnimation("Abaixar", monke_Anim_Abaixado)*/



    /*robo.addAnimation("ParadoR",robo_Anim_Parado)
    robo.addAnimation("MorrerR", robo_Anim_Morrendo)
    robo.addAnimation("AdR", robo_Anim_AD)
    robo.addAnimation("AeR", robo_Anim_AE)
    robo.addAnimation("PularR", robo_Anim_Pulo)
    robo.addAnimation("JetR", robo_Anim_Jet)
    robo.addAnimation("AbaixarR", robo_Anim_Abaixado)*/



    //robo.addAnimation()

    
}


function draw(){
    if(gamestate == 0){
        
        inicio() 
        camera.zoom = 1

    }else if(gamestate == 1){
        
        play()

    }else if(gamestate == 2){
        
        fim() 
        camera.zoom = 1

    }else if(gamestate == 3){
        
        pause()
        camera.zoom = 1

    }
    drawSprites()
}

function inicio(){
    
    if(menuS){
        monke.visible = false
        fundo.visible = false
        menuS = createSprite(width/2,height/2,200,100)
    }
    
    if(mousePressedOver(menuS)){
        fundo.visible = true
        gamestate = 1
        menuS.visible = false
        monke.visible = true
    }

    /*menuS.mousePressed(()=>{
        gamestate = 1
        menuS = null
        monke.visible = true
    })*/
}


function play(){

    menuS.visible = false
    camera.zoom = 2
    camera.x = monke.x
    camera.y = monke.y -25

    generatemonke()
    setmonke()

    setKeys()
}

function keyPressed(){
    if(keyCode === 90){
       monkinho = createSprite(monke.x,monke.y,10,10)
       monkinho.lifetime = 10
       if(KeyLeft){
        monkinho.velocityX= -6
       }else if(!KeyLeft){
        monkinho.velocityX= 6
       }
    }
    if(keyCode === 27){
        gamestate = 3
    }
}


function pause(){
    let menuS
    if(menuS !== undefined){
        monke.visible = false
        menuS = createSprite(width/2,height/2,200,100)
    }

    if(mousePressedOver(menuS)){
        gamestate = 1
        menuS = null
        monke.visible = true
    }
}

function fim(){
    let menuS
    if(menuS !== undefined){
        monke.visible = false
        menuS = createSprite(width/2,height/2,200,100)
    }

    if(mousePressedOver(menuS)){
        gamestate = 1
        menuS = null
        monke.visible = true
    }
    
}


function generatemonke(){
    if(frameCount % 70 === 0){
        let yzin = Math.round(random(height -100 , 50))
        let xzin = Math.round(random(width/2 - 100 , width/2 - 40))
        robo = new Inimigo(xzin, yzin)
        robos.push(robo)
    }
}

function setmonke(){
    for(let i = robos.length - 1; i > -1; i--){
        console.log(robos[i])
        robos[i].perseguir()
        robos[i].update()
    }
}


function setKeys(){

    if(keyIsDown(68) || keyIsDown(RIGHT_ARROW)){
        monke.x += 4
        KeyLeft = false
        camera.x = monke.x + 2
        //monke.changeAnimation("Ad")
    }
    if(keyIsDown(65) || keyIsDown(LEFT_ARROW)){
        monke.x -= 4
        camera.x = monke.x -2

        KeyLeft = true
        //monke.changeAnimation("Ad")
    }
    if(keyIsDown(87) || keyIsDown(UP_ARROW)){
        monke.y -= 4
        camera.y = monke.y -27
        //monke.changeAnimation("Ad")
    }
    if(keyIsDown(83) || keyIsDown(DOWN_ARROW)){
        monke.y += 4
        camera.y = monke.y -23
        //monke.changeAnimation("Ad")
    }
}