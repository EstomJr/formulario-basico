$('#zipcode').keyup(function () {
    if (this.value.length === 8) {

        const url = `http://viacep.com.br/ws/${this.value}/json/?callback=callback_name`

        $.ajax({
            url: url,
            dataType: 'jsonp',
            crossDomain: true,
            contentType: "application/json",
            statusCode: {
                200: function (data) {
                    $('#address').prop('value', `${data.logradouro}, ${data.bairro}`);
                    $('#city').prop('value', data.localidade);
                    $('#state').prop('value', data.uf);

                    $('.card input:disabled').each(function () {
                        const invalid_id = `#${this.id}-invalid`;
                        $(invalid_id).css('display', 'none');
                    });
                } // Ok
                , 400: function (msg) { alert(msg); } // Bad Request
                , 404: function (msg) { alert("CEP não encontrado!"); } // Not Found
            }
        });
    }
});