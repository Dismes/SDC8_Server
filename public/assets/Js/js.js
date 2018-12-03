$('#ContactButton').click(function(){
	var url = "/test"
    $(location).attr("href", url);
    console.log('reeee');
    alert('reeee');
    event.preventDefault();
})