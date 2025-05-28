jQuery(document).ready(function(){	 

 	
 	jQuery('.ets-submit').click(function(e){
	    e.preventDefault();
	    let form = jQuery(this).closest('form');  
	    let submit = form.serialize();  
	    jQuery(this).prop('disabled', true);
        jQuery.ajax({ 
			url: etsWooQaParams.admin_ajax,
			type: 'POST', 
			dataType: "json",
			data: 'action=ets_post_qusetion_answer&' + submit + "&add_qustion_nonce=" + etsWooQaParams.add_qustion_nonce,
			success: function(res) {   
				jQuery('.ets-submit').prop('disabled', false);
				jQuery(".ets-qa-textarea").val("");
				if( res.status == 1 ) {
					form.find(".ets-display-message").html(res.message);	
				} else {
					form.find(".ets-dis-message-error").html(res.message);
				}    
            }
        }); 
	});

	jQuery(".ets-qa-textarea").on("click", function(){ 
		jQuery(".ets-display-message").text(""); 
		jQuery(".ets-dis-message-error").text("");
	});
	jQuery(".ets-submit").on("click", function(){ 
		jQuery(".ets-display-message").text("");
		jQuery(".ets-dis-message-error").text("");
	});

	jQuery('.ets-qa-load-more').click(function(e) {
    	e.preventDefault();
    	let clickedButton = jQuery(this);
    	let productId = clickedButton.parent().find("[name='sh-prd-id']").val();
    	let formPrdId = jQuery('.custId').val();
   		let accordionList = clickedButton.parent().find('.ets-accordion-list-qa');
   		let tableList = clickedButton.parent().find('.ets-list-table');
    	let qaLength = clickedButton.siblings('.ets_pro_qa_length').find('p').text();
    	let offset = clickedButton.siblings('#ets_product_qa_length').find('p').text();

	    let data = {
	        action: 'ets_product_qa_load_more',
	        offset: offset,
	        load_qa_nonce: etsWooQaParams.load_qa_nonce
	    };

	    if (productId) {
	        data.product_id = productId;
	    } else {
	        data.product_id = formPrdId;
	    }

	    if (offset == '') {
	        offset = 0;
	    }
    

	    jQuery.ajax({
	        url: etsWooQaParams.admin_ajax,
	        type: 'GET',
	        dataType: "JSON",
	        data: data,
	        success: function(res) {
	            offset = res.offset;
	            accordionList.append(res.htmlData);
	            tableList.append(res.htmlData);
	            clickedButton.siblings('#ets_product_qa_length').find('p').html(offset).hide();
	            if(offset >= qaLength ){
		            clickedButton.hide();
		        }
	        }
	    });
	});	
}); 

jQuery(document).on('click','.ets-accordion',function(){
    jQuery(".ets-panel").slideUp();
    jQuery(this).next().slideToggle();
})
