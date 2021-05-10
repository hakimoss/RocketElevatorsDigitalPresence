
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





$(document).ready(function() {
	$("#building-type").change(function() {
		var selectedOption = $("#building-type option:selected").val()
		$("#elevatorShafts").text(0);
		
		
		if (selectedOption === 'residential') {
			$("#residential").change(function(){

				var residentialApp = $("#residentialApp").val()
				var residentialFloor = $("#residentialFloor").val()
				var residentialBasement = $("#residentialBasement").val()

				var resultResidential = residentialApp / (residentialFloor - residentialBasement)

				var residentialMultiply = 1;

				if (residentialFloor >= 20){
					residentialMultiply = residentialFloor / 20 + 1
					console.log(residentialMultiply)	
				}
				$("#elevatorShafts").text(Math.round((resultResidential / 6) * residentialMultiply) / 1 );
			});
		}

		if (selectedOption === 'commercial') {
			$("#commercial").change(function(){
				var resultCommercial = $("#commercialElevator").val()
				$("#elevatorShafts").text(resultCommercial);
			  });
			console.log('commercial marche')
		}

		if (selectedOption === 'corporate') {
			$("#corporate").change(function(){
				var corporateMaxOccupancy = $("#corporateOccupancy").val();
				var corporateFloor = $("#corporateFloor").val();
				var corporateBasements = $("#corporateBasements").val();

				var totalOccupancy = corporateMaxOccupancy * (corporateFloor + corporateBasements);
				var elevator = totalOccupancy / 1000;
				var shaft = (corporateFloor + corporateBasements) / 20;
				var averageShaft = elevator / shaft
				var resultCommercial = averageShaft * shaft

				$("#elevatorShafts").text(resultCommercial);
			  });
			console.log('corporate marche')
		}

		if (selectedOption === 'hybrid') {
			$("#hybrid").change(function(){
				var hybridMaxOccupancy = $("#hybridOccupancy").val();
				var hybridFloor = $("#hybridFloor").val();
				var hybridBasements = $("#hybridBasements").val();

				var totalOccupancy = hybridMaxOccupancy * (hybridFloor + hybridBasements);
				var elevator = totalOccupancy / 1000;
				var shaft = (hybridFloor + hybridBasements) / 20;
				var averageShaft = elevator / shaft
				var resultCommercial = averageShaft * shaft
				
				$("#elevatorShafts").text(resultCommercial);
			  });
			console.log('hybrid marche')
		}
		
	})



	$("#building-prices").change(function() {
		

		var selectedRadio = $("#building-prices input[type='radio']:checked");
		
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


		



		console.log(selectedRadio.val())


		$("#elevatorAmount").val($("#elevatorShafts").text())
		
	})

	



})




