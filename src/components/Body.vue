<template>
<div id="body">
     
    <div id="hunger">

        <div>
            <img src="@/assets/image1.jpg" alt="image"/>
        </div>


    <div class="child">

        <div id="stop">
            <h1>STOP CHILD HUNGER</h1>
        </div>

        <div id="buton">
            <router-link to="donate">
                <button>Donate</button>
            </router-link>
            
        </div>

        <div id="help">
            <p>Help us build a better</p>
            <p>tomorrow today.</p>
        </div>
       
     </div>    

    </div>

<div id="help-2">
    <div class="work">
        <div>
         <h2>Our Work</h2>
      </div>

      <div>
        <p>Feed My Hungry People is a 601 humanitarian organization that is solving Two Problems - Waste & Hunger</p>
      </div>

    </div>

<div class="fod-1">

    <div class="food">
        <img src="@/assets/image2.jpg" alt="image"/>

    <div class="rescue">
       <div>
           <h2>Food Rescue</h2>
        </div>
        <div>
           <p>FOHP helps rescue more than 2,589,600 pounds of fresh produce from being thrown away in landfills every year.</p>
        </div>
    </div>

     <div id="suport">
        <router-link to="donate">
             <button>SUPPORT FOOD RESCUE</button>
        </router-link>
     </div>
    </div>


    <div class="food">
        <img src="@/assets/image9.jpg" alt="image" id="img-3"/>

    <div class="rescue">
       <div>
           <h2>Child Hunger</h2>
        </div>
        <div>
           <p>We distribute more than $3,693,235 worth of fresh produce to Hungry Children and families around the world.</p>
        </div>
    </div>

     <div id="suport">
        <router-link to="donate">
            <button>SUPPORT FOOD RESCUE</button>
        </router-link>
            
    </div>
     
    </div>

</div>

</div>
 
<div id="get-1">

 <div id="ton-1">
    <div class="get">
        <h5>GET INVOLVED</h5>
        <h1>Getting involved here is easy.</h1>
    </div>

    <div id="ton-2">
        <button>WAYS YOU CAN DONATE</button>
    </div>

  </div>

<div>

 <div class="donat-2">

    <div id="img-8">
        <div>
           <img src="@/assets/image8.jpg" alt="image"/>
        </div>
        <div id="volun-1">
           <h3>VOLUNTEER</h3>
        </div>
    </div> 

    <div id="img-11">
        <div>
           <img src="@/assets/image11.jpg" alt="image"/>
        </div>
        <div id="asset-1">
           <h3>DONATE</h3>
        </div>

    </div>

    </div>

 <div class="donat-2">

    <div id="img-8">
        <div>
           <img src="@/assets/image13.jpg" alt="image"/>
        </div>
        <div id="volun-1">
           <h3>SUPPORT A CAUSE</h3>
        </div>
    </div> 

    <div id="img-11">
        <div>
           <img src="@/assets/image7.jpg" alt="image"/>
        </div>
        <div id="asset-1">
           <h3>FUNDRAISE NOW</h3>
        </div>

    </div>
</div>
</div>
</div> 


<div id="program-1">

     <div id="hun-2">
        <h1>Feed My Hungry People Programs</h1>
    </div>


<div class="hun-1">

    
<div id="buton-3">

 <div class="ameri-0">
    <button>FEEDING CHILDREN IN AMERICA</button>
</div>


 <div id=" feed-5">

  <div id="img-5">
        <img src="@/assets/image7.jpg" alt="image"/>

  <div id="p-1">
        <h4>Donate and help feeding hungry children</h4>
    </div>
  </div>

</div>

</div>


<div id="buton-3">
     <div class="ameri-0">
        <button>FEEDING CHILDREN IN AFRICA</button>
    </div>
 <div id=" feed-5">
    <div id="img-5">
        <img src="@/assets/image12.jpg" alt="image"/>

    <div id="p-1">
        <h4>Help feed hungry children in Africa</h4>
    </div>
    </div>
 </div>
</div>


<div id="buton-3">

     <div class="ameri-0">
        <button>PHILIPPINE DISASTER RELIEF FUND</button>
    </div>

 <div id=" feed-5">
    <div id="img-5">
        <img src="@/assets/image14.jpg" alt="image"/>

    <div id="p-1">
        <h4>Help feed hungry children in Philippines</h4>
    </div>
    </div>
 </div>
</div>



<div id="buton-3">

  <div class="ameri-0">
        <button>Help Hungry People in Haiti</button>
    </div>
 <div id=" feed-5">

    <div id="img-5">
        <img src="@/assets/image6.jpg" alt="image"/>

    <div id="p-1">
        <h4>Donate Food to those are in need</h4>
    </div>
    </div>     
 </div>
</div>



<div id="buton-3">

 <div class="ameri-0">
        <button>OVERSEAS FEEDING PROGRAMS</button>
</div>
 <div id=" feed-5">

    <div id="img-5">
        <img src="@/assets/image4.jpg" alt="image"/>

    <div id="p-1">
        <h4>A Pair of boot will go a long way. Please Donate</h4>
    </div>
    </div>
    
 </div>

</div>



<div id="buton-3">

    <div class="ameri-0">
        <button>US FEEDING PROGRAMS</button>
    </div>
 <div id=" feed-5">

    <div id="img-5">
        <img src="@/assets/image5.jpg" alt="image"/>

    <div id="p-1">
        <h4>Just give something, It will go a long way</h4>
    </div>
    </div>
 </div>

</div>


</div>

</div>   

 </div>
</template>

<script>
    export default {
        name: 'body-vue',
        components: {

        }
    }
</script>

<style scoped>

 #body{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  
}

#ton-1 button{
    display: none;
}

#hunger img{
    
  width: 400px;
   height: 520px;
    filter: brightness(80%) contrast(118%) saturate(60%) blur(0px) hue-rotate(152deg);
}



#hunger{
    position: relative;
    margin-top: 2px;
    box-sizing: border-box;
    
  
}

.child{
    position: absolute;
    top: 20px;
    justify-items: center;
    align-items: center;
    box-sizing: border-box;
    margin-top: 30px;
}

h1{
    text-align: center;
    padding-left: 20px;
    color: red;
    
}

#help p{
    color: red;
    font-weight: 800;
    letter-spacing: .5;
    line-height: 1px;
}

button{
    padding: 10px 19px;
    background-color: orange;
    border: none;
    color: #fff;
    font-weight: 700;
    border-radius: 10px;
    letter-spacing: .5;

}

#help{
    padding-top: 20px;
}

.work{
    box-sizing: border-box;
    padding-top: 30px;
}

.work h2{
    color: black;
    font-weight: 700;
}

.work p{
    box-sizing: border-box;
    width: 91%;
    text-align: center;
    margin-left: 10px;

}

.food{
    box-sizing: border-box;
    position: relative;
    padding-top: 30px;
}

.food img{
    width: 350px;
    height: 300px;
    border-radius: 10px;
    box-shadow: 35px 35px 35px #fff;
}


#help-2{
    background-color: #f3f3f3;
    padding-bottom: 60px;
}



.rescue{
    position: absolute;
    top: 10px;
    padding-top: 10px;
   
}

.rescue p{
    width: 78%;
    padding-left: 25px;
    color: #fff;
    font-weight: 700;
    
}

.rescue h2{
    color: #FFF;
    font-weight: bolder;

}


#suport{
    position: absolute;
    bottom: 5%;
    box-sizing: border-box;
    padding-left: 80px;
}

#suport button{
    background-color: blue;
}

.get{
    padding-top: 10px;
}

.get h5{
   font-weight: smaller;
   color: red;
}

.get h1{
    color: black;
    width: 85%;
}

.donat-2 img{
    width: 200px;
    height: 180px;
 
}


.donat-2{
    display: flex;
       gap: 10px;
}

#img-8 img{
    width: 180px;
}

#img-8{
    position: relative;
}

#volun-1{
  position: absolute;
  bottom: 45px;
  right: 35px;
  color: #fff;
}

#img-11{
    position: relative;
}

#asset-1{
  position: absolute;
  bottom: 45px;
  right: 35%;
  color: #fff;
}

#img-5 img{
    width: 350px;
    height: 280px;
    border-top-left-radius: 5%;
    border-top-right-radius: 5%;
    border-bottom: #fff;
}


#feed-5{
    padding-top: 20px;
    box-sizing: border-box;
   border-top: 3px solid #fff;
   box-shadow: 50px 60px 19px  #fff;
}



.hun-1{
    position: relative;
    background-color: #e8e8e8;
     padding-top: 20px;
}

#program-1{
      background-color: #e8e8e8;
     
}



#program-1 h1{
    color: black;
    font-size: 30px;
 
}

#buton-3{
    position: relative;
    box-sizing: border-box;
    
}

.ameri-0{
    position: absolute;
    left: 50px;
    box-sizing: border-box;
    margin-top: 20px;
}




@media only screen and (min-width: 768px){


#hunger img{
    
  width: 900px;
   height: 900px;

}


.child{
    position: relative;
}

#stop{
    position: absolute;
    bottom: 600px;
    left: 2%;
    font-size: 40px;
}


#buton{
    position: absolute;
    bottom: 400px;
    left: 25%;
}


#buton button{
    font-size: 20px;
    padding: 12px 80px;
}


#help{
    position: absolute;
    bottom: 450px;
    left: 60%;
}

#help p{
    color: #fff;
    font-size: 18px;
}


.work p{
    width: 80%;
    box-sizing: border-box;
    margin-left: 60px;
    font-size: 20px;
}

.work h2{
    font-size: 45px;
}


.fod-1{

    display: flex;
     gap: 10px;
}

.food img{
   width: 400px;
    height: 400px;
    border-radius: 3%;

}

#ton-1 button{
    display: block;
    
}

#ton-2{
    padding-left: 40px;
}

#get-1{
    display: flex;
    padding-top: 60px;
    padding-right: 10px;
    padding-bottom: 40px;
}

#get-1 img{
    width: 230px;
    height: 190px;
 
}

 
 .hun-1{
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 1fr 1fr;
 }

 



}







@media only screen and (min-width: 992px){


#hunger img{
    
  width: 100%;
   height: 900px;

}

.child{
    position: relative;
}


#stop{
    position: absolute;
    bottom: 280px;
    left: 10%;
    font-size: 70px;
    width: 40%;
    font-weight: bolder;

}


#buton{
    position: absolute;
    bottom: 640px;
    left: 60%;
}


#buton button:hover{
    background-color: #fff;
    color: orange;
    cursor: pointer;
}

#help{
    position: absolute;
    bottom: 250px;
    left: 60%;
}



#help p{
    font-size: 30px;
}



.work p{
    width: 50%;
    box-sizing: border-box;
    margin-left: 350px;
    font-size: 20px;
    text-align: center;
}

.fod-1{
    position: relative;
    box-sizing: border-box;
    padding-left: 250px;
}

.food{
    box-shadow: 18px 25px 3px #f3f3f3;;
    
}

.food img{
   width: 530px;
    height: 450px;

}



.work h2{
    font-size: 40px;
}


#suport button:hover{
     background-color: rgba(0, 0, 255, 0.537);
     cursor: pointer;     
     transform: scale(1.3);
}

#suport{
    transition: 0.3s;
    cursor: pointer;
}


#get-1{
    
   padding-left: 250px;
    background-color: #f9f9f9;
    
}

#asset-1{
   border: 1px solid gray;
    border-radius: 50px;
    padding: 0px 16px 0px 16px;
    transition: 0.3s;
    cursor: pointer;
}

#asset-1:hover{
     transform: scale(1.3);
     background-color: blue;
}

#asset-1 h3{
     font-size: 10px;
    letter-spacing: 1px;
     font-weight: bolder;
}


#volun-1{

    border: 1px solid gray;
    border-radius: 50px;
    padding: 0px 16px 0px 16px;
    transition: 0.3s;
     cursor: pointer;

}


#volun-1:hover{
    transform: scale(1.3);
    background-color: blue;
}

#volun-1 h3{
    font-size: 10px;
    letter-spacing: 1px;
    font-weight: bolder;
}

#img-11 img{
    width: 280px;
}

#img-8 img{
     width: 280px;
}


.get h1{
    width: 60%;
}




.get h5{
    padding-right: 110px;
}

#ton-2{
    transition: 0.3s;
   
}

#ton-2 button:hover{
    transform: scale(1.3);
    background-color: rgba(0, 0, 255, 0.593);
    cursor: pointer;
}


#program-1{
    padding-top: 20px;
    padding-bottom: 20px;
}


.hun-1{
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    
}

#buton-3{
  box-shadow: 35px 40px 35px #e8e8e8;
  border-radius: 5%;
   padding-bottom: 35px;
}




    
}


</style>