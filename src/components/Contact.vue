<template>
    <div>

        <div id="contact">

        <div class="hungry-3">
            <div id="text-1">
            
                <div> 
                    <h3>Contact Us</h3>
                </div>
                  <div> 
                    <h1>WE'RE HERE FOR YOU</h1>
                    <div id="lin-1"></div>      
                </div>

                <div>
                    <p>Feed My Hungry Children helps to stand in the gap to provide the things that needy, hurting people may need to survive and become self-sufficient. Feed My Hungry Children’s humanitarian projects are committed to helping children and their families around the world.”</p>
                </div>
            </div>

         <div id="img-6">
                <img src="@/assets/image12.jpg" alt="image"/>
            </div>
        
       
        </div>


    <div class="hung-1">

        <div class="team-1">
            <div id="team-4">
                <h2>OUR TEAM IS READY</h2>
                <div id="team-3">
                <h2>TO HELP</h2>
            </div>
            </div>

            <div id="lin-2"></div>

            <p>FEED MY HUNGRY PEOPLE</p>
            <p>1265 Enright Way Northwest</p>
            <p>Edmonton, Alberta. T6M0Z9</p>
            <p>Email: feed@gmail.org</p>
            <p>Phone: 780-654-456</p>
        </div>


        <div id="team-2">
              
           <div id="lin-input">
             <input v-model="first_name" placeholder="First Name"/>
            <div id="lin-3"></div>
           </div> 

             

           <div>
           <input v-model="email" placeholder="Email Address" />
            <div id="lin-3"></div>
            </div> 

              
           <div>
            <input v-model="general_inquiry" placeholder="General Inquiry">
             <div id="lin-3"></div>
            </div>

              
           <div>
            <textarea v-model="message" placeholder="Message"></textarea>
            <div id="lin-3"></div>
           </div>


           <button @click="submit">SUBMIT</button>      

        </div>
     
    </div>

    </div>

    </div>
</template>

<script>
 import axios from 'axios';
import cookies from 'vue-cookies';
    export default {
        name: 'contact-vue',

        data() {
            return {
                token: '',
                first_name: '',
                email: '',
                general_inquiry: '',
                message: ''
            }
        },

         methods: {
            submit() {
               axios.request({
                  method: "POST",
                  url: ' http://127.0.0.1:5000/api/contact',

                  data:{
                    first_name: this.first_name,
                    email: this.email,
                    general_inquiry: this.general_inquiry,
                    message: this.message
                  }
               })
               .then(this.success)
               .catch(this.failure)
                
            },

            success: function(response){
                console.log(response)
                if(response.status ===200){
                    this.token = response.data
                    cookies.set("TOKEN", this.token)
                }
            },

            failure: function(error){
                console.log(error)
                 
            }
         },

    }
        
    
</script>

<style  scoped>

#contact{
    padding: 0;
    margin: 0;
    overflow-x: hidden;
}



img{
    width: 400px;
    height: 350px;
    margin-top: 15px;
}


 .hungry-3{
    box-sizing: border-box;
    background-color: rgba(128, 128, 128, 0.241);  
    font-family: sans-serif;
    padding-bottom: 25px;
    padding-top: 22px;
 }


 #text-1 h3{
 padding-bottom: 15px;
 box-sizing: border-box;
 font-size: 20px;
 font-weight: 300;
 font-family: Arial;

 }


 #text-1 h1{
    padding-left: 10px;
    padding-right: 10px;
    font-size: 25px;
    padding-bottom: 15px;
 }

  #text-1 p{
    width: 90%;
    padding-left: 15px;
    margin-bottom: 15px;
  }


  .hung-1{
    box-sizing: border-box;
    background-color: rgba(0, 0, 139, 0.536);
    padding-top: 95px;
    padding-bottom: 150px;
    
  }


  .team-1{
    padding-bottom: 20px;
    
  }

  #team-2{
    padding-bottom: 15px;
  }


  .team-1 p{
    padding-bottom: 8px;
  }



  input{
    margin-bottom: 25px;
    padding: 14px 120px 14px 15px;
    border: none;
 
}

input::placeholder{
    font-size: 14px;
}


textarea{
    padding: 20px 130px 35px 15px;
    border: none;
}



textarea::placeholder{
    font-size: 15px;
}


#team-3{
    line-height: 6px;
    padding-bottom: 10px;
}



button{
    margin-top: 20px;
    padding: 12px 20px;
    background-color: #fff;
    border: none;
    transition: 0.3s;
    font-weight: 600;
    letter-spacing: 1px;
    color: rgba(128, 128, 128, 0.89);  
}

button:hover{
    cursor: pointer;
}




@media only screen and (min-width: 768px){

   img{
    width: 780px;
    height: 700px;
    margin-top: 15px;
}


}






@media only screen and (min-width: 992px){
    

    
img{
    width: 650px;  
   box-shadow: 0px 0px 10px 2px rgba(128, 128, 128, 0.241);
   height: 850px;


 
}


.hungry-3{
    box-sizing: border-box;
    display: flex;
    background-color: rgba(128, 128, 128, 0.241);  
    font-family: sans-serif;
    
}




#text-1 h3{
     
 padding-right: 630px;
 box-sizing: border-box;
 font-size: 30px;
 font-weight: 300;
 font-family: Arial;
}

#text-1 h1{

 
   float: left;
   padding-left: 50px;
}

#lin-1{
    width: 30%;
    border: 1px solid gray;

}


#text-1{
    padding-top: 300px;
    box-sizing: border-box;
}

#text-1 p{
    width: 65%;
}


.hungry-3 p{
    text-align: center;
    width: 65%;
    padding-left: 30px;
     float: left;
    
}

.hung-1{
    box-sizing: border-box;
    display: flex;
    justify-items: center;
    align-items: center;
    background-color: rgba(0, 0, 139, 0.536);
    
    padding-top: 95px;
    padding-bottom: 150px;
   
}

.team-1 p{
 padding-top: 10px;
 font-weight: 900px;
 color: #fff;
 font-size: 20px;
 width: 85%;
}

#team-2 h2{
  color: #fff;
  font-size: 35px;
  
}




#team-2{
    line-height: 15px;
    box-sizing: border-box;
    padding-left: 130px;
    padding-top: 130px;
    
}


.team-1{
    padding-left: 250px;
}

#team-3 h2{
 box-sizing: border-box;
  color: #fff;
  font-size: 35px;
 margin-right: 190px;

}

#lin-2{
    width: 100px;
    border: 1px solid darkgray;
    margin-left: 20px;
}



#team-2 img{
    width: 15px;
}

input{
    margin-bottom: 25px;
    padding: 14px 180px 14px 15px;
    border: none;
 
}

input::placeholder{
    font-size: 14px;
}

#lin-3{
    width: 360px;
    border: 1px solid darkgray;
    margin-left: 3px;
    
  
}


textarea{
    padding: 20px 190px 35px 15px;
    border: none;
}



textarea::placeholder{
    font-size: 15px;
}



button{
    margin-top: 20px;
    padding: 12px 20px;
    background-color: #fff;
    border: none;
    transition: 0.3s;
    font-weight: 600;
    letter-spacing: 1px;
    color: rgba(128, 128, 128, 0.89);  
}

button:hover{
    cursor: pointer;
}



#team-4 h2{
    box-sizing: border-box;
    color: #fff;
  font-size: 35px;
  
  line-height: 16px;
  
}

    
   



}


  
</style>