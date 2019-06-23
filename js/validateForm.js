$('.ajax').on('submit', function (event) {
    event.preventDefault();

    let error_count = 0;

    $('.card input:not(:disabled)').each(function (index, value) {
        if (this.value.length < 4) {
            const invalid_id = `#${this.id}-invalid`;
            $(invalid_id).css('display', 'inline');
            error_count++;
        }
    });

    $('.card input:disabled').each(function (index, value) {
        if (!this.value) {
            const invalid_id = `#${this.id}-invalid`;
            $(invalid_id).css('display', 'inline');
            error_count++;
        }
    });

    if (error_count > 0)
        return false;

    // AJAX
});

$('.card input:not(:disabled)').keyup(function (event) {
    const invalid_id = `#${this.id}-invalid`;
    if (this.id !== 'zipcode' && this.value.length >= 4) {
        $(invalid_id).css('display', 'none');
    } else if (this.id === 'zipcode' && this.value.length === 8) {
        $(invalid_id).css('display', 'none');
    }
});