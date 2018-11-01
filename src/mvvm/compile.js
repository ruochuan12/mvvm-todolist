class Complie{
    constructor(options) {
        this.vm = options.vm;
        this.el = document.querySelector(options.el);
        this.textReg = /{{.+?}}/;
    }
    init(){
        
    }
};