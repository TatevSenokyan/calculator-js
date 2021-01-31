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
            if(output[i]=='(' &&  output[i+1]=='*' || output[i]=='(' &&  output[i+1]=='/' ||
            output[i]=='(' &&  output[i+1]=='+' || output[i]=='(' &&  output[i+1]=='-' 
            || output[i]=='(' &&  output[i+1]=='(' || output[i]=='(' &&  output[i+1]==')') {
              output=output.slice(0,i+1)+output.slice(i+2)
              document.getElementById('screen').innerHTML=output;
               
            }

            if( output[i]==')' &&  output[i+1]=='(' || output[i]==')' &&  output[i+1]==')') {
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
         
            arr=[];

            let i;

outer:for (i=0; i<output.length; i++) {
     if (isNaN(output[i])) {
        arr.push(output[i])
     } else {
if(i==output.length-1) {
arr.push(output[i])
  
}
        inner:for (let j=i+1; j<output.length; j++) {
             if (isNaN(output[j])) {
                 let a=output.slice(i,j)
                   arr.push(a)
                      i=j-1
                      break inner;
             }
               
                  

              
         }

     }
}
console.log(arr)

  
            let arr1;

            if (output.includes("(")) {
              f1(arr)
            } else {
              f(arr)
            }
            // recursion function without brackets case
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
          
          // recursion function with brackets case

            function f1(arr) {
              if(!arr.includes("(") && !arr.includes(")") )  {
                console.log(arr1)
             return arr1=arr
              }
            let arr2=arr.slice(arr.indexOf("(")+1,arr.indexOf(")"))
           
            let num=f(arr2)
          console.log(num)
             let final=Number(num[0]);
                            for (let i=1; i<num.length;i++) {
                                      if(num[i]=='-') {
                                        final-=+num[i+1]
                                      } else if(num[i]=='+') {
                                        final+=+num[i+1]
                                      } 
                                }
            console.log(final)
            arr[arr.indexOf("(")]=final;
            console.log(arr)
            let res=arr.slice(0,arr.indexOf(final)+1).concat(arr.slice(arr.indexOf(")")+1))
            
            
            return f1(res)
             
            }
  
             if (arr1.includes("/") || arr1.includes("*")) {
               f(arr1)
             }

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

  

  
   
