
$(document).ready(function () {
    const database = firebase.database();
    const beforeQuery = database.ref('menu/')
    const users = database.ref('users/')
    /************* */

    const notifications = (message) => {
        if (message == 'fillall') {
            $('.fillall').fadeIn(1000);

            setTimeout(function () {
                $('.fillall').fadeOut(1000);
            }, 3500);
        }

        if (message == 'inserted successfully') {
            $('.inserted').fadeIn(1000);

            setTimeout(function () {
                $('.inserted').fadeOut(1000);
            }, 3500);
        }

        if (message == 'updated') {
            $('.updated').fadeIn(1000);

            setTimeout(function () {
                $('.updated').fadeOut(1000);
            }, 3500);
        }
    }






    /**users */
    $(document).on('click', '.userclick', function (e) {

        e.preventDefault();

        const /*categorye = $('[name=categorye]').val(),*/
            namee = $('[name=namee]').val(),
            ide = $('[name=ide]').val(),
            phonee = $('[name=phonee]').val(),
            newid = users.push();
        if (!ide) {
            notifications('fillall');
        } else {
            newid.set({
                /*categorye: categorye,*/
                namee: namee,
                ide: ide,

                phonee: phonee,

            },
                function (error) {
                    if (!error) {
                        notifications("inserted successfully");
                        $('[name=namee]').val("");
                        $('[name=ide]').val("");
                        $('[name=phonee]').val("");

                    }
                    else {
                        console.log('Not Saved');
                    }

                });
        }
    });

    users.on('value', function success(data) {
        if (data) {
            let
                categoryee = '';

            $.each(data.val(), function (key, value) {
                let id = key,
                    /* categoryee = value['categoryee'],*/
                    phonee = value['phonee'],
                    namee = value['namee'],
                    ide = value['ide'];
                if (categoryee == 'categoryee') {
                    categoryee += `<div class="product-box">
                <div id= ${key}>
                <div class="title">${phonee}</div>

                <div class="title">${namee}</div>
                <div class="title">${ide}</div></div><hr>
                <div data-id=${key} class="deletee">del</div>
                </div>
                </div>
                `;
                }

            });

            $('.categoryee').html(categoryee);
        }
    });
});
