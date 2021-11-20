class Taiyaki{
    constructor(content){
        this.content = content;
    }

    message(){
        console.log('中身' + this.content + 'です')
    }
}

let anko = new Taiyaki('あんこ');
anko.message();
let cream = new Taiyaki('クリーム');
cream.message();
let cheese = new Taiyaki('チーズ');
cheese.message();