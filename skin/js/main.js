 $(function(){
        $('#adminbuycx').click(function(){
            if($('#name').val()==''){alert('请输入报告编码！'); $("#name").focus(); return false;}
// 			if ($("#tel").val() == "") { alert("请输入你的手机！"); $("#tel").focus(); return false; } 
// 			if (!$("#tel").val().match(/^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[0-9]{1})|(18[0-9]{1})|(19[0-9]{1}))+\d{8})$/)) { alert("手机号码格式不正确！"); $("#tel").focus(); return false;}
	if($('#name').val() == 'BMFHVT82858S5072') {window.location.href = "search.html"}else if($('#name').val() == 'BMFHVT82858S5075'){window.location.href = "search2.html"}else if($('#name').val() == 'BMFHVT82858S5076'){window.location.href = "search3.html"}else if($('#name').val() == 'BMFHVT82858S5077'){window.location.href = "search4.html"}else{window.location.href = "nodata.html"}
        })
    })
