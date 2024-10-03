<template>
    <div id="login-1">

        <h2>Login as Existing Member</h2>

      <div id="userlogin">

         <div class="email">
            <input v-model="email" placeholder="Email"/>
         </div>
         <div class="pass">
            <input v-model="password" placeholder="Password"/>
         </div>

        <div id="buton">

            <button @click="userLogin">LOGIN</button>

        </div>
         

         <div class="router-1">
            <router-link to="signup" class="rout">
                    <p>Create a new account</p>
            </router-link>

            <div id="line">|</div>
              
             <router-link to="password" class="rout">
                    <p>Forgot Password</p>
            </router-link>
         </div>

      </div>

    </div>
</template>

<script>
import axios from "axios";
import cookies from "vue-cookies";

    export default {
        name: 'log-in',
        components: {

        },

        data() {
            return {
                token: '',
                userid: '',
                email: '',
                password: ''
            }
        },

        methods: {
            userLogin() {
                axios.request({
                    method: 'POST',
                    url: ' http://127.0.0.1:5000/api/userLogin',

                    data: {
                       email: this.email,
                       password: this.password 
                    },

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
                alert('Please, sign up if have not done so.')
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
}

#buton button{

    border: none;
    border-radius: 5px;
    cursor: pointer;
 
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
    gap: 10px;
    text-align: center;
    justify-items: center;
    margin-left: 15px;
    padding-top: 25px;

}


#login-1{
    padding-bottom: 60px;
}


#line{
    padding-top: 15px;
}

h2{
    font-family: sans-serif;
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




}
 


 @media only screen and (min-width: 992px){


.router-1{
   margin-left: 260px;

}

input{
    padding-right: 120px;
    padding-top: 20px;
    padding-bottom: 20px;
}


 }


 @media only screen and (min-width: 1280px){


  #userlogin{

    margin-left: 25%;
    margin-right: 25%;
  }


 .router-1{
    margin-right: 15%;
 }


 }
</style>