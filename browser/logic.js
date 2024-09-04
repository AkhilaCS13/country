
class Landing{
    //property
    DATABASE={
        "millan":{username:"millan",password:"mil123"},
        "Anu":{username:"Anu",password:"anu123"},
        "Anjali":{username:"Anjali",password:"anj123"},
        "Akhila":{username:"Akhila",password:"akh123"}
    }
    //method -to store data in local storage.
    save(){
        if(this.DATABASE){
            localStorage.setItem("database",JSON.stringify(this.DATABASE))
        }
    }

    getData(){
        this.DATABASE= JSON.parse(localStorage.getItem("database"))
        
    }
    register(){
        console.log(regusr.value);
        console.log(regpwd.value);
        if(regusr.value=="" || regpwd.value==""){
            alert('please fill the form completely')
        }
        else{
           if (regusr.value in this.DATABASE) {
            alert('User already exist')
           }
           else{
            this.DATABASE[regusr.value]={username:regusr.value,password:regpwd.value}
          
            console.log(this.DATABASE);
            alert('Registration successful')
            this.save()
            //js navigation
            window.location="login.html"
        }
        }  
        
    }
    login(){
        console.log('inside login');
        console.log(logusr.value);
        console.log(logpwd.value);
        this.getData()
        if(logusr.value=="" || logpwd.value==""){
            alert("please fill the form completely'")
        }
        else{
            this.getData()
            if(logusr.value in this.DATABASE){
                if(this.DATABASE[logusr.value].password==logpwd.value){
                    localStorage.setItem("user",logusr.value)
                    alert('Login successful')
                    window.location = "home.html"
                }
                else{
                    alert('invalid user or password')
                }
            }
            else{
                alert('User doesnot exist')
            }
        }
       
        
        
    }

}

const obj =  new Landing()

obj.getData()