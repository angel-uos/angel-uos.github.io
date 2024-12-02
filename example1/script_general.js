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
var script = {"children":["this.MainViewer"],"class":"Player","minHeight":0,"minWidth":0,"backgroundColorRatios":[0],"id":"rootPlayer","hash": "24236a7d25f4ba5cc1e5d536c74616b8259bccc1050b244cb2ab699c11af8fbf", "definitions": [{"items":[{"camera":"this.media_709FD7ED_7DA2_4A10_41D1_8599D48DDAB2_camera","media":"this.media_709FD7ED_7DA2_4A10_41D1_8599D48DDAB2","start":"this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false); this.MainViewerPanoramaPlayer.set('displayPlayOverlay', false); this.MainViewerPanoramaPlayer.set('clickAction', 'none'); this.changeBackgroundWhilePlay(this.mainPlayList, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 0)","class":"Video360PlayListItem","player":"this.MainViewerPanoramaPlayer","begin":"this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer)"},{"camera":"this.media_71385BB9_7DA2_3A71_41C2_B5F690AE827B_camera","media":"this.media_71385BB9_7DA2_3A71_41C2_B5F690AE827B","start":"this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false); this.MainViewerPanoramaPlayer.set('displayPlayOverlay', false); this.MainViewerPanoramaPlayer.set('clickAction', 'none'); this.changeBackgroundWhilePlay(this.mainPlayList, 1, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 1)","class":"Video360PlayListItem","player":"this.MainViewerPanoramaPlayer","begin":"this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer)"},{"camera":"this.media_71D64CCB_7DA2_FE10_41CD_D7D92A6AFDC1_camera","media":"this.media_71D64CCB_7DA2_FE10_41CD_D7D92A6AFDC1","end":"this.trigger('tourEnded')","class":"Video360PlayListItem","player":"this.MainViewerPanoramaPlayer","begin":"this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer)","start":"this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false); this.MainViewerPanoramaPlayer.set('displayPlayOverlay', false); this.MainViewerPanoramaPlayer.set('clickAction', 'none'); this.changeBackgroundWhilePlay(this.mainPlayList, 2, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 2)"}],"class":"PlayList","id":"mainPlayList"},{"initialPosition":{"hfov":120,"pitch":0,"class":"RotationalCameraPosition","yaw":0},"enterPointingToHorizon":true,"class":"RotationalCamera","id":"media_71385BB9_7DA2_3A71_41C2_B5F690AE827B_camera"},{"class":"Video360","label":trans('media_71385BB9_7DA2_3A71_41C2_B5F690AE827B.label'),"thumbnailUrl":"media/media_71385BB9_7DA2_3A71_41C2_B5F690AE827B_t.jpg","id":"media_71385BB9_7DA2_3A71_41C2_B5F690AE827B","video":["this.videores_94DBC509_86FE_D1A7_41DB_40E45046226D"],"pitch":0,"vfov":180,"loop":true,"data":{"label":"ayutthaya_-_easy_tripod_paint___360_vr_master_series___free_download (2160p)"},"overlays":["this.overlay_6DECAFBF_7D6E_4E20_41D2_EAE914AFD179","this.overlay_6CFDEBAD_7D62_5621_41DE_CD4A4BE4EC0D"],"hfov":360,"hfovMax":140,"adjacentPanoramas":[{"data":{"overlayID":"overlay_6DECAFBF_7D6E_4E20_41D2_EAE914AFD179"},"panorama":"this.media_709FD7ED_7DA2_4A10_41D1_8599D48DDAB2","yaw":4.41,"distance":1.7,"class":"AdjacentPanorama","select":"this.overlay_6DECAFBF_7D6E_4E20_41D2_EAE914AFD179.get('areas').forEach(function(a){ a.trigger('click') })","backwardYaw":94.23}],"hfovMin":60},{"mouseControlMode":"drag_rotation","class":"PanoramaPlayer","touchControlMode":"drag_rotation","viewerArea":"this.MainViewer","displayPlaybackBar":true,"arrowKeysAction":"translate","aaEnabled":true,"id":"MainViewerPanoramaPlayer"},{"playbackBarProgressBorderRadius":0,"class":"ViewerArea","progressBorderSize":0,"playbackBarProgressBackgroundColor":["#3399FF"],"progressLeft":"33%","minHeight":50,"minWidth":100,"vrThumbstickRotationStep":20,"vrPointerSelectionColor":"#FF6600","playbackBarHeadShadowOpacity":0.7,"subtitlesBottom":50,"data":{"name":"Main Viewer"},"subtitlesFontFamily":"Arial","playbackBarProgressBackgroundColorRatios":[0],"progressBarBorderRadius":2,"progressBarBorderSize":0,"playbackBarBorderColor":"#FFFFFF","playbackBarBorderRadius":0,"toolTipPaddingLeft":6,"progressBackgroundColorRatios":[0],"toolTipFontSize":"1.11vmin","toolTipPaddingBottom":4,"playbackBarProgressBorderColor":"#000000","toolTipPaddingTop":4,"progressRight":"33%","playbackBarHeadHeight":15,"playbackBarHeadBorderRadius":0,"playbackBarLeft":0,"toolTipFontFamily":"Arial","progressOpacity":0.7,"vrPointerSelectionTime":2000,"playbackBarHeadBorderColor":"#000000","playbackBarHeadShadowColor":"#000000","playbackBarBorderSize":0,"subtitlesTop":0,"surfaceReticleColor":"#FFFFFF","progressBarBackgroundColorDirection":"horizontal","playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadowBlurRadius":3,"toolTipFontColor":"#606060","subtitlesGap":0,"playbackBarHeadShadow":true,"toolTipBorderColor":"#767676","subtitlesBackgroundColor":"#000000","progressBarBorderColor":"#000000","playbackBarHeadBorderSize":0,"toolTipBackgroundColor":"#F6F6F6","progressBarBackgroundColorRatios":[0],"subtitlesFontSize":"3vmin","subtitlesTextShadowColor":"#000000","id":"MainViewer","playbackBarHeadBackgroundColor":["#111111","#666666"],"vrPointerColor":"#FFFFFF","toolTipPaddingRight":6,"progressBorderColor":"#000000","playbackBarBottom":5,"playbackBarBackgroundOpacity":1,"subtitlesBorderColor":"#FFFFFF","progressBarBackgroundColor":["#3399FF"],"subtitlesTextShadowOpacity":1,"propagateClick":false,"toolTipTextShadowColor":"#000000","subtitlesTextShadowVerticalLength":1,"progressBackgroundColor":["#000000"],"progressBorderRadius":2,"subtitlesBackgroundOpacity":0.2,"subtitlesTextShadowHorizontalLength":1,"toolTipShadowColor":"#333138","playbackBarBackgroundColor":["#FFFFFF"],"subtitlesFontColor":"#FFFFFF","playbackBarHeight":10,"progressBottom":10,"width":"100%","firstTransitionDuration":0,"height":"100%","playbackBarHeadWidth":6,"progressHeight":2,"playbackBarProgressBorderSize":0,"playbackBarBackgroundColorDirection":"vertical","playbackBarRight":0,"surfaceReticleSelectionColor":"#FFFFFF"},{"initialPosition":{"hfov":120,"pitch":0,"class":"RotationalCameraPosition","yaw":0},"enterPointingToHorizon":true,"class":"RotationalCamera","id":"media_709FD7ED_7DA2_4A10_41D1_8599D48DDAB2_camera"},{"class":"Video360","label":trans('media_709FD7ED_7DA2_4A10_41D1_8599D48DDAB2.label'),"thumbnailUrl":"media/media_709FD7ED_7DA2_4A10_41D1_8599D48DDAB2_t.jpg","id":"media_709FD7ED_7DA2_4A10_41D1_8599D48DDAB2","video":["this.videores_94D854CA_86FE_D0A5_41DD_F740C5820269"],"pitch":0,"vfov":180,"loop":true,"data":{"label":"ayutthaya_-_needs_stabilization_and_horizon_correction___360_vr_master_series___free_download (2160p)"},"overlays":["this.overlay_726B9DFF_7C3E_F1C1_41DB_20938BD8F386","this.overlay_73BCF827_7C3F_3E41_41C3_62FEA8957C08","this.overlay_6C3C5071_7C39_0EC1_41D6_24BA0262A258","this.overlay_73D074FC_7C3B_17C7_41D3_E1F46DC56F59","this.overlay_6EEE0ED7_7CD9_13C0_41A5_E4FF5DA3C2B5","this.overlay_6EC2F9FF_7CD9_F1C1_41B1_C2D90C2EC87D","this.overlay_6EDBD8D0_7CDB_1FDF_41D0_F6C9552C5394","this.overlay_966C7F85_86FE_50AF_41D5_419E2F001B2A","this.overlay_97B36F18_86FF_D1A5_41C4_A0A62AAD99E8"],"hfov":360,"hfovMax":140,"adjacentPanoramas":[{"data":{"overlayID":"overlay_726B9DFF_7C3E_F1C1_41DB_20938BD8F386"},"panorama":"this.media_71385BB9_7DA2_3A71_41C2_B5F690AE827B","yaw":94.23,"distance":100,"class":"AdjacentPanorama","select":"this.overlay_726B9DFF_7C3E_F1C1_41DB_20938BD8F386.get('areas').forEach(function(a){ a.trigger('click') })","backwardYaw":4.41},{"data":{"overlayID":"overlay_73D074FC_7C3B_17C7_41D3_E1F46DC56F59"},"panorama":"this.media_71D64CCB_7DA2_FE10_41CD_D7D92A6AFDC1","yaw":-27.58,"distance":100,"class":"AdjacentPanorama","select":"this.overlay_73D074FC_7C3B_17C7_41D3_E1F46DC56F59.get('areas').forEach(function(a){ a.trigger('click') })","backwardYaw":-68}],"hfovMin":60},{"initialPosition":{"hfov":120,"pitch":0,"class":"RotationalCameraPosition","yaw":0},"enterPointingToHorizon":true,"class":"RotationalCamera","id":"media_71D64CCB_7DA2_FE10_41CD_D7D92A6AFDC1_camera"},{"footerBackgroundColorRatios":[0,0.8980392156862745,1],"bodyBorderColor":"#000000","class":"Window","shadowOpacity":0.5,"footerHeight":5,"titleFontColor":"#000000","closeButtonPaddingLeft":0,"veilShowEffect":{"class":"FadeInEffect","easing":"cubic_in_out","duration":500},"minHeight":0,"closeButtonBorderSize":0,"minWidth":0,"veilHideEffect":{"class":"FadeOutEffect","easing":"cubic_in_out","duration":500},"footerBackgroundColorDirection":"vertical","titlePaddingLeft":5,"headerBorderColor":"#000000","closeButtonBackgroundColorRatios":[],"bodyBackgroundColorDirection":"vertical","footerBackgroundOpacity":0,"data":{"name":"Window11230"},"closeButtonRollOverBorderSize":0,"closeButtonPaddingTop":0,"shadowVerticalLength":0,"headerPaddingTop":10,"titleHorizontalAlign":"left","closeButtonRollOverIconLineWidth":2,"bodyPaddingLeft":0,"modal":true,"overflow":"scroll","closeButtonRollOverIconColor":"#FFFFFF","footerBorderSize":0,"closeButtonBackgroundColor":[],"closeButtonPressedBackgroundOpacity":0,"title":trans('window_6D87FE64_7D62_CE20_41DF_42C745C02055.title'),"veilColor":["#000000","#000000"],"headerVerticalAlign":"middle","bodyBorderSize":0,"titlePaddingRight":5,"veilColorRatios":[0,1],"children":["this.WebFrame_94CF7627_86FE_D3EB_41D3_1EA2FF218C7F"],"closeButtonIconColor":"#B2B2B2","headerBackgroundColorDirection":"vertical","footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"closeButtonRollOverBorderColor":"#000000","verticalAlign":"middle","bodyPaddingTop":0,"closeButtonIconWidth":20,"borderRadius":5,"headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"closeButtonPressedBorderColor":"#000000","closeButtonPressedBackgroundColor":[],"veilColorDirection":"horizontal","horizontalAlign":"center","titlePaddingTop":5,"closeButtonPressedBackgroundColorRatios":[],"headerBackgroundOpacity":0,"bodyPaddingBottom":0,"closeButtonRollOverBackgroundColor":[],"closeButtonRollOverBackgroundOpacity":0,"headerPaddingLeft":10,"backgroundColorRatios":[],"id":"window_6D87FE64_7D62_CE20_41DF_42C745C02055","closeButtonPressedBorderSize":0,"scrollBarMargin":2,"backgroundColor":[],"scrollBarColor":"#000000","shadow":true,"titleFontSize":"1.29vmin","veilOpacity":0.4,"closeButtonPaddingBottom":0,"hideEffect":{"class":"FadeOutEffect","easing":"cubic_in_out","duration":500},"bodyBackgroundColorRatios":[0,0.8392156862745098,1],"bodyBackgroundOpacity":0,"propagateClick":false,"closeButtonPressedIconLineWidth":3,"showEffect":{"class":"FadeInEffect","easing":"cubic_in_out","duration":500},"headerBackgroundColorRatios":[0,0.09803921568627451,1],"footerBorderColor":"#000000","closeButtonBorderColor":"#000000","bodyBackgroundColor":["#000000","#000000","#DDDDDD"],"closeButtonBackgroundOpacity":0,"shadowColor":"#000000","headerPaddingBottom":5,"closeButtonBorderRadius":11,"closeButtonPaddingRight":0,"width":"90%","closeButtonIconHeight":20,"height":"90%","layout":"vertical","closeButtonRollOverBackgroundColorRatios":[],"titlePaddingBottom":5,"closeButtonIconLineWidth":2,"gap":10,"closeButtonPressedIconColor":"#FFFFFF","shadowHorizontalLength":3,"headerBorderSize":0,"bodyPaddingRight":0,"titleFontFamily":"Arial","headerPaddingRight":0,"shadowSpread":1},{"class":"Video360","label":trans('media_71D64CCB_7DA2_FE10_41CD_D7D92A6AFDC1.label'),"thumbnailUrl":"media/media_71D64CCB_7DA2_FE10_41CD_D7D92A6AFDC1_t.jpg","id":"media_71D64CCB_7DA2_FE10_41CD_D7D92A6AFDC1","video":["this.videores_94DAD52D_86FE_D1FF_41D8_221F22E8E2C6"],"pitch":0,"vfov":180,"loop":true,"data":{"label":"doi_suthep_-_hard_tripod_paint___360_vr_master_series___free_download (2160p)"},"overlays":["this.overlay_6CD9F9DD_7D6F_D260_41D2_6163AB130A5C"],"hfov":360,"hfovMax":140,"adjacentPanoramas":[{"data":{"overlayID":"overlay_6CD9F9DD_7D6F_D260_41D2_6163AB130A5C"},"panorama":"this.media_709FD7ED_7DA2_4A10_41D1_8599D48DDAB2","yaw":-68,"distance":2.37,"class":"AdjacentPanorama","select":"this.overlay_6CD9F9DD_7D6F_D260_41D2_6163AB130A5C.get('areas').forEach(function(a){ a.trigger('click') })","backwardYaw":-27.58}],"hfovMin":60},{"gain":0,"width":2048,"bitrate":5028,"codec":"h264","height":1024,"class":"Video360Resource","posterURL":trans('videores_94DBC509_86FE_D1A7_41DB_40E45046226D.posterURL'),"type":"video/mp4","url":trans('videores_94DBC509_86FE_D1A7_41DB_40E45046226D.url'),"framerate":29.97,"id":"videores_94DBC509_86FE_D1A7_41DB_40E45046226D"},{"data":{"label":"Image","hasPanoramaAction":true},"maps":[],"id":"overlay_6DECAFBF_7D6E_4E20_41D2_EAE914AFD179","areas":["this.HotspotPanoramaOverlayArea_729CD035_7D6E_5221_41D6_ACF5DE5D4B95"],"items":[{"pitch":-45.06,"yaw":4.41,"playbackPositions":[{"pitch":-45.06,"vfov":5.93,"yaw":4.41,"timestamp":0,"hfov":17.81,"class":"PanoramaOverlayPlaybackPosition"}],"image":"this.res_6FF8D0BA_7D66_7220_41C9_C9A9265554C8","distance":50,"scaleMode":"fit_inside","vfov":5.93,"class":"HotspotPanoramaOverlayImage","hfov":17.81,"data":{"label":"Image"}}],"class":"HotspotPanoramaOverlay","useHandCursor":true,"enabledInCardboard":true},{"data":{"label":"Image"},"maps":[],"id":"overlay_6CFDEBAD_7D62_5621_41DE_CD4A4BE4EC0D","items":[{"pitch":-29.7,"yaw":-178.12,"playbackPositions":[{"pitch":-29.7,"vfov":5.93,"yaw":-178.12,"timestamp":0,"hfov":12,"class":"PanoramaOverlayPlaybackPosition"}],"image":"this.res_6FF800BA_7D66_7220_41CF_36888788F43A","distance":50,"scaleMode":"fit_inside","vfov":5.93,"class":"HotspotPanoramaOverlayImage","hfov":12,"data":{"label":"Image"}}],"class":"HotspotPanoramaOverlay","useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_6D147C1E_7D62_51E3_41BE_E7FCF0C29422"]},{"gain":0,"width":2048,"bitrate":5028,"codec":"h264","height":1024,"class":"Video360Resource","posterURL":trans('videores_94D854CA_86FE_D0A5_41DD_F740C5820269.posterURL'),"type":"video/mp4","url":trans('videores_94D854CA_86FE_D0A5_41DD_F740C5820269.url'),"framerate":29.97,"id":"videores_94D854CA_86FE_D0A5_41DD_F740C5820269"},{"data":{"label":"Image","hasPanoramaAction":true},"maps":[],"id":"overlay_726B9DFF_7C3E_F1C1_41DB_20938BD8F386","areas":["this.HotspotPanoramaOverlayArea_721FBEA4_7C3E_F247_41D7_942399A9ACB4"],"items":[{"pitch":-0.47,"yaw":61.1,"data":{"label":"Image"},"playbackPositions":[{"pitch":7.03,"vfov":14.56,"roll":98.87,"opacity":0,"yaw":94.23,"timestamp":0,"hfov":12,"class":"PanoramaOverlayPlaybackPosition"},{"pitch":7.03,"vfov":14.56,"roll":98.87,"opacity":0,"yaw":94.23,"timestamp":19.7,"hfov":12,"class":"PanoramaOverlayPlaybackPosition"},{"pitch":7.03,"vfov":14.56,"roll":98.87,"yaw":94.23,"timestamp":19.7,"hfov":12,"class":"PanoramaOverlayPlaybackPosition"}],"image":"this.res_6C3C708E_7CCB_0E43_41D3_878A085AED55","class":"HotspotPanoramaOverlayImage","distance":50,"scaleMode":"fit_inside","vfov":14.56,"hfov":12,"roll":-162}],"class":"HotspotPanoramaOverlay","useHandCursor":true,"enabledInCardboard":true},{"data":{"label":"Text"},"maps":[],"id":"overlay_73BCF827_7C3F_3E41_41C3_62FEA8957C08","items":["this.HotspotPanoramaOverlayTextImage_73BF9825_7C3F_3E41_41DE_2B1DBE808FB4"],"class":"HotspotPanoramaOverlay","useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_7277F87B_7C3F_3EC1_41D3_D364362DCBEC"],"enabledInCardboard":true},{"data":{"label":"Text"},"maps":[],"id":"overlay_6C3C5071_7C39_0EC1_41D6_24BA0262A258","items":["this.HotspotPanoramaOverlayTextImage_6C398075_7C39_0EC1_41DC_5954898D642F"],"class":"HotspotPanoramaOverlay","useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_6C36C077_7C39_0EC1_41DA_EB250E29C554"],"enabledInCardboard":true},{"data":{"label":"Image","hasPanoramaAction":true},"maps":[],"id":"overlay_73D074FC_7C3B_17C7_41D3_E1F46DC56F59","areas":["this.HotspotPanoramaOverlayArea_73D0E4FC_7C3B_17C7_41C5_F57E4D8A8F79"],"items":[{"pitch":-8.24,"yaw":-28.93,"data":{"label":"Image"},"playbackPositions":[{"pitch":5.08,"vfov":10.78,"roll":89.26,"opacity":0,"yaw":-27.58,"timestamp":0,"hfov":14.12,"class":"PanoramaOverlayPlaybackPosition"},{"pitch":5.08,"vfov":10.78,"roll":89.26,"opacity":0,"yaw":-27.58,"timestamp":19.7,"hfov":14.12,"class":"PanoramaOverlayPlaybackPosition"},{"pitch":5.08,"vfov":10.78,"roll":89.26,"yaw":-27.58,"timestamp":19.7,"hfov":14.12,"class":"PanoramaOverlayPlaybackPosition"}],"image":"this.res_6C3C708E_7CCB_0E43_41D3_878A085AED55","class":"HotspotPanoramaOverlayImage","distance":50,"scaleMode":"fit_inside","vfov":14.56,"hfov":12,"roll":-81.74}],"class":"HotspotPanoramaOverlay","useHandCursor":true,"enabledInCardboard":true},{"data":{"label":"Image"},"maps":[],"id":"overlay_6EEE0ED7_7CD9_13C0_41A5_E4FF5DA3C2B5","items":[{"pitch":-3.09,"yaw":-161.78,"playbackPositions":[{"pitch":-3.09,"vfov":12,"yaw":-161.78,"timestamp":0,"hfov":12,"class":"PanoramaOverlayPlaybackPosition"}],"image":"this.res_6FF880B9_7D66_7223_41BC_5C24C66DDAA9","distance":50,"scaleMode":"fit_inside","vfov":12,"class":"HotspotPanoramaOverlayImage","hfov":12,"data":{"label":"Image"}}],"class":"HotspotPanoramaOverlay","useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_6EEDCEDA_7CD9_13C3_41C0_91CDABFC6667"]},{"data":{"label":"Image"},"maps":[],"id":"overlay_6EC2F9FF_7CD9_F1C1_41B1_C2D90C2EC87D","items":[{"pitch":-2.92,"yaw":-177.09,"playbackPositions":[{"pitch":-2.92,"vfov":12,"yaw":-177.09,"timestamp":0,"hfov":12,"class":"PanoramaOverlayPlaybackPosition"}],"image":"this.res_6FF8E0BA_7D66_7220_41D8_67DDC8E4DFCA","distance":50,"scaleMode":"fit_inside","vfov":12,"class":"HotspotPanoramaOverlayImage","hfov":12,"data":{"label":"Image"}}],"class":"HotspotPanoramaOverlay","useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_6DAE1A30_7CD9_F25F_41C1_59BD746BC59A"]},{"data":{"label":"Image"},"maps":[],"id":"overlay_6EDBD8D0_7CDB_1FDF_41D0_F6C9552C5394","items":[{"pitch":-3.84,"yaw":-147.08,"playbackPositions":[{"pitch":-3.84,"vfov":12,"yaw":-147.08,"timestamp":0,"hfov":12,"class":"PanoramaOverlayPlaybackPosition"}],"image":"this.res_6FF8C0BA_7D66_7220_41DF_38B25D72D06C","distance":50,"scaleMode":"fit_inside","vfov":12,"class":"HotspotPanoramaOverlayImage","hfov":12,"data":{"label":"Image"}}],"class":"HotspotPanoramaOverlay","useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_6EDFE8D9_7CDB_1FC1_41D8_6EAEB163ACE1"]},{"data":{"label":"Arrow 02 Right-Up"},"maps":[],"id":"overlay_966C7F85_86FE_50AF_41D5_419E2F001B2A","items":[{"pitch":3.14,"yaw":91.77,"playbackPositions":[{"pitch":3.14,"vfov":12,"yaw":91.77,"timestamp":0,"hfov":12,"class":"PanoramaOverlayPlaybackPosition"}],"image":"this.AnimatedImageResource_94CC7566_86FE_D06D_41D5_8B4C5AD92A63","distance":50,"scaleMode":"fit_inside","vfov":12,"class":"HotspotPanoramaOverlayImage","hfov":12,"data":{"label":"Arrow 02 Right-Up"}}],"class":"HotspotPanoramaOverlay","useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_9613DFB1_86FE_50E7_41D4_378616633A60"],"enabledInCardboard":true},{"data":{"label":"Arrow 02 Right"},"maps":[],"id":"overlay_97B36F18_86FF_D1A5_41C4_A0A62AAD99E8","items":[{"pitch":0,"yaw":-26.44,"playbackPositions":[{"pitch":0,"vfov":12,"yaw":-26.44,"timestamp":0,"hfov":12,"class":"PanoramaOverlayPlaybackPosition"}],"image":"this.AnimatedImageResource_94CFA566_86FE_D06D_41D5_8BE0BCF46C69","distance":50,"scaleMode":"fit_inside","vfov":12,"class":"HotspotPanoramaOverlayImage","hfov":12,"data":{"label":"Arrow 02 Right"}}],"class":"HotspotPanoramaOverlay","useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_97A29F1E_86FF_D1DD_41D1_AB13F6A0E4ED"],"enabledInCardboard":true},{"class":"WebFrame","minHeight":0,"minWidth":0,"backgroundColorRatios":[],"id":"WebFrame_94CF7627_86FE_D3EB_41D3_1EA2FF218C7F","backgroundColor":[],"data":{"name":"WebFrame6203"},"url":trans('WebFrame_94CF7627_86FE_D3EB_41D3_1EA2FF218C7F.url'),"propagateClick":false,"width":"100%","height":"100%"},{"gain":0,"width":2048,"bitrate":5028,"codec":"h264","height":1024,"class":"Video360Resource","posterURL":trans('videores_94DAD52D_86FE_D1FF_41D8_221F22E8E2C6.posterURL'),"type":"video/mp4","url":trans('videores_94DAD52D_86FE_D1FF_41D8_221F22E8E2C6.url'),"framerate":29.97,"id":"videores_94DAD52D_86FE_D1FF_41D8_221F22E8E2C6"},{"data":{"label":"Image","hasPanoramaAction":true},"maps":[],"id":"overlay_6CD9F9DD_7D6F_D260_41D2_6163AB130A5C","areas":["this.HotspotPanoramaOverlayArea_6CBA89F7_7D6F_D221_41B7_B1231B52DE5E"],"items":[{"pitch":-35.66,"yaw":-68,"playbackPositions":[{"pitch":-35.66,"vfov":8.18,"yaw":-68,"timestamp":0,"hfov":16.72,"class":"PanoramaOverlayPlaybackPosition"}],"image":"this.res_6FF800BA_7D66_7220_41CF_36888788F43A","distance":50,"scaleMode":"fit_inside","vfov":8.18,"class":"HotspotPanoramaOverlayImage","hfov":16.72,"data":{"label":"Image"}}],"class":"HotspotPanoramaOverlay","useHandCursor":true,"enabledInCardboard":true},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 0); this.MainViewerPanoramaPlayer.play()","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_729CD035_7D6E_5221_41D6_ACF5DE5D4B95"},{"class":"ImageResource","id":"res_6FF8D0BA_7D66_7220_41C9_C9A9265554C8","levels":[{"width":97,"url":"media/res_6FF8D0BA_7D66_7220_41C9_C9A9265554C8_0.png","height":47,"class":"ImageResourceLevel"}]},{"class":"ImageResource","id":"res_6FF800BA_7D66_7220_41CF_36888788F43A","levels":[{"width":132,"url":"media/res_6FF800BA_7D66_7220_41CF_36888788F43A_0.png","height":66,"class":"ImageResourceLevel"}]},{"toolTip":trans('HotspotPanoramaOverlayArea_6D147C1E_7D62_51E3_41BE_E7FCF0C29422.toolTip'),"click":"this.WebFrame_94CF7627_86FE_D3EB_41D3_1EA2FF218C7F.set('url', this.translate('PopupWebFrameBehaviour_6D9E4E66_7D62_CE23_4170_1E3C362B2C32.url')); this.showWindow(this.window_6D87FE64_7D62_CE20_41DF_42C745C02055, null, false)","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_6D147C1E_7D62_51E3_41BE_E7FCF0C29422"},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 1); this.MainViewerPanoramaPlayer.play()","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_721FBEA4_7C3E_F247_41D7_942399A9ACB4"},{"class":"ImageResource","id":"res_6C3C708E_7CCB_0E43_41D3_878A085AED55","levels":[{"width":96,"url":"media/res_6C3C708E_7CCB_0E43_41D3_878A085AED55_0.png","height":117,"class":"ImageResourceLevel"}]},{"id":"HotspotPanoramaOverlayTextImage_73BF9825_7C3F_3E41_41DE_2B1DBE808FB4","playbackPositions":[{"pitch":1.41,"vfov":14.47,"yaw":82.06,"timestamp":0,"hfov":32.27,"class":"PanoramaOverlayPlaybackPosition"}],"image":{"class":"ImageResource","levels":["this.imlevel_712469AE_7DA5_C610_41D9_D2EB5F49A526"]},"class":"HotspotPanoramaOverlayImage","distance":50,"vfov":14.47,"pitch":1.41,"yaw":82.06,"data":{"label":"Text"},"hfov":32.27},{"displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_7277F87B_7C3F_3EC1_41D3_D364362DCBEC"},{"id":"HotspotPanoramaOverlayTextImage_6C398075_7C39_0EC1_41DC_5954898D642F","playbackPositions":[{"pitch":1.55,"vfov":14.47,"yaw":-42.17,"timestamp":0,"hfov":25.43,"class":"PanoramaOverlayPlaybackPosition"}],"image":{"class":"ImageResource","levels":["this.imlevel_716989F7_7DA6_39F1_41DB_F8B407AC3B37"]},"class":"HotspotPanoramaOverlayImage","distance":50,"vfov":14.47,"pitch":1.55,"yaw":-42.17,"data":{"label":"Text"},"hfov":25.43},{"displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_6C36C077_7C39_0EC1_41DA_EB250E29C554"},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 2); this.MainViewerPanoramaPlayer.play()","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_73D0E4FC_7C3B_17C7_41C5_F57E4D8A8F79"},{"class":"ImageResource","id":"res_6FF880B9_7D66_7223_41BC_5C24C66DDAA9","levels":[{"width":96,"url":"media/res_6FF880B9_7D66_7223_41BC_5C24C66DDAA9_0.png","height":96,"class":"ImageResourceLevel"}]},{"toolTip":trans('HotspotPanoramaOverlayArea_6EEDCEDA_7CD9_13C3_41C0_91CDABFC6667.toolTip'),"click":"this.openLink(this.translate('LinkBehaviour_6D132B9B_7CD9_F241_41DE_AD027E5EADD6.source'), '_top')","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_6EEDCEDA_7CD9_13C3_41C0_91CDABFC6667"},{"class":"ImageResource","id":"res_6FF8E0BA_7D66_7220_41D8_67DDC8E4DFCA","levels":[{"width":96,"url":"media/res_6FF8E0BA_7D66_7220_41D8_67DDC8E4DFCA_0.png","height":96,"class":"ImageResourceLevel"}]},{"toolTip":trans('HotspotPanoramaOverlayArea_6DAE1A30_7CD9_F25F_41C1_59BD746BC59A.toolTip'),"click":"this.openLink(this.translate('LinkBehaviour_6E6F0B00_7CD9_123F_41DE_4F4FDB3A13B8.source'), '_blank')","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_6DAE1A30_7CD9_F25F_41C1_59BD746BC59A"},{"class":"ImageResource","id":"res_6FF8C0BA_7D66_7220_41DF_38B25D72D06C","levels":[{"width":96,"url":"media/res_6FF8C0BA_7D66_7220_41DF_38B25D72D06C_0.png","height":96,"class":"ImageResourceLevel"}]},{"toolTip":trans('HotspotPanoramaOverlayArea_6EDFE8D9_7CDB_1FC1_41D8_6EAEB163ACE1.toolTip'),"click":"this.openLink(this.translate('LinkBehaviour_6D13C2D4_7CD9_33C0_41DE_855D26FDF1D8.source'), '_self')","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_6EDFE8D9_7CDB_1FC1_41D8_6EAEB163ACE1"},{"finalFrame":"first","frameCount":24,"rowCount":6,"id":"AnimatedImageResource_94CC7566_86FE_D06D_41D5_8B4C5AD92A63","class":"AnimatedImageResource","levels":[{"width":380,"url":"media/res_94ED4DFB_86FE_F05A_419D_CCD5D6C7493A_0.png","height":570,"class":"ImageResourceLevel"}],"colCount":4,"frameDuration":41},{"displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_9613DFB1_86FE_50E7_41D4_378616633A60"},{"finalFrame":"first","frameCount":24,"rowCount":6,"id":"AnimatedImageResource_94CFA566_86FE_D06D_41D5_8BE0BCF46C69","class":"AnimatedImageResource","levels":[{"width":380,"url":"media/res_94ED7DFB_86FE_F05A_41D5_CC367E49D126_0.png","height":570,"class":"ImageResourceLevel"}],"colCount":4,"frameDuration":41},{"displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_97A29F1E_86FF_D1DD_41D1_AB13F6A0E4ED"},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 0); this.MainViewerPanoramaPlayer.play()","displayTooltipInTouchScreens":true,"class":"HotspotPanoramaOverlayArea","mapColor":"any","id":"HotspotPanoramaOverlayArea_6CBA89F7_7D6F_D221_41B7_B1231B52DE5E"},{"width":734.34,"url":trans('imlevel_712469AE_7DA5_C610_41D9_D2EB5F49A526.url'),"height":322.3,"class":"ImageResourceLevel","id":"imlevel_712469AE_7DA5_C610_41D9_D2EB5F49A526"},{"width":578.75,"url":trans('imlevel_716989F7_7DA6_39F1_41DB_F8B407AC3B37.url'),"height":325.64,"class":"ImageResourceLevel","id":"imlevel_716989F7_7DA6_39F1_41DB_F8B407AC3B37"}],"data":{"history":{},"displayTooltipInTouchScreens":true,"locales":{"en":"locale/en.txt"},"defaultLocale":"en","textToSpeechConfig":{"pitch":1,"speechOnInfoWindow":false,"rate":1,"stopBackgroundAudio":false,"volume":1,"speechOnTooltip":false,"speechOnQuizQuestion":false},"name":"Player423"},"backgroundColor":["#FFFFFF"],"scrollBarMargin":2,"scrollBarColor":"#000000","propagateClick":false,"scripts":{"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"toggleVR":TDV.Tour.Script.toggleVR,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getOverlays":TDV.Tour.Script.getOverlays,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"historyGoBack":TDV.Tour.Script.historyGoBack,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"openLink":TDV.Tour.Script.openLink,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"enableVR":TDV.Tour.Script.enableVR,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"downloadFile":TDV.Tour.Script.downloadFile,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"clone":TDV.Tour.Script.clone,"initAnalytics":TDV.Tour.Script.initAnalytics,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getPixels":TDV.Tour.Script.getPixels,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"shareSocial":TDV.Tour.Script.shareSocial,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getMainViewer":TDV.Tour.Script.getMainViewer,"setValue":TDV.Tour.Script.setValue,"initQuiz":TDV.Tour.Script.initQuiz,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"quizShowScore":TDV.Tour.Script.quizShowScore,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"cloneBindings":TDV.Tour.Script.cloneBindings,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"quizStart":TDV.Tour.Script.quizStart,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"init":TDV.Tour.Script.init,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"playAudioList":TDV.Tour.Script.playAudioList,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"mixObject":TDV.Tour.Script.mixObject,"getKey":TDV.Tour.Script.getKey,"quizFinish":TDV.Tour.Script.quizFinish,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"historyGoForward":TDV.Tour.Script.historyGoForward,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"executeJS":TDV.Tour.Script.executeJS,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"textToSpeech":TDV.Tour.Script.textToSpeech,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"startMeasurement":TDV.Tour.Script.startMeasurement,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getMediaByName":TDV.Tour.Script.getMediaByName,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"setMapLocation":TDV.Tour.Script.setMapLocation,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"existsKey":TDV.Tour.Script.existsKey,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"unregisterKey":TDV.Tour.Script.unregisterKey,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"registerKey":TDV.Tour.Script.registerKey,"showPopupImage":TDV.Tour.Script.showPopupImage,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getComponentByName":TDV.Tour.Script.getComponentByName,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"isPanorama":TDV.Tour.Script.isPanorama,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"resumePlayers":TDV.Tour.Script.resumePlayers,"disableVR":TDV.Tour.Script.disableVR,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"translate":TDV.Tour.Script.translate,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"showWindow":TDV.Tour.Script.showWindow,"createTween":TDV.Tour.Script.createTween,"setLocale":TDV.Tour.Script.setLocale},"start":"this.init()","width":"100%","gap":10,"defaultMenu":["fullscreen","mute","rotation"],"height":"100%","layout":"absolute"};
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
//Generated with v2024.0.19, Mon Dec 2 2024