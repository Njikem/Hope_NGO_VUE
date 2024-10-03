<template>
    <div id="footer">

    <div class="footer-1">
        <div id="logo-1">
           <div class="log-1">
             <img src="@/assets/logo.png" alt="logo"/>
           </div>

           <div class="feed">
             <h4>FEED MY HUNGRY</h4>
             <h2>PEOPLE</h2>
           </div>
        </div>

        <div class="about">
            <h3>About Us</h3>
            <div>
                <router-link to="about" id="rout-2">
                    <P>About</P>
                </router-link>
            </div>
            <div>
                <router-link to="mission" id="rout-2">
                    <P>Our Mission</P>
                </router-link>
            </div>

            <div>
                <router-link to="leaders" id="rout-2">
                    <P>Our Leadership</P>
                </router-link>
            </div>

            <div>
                <router-link to="volunteer" id="rout-2">
                    <P>Volunteering</P>
                </router-link>
            </div>

            <div>
                <router-link to="finacing" id="rout-2">
                    <P>Financing</P>
                </router-link>
            </div>

            <div>
                <router-link to="faq" id="rout-2">
                    <P>FAQs</P>
                </router-link>
            </div>
        </div>

        <div id="ways">
            <h3>Ways To Give</h3>

            <div>
                <router-link to="donate" id="rout-2">
                    <P>One-time Donations</P>
                </router-link>
            </div>

            <div>
                <router-link to="donate" id="rout-2">
                    <P>Give Monthly</P>
                </router-link>
            </div>

            <div>
                <router-link to="donate" id="rout-2">
                    <P>Fundraising</P>
                </router-link>
            </div>

            <div>
                <router-link to="donate" id="rout-2">
                    <P>Honor & Memorial</P>
                </router-link>
            </div>

             <div>
                <router-link to="donate" id="rout-2">
                    <P>Giving Catalog</P>
                </router-link>
            </div>

             <div>
                <router-link to="donate" id="rout-2">
                    <P>Give by Mail or Phone</P>
                </router-link>
            </div>

             <div>
                <router-link to="donate" id="rout-2">
                    <P>Workplace Giving</P>
                </router-link>
            </div>

             <div>
                <router-link to="donate" id="rout-2">
                    <P>Corporate Parntnerships</P>
                </router-link>
            </div>
            
        </div>

        <div id="give">
            <div>
                <h3>PROGRAMS TO GIVE TO</h3>
            </div>

            <div>
                <router-link to="donate" id="rout-2">
                    <P>Giving Tuesday</P>
                </router-link>
            </div>

            <div>
                <router-link to="donate" id="rout-2">
                    <P>Help Hungry Children in The Philippines</P>
                </router-link>
            </div>

            <div>
                <router-link to="donate" id="rout-2">
                    <P>Support Frontline Businesses during COVID-19</P>
                </router-link>
            </div>

             <div>
                <router-link to="signup" id="rout-2">
                    <P>SignUp</P>
                </router-link>
            </div>

        </div>

    </div>

 

    <div id="line"></div>

       <div class="line-1"> 

          <div class="line-2">
             <router-link  to="Privacy"   id="privacy-1">
                <p>Privacy Policy</p>
             </router-link> 

             <div id="link-1">
            <h3>|</h3>
            </div>    
          </div>

           <div class="line-2">
             <router-link to="policy" id="privacy-1">
                <p>Donor Policy</p>
             </router-link>
               <div id="link-1"> <h3>|</h3></div> 
          </div>

            
             
           <div class="line-2">
             <router-link  to="contact" id="privacy-1">
                <p>Contact Us</p>
             </router-link>
              <div id="link-1"> <h3>|</h3></div> 
          </div>

          

           <div>
             <router-link  to="portal" id="privacy-1">
                <p>Donor Support Portal</p>
             </router-link>
          </div>
       </div>

       <div id="copy">
        <p>Copyright &copy; 2024</p>
       </div>
       
    </div>
</template>

<script> 
    export default {
        name: 'footer-vue',
        components: {

        }
    }
</script>

<style scoped>

*{
    margin: 0;
    padding: 0;
    overflow-x: hidden;
}


#footer{
   background-color: #333333;
   padding-bottom: 50px;
}

 .log-1 img{
    width: 55px;
    height: 55px;
 }

 #logo-1{
    display: flex;
    box-sizing: border-box;
    padding-left: 20px;
    padding-top: 30px;
 }

.footer-1{
    display: flex;
    box-sizing: border-box;
    padding-top: 20px;
    padding-bottom: 20px;
}

#rout-2{
    text-decoration: none;
}

.about{
    display: none;
}

#ways{
    display: none;
}

#give{
    display: none;
}

.feed h4, h2{
color: #fff;
}

.feed{
    padding-top: 20px;

}

#line{  
    width:  500px;
    border: 1.5px solid gray;
}

.line-1{
    box-sizing: border-box;
    padding-top: 20px;
   justify-items: center;
   align-items: center;
   display: grid;
   grid-template-columns: 1fr 1fr;
}

#privacy-1{
    text-decoration: none;
    color: #fff;
}

#privacy-1 p{
    color: #fff;
    padding-top: 8px;
    font-size: 12px;
}

.line-2{
    display: flex;
    gap: 15px;
   margin-top: 8px;
}


#link-1 h3{
    color: gray;
}

#copy{
    padding-top: 38px;
    color: #fff;
    font-size: 11px;
}




@media only screen and (min-width: 768px){

*{
    overflow-x: hidden;
}

.about{
    display: block;
    padding-top: 30px;
}

.about h3{
    color: #fff;
    font-size: 15px;
    padding-bottom: 10px;
    font-family: sans-serif;
}

.about p{
    color: #fff;
    font-size: 13px;
    padding-top: 8px;
    font-family: sans-serif;
}

#ways{
    display: block;
     padding-top: 30px;
}

#ways h3{
    color: #fff;
     font-size: 15px;
    padding-bottom: 10px;
    font-family: sans-serif;
}

#ways p{
    color: #fff;
    font-size: 13px;
    padding-top: 8px;
    font-family: sans-serif;
}

#give{
    display: block;
     padding-top: 30px;
}

#give h3{
    color: #fff;
     font-size: 15px;
    padding-bottom: 10px;
    font-family: sans-serif;
}

#give p{
    color: #fff;
    font-size: 13px;
    padding-top: 8px;
    font-family: sans-serif;
}


.line-1{
    display:  flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

}


#line{  
    width:  800px;
    border: 1.5px solid gray;
    margin-top: 20px;
}


#copy{
    padding-top: 80px;
}


}


@media only screen and (min-width: 992px){


  .footer-1{
    padding-left: 300px;
    gap: 50px;
  }

  #line{ 
    padding-left: 20px; 
    width:  900px;
    border: 1.5px solid gray;
    margin-left: 290px;
}

  

}

</style>