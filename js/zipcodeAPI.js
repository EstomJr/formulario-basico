$('#zipcode').on('input', function () {
    if (this.value.length === 10) {
        const zipcode = this.value.replace(/\D/g, '');

        if (zipcode.length < 8)
            return false;

        const url = `https://viacep.com.br/ws/${zipcode}/json/?callback=?`;

        $.getJSON(url, function (data) {
            if (!("erro" in data)) {
                $('#address').prop('value', `${data.logradouro}, ${data.bairro}`);
                $('#city').prop('value', data.localidade);
                $('#state').prop('value', data.uf);

                $('.card input:disabled').each(function () {
                    const invalid_id = `#${this.id}-invalid`;
                    $(invalid_id).css('display', 'none');
                });
            } else {
                $('#zipcodefound-invalid').css('display', 'inline');
            }
        });
    } else {
        $('#zipcodefound-invalid').css('display', 'none');
        $('#address').prop('value', '');
        $('#city').prop('value', '');
        $('#state').prop('value', '');
    }
});