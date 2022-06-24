


/************************************************************************************************************************* */
/************************************************************************************************************************* */
/************************************************************************************************************************* */
/************************************************************************************************************************* */
/************************************************************************************************************************* */
/************************************************************************************************************************* */
/************************************************************************************************************************* */
/************************************************************************************************************************* */
/************************************************************************************************************************* */
/************************************************************************************************************************* */
/************************************************************************************************************************* */
/************************************************************************************************************************* */
/************************************************************************************************************************* */
/************************************************************************************************************************* */
/************************************************************************************************************************* */
/************************************************************************************************************************* */
/************************************************************************************************************************* */
/************************************************************************************************************************* */
/************************************************************************************************************************* */
/************************************************************************************************************************* */
/************************************************************************************************************************* */
/************************************************************************************************************************* */
/************************************************************************************************************************* */
/************************************************************************************************************************* */
/************************************************************************************************************************* */
/************************************************************************************************************************* */


/**booking system and login combonent  */

Vue.component('user', {
    props: ["id"],
    template: `
    <div :class="'animated fadeInRight component user' + id" >
    
   <div v-if="!afterSubmit">

   </div>

   


   <div class="animated fadeInRight component booking" id="myDIV">
    <div style="    justify-content: center;
    display: flex; ">



 

   <div style="justify-content: center; display: flex;">


<div id="aemadDiv" >

  <h1 style="margin-right: 3%; color: #161616;">فريد <span class="material-icons" style="    font-size: 60px;
  color: #e4cb96;">
  pending_actions
  </span></h1>
  




  <div v-if="!afterSubmitaemad">
           
  <form v-on:submit.prevent>
      
     
      

      <div class="input filed col s6">
      <label for="date" class="customerinfoaemad">اختر يوم</label>






      <section class="ftco-section">
      <div class="container">
       
          <div class="row">
              <div class="col-md-12">
                  <div class="elegant-calencar d-md-flex">
                      <div class="wrap-header d-flex align-items-center img" style="background-image: url(נע.jpg);">
                    <p id="reset">היום</p>
                  <div id="header" class="p-0">
                              <!-- <div class="pre-button d-flex align-items-center justify-content-center"><i class="fa fa-chevron-left"></i></div> -->
                  <div class="head-info">
                      <div class="head-month"></div>
                      <div class="head-day"></div>
                      
<div id="MyClockDisplay" class="clock" onload="showTime()"></div>

    
                  </div>
                  <!-- <div class="next-button d-flex align-items-center justify-content-center"><i class="fa fa-chevron-right"></i></div> -->
                  </div>
                </div>
                <div class="calendar-wrap">
                    
                  <table id="calendar" @click="oneclickevet">
                  <thead @click="oneclickevet">
                      <tr @click="oneclickevet">
                      <th>ראשון  احد</th>
                      <th>שני  اثنين</th>
                      <th>שלישי  ثلاثاء</th>
                      <th>רבעי  اربعاء</th>
                      <th>חמשי  خميس</th>
                      <th>שישי  جمعة</th>
                      <th>שבת  سبت</th>
                      </tr>
                  </thead>
                  <tbody>
                  <tr @click="oneclickevet">
                    <td class="tdaemad" @click="oneclickevet" style=" text-align: center;"></td>
                    <td class="tdaemad" @click="oneclickevet" style=" text-align: center;"></td>
                    <td class="tdaemad" @click="oneclickevet"  style=" text-align: center;"></td>
                    <td class="tdaemad" @click="oneclickevet" style=" text-align: center;"></td>
                    <td class="tdaemad" @click="oneclickevet" style=" text-align: center;"></td>
                    <td class="tdaemad" @click="oneclickevet" style=" text-align: center;"></td>
                    <td class="tdaemad" @click="oneclickevet" style=" text-align: center;"></td>
                  </tr>
                  <tr @click="oneclickevet">
                  <td class="tdaemad" @click="oneclickevet" style=" text-align: center;"></td>
                  <td class="tdaemad" @click="oneclickevet" style=" text-align: center;"></td>
                  <td class="tdaemad" @click="oneclickevet"  style=" text-align: center;"></td>
                  <td class="tdaemad" @click="oneclickevet" style=" text-align: center;"></td>
                  <td class="tdaemad" @click="oneclickevet" style=" text-align: center;"></td>
                  <td class="tdaemad" @click="oneclickevet" style=" text-align: center;"></td>
                  <td class="tdaemad" @click="oneclickevet" style=" text-align: center;"></td>
                  </tr>
                  <tr @click="oneclickevet">
                  <td class="tdaemad" @click="oneclickevet" style=" text-align: center;"></td>
                  <td class="tdaemad" @click="oneclickevet" style=" text-align: center;"></td>
                  <td class="tdaemad" @click="oneclickevet"  style=" text-align: center;"></td>
                  <td class="tdaemad" @click="oneclickevet" style=" text-align: center;"></td>
                  <td class="tdaemad" @click="oneclickevet" style=" text-align: center;"></td>
                  <td class="tdaemad" @click="oneclickevet" style=" text-align: center;"></td>
                  <td class="tdaemad" @click="oneclickevet" style=" text-align: center;"></td>
                  </tr>
                  <tr @click="oneclickevet">
                  <td class="tdaemad" @click="oneclickevet" style=" text-align: center;"></td>
                  <td class="tdaemad" @click="oneclickevet" style=" text-align: center;"></td>
                  <td class="tdaemad" @click="oneclickevet"  style=" text-align: center;"></td>
                  <td class="tdaemad" @click="oneclickevet" style=" text-align: center;"></td>
                  <td class="tdaemad" @click="oneclickevet" style=" text-align: center;"></td>
                  <td class="tdaemad" @click="oneclickevet" style=" text-align: center;"></td>
                  <td class="tdaemad" @click="oneclickevet" style=" text-align: center;"></td>
                  </tr>
                  <tr @click="oneclickevet">
                  <td class="tdaemad" @click="oneclickevet" style=" text-align: center;"></td>
                  <td class="tdaemad" @click="oneclickevet" style=" text-align: center;"></td>
                  <td class="tdaemad" @click="oneclickevet"  style=" text-align: center;"></td>
                  <td class="tdaemad" @click="oneclickevet" style=" text-align: center;"></td>
                  <td class="tdaemad" @click="oneclickevet" style=" text-align: center;"></td>
                  <td class="tdaemad" @click="oneclickevet" style=" text-align: center;"></td>
                  <td class="tdaemad" @click="oneclickevet" style=" text-align: center;"></td>
                  </tr>
                  <tr @click="oneclickevet">
                  <td class="tdaemad" @click="oneclickevet" style=" text-align: center;"></td>
                  <td class="tdaemad" @click="oneclickevet" style=" text-align: center;"></td>
                  <td class="tdaemad" @click="oneclickevet"  style=" text-align: center;"></td>
                  <td class="tdaemad" @click="oneclickevet" style=" text-align: center;"></td>
                  <td class="tdaemad" @click="oneclickevet" style=" text-align: center;"></td>
                  <td class="tdaemad" @click="oneclickevet" style=" text-align: center;"></td>
                  <td class="tdaemad" @click="oneclickevet" style=" text-align: center;"></td>
                  </tr>
                  </tbody>
                  </table>
                </div>
              </div>
              </div>
          </div>
      </div>
  </section>









    <h5 id="myh2id" style="color: #161616;"></h5>
    <hr style="width: 100%; background: #efd59e; box-shadow: none;">
      </div>


     
      <div style="margin-right: 3%;">
      <label @click="checkDateaemad" class="customerinfoaemad" >الحجز باسم</label>

      <input id="myh1id" type="text" value="${Math.floor(Math.random() * 999)}"  style="text-align: end; border-block-color: #e4cb96;">

</div>


      <div class="input filed col s6">
      <label @click="checkDateaemad" class="customerinfoaemad">اختر ساعة</label>
   
      
<select class="browser-default timeaemad" style=" direction: rtl; background: #484848; border: #333333;" v-show="dateSelectedaemad == 'selectedaemad'" >
    <option value="">دوامنا اليوم:</option>
    <option class="timeaemad" v-check v-for="time in allTimeaemad" :value="time">{{time}}</option>
    </select>




      <hr @click="checkDateaemad" style="width: 100%;
      background: #efd59e;
      box-shadow: none;" >
      </div>
  </div>



      
   <button @click="postaemad" class="btn" type="submit" style="background-color: #e4cb96;  margin-right: 3%;   margin-top: 10%; margin-top: 8%;
   margin-bottom: 10%;

   font-size: large;" name="action">
   
   احجز
   </button>
  </form> 
  <hr style="width: 100%; background: #efd59e; box-shadow: none; ">

  <div>
  <label  class="customerinfoamosh" style="margin-right: 3%;">لالغاء الدور</label>


    <table id="myTable" style="color: white;">
        <thead>
            <tr>
                 <th style="text-align: center;">اليوم</th>
    
                <th style="text-align: center;">الساعة</th>
                <th style="text-align: center;">لالغاء الموعد</th>


            </tr>
        </thead>
        <tbody >
            <tr v-for="booking in bookingsaemad"  v-show="booking.status == 'pending'">
                <td id="bookdate" style="text-align: center;">{{ booking.date }}</td>
                <td id="booktime" style="text-align: center">{{ booking.time }}</td>
                <td style="text-align: center;"><a class="btn" style="background:#c62828 ;" href="javascript:;"><i  @click="removedaemad" :data-key=booking.unique :id=booking.status :data-keyy=booking.customerNumber >الغاء</i></a></td>

            </tr>
        </tbody>
    </table>

</div>

</div>




   

<style>
.datepicker-date-display {
    -webkit-box-flex: 1;
    -webkit-flex: 1 auto;
    -ms-flex: 1 auto;
    flex: 1 auto;
    background-color: rgb(228, 203, 150) initial ;
    color: #fff;
    padding: 20px 22px;
    font-weight: 500;
}

</style>
    </div>
     </div>
    `,

    data() {

        return {
            customerPassword: "",
            validationPassword: false,

            bookingsaemad: [],



            afterSubmitaemad: false,

            customerNumber: "",



            dateSelectedaemad: 'notselectedaemad',

            validationThisDay: false,


            date: '',


            newdate: '',

            bookedTimeaemad: [],

            allTimeaemad: ["09:00","09:30","10:00", "10:30", "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30"],

            validationName: false,
            validationDate: false,
            validationTime: false

        }

    },

    methods: {

        poste() {

                     


                        var days = ['الاحد', 'الاثنان', 'الثلثاء', 'الاربعاء', 'الخميس', 'الجمعة', 'السبت'];


                        var Xmas95 = new Date();

                        var dayName = days[Xmas95.getDay()];
                        var dayyName = days[Xmas95.getDay() + 1];
                        var dayyyName = days[Xmas95.getDay() + 2];

                        if (Xmas95.getDay() == 5) {
                            var dayyyName = days[Xmas95.getDay() - 5];
                        } else if (Xmas95.getDay() == 6) {
                            var dayyName = days[Xmas95.getDay() - 6];
                            var dayyyName = days[Xmas95.getDay() - 5];
                        }

                     

                      



                        var day = Xmas95.getDate();
                        var dayy = Xmas95.getDate() + 1;
                        var dayyy = Xmas95.getDate() + 2;
                        if (Xmas95.getDate() == 29) {
                            var dayyy = Xmas95.getDate() - 29;
                        } else if (Xmas95.getDate() == 30) {
                            var dayy = Xmas95.getDate() - 29;
                            var dayyy = Xmas95.getDate() - 28;
                        }

                        





                        var month = Xmas95.getMonth() + 1;


                        var year = Xmas95.getFullYear();



         

                       
                        var Xmas95n = new Date();
                        var dayn = Xmas95n.getDate();
                        var monthn = Xmas95n.getMonth() + 1;
                        var yearn = Xmas95n.getFullYear();
                        //document.getElementById('#newDate').value = day + "/" + month + "/" + year;

                        var n = document.getElementById("myDIV");
                        var d = document.getElementById("myLogin");

                        if (n.style.display === "none") {
                            n.style.display = "block";
                            d.style.display = "none"
                            let reload = () => { this.fetcheraemad(); }
                            reload();

                        } else {
                            n.style.display = "none";

                        }


         

            
        },
       

        //parseInt(
        checkDateaemad() {
            let num = document.getElementById("myh1id").value;


            this.date = document.getElementById("myh2id").innerHTML;


            if (this.date) {
                this.$http.get("https://farid-8c572-default-rtdb.firebaseio.com/login.json").then(function (data) {
                    let savedDate = Object.values(data.body);


                    for (let x = 0; x < savedDate.length; x++) {

                        //console.log(savedDate[x].customerName)

                        this.dateSelectedaemad = 'selectedaemad';

                        this.$http.get("https://farid-8c572-default-rtdb.firebaseio.com/appointments/" + savedDate[x].customerName + ".json").then(function (data) {
                            let savedDate = Object.values(data.body);


                            for (let x = 0; x < savedDate.length; x++) {


                                if (savedDate[x].date == this.date) {
                                    this.bookedTimeaemad.push(savedDate[x].time);
                                    //console.log(savedDate[x].time)
                                    //console.log(parseInt(savedDate[x].time))

                                }

                            }
                        })

                    }

                })


            }
            else {
                alert("منفضلك قم باختيار يوم الحجز")
            }
        },
        oneclickevet() {
           

            this.bookedTimeaemad= []
         


        },
        
        postaemad() {


            let num = document.getElementById("myh1id").value;




                            let time = document.getElementsByClassName('timeaemad')[0].value;


                                        this.checkDateaemad();
                                        (!time) ? alert("يجب ادخال الساعة") : this.validationTime = true;
                                        if (num == '') {
                                            alert("يجب ادخال الاسم")
                                        }
                                        console.log(num)
                                        console.log(time)
                                        console.log(document.getElementById("myh2id").innerHTML)
                                        this.$http.post("https://farid-8c572-default-rtdb.firebaseio.com/login.json",
                                        {
                                            "customerName": num,
                                            
                                            "customerPhone": 00000,


                                        }).then(function (data) {
                                            this.$http.post("https://farid-8c572-default-rtdb.firebaseio.com/appointments/"+num+".json",
                                            {
                                                "customerNumber": num,
                                                "date": document.getElementById("myh2id").innerHTML,
                                                "time": time,
                                                "phone": 00000,

                                                "status": "pending"

                                            }).then(function (data) {
                                                let reload = () => { this.fetcheraemad(); }
                                                reload();


                                                alert("تمت عمليت الحجز بنجاح")
                                            })

                                        })
                                           
                                        

                                    

                               







        },
       
        fetcheraemad() {
            let username = document.getElementById("myh1id").value;

            this.$http.get("https://farid-8c572-default-rtdb.firebaseio.com/appointments/" + username + ".json").then(function (data) {

                return data.json();

            }).then(function (data) {
                let username = document.getElementById("myh1id").value;
                let requests = [];
                for (let key in data) {
                    //console.log(data[key])
                    if (data[key].customerNumber == username) { data[key].unique = key; requests.push(data[key]); }

                }
                this.bookingsaemad = requests;

            });
        },
       

        myAemad() {
            var x = document.getElementById("aemadDiv");

            if (x.style.display === "none") {
                y.style.display = "none";
                x.style.display = "block";
            } else {
                x.style.display = "none";


            }
        },

        
        removedaemad(event) {
            alert("هل انت متاكد من الغاء حجزك لدى فريد ؟")

            let key = event.srcElement.dataset.key;
            let status = event.srcElement.id;
            let name = event.srcElement.dataset.keyy;
            let reload = () => { this.fetcheraemad(); }






            //console.log(key)
            //console.log(firebase.database().ref('appointments').child(key))
            firebase.database().ref('appointments/' + name).child(key).remove()

                .then(function () {
                    alert("لقد تم الغاء الحجز")

                    reload();


                    console.log("Remove succeeded.")
                })
                .catch(function (error) {
                    console.log("Remove failed: " + error.message)
                });


        },
       
    },


});

Vue.directive('check',
    {
        update(el, binding, vnode) {





            var today = new Date();
            var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
            var timeh = parseInt(today.getHours());
            var timem = parseInt(today.getMinutes());
            let time = el.innerHTML
            let check = vnode.context.bookedTimeaemad.includes(time);

            var d = new Date();
            var getTot = daysInMonth(d.getMonth() + 1, d.getFullYear()); //Get total days in a month
/*sunday monday tuesday wednesday thursday friday saturday */

            
            var sun = new Array();   
            var mon = new Array();   
            var tue = new Array();   
            var wed = new Array();   
            var thu = new Array();   
            var fri = new Array();   

            var sat = new Array();



        
 

            if (parseInt(document.getElementById("myh2id").innerHTML) == parseInt(date)) {
                if (el.innerHTML[0] + el.innerHTML[1] == timeh) {
                    if (el.innerHTML[3] + el.innerHTML[4] <= timem) {
                        el.disabled = true;
                        el.style.color = "red";
                    } else {
                        el.disabled = false;
                        el.style.color = "white";
                        el.style.fontSize = "1.2rem";
                    }

                } else if (el.innerHTML[0] + el.innerHTML[1] < timeh) {
                    el.disabled = true;
                    el.style.color = "red";
                } else if (el.innerHTML[0] + el.innerHTML[1] > timeh) {
                    if (check) {
                        el.disabled = true;
                        el.style.color = "red";

                    } else {
                        el.disabled = false;
                        el.style.color = "white";
                        el.style.fontSize = "1.2rem";
                    }
                }

            } else {

                if (check) {
                    el.disabled = true;
                    el.style.color = "red";

                } else {
                    el.disabled = false;
                    el.style.color = "white";
                    el.style.fontSize = "1.2rem";
                }
            }

/*sunday monday tuesday wednesday thursday friday saturday */
            for (var i = 1; i <= getTot; i++) {    //looping through days in month
                var newDate = new Date(d.getFullYear(), d.getMonth(), i)

                if (newDate.getDay() == 0) {   //if Sunday
                    sun.push(i);
                }
                if (newDate.getDay() == 1) {   //if monday
                    mon.push(i);
                }
                if (newDate.getDay() == 2) {   //if tuesday
                    tue.push(i);
                }
                if (newDate.getDay() == 3) {   //if wednesday
                    wed.push(i);
                }
                if (newDate.getDay() == 4) {   //if thursday
                    thu.push(i);
                }
                if (newDate.getDay() == 5) {   //if friday
                    fri.push(i);
                }
                if (newDate.getDay() == 6) {   //if Saturday
                    sat.push(i);
                }

            }


          
          

           


            for (let i = 0; i < sun.length; i++) {
                if (parseInt(document.getElementById("myh2id").innerHTML) == parseInt(sun[i])) {

                    if(document.getElementById("myh2id").innerHTML[2] == "/"){
                        if(parseInt(d.getMonth() + 1 ) == parseInt(document.getElementById("myh2id").innerHTML[3] + document.getElementById("myh2id").innerHTML[4])){
                               if (el.innerHTML[0] + el.innerHTML[1] < 16) {
                                     el.disabled = true;
                                     el.style.color = "red";
                                }else if(el.innerHTML[0] + el.innerHTML[1] == 16 && el.innerHTML[3] + el.innerHTML[4] < 30){
                                    el.disabled = true;
                                    el.style.color = "red";  
                                }
                        }
                    }else{
                        if(parseInt(d.getMonth() + 1 ) == parseInt(document.getElementById("myh2id").innerHTML[2] + document.getElementById("myh2id").innerHTML[3])){
                            if (el.innerHTML[0] + el.innerHTML[1] < 16) {
                                el.disabled = true;
                                el.style.color = "red";
                           }else if(el.innerHTML[0] + el.innerHTML[1] == 16 && el.innerHTML[3] + el.innerHTML[4] < 30){
                               el.disabled = true;
                               el.style.color = "red";  
                           }
                     }
                    }

                    

                }
            }
            

          


            for (let i = 0; i < mon.length; i++) {

                if (parseInt(document.getElementById("myh2id").innerHTML) == parseInt(mon[i])) {

                    if(document.getElementById("myh2id").innerHTML[2] == "/"){
                        if(parseInt(d.getMonth() + 1 ) == parseInt(document.getElementById("myh2id").innerHTML[3] + document.getElementById("myh2id").innerHTML[4])){
                               if (el.innerHTML[0] + el.innerHTML[1] < 16) {
                                     el.disabled = true;
                                     el.style.color = "red";
                                }else if(el.innerHTML[0] + el.innerHTML[1] == 16 && el.innerHTML[3] + el.innerHTML[4] < 30){
                                    el.disabled = true;
                                    el.style.color = "red";  
                                }
                        }
                    }else{
                        if(parseInt(d.getMonth() + 1 ) == parseInt(document.getElementById("myh2id").innerHTML[2] + document.getElementById("myh2id").innerHTML[3])){
                            if (el.innerHTML[0] + el.innerHTML[1] < 16) {
                                el.disabled = true;
                                el.style.color = "red";
                           }else if(el.innerHTML[0] + el.innerHTML[1] == 16 && el.innerHTML[3] + el.innerHTML[4] < 30){
                               el.disabled = true;
                               el.style.color = "red";  
                           }
                     }
                    }

                    

                }
            }
            


            for (let i = 0; i < tue.length; i++) {

                if (parseInt(document.getElementById("myh2id").innerHTML) == parseInt(tue[i])) {

                    if(document.getElementById("myh2id").innerHTML[2] == "/"){
                        if(parseInt(d.getMonth() + 1 ) == parseInt(document.getElementById("myh2id").innerHTML[3] + document.getElementById("myh2id").innerHTML[4])){
                               if (el.innerHTML[0] + el.innerHTML[1] < 16) {
                                     el.disabled = true;
                                     el.style.color = "red";
                                }else if(el.innerHTML[0] + el.innerHTML[1] == 16 && el.innerHTML[3] + el.innerHTML[4] < 30){
                                    el.disabled = true;
                                    el.style.color = "red";  
                                }
                        }
                    }else{
                        if(parseInt(d.getMonth() + 1 ) == parseInt(document.getElementById("myh2id").innerHTML[2] + document.getElementById("myh2id").innerHTML[3])){
                            if (el.innerHTML[0] + el.innerHTML[1] < 16) {
                                el.disabled = true;
                                el.style.color = "red";
                           }else if(el.innerHTML[0] + el.innerHTML[1] == 16 && el.innerHTML[3] + el.innerHTML[4] < 30){
                               el.disabled = true;
                               el.style.color = "red";  
                           }
                     }
                    }

                    

                }
            }
            
            for (let i = 0; i < wed.length; i++) {

                if (parseInt(document.getElementById("myh2id").innerHTML) == parseInt(wed[i])) {

                    if(document.getElementById("myh2id").innerHTML[2] == "/"){
                        if(parseInt(d.getMonth() + 1 ) == parseInt(document.getElementById("myh2id").innerHTML[3] + document.getElementById("myh2id").innerHTML[4])){
                               if (el.innerHTML[0] + el.innerHTML[1] < 16) {
                                     el.disabled = true;
                                     el.style.color = "red";
                                }else if(el.innerHTML[0] + el.innerHTML[1] == 16 && el.innerHTML[3] + el.innerHTML[4] < 30){
                                    el.disabled = true;
                                    el.style.color = "red";  
                                }
                        }
                    }else{
                        if(parseInt(d.getMonth() + 1 ) == parseInt(document.getElementById("myh2id").innerHTML[2] + document.getElementById("myh2id").innerHTML[3])){
                            if (el.innerHTML[0] + el.innerHTML[1] < 16) {
                                el.disabled = true;
                                el.style.color = "red";
                           }else if(el.innerHTML[0] + el.innerHTML[1] == 16 && el.innerHTML[3] + el.innerHTML[4] < 30){
                               el.disabled = true;
                               el.style.color = "red";  
                           }
                     }
                    }

                    

                }
            }


            for (let i = 0; i < thu.length; i++) {

                if (parseInt(document.getElementById("myh2id").innerHTML) == parseInt(thu[i])) {

                    if(document.getElementById("myh2id").innerHTML[2] == "/"){
                        if(parseInt(d.getMonth() + 1 ) == parseInt(document.getElementById("myh2id").innerHTML[3] + document.getElementById("myh2id").innerHTML[4])){
                               if (el.innerHTML[0] + el.innerHTML[1] < 16) {
                                     el.disabled = true;
                                     el.style.color = "red";
                                }else if(el.innerHTML[0] + el.innerHTML[1] == 16 && el.innerHTML[3] + el.innerHTML[4] < 30){
                                    el.disabled = true;
                                    el.style.color = "red";  
                                }
                        }
                    }else{
                        if(parseInt(d.getMonth() + 1 ) == parseInt(document.getElementById("myh2id").innerHTML[2] + document.getElementById("myh2id").innerHTML[3])){
                            if (el.innerHTML[0] + el.innerHTML[1] < 16) {
                                el.disabled = true;
                                el.style.color = "red";
                           }else if(el.innerHTML[0] + el.innerHTML[1] == 16 && el.innerHTML[3] + el.innerHTML[4] < 30){
                               el.disabled = true;
                               el.style.color = "red";  
                           }
                     }
                    }

                    

                }
            }



            for (let i = 0; i < sat.length; i++) {

                if (parseInt(document.getElementById("myh2id").innerHTML) == parseInt(sat[i])) {

                    if(document.getElementById("myh2id").innerHTML[2] == "/"){
                        if(parseInt(d.getMonth() + 1 ) == parseInt(document.getElementById("myh2id").innerHTML[3] + document.getElementById("myh2id").innerHTML[4])){
                               if (el.innerHTML[0] + el.innerHTML[1] < 21) {
                                     el.disabled = true;
                                     el.style.color = "red";
                                }else if(el.innerHTML[0] + el.innerHTML[1] == 16 && el.innerHTML[3] + el.innerHTML[4] < 30){
                                    el.disabled = true;
                                    el.style.color = "red";  
                                }
                        }
                    }else{
                        if(parseInt(d.getMonth() + 1 ) == parseInt(document.getElementById("myh2id").innerHTML[2] + document.getElementById("myh2id").innerHTML[3])){
                            if (el.innerHTML[0] + el.innerHTML[1] < 21) {
                                el.disabled = true;
                                el.style.color = "red";
                           }else if(el.innerHTML[0] + el.innerHTML[1] == 16 && el.innerHTML[3] + el.innerHTML[4] < 30){
                               el.disabled = true;
                               el.style.color = "red";  
                           }
                     }
                    }

                    

                }
            }


            function daysInMonth(month, year) {
                return new Date(year, month, 0).getDate();
            }


            showTime();
        }
    });




    (function($) {

        "use strict";
    
        document.addEventListener('DOMContentLoaded', function(){
        var today = new Date(),
            year = today.getFullYear(),
            month = today.getMonth(),
            monthTag =["1","2","3","4","5","6","7","8","9","10","11","12"],
            day = today.getDate(),
            days = document.getElementsByTagName('td'),

            selectedDay,
            setDate,
            daysLen = days.length;
    // options should like '2014-01-01'
    console.log(document.getElementsByTagName('td'))
    console.log(days)

    console.log(document.getElementsByClassName('tdaemad'))

        function Calendar(selector, options) {
            this.options = options;
            this.draw();
        }
        
        Calendar.prototype.draw  = function() {
            this.getCookie('selected_day');
            this.getOptions();
            this.drawDays();
            var that = this,
                reset = document.getElementById('reset');
                
                
                reset.addEventListener('click', function(){that.reset(); });
            while(daysLen--) {
                days[daysLen].addEventListener('click', function(){that.clickDay(this); });
            }
        };
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
        console.log(days[daysLen])
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

        Calendar.prototype.drawHeader = function(e) {
            var headDay = document.getElementsByClassName('head-day'),
                headMonth = document.getElementsByClassName('head-month');
    
                e?headDay[0].innerHTML = e : headDay[0].innerHTML = day;
                headMonth[0].innerHTML = monthTag[month] +"/" + year;    
                document.getElementById("myh2id").innerHTML =  headDay[0].innerHTML + "/" +   headMonth[0].innerHTML;

         };
        
        Calendar.prototype.drawDays = function() {
            var startDay = new Date(year, month, 1).getDay(),
    //      下面表示这个月总共有几天
                nDays = new Date(year, month + 1, 0).getDate(),
        
                n = startDay;
    //      清除原来的样式和日期
            for(var k = 0; k <42; k++) {
                days[k].innerHTML = '';
                days[k].id = '';
                days[k].className = '';
            }
    
            for(var i  = 1; i <= nDays ; i++) {
                days[n].innerHTML = i; 
                n++;
            }
            
            for(var j = 0; j < 42; j++) {
                if(days[j].innerHTML === ""){
                    
                    days[j].id = "disabled";
                    
                }else if(j === day + startDay - 1){
                    if((this.options && (month === setDate.getMonth()) && (year === setDate.getFullYear())) || (!this.options && (month === today.getMonth())&&(year===today.getFullYear()))){
                        this.drawHeader(day);
                        days[j].id = "today";
                    }
                }
                if(selectedDay){
                    if((j === selectedDay.getDate() + startDay - 1)&&(month === selectedDay.getMonth())&&(year === selectedDay.getFullYear())){
                    days[j].className = "selected";
                    this.drawHeader(selectedDay.getDate());
                    }
                }
            }
        };
        
        Calendar.prototype.clickDay = function(o) {
            var selected = document.getElementsByClassName("selected"),
                len = selected.length;
            if(len !== 0){
                selected[0].className = "";
            }
            o.className = "selected";
            selectedDay = new Date(year, month, o.innerHTML);
            this.drawHeader(o.innerHTML);
            this.setCookie('selected_day', 1);
            
        };
        
        Calendar.prototype.preMonth = function() {
            if(month < 1){ 
                month = 11;
                year = year - 1; 
            }else{
                month = month - 1;
            }
            this.drawHeader(1);
            this.drawDays();
        };
        
        Calendar.prototype.nextMonth = function() {
            if(month >= 11){
                month = 0;
                year =  year + 1; 
            }else{
                month = month + 1;
            }
            this.drawHeader(1);
            this.drawDays();
        };
        
        Calendar.prototype.getOptions = function() {
            if(this.options){
                var sets = this.options.split('-');
                    setDate = new Date(sets[0], sets[1]-1, sets[2]);
                    day = setDate.getDate();
                    year = setDate.getFullYear();
                    month = setDate.getMonth();
            }
        };
        
         Calendar.prototype.reset = function() {
             month = today.getMonth();
             year = today.getFullYear();
             day = today.getDate();
             this.options = undefined;
             this.drawDays();
         };
        
        Calendar.prototype.setCookie = function(name, expiredays){
            if(expiredays) {
                var date = new Date();
                date.setTime(date.getTime() + (expiredays*24*60*60*1000));
                var expires = "; expires=" +date.toGMTString();
            }else{
                var expires = "";
            }
            document.cookie = name + "=" + selectedDay + expires + "; path=/";
        };
        
        Calendar.prototype.getCookie = function(name) {
            if(document.cookie.length){
                var arrCookie  = document.cookie.split(';'),
                    nameEQ = name + "=";
                for(var i = 0, cLen = arrCookie.length; i < cLen; i++) {
                    var c = arrCookie[i];
                    while (c.charAt(0)==' ') {
                        c = c.substring(1,c.length);
                        
                    }
                    if (c.indexOf(nameEQ) === 0) {
                        selectedDay =  new Date(c.substring(nameEQ.length, c.length));
                    }
                }
            }
        };
        var calendar = new Calendar();
        
            
    }, false);
    
    })(jQuery);
    function showTime(){
        var date = new Date();
        var h = date.getHours(); // 0 - 23
        var m = date.getMinutes(); // 0 - 59
        var s = date.getSeconds(); // 0 - 59
        var session = "AM";
        
        if(h == 0){
            h = 12;
        }
        
        if(h > 12){
            h = h - 12;
            session = "PM";
        }
        
        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;
        
        var time = h + ":" + m + ":" + s + " " + session;
        document.getElementById("MyClockDisplay").innerText = time;
        document.getElementById("MyClockDisplay").textContent = time;
        
        setTimeout(showTime, 1000);
        
    }
    
   
/*document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.datepicker');
    var sum = new Date(-8640000000000000)
    var Xmas95 = new Date();
    var day = Xmas95.getDate() + 2;

    //var instances = M.Datepicker.init(elems, {});
    var instances = M.Datepicker.init(elems, { format: "dd/mm/yyyy", minDate: new Date(), maxDate: new Date('Fri Sep ' + day + ' 2021 21:11:14 GMT+0300 (Israel Daylight Time)') });



});
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.datepickeramosh');

    var Xmas95 = new Date();
    var day = Xmas95.getDate() + 2;

    var date2 = new Date().toISOString().substr(0, 19).replace('T', ' ');

    var instances = M.Datepicker.init(elems, {
        disableDayFn: function (date) {
            if (date.getDay() == 0)
                return true;
            else
                return false;
        }, format: "dd/mm/yyyy", minDate: new Date(), maxDate: new Date('Fri Oct ' + day + ' 2021 21:11:14 GMT+0300 (Israel Daylight Time)')
    });



});*/

/*


 update(el, binding, vnode) {
            let time = el.innerHTML;
            let check = vnode.context.bookedTimeaemad.includes(time);
            var today = new Date();
            var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
            var timeh = parseInt(today.getHours());
            var timem = parseInt(today.getMinutes());
            //console.log(timem)
            //console.log(datee)
            let timee = el.innerHTML;
            //console.log(timee[0] + timee[1] + '===' + timeh)
            //console.log(timee[3] + timee[4] + '===' + timem)


            //console.log(parseInt(data[key].time[3] + data[key].time[4]))
            //console.log(data[key].date)
            // console.log(parseInt(document.getElementById("myh2id").innerHTML))
            // console.log(parseInt(date))

            if (parseInt(document.getElementById("myh2id").innerHTML) == parseInt(date)) {
                console.log("out")

                if (parseInt(timee[0] + timee[1]) == timeh) {
                    if (parseInt(timee[3] + timee[4]) == timem || parseInt(timee[3] + timee[4]) <= timem) {
                        console.log("remove" + "" + timee)
                        el.disabled = 'none';

                    }
                } else if (parseInt(timee[0] + timee[1]) <= timeh) {
                    console.log("remove" + "" + timee)
                    el.disabled = 'none';

                }
            }
        },


*/
/************************************************************************************************************************* */
/************************************************************************************************************************* */
/************************************************************************************************************************* */
/************************************************************************************************************************* */
/************************************************************************************************************************* */
/************************************************************************************************************************* */
/************************************************************************************************************************* */
/************************************************************************************************************************* */
/************************************************************************************************************************* */
/************************************************************************************************************************* */
/************************************************************************************************************************* */
/************************************************************************************************************************* */
/************************************************************************************************************************* */
/************************************************************************************************************************* */
/************************************************************************************************************************* */
/************************************************************************************************************************* */
/************************************************************************************************************************* */
/************************************************************************************************************************* */
/************************************************************************************************************************* */
/************************************************************************************************************************* */
/************************************************************************************************************************* */
/************************************************************************************************************************* */
/************************************************************************************************************************* */
/************************************************************************************************************************* */
/************************************************************************************************************************* */
/************************************************************************************************************************* */


