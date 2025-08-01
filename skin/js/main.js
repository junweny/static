$(function(){
    $('#adminbuycx').click(function(){
        var reportNumber = $('#reportNumber').val().trim();
        if(reportNumber == ''){
            alert('请输入报告编码！'); 
            $("#reportNumber").focus(); 
            return false;
        }
        
        // 跳转到search.html并传递报告编号参数
        window.location.href = 'search.html?report=' + encodeURIComponent(reportNumber);
    });
    
    // 支持回车键查询
    $('#reportNumber').keypress(function(e){
        if(e.which == 13){
            $('#adminbuycx').click();
        }
    });
    // 获取URL参数中的报告编号
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }
    
    var reportNumber = getUrlParameter('report');
    
    if (!reportNumber) {
        $('#statusText').text('错误：未提供报告编号');
        return;
    }
    
    // 请求统一的certificates.json文件
    $.ajax({
        url: 'data/certificates.json',
        type: 'GET',
        dataType: 'json',
        timeout: 10000,
        success: function(data) {
            // 在certificates对象中查找对应的报告编号
            if (data.certificates && data.certificates[reportNumber]) {
                $('#statusText').text('查询成功');
                displayResult(data.certificates[reportNumber]);
            } else {
                // 未找到数据时跳转到nodata.html
                window.location.href = 'nodata.html';
            }
        },
        error: function(xhr, status, error) {
            // 查询失败时也跳转到nodata.html
            window.location.href = 'nodata.html';
        }
    });
    
    function displayResult(data) {
        var html = '';
        
        // 构建显示内容
        if (data.certificateNumber) {
            html += '<dt>证书编号：' + data.certificateNumber + '</dt>';
        }
        if (data.companyName) {
            html += '<dd>公司名称：' + data.companyName + '</dd>';
        }
        if (data.productName) {
            html += '<dd>产品名称：' + data.productName + '</dd>';
        }
        if (data.issueDate) {
            html += '<dd>签发时间：' + data.issueDate + '</dd>';
        }
        
        // 添加图片和下载链接
        if (data.image) {
            html += '<span><img src="' + data.image + '" height="230">';
        } else {
            html += '<span><img src="image/20250424/nopic.png" height="230">';
        }
        
        if (data.pdfFile) {
            html += '<p><a href="' + data.pdfFile + '" download target="_blank">点击查看</a></p>';
        }
        html += '</span>';
        
        $('#resultContent').html(html);
        $('#resultContainer').show();
    }
});
