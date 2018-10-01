$('#form').validate({
			rules: {
				name: {
					required: true,
					minlength: 2
				},
				phone: {
					required: true
				},
				license: {
					required: true
				}
			},
			messages: {
				name: {
					required: "обязательное поле",
				},
				phone: {
					required: "обязательное поле",
				},
				license: "обязательное поле"
			}
});
jQuery(function($){
   $("#input-phone").mask("+7 (999) 99-99-999");
});