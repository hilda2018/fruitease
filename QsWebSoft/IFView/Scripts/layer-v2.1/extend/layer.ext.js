/// <reference path="../../jquery-1.7.1.min.js" />
/*!
 
 @Name: layer v1.9.x-ext
 @Author: 贤心
 @Api：http://sentsin.com/jquery/layer

 */

; !function () {

    layer.use('skin/layer.ext.css', function () {
        layer.layui_layer_extendlayerextjs = true;
    });

    var cache = layer.cache || {}, skin = function (type) {
        return (cache.skin ? (' ' + cache.skin + ' ' + cache.skin + '-' + type) : '');
    }

    //仿系统prompt
    layer.prompt = function (options, yes) {
        options = options || {};
        if (typeof options === 'function') yes = options;
        var prompt, content = options.formType == 2 ? '<textarea class="layui-layer-input">' + (options.value || '') + '</textarea>' : function () {
            return '<input type="' + (options.formType == 1 ? 'password' : 'text') + '" class="layui-layer-input" value="' + (options.value || '') + '">';
        }();
        return layer.open($.extend({
            btn: ['&#x786E;&#x5B9A;', '&#x53D6;&#x6D88;'],
            content: content,
            skin: 'layui-layer-prompt' + skin('prompt'),
            success: function (layero) {
                prompt = layero.find('.layui-layer-input');
                prompt.focus();
            }, yes: function (index) {
                var value = prompt.val();
                if (value === '') {
                    prompt.focus();
                } else if (value.length > (options.maxlength || 500)) {
                    layer.tips('&#x6700;&#x591A;&#x8F93;&#x5165;' + (options.maxlength || 500) + '&#x4E2A;&#x5B57;&#x6570;', prompt, { tips: 1 });
                } else {
                    yes && yes(value, index, prompt);
                }
            }
        }, options));
    };

    //tab层
    layer.tab = function (options) {
        options = options || {};
        var tab = options.tab || {};


        var $ul = $('<ul class="layui-layer-tabmain">');
        //var $firstli = $('<li class="layui-layer-tabli xubox_tab_layer">');


        for (var ii = 0; ii < tab.length; ii++) {
            var $li = $('<li class="layui-layer-tabli">');
            if (ii == 0)
                $li = $('<li class="layui-layer-tabli xubox_tab_layer">');
            console.info(typeof tab[ii].content)
            if (typeof tab[ii].content == "object") {
                if ($(tab[ii].content).is(":hidden"))
                    $(tab[ii].content).show();
                $li.html(tab[ii].content);
            }
            else
                $li.append(tab[ii].content);
            $ul.append($li)
        }
        $("body").append($ul)

        return layer.open($.extend({
            type: 1,
            skin: 'layui-layer-tab' + skin('tab'),
            title: function () {
                var len = tab.length, ii = 1, str = '';
                if (len > 0) {
                    str = '<span class="layui-layer-tabnow">' + tab[0].title + '</span>';
                    for (; ii < len; ii++) {
                        str += '<span>' + tab[ii].title + '</span>';
                    }
                }
                return str;
            }(),
            //content: '<ul class="layui-layer-tabmain">' + function () {
            //    var len = tab.length, ii = 1, str = '';
            //    if (len > 0) {
            //        str = '<li class="layui-layer-tabli xubox_tab_layer">' + (tab[0].content || 'no content') + '</li>';
            //        for (; ii < len; ii++) {
            //            str += '<li class="layui-layer-tabli">' + (tab[ii].content || 'no  content') + '</li>';
            //        }
            //    }
            //    return str;
            //}() + '</ul>',
            content: $ul,
            success: function (layero) {
                var btn = layero.find('.layui-layer-title').children();
                var main = layero.find('.layui-layer-tabmain').children();
                btn.on('mousedown', function (e) {
                    e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
                    var othis = $(this), index = othis.index();
                    othis.addClass('layui-layer-tabnow').siblings().removeClass('layui-layer-tabnow');
                    main.eq(index).show().siblings().hide();
                });
            }
        }, options));
    };

    //相册层
    layer.photos = function (options, loop, key) {
        var dict = {};
        options = options || {};
        if (!options.photos) return;
        var type = options.photos.constructor === Object;
        var photos = type ? options.photos : {}, data = photos.data || [];
        var start = photos.start || 0;
        dict.imgIndex = start + 1;

        if (!type) { //页面直接获取
            var parent = $(options.photos), img = parent.find(options.img || 'img');
            if (img.length === 0) return;
            loop || parent.find(photos.img || 'img').each(function (index) {
                var othis = $(this);
                data.push({
                    alt: othis.attr('alt'),
                    pid: othis.attr('layer-pid'),
                    src: othis.attr('layer-src') || othis.attr('src'),
                    thumb: othis.attr('src')
                });
                othis.on('click', function () {
                    layer.photos($.extend(options, {
                        photos: {
                            start: index,
                            data: data,
                            tab: options.tab
                        },
                        full: options.full
                    }), true);
                });
            });

            //不直接弹出
            if (!loop) return;

        } else if (data.length === 0) {
            layer.msg('&#x6CA1;&#x6709;&#x56FE;&#x7247;');
            return;
        }

        //上一张
        dict.imgprev = function (key) {
            dict.imgIndex--;
            if (dict.imgIndex < 1) {
                dict.imgIndex = data.length;
            }
            dict.tabimg(key);
        };

        //下一张
        dict.imgnext = function (key, errorMsg) {
            dict.imgIndex++;
            if (dict.imgIndex > data.length) {
                dict.imgIndex = 1;
                if (errorMsg) { return };
            }
            dict.tabimg(key)
        };

        //方向键
        dict.keyup = function (event) {
            if (!dict.end) {
                var code = event.keyCode;
                event.preventDefault();
                if (code === 37) {
                    dict.imgprev(true);
                } else if (code === 39) {
                    dict.imgnext(true);
                } else if (code === 27) {
                    layer.close(dict.index);
                }
            }
        }

        //切换
        dict.tabimg = function (key) {
            if (data.length <= 1) return;
            photos.start = dict.imgIndex - 1;
            layer.close(dict.index);
            layer.photos(options, true, key);
        }

        //一些动作
        dict.event = function () {
            //dict.bigimg.hover(function () {
            //    dict.imgsee.show();
            //}, function () {
            //    dict.imgsee.hide();
            //});

            dict.bigimg.find('.layui-layer-imgprev').on('click', function (event) {
                event.preventDefault();
                dict.imgprev();
            });

            dict.bigimg.find('.layui-layer-imgnext').on('click', function (event) {
                event.preventDefault();
                dict.imgnext();
            });

            dict.btndownload.on('click', function (event) {
                window.open(data[start].src)
            });

            $(document).on('keyup', dict.keyup);
        };

        //图片预加载
        function loadImage(url, callback, error) {
            var img = new Image();
            img.onload = function () {
                img.onload = null;
                callback(img);
            };
            img.onerror = function (e) {
                img.onerror = null;
                error(e);
            };
            img.src = url;
        };

        dict.loadi = layer.load(1, {
            shade: 'shade' in options ? false : 0.9,
            scrollbar: false
        });

        loadImage(data[start].src, function (img) {
            layer.close(dict.loadi);
            var zoom = 100;
            var areasize = function () {
                var imgarea = [img.width, img.height];
                var winarea = [$(window).width() - 100, $(window).height() - 100];

                if (!options.full && imgarea[0] > winarea[0]) {
                    imgarea[1] = winarea[0] * imgarea[1] / imgarea[0];
                    imgarea[0] = winarea[0];
                    zoom = parseInt((imgarea[0] / img.width * 100))
                }
                if (!options.full && imgarea[1] > winarea[1]) {
                    imgarea[0] = winarea[1] * imgarea[0] / imgarea[1];
                    imgarea[1] = winarea[1];
                    zoom = parseInt(imgarea[1] / img.height * 100)
                }
                return [imgarea[0] + 'px', imgarea[1] + 30 + 'px'];
            }();

            var $tbar = $('<ul class="layui-layer-imgtbar">');
            var $btn_zoom = $('<li>');
            $btn_zoom.append('<span class="b-before"></span>');
            $btn_zoom.append('<span hidefocus="true" title="放大图片" id="btnZoomIn" href="javascript:void(0);" class="bar-btn"><i></i></span>')
            $btn_zoom.append('<label id="zoomScale">' + zoom + '%</label>')
            $btn_zoom.append('<span hidefocus="true" title="缩小图片" id="btnZoomOut"  href="javascript:void(0);" class="bar-btn"><i></i></span>')
            $tbar.append($btn_zoom);
            var $btn_imgtoggle = $('<li class="bar-btn btn-imgtoggle">');
            $btn_imgtoggle.html("原始尺寸");
            $btn_imgtoggle.append("<i>");
            $btn_imgtoggle.prev('<span class="b-before"></span>');
            $tbar.append($btn_imgtoggle);

            var $btn_rotate = $('<li class="bar-btn btn-rotate">');
            $btn_rotate.html("旋转");
            $btn_rotate.append("<i>");
            $btn_rotate.prev('<span class="b-before"></span>');
            $tbar.append($btn_rotate);

            var $btn_download = $('<li class="bar-btn btn-download">');
            $btn_download.html("下载");
            $btn_download.append("<i>");
            $btn_download.prev('<span class="b-before"></span>');
            $tbar.append($btn_download);

            dict.index = layer.open($.extend({
                type: 1,
                area: areasize,
                title: false,
                shade: 0.5,
                shadeClose: true,
                closeBtn: false,
                move: '.layui-layer-phimg img',
                moveType: 1,
                scrollbar: false,
                moveOut: true,
                shift: Math.random() * 5 | 0,
                skin: 'layui-layer-photos' + skin('photos'),
                content: '<div class="layui-layer-phimg">'
                    + '<img src="' + data[start].src + '" alt="' + (data[start].alt || '') + '" layer-pid="' + data[start].pid + '">'
                    + '<div class="layui-layer-imgsee">'
                        + (data.length > 1 ? '<span class="layui-layer-imguide"><a href="javascript:;" class="layui-layer-iconext layui-layer-imgprev"></a><a href="javascript:;" class="layui-layer-iconext layui-layer-imgnext"></a></span>' : '')
                        + '<div class="layui-layer-imgbar" style="display:' + (true ? 'block' : '') + '"><span class="layui-layer-imgtit"><a href="javascript:;" title = "' + (data[start].alt || '') + '">' + (data[start].alt || '') + '</a><em>' + dict.imgIndex + '/' + data.length + '</em></span>'
                        //+ $tbar.prop('outerHTML')
                        + '</div>'
                    + '</div>'
                + '</div>',
                success: function (layero, index) {
                    dict.bigimg = layero.find('.layui-layer-phimg');
                    dict.imgsee = layero.find('.layui-layer-imguide,.layui-layer-imgbar');
                    dict.btndownload = layero.find('.btn-download');
                    dict.btnimgtoggle = layero.find('.btn-imgtoggle');
                    dict.btnrotate = layero.find('.btn-rotate');
                    dict.btnzoomin = layero.find('#btnZoomIn');
                    dict.btnzoomout = layero.find('#btnZoomOut');
                    dict.img = layero.find('img');

                    dict.event(layero);
                    options.tab && options.tab(data[start], layero);
                }, end: function () {
                    dict.end = true;
                    $(document).off('keyup', dict.keyup);
                }
            }, options));
        }, function () {
            layer.close(dict.loadi);
            layer.msg('&#x5F53;&#x524D;&#x56FE;&#x7247;&#x5730;&#x5740;&#x5F02;&#x5E38;<br>&#x662F;&#x5426;&#x7EE7;&#x7EED;&#x67E5;&#x770B;&#x4E0B;&#x4E00;&#x5F20;&#xFF1F;', {
                time: 30000,
                btn: ['下一张', '不看了'],
                yes: function () {
                    data.length > 1 && dict.imgnext(true, true);
                }
            });
        });
    };

}();
