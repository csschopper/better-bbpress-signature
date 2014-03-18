jQuery(document).ready(function($){
    $('#b3p_show_signature').click(function(){
       $('#b3p_forum_signature').slideToggle();
    });
    $('#add_signature').click(function(){
        jQuery.post(formAjax.ajaxurl, {action:'add_b3p_signature', signature_text:$('#b3p_signature').val()}, function(response) {
		$('#bbps_message').html(response);
                //alert(response);
	});
    })
});