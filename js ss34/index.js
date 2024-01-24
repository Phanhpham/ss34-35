// console.log(document);
// console.dir(document);

// //1.document.getElementById();

// let h1=document.getElementById("demo-id");
// let div=document.getElementById("div-id");

// console.log(h1);
// console.log(div);

// //2.document.getElementsByClassName();

// let lis = document.getElementsByClassName("list-item");
// console.log(lis);
// console.log ("First li",lis[0]);
// console.log ("Last li",lis[lis.length-1]);

// for(let i=0;i<lis.length;i++){
//    console.log("từng thẻ",lis[i]);
// }

// //3. document.getElementsByTagName(tag)

// let liCollection = document.getElementsByTagName("li");

// console.log("tập hợp thẻ li",licollection);


// let h1 = document.getElementById("demo-id");

// console.log(h1.innerHTML);//
// console.log(h1.innerText);//
// console.log(h1.textContent);//



// h1.innerHTML = "<ul><li>hello mới được update nè</li></ul>"; //object-đôi tượng 

// h1.innerText = "<i>hêhhehehhehe</i>";

// h1.textContent = "hohhohohoho";

// console.log(h1.id);
// if(h1.id === "demo-id"){
//     alert("kiểm tra id");
// }

// h1.classList;//danh sách class

// console.log(h1.classList);
// console.log("class đàu tiên",h1.classList[0]);
// console.log("class cuối cùng",h1.classList[h1.classList.length-1]);

// h1.classList.add("class-4");

// h1.classList.remove("class-1");

// console.log (h1.classList.contains("class-4"));

// console.log(h1.style);

// h1.style.backgroundColor="red";
// h1.style.width="200px";
// h1.style.height="200px";
// h1.style.textAlign="center";
// h1.style.lineHeight="200px";
// h1.style.fontSize="30px";
// h1.style.fontWeight="bold";
// h1.style.color="white";
// h1.style.borderRadius="50%";
// h1.style.border="10px solid black";

// let b = document.getElementById("child-b");

// console.log(b.parentElement.parentElement.childen[2].children[0]);

// let input = documentgetElementById("input");

// console.log("đây la gia trị cua o input thoi diem hien tại",input.value);
// input.value="hello world";

// document.creatElement("li");

// console.log(li);  

let btn = document.getElementById("btn");

btn.onclick = function(){
    alert("hello world sau mỗi làn click");
}