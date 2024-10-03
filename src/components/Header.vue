
<template>
    <div>

        <div id='header'>

        <div id="logo">
           <div class="log">
             <img src="@/assets/logo.png" alt="logo"/>
           </div>

           <div class="feed">
             <h6>FEED MY HUNGRY</h6>
             <h4>PEOPLE</h4>
           </div>
        </div>

    
      
      <div class="drop-down">

        <ul class="drop-1">
            <li>
                <router-link to="#" class="router-link">
                    <h4>WHO ARE WE <img src="@/assets/downward-arrow.png" alt="image" id="image"/></h4>
                </router-link>
                <div class="drop-2">
                    <ul id="ul-1">
                        <li>
                            <router-link to="#" class="link-2">
                                <h4>About Us</h4>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="#"  class="link-2">
                                <h4>Our Mission</h4>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="#"  class="link-2">
                                <h4>Our Financials</h4>
                            </router-link>
                        </li>
                    </ul>

                </div>
            </li>


            <li>
                <router-link to="#" class="router-link">
                    <h4>WHAT WE DO <img src="@/assets/downward-arrow.png" alt="image"/></h4>
                </router-link>

                 <div class="drop-2">
                    <ul id="ul-1">
                        <li>
                            <router-link to="#" class="link-2">
                                <h4>How It Works</h4>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="#"  class="link-2">
                                <h4>How You Can Help</h4>
                            </router-link>
                        </li>
                    </ul>

                </div>

            </li>


            <li>
                <router-link to="#" class="router-link">
                    <h4>WAYS TO GIVE <img src="@/assets/downward-arrow.png" alt="image"/></h4>
                </router-link>

                 <div class="drop-2">
                    <ul id="ul-1">
                        <li>
                            <router-link to="donate" class="link-2">
                                <h4>Make A Donation</h4>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="donate"  class="link-2">
                                <h4>Donate Crypto</h4>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="donate"  class="link-2">
                                <h4>Start A Fundraiser</h4>
                            </router-link>
                        </li>
                           <li>
                            <router-link to="#"  class="link-2">
                                <h4>Volunteer</h4>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="#"  class="link-2">
                                <h4>Ways To get Involved</h4>
                            </router-link>
                        </li>

                    </ul>

                </div>
            </li>


            <li>
                <router-link to="contact" class="router-link">
                    <h4>CONTACT</h4>
                </router-link>
            </li>
        </ul>

      </div>




     <div class="login">
        <div id="log-rout">
            <router-link to="login" class="router">
                <h4>LOG IN</h4>
            </router-link>
        </div>

        <div id="buton">
        <router-link to="donate" class="router">
            <button>DONATE</button>
         </router-link>
        </div>

     </div>


 
 <nav class="menu-dropdown">  
        <div id="img-menu">
            <img src="@/assets/menu-svgrepo-com.svg" alt="menu-image"/>
        </div>

        <ul>
            <li>
                <router-link to="#" class="router-link">
                    <h4>WHO ARE WE <img src="@/assets/downward-arrow.png" alt="image" id="image"/></h4>
                </router-link>
                <div class="submenu-dropdown">
                    <ul>
                        <li>
                            <router-link to="#" class="menu-link-2">
                                <h4>About Us</h4>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="#"  class="menu-link-2">
                                <h4>Our Mission</h4>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="#"  class="menu-link-2">
                                <h4>Our Financials</h4>
                            </router-link>
                        </li>
                    </ul>

                </div>
            </li>


            <li>
                <router-link to="#" class="router-link">
                    <h4>WHAT WE DO <img src="@/assets/downward-arrow.png" alt="image"/></h4>
                </router-link>

                 <div class="submenu-dropdown">
                    <ul>
                        <li>
                            <router-link to="#" class="menu-link-2">
                                <h4>How It Works</h4>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="#"  class="menu-link-2">
                                <h4>How You Can Help</h4>
                            </router-link>
                        </li>
                    </ul>

                </div>

            </li>


            <li>
                <router-link to="#" class="router-link">
                    <h4>WAYS TO GIVE <img src="@/assets/downward-arrow.png" alt="image"/></h4>
                </router-link>

                 <div class="submenu-dropdown">
                    <ul>
                        <li>
                            <router-link to="donate" class="menu-link-2">
                                <h4>Make A Donation</h4>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="donate"  class="menu-link-2">
                                <h4>Donate Crypto</h4>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="donate"  class="menu-link-2">
                                <h4>Start A Fundraiser</h4>
                            </router-link>
                        </li>
                           <li>
                            <router-link to="#"  class="menu-link-2">
                                <h4>Volunteer</h4>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="#"  class="menu-link-2">
                                <h4>Ways To get Involved</h4>
                            </router-link>
                        </li>

                    </ul>

                </div>
            </li>


            <li>
                <router-link to="contact" class="router-link">
                    <h4>CONTACT</h4>
                </router-link>
            </li>
        </ul>

    </nav> 
  

  
 
      

</div>
  

    </div>
</template>

<script>
    export default {
        
        name: 'header-vue',
    }
</script>

<style scoped>



*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  overflow-x: hidden;

}


#header {
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 25px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #f8f9fa;
}

.log img {
  width: 50px;
}

#logo{
    display: flex;
    align-items: center;
    gap: 20px;
}




.feed h6 {
  font-size: 12px;
  letter-spacing: 2px;
  color: rgba(0, 0, 0, 0.6);
}

.feed h4 {
  font-size: 18px;
  color: rgba(0, 0, 0, 0.9);
}




.drop-down{
    display: none;
}


.login{
    display: none;
}



.menu-dropdown img{
    width: 19px;
   
   
}


.menu-dropdown .router-link{
    text-decoration: none;
}

.menu-link-2{
     text-decoration: none;
}

.menu-dropdown ul{
    background-color: red;/*come back and give it white color*/
    width: 100%;
    height: 60%;

   
}

.menu-dropdown ul li .router-link{
    font-family: arial;
    color:  #222;
    font-size: 15px;
    line-height: 25px;
}

.menu-dropdown  ul{
  display: none;

}


.menu-dropdown #img-menu img:hover ul{
    display: block;
}



@media only screen and (min-width: 992px){

   .menu-dropdown{
    display: none
   }


   .drop-down{
    display: block;
    text-decoration: none;
}


.login{
    display: block;
    display: flex;
     gap: 25px;
     
}


.drop-down img{
    width: 15px;
    
}


.drop-1{
    display: flex;
    gap: 30px;
}


button{
    padding: 12px 18px;
    border-radius: 20px;
    background-color: orange;
    color: white;
    font-weight: 700;
    letter-spacing: 1px;
    border: none;

}

button:hover{
    background-color: rgba(255, 166, 0, 0.538);
}


.router{
    text-decoration: none;
    color: rgba(0, 0, 0, 0.6);
}

#log-rout{
    padding-top: 15px;
}

.router-link{
    text-decoration: none;
    color: rgba(0, 0, 0, 0.6);

}


.link-2{
    text-decoration: none;
    color: rgba(0, 0, 0, 0.6);
  
}




/* Dropdown menu for larger screens */

  .drop-down {
    display: flex;
    gap: 40px;
  }

  .drop-1 {
    flex-direction: row; /* Horizontal menu for larger screens */
    align-items: center;
  }

  .drop-2 {
    position: absolute;
    background-color: #f9f9f9;
    display: none;
    padding: 10px 18px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  /* Show dropdown on hover */
  .drop-1 li:hover .drop-2 {
    display: block; /* Show the submenu when hovered */
  }

  .submenu {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .submenu li {
    padding: 8px 16px;
  }

  .submenu li:hover {
    background-color: #f1f1f1;
  }

  .link-2 {
    text-decoration: none;
    color: black;
  }




.drop-2 ul li{
    padding-top: 10px;
    margin-left: 5px;
    font-weight: 300;
    
}

.link-2:hover{
    padding: 10px 30px;
}


.drop-2 ul li:hover{
    background-color: rgba(128, 128, 128, 0.14);
  
}









}


</style>