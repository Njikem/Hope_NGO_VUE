<template>


<div id="donate-6">
          
    <div class="give-1">
        <div id="giv-2">
            <img src="@/assets/image2.jpg" alt="image"/>
        </div>

        <div class="fed-2">
            <div id="logo-3">
                <div class="log">
                    <img src="@/assets/logo.png" alt="logo"/>
                </div>

                <div class="feed">
                    <h6>FEED MY HUNGRY</h6>
                    <h4>PEOPLE</h4>
                </div>
            </div>

                <div id="don-3">
                    <h2> You Will Make Different</h2>
                    <div>
                        <p>Make the world better, kinder, brighter. Every dollar you give will create real change. 
                            $1 will feed 5 hungry children here in the US, but $1,000 will feed 50,000 starving children overseas. 
                            Be the good in the lives of many by giving right now. AMERICA FEEDING PROGRAMS. Our meal cost is 
                            20 cents per meal 
                            $25 feeds 125 children 
                            $50 feeds 80 families
                        </p>
                    </div>
                </div>

        </div>       
    </div>

    <div id="line-5"></div>


    <div id="month-1">

        <h3>Secure Donation</h3>

            <div class="month-2">

                <div>
                    <button>Give Once</button>  
                </div>
                <div>
                    <button>Monthly</button>  
                </div>
            </div>

        <div id="input-5">

            <div class="input-1">
                <div>
                    <input v-model="amount" placeholder="$300">
                </div>
                 <div>
                    <input v-model="amount" placeholder="$130">
                </div>
                <div>
                    <input v-model="amount" placeholder="$300">
                </div>

           </div>


            <div id="input-2">
                <div>
                    <input v-model="amount" placeholder="$1600">
                </div>
                 <div>
                    <input v-model="amount" placeholder="$2500">
                </div>
                <div>
                    <input v-model="amount" placeholder="$3000">
                </div>
           </div>

        </div>

        <div>
            <input v-model="canadian" placeholder="CAD"/>
         </div>

      <div class="link-5">
        <router-link to="#" class="arrow-5">
                    <h5>Designated to where it is needed most <img src="@/assets/arrow.png" alt="image" id="image"/></h5>
        </router-link>

        <router-link to="#" class="arrow-6">
                    <h5>Add Comment</h5>
        </router-link>
      </div>

      <div id="don-4">
           <button>Donate</button>
      </div>

    </div>

</div>


</template>

<script>
    export default {
        name: 'donate-vue',
        
    }
</script>

<style  scoped>

*{
    padding: 0;
    margin: 0;
    font-family: sans-serif;
    overflow-x: hidden;
}

#giv-2 img{
    width: 450px;
    height: 400px;

}


#logo-3 img{
    width: 45px;
    height: 45px;
}

.arrow-5 img{
    width: 10px;
}

#donate-6{
    box-sizing: border-box;
}

#logo-3{
    display: flex;
    padding-top: 30px;
    margin-left: 100px;
    padding-bottom: 30px;
    gap: 11px;
}


.feed{
    padding-top: 20px;
}


#don-3 h2{
    padding-bottom: 18px;
    text-align: center;
    padding-left: 20px;
}



#don-3 p{
    text-align: center;
    padding-left: 10px;
    margin-bottom: 20px;
    font-family: sans-serif;
    letter-spacing: .5px;
    font-size: 13px;
}


#month-1 h3{
    padding-bottom: 30px;
    font-size: 25px;
    padding-top: 30px;
}


#line-5{
    width: 120%;
    border: .5px solid gray;
}


.month-2 {
    display: flex;
    box-sizing: border-box;
    padding-bottom: 30px;
    padding-left: 70px;
    gap: 15px;
}


.month-2 button{
    padding: 10px 20px;
    background-color: #fff;
    border: 1px solid gray;
    font-weight: 500;
    letter-spacing: 1px;
    font-size: 13px;
    border-radius: 10px;
}


input{
    padding: 12px 26px;
    margin-bottom: 15px;
    
}


.link-5{
    padding-bottom: 30px;
}

.arrow-5{
    margin-bottom: 10px;
    text-decoration: none;
}


.arrow-6{
    text-decoration: none;
    padding-top: 10px;
}


#don-4{
    padding-bottom: 15px;
}


#don-4 button{
    padding: 13px 25px;
    background-color: orange;
    border: none;
    color: #fff;
    font-weight: 600;
    letter-spacing: 1px;
    border-radius: 10px;

}


@media only screen and (min-width: 768px){
    
    #logo-3{
    display: flex;
    padding-top: 30px;
    margin-left: 300px;
    padding-bottom: 30px;
    gap: 11px;
}

#giv-2 img{
    width: 600px;
    height: 550px;
}



#don-3 p{
    width: 80%;
    padding-left: 50px;
}



.month-2 {
    padding-left: 280px;
    
}


input{
     padding: 16px 90px 16px 15px;
}



.input-1{
    padding-top: 30px;
     margin-bottom: 20px;
}


}



@media only screen and (min-width: 992px){



.give-1{
    display: flex;
   
}


#line-5{
    display: none;
}


#giv-2 img{
    width: 1900px;
    height: 650px;
    margin-left: 60px;
}



.fed-2{
    padding-top: 90px;
}


#input-5{
    display: flex;
    padding-left: 500px;

}


#month-1{
    padding-top: 60px;
}

input{
    gap: 50px;
}


#input-2{
   padding-left: 25px;
   padding-top: 30px;
}


.month-2 {
    padding-left: 650px;
    
}


#don-4{
    padding-bottom: 25px;
}



}


</style>