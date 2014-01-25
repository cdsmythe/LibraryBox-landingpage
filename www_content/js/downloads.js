// $.get(
//     "/dl_statistics_display.php?sortOrder=DESC&sortBy=counter&list_type=top&top-max=50",

// );

var $j = jQuery.noConflict();

$j.getJSON("/dl_statistics_display.php?sortBy=counter&sortOrder=DESC&list_type=top&top-max=50&output_type=json" , function(data) {
    var files_top = $j('p#files-top-statspage');
    var tbl_body = '<ul style="list-style: none; -webkit-padding-start:0px;">';
    $j.each(data, function() {
        var tbl_row = "";
        tbl_row += '<span class="sp-tops-title"><a href="' + this.url + '">' + this.filename + '</a></span><br /><span class="sp-tops-count">&nbsp;&nbsp;' + this.counter + ' download(s)</span>';
        tbl_body += "<li>"+tbl_row+"</li>";                 
    })
    tbl_body += "</ul>"
    files_top.html(tbl_body);

    //Testing
    //console.log(data);
});