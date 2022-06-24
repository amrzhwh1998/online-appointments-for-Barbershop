









Vue.component('amoshwithapdate',
    {
        template: `
    
<div>
<h1 style="margin-right: 3%;">عباده <span class="material-icons" style="    font-size: 60px;
color: #e4cb96;">
pending_actions
</span></h1>
    <input id="myInput" type="text" placeholder="البحث حسب تاريخ يوم / الاسم / الساعة">

<table id="myTablee">
    <thead>
        <tr>
        <th style="text-align: center;">الاسم</th>
        <th style="text-align: center;">اليوم</th>

            <th style="text-align: center;">الساعة</th>
            <th style="text-align: center;">لارسال تنبية</th>
            <th style="text-align: center;">الانتهاء من القاء</th>
            <th style="text-align: center;">الغاء القاء</th>

        </tr>
    </thead>
    <tbody>
        <tr v-for="booking in bookings" v-show="booking.status == 'pending'">
            <td style="text-align: center;">{{ booking.customerNumber }}{{ booking.namee }}</td>
            <td style="text-align: center;">{{ booking.date }}</td>
            <td style="text-align: center;">{{ booking.time }}</td>
            <td style="text-align: center;"><button class="btn" onclick="moveValue(this);" style="margin-right: 5px;"  >  {{ booking.phone }} </button></td>
            <td style="text-align: center;"><a class="btn" style="background:#76ff03 ;" href="javascript:;"><i @click="update" :data-key=booking.unique :id=booking.status  :data-keyy=booking.customerNumber >انتها</i></a></td>
            <td style="text-align: center;"><a class="btn" style="background:#c62828 ;" href="javascript:;"><i @click="removed" :data-key=booking.unique :id=booking.status :data-keyy=booking.customerNumber :data-keyyy=booking.phone :data-keyyyy=booking.date :data-keyyyyy=booking.time>الغاء الدور</i></a></td>

        </tr>
    </tbody>
</table>
<h1 style="margin-right: 3%;">الادوار المنهية <span class="material-icons" style="    font-size: 60px;
color: #c62828">
pending_actions
</span></h1>
<table id="myTablee">
    <thead>
        <tr>
        <th style="text-align: center;">الاسم</th>
        <th style="text-align: center;">اليوم</th>

            <th style="text-align: center;">الساعة</th>
            <th style="text-align: center;">امحي</th>

        </tr>
    </thead>
    <tbody>
        <tr v-for="booking in bookings" v-show="booking.status == 'updateted'">
            <td style="text-align: center;">{{ booking.customerNumber }}{{ booking.namee }}</td>
            <td style="text-align: center;">{{ booking.date }}</td>
            <td style="text-align: center;">{{ booking.time }}</td>
            <td style="text-align: center;"><a class="btn" style="background:#c62828 ;" href="javascript:;"><i @click="removedabdate" :data-key=booking.unique :id=booking.status :data-keyy=booking.customerNumber >امحي</i></a></td>

        </tr>
    </tbody>
</table>



`,

        data() {

            return {
                bookings: [],
                statusUpdate: ""
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
            update(event) {
                let key = event.srcElement.dataset.key;
                let status = event.srcElement.id;
                let name = event.srcElement.dataset.keyy;
                (status == 'pending') ? this.statusUpdate = 'updateted' : this.statusUpdate = "pending"
                let reload = () => { this.fetcher(); }






                //console.log(key)
                //console.log(firebase.database().ref('appointments').child(key))

                firebase.database().ref('appointmentsamosh/' + name).child(key).update(
                    {
                        status: this.statusUpdate
                    }, function (error) {
                        if (!error) {
                            reload();
                        }
                    }
                )





            },
            removed(event) {



                let key = event.srcElement.dataset.key;
                let status = event.srcElement.id;
                let name = event.srcElement.dataset.keyy;
                let reload = () => { this.fetcher(); }
                let phone = event.srcElement.dataset.keyyy;
                let date = event.srcElement.dataset.keyyyy;
                let time = event.srcElement.dataset.keyyyyy;


                firebase.database().ref('appointmentsamosh/' + name).child(key).remove()
                    .then(function () {
                        reload(); alert("تمت عمليت الغاء الحجز بنجاح الان ننتقل لبعث تنبية للعميل")
                        window.open(`https://wa.me/972${phone}?text=مرحباا ${name} لقد تم الغاء موعدك لدينا بتاريخ ${date} الساعة ${time}`);

                    })
                    .catch(function (error) {
                        alert("Remove failed: " + error.message)
                    });

                console.log("تمت عمليت الغاء الحجز بنجاح الان ننتقل لبعث تنبية للعميل")
                window.open(`https://wa.me/972${phone}?text=مرحباا ${name} لقد تم الغاء موعدك لدينا بتاريخ ${date} الساعة ${time}`);

                reload();

            },
            removedabdate(event) {
                let key = event.srcElement.dataset.key;
                let status = event.srcElement.id;
                let name = event.srcElement.dataset.keyy;
                let reload = () => { this.fetcher(); }
                let phone = event.srcElement.dataset.keyyy;
                let date = event.srcElement.dataset.keyyyy;
                let time = event.srcElement.dataset.keyyyyy;


                firebase.database().ref('appointmentsamosh/' + name).child(key).remove()
                    .then(function () {
                        reload();
                    })
                    .catch(function (error) {
                        console.log("Remove failed: " + error.message)
                    });

                alert(" تمت عمليت الغاء الحجز بنجاح ")


                reload();


            }



        },

        created() {
            this.$http.get("https://farid-8c572-default-rtdb.firebaseio.com/login.json").then(function (data) {
                let savedDate = Object.values(data.body);

                console.log(savedDate)
                for (let x = 0; x < savedDate.length; x++) {


                    this.$http.get("https://farid-8c572-default-rtdb.firebaseio.com/appointmentsamosh/" + savedDate[x].customerName + ".json").then(function (data) {

                        return data.json();

                    }).then(function (data) {
                        for (let key in data) {
                            var today = new Date();
                            var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
                            var timeh = parseInt(today.getHours());
                            var timem = parseInt(today.getMinutes());


                            //console.log(timem)
                            //console.log(datee)


                            //console.log(parseInt(data[key].time[3] + data[key].time[4]))
                            //console.log(data[key].date)

                            if (data[key].date == date) {
                                console.log('ok')
                                if ((parseInt(data[key].time[0] + data[key].time[1]) == timeh)) {

                                    if (parseInt(data[key].time[3] + data[key].time[4]) <= timem) {
                                       // firebase.database().ref('appointments/').child(key).remove()
                                        this.$http.get("https://farid-8c572-default-rtdb.firebaseio.com/login.json").then(function (data) {
                                            let savedDate = Object.values(data.body);
                                            for (let x = 0; x < savedDate.length; x++) {

                                                //firebase.database().ref('appointments/' + savedDate[x].customerName).child(key).remove()

                                                firebase.database().ref('appointmentsamosh/' + savedDate[x].customerName).child(key).update(
                                                    {
                                                        status: 'updateted'
                                                    }, function (error) {
                                                        if (!error) {
                                                            reload();
                                                        }
                                                    }
                                                )
                                                break;
                                            }
                                        });
                                    }
                                } else if (parseInt(data[key].time[0] + data[key].time[1]) <= timeh) {
                                    //firebase.database().ref('appointments/').child(key).remove()
                                   
                                           console.log("ysesssssssssssssssssssssssssssssssssssssss")
                                           // firebase.database().ref('appointments/' + savedDate[x].customerName).child(key).remove()
                                           firebase.database().ref('appointmentsamosh/' + savedDate[x].customerName).child(key).update(
                                            {
                                                status: 'updateted'
                                            }, function (error) {
                                                if (!error) {
                                                    reload();
                                                }
                                            }


                                        )
                                    
                                }
                            } else {

                                console.log('no' + data[key].date)

                            }


                        }

                    });


                }


            })
            let reload = () => { this.fetcher(); }
            reload();
        },

    });
$(document).ready(function () {
    $("#myInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#myTablee tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});
function moveValue(elem) {



    window.open(`https://wa.me/972${parseInt(elem.innerHTML)}?text=مرحباا انها رسالة تذكير من صالون عيماد لقد قمت بحجز موعد لدينا بعد نصف ساعه من الان ... شكراا لك لاختيارنا`);


}









