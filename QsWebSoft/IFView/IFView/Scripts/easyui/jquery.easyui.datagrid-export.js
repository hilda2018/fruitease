$.extend($.fn.datagrid.methods, {
    /**
     * 把当前查询的内容导出
     * @author yangtao
     */
    exportxls: function (jq, param) {

        var tableString = '<table cellspacing="0" class="pb">';
        var frozenColumns = $(jq).datagrid("options").frozenColumns;  // 得到frozenColumns对象
        var columns = $(jq).datagrid("options").columns;    // 得到columns对象
        var nameList = new Array();

        // 载入title
        if (typeof columns != 'undefined' && columns != '') {
            $(columns).each(function (index) {
                tableString += '\n<tr>';
                if (typeof frozenColumns != 'undefined' && typeof frozenColumns[index] != 'undefined') {
                    for (var i = 0; i < frozenColumns[index].length; ++i) {
                        if (!frozenColumns[index][i].hidden) {
                            tableString += '\n<th width="' + frozenColumns[index][i].width + '"';
                            if (typeof frozenColumns[index][i].rowspan != 'undefined' && frozenColumns[index][i].rowspan > 1) {
                                tableString += ' rowspan="' + frozenColumns[index][i].rowspan + '"';
                            }
                            if (typeof frozenColumns[index][i].colspan != 'undefined' && frozenColumns[index][i].colspan > 1) {
                                tableString += ' colspan="' + frozenColumns[index][i].colspan + '"';
                            }
                            if (typeof frozenColumns[index][i].field != 'undefined' && frozenColumns[index][i].field != '') {
                                nameList.push(frozenColumns[index][i]);
                            }
                            tableString += '>' + frozenColumns[0][i].title + '</th>';
                        }
                    }
                }
                for (var i = 0; i < columns[index].length; ++i) {
                    if (!columns[index][i].hidden) {
                        tableString += '\n<th width="' + columns[index][i].width + '"';
                        if (typeof columns[index][i].rowspan != 'undefined' && columns[index][i].rowspan > 1) {
                            tableString += ' rowspan="' + columns[index][i].rowspan + '"';
                        }
                        if (typeof columns[index][i].colspan != 'undefined' && columns[index][i].colspan > 1) {
                            tableString += ' colspan="' + columns[index][i].colspan + '"';
                        }
                        if (typeof columns[index][i].field != 'undefined' && columns[index][i].field != '') {
                            nameList.push(columns[index][i]);
                        }
                        tableString += '>' + columns[index][i].title + '</th>';
                    }
                }
                tableString += '\n</tr>';
            });
        }
        // 载入内容
        var rows = $(jq).datagrid("getRows"); // 这段代码是获取当前页的所有行
        for (var i = 0; i < rows.length; ++i) {
            tableString += '\n<tr>';
            for (var j = 0; j < nameList.length; ++j) {
                var e = nameList[j].field.lastIndexOf('_0');

                tableString += '\n<td';

                var value = rows[i][nameList[j].field];

                if (e + 2 == nameList[j].field.length) {
                    value = rows[i][nameList[j].field.substring(0, e)];
                }

                if (value == null || value == undefined)
                    value = "";
                if (nameList[j].align != 'undefined' && nameList[j].align != '') {
                    tableString += ' style="text-align:' + nameList[j].align + ';"';
                }
                tableString += '>';

                tableString += value;
                tableString += '</td>';
            }
            tableString += '\n</tr>';
        }
        tableString += '\n</table>';

        
        var f = $('<form action="/SystemInterface.ashx?lx=GridExport" method="post" id="fm1"></form>');
        var i = $('<input type="hidden" id="txtContent" name="txtContent" />');
        var l = $('<input type="hidden" id="txtName" name="txtName" />');
        i.val(tableString);
        i.appendTo(f);
        l.val(param);
        l.appendTo(f);
        f.appendTo(document.body).submit();
        f.remove();
    }
});