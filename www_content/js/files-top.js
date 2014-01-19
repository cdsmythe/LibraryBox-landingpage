var $j = jQuery.noConflict();

$j.getJSON("/dl_statistics_display.php?sortBy=counter&sortOrder=DESC&list_type=top&output_type=json" , function(data) {
    var files_top = $j('p#files-top-default');
    var tbl_body = "<ul>";
    $j.each(data, function() {
        var tbl_row = "";
        tbl_row += '<a href="' + this.url + '">' + this.filename + '</a><br />(' + this.counter + ' download(s))';
        tbl_body += "<li>"+tbl_row+"</li>";                 
    })
    tbl_body += "</ul>"
    files_top.html(tbl_body);

    //Testing
    //console.log(data);
});

