var inp=document.getElementsByTagName("input");
		
		var span1=document.getElementsByClassName("span1")[0];
		var span2=document.getElementsByClassName("span2")[0];
		var input1=document.getElementById("input1");
		var input2=document.getElementsByTagName("input")[2];
		var span222=document.getElementsByClassName("span222")[0];
		var span221=document.getElementsByClassName("span222")[1];
		
		/*下*/
		var span11=document.getElementsByClassName("span11")[0];
		var span22=document.getElementsByClassName("span22")[0];
		var input5=document.getElementById("input5");
		
	/* 全选*/
	function alls(){
			for (var i=0;i<inp.length;i++) {
			inp[i].checked=inp[0].checked;
			xiaoji();
			zhong();
		}
		}
		function jia(){
			input1.value=Number(input1.value)+1;
			xiaoji();
			zhong();
		}
		function jian(){
			input1.value=Number(input1.value)-1;
			xiaoji();
			zhong();
		}
		function xiaoji(){
			span2.innerHTML=Number(span1.innerHTML)*input1.value;
		}
		/*xia*/
		
		function jia1(){
			input5.value=Number(input5.value)+1;
			xiaoji1();
			zhong();
		}
		function jian1(){
			input5.value=Number(input5.value)-1;
			xiaoji1();
			zhong();
		}
		function xiaoji1(){
			span22.innerHTML=Number(span11.innerHTML)*input5.value;
		}
		function zhong(){
			if(span22.innerHTML=="￥0.00"||span2.innerHTML=="￥0.00"){
			span222.innerHTML=0+Number(span2.innerHTML);
			span221.innerHTML=0+Number(span2.innerHTML);
			}else{
			span222.innerHTML=Number(span22.innerHTML)+Number(span2.innerHTML);
			span221.innerHTML=Number(span22.innerHTML)+Number(span2.innerHTML);
			}
			
		}