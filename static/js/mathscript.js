

volumeBtn = document.querySelector('#button_volume');

volumeBtn.addEventListener('click',function(e){
    alert('VOLUME button clicked');

    txtRADIUS = document.querySelector('#value_radius');
    txtHEIGHT = document.querySelector('#value_height');
    txtRESULT = document.querySelector('#value_result');

    let result;

    result = 3.14156*parseFloat(txtRADIUS.value)*parseFloat(txtRADIUS.value)*parseFloat(txtHEIGHT.value);

    txtRESULT.value = result;
});