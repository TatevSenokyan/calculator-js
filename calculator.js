let output='';
let arr=[];
let number=0;
let finalResult=0;
   function f(event) {
      let a=event.target.innerHTML;
         output+=a;
         document.getElementById('screen').innerHTML=output;  
         for (let i=0; i<output.length; i++) {
            if(output[i]=='-' &&  output[i+1]=='-') {
              output=output.slice(0,i)+'+'+output.slice(i+2)
              document.getElementById('screen').innerHTML=output;
               
            }
            if(output[i]=='+' &&  output[i+1]=='+') {
              output=output.slice(0,i)+output.slice(i+1)
              document.getElementById('screen').innerHTML=output;
               
            }
            if(output[i]=='-' &&  output[i+1]=='+' || output[i]=='+' &&  output[i+1]=='-') {
              output=output.slice(0,i)+'-'+output.slice(i+2)
              document.getElementById('screen').innerHTML=output;
               
            }
            if(output[i]=='+' &&  output[i+1]=='*' || output[i]=='+' &&  output[i+1]=='/') {
              output=output.slice(0,i+1)+output.slice(i+2)
              document.getElementById('screen').innerHTML=output;
               
            }
            if(output[i]=='-' &&  output[i+1]=='*' || output[i]=='-' &&  output[i+1]=='/') {
              output=output.slice(0,i+1)+output.slice(i+2)
              document.getElementById('screen').innerHTML=output;
               
            }
            if(output[i]=='*' &&  output[i+1]=='*' || output[i]=='*' &&  output[i+1]=='/' ||
            output[i]=='*' &&  output[i+1]=='+' || output[i]=='*' &&  output[i+1]=='-') {
              output=output.slice(0,i+1)+output.slice(i+2)
              document.getElementById('screen').innerHTML=output;
               
            }
            if(output[i]=='/' &&  output[i+1]=='*' || output[i]=='/' &&  output[i+1]=='/' ||
            output[i]=='/' &&  output[i+1]=='+' || output[i]=='/' &&  output[i+1]=='-') {
              output=output.slice(0,i+1)+output.slice(i+2)
              document.getElementById('screen').innerHTML=output;
               
            }
         }
        
    }
         

    function f1() {
      document.getElementById('screen').innerHTML='';
          finalResult=0;
          output='';
        }

        
        
  function  final() {
         console.log(output)
            arr=output.split('');
            let arr1;
            function f(arr) {
              if(!arr.includes('*') && !arr.includes('/') ) {
             return arr1=arr
              }
            if(arr.includes('*')) {
            arr.splice(arr.indexOf('*')-1,3,`${arr[arr.indexOf('*')-1]*arr[arr.indexOf('*')+1]}`)
            }
            if(arr.includes('/')) {
            arr.splice(arr.indexOf('/')-1,3,`${arr[arr.indexOf('/')-1]/arr[arr.indexOf('/')+1]}`)
            }
            return f(arr)
             
            }
            f(arr)

            finalResult=Number(arr1[0]);
                for (let i=1; i<arr1.length;i++) {
                          if(arr1[i]=='-') {
                            finalResult-=+arr1[i+1]
                          } else if(arr1[i]=='+') {
                            finalResult+=+arr1[i+1]
                          } 
                    }

        

                      document.getElementById('screen').innerHTML=finalResult 
                      output=finalResult;
                      finalResult=0;
                      arr=[]
} 
        
       
        
        
       function square() {
          if (arr.length===0) {
             finalResult=+output
          
           }
        finalResult=finalResult*finalResult;
        document.getElementById('screen').innerHTML=finalResult.toFixed(3);
        output=finalResult
        finalResult=0;
        arr=[]
      }

      function squareRoot() {

          if (arr.length===0) {
             finalResult=+output
          
           }
          finalResult=Math.pow(finalResult,1/2);
          document.getElementById('screen').innerHTML=finalResult.toFixed(3);
          output=finalResult
          finalResult=0;
          arr=[]
        }

      function reverseNumber () {
          if (arr.length===0) {
             finalResult=+output
          
           }
          finalResult=1/finalResult;
          document.getElementById('screen').innerHTML=finalResult.toFixed(3);
          output=finalResult
          finalResult=0;
          arr=[]
        }

      function percent () {
          if (arr.length===0) {
             finalResult=+output
          
           }
          finalResult=finalResult/100;
          document.getElementById('screen').innerHTML=finalResult.toFixed(3);
          output=finalResult
          finalResult=0;
          arr=[]
        }
   
