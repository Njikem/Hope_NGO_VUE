<template>
    <div id="user-1">
         <h2>Sign Up Here</h2>


    <div id="userSignUp">

         <div>
            <input v-model="first_name" placeholder="First_Name"/>
         </div>
         <div>
            <input v-model="last_name" placeholder="Last_Name"/>
         </div>
         <div>
            <input v-model="email" placeholder="Email"/>
         </div>
         <div>
            <input v-model="password" placeholder="Password"/>
         </div>
          <div>
            <input v-model="phone_number" placeholder="Phone_Number"/>
         </div>
          
          <div id="buton">
              <button @click="userSignUp">SigUp</button>
          </div>

          <div class="router-1">
           <diV><p>or</p></diV> 
           <div id="log">
               <router-link to="login" class="rout">
                <p>Login as Existing Member</p>
               </router-link>
           </div>

          </div>
    
        </div>

    </div>
</template>

<script>

import axios from "axios";
import cookies from "vue-cookies";
    export default {
        name: 'user-signup',
        components: {
            
        },

        data() {
            return {
                token: '',
                userid: '',
                first_name: '',
                last_name: '',
                email: '',
                password:'',
                phone_number: ''
            }
        },

        methods: {
            userSignUp() {
                console.log("SIGNUP", this.first_name, this.last_name, this.email, this.password, this.phone_number),
                axios.request({
                    method: 'POST',
                    url: ' http://127.0.0.1:5000/api/user',

                    data: {
                        first_name: this.first_name,
                        last_name: this.last_name,
                        email: this.email,
                        password: this.password,
                        phone_number: this.phone_number
                    }
                })
                .then(this.success)
                .catch(this.failure)
            },

            success: function(response){
                console.log(response)
                if(response.status ===200){
                    this.token = response.data.token
                    this.userid = response.data.user_id
                    cookies.set('TOKEN', this.token)
                    cookies.set('USERID', this.userid)

                }
            },

            failure: function(error){
                console.log(error)
                alert('You missed something, try again!')
            }
        },

       

    }
</script>

<style  scoped>


#userlogin{
    box-sizing: border-box;
    border: none;
    background-color: #fff;
    margin-top:45px ;
   
}


#user-1{
    padding-bottom: 60px;
}

input{
    margin: 10px;
    padding: 10px 26px ;
    border-radius: 6px;
    border: 1px solid gray;
}

button{
    padding: 10px 20px;
    color: #fff;
    letter-spacing: .5px;
    font-weight: 300;
    background-color: limegreen;
    cursor: pointer;
}

#buton button{

    border: none;
    border-radius: 5px;
 
}

#buton{
    padding-top: 15px;
}


.rout{
    text-decoration: none;
    color: red;
    letter-spacing: .2px;


}

.router-1{
    box-sizing: border-box;
    display: flex;
    text-align: center;
    margin-left: 55px;
    padding-top: 25px;
   
}

#line{
    padding-top: 15px;
}

h2{
    font-family: sans-serif;
}

#log{
    padding-left: 5px;
}


@media only screen and (min-width: 768px){

.router-1{
   margin-left: 190px;

}


#login-1{
    box-sizing: border-box;
    padding-top: 80px;
}

#userlogin{

    box-shadow: 30px 30px 50px 0px  gray;
    padding-top: 80px;
    padding-bottom: 80px;
    margin-left: 50px;
    margin-right: 50px;
    
}

#userSignUp{

     box-shadow: 30px 30px 50px 0px  gray;
    padding-top: 80px;
    padding-bottom: 80px;
    margin-left: 50px;
    margin-right: 50px;

}


input{
    padding-right: 80px;
    padding-top: 17px;
    padding-bottom: 17px;
}



}
 


 @media only screen and (min-width: 992px){


.router-1{
   margin-left: 300px;

}

input{
    padding-right: 120px;
    padding-top: 20px;
    padding-bottom: 20px;
}


#userSignUp{
    
 margin-left: 50px;
 margin-right: 50px;

 }

 }



 @media only screen and (min-width: 1280px){


  #userSignUp{

    margin-left: 30%;
    margin-right: 30%;
  }


 .router-1{
    margin-left: 30%;
    margin-right: 30%;
 }


 }


</style>