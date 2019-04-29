$('#btn-1').click(function(){
  var input =$('#input-1').val();
  $('#list').append('<li>'+input+'</li>');
});
$('#btn-2').click(function(){
  $('#list>li:last-child').remove();
});





// $('#box').mousedown(function(){
//   $(this).css('width','300px')
// });
// $('#box').mouseup(function(){
//   $(this).css('width','200px')
// });


///small=$('#box').append("<div id='small-box'></div>");
///$('#small-box').remove();

//var vall = $('#input-1').val();
//$('#box').html(vall);




//練習7. 建立你喜歡的一本書的物件，物件要包含書名、作者、出版商、價格、初刷日期。
// var date = new Date();
// var obj = {bookname:"bigdata",author:"man",publisher:"ntc",price:200,firstDay:date.getFullYear()};

// console.log(obj);


// var product = {
//   name: "冰室茶集綠奶茶",
//   producer: "統一",
//   capacity: "400ml",
//   price: 25,
//   Ingredients: ["水","庶糖","奶精","茉莉綠茶"],
//   sound:function(){console.log("來一杯！")}
// }
// //console.log(product.name,product.capacity,product.Ingredients[2]);
// console.log(product.sound());

// var languages = ["Java","C#","Go","Ruby","PHP"];
// languages.splice(2,1,"Python","Javascript");刪除第2個開始的第一個＝"GO",並加入後面的內容
// console.log(languages);
// console.log(languages.toString());轉為字串

// var Avengers = ["鋼鐵人","美國隊長","索爾","黑寡婦","浩克","鷹眼"];
// 這樣dark,capt,iron都會變成新的list
// var dark = Avengers.slice(2);
// var capt = Avengers.slice(1,3);
// var iron = Avengers.slice(0,3);
// console.log(dark,capt,iron);


// var weekday = ["Monday","Tuesday","Wednesday","Thursday","Friday"];
// var weekend = ["Sunday","Saturday"];

// var x = weekday.push(weekend[1],weekend[0]);
// console.log(weekday);
	
// var arr = new Array ("jack",24,true)
// console.log(arr)

// var arr2 = new Array("learning ", "am ", "Javascript ", "I ", "today!");
// console.log(arr2[3]+arr2[1]+arr2[0]+arr2[2]+arr2[4])

// 移除最後一個list
// var x = arr2.pop();

// console.log(arr2);
// console.log(x);

// var arr3 = ["足球","籃球","棒球","排球","羽毛球","桌球","網球"];

// var y1 = arr3.pop();
// console.log(y1);
// var y1 = arr3.pop();
// console.log(y1);
// var y1 = arr3.pop();
// console.log(y1);
// var y1 = arr3.pop();
// console.log(y1);
// console.log(arr3);	
// function triangle(l,h){
//   return (l*h)/2;
// }
// console.log(triangle(8,3))
// console.log(triangle(6,10))




// var sum = 0;
// for (i=0;i<11;i++){
//   sum = sum +i;
// }
// console.log(sum);

// var i = 0;
// while(i<=10){
// 	console.log(i);
// 	i++;
// 	if(i == 6){
// 		break;
// 	}
// }

// for(i=0; i<=10; i++) {
// 	if(i>4){
//     break;
//   }
//   console.log("整數："+i);
// }

// function hello(name){
//   console.log("你好,我叫"+name+",很高興認識你");
// }
// hello("哈利");
// hello("隆恩");
// hello("妙麗");




// //九九乘法表
// var table = "<table border='1'>";
// for(i=1;i<=9;i++){	
// 	table += "<tr>";
// 	table +="<td>"+i+"</td>"
// 	for(j=1;j<=9;j++)
// 	{
// 		table +="<td>"+i+"x"+j+"="+i*j+"</td>"
// 	}
// 	table+="</tr>"
// }
// table +="</table>";

// document.write(table);



// function abc(e){
// 	var abc = e;
// 	console.log(abc);
// }
// abc("hello world");

// var a = 123;
// var b = "hello";
// var c = true;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// //精簡版
// var aa =10 ,bb ="hello" ,c =true;



// function ddd(e)
// {
// 	var abc = e;
// 	console.log(typeof abc);
// }
// ddd(123)

// // window.alert('單引號裡有\"雙引號\"字串');

// var gg = (313+19)/2;
// var ee  = 1149322-8492;
// var hh = (119*54)%19;
// console.log(gg,ee,hh);

// //第一題
// if(80 > 79){
//   console.log("right");
// }else{
//   console.log("false");
// }

// //第二題
// var aaa = 93/18;
// var bbb = 1674;
//     if (aaa<= bbb) {
//         console.log("right");
//     } else {
//         console.log("false");
//     }

// //第三題
// var ccc ="A"
// var ddd ="B"
//     if(ccc > ddd ){
//       console.log("right");
//     }else {
//         console.log("false");
//     }
// //第四題
// var fff = 12*13
// var yyy = 144
// if (fff>yyy && true!=false){
// 	console.log(true)
// }else{
// 	console.log(false)
// }
// //三元寫法！！！
// // fff>yyy && true!=false ? console.log("yes"):console.log("no");


// //三元寫法！！！
// 10<9 || 'hello' != 'hello' ? console.log("true"):console.log("false")


// var val = 10;
// if(val<0){
//   console.log("負數");
// }else if(val>0){
//   console.log("正數");
// }else{
//   console.log(0);
// }


// var weekDay = 6;
// switch(weekDay){
//   case 1:
//     console.log("星期一");
//     break;
//   case 2:
//     console.log("星期二");
//     break;
//   case 3:
//     console.log("星期三");
//     break;
//   case 4:
//     console.log("星期四");
//     break;
//   case 5:
//     console.log("星期五");
//     break;
//   case 6:
//     console.log("星期六");
//     break;
// }

/*
<h1>
  練習4. 使用switch判斷gender變數，並使用console.log進行輸出。<br>
  如果gender等於"m"，輸出「男性」；<br>
  如果gender等於"f"，輸出「女性」；<br>
  如果都不符合，則輸出「不公開」。
  （可試著改變gender的值來測試）
</h1>
*/

// var gender = ""
// switch(gender){
//   case "m":
//     console.log("man");
//     break;
//   case "f":
//     console.log("woman");
//     break;
//   default:
//     console.log("不公開");
// }




