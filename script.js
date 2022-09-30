 let form = document.getElementById("form");
let p3 = document.getElementById("p3");
let small = document.getElementById("small");
let fibutton = document.getElementById("fileb");
let  keywordinput = document.getElementById("title");
let  selectfacility = document.getElementById("facility");
let  selectcategory = document.getElementById("category");
let  selectlocotion = document.getElementById("loc");
let  searchsection = document.getElementById("mainjobs");
let canelb = document.getElementById("cancelbox");
let content = document.getElementById("jobsconte");

let searchj= document.getElementById("critsec");
let navbar = document.getElementById("popout");
let header = document.getElementById("thehead");
let navcancel= document.getElementById("sec");





//popout partn for the nave bar start here

  

let poppop = () =>{
    setTimeout(()=>{
        navbar.style.display="block";
        thehead.style.visibility="hidden";
        
        

    },100);
    setTimeout(()=>{
         
        let clis = document.getElementsByClassName("popout");
   clis[0].classList.add("popclas");
    
    },500);
  
  
    
  
}

let popdisap = () =>{
    
    setTimeout(()=>{
         
        let clis = document.getElementsByClassName("popout");
   clis[0].classList.remove("popclas"); 
   thehead.style.visibility="visible"; 

    },1000);

    setTimeout(()=>{
        navbar.style.display="none";

    },2000);
   
    

}
//nav bar functionalies end here


//serch button  start here
let value=0;

let sapper = () =>{
    if(value==0){
        setTimeout(()=>{
            searchj.style.display="block";
    
        },100);
        setTimeout(()=>{
             
            let clis = document.getElementsByClassName("byte");
       clis[0].classList.add("newclas"); 

       value=value+1;
      
    
        },200);

    }else{
        setTimeout(()=>{
            let clis = document.getElementsByClassName("byte");
            clis[0].classList.remove("newclas"); 

            value=0;
           
    
        },100);
        setTimeout(()=>{
             
         
            searchj.style.display="none";
  
    
        },200);

      
    }
   
   
   
}





document.getElementById("form").addEventListener('submit', (e) =>{
    e.preventDefault();
    generatelink();
    document.getElementById("form").reset()
});



let link1 ="https://careers-exeterhospital.hctsportals.com/jobs/search?gloc=1&q=";
//keyword input should come here
let link2="&cfm4=";
//select facility should come here in uppper case
let link3 ="&cfm2=";
//select category should come here in uppercase
let link4 = "&location_country=&location_state=&location=&radius=&ns_lcache=&location_city=";
// select location




let  generatelink = () =>{
    let thelink = link1 + keywordinputf() + link2 + 
    selectfacilityf().toUpperCase() + link3 
    + selectcategoryf().toUpperCase() + link4 +selectlocotionf();
   content.src= thelink;


}

let trail=()=>{
    let name1= "Nursing"
    console.log(/\s/g.test(name1));
}


let keywordinputf = () => {
    let keywordinpute = keywordinput.value;
    if (keywordinpute ==="df"){
        let rv="";
        return rv;
    }else if(/\s/g.test(keywordinput)===true){
        let tname=keywordinpute.split(" ");
        if(tname.length===1){
            return keywordinpute.replace(/\s/g, ""); 
        }else if(tname.length===2){
            let tvalue =tname[0]+"+"+tname[1];
            return tvalue;

        }else if(tname.length===3){
            let tvalue =tname[0]+"+"+tname[1]+"+"+tname[2];
            return tvalue;

        }else if(tname.length===4){
            let tvalue =tname[0]+"+"+tname[1]+"+"+tname[2]+"+"+tname[3];
            return tvalue;

        }else if(tname.length===5){
            let tvalue =tname[0]+"+"+tname[1]+"+"+tname[2]+"+"+tname[3]+"+"+tname[4];
            return tvalue;

        }else{
            return keywordinpute.replace(/\s/g, "");  
        }


    }else{
        return keywordinpute.replace(/\s/g, "");
    }   

}

let selectfacilityf = () =>{
    let selectfacilitye = selectfacility.value.replace(/\s/g, "");

    if (selectfacilitye === ""){
        let rv ="";
        return rv;
    }else if(selectfacilitye === "df"){
        let rv= "";
        return rv;
    }else if(selectfacilitye == "RockinghamVNA&Hospice"){
        let rv= "ROCKINGHAMVNA26HOSPICE";
        return rv;
    }else{
        return selectfacilitye;
    }
    
}
 
let selectcategoryf = () =>{
    let selectcategorye = selectcategory.value.replace(/\s/g, "");
    if(selectcategorye === "df"){
        let rv ="";
        return rv;
    } else if(selectcategorye === "Administrative/MA"){
        let rv ="ADMINISTRATIVE2FMA";
        return rv;
    } else if( selectcategorye === "NP/PA/Physician/Dentists"){
        let rv = "NP2FPA2FPHYSICIANS2FDENTISTS";
        return rv;
    }else if(selectcategorye === "Services/Maintenance/Trades"){
         let rv ="SERVICES2FMAINTENANCE2FTRADES";
         return rv;
    } else if(selectcategorye === "InformationServices/Technical"){
        let rv = "INFORMATIONSERVICES2FTECHNICAL";
        return rv;

    } else{
        return selectcategorye;
    }
}

let selectlocotionf = () =>{
    let selectlocotione = selectlocotion.value.replace(/\s/g, "");

    if(selectlocotione === "df"){
        let rv = "";
        return rv;
    }else{
        return selectlocotione;
    }
}

let disapper =() =>{
    searchsection.style.display="none";
    

}
let appear = () => {
    
    setTimeout(()=>{
        let clis = document.getElementsByClassName("byte");
        clis[0].classList.remove("newclas"); 

        value=0;
        searchj.style.display="none";
        searchsection.style.display="flex";

    },1000);
   
   

}


let appeard= ()=>{
    setTimeout(()=>{
     
        searchsection.style.display="flex";

    },1000);


}



let filebutton =() =>{
    let fbutton =document.getElementById("files").click();
    fibutton.style.border = "1px solid #F8A12E";
    small.style.color="#717375";
    small.innerHTML="";
    p3.style.color="#717375";

}

let calls = () =>{
    document.getElementById("call").click();
}



document.getElementById("form2").addEventListener('submit', (e) =>{
    e.preventDefault();
  let noerr="";

  let yes = ()=>{
    let val= "yes";
    noerr = val;
  }

  let no = ()=>{
    let val= "no";
    noerr = val;
  }



  let firstm;
  let secmin;
    let email= document.getElementById("email");
    let subject = document.getElementById("subj");
    let message = document.getElementById("txa");
    let whatlook = document.getElementById("what");
    let file = document.getElementById("files");

    let emailValue= email.value;
    let subjectValue = subject.value;
    let messageValue = message.value;
    let whatlookValue = whatlook.value;
    let fileValue = file.files[0];

    const fileFormat =[".jpg",".txt",".doc",".docx",".pdf",
                        ".jpeg",".ppt",".pptx",".gif",".png",".xls",
                         ".xlsx",".wpd",".rtf",".odt"];
   //format validatin  start
     let checkFormat = () =>{
             let vtest = fileValue.name.split(".");
            let extension ="." +vtest[vtest.length-1];
                        
            for( let i =0; i< fileFormat.length; i++){
                 if(fileFormat[i].toLowerCase() === extension || fileFormat[i].toUpperCase() === extension){
                    val = "yes";
                    return val;
            }else{
                        
           }
                        
      }
  }
//format validation ends

     // file validation start                    
    if(file.value === ""){

       no();
        firstm= 1000;
        secmin = 2000;

        const formdata = new FormData();
        formdata.append("email", emailValue);
        formdata.append("subject", subjectValue);
        formdata.append("message", messageValue);
        formdata.append("whatlook", whatlookValue);
        formdata.append("file", fileValue);
       
       
        const options ={

            method: 'POST',
       
            body: formdata,
           
        };
       // https://1ed2-105-231-144-76.ngrok.io/api'
        
        let f= fetch('https://nervous-jungle-cream.glitch.me/api',options).catch(err =>{
          
    
    });
    
f.then(res => res.json()).then(d =>{
    console.log(d);
    fucall();
   
  

}).catch(err =>{
   
    console.log(yes());
       if(err){
     // yes();
    //  alert("Not sent.........the server is down!");
      
       }else{
     fucall();
       }
});
    
     }else   if(fileValue.size > 15728640){
        p3.style.color="red";
        fibutton.style.border="3px solid red";
       

    

     }else if(checkFormat() === "yes"){
       no();
        firstm= 4000;
        secmin = 5000;

        let vtest = fileValue.name.split(".");
        let extension =vtest[vtest.length-1];

        const formdata = new FormData();
        formdata.append("email", emailValue);
        formdata.append("subject", subjectValue);
        formdata.append("message", messageValue);
        formdata.append("whatlook", whatlookValue);
        formdata.append("file", fileValue);
        formdata.append("ext",extension);
       
        const options ={

            method: 'POST',
       
            body: formdata,
           
        }
        
        let f= fetch('https://nervous-jungle-cream.glitch.me/api',options).then(()=>{
            fucall();

        }).catch(err =>{
          
    
    });
    
f.then(res => res.json()).then(d =>{
    console.log(d);
    
  

}).catch(err =>{
       if(err){
      
    
      //  alert("Not sent.........the server is down!");
       
        
        
       }else{
        fucall();
       }
});
    
     }else{
        small.innerHTML ="Unsupported file type...";
        small.style.color="red";
    
     }
     
    
    

//file validation ends
//console.log(noerr);




if (noerr === "no"){
    small.innerHTML="Sending........";
    setTimeout(()=>{
        small.innerHTML="Sent.";
    },firstm);

    setTimeout(()=>{
        small.innerHTML="";

    },secmin);
    
  
}



document.getElementById("form2").reset();
});

 


