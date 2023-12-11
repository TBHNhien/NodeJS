var Product = require('../models/product');
var mongoose = require('mongoose');

var products = [
    new Product({
        imagePath:"https://lzd-img-global.slatic.net/g/p/0e51255c9a21f7df50f70df52e3e5277.jpg_720x720q80.jpg",
        title:"giày thể thao nữ DIKA",
        description:"mẫu 1",
        price:142000
    }),
    new Product({
        imagePath:"https://file.hstatic.net/200000532469/file/fila-disruptor-2-script-white_40c74abb515c4838a01e48137eaa3e8a_grande.png",
        title:"giày Fila Disruptor 2 Script White",
        description:"mẫu 2",
        price:1197000 
    }),
    new Product({
        imagePath:"https://file.hstatic.net/200000532469/file/mlb-la-dodgers-sneaker-_-big-ball-chunky-a__c69712fe9ce446d8a7126f06b21637b6_grande.png",
        title:"giày MLB LA Dodgers Sneaker – Big Ball Chunky A ",
        description:"mẫu 3",
        price:1780000 
    }),
    new Product({
        imagePath:"https://file.hstatic.net/200000532469/file/balenciaga-triple-s_a6680ec1fa434d9ea133cf8afc89b598_grande.png",
        title:"giày Balenciaga Triple S ",
        description:"mẫu 4",
        price:24700000
    }),
    new Product({
        imagePath:"https://file.hstatic.net/200000532469/file/adidas-originals-falcon-w-triple-white_21a6a636f2be4570ad77c8fae1938716_grande.png",
        title:"giày Adidas Originals Falcon W Triple White ",
        description:"mẫu 5",
        price:2100000 
    }),
    new Product({
        imagePath:"https://file.hstatic.net/200000532469/file/alexander-mcqueen-red-suede_d03db52e234643558adcbd2f9f636c0c_grande.png",
        title:"giày Alexander McQueen Red Suede ",
        description:"mẫu 6",
        price:11300000
    }),

];

//thêm vào CSDL 
//mở kết nối

//cách cũ dùng callback không còn được hỗ trợ cho đối tượng model trong mongoose nữa=> Model.prototype.save() không còn hỗ trợ callback nữa.
// var done =0;
// for(var i=0 ;i<products.length;i++){
//     products[i].save(function(err,result){//truyền vào 1 callback
//             done++;
//             if(done === products.length){
//                 exit();
//             }
//     });
// };

//cách mới dùng promise
// Tạo một mảng promises để giữ các promises từ phương thức save
var savePromises = [];

for (var i = 0; i < products.length; i++) {
    // Gọi phương thức save và đẩy promise vào mảng
    savePromises.push(products[i].save());
}

// Sử dụng Promise.all để chờ tất cả các promises hoàn thành
Promise.all(savePromises)
    .then(results => {
        console.log("All products saved successfully");
        // Gọi hàm exit() sau khi tất cả promises đã hoàn thành
        exit();
    })
    .catch(err => {
        console.error("Error saving products:", err);
        // Xử lý lỗi ở đây nếu cần
        // ...

        // Gọi hàm exit() sau khi xử lý lỗi
        exit();
    });


function exit(){
    mongoose.disconnect();
}







