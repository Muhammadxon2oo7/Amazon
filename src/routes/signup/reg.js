(()=>{
        let usernameRef =document.getElementById("username");
        let passwordRef = document.getElementById("password")
        let submitBtn= document.getElementById("submit")
        let messageRef= document.getElementById("message-ref")
        let isUsernameValid =()=>{
          const usernameRegex=/^[a-zA-Z][a-za-Z0-9]{3,32}/gi;
          return usernameRegex.test(usernameRef.value)
        }
        let isPasswordValid =() =>{
          const passworRegex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
          return passworRegex.test(passwordRef.value)
        }  
        usernameRef.addEventListener("input",()=>{
          if(!isUsernameValid()){
            messageRef.style.visibility="hidden";
            usernameRef.style.cssText=
            "border-color:#fe2e2e; background-color:#ffc2c2";
          }else{
            usernameRef.style.cssText=
              "border-color:#34bd34; background-color:#c2ffc2";
          }
        });
        passwordRef.addEventListener("input",()=>{
          if(!isPasswordValid()){
            messageRef.style.visibility="hidden";
            passwordRef.style.cssText =
            "border-color:#fe2e2e; background-color:#ffc2c2";
          }else{
            passwordRef.style.cssText=
            "border-color:#34bd34; background-color:#c2ffc2";
          }
        })
        submitBtn.addEventListener("mouseover",()=>{
          if(!isUsernameValid() || !isPasswordValid ()){
            let containerRect=document
            .querySelector(".container")
            .getBoundingClientRect();
            let submitRect =submitBtn.getBoundingClientRect();
            let offset = submitRect.left-containerRect.left;
            console.log(offset)
            if(offset<=100){
              submitBtn.style.transform="translateX(16.25em)";
            }else{
              submitBtn.style.transform ="translateX(0)";
            }
          }
          submitBtn.addEventListener("click",()=>{
            messageRef.style.visibility = "visible"
          })
        })
})()
// *{
//     padding:0;
//     margin:0;
//     box-sizing: border-box;
// }
// .container{
//     width: 31.25em;
//     background-color: #f8f8f8;
//     padding: 1.4em 3.75em;
//     position: absolute;
//     transform: translate(-50%,-50%);
//     top: 50%;
//     left: 50%;
//     border-radius: 0.7em;
//     box-shadow: 0 1em 4em rgb(71,50,4,0.3);
// }
// h2{
//     text-align: center;
//     font-size: 32px;
//     margin-bottom: 30px;
//     color: rgb(6, 74, 127);
// }
// input,
// #submit{
//     border: none;
//     outline: none;
//     display: block;
// }
// input{
//     width: 100%;
//     background-color: transparent;
//     margin-bottom: 2em;
//     font-size: 20px;
//     padding: 1em 0 0.5em 0.5em;
//     border-bottom: 2px solid #202020;
// }
// #submit{
//     position: relative;
//     left: 0;
//     font-size: 1.1em;
//     width: 7em;
//     background-color: #096292;
//     color: white;
//     padding: 0.8em 0;
//     margin-top: 2em;
//     border-radius: .3em;
// }
// #message-ref{
//     font-size: 0.9em;
//     margin-top: 1.5em;
//     color: #34bd34;
//     visibility: hidden;
// }

{/* <div className="container">
        <h2>
          Advanced Input Box
        </h2>
        <input type="text" placeholder='userName' />
        <input type="password" placeholder='Password' id='Password' />
        <button id='submit'>Submit</button>
        <p id='message-ref'>Signed Up Successfully!</p>
      </div> */}