/**LOGIN ADMIN */
Vue.component('login', {
    props: ["id"],
    template: `
    <div :class="'animated fadeInRight component login' + id">
    
   <div v-if="!afterSubmit">
            
   <form v-on:submit.prevent>
       
      
       <div class="input filed col s6">
       <label for="phone" class="customerinfo">الاسم</label>

           <input type="text" class="LoginName validate" v-mode="customerName" id="phone">

       </div>



       <div class="input filed col s6">
       <label for="phone" class="customerinfo">الرقم</label>

       <input type="number" class="num validate" v-mode="customerNumber" id="phone">

       </div>


   </div>


      
       
    <button @click="post" class="btn btn-primary" type="submit" style=" margin-right: 3%;   margin-top: 10%;

    font-size: large;" name="action">
    
    ارسل
    </button>

    <input type="text" id="myInput" onkeyup="myFunction()" style="margin-top:20px;" placeholder="חפש לפי שם" title="Type in a name">

    <table id="myTable" >
    <thead>
        <tr>
            <th style="text-align: center;">שם</th>

            <th style="text-align: center;"> מ"ס טלפון</th>

            <th id="my1mhak" style="text-align: center;">למחוק</th>

        </tr>
    </thead>
    <tbody>
        <tr v-for="booking in bookings" >
            <td id="bookdate" style="text-align: center;">{{ booking.customerName }}</td>
            <td id="booktime" style="text-align: center;">{{ booking.customerPhone}}</td>
            <td style="text-align: center;"><a class="btn" id="my1mhak"  style="background:#c62828 ;" href="javascript:;"><i  @click="removed" :data-key=booking.unique :data-keyy=booking.customerName>מחק</i></a></td>
        </tr>
       
    </tbody>
    
</table>

    

   </form> 
   
    </div>

     </div>
    `,
    data() {

        return {
            afterSubmit: false,
            customerPhone: "",
            customerName: "",
            dateSelected: 'notselected',
            date: '',
            usersList: [],
            allTime: [9, "-9:30", 10, "-10:30", 11, "-11:30", 12, "-12:30", 13, "-13:30", 14, "-14:30", 15, "-15:30", 16, "-16:30", 17, "-17:30"],
            validationName: false,
            validationDate: false,
            validationTime: false,
            bookings: [],

        }

    },

    methods: {

        post() {

            let num = document.getElementsByClassName('num')[0].value;
            let LoginName = document.getElementsByClassName('LoginName')[0].value;
            let reload = () => { this.fetcher(); }
            let iForif = 0;
            this.$http.get('https://farid-8c572-default-rtdb.firebaseio.com/login.json').then(function (data) {
                let savedDate = Object.values(data.body);
                for (let x = 0; x < savedDate.length; x++) {

                    if (savedDate[x].customerPhone == num || savedDate[x].customerName == LoginName) {
                        iForif = 1;
                        alert("فشلت عملية اضافة عميل : يوجد اسم او كلمة مطابقة في النضام ")
                    }

                }
                if (iForif == 0) {
                    this.$http.post('https://farid-8c572-default-rtdb.firebaseio.com/login.json',
                        {
                            "customerPhone": num,
                            "customerName": LoginName,



                        }).then(function (data) {
                            reload()

                            alert("تمت اضافة العميل بنجاح")
                        })
                }
            })


        },
        fetcher() {
            console.log("this.bookings")

            this.$http.get("https://farid-8c572-default-rtdb.firebaseio.com/login.json").then(function (data) {
                return data.json();
            }).then(function (data) {
                let requests = [];
                for (let key in data) {
                    data[key].unique = key;
                    requests.push(data[key]);
                }
                this.bookings = requests;
                console.log(this.bookings)
            });
        },
        removed(event) {
            let key = event.srcElement.dataset.key;
            let reload = () => { this.fetcher(); }
            firebase.database().ref('login/').child(key).remove()

                .then(function () {
                    alert("تم الغاء حساب العميل")
                    reload()
                })
                .catch(function (error) {
                    alert(" יש בעיה תקשורת נא להתקשר למתכנת תודה....")

                });


        },


    },
    created() {
        let reload = () => { this.fetcher(); }
        reload()

    }


});
function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}