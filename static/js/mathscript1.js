

areaBtn = document.querySelector('#button_area');

areaBtn.addEventListener('click',function(e){
    alert('AREA button clicked');

    txtRADIUS = document.querySelector('#value_radius');
    txtRESULT = document.querySelector('#value_result');

    let result;

    result = 3.14156*parseFloat(txtRADIUS.value)*parseFloat(txtRADIUS.value);

    txtRESULT.value = result;
    
});