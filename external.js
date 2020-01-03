window.addEventListener('DOMContentLoaded', init);
//alert('hu');
var opjt=['*','/','+','-','9','8','7','6','5','4','3','2','1','0','.'];
//special function keys are used
var space=['*','/','+','-'];

  function init() {
  	document.title="JavaScript Calculator";//title
  	console.log('working');
  	var dec=false;
  	var eva=false;
  	var container=document.createElement('div');//take 1first div
  	container.classList.add('container');//inside of div of container
  	container.style.maxWidth='600px';
  	container.style.margin='auto';
  	document.body.appendChild(container);//add div class container 
  	var output=document.createElement('input');//add input
  	output.setAttribute('type','text');
  	output.classList.add('output');
  	output.style.width='100%';
  	output.style.lineHeight='50px';
  	output.style.fontSize='3em';
  	output.style.textAlign='right';
  	container.appendChild(output);//append input s--w..
  	var mainWork=document.createElement('div');//new div
  	mainWork.classList.add('mainWork');
  	mainWork.style.width='100%';
  	container.appendChild(mainWork);
  	opjt.forEach(function(val){
  		//console.log(val);
  		btnMaker(val,addOutPut);
  	});
  	btnMaker('=',evalOutput);
  	btnMaker('C',clrOutput);

  	function evalOutput(){
  	   output.style.border='black 1px solid';
       console.log('=');
       if (output.value==="") {
            output.style.border='red 1px solid';
       } else {
            output.value=eval(output.value);
       }
  	}

  	function clrOutput(){
  		output.style.border='black 1px solid';
  		output.value="";
  	}

  	function btnMaker(txt,myFunction){
      var btn =document.createElement('button');
      btn.setAttribute('type','button');
      btn.style.width='23%';
      btn.style.lineHeight='50px';
      btn.style.margin='1%';
      btn.style.fontSize='2em';
      btn.val=txt;
      btn.textContent=txt;
      btn.addEventListener('click',myFunction);
      mainWork.appendChild(btn);
  	}

  	function addOutPut(e) {
  		console.log(dec);
  	output.style.border='black 1px solid';
	console.log(e.target.val);
	var char=e.target.val;
	if (char == '.') {
        if (dec) {
        	char ='';
        	output.style.border='red 1px solid';
        }else{
        	dec=true;
        }
	 }
	 eva=space.includes(char);
	 if (eva) {
        dec=false;
	 }
	 output.value +=char;
   }



  }
    