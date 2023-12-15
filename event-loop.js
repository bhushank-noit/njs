/* Javascript is synchronous and single threaded execution using call stack(CS) 
as any execution contect comes in CS it executes and poped out

Web API 
    settimeout, DOM apis, console, fetch, localstorage, location => these are thenot part of the JS, are super powers of browser which gives js engine through window object 

    settimeout uses timer feature of browser 

    consider a program 1

    console.log("start")
    settimeout(function callback(){console....},5000)
    console.log("end") 

    cb is passed to timer and start and end printed on console and Global Exe. Context(GEC) pops out
    when time expires then cb moves into CallbackQueue(CBQ) 
    There is event loop which checks call stack is empty or not contuniously and if empty then callback function put int CS and poped from CBQ


    consider a program 2

    console.log("start")
    document.getElementID(
        "abc"
    ).
    addEventlistner("click",function callback(){console....})
    console.log("end") 

    on click this callback function puts in CBQ and waits to execute in CS 

    Event Loop = contuniously monitors CS and CBQ & if CS is empty then put CBQ element in CS which is poped out from CBQ 

    CBQ  needed because more click then CB fun need to be add in CBQ 


    fetch uses network call 

    consider a program 1

    console.log("start")
    fetch promisess with CBF
    settimeout(function CBT(){console....},5000)
    console.log("end") 
    
    MicroTaskQueue(MTQ) is similar CBQ but with higher priority , and it's element exe'n context executed first 

    fetch promisses and mutation observer goes in MTQ and other dom api, settimeout goes in CBQ 
    CBQ is also called as TaskQueue

    Event loop then moniters CS and if empty then MTQ>>CBQ element pushed on CS 

    Consider 3 task in MTQ and 1 ask in CBQ then these three task has higher priority, if one of 3 task creates another MTQ task and so on then CBQ task doesn't chance to execute it then is is called as starvatio


*/
