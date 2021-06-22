import * as PIXI from "pixi.js"

export class App{
    private width;
    private height;
    private app;
    private appElement;


    constructor(el){
        this.width = el.clientWidth;
        this.height = el.clientHeight;
        this.app = new PIXI.Application({width: this.width, height: this.height});
        this.appElement = el;
        
        this.render();
    }

    private render(){
        this.appElement.appendChild(this.app.view);
    }





    public reloadAppSize(width:number, height: number){
        this.width = width;
        this.height = height;
    }

}

//let app = new PIXI.Application({width: 256, height: 256});