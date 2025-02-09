(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    return translateObjs[c[0x0]] = c, '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
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
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
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
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
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
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this), e['call'](this);
                };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"backgroundColorRatios":[0],"id":"rootPlayer","propagateClick":false,"backgroundColor":["#00FF00"],"data":{"displayTooltipInTouchScreens":true,"defaultLocale":"en","locales":{"en":"locale/en.txt"},"name":"Player486","textToSpeechConfig":{"rate":1,"stopBackgroundAudio":false,"speechOnInfoWindow":false,"speechOnTooltip":false,"volume":1,"speechOnQuizQuestion":false,"pitch":1},"history":{}},"scripts":{"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getMediaByName":TDV.Tour.Script.getMediaByName,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"openLink":TDV.Tour.Script.openLink,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"historyGoForward":TDV.Tour.Script.historyGoForward,"existsKey":TDV.Tour.Script.existsKey,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"resumePlayers":TDV.Tour.Script.resumePlayers,"getComponentByName":TDV.Tour.Script.getComponentByName,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"historyGoBack":TDV.Tour.Script.historyGoBack,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"unregisterKey":TDV.Tour.Script.unregisterKey,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getPixels":TDV.Tour.Script.getPixels,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setValue":TDV.Tour.Script.setValue,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"registerKey":TDV.Tour.Script.registerKey,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"showPopupImage":TDV.Tour.Script.showPopupImage,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"toggleVR":TDV.Tour.Script.toggleVR,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getKey":TDV.Tour.Script.getKey,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getMainViewer":TDV.Tour.Script.getMainViewer,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"downloadFile":TDV.Tour.Script.downloadFile,"getOverlays":TDV.Tour.Script.getOverlays,"shareSocial":TDV.Tour.Script.shareSocial,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"init":TDV.Tour.Script.init,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"setMapLocation":TDV.Tour.Script.setMapLocation,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"isPanorama":TDV.Tour.Script.isPanorama,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"enableVR":TDV.Tour.Script.enableVR,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"disableVR":TDV.Tour.Script.disableVR,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"quizShowScore":TDV.Tour.Script.quizShowScore,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"mixObject":TDV.Tour.Script.mixObject,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"createTween":TDV.Tour.Script.createTween,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"quizStart":TDV.Tour.Script.quizStart,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"initQuiz":TDV.Tour.Script.initQuiz,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"playAudioList":TDV.Tour.Script.playAudioList,"startMeasurement":TDV.Tour.Script.startMeasurement,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"clone":TDV.Tour.Script.clone,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"cloneBindings":TDV.Tour.Script.cloneBindings,"quizFinish":TDV.Tour.Script.quizFinish,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"translate":TDV.Tour.Script.translate,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"executeJS":TDV.Tour.Script.executeJS,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"initAnalytics":TDV.Tour.Script.initAnalytics,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"showWindow":TDV.Tour.Script.showWindow,"textToSpeech":TDV.Tour.Script.textToSpeech,"setLocale":TDV.Tour.Script.setLocale,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent},"start":"this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_C1820E14_EC1A_F7EE_41E1_E0CDB80E11AC], 'cardboardAvailable')","vrPolyfillScale":0.5,"class":"Player","layout":"absolute","children":["this.MainViewer","this.IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8","this.IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0","this.IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9","this.IconButton_C1820E14_EC1A_F7EE_41E1_E0CDB80E11AC","this.veilPopupPanorama","this.zoomImagePopupPanorama","this.closeButtonPopupPanorama"],"minWidth":20,"minHeight":20,"scrollBarColor":"#000000","gap":10,"height":"100%","defaultMenu":["fullscreen","mute","rotation"],"hash": "09f8da663b5422ae723a328c8b33fdb381434f698c4d07e5afe1ba4e9bcd5b9d", "definitions": [{"veilColorRatios":[0,1],"closeButtonPressedIconColor":"#FFFFFF","closeButtonRollOverIconColor":"#FFFFFF","propagateClick":false,"closeButtonRollOverBackgroundOpacity":0,"closeButtonBackgroundColor":[],"veilColor":["#000000","#000000"],"bodyPaddingLeft":5,"closeButtonRollOverIconLineWidth":2,"data":{"name":"Window5971"},"bodyBackgroundColor":["#FFFFFF","#DDDDDD","#FFFFFF"],"shadowVerticalLength":0,"children":["this.htmlText_D6CEBC03_EC1E_1BEA_41C9_491DD9B7A485"],"veilHideEffect":{"class":"FadeOutEffect","duration":500,"easing":"cubic_in_out"},"bodyBackgroundColorDirection":"vertical","closeButtonPressedBackgroundOpacity":0,"closeButtonRollOverBorderSize":0,"modal":true,"headerPaddingLeft":10,"bodyPaddingTop":5,"titleFontFamily":"Arial","bodyPaddingBottom":5,"footerBackgroundColorDirection":"vertical","closeButtonPaddingBottom":0,"closeButtonIconWidth":12,"closeButtonPressedBorderColor":"#000000","scrollBarColor":"#000000","closeButtonPaddingLeft":0,"shadow":true,"titlePaddingRight":5,"headerBackgroundOpacity":1,"gap":10,"title":trans('window_D6CD7C03_EC1E_1BEA_41D0_9CF3CB83E7D3.title'),"closeButtonRollOverBackgroundColor":["#C13535"],"closeButtonPressedBackgroundColor":["#3A1D1F"],"verticalAlign":"middle","headerBackgroundColorDirection":"vertical","closeButtonPressedBackgroundColorRatios":[0],"headerBorderSize":0,"titlePaddingLeft":5,"closeButtonPaddingTop":0,"hideEffect":{"class":"FadeOutEffect","duration":500,"easing":"cubic_in_out"},"closeButtonPressedBorderSize":0,"closeButtonBorderColor":"#000000","bodyBorderColor":"#000000","closeButtonPressedIconLineWidth":2,"showEffect":{"class":"FadeInEffect","duration":500,"easing":"cubic_in_out"},"titleFontSize":"1.29vmin","veilOpacity":0.4,"shadowHorizontalLength":3,"bodyBorderSize":0,"bodyBackgroundOpacity":1,"backgroundColorRatios":[],"borderRadius":5,"id":"window_D6CD7C03_EC1E_1BEA_41D0_9CF3CB83E7D3","headerPaddingTop":10,"closeButtonBackgroundOpacity":0,"backgroundColor":[],"footerBackgroundColorRatios":[0,0.8980392156862745,1],"layout":"vertical","footerBorderSize":0,"veilColorDirection":"horizontal","titlePaddingTop":5,"shadowOpacity":0.5,"closeButtonPaddingRight":0,"headerPaddingBottom":10,"horizontalAlign":"center","closeButtonIconLineWidth":2,"closeButtonIconHeight":12,"headerBorderColor":"#000000","closeButtonBackgroundColorRatios":[],"class":"Window","closeButtonBorderSize":0,"bodyPaddingRight":5,"headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"footerBorderColor":"#000000","shadowColor":"#000000","minWidth":0,"closeButtonRollOverBackgroundColorRatios":[0],"minHeight":0,"titlePaddingBottom":5,"overflow":"scroll","footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"closeButtonRollOverBorderColor":"#000000","headerPaddingRight":10,"width":400,"headerBackgroundColorRatios":[0,0.09803921568627451,1],"footerHeight":5,"height":600,"footerBackgroundOpacity":1,"headerVerticalAlign":"middle","titleFontColor":"#000000","scrollBarMargin":2,"closeButtonIconColor":"#000000","shadowSpread":1,"titleHorizontalAlign":"left","veilShowEffect":{"class":"FadeInEffect","duration":500,"easing":"cubic_in_out"},"bodyBackgroundColorRatios":[0,0.5019607843137255,1],"closeButtonBorderRadius":11},{"hfov":360,"overlays":["this.overlay_DBF710BE_EC1E_EC1B_41E6_E34736EB589B","this.overlay_D26E3F11_EC1E_15E6_41D0_B10FF51F9C3C","this.popup_D217E4F9_EC1A_3426_41CB_F2C96CF55708"],"id":"panorama_D673274E_EBA0_E37C_41D6_D3449223941F","thumbnailUrl":"media/panorama_D673274E_EBA0_E37C_41D6_D3449223941F_t.webp","data":{"label":"CSI_Room_09"},"vfov":180,"hfovMax":130,"frames":[{"thumbnailUrl":"media/panorama_D673274E_EBA0_E37C_41D6_D3449223941F_t.webp","cube":{"levels":[{"rowCount":4,"tags":"ondemand","height":2048,"width":12288,"class":"TiledImageResourceLevel","colCount":24,"url":"media/panorama_D673274E_EBA0_E37C_41D6_D3449223941F_0/{face}/0/{row}_{column}.webp"},{"rowCount":2,"tags":"ondemand","height":1024,"width":6144,"class":"TiledImageResourceLevel","colCount":12,"url":"media/panorama_D673274E_EBA0_E37C_41D6_D3449223941F_0/{face}/1/{row}_{column}.webp"},{"rowCount":1,"tags":["ondemand","preload"],"height":512,"width":3072,"class":"TiledImageResourceLevel","colCount":6,"url":"media/panorama_D673274E_EBA0_E37C_41D6_D3449223941F_0/{face}/2/{row}_{column}.webp"}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"hfovMin":"135%","label":trans('panorama_D673274E_EBA0_E37C_41D6_D3449223941F.label'),"class":"Panorama"},{"playbackBarProgressBorderRadius":0,"playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesTop":0,"propagateClick":false,"playbackBarHeadShadowOpacity":0.7,"progressBarBorderSize":0,"progressBackgroundColorRatios":[0],"data":{"name":"Main Viewer"},"toolTipPaddingBottom":4,"subtitlesTextShadowColor":"#000000","playbackBarProgressBackgroundColorRatios":[0],"subtitlesGap":0,"playbackBarBorderColor":"#FFFFFF","playbackBarBorderRadius":0,"playbackBarHeadShadowBlurRadius":3,"playbackBarProgressBorderColor":"#000000","subtitlesBackgroundColor":"#000000","progressRight":0,"toolTipPaddingTop":4,"subtitlesFontSize":"3vmin","playbackBarLeft":0,"playbackBarHeadHeight":15,"playbackBarHeadBorderColor":"#000000","subtitlesTextShadowHorizontalLength":1,"toolTipFontSize":"1.11vmin","playbackBarHeadBorderRadius":0,"playbackBarHeadShadowColor":"#000000","playbackBarBorderSize":0,"playbackBarHeadBorderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"progressBarBorderColor":"#000000","playbackBarHeadShadow":true,"subtitlesBackgroundOpacity":0.2,"toolTipPaddingLeft":6,"subtitlesTextShadowVerticalLength":1,"progressBarBackgroundColorRatios":[0],"toolTipFontColor":"#606060","subtitlesBorderColor":"#FFFFFF","toolTipPaddingRight":6,"id":"MainViewer","toolTipBackgroundColor":"#F6F6F6","toolTipShadowColor":"#333333","firstTransitionDuration":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBorderColor":"#000000","surfaceReticleSelectionColor":"#FFFFFF","subtitlesTextShadowOpacity":1,"progressBorderRadius":0,"progressBarBackgroundColor":["#3399FF"],"playbackBarBottom":5,"subtitlesFontFamily":"Arial","toolTipTextShadowColor":"#000000","subtitlesFontColor":"#FFFFFF","class":"ViewerArea","progressBackgroundColor":["#FFFFFF"],"vrPointerColor":"#FFFFFF","vrPointerSelectionTime":2000,"minWidth":100,"toolTipBorderColor":"#767676","minHeight":50,"progressLeft":0,"vrPointerSelectionColor":"#FF6600","progressBottom":0,"toolTipFontFamily":"Arial","playbackBarHeight":10,"playbackBarBackgroundColor":["#FFFFFF"],"progressBorderSize":0,"playbackBarHeadWidth":6,"progressHeight":10,"surfaceReticleColor":"#FFFFFF","playbackBarBackgroundOpacity":1,"subtitlesBottom":50,"playbackBarProgressBorderSize":0,"height":"100%","width":"100%","progressBarBorderRadius":0,"playbackBarBackgroundColorDirection":"vertical","playbackBarRight":0},{"id":"mainPlayList","class":"PlayList","items":[{"end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem","camera":"this.panorama_D673274E_EBA0_E37C_41D6_D3449223941F_camera","media":"this.panorama_D673274E_EBA0_E37C_41D6_D3449223941F"}]},{"top":"35%","id":"IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0","propagateClick":false,"tabIndex":0,"bottom":"35%","left":"1%","horizontalAlign":"center","data":{"name":"-previous"},"maxWidth":46,"class":"IconButton","maxHeight":46,"minWidth":1,"minHeight":1,"iconURL":"skin/IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0.png","width":92,"transparencyActive":true,"verticalAlign":"middle","backgroundOpacity":0,"visible":false,"click":"this.loadFromCurrentMediaPlayList(this.mainPlayList, -1, true)"},{"arrowKeysAction":"translate","displayPlaybackBar":true,"buttonCardboardView":"this.IconButton_C1820E14_EC1A_F7EE_41E1_E0CDB80E11AC","touchControlMode":"drag_rotation","keepModel3DLoadedWithoutLocation":true,"viewerArea":"this.MainViewer","aaEnabled":true,"id":"MainViewerPanoramaPlayer","mouseControlMode":"drag_rotation","class":"PanoramaPlayer"},{"top":"35%","id":"IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9","propagateClick":false,"tabIndex":0,"bottom":"35%","data":{"name":"-next"},"horizontalAlign":"center","right":"1%","maxWidth":46,"class":"IconButton","maxHeight":46,"minWidth":1,"minHeight":1,"iconURL":"skin/IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9.png","width":92,"transparencyActive":true,"verticalAlign":"middle","backgroundOpacity":0,"visible":false,"click":"this.loadFromCurrentMediaPlayList(this.mainPlayList, 1, true)"},{"top":"5.23%","id":"IconButton_C1820E14_EC1A_F7EE_41E1_E0CDB80E11AC","propagateClick":false,"tabIndex":0,"data":{"name":"IconButton8351"},"horizontalAlign":"center","right":"2.35%","maxWidth":56,"maxHeight":55,"class":"IconButton","minWidth":1,"minHeight":1,"iconURL":"skin/IconButton_C1820E14_EC1A_F7EE_41E1_E0CDB80E11AC.png","width":56,"verticalAlign":"middle","height":55,"backgroundOpacity":0},{"id":"effect_307F1ACA_231D_F4CC_41B6_DE1D97EDB043","class":"FadeOutEffect","duration":100},{"yaw":25.13,"popupDistance":100,"pitch":-17.29,"showEasing":"cubic_in","popupMaxWidth":"50%","hideEasing":"cubic_out","hideDuration":500,"id":"popup_D217E4F9_EC1A_3426_41CB_F2C96CF55708","popupMaxHeight":"50%","image":"this.ImageResource_D2AEFB77_EC1A_1C2A_41C6_54BDA3038FFB","hfov":6.04,"class":"PopupPanoramaOverlay","showDuration":500},{"id":"ImageResource_D2AEFB77_EC1A_1C2A_41C6_54BDA3038FFB","class":"ImageResource","levels":["this.imlevel_D25C36C0_EC1A_1466_41B7_535292DDDC80","this.imlevel_D25C76C0_EC1A_1466_41C1_574CC92E9BA6"]},{"id":"IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8","propagateClick":false,"tabIndex":0,"bottom":0,"left":"40%","horizontalAlign":"center","data":{"name":"-Expand"},"right":"40%","maxWidth":46,"maxHeight":46,"class":"IconButton","minWidth":1,"minHeight":1,"iconURL":"skin/IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8.png","rollOverIconURL":"skin/IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8_rollover.png","transparencyActive":true,"verticalAlign":"middle","height":46,"backgroundOpacity":0,"visible":false,"click":"var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_307F1ACA_231D_F4CC_41B6_DE1D97EDB043, 'hideEffect', false)}.bind(this); invisibleFunc(this.IconButton_3BD6FE66_1C9E_9B08_41AE_65363919CAD0); invisibleFunc(this.IconButton_069AFCF9_1C9E_98F8_41AA_EDF2EF9939E8); invisibleFunc(this.IconButton_3BF02F26_1C9E_990B_419B_60D4788D76C9)"},{"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"id":"panorama_D673274E_EBA0_E37C_41D6_D3449223941F_camera","initialSequence":"this.sequence_D012B1A5_EBA0_FF2C_41E0_34109D0382B2","enterPointingToHorizon":true,"class":"PanoramaCamera"},{"backgroundColorRatios":[0],"top":0,"id":"veilPopupPanorama","propagateClick":false,"bottom":0,"backgroundColor":["#000000"],"left":0,"data":{"name":"UIComponent9257"},"right":0,"class":"UIComponent","minWidth":0,"minHeight":0,"backgroundOpacity":0.55,"visible":false,"showEffect":{"class":"FadeInEffect","duration":350,"easing":"cubic_in_out"}},{"backgroundColorRatios":[],"top":0,"id":"zoomImagePopupPanorama","propagateClick":false,"bottom":0,"backgroundColor":[],"left":0,"data":{"name":"ZoomImage9258"},"right":0,"class":"ZoomImage","minWidth":0,"minHeight":0,"scaleMode":"custom","visible":false},{"iconColor":"#000000","backgroundColorRatios":[0,0.09803921568627451,1],"top":10,"id":"closeButtonPopupPanorama","propagateClick":false,"tabIndex":0,"backgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"data":{"name":"CloseButton9259"},"fontFamily":"Arial","right":10,"layout":"horizontal","class":"CloseButton","iconLineWidth":2,"fontColor":"#FFFFFF","minWidth":0,"minHeight":0,"rollOverIconColor":"#666666","iconWidth":"100%","fontSize":"1.29vmin","pressedIconColor":"#888888","borderColor":"#000000","iconHeight":"100%","visible":false,"showEffect":{"class":"FadeInEffect","duration":350,"easing":"cubic_in_out"}},{"paddingLeft":10,"id":"htmlText_D6CEBC03_EC1E_1BEA_41C9_491DD9B7A485","propagateClick":false,"paddingRight":10,"data":{"name":"HTMLText5972"},"class":"HTMLText","paddingTop":10,"paddingBottom":10,"minWidth":0,"minHeight":0,"scrollBarColor":"#000000","height":"100%","width":"100%","backgroundOpacity":0,"scrollBarVisible":"always","html":trans('htmlText_D6CEBC03_EC1E_1BEA_41C9_491DD9B7A485.html'),"scrollBarHorizontalMargin":-3},{"items":[{"yaw":-52.57,"pitch":-20.9,"distance":50,"scaleMode":"fit_inside","data":{"label":"Image"},"vfov":4.4,"image":"this.res_D2323CDB_EC1E_141A_41BB_97FA09DC038E","hfov":5.74,"class":"HotspotPanoramaOverlayImage"}],"maps":[],"data":{"label":"Image"},"class":"HotspotPanoramaOverlay","useHandCursor":true,"id":"overlay_DBF710BE_EC1E_EC1B_41E6_E34736EB589B","areas":["this.HotspotPanoramaOverlayArea_DB40913F_EC1E_EC1A_41D1_97335F8452AE"]},{"items":[{"yaw":25.13,"pitch":-17.29,"distance":100,"scaleMode":"fit_inside","vfov":5.84,"data":{"label":"Info Red 02"},"image":"this.AnimatedImageResource_AA1C3745_EC2A_146E_41C1_88DE9F193CD2","hfov":6.04,"class":"HotspotPanoramaOverlayImage"}],"maps":[],"data":{"label":"Info Red 02"},"class":"HotspotPanoramaOverlay","useHandCursor":true,"id":"overlay_D26E3F11_EC1E_15E6_41D0_B10FF51F9C3C","enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_D2D1BF28_EC1E_1426_41C4_DE0B4C1A970C"]},{"height":683,"width":1024,"id":"imlevel_D25C36C0_EC1A_1466_41B7_535292DDDC80","class":"ImageResourceLevel","url":trans('imlevel_D25C36C0_EC1A_1466_41B7_535292DDDC80.url')},{"height":341,"width":512,"id":"imlevel_D25C76C0_EC1A_1466_41C1_574CC92E9BA6","class":"ImageResourceLevel","url":trans('imlevel_D25C76C0_EC1A_1466_41C1_574CC92E9BA6.url')},{"id":"sequence_D012B1A5_EBA0_FF2C_41E0_34109D0382B2","movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_in"},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"yawSpeed":7.96,"easing":"cubic_out"}],"class":"PanoramaCameraSequence"},{"id":"res_D2323CDB_EC1E_141A_41BB_97FA09DC038E","class":"ImageResource","levels":[{"height":104,"width":123,"class":"ImageResourceLevel","url":"media/res_D2323CDB_EC1E_141A_41BB_97FA09DC038E_0.webp"}]},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_DB40913F_EC1E_EC1A_41D1_97335F8452AE","click":"this.showWindow(this.window_D6CD7C03_EC1E_1BEA_41D0_9CF3CB83E7D3, null, false)","mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"class":"AnimatedImageResource","id":"AnimatedImageResource_AA1C3745_EC2A_146E_41C1_88DE9F193CD2","frameDuration":41,"rowCount":1,"levels":[{"height":139,"width":3336,"class":"ImageResourceLevel","url":"media/res_D230B56B_EC1A_143A_41ED_1E0E74B4BBDF_0.webp"}],"colCount":24,"frameCount":24,"finalFrame":"first"},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_D2D1BF28_EC1E_1426_41C4_DE0B4C1A970C","click":"this.showPopupPanoramaOverlay(this.popup_D217E4F9_EC1A_3426_41CB_F2C96CF55708,{'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':2,'rollOverIconColor':'#666666','rollOverIconHeight':20,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBorderColor':'#000000','pressedIconHeight':20,'paddingBottom':5,'rollOverBorderColor':'#000000','pressedBackgroundOpacity':1,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconColor':'#888888','pressedIconWidth':20,'rollOverIconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderRadius':0,'paddingLeft':5,'rollOverBackgroundOpacity':1,'iconHeight':20,'borderSize':0,'paddingRight':5,'backgroundOpacity':1,'rollOverBorderSize':0,'pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':2,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','iconWidth':20,'borderColor':'#000000','iconLineWidth':2,'iconColor':'#000000','backgroundColorDirection':'vertical','pressedBorderSize':0},this.ImageResource_D2AEFB77_EC1A_1C2A_41C6_54BDA3038FFB,null,null,null,false)","mapColor":"any","class":"HotspotPanoramaOverlayArea"}],"width":"100%","scrollBarMargin":2,"watermark":false};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.0.6, Sun Feb 9 2025