const DateFormat = {
    LocalDate(date) {
        const dateFR = new Date(date).toLocaleString('fr-FR', { year: 'numeric', month: '2-digit', day: '2-digit'});
        return dateFR;
    },
    
};

export default DateFormat;