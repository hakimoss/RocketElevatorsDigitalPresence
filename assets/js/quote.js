

//hide/show FORM

$(document).ready(function () {
    $('.building_type').hide();
    $('.priceShow').hide();
    
    $('#building-type').change(function () {
        $('.building_type').hide();
        $('.priceShow').show();
        $('#'+$(this).val()).show();
    })
});

//hide/show FORM


//				CALCULE

$(document).ready(function() {
	$("#building-type").change(function() {
		var selectedOption = $("#building-type option:selected").val()
		$("#elevatorShafts").text(0);
		
//						RESIDENTIAL		
		
		if (selectedOption === 'residential') {
			$("#residential").change(function(){

				var residentialApp = $("#residentialApp").val()
				var residentialFloor = $("#residentialFloor").val()
				var resColumn = 1;

				var averageResidential = residentialApp / residentialFloor
				var resCage = (averageResidential  / 6) + 1 ;

				if (residentialFloor >= 20){
					if (residentialFloor % 20 === 0 ) {
						resColumn = residentialFloor / 20
					} else {
						resColumn = Math.trunc(residentialFloor / 20)  + 1
					}
				}	
			
				 var finalRes = Math.round(Math.trunc(resCage) * resColumn)
				
				 if (finalRes === Infinity || NaN){
					 finalRes = 0
				 }
			
				$("#elevatorShafts").text(finalRes);
				
			});
		}
//						RESIDENTIAL		

//						COMMERCIAL		

		if (selectedOption === 'commercial') {
			$("#commercial").change(function(){
				var resultCommercial = $("#commercialElevator").val()
				$("#elevatorShafts").text(resultCommercial);
			  });
		}
//						COMMERCIAL		

//						CORPORATE	

		if (selectedOption === 'corporate') {
			$("#corporate").change(function(){
				var corporateMaxOccupancy = $("#corporateOccupancy").val();
				var corporateFloor = $("#corporateFloor").val();
				var corporateBasements = $("#corporateBasements").val();

				var totalOccupancy = corporateMaxOccupancy * (parseInt(corporateFloor) + parseInt(corporateBasements));
				var elevator = totalOccupancy / 1000;
				var shaft = (parseInt(corporateFloor) + parseInt(corporateBasements)) / 20;
				var averageShaft = elevator / Math.round(shaft)
				var resultCorporate = Math.round(averageShaft) * Math.round(shaft)

				$("#elevatorShafts").text(Math.round(resultCorporate));
			  });
		}
//						CORPORATE	

//						HYBRID	

		if (selectedOption === 'hybrid') {
			$("#hybrid").change(function(){
				var hybridMaxOccupancy = $("#hybridOccupancy").val();
				var hybridFloor = $("#hybridFloor").val();
				var hybridBasements = $("#hybridBasements").val();

				var totalOccupancy = hybridMaxOccupancy * (parseInt(hybridFloor) + parseInt(hybridBasements));
				var hybridElevator = totalOccupancy / 1000;
				var hybridShaft = (parseInt(hybridFloor) + parseInt(hybridBasements)) / 20;
				var averageShaft = hybridElevator / Math.round(hybridShaft)
				var resultHybrid = Math.round(averageShaft) * Math.round(hybridShaft)

				$("#elevatorShafts").text(Math.round(resultHybrid));
			  });
		}
		
	})
	//						HYBRID	


	//////////			BOUTON RADIO



	$("#building-prices").change(function() {
		var selectedRadio = $("#building-prices input[type='radio']:checked");
		
//						STANDARD	

		if (selectedRadio.val() === 'standard'){
			elevatorUnitPrice = 7565
			elevatorTotalPrice = $("#elevatorShafts").text() * elevatorUnitPrice
			installationFees = Math.round(((elevatorTotalPrice * 10 / 100) + Number.EPSILON) * 100) / 100 
			finalPrice = elevatorTotalPrice + installationFees

			$("#elevatorUnitPrice").val(elevatorUnitPrice.toLocaleString() + '$')
			$("#elevatorTotalPrice").val(elevatorTotalPrice.toLocaleString() + '$')
			$("#installationFees").val(installationFees.toLocaleString() + '$')
			$("#finalPrice").val(finalPrice.toLocaleString() + '$')
		}
//						STANDARD	

//						PREMIUM			
		if (selectedRadio.val() === 'premium'){
			elevatorUnitPrice = 12345
			elevatorTotalPrice = $("#elevatorShafts").text() * elevatorUnitPrice
			installationFees = Math.round(((elevatorTotalPrice * 13 / 100) + Number.EPSILON) * 100) / 100 
			finalPrice = elevatorTotalPrice + installationFees

			$("#elevatorUnitPrice").val(elevatorUnitPrice.toLocaleString() + '$')
			$("#elevatorTotalPrice").val(elevatorTotalPrice.toLocaleString() + '$')
			$("#installationFees").val(installationFees.toLocaleString() + '$')
			$("#finalPrice").val(finalPrice.toLocaleString() + '$')
		}
//						PREMIUM	

//						EXCELIUM			
		if (selectedRadio.val() === 'excelium'){
			elevatorUnitPrice = 15400
			elevatorTotalPrice = $("#elevatorShafts").text() * elevatorUnitPrice
			installationFees = Math.round(((elevatorTotalPrice * 16 / 100) + Number.EPSILON) * 100) / 100 
			finalPrice = elevatorTotalPrice + installationFees

			$("#elevatorUnitPrice").val(elevatorUnitPrice.toLocaleString() + '$')
			$("#elevatorTotalPrice").val(elevatorTotalPrice.toLocaleString() + '$')
			$("#installationFees").val(installationFees.toLocaleString() + '$')
			$("#finalPrice").val(finalPrice.toLocaleString() + '$')
			
		}
//						EXCELIUM		


		$("#elevatorAmount").val($("#elevatorShafts").text())
		
	})

	
	//////////			BOUTON RADIO


})
