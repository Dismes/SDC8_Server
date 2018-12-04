
$('#ContactButton').click(function(){

    
    var url = "/test"
    var Firstname = $('#FirstName').val();
    var Lastname = $('#LastName').val();
    var Email = $('#Email').val();
    var Subject = $('#Subject').val();
    var Message = $('#Message').val();
    var urlForEmail = Firstname + '/' + Lastname + '/' + Email + '/' + Subject + '/' + Message + '/';


    $(location).attr("href", '/SendEmail/' + urlForEmail);
    
    alert("Thanks for sending me a Email, I will get back to you ASAP")
    return false;
    
})