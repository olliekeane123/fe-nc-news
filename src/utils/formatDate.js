export function formatDate (timestamp) {
    const responseDate = new Date(timestamp);
    const dateFormatted = new Intl.DateTimeFormat('en-GB').format(responseDate);

    return dateFormatted
}