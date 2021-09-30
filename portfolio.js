function myfunction(){
    let name=document.getElementsByClassName("textname").value;
    let mail=document.getElementsByClassName("email").value;
    let sbj=document.getElementsByClassName("subject").value;
    let msg=document.getElementsByClassName("message").value;
    document.getElementsByClassName('1name').innerHTML=`${name}`;
    document.getElementsByClassName('1email').innerHTML=`${mail}`;
    document.getElementsByClassName('1subject').innerHTML=`${sbj}`;
    document.getElementsByClassName('1message').innerHTML=`${msg}`;
}