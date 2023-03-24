//<script type="text/javascript">
        emailjs.init('hKtTxsZ9mavbgiN37')
       //(function () {
           // emailjs.init("");
      //  })();
    //</script>
  //  <script type="text/javascript">
        window.onload = function () {
         //   var checados = [];
          //  $(".preferencia").click(function (e) {
          //      checados = [];
          //      $.each($("input[name='preferencia[]']:checked"), function () {
            //        checados.push($(this).val());
           //     });
          //  });
            document.getElementById('contact-form').addEventListener('submit', function (event) {
                event.preventDefault();
              //  var error = document.getElementById('msgErrorPreferencia');

                // if (checados.length < 1) {
                //    error.innerHTML = 'Por favor, selecione uma ou mais preferência de contato';
               //     return;
               // } else {
              //      error.innerHTML = '';
             //   } 

                $("#btnEnviar").css('display', 'none');
                $('#enviando').css('display', 'flex');
            //    checados.join(", ");

                 // these IDs from the previous steps          

                const serviceID = 'service_pbzbxgb';
                const templateID = 'template_g2zx9jt';

                emailjs.sendForm(serviceID, templateID, this
                
            ).then(function () {
                      //  checados = [];
                        Swal.fire({
                            icon: 'success',
                            title: 'Enviado! Em breve entraremos em contato com você.',
                            showConfirmButton: true,
                            timer: 5000
                        })
                        $("#btnEnviar").css('display', 'block');
                        $('#enviando').css('display', 'none');
                    }, function (error) {
                        Swal.fire({
                            icon: 'warning',
                            title: 'Algo deu errado!',
                            showConfirmButton: true,
                            timer: 5000
                        })
                    })
            });
        }
    //</script>