const masks = {
    zipcode(value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1-$2');
    }
}

$('#zipcode').on('input', (event) => {
    event.target.value = masks[event.target.id](event.target.value);
});