let output='';
let arr=[];
let number=0;
let finalResult=0;
   function f(event) {
      let a=event.target.innerHTML;
         output+=a;
         document.getElementById('screen').innerHTML=output;  
           for (let i=0; i<output.length; i++) {
              if (output[i]=='+' || output[i]=='-' || output[i]=='*' || output[i]=='/') {
                if (output[i-1]=='+' || output[i-1]=='-' || output[i-1]=='*' || output[i-1]=='/') {
                    output=output.slice(0,i)+output.slice(i+1)
                    document.getElementById('screen').innerHTML=output;  
                  }
                }
              }   
    }
         

    function f1() {
      document.getElementById('screen').innerHTML='';
          finalResult=0;
          output='';
        }

        
        
  function  final() {
         
            
        for (let i=0; i<output.length; i++) {
            if(output[i]=='+' || output[i]=='-' || output[i]=='/' || output[i]=='*') {
                arr.push(i)
         }
 
        }

         let result=[output.slice(0,arr[0]),output[arr[0]]]
 
            for (let i=1; i<arr.length; i++) {
               item=output.slice(arr[i-1]+1,arr[i]);
                  result.push(item,output[arr[i]])
            }
                result.push(output.slice(arr[arr.length-1]+1))



              finalResult+=+result[0];
                   for (let i=1; i<result.length;i++) {
                          if(result[i]=='-') {
                             finalResult-=+result[i+1]
                          } else if(result[i]=='+') {
                               finalResult+=+result[i+1]
                          } else if(result[i]=='/') {
                            finalResult/=+result[i+1]
                            } else if(result[i]=='*') {
                               finalResult*=+result[i+1]
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
        document.getElementById('screen').innerHTML=finalResult;
        output=finalResult
        finalResult=0;
        arr=[]
      }

      function squareRoot() {

          if (arr.length===0) {
             finalResult=+output
          
           }
          finalResult=Math.pow(finalResult,1/2);
          document.getElementById('screen').innerHTML=finalResult;
          output=finalResult
          finalResult=0;
          arr=[]
        }

      function reverseNumber () {
          if (arr.length===0) {
             finalResult=+output
          
           }
          finalResult=1/finalResult;
          document.getElementById('screen').innerHTML=finalResult;
          output=finalResult
          finalResult=0;
          arr=[]
        }

      function percent () {
          if (arr.length===0) {
             finalResult=+output
          
           }
          finalResult=finalResult/100;
          document.getElementById('screen').innerHTML=finalResult;
          output=finalResult
          finalResult=0;
          arr=[]
        }
   