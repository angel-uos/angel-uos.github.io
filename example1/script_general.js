(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"hash": "1c9330691327d86990b5bc76d5ea3f0c7acec4767aabcea4f210e99098a1a906", "definitions": [{"items":[{"camera":"this.media_709FD7ED_7DA2_4A10_41D1_8599D48DDAB2_camera","class":"Video360PlayListItem","media":"this.media_709FD7ED_7DA2_4A10_41D1_8599D48DDAB2","start":"this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false); this.MainViewerPanoramaPlayer.set('displayPlayOverlay', false); this.MainViewerPanoramaPlayer.set('clickAction', 'none'); this.changeBackgroundWhilePlay(this.mainPlayList, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 0)","player":"this.MainViewerPanoramaPlayer","begin":"this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"camera":"this.media_71385BB9_7DA2_3A71_41C2_B5F690AE827B_camera","class":"Video360PlayListItem","media":"this.media_71385BB9_7DA2_3A71_41C2_B5F690AE827B","start":"this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false); this.MainViewerPanoramaPlayer.set('displayPlayOverlay', false); this.MainViewerPanoramaPlayer.set('clickAction', 'none'); this.changeBackgroundWhilePlay(this.mainPlayList, 1, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 1)","player":"this.MainViewerPanoramaPlayer","begin":"this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"camera":"this.media_71D64CCB_7DA2_FE10_41CD_D7D92A6AFDC1_camera","class":"Video360PlayListItem","media":"this.media_71D64CCB_7DA2_FE10_41CD_D7D92A6AFDC1","start":"this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false); this.MainViewerPanoramaPlayer.set('displayPlayOverlay', false); this.MainViewerPanoramaPlayer.set('clickAction', 'none'); this.changeBackgroundWhilePlay(this.mainPlayList, 2, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 2)","player":"this.MainViewerPanoramaPlayer","begin":"this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 0)","end":"this.trigger('tourEnded')"}],"class":"PlayList","id":"mainPlayList"},{"adjacentPanoramas":[{"data":{"overlayID":"overlay_726B9DFF_7C3E_F1C1_41DB_20938BD8F386"},"class":"AdjacentPanorama","panorama":"this.media_71385BB9_7DA2_3A71_41C2_B5F690AE827B","backwardYaw":4.41,"distance":100,"yaw":61.1,"select":"this.overlay_726B9DFF_7C3E_F1C1_41DB_20938BD8F386.get('areas').forEach(function(a){ a.trigger('click') })"},{"data":{"overlayID":"overlay_73D074FC_7C3B_17C7_41D3_E1F46DC56F59"},"class":"AdjacentPanorama","panorama":"this.media_71D64CCB_7DA2_FE10_41CD_D7D92A6AFDC1","backwardYaw":-68,"distance":11.72,"yaw":-28.93,"select":"this.overlay_73D074FC_7C3B_17C7_41D3_E1F46DC56F59.get('areas').forEach(function(a){ a.trigger('click') })"}],"label":trans('media_709FD7ED_7DA2_4A10_41D1_8599D48DDAB2.label'),"hfov":360,"video":["this.videores_71703A95_7DA6_3A30_41C8_128FFA4F491D","this.videores_70CFC1D7_7DA6_C631_41D9_3BB7478984E4"],"pitch":0,"class":"Video360","id":"media_709FD7ED_7DA2_4A10_41D1_8599D48DDAB2","thumbnailUrl":"media/media_709FD7ED_7DA2_4A10_41D1_8599D48DDAB2_t.jpg","data":{"label":"ayutthaya_-_needs_stabilization_and_horizon_correction___360_vr_master_series___free_download (2160p)"},"hfovMax":140,"hfovMin":60,"overlays":["this.overlay_726B9DFF_7C3E_F1C1_41DB_20938BD8F386","this.overlay_73BCF827_7C3F_3E41_41C3_62FEA8957C08","this.overlay_6C3C5071_7C39_0EC1_41D6_24BA0262A258","this.overlay_73D074FC_7C3B_17C7_41D3_E1F46DC56F59","this.overlay_6EEE0ED7_7CD9_13C0_41A5_E4FF5DA3C2B5","this.overlay_6EC2F9FF_7CD9_F1C1_41B1_C2D90C2EC87D","this.overlay_6EDBD8D0_7CDB_1FDF_41D0_F6C9552C5394"],"vfov":180},{"adjacentPanoramas":[{"data":{"overlayID":"overlay_6DECAFBF_7D6E_4E20_41D2_EAE914AFD179"},"class":"AdjacentPanorama","panorama":"this.media_709FD7ED_7DA2_4A10_41D1_8599D48DDAB2","backwardYaw":61.1,"distance":1.7,"yaw":4.41,"select":"this.overlay_6DECAFBF_7D6E_4E20_41D2_EAE914AFD179.get('areas').forEach(function(a){ a.trigger('click') })"}],"label":trans('media_71385BB9_7DA2_3A71_41C2_B5F690AE827B.label'),"hfov":360,"video":["this.videores_703C4EDA_7DA6_5A33_41D5_55B062CBA843","this.videores_700E8FCA_7DA6_7A10_41D7_2B697A45FA55"],"pitch":0,"class":"Video360","id":"media_71385BB9_7DA2_3A71_41C2_B5F690AE827B","thumbnailUrl":"media/media_71385BB9_7DA2_3A71_41C2_B5F690AE827B_t.jpg","data":{"label":"ayutthaya_-_easy_tripod_paint___360_vr_master_series___free_download (2160p)"},"hfovMax":140,"hfovMin":60,"overlays":["this.overlay_6DECAFBF_7D6E_4E20_41D2_EAE914AFD179","this.overlay_6CFDEBAD_7D62_5621_41DE_CD4A4BE4EC0D"],"vfov":180},{"class":"RotationalCamera","enterPointingToHorizon":true,"initialPosition":{"pitch":0,"hfov":120,"class":"RotationalCameraPosition","yaw":0},"id":"media_709FD7ED_7DA2_4A10_41D1_8599D48DDAB2_camera"},{"class":"RotationalCamera","enterPointingToHorizon":true,"initialPosition":{"pitch":0,"hfov":120,"class":"RotationalCameraPosition","yaw":0},"id":"media_71385BB9_7DA2_3A71_41C2_B5F690AE827B_camera"},{"toolTipPaddingRight":6,"playbackBarHeight":10,"subtitlesGap":0,"propagateClick":false,"toolTipTextShadowColor":"#000000","progressBorderRadius":2,"progressBarBackgroundColor":["#3399FF"],"toolTipShadowColor":"#333138","playbackBarBackgroundColor":["#FFFFFF"],"subtitlesBackgroundColor":"#000000","playbackBarBackgroundOpacity":1,"playbackBarProgressBorderSize":0,"subtitlesTextShadowColor":"#000000","playbackBarHeadWidth":6,"playbackBarBackgroundColorDirection":"vertical","subtitlesTop":0,"toolTipBackgroundColor":"#F6F6F6","subtitlesTextShadowHorizontalLength":1,"playbackBarRight":0,"progressBackgroundColor":["#000000"],"data":{"name":"Main Viewer"},"playbackBarProgressBorderRadius":0,"progressBottom":10,"subtitlesTextShadowOpacity":1,"playbackBarProgressBackgroundColor":["#3399FF"],"firstTransitionDuration":0,"vrThumbstickRotationStep":20,"vrPointerColor":"#FFFFFF","playbackBarHeadShadowOpacity":0.7,"progressHeight":2,"progressLeft":"33%","subtitlesFontColor":"#FFFFFF","surfaceReticleColor":"#FFFFFF","playbackBarProgressBackgroundColorRatios":[0],"playbackBarBorderColor":"#FFFFFF","progressBorderSize":0,"playbackBarBorderRadius":0,"playbackBarProgressBorderColor":"#000000","progressBarBorderSize":0,"subtitlesFontSize":"3vmin","subtitlesBackgroundOpacity":0.2,"progressBackgroundColorRatios":[0],"toolTipPaddingTop":4,"progressBarBorderRadius":2,"toolTipPaddingBottom":4,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadBorderRadius":0,"id":"MainViewer","playbackBarLeft":0,"playbackBarBorderSize":0,"toolTipFontSize":"1.11vmin","progressRight":"33%","playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderColor":"#000000","vrPointerSelectionColor":"#FF6600","toolTipFontFamily":"Arial","playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesBorderColor":"#FFFFFF","toolTipFontColor":"#606060","toolTipPaddingLeft":6,"playbackBarHeadHeight":15,"progressOpacity":0.7,"playbackBarHeadShadowBlurRadius":3,"subtitlesBottom":50,"playbackBarHeadShadow":true,"playbackBarHeadBorderSize":0,"progressBarBackgroundColorDirection":"horizontal","subtitlesTextShadowVerticalLength":1,"progressBarBorderColor":"#000000","vrPointerSelectionTime":2000,"progressBarBackgroundColorRatios":[0],"class":"ViewerArea","subtitlesFontFamily":"Arial","toolTipBorderColor":"#767676","width":"100%","minHeight":50,"playbackBarHeadBackgroundColor":["#111111","#666666"],"minWidth":100,"height":"100%","progressBorderColor":"#000000","playbackBarBottom":5},{"adjacentPanoramas":[{"data":{"overlayID":"overlay_6CD9F9DD_7D6F_D260_41D2_6163AB130A5C"},"class":"AdjacentPanorama","panorama":"this.media_709FD7ED_7DA2_4A10_41D1_8599D48DDAB2","backwardYaw":-28.93,"distance":2.37,"yaw":-68,"select":"this.overlay_6CD9F9DD_7D6F_D260_41D2_6163AB130A5C.get('areas').forEach(function(a){ a.trigger('click') })"}],"label":trans('media_71D64CCB_7DA2_FE10_41CD_D7D92A6AFDC1.label'),"hfov":360,"video":["this.videores_706802DF_7DA6_4A31_41D2_DBB3E5E31C10","this.videores_70C3F6F2_7DA7_CBF3_41C6_743190072F4C"],"pitch":0,"class":"Video360","id":"media_71D64CCB_7DA2_FE10_41CD_D7D92A6AFDC1","thumbnailUrl":"media/media_71D64CCB_7DA2_FE10_41CD_D7D92A6AFDC1_t.jpg","data":{"label":"doi_suthep_-_hard_tripod_paint___360_vr_master_series___free_download (2160p)"},"hfovMax":140,"hfovMin":60,"overlays":["this.overlay_6CD9F9DD_7D6F_D260_41D2_6163AB130A5C"],"vfov":180},{"class":"RotationalCamera","enterPointingToHorizon":true,"initialPosition":{"pitch":0,"hfov":120,"class":"RotationalCameraPosition","yaw":0},"id":"media_71D64CCB_7DA2_FE10_41CD_D7D92A6AFDC1_camera"},{"closeButtonRollOverIconLineWidth":2,"titleFontSize":"1.29vmin","veilOpacity":0.4,"closeButtonPressedBackgroundColorRatios":[],"shadowSpread":1,"propagateClick":false,"headerBackgroundOpacity":0,"closeButtonPaddingTop":0,"bodyBorderColor":"#000000","footerBorderSize":0,"data":{"name":"Window11230"},"shadowOpacity":0.5,"closeButtonPressedBackgroundOpacity":0,"closeButtonPressedIconLineWidth":3,"veilColorDirection":"horizontal","headerPaddingTop":10,"closeButtonPressedBorderColor":"#000000","bodyBorderSize":0,"closeButtonBorderColor":"#000000","modal":true,"titlePaddingTop":5,"closeButtonRollOverBackgroundColor":[],"bodyBackgroundOpacity":0,"closeButtonBackgroundOpacity":0,"veilHideEffect":{"easing":"cubic_in_out","class":"FadeOutEffect","duration":500},"titleFontFamily":"Arial","closeButtonPaddingBottom":0,"closeButtonIconHeight":20,"closeButtonRollOverBorderColor":"#000000","closeButtonPressedBorderSize":0,"title":trans('window_6D87FE64_7D62_CE20_41DF_42C745C02055.title'),"headerPaddingBottom":5,"veilShowEffect":{"easing":"cubic_in_out","class":"FadeInEffect","duration":500},"bodyPaddingRight":0,"scrollBarMargin":2,"bodyBackgroundColorRatios":[0,0.8392156862745098,1],"children":["this.WebFrame_706FDEFC_7DA6_3BF0_41DC_DC26AEB98AC2"],"closeButtonIconLineWidth":2,"headerPaddingRight":0,"bodyBackgroundColorDirection":"vertical","headerBackgroundColorRatios":[0,0.09803921568627451,1],"hideEffect":{"easing":"cubic_in_out","class":"FadeOutEffect","duration":500},"titleFontColor":"#000000","shadow":true,"horizontalAlign":"center","titlePaddingRight":5,"headerBorderColor":"#000000","closeButtonRollOverBackgroundColorRatios":[],"showEffect":{"easing":"cubic_in_out","class":"FadeInEffect","duration":500},"footerBackgroundColorDirection":"vertical","footerBackgroundColorRatios":[0,0.8980392156862745,1],"id":"window_6D87FE64_7D62_CE20_41DF_42C745C02055","verticalAlign":"middle","closeButtonBorderSize":0,"overflow":"scroll","backgroundColor":[],"footerBorderColor":"#000000","titleHorizontalAlign":"left","closeButtonRollOverBorderSize":0,"headerBorderSize":0,"titlePaddingLeft":5,"headerPaddingLeft":10,"bodyBackgroundColor":["#000000","#000000","#DDDDDD"],"veilColor":["#000000","#000000"],"borderRadius":5,"footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"closeButtonRollOverIconColor":"#FFFFFF","veilColorRatios":[0,1],"headerBackgroundColorDirection":"vertical","shadowVerticalLength":0,"headerVerticalAlign":"middle","closeButtonBackgroundColor":[],"shadowColor":"#000000","layout":"vertical","scrollBarColor":"#000000","footerBackgroundOpacity":0,"bodyPaddingLeft":0,"backgroundColorRatios":[],"shadowHorizontalLength":3,"footerHeight":5,"closeButtonRollOverBackgroundOpacity":0,"closeButtonBorderRadius":11,"closeButtonPressedIconColor":"#FFFFFF","closeButtonPaddingRight":0,"width":"90%","closeButtonIconColor":"#B2B2B2","closeButtonPaddingLeft":0,"closeButtonIconWidth":20,"closeButtonBackgroundColorRatios":[],"class":"Window","bodyPaddingTop":0,"minWidth":0,"bodyPaddingBottom":0,"minHeight":0,"height":"90%","titlePaddingBottom":5,"closeButtonPressedBackgroundColor":[],"gap":10},{"class":"PanoramaPlayer","mouseControlMode":"drag_rotation","displayPlaybackBar":true,"touchControlMode":"drag_rotation","aaEnabled":true,"arrowKeysAction":"translate","id":"MainViewerPanoramaPlayer","viewerArea":"this.MainViewer"},{"gain":0,"width":3840,"class":"Video360Resource","codec":"h264","height":1920,"type":"video/mp4","url":trans('videores_71703A95_7DA6_3A30_41C8_128FFA4F491D.url'),"framerate":29.97,"posterURL":trans('videores_71703A95_7DA6_3A30_41C8_128FFA4F491D.posterURL'),"id":"videores_71703A95_7DA6_3A30_41C8_128FFA4F491D","bitrate":17677},{"gain":0,"width":4096,"class":"Video360Resource","codec":"h264","height":2048,"type":"video/mp4","url":trans('videores_70CFC1D7_7DA6_C631_41D9_3BB7478984E4.url'),"framerate":29.97,"posterURL":trans('videores_70CFC1D7_7DA6_C631_41D9_3BB7478984E4.posterURL'),"id":"videores_70CFC1D7_7DA6_C631_41D9_3BB7478984E4","bitrate":20112},{"data":{"label":"Image","hasPanoramaAction":true},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_721FBEA4_7C3E_F247_41D7_942399A9ACB4"],"items":[{"pitch":-0.47,"class":"HotspotPanoramaOverlayImage","yaw":61.1,"distance":50,"image":"this.res_6C3C708E_7CCB_0E43_41D3_878A085AED55","playbackPositions":[{"pitch":-0.47,"class":"PanoramaOverlayPlaybackPosition","yaw":61.1,"timestamp":0,"roll":-162,"hfov":12,"vfov":14.56},{"pitch":7.03,"class":"PanoramaOverlayPlaybackPosition","yaw":94.23,"timestamp":19.7,"roll":98.87,"hfov":12,"vfov":14.56}],"scaleMode":"fit_inside","data":{"label":"Image"},"hfov":12,"roll":-162,"vfov":14.56}],"enabledInCardboard":true,"useHandCursor":true,"maps":[],"id":"overlay_726B9DFF_7C3E_F1C1_41DB_20938BD8F386"},{"class":"HotspotPanoramaOverlay","maps":[],"enabledInCardboard":true,"items":["this.HotspotPanoramaOverlayTextImage_73BF9825_7C3F_3E41_41DE_2B1DBE808FB4"],"data":{"label":"Text"},"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_7277F87B_7C3F_3EC1_41D3_D364362DCBEC"],"id":"overlay_73BCF827_7C3F_3E41_41C3_62FEA8957C08"},{"class":"HotspotPanoramaOverlay","maps":[],"enabledInCardboard":true,"items":["this.HotspotPanoramaOverlayTextImage_6C398075_7C39_0EC1_41DC_5954898D642F"],"data":{"label":"Text"},"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_6C36C077_7C39_0EC1_41DA_EB250E29C554"],"id":"overlay_6C3C5071_7C39_0EC1_41D6_24BA0262A258"},{"data":{"label":"Image","hasPanoramaAction":true},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_73D0E4FC_7C3B_17C7_41C5_F57E4D8A8F79"],"items":[{"pitch":-8.24,"class":"HotspotPanoramaOverlayImage","yaw":-28.93,"distance":50,"image":"this.res_6C3C708E_7CCB_0E43_41D3_878A085AED55","playbackPositions":[{"pitch":-8.24,"class":"PanoramaOverlayPlaybackPosition","yaw":-28.93,"timestamp":0,"roll":-81.74,"hfov":12,"vfov":14.56},{"pitch":5.08,"class":"PanoramaOverlayPlaybackPosition","yaw":-27.58,"timestamp":19.7,"roll":89.26,"hfov":14.12,"vfov":10.78}],"scaleMode":"fit_inside","data":{"label":"Image"},"hfov":12,"roll":-81.74,"vfov":14.56}],"enabledInCardboard":true,"useHandCursor":true,"maps":[],"id":"overlay_73D074FC_7C3B_17C7_41D3_E1F46DC56F59"},{"class":"HotspotPanoramaOverlay","maps":[],"items":[{"pitch":-3.09,"class":"HotspotPanoramaOverlayImage","yaw":-161.78,"distance":50,"image":"this.res_6FF880B9_7D66_7223_41BC_5C24C66DDAA9","playbackPositions":[{"pitch":-3.09,"class":"PanoramaOverlayPlaybackPosition","yaw":-161.78,"timestamp":0,"hfov":12,"vfov":12}],"scaleMode":"fit_inside","data":{"label":"Image"},"hfov":12,"vfov":12}],"data":{"label":"Image"},"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_6EEDCEDA_7CD9_13C3_41C0_91CDABFC6667"],"id":"overlay_6EEE0ED7_7CD9_13C0_41A5_E4FF5DA3C2B5"},{"class":"HotspotPanoramaOverlay","maps":[],"items":[{"pitch":-2.92,"class":"HotspotPanoramaOverlayImage","yaw":-177.09,"distance":50,"image":"this.res_6FF8E0BA_7D66_7220_41D8_67DDC8E4DFCA","playbackPositions":[{"pitch":-2.92,"class":"PanoramaOverlayPlaybackPosition","yaw":-177.09,"timestamp":0,"hfov":12,"vfov":12}],"scaleMode":"fit_inside","data":{"label":"Image"},"hfov":12,"vfov":12}],"data":{"label":"Image"},"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_6DAE1A30_7CD9_F25F_41C1_59BD746BC59A"],"id":"overlay_6EC2F9FF_7CD9_F1C1_41B1_C2D90C2EC87D"},{"class":"HotspotPanoramaOverlay","maps":[],"items":[{"pitch":-3.84,"class":"HotspotPanoramaOverlayImage","yaw":-147.08,"distance":50,"image":"this.res_6FF8C0BA_7D66_7220_41DF_38B25D72D06C","playbackPositions":[{"pitch":-3.84,"class":"PanoramaOverlayPlaybackPosition","yaw":-147.08,"timestamp":0,"hfov":12,"vfov":12}],"scaleMode":"fit_inside","data":{"label":"Image"},"hfov":12,"vfov":12}],"data":{"label":"Image"},"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_6EDFE8D9_7CDB_1FC1_41D8_6EAEB163ACE1"],"id":"overlay_6EDBD8D0_7CDB_1FDF_41D0_F6C9552C5394"},{"gain":0,"width":3840,"class":"Video360Resource","codec":"h264","height":1920,"type":"video/mp4","url":trans('videores_703C4EDA_7DA6_5A33_41D5_55B062CBA843.url'),"framerate":29.97,"posterURL":trans('videores_703C4EDA_7DA6_5A33_41D5_55B062CBA843.posterURL'),"id":"videores_703C4EDA_7DA6_5A33_41D5_55B062CBA843","bitrate":17677},{"gain":0,"width":4096,"class":"Video360Resource","codec":"h264","height":2048,"type":"video/mp4","url":trans('videores_700E8FCA_7DA6_7A10_41D7_2B697A45FA55.url'),"framerate":29.97,"posterURL":trans('videores_700E8FCA_7DA6_7A10_41D7_2B697A45FA55.posterURL'),"id":"videores_700E8FCA_7DA6_7A10_41D7_2B697A45FA55","bitrate":20112},{"data":{"label":"Image","hasPanoramaAction":true},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_729CD035_7D6E_5221_41D6_ACF5DE5D4B95"],"items":[{"pitch":-45.06,"class":"HotspotPanoramaOverlayImage","yaw":4.41,"distance":50,"image":"this.res_6FF8D0BA_7D66_7220_41C9_C9A9265554C8","playbackPositions":[{"pitch":-45.06,"class":"PanoramaOverlayPlaybackPosition","yaw":4.41,"timestamp":0,"hfov":17.81,"vfov":5.93}],"scaleMode":"fit_inside","data":{"label":"Image"},"hfov":17.81,"vfov":5.93}],"enabledInCardboard":true,"useHandCursor":true,"maps":[],"id":"overlay_6DECAFBF_7D6E_4E20_41D2_EAE914AFD179"},{"class":"HotspotPanoramaOverlay","maps":[],"items":[{"pitch":-29.7,"class":"HotspotPanoramaOverlayImage","yaw":-178.12,"distance":50,"image":"this.res_6FF800BA_7D66_7220_41CF_36888788F43A","playbackPositions":[{"pitch":-29.7,"class":"PanoramaOverlayPlaybackPosition","yaw":-178.12,"timestamp":0,"hfov":12,"vfov":5.93}],"scaleMode":"fit_inside","data":{"label":"Image"},"hfov":12,"vfov":5.93}],"data":{"label":"Image"},"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_6D147C1E_7D62_51E3_41BE_E7FCF0C29422"],"id":"overlay_6CFDEBAD_7D62_5621_41DE_CD4A4BE4EC0D"},{"gain":0,"width":3840,"class":"Video360Resource","codec":"h264","height":1920,"type":"video/mp4","url":trans('videores_706802DF_7DA6_4A31_41D2_DBB3E5E31C10.url'),"framerate":29.97,"posterURL":trans('videores_706802DF_7DA6_4A31_41D2_DBB3E5E31C10.posterURL'),"id":"videores_706802DF_7DA6_4A31_41D2_DBB3E5E31C10","bitrate":17677},{"gain":0,"width":4096,"class":"Video360Resource","codec":"h264","height":2048,"type":"video/mp4","url":trans('videores_70C3F6F2_7DA7_CBF3_41C6_743190072F4C.url'),"framerate":29.97,"posterURL":trans('videores_70C3F6F2_7DA7_CBF3_41C6_743190072F4C.posterURL'),"id":"videores_70C3F6F2_7DA7_CBF3_41C6_743190072F4C","bitrate":20112},{"data":{"label":"Image","hasPanoramaAction":true},"class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_6CBA89F7_7D6F_D221_41B7_B1231B52DE5E"],"items":[{"pitch":-35.66,"class":"HotspotPanoramaOverlayImage","yaw":-68,"distance":50,"image":"this.res_6FF800BA_7D66_7220_41CF_36888788F43A","playbackPositions":[{"pitch":-35.66,"class":"PanoramaOverlayPlaybackPosition","yaw":-68,"timestamp":0,"hfov":16.72,"vfov":8.18}],"scaleMode":"fit_inside","data":{"label":"Image"},"hfov":16.72,"vfov":8.18}],"enabledInCardboard":true,"useHandCursor":true,"maps":[],"id":"overlay_6CD9F9DD_7D6F_D260_41D2_6163AB130A5C"},{"propagateClick":false,"id":"WebFrame_706FDEFC_7DA6_3BF0_41DC_DC26AEB98AC2","data":{"name":"WebFrame2175"},"backgroundColor":[],"url":trans('WebFrame_706FDEFC_7DA6_3BF0_41DC_DC26AEB98AC2.url'),"backgroundColorRatios":[],"width":"100%","class":"WebFrame","minWidth":0,"minHeight":0,"height":"100%"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.setPlayListSelectedIndex(this.mainPlayList, 1); this.MainViewerPanoramaPlayer.play()","id":"HotspotPanoramaOverlayArea_721FBEA4_7C3E_F247_41D7_942399A9ACB4","displayTooltipInTouchScreens":true},{"levels":[{"width":122,"url":"media/res_6C3C708E_7CCB_0E43_41D3_878A085AED55_0.png","height":148,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_6C3C708E_7CCB_0E43_41D3_878A085AED55"},{"distance":50,"image":{"levels":["this.imlevel_712469AE_7DA5_C610_41D9_D2EB5F49A526"],"class":"ImageResource"},"id":"HotspotPanoramaOverlayTextImage_73BF9825_7C3F_3E41_41DE_2B1DBE808FB4","pitch":1.41,"class":"HotspotPanoramaOverlayImage","yaw":82.06,"data":{"label":"Text"},"playbackPositions":[{"pitch":1.41,"class":"PanoramaOverlayPlaybackPosition","yaw":82.06,"timestamp":0,"hfov":32.27,"vfov":14.47}],"hfov":32.27,"vfov":14.47},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_7277F87B_7C3F_3EC1_41D3_D364362DCBEC","displayTooltipInTouchScreens":true},{"distance":50,"image":{"levels":["this.imlevel_716989F7_7DA6_39F1_41DB_F8B407AC3B37"],"class":"ImageResource"},"id":"HotspotPanoramaOverlayTextImage_6C398075_7C39_0EC1_41DC_5954898D642F","pitch":1.55,"class":"HotspotPanoramaOverlayImage","yaw":-42.17,"data":{"label":"Text"},"playbackPositions":[{"pitch":1.55,"class":"PanoramaOverlayPlaybackPosition","yaw":-42.17,"timestamp":0,"hfov":25.43,"vfov":14.47}],"hfov":25.43,"vfov":14.47},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_6C36C077_7C39_0EC1_41DA_EB250E29C554","displayTooltipInTouchScreens":true},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.setPlayListSelectedIndex(this.mainPlayList, 2); this.MainViewerPanoramaPlayer.play()","id":"HotspotPanoramaOverlayArea_73D0E4FC_7C3B_17C7_41C5_F57E4D8A8F79","displayTooltipInTouchScreens":true},{"levels":[{"width":151,"url":"media/res_6FF880B9_7D66_7223_41BC_5C24C66DDAA9_0.png","height":151,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_6FF880B9_7D66_7223_41BC_5C24C66DDAA9"},{"mapColor":"any","click":"this.openLink(this.translate('LinkBehaviour_6D132B9B_7CD9_F241_41DE_AD027E5EADD6.source'), '_top')","class":"HotspotPanoramaOverlayArea","toolTip":trans('HotspotPanoramaOverlayArea_6EEDCEDA_7CD9_13C3_41C0_91CDABFC6667.toolTip'),"id":"HotspotPanoramaOverlayArea_6EEDCEDA_7CD9_13C3_41C0_91CDABFC6667","displayTooltipInTouchScreens":true},{"levels":[{"width":151,"url":"media/res_6FF8E0BA_7D66_7220_41D8_67DDC8E4DFCA_0.png","height":151,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_6FF8E0BA_7D66_7220_41D8_67DDC8E4DFCA"},{"mapColor":"any","click":"this.openLink(this.translate('LinkBehaviour_6E6F0B00_7CD9_123F_41DE_4F4FDB3A13B8.source'), '_blank')","class":"HotspotPanoramaOverlayArea","toolTip":trans('HotspotPanoramaOverlayArea_6DAE1A30_7CD9_F25F_41C1_59BD746BC59A.toolTip'),"id":"HotspotPanoramaOverlayArea_6DAE1A30_7CD9_F25F_41C1_59BD746BC59A","displayTooltipInTouchScreens":true},{"levels":[{"width":151,"url":"media/res_6FF8C0BA_7D66_7220_41DF_38B25D72D06C_0.png","height":151,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_6FF8C0BA_7D66_7220_41DF_38B25D72D06C"},{"mapColor":"any","click":"this.openLink(this.translate('LinkBehaviour_6D13C2D4_7CD9_33C0_41DE_855D26FDF1D8.source'), '_self')","class":"HotspotPanoramaOverlayArea","toolTip":trans('HotspotPanoramaOverlayArea_6EDFE8D9_7CDB_1FC1_41D8_6EAEB163ACE1.toolTip'),"id":"HotspotPanoramaOverlayArea_6EDFE8D9_7CDB_1FC1_41D8_6EAEB163ACE1","displayTooltipInTouchScreens":true},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.setPlayListSelectedIndex(this.mainPlayList, 0); this.MainViewerPanoramaPlayer.play()","id":"HotspotPanoramaOverlayArea_729CD035_7D6E_5221_41D6_ACF5DE5D4B95","displayTooltipInTouchScreens":true},{"levels":[{"width":168,"url":"media/res_6FF8D0BA_7D66_7220_41C9_C9A9265554C8_0.png","height":83,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_6FF8D0BA_7D66_7220_41C9_C9A9265554C8"},{"levels":[{"width":168,"url":"media/res_6FF800BA_7D66_7220_41CF_36888788F43A_0.png","height":83,"class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_6FF800BA_7D66_7220_41CF_36888788F43A"},{"mapColor":"any","click":"this.WebFrame_706FDEFC_7DA6_3BF0_41DC_DC26AEB98AC2.set('url', this.translate('PopupWebFrameBehaviour_6D9E4E66_7D62_CE23_4170_1E3C362B2C32.url')); this.showWindow(this.window_6D87FE64_7D62_CE20_41DF_42C745C02055, null, false)","class":"HotspotPanoramaOverlayArea","toolTip":trans('HotspotPanoramaOverlayArea_6D147C1E_7D62_51E3_41BE_E7FCF0C29422.toolTip'),"id":"HotspotPanoramaOverlayArea_6D147C1E_7D62_51E3_41BE_E7FCF0C29422","displayTooltipInTouchScreens":true},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.setPlayListSelectedIndex(this.mainPlayList, 0); this.MainViewerPanoramaPlayer.play()","id":"HotspotPanoramaOverlayArea_6CBA89F7_7D6F_D221_41B7_B1231B52DE5E","displayTooltipInTouchScreens":true},{"url":trans('imlevel_712469AE_7DA5_C610_41D9_D2EB5F49A526.url'),"height":322.3,"width":734.34,"class":"ImageResourceLevel","id":"imlevel_712469AE_7DA5_C610_41D9_D2EB5F49A526"},{"url":trans('imlevel_716989F7_7DA6_39F1_41DB_F8B407AC3B37.url'),"height":325.64,"width":578.75,"class":"ImageResourceLevel","id":"imlevel_716989F7_7DA6_39F1_41DB_F8B407AC3B37"}],"propagateClick":false,"id":"rootPlayer","data":{"history":{},"locales":{"en":"locale/en.txt"},"defaultLocale":"en","name":"Player423","textToSpeechConfig":{"pitch":1,"speechOnQuizQuestion":false,"rate":1,"speechOnInfoWindow":false,"volume":1,"stopBackgroundAudio":false,"speechOnTooltip":false},"displayTooltipInTouchScreens":true},"backgroundColor":["#FFFFFF"],"start":"this.init()","scripts":{"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"isPanorama":TDV.Tour.Script.isPanorama,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"openLink":TDV.Tour.Script.openLink,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"clone":TDV.Tour.Script.clone,"initQuiz":TDV.Tour.Script.initQuiz,"registerKey":TDV.Tour.Script.registerKey,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"initAnalytics":TDV.Tour.Script.initAnalytics,"resumePlayers":TDV.Tour.Script.resumePlayers,"setValue":TDV.Tour.Script.setValue,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"downloadFile":TDV.Tour.Script.downloadFile,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getPixels":TDV.Tour.Script.getPixels,"unregisterKey":TDV.Tour.Script.unregisterKey,"historyGoForward":TDV.Tour.Script.historyGoForward,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"existsKey":TDV.Tour.Script.existsKey,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"quizShowScore":TDV.Tour.Script.quizShowScore,"init":TDV.Tour.Script.init,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getMediaByName":TDV.Tour.Script.getMediaByName,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"quizStart":TDV.Tour.Script.quizStart,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"historyGoBack":TDV.Tour.Script.historyGoBack,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getComponentByName":TDV.Tour.Script.getComponentByName,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"quizFinish":TDV.Tour.Script.quizFinish,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"executeJS":TDV.Tour.Script.executeJS,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getMainViewer":TDV.Tour.Script.getMainViewer,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"textToSpeech":TDV.Tour.Script.textToSpeech,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"startMeasurement":TDV.Tour.Script.startMeasurement,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getKey":TDV.Tour.Script.getKey,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getOverlays":TDV.Tour.Script.getOverlays,"showPopupImage":TDV.Tour.Script.showPopupImage,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"createTween":TDV.Tour.Script.createTween,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"shareSocial":TDV.Tour.Script.shareSocial,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"cloneBindings":TDV.Tour.Script.cloneBindings,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"setMapLocation":TDV.Tour.Script.setMapLocation,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"enableVR":TDV.Tour.Script.enableVR,"playAudioList":TDV.Tour.Script.playAudioList,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"showWindow":TDV.Tour.Script.showWindow,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"mixObject":TDV.Tour.Script.mixObject,"translate":TDV.Tour.Script.translate,"disableVR":TDV.Tour.Script.disableVR,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"toggleVR":TDV.Tour.Script.toggleVR,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setLocale":TDV.Tour.Script.setLocale,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex},"defaultMenu":["fullscreen","mute","rotation"],"layout":"absolute","gap":10,"scrollBarColor":"#000000","backgroundColorRatios":[0],"width":"100%","class":"Player","scrollBarMargin":2,"minWidth":0,"minHeight":0,"height":"100%","children":["this.MainViewer"]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2024.0.19.js.map
})();
//Generated with v2024.0.19, Sat Nov 30 2024