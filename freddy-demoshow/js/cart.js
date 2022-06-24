
$(document).ready(function () {
    const database = firebase.database();
    const beforeQuery = database.ref('menu/')
    const beforecartQuery = database.ref('orders/')
    const users = database.ref('users/')


    $(document).on('click', '.clms', function () {
        console.log(document.getElementById("ms").value)
        msms = document.getElementById("ms").value;
    });





    users.on('value', function success(data) {
        if (data) {
            let orders = '';
            $.each(data.val(), function (key, value) {
                let

                    namee = value.namee,
                    ide = value.ide,
                    phonee = value.phonee;
                orders += `<div class="order-id ab">
                        <span class="order-name" >${namee}</span>
                        <span class="order-ord">${ide}</span>
                        <span class="order-phonee">${phonee}</span>         
                                        <span class="delete" data-id=${key}>X</span>                                
                                        </div>
                                        <div class="order-details">`;
                /* $.each(total_products, function (key, value) {
                     orders += `<div>${value.item} | ${value.price}</div>`
                 });*/
                orders += `</div>`;


            });

            $('.append-orders').html(orders);
        }
    });
    /**send order */

    $(document).on('click', '.send-oreder', function () {

        var ides = '';
        let idee = $('.order-ord').length;
        for (let j = 0; j < idee; j++) {

            if (document.getElementById("fullname").value == $('.order-ord').eq(j).text()) {


                window.open('welcome.html?leadid=1', 'welcome')


                ides = '1';

            }
        }
        if (ides == '') {
            swal("הזהות שלך אינה מוגדרת במערכת בבקשה לסדר את זה עם בעל הבית ולנסות שוב")
        }
    });

    $(document).on('click', '.send', function () {


        window.open('welcome.html?leadid=1', 'welcome')


    });



});



