export function getView(viewScreen) {
    $.get('views/$(viewScreen)/$(viewScreen).html',
    
    function (value) {
        $("#body").html(value);
    });
};
