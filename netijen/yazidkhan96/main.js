$(document).ready(function(){
	$('#Hsatuan').keyup(function(){
		var qty =parseInt($('#qty').val());
		var satuan = parseInt($('#Hsatuan').val());
		var subtotal = qty*satuan;

		$('#sbtotal').val(subtotal);
	})
	
	$('#addMore').on('click', function() {
              var data = $("#tb tr:eq(1)").clone(true).appendTo("#tb");
              data.find("input").val('');
     });

	$('#datepicker').datepicker({
	            uiLibrary: 'bootstrap4'
	        });


	$(".number-decimal").on("input", function(evt) {
	   var self = $(this);
	   self.val(self.val().replace(/[^0-9\.]/g, ''));
	   if ((evt.which != 46 || self.val().indexOf('.') != -1) && (evt.which < 48 || evt.which > 57)) 
	   {
	     evt.preventDefault();
	   }
 	});



});
	window.setTimeout("waktu()",1000);  
 	function waktu(){
 		var jam = new Date();
 		setTimeout("waktu()",1000); 
 		document.getElementById("inp-jam").innerHTML = jam.getHours()+":"+jam.getMinutes();
 	}
