

Vue.component('adminn',
    {
        template: `

<div>
<h2 style="margin-right: 3%; text-align: center;">عباده <span class="material-icons" style="    font-size: 60px;
color: #e4cb96;">
pending_actions
</span></h2>
<input id="myInput" type="text" value="${new Date().getDate() + "/" + parseInt(new Date().getMonth() +1) + "/" + new Date().getFullYear()}">

<table id="myTable">
<thead>
    <tr>
    <th style="text-align: center;">الاسم</th>
    <th style="text-align: center;">اليوم</th>

        <th style="text-align: center;">الساعة</th>
        <th style="text-align: center;">لارسال تنبية</th>

    </tr>
</thead>
<tbody>
    <tr v-for="booking in bookings"  v-show="booking.status == 'pending'">
        <td style="text-align: center;">{{ booking.customerNumber }}{{ booking.namee }}</td>
        <td style="text-align: center;">{{ booking.date }}</td>
        <td style="text-align: center;">{{ booking.time }}</td>
        <td style="text-align: center;"><button class="btn" onclick="moveValue(this);" style="margin-right: 5px;"  >  {{ booking.phone }} </button></td>

    </tr>
</tbody>
</table>

</div>
`,

        data() {
            return {
                bookings: []
            }

        },
        methods:
        {




            fetcher() {

                this.$http.get("https://farid-8c572-default-rtdb.firebaseio.com/login.json").then(function (data) {
                    let savedDate = Object.values(data.body);
                    let requests = [];

                    for (let x = 0; x < savedDate.length; x++) {


                        this.$http.get("https://farid-8c572-default-rtdb.firebaseio.com/appointmentsamosh/" + savedDate[x].customerName + ".json").then(function (data) {

                            return data.json();

                        }).then(function (data) {
                            for (let key in data) {


                                data[key].unique = key;
                                requests.push(data[key]);
                            }

                        });


                    }
                    this.bookings = requests;


                })

            },
            post() {
                alert("هل انت متاكد من محي القائمة باكملها؟؟")

                this.$http.delete(`https://farid-8c572-default-rtdb.firebaseio.com/appointmentsamosh.json`)
            },

        },
        update(event) {
            let key = event.srcElement.dataset.key;
            let status = event.srcElement.id;
            let name = event.srcElement.dataset.keyy;
            (status == 'pending') ? this.statusUpdate = 'updateted' : this.statusUpdate = "pending"
            let reload = () => { this.fetcher(); }






            //console.log(key)
            //console.log(firebase.database().ref('appointments').child(key))
            firebase.database().ref('appointments/' + name).child(key).update(
                {
                    status: this.statusUpdate
                }, function (error) {
                    if (!error) {
                        reload();
                    }
                }
            )





        },
        created() {
            let reload = () => { this.fetcher(); }
            reload();
            document.getElementById("myInput").value = "1"
        },

    });
$(document).ready(function () {
    $("#myInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});
function moveValue(elem) {



    window.open(`https://wa.me/972${parseInt(elem.innerHTML)}?text=مرحباا انها رسالة تذكير من صالون عيماد لقد قمت بحجز موعد لدينا بعد نصف ساعه من الان ... شكراا لك لاختيارنا`);


}
