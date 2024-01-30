export class Pilota {
    constructor(x, y, velX, velY, color, mida) {
        this.x = x;
        this.y = y; 
        this.velX = velX;
        this.velY = velY;
        this.color = color;
        this.mida = mida;
    }

    dibuixa(ctx) {
        ctx.beginPath(); // Per començar a dibuixar formes al canvas
        ctx.fillStyle = this.color; //Color amb que dibuixarem
        ctx.arc(this.x, this.y, this.mida, 0, 2 * Math.PI); //Dibuix d’un arc
        ctx.fill(); // Finalitza el dibuix i l’omple amb el color ja esmenat
    }

    /*si la posició x mes la mida de la Pilota es major que l’ample del canvas ha de rebotar
    si la posició x menys la mida de la Pilota es menor que 0 → ha de rebotar
    si la posició y mes la mida de la Pilota és major que l’alçada del canvas ha de rebotar
    si la posició y menys la mida de la Pilota és menor que 0 ha de rebotar
    a la posició x se li suma la velocitatx a la posició y se li suma la velocitaty */
    
    //En cada frame
    mou (width,height){
        if ((this.x + this.mida) > width || this.x - this.mida <0){
            this.velX =- this.velX;
        }
        if ((this.y + this.mida)> height || this.y - this.mida <0){
            this.velY =- this.velY
        }

        //Es fa si o si 
        this.x += this.velX;
        this.y += this.velY;
    }

    //Necessita un altre element per saber si s'ha d'executar o no 
    checkCollision(altrePilota){ 
        let distanciaX = altrePilota.x - this.x;
        let distanciaY = altrePilota.y - this.y;
        if (Math.abs(distanciaX)> Math.abs(distanciaY)){
            this.velX =- this.velX;
        } else {
            this.velY =- this.velY;
        }
          
    }

    
}