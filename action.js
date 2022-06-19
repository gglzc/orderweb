$(function(){
  $('#sendorder').click(function(e){
  var status = true;
  var name = $('#name').val();
  var number = $('#number').val();   
  var order = '';
  var ps='';
  var price = 0;
  $('input').focus(function(){
    $(this).css('border','');
  });
  $('.select').each(function(index) {
    if($(this).val() !== ''){
      price += Number($(this).data('price')) * Number($(this).val());
    }
  });
  order = order.substring(0, order.length - 1);
  
  if(name == ''){
    $('#name').css('border','1px solid #ff0000');
    status = false;
  }
  if(phone == ''){
    $('#number').css('border','1px solid #ff0000');
    status = false;
  }
  if(order == ''){
    alert('請選擇訂購品項喔');
    status = false;
  }
  if(status){
    var currentdate = new Date();
    var filltime = currentdate.getFullYear() + "/"
          + (currentdate.getMonth() + 1) + "/"
          + currentdate.getDate() + "  "
          + currentdate.getHours() + ":"
          + currentdate.getMinutes() + ":"
          + currentdate.getSeconds();

    var data = {
      'name' : name,
      'pS':ps,
      'time': filltime,
      'order': order,
      'price': price,
    }
    send(data);
  }
});
});


function send(data){
$.ajax({
  type: "get",
  url: "https://script.google.com/macros/s/AKfycbxaJNtPeM4rGy7Ut_9CML2p62-o0Vpuyf-RSKiM3vGt5vfN3wQ/exec",
  data: data,
  dataType: "JSON",
  success: function (response) {
    console.log(response);
    alert('感謝您的訂購！！');
  }
});
}