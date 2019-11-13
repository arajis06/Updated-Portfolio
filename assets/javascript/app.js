new WOW().init();

// MDB Lightbox Init
$(function () {
  $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
});

//doughnut-MDbootstrap
// var ctxD = document.getElementById("doughnutChart").getContext('2d');
// var myLineChart = new Chart(ctxD, {
//   type: 'doughnut',
//   data: {
//     labels: ["HTML", "CSS", "Javascript", "JQuery", "Node.js"],
//     datasets: [{
//       data: [200, 170, 130, 90, 20],
//       backgroundColor: ["#9933CC", "#46BFBD", "#ec407a", "#949FB1", "#4D5360"],
//       hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#03a9f4", "#4a148c", "#616774"]
//     }]
//   },
//   options: {
//     responsive: true
//   }
// });

$(function()
{
    function after_form_submitted(data) 
    {
        if(data.result == 'success')
        {
            $('form#contact-form').hide();
            $('#success_message').show();
            $('#error_message').hide();
        }
        else
        {
            $('#error_message').append('<ul></ul>');

            jQuery.each(data.errors,function(key,val)
            {
                $('#error_message ul').append('<li>'+key+':'+val+'</li>');
            });
            $('#success_message').hide();
            $('#error_message').show();

            //reverse the response on the button
            $('button[type="button"]', $form).each(function()
            {
                $btn = $(this);
                label = $btn.prop('orig_label');
                if(label)
                {
                    $btn.prop('type','submit' ); 
                    $btn.text(label);
                    $btn.prop('orig_label','');
                }
            });
            
        }//else
    }

	$('#contact-form').submit(function(e)
      {
        e.preventDefault();

        $form = $(this);
        //show some response on the button
        $('send-btn[type="submit"]', $form).each(function()
        {
            $btn = $(this);
            $btn.prop('type','button' ); 
            $btn.prop('orig_label',$btn.text());
            $btn.text('Sending ...');
        });
        

                    $.ajax({
                type: "POST",
                url: 'mail.php',
                data: $form.serialize(),
                success: after_form_submitted,
                dataType: 'json' 
            });        
        
      });	
});
