$(document).ready(function() {
    $('#form').submit(function(e) {
      e.preventDefault();
      let first_name = $('#first_name').val();
      let phone = $('#phone').val();

        let regPh = /^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/;
        let regN = /^[a-zA-Zа-яА-Я]+$/;
        let validPhone = regPh.test(phone);
        let validName = regN.test(first_name);
        if (!validPhone) {
          $('#phone').css('color','#BB0B0B')
          .css('border', '1px solid #BB0B0B')
          .css('transition','0.5s');
          $('#tel').css('color','#BB0B0B')
          .css('transition','0.5s');
        }
        else
        {
          $('#phone').css('color','#FFFFFF')
          .css('border', '1px solid #FFFFFF')
          .css('transition','0.5s');
          $('#tel').css('color','#FFFFFF')
          .css('transition','0.5s');
        }
        if (!validName || first_name.length < 2) {
            $('#first_name').css('color','#BB0B0B')
            .css('border', '1px solid #BB0B0B')
            .css('transition','0.5s');
            $('#name').css('color','#BB0B0B')
            .css('transition','0.5s');
        }
        else
        {
          $('#first_name').css('color','#FFFFFF')
            .css('border', '1px solid #FFFFFF')
            .css('transition','0.5s');
            $('#name').css('color','#FFFFFF')
            .css('transition','0.5s');
        }
      
    });
});