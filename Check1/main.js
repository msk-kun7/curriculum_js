let numbers = [2, 5, 12, 13, 15, 18, 22];
// //ここに答えを実装してください。↓↓↓
function isEven() {
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i] + 'は偶数です');
    }
}
}
isEven();

// 問2:以下の要件を満たすように実装してください。

// 【要件】

// ・インスタンス化した時にガソリンとナンバーがセットされるようなCarクラスを作成する

// ・「ガソリンは〇〇です。ナンバーは△△です」と出力される「getNumGas」という関数を作成する

//Humanクラスを作成
class Car {
    constructor(gasoline,number){
        this.gasoline = gasoline;
        this.number = number;
    }

    getNumGas(){
        console.log(`ガソリンは${this.gasoline}です。ナンバーは${this.number}です`)
    }
}
//Humanクラスをインスタンス化して、yamadaを作成
let car = new Car('レギュラー',00-00);
car.getNumGas();