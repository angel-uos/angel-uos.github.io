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
var script = {"defaultMenu":["fullscreen","mute","rotation"],"scripts":{"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"isPanorama":TDV.Tour.Script.isPanorama,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"disableVR":TDV.Tour.Script.disableVR,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"shareSocial":TDV.Tour.Script.shareSocial,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"clone":TDV.Tour.Script.clone,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"openLink":TDV.Tour.Script.openLink,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"registerKey":TDV.Tour.Script.registerKey,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"quizStart":TDV.Tour.Script.quizStart,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"initQuiz":TDV.Tour.Script.initQuiz,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getPixels":TDV.Tour.Script.getPixels,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"quizShowScore":TDV.Tour.Script.quizShowScore,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"quizFinish":TDV.Tour.Script.quizFinish,"downloadFile":TDV.Tour.Script.downloadFile,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getMediaByName":TDV.Tour.Script.getMediaByName,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"textToSpeech":TDV.Tour.Script.textToSpeech,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"getMainViewer":TDV.Tour.Script.getMainViewer,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"startMeasurement":TDV.Tour.Script.startMeasurement,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"toggleVR":TDV.Tour.Script.toggleVR,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getComponentByName":TDV.Tour.Script.getComponentByName,"setValue":TDV.Tour.Script.setValue,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"playAudioList":TDV.Tour.Script.playAudioList,"setMapLocation":TDV.Tour.Script.setMapLocation,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"initAnalytics":TDV.Tour.Script.initAnalytics,"init":TDV.Tour.Script.init,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"existsKey":TDV.Tour.Script.existsKey,"getOverlays":TDV.Tour.Script.getOverlays,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"resumePlayers":TDV.Tour.Script.resumePlayers,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"historyGoForward":TDV.Tour.Script.historyGoForward,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"cloneBindings":TDV.Tour.Script.cloneBindings,"showWindow":TDV.Tour.Script.showWindow,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"mixObject":TDV.Tour.Script.mixObject,"historyGoBack":TDV.Tour.Script.historyGoBack,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"enableVR":TDV.Tour.Script.enableVR,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getKey":TDV.Tour.Script.getKey,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"showPopupImage":TDV.Tour.Script.showPopupImage,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"unregisterKey":TDV.Tour.Script.unregisterKey,"translate":TDV.Tour.Script.translate,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"createTween":TDV.Tour.Script.createTween,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setLocale":TDV.Tour.Script.setLocale,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"executeJS":TDV.Tour.Script.executeJS,"keepCompVisible":TDV.Tour.Script.keepCompVisible},"minHeight":0,"id":"rootPlayer","start":"this.init()","data":{"displayTooltipInTouchScreens":true,"history":{},"defaultLocale":"en","locales":{"en":"locale/en.txt"},"name":"Player423","textToSpeechConfig":{"pitch":1,"rate":1,"speechOnTooltip":false,"volume":1,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"speechOnQuizQuestion":false}},"backgroundColor":["#FFFFFF"],"minWidth":0,"backgroundColorRatios":[0],"class":"Player","hash": "7bb31eb45df3fe30992138925c87308202f134e5ba26df422f9f1f65f0c51bbb", "definitions": [{"enterPointingToHorizon":true,"class":"RotationalCamera","initialPosition":{"pitch":0,"hfov":120,"class":"RotationalCameraPosition","yaw":0},"id":"media_71385BB9_7DA2_3A71_41C2_B5F690AE827B_camera"},{"enterPointingToHorizon":true,"class":"RotationalCamera","initialPosition":{"pitch":0,"hfov":120,"class":"RotationalCameraPosition","yaw":0},"id":"media_709FD7ED_7DA2_4A10_41D1_8599D48DDAB2_camera"},{"items":[{"camera":"this.media_709FD7ED_7DA2_4A10_41D1_8599D48DDAB2_camera","class":"Video360PlayListItem","start":"this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false); this.MainViewerPanoramaPlayer.set('displayPlayOverlay', false); this.MainViewerPanoramaPlayer.set('clickAction', 'none'); this.changeBackgroundWhilePlay(this.mainPlayList, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 0)","media":"this.media_709FD7ED_7DA2_4A10_41D1_8599D48DDAB2","player":"this.MainViewerPanoramaPlayer","begin":"this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer)"},{"camera":"this.media_71385BB9_7DA2_3A71_41C2_B5F690AE827B_camera","class":"Video360PlayListItem","start":"this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false); this.MainViewerPanoramaPlayer.set('displayPlayOverlay', false); this.MainViewerPanoramaPlayer.set('clickAction', 'none'); this.changeBackgroundWhilePlay(this.mainPlayList, 1, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 1)","media":"this.media_71385BB9_7DA2_3A71_41C2_B5F690AE827B","player":"this.MainViewerPanoramaPlayer","begin":"this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer)"},{"camera":"this.media_71D64CCB_7DA2_FE10_41CD_D7D92A6AFDC1_camera","class":"Video360PlayListItem","end":"this.trigger('tourEnded')","media":"this.media_71D64CCB_7DA2_FE10_41CD_D7D92A6AFDC1","player":"this.MainViewerPanoramaPlayer","begin":"this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer)","start":"this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false); this.MainViewerPanoramaPlayer.set('displayPlayOverlay', false); this.MainViewerPanoramaPlayer.set('clickAction', 'none'); this.changeBackgroundWhilePlay(this.mainPlayList, 2, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 2)"}],"class":"PlayList","id":"mainPlayList"},{"playbackBarBackgroundColorDirection":"vertical","toolTipShadowColor":"#333138","propagateClick":false,"playbackBarRight":0,"vrPointerColor":"#FFFFFF","playbackBarProgressBorderRadius":0,"vrThumbstickRotationStep":20,"progressHeight":2,"playbackBarBackgroundOpacity":1,"subtitlesTextShadowHorizontalLength":1,"minHeight":50,"playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesBottom":50,"minWidth":100,"toolTipBackgroundColor":"#F6F6F6","playbackBarHeadShadowOpacity":0.7,"data":{"name":"Main Viewer"},"progressLeft":"33%","subtitlesFontFamily":"Arial","progressBorderSize":0,"class":"ViewerArea","progressBarBorderRadius":2,"playbackBarProgressBackgroundColorRatios":[0],"firstTransitionDuration":0,"playbackBarBorderColor":"#FFFFFF","progressBarBorderSize":0,"playbackBarBorderRadius":0,"subtitlesTop":0,"playbackBarProgressBorderColor":"#000000","playbackBarHeadShadowBlurRadius":3,"surfaceReticleColor":"#FFFFFF","progressBackgroundColorRatios":[0],"playbackBarHeadBorderRadius":0,"playbackBarHeadHeight":15,"playbackBarLeft":0,"playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderColor":"#000000","toolTipFontSize":"1.11vmin","progressRight":"33%","progressOpacity":0.7,"subtitlesTextShadowColor":"#000000","toolTipPaddingBottom":4,"toolTipPaddingTop":4,"playbackBarBorderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"vrPointerSelectionColor":"#FF6600","playbackBarHeadBorderSize":0,"toolTipPaddingLeft":6,"subtitlesGap":0,"playbackBarHeadShadow":true,"progressBarBackgroundColorDirection":"horizontal","subtitlesBackgroundColor":"#000000","toolTipFontFamily":"Arial","progressBarBorderColor":"#000000","id":"MainViewer","toolTipFontColor":"#606060","subtitlesBackgroundOpacity":0.2,"subtitlesTextShadowOpacity":1,"subtitlesBorderColor":"#FFFFFF","progressBarBackgroundColorRatios":[0],"vrPointerSelectionTime":2000,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBottom":5,"progressBorderColor":"#000000","subtitlesTextShadowVerticalLength":1,"toolTipBorderColor":"#767676","subtitlesFontSize":"3vmin","progressBarBackgroundColor":["#3399FF"],"progressBackgroundColor":["#000000"],"subtitlesFontColor":"#FFFFFF","toolTipPaddingRight":6,"playbackBarHeight":10,"playbackBarBackgroundColor":["#FFFFFF"],"height":"100%","width":"100%","progressBorderRadius":2,"toolTipTextShadowColor":"#000000","surfaceReticleSelectionColor":"#FFFFFF","playbackBarProgressBorderSize":0,"progressBottom":10,"playbackBarHeadWidth":6},{"enterPointingToHorizon":true,"class":"RotationalCamera","initialPosition":{"pitch":0,"hfov":120,"class":"RotationalCameraPosition","yaw":0},"id":"media_71D64CCB_7DA2_FE10_41CD_D7D92A6AFDC1_camera"},{"viewerArea":"this.MainViewer","touchControlMode":"drag_rotation","aaEnabled":true,"class":"PanoramaPlayer","arrowKeysAction":"translate","mouseControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer","displayPlaybackBar":true},{"hfovMin":60,"adjacentPanoramas":[{"data":{"overlayID":"overlay_726B9DFF_7C3E_F1C1_41DB_20938BD8F386"},"panorama":"this.media_71385BB9_7DA2_3A71_41C2_B5F690AE827B","class":"AdjacentPanorama","yaw":94.23,"distance":100,"select":"this.overlay_726B9DFF_7C3E_F1C1_41DB_20938BD8F386.get('areas').forEach(function(a){ a.trigger('click') })","backwardYaw":4.41},{"data":{"overlayID":"overlay_966C7F85_86FE_50AF_41D5_419E2F001B2A"},"panorama":"this.media_71385BB9_7DA2_3A71_41C2_B5F690AE827B","class":"AdjacentPanorama","yaw":91.77,"distance":100,"select":"this.overlay_966C7F85_86FE_50AF_41D5_419E2F001B2A.get('areas').forEach(function(a){ a.trigger('click') })","backwardYaw":4.41},{"data":{"overlayID":"overlay_73D074FC_7C3B_17C7_41D3_E1F46DC56F59"},"panorama":"this.media_71D64CCB_7DA2_FE10_41CD_D7D92A6AFDC1","class":"AdjacentPanorama","yaw":-27.58,"distance":100,"select":"this.overlay_73D074FC_7C3B_17C7_41D3_E1F46DC56F59.get('areas').forEach(function(a){ a.trigger('click') })","backwardYaw":-68},{"data":{"overlayID":"overlay_97B36F18_86FF_D1A5_41C4_A0A62AAD99E8"},"panorama":"this.media_71D64CCB_7DA2_FE10_41CD_D7D92A6AFDC1","class":"AdjacentPanorama","yaw":-26.44,"distance":100,"select":"this.overlay_97B36F18_86FF_D1A5_41C4_A0A62AAD99E8.get('areas').forEach(function(a){ a.trigger('click') })","backwardYaw":-68}],"hfovMax":140,"label":trans('media_709FD7ED_7DA2_4A10_41D1_8599D48DDAB2.label'),"vfov":180,"thumbnailUrl":"media/media_709FD7ED_7DA2_4A10_41D1_8599D48DDAB2_t.jpg","overlays":["this.overlay_726B9DFF_7C3E_F1C1_41DB_20938BD8F386","this.overlay_73BCF827_7C3F_3E41_41C3_62FEA8957C08","this.overlay_6C3C5071_7C39_0EC1_41D6_24BA0262A258","this.overlay_73D074FC_7C3B_17C7_41D3_E1F46DC56F59","this.overlay_6EEE0ED7_7CD9_13C0_41A5_E4FF5DA3C2B5","this.overlay_6EC2F9FF_7CD9_F1C1_41B1_C2D90C2EC87D","this.overlay_6EDBD8D0_7CDB_1FDF_41D0_F6C9552C5394","this.overlay_966C7F85_86FE_50AF_41D5_419E2F001B2A","this.overlay_97B36F18_86FF_D1A5_41C4_A0A62AAD99E8"],"id":"media_709FD7ED_7DA2_4A10_41D1_8599D48DDAB2","video":["this.videores_868CBA6A_882B_086F_41B8_A6433EE96C66"],"pitch":0,"loop":true,"data":{"label":"ayutthaya_-_needs_stabilization_and_horizon_correction___360_vr_master_series___free_download (2160p)"},"hfov":360,"class":"Video360"},{"layout":"vertical","closeButtonPressedIconLineWidth":3,"titleFontFamily":"Arial","titlePaddingLeft":5,"bodyBackgroundColor":["#000000","#000000","#DDDDDD"],"closeButtonIconHeight":20,"minHeight":0,"headerPaddingLeft":10,"bodyBackgroundOpacity":0,"veilShowEffect":{"duration":500,"class":"FadeInEffect","easing":"cubic_in_out"},"minWidth":0,"closeButtonBorderColor":"#000000","veilHideEffect":{"duration":500,"class":"FadeOutEffect","easing":"cubic_in_out"},"closeButtonPaddingTop":0,"footerBorderColor":"#000000","closeButtonPressedBackgroundOpacity":0,"titlePaddingRight":5,"data":{"name":"Window11230"},"closeButtonPressedBorderColor":"#000000","titlePaddingBottom":5,"class":"Window","closeButtonBackgroundOpacity":0,"headerPaddingBottom":5,"closeButtonPaddingBottom":0,"modal":true,"closeButtonIconLineWidth":2,"closeButtonRollOverBorderColor":"#000000","closeButtonPressedBorderSize":0,"bodyPaddingRight":0,"headerPaddingRight":0,"closeButtonRollOverBackgroundColorRatios":[],"borderRadius":5,"titleFontColor":"#000000","title":trans('window_6D87FE64_7D62_CE20_41DF_42C745C02055.title'),"scrollBarMargin":2,"bodyBorderColor":"#000000","veilColorDirection":"horizontal","footerBackgroundColor":["#FFFFFF","#EEEEEE","#DDDDDD"],"headerBorderSize":0,"children":["this.WebFrame_9838530A_882B_39AC_41D7_1BE0D732DD80"],"shadowHorizontalLength":3,"shadowVerticalLength":0,"footerBackgroundColorDirection":"vertical","headerBorderColor":"#000000","bodyBorderSize":0,"bodyBackgroundColorRatios":[0,0.8392156862745098,1],"titleHorizontalAlign":"left","overflow":"scroll","headerBackgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"footerBackgroundOpacity":0,"closeButtonRollOverIconColor":"#FFFFFF","closeButtonBorderSize":0,"veilColor":["#000000","#000000"],"id":"window_6D87FE64_7D62_CE20_41DF_42C745C02055","shadow":true,"footerBackgroundColorRatios":[0,0.8980392156862745,1],"verticalAlign":"middle","backgroundColor":[],"veilColorRatios":[0,1],"headerVerticalAlign":"middle","bodyPaddingLeft":0,"bodyBackgroundColorDirection":"vertical","backgroundColorRatios":[],"hideEffect":{"duration":500,"class":"FadeOutEffect","easing":"cubic_in_out"},"horizontalAlign":"center","footerBorderSize":0,"closeButtonBackgroundColor":[],"scrollBarColor":"#000000","closeButtonIconColor":"#B2B2B2","footerHeight":5,"closeButtonRollOverBorderSize":0,"showEffect":{"duration":500,"class":"FadeInEffect","easing":"cubic_in_out"},"shadowOpacity":0.5,"shadowColor":"#000000","headerBackgroundColorDirection":"vertical","bodyPaddingBottom":0,"bodyPaddingTop":0,"headerPaddingTop":10,"shadowSpread":1,"closeButtonIconWidth":20,"closeButtonPressedBackgroundColorRatios":[],"closeButtonBorderRadius":11,"closeButtonPressedIconColor":"#FFFFFF","headerBackgroundOpacity":0,"titleFontSize":"1.29vmin","closeButtonRollOverBackgroundOpacity":0,"closeButtonPressedBackgroundColor":[],"veilOpacity":0.4,"closeButtonBackgroundColorRatios":[],"headerBackgroundColorRatios":[0,0.09803921568627451,1],"titlePaddingTop":5,"closeButtonPaddingRight":0,"closeButtonPaddingLeft":0,"width":"90%","closeButtonRollOverBackgroundColor":[],"gap":10,"height":"90%","closeButtonRollOverIconLineWidth":2,"propagateClick":false},{"hfovMin":60,"adjacentPanoramas":[{"data":{"overlayID":"overlay_6DECAFBF_7D6E_4E20_41D2_EAE914AFD179"},"panorama":"this.media_709FD7ED_7DA2_4A10_41D1_8599D48DDAB2","class":"AdjacentPanorama","yaw":4.41,"distance":1.7,"select":"this.overlay_6DECAFBF_7D6E_4E20_41D2_EAE914AFD179.get('areas').forEach(function(a){ a.trigger('click') })","backwardYaw":94.23}],"hfovMax":140,"label":trans('media_71385BB9_7DA2_3A71_41C2_B5F690AE827B.label'),"vfov":180,"thumbnailUrl":"media/media_71385BB9_7DA2_3A71_41C2_B5F690AE827B_t.jpg","overlays":["this.overlay_6DECAFBF_7D6E_4E20_41D2_EAE914AFD179","this.overlay_6CFDEBAD_7D62_5621_41DE_CD4A4BE4EC0D"],"id":"media_71385BB9_7DA2_3A71_41C2_B5F690AE827B","video":["this.videores_98265177_882B_1864_41C2_4504CB973525"],"pitch":0,"loop":true,"data":{"label":"ayutthaya_-_easy_tripod_paint___360_vr_master_series___free_download (2160p)"},"hfov":360,"class":"Video360"},{"hfovMin":60,"adjacentPanoramas":[{"data":{"overlayID":"overlay_6CD9F9DD_7D6F_D260_41D2_6163AB130A5C"},"panorama":"this.media_709FD7ED_7DA2_4A10_41D1_8599D48DDAB2","class":"AdjacentPanorama","yaw":-68,"distance":2.37,"select":"this.overlay_6CD9F9DD_7D6F_D260_41D2_6163AB130A5C.get('areas').forEach(function(a){ a.trigger('click') })","backwardYaw":-27.58}],"hfovMax":140,"label":trans('media_71D64CCB_7DA2_FE10_41CD_D7D92A6AFDC1.label'),"vfov":180,"thumbnailUrl":"media/media_71D64CCB_7DA2_FE10_41CD_D7D92A6AFDC1_t.jpg","overlays":["this.overlay_6CD9F9DD_7D6F_D260_41D2_6163AB130A5C"],"id":"media_71D64CCB_7DA2_FE10_41CD_D7D92A6AFDC1","video":["this.videores_87A1CE5B_882B_0BAC_41CF_3DDEAF4F8FAA"],"pitch":0,"loop":true,"data":{"label":"doi_suthep_-_hard_tripod_paint___360_vr_master_series___free_download (2160p)"},"hfov":360,"class":"Video360"},{"data":{"label":"Image","hasPanoramaAction":true},"class":"HotspotPanoramaOverlay","items":[{"pitch":-0.47,"playbackPositions":[{"pitch":7.03,"hfov":12,"class":"PanoramaOverlayPlaybackPosition","yaw":94.23,"timestamp":0,"roll":98.87,"opacity":0,"vfov":14.56},{"pitch":7.03,"hfov":12,"class":"PanoramaOverlayPlaybackPosition","yaw":94.23,"timestamp":19.7,"roll":98.87,"opacity":0,"vfov":14.56},{"pitch":7.03,"hfov":12,"class":"PanoramaOverlayPlaybackPosition","yaw":94.23,"timestamp":19.7,"roll":98.87,"vfov":14.56}],"yaw":61.1,"data":{"label":"Image"},"distance":50,"image":"this.res_6C3C708E_7CCB_0E43_41D3_878A085AED55","vfov":14.56,"scaleMode":"fit_inside","hfov":12,"class":"HotspotPanoramaOverlayImage","roll":-162}],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_721FBEA4_7C3E_F247_41D7_942399A9ACB4"],"useHandCursor":true,"maps":[],"id":"overlay_726B9DFF_7C3E_F1C1_41DB_20938BD8F386"},{"data":{"label":"Text"},"class":"HotspotPanoramaOverlay","items":["this.HotspotPanoramaOverlayTextImage_73BF9825_7C3F_3E41_41DE_2B1DBE808FB4"],"enabledInCardboard":true,"maps":[],"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_7277F87B_7C3F_3EC1_41D3_D364362DCBEC"],"id":"overlay_73BCF827_7C3F_3E41_41C3_62FEA8957C08"},{"data":{"label":"Text"},"class":"HotspotPanoramaOverlay","items":["this.HotspotPanoramaOverlayTextImage_6C398075_7C39_0EC1_41DC_5954898D642F"],"enabledInCardboard":true,"maps":[],"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_6C36C077_7C39_0EC1_41DA_EB250E29C554"],"id":"overlay_6C3C5071_7C39_0EC1_41D6_24BA0262A258"},{"data":{"label":"Image","hasPanoramaAction":true},"class":"HotspotPanoramaOverlay","items":[{"pitch":-8.24,"playbackPositions":[{"pitch":5.08,"hfov":14.12,"class":"PanoramaOverlayPlaybackPosition","yaw":-27.58,"timestamp":0,"roll":89.26,"opacity":0,"vfov":10.78},{"pitch":5.08,"hfov":14.12,"class":"PanoramaOverlayPlaybackPosition","yaw":-27.58,"timestamp":19.7,"roll":89.26,"opacity":0,"vfov":10.78},{"pitch":5.08,"hfov":14.12,"class":"PanoramaOverlayPlaybackPosition","yaw":-27.58,"timestamp":19.7,"roll":89.26,"vfov":10.78}],"yaw":-28.93,"data":{"label":"Image"},"distance":50,"image":"this.res_6C3C708E_7CCB_0E43_41D3_878A085AED55","vfov":14.56,"scaleMode":"fit_inside","hfov":12,"class":"HotspotPanoramaOverlayImage","roll":-81.74}],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_73D0E4FC_7C3B_17C7_41C5_F57E4D8A8F79"],"useHandCursor":true,"maps":[],"id":"overlay_73D074FC_7C3B_17C7_41D3_E1F46DC56F59"},{"data":{"label":"Image"},"class":"HotspotPanoramaOverlay","items":[{"pitch":-3.09,"yaw":-161.78,"data":{"label":"Image"},"distance":50,"image":"this.res_6FF880B9_7D66_7223_41BC_5C24C66DDAA9","vfov":12,"scaleMode":"fit_inside","hfov":12,"class":"HotspotPanoramaOverlayImage","playbackPositions":[{"pitch":-3.09,"hfov":12,"class":"PanoramaOverlayPlaybackPosition","yaw":-161.78,"timestamp":0,"vfov":12}]}],"areas":["this.HotspotPanoramaOverlayArea_6EEDCEDA_7CD9_13C3_41C0_91CDABFC6667"],"useHandCursor":true,"maps":[],"id":"overlay_6EEE0ED7_7CD9_13C0_41A5_E4FF5DA3C2B5"},{"data":{"label":"Image"},"class":"HotspotPanoramaOverlay","items":[{"pitch":-2.92,"yaw":-177.09,"data":{"label":"Image"},"distance":50,"image":"this.res_6FF8E0BA_7D66_7220_41D8_67DDC8E4DFCA","vfov":12,"scaleMode":"fit_inside","hfov":12,"class":"HotspotPanoramaOverlayImage","playbackPositions":[{"pitch":-2.92,"hfov":12,"class":"PanoramaOverlayPlaybackPosition","yaw":-177.09,"timestamp":0,"vfov":12}]}],"areas":["this.HotspotPanoramaOverlayArea_6DAE1A30_7CD9_F25F_41C1_59BD746BC59A"],"useHandCursor":true,"maps":[],"id":"overlay_6EC2F9FF_7CD9_F1C1_41B1_C2D90C2EC87D"},{"data":{"label":"Image"},"class":"HotspotPanoramaOverlay","items":[{"pitch":-3.84,"yaw":-147.08,"data":{"label":"Image"},"distance":50,"image":"this.res_6FF8C0BA_7D66_7220_41DF_38B25D72D06C","vfov":12,"scaleMode":"fit_inside","hfov":12,"class":"HotspotPanoramaOverlayImage","playbackPositions":[{"pitch":-3.84,"hfov":12,"class":"PanoramaOverlayPlaybackPosition","yaw":-147.08,"timestamp":0,"vfov":12}]}],"areas":["this.HotspotPanoramaOverlayArea_6EDFE8D9_7CDB_1FC1_41D8_6EAEB163ACE1"],"useHandCursor":true,"maps":[],"id":"overlay_6EDBD8D0_7CDB_1FDF_41D0_F6C9552C5394"},{"data":{"label":"Arrow 02 Right-Up"},"class":"HotspotPanoramaOverlay","items":[{"pitch":3.14,"yaw":91.77,"distance":50,"image":"this.AnimatedImageResource_98207257_882B_3BA4_41B0_FB787D36884C","vfov":12,"scaleMode":"fit_inside","hfov":12,"class":"HotspotPanoramaOverlayImage","playbackPositions":[{"pitch":3.14,"hfov":12,"class":"PanoramaOverlayPlaybackPosition","yaw":91.77,"timestamp":0,"vfov":12}],"data":{"label":"Arrow 02 Right-Up"}}],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_9613DFB1_86FE_50E7_41D4_378616633A60"],"useHandCursor":true,"maps":[],"id":"overlay_966C7F85_86FE_50AF_41D5_419E2F001B2A"},{"data":{"label":"Arrow 02 Right","hasPanoramaAction":true},"class":"HotspotPanoramaOverlay","items":[{"pitch":0,"yaw":-26.44,"distance":50,"image":"this.AnimatedImageResource_98202258_882B_3BAC_41D8_2F8C09428523","vfov":12,"scaleMode":"fit_inside","hfov":12,"class":"HotspotPanoramaOverlayImage","playbackPositions":[{"pitch":0,"hfov":12,"class":"PanoramaOverlayPlaybackPosition","yaw":-26.44,"timestamp":0,"vfov":12}],"data":{"label":"Arrow 02 Right"}}],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_97A29F1E_86FF_D1DD_41D1_AB13F6A0E4ED"],"useHandCursor":true,"maps":[],"id":"overlay_97B36F18_86FF_D1A5_41C4_A0A62AAD99E8"},{"gain":0,"width":2048,"codec":"h264","height":1024,"type":"video/mp4","url":trans('videores_868CBA6A_882B_086F_41B8_A6433EE96C66.url'),"class":"Video360Resource","framerate":29.97,"id":"videores_868CBA6A_882B_086F_41B8_A6433EE96C66","bitrate":5028,"posterURL":trans('videores_868CBA6A_882B_086F_41B8_A6433EE96C66.posterURL')},{"minHeight":0,"id":"WebFrame_9838530A_882B_39AC_41D7_1BE0D732DD80","minWidth":0,"backgroundColor":[],"data":{"name":"WebFrame3942"},"backgroundColorRatios":[],"class":"WebFrame","url":trans('WebFrame_9838530A_882B_39AC_41D7_1BE0D732DD80.url'),"height":"100%","width":"100%","propagateClick":false},{"data":{"label":"Image","hasPanoramaAction":true},"class":"HotspotPanoramaOverlay","items":[{"pitch":-45.06,"yaw":4.41,"data":{"label":"Image"},"distance":50,"image":"this.res_6FF8D0BA_7D66_7220_41C9_C9A9265554C8","vfov":5.93,"scaleMode":"fit_inside","hfov":17.81,"class":"HotspotPanoramaOverlayImage","playbackPositions":[{"pitch":-45.06,"hfov":17.81,"class":"PanoramaOverlayPlaybackPosition","yaw":4.41,"timestamp":0,"vfov":5.93}]}],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_729CD035_7D6E_5221_41D6_ACF5DE5D4B95"],"useHandCursor":true,"maps":[],"id":"overlay_6DECAFBF_7D6E_4E20_41D2_EAE914AFD179"},{"data":{"label":"Image"},"class":"HotspotPanoramaOverlay","items":[{"pitch":-29.7,"yaw":-178.12,"data":{"label":"Image"},"distance":50,"image":"this.res_6FF800BA_7D66_7220_41CF_36888788F43A","vfov":5.93,"scaleMode":"fit_inside","hfov":12,"class":"HotspotPanoramaOverlayImage","playbackPositions":[{"pitch":-29.7,"hfov":12,"class":"PanoramaOverlayPlaybackPosition","yaw":-178.12,"timestamp":0,"vfov":5.93}]}],"areas":["this.HotspotPanoramaOverlayArea_6D147C1E_7D62_51E3_41BE_E7FCF0C29422"],"useHandCursor":true,"maps":[],"id":"overlay_6CFDEBAD_7D62_5621_41DE_CD4A4BE4EC0D"},{"gain":0,"width":2048,"codec":"h264","height":1024,"type":"video/mp4","url":trans('videores_98265177_882B_1864_41C2_4504CB973525.url'),"class":"Video360Resource","framerate":29.97,"id":"videores_98265177_882B_1864_41C2_4504CB973525","bitrate":5028,"posterURL":trans('videores_98265177_882B_1864_41C2_4504CB973525.posterURL')},{"data":{"label":"Image","hasPanoramaAction":true},"class":"HotspotPanoramaOverlay","items":[{"pitch":-35.66,"yaw":-68,"data":{"label":"Image"},"distance":50,"image":"this.res_6FF800BA_7D66_7220_41CF_36888788F43A","vfov":8.18,"scaleMode":"fit_inside","hfov":16.72,"class":"HotspotPanoramaOverlayImage","playbackPositions":[{"pitch":-35.66,"hfov":16.72,"class":"PanoramaOverlayPlaybackPosition","yaw":-68,"timestamp":0,"vfov":8.18}]}],"enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_6CBA89F7_7D6F_D221_41B7_B1231B52DE5E"],"useHandCursor":true,"maps":[],"id":"overlay_6CD9F9DD_7D6F_D260_41D2_6163AB130A5C"},{"gain":0,"width":2048,"codec":"h264","height":1024,"type":"video/mp4","url":trans('videores_87A1CE5B_882B_0BAC_41CF_3DDEAF4F8FAA.url'),"class":"Video360Resource","framerate":29.97,"id":"videores_87A1CE5B_882B_0BAC_41CF_3DDEAF4F8FAA","bitrate":5028,"posterURL":trans('videores_87A1CE5B_882B_0BAC_41CF_3DDEAF4F8FAA.posterURL')},{"levels":[{"width":96,"url":"media/res_6C3C708E_7CCB_0E43_41D3_878A085AED55_0.png","class":"ImageResourceLevel","height":117}],"class":"ImageResource","id":"res_6C3C708E_7CCB_0E43_41D3_878A085AED55"},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 1); this.MainViewerPanoramaPlayer.play()","mapColor":"any","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_721FBEA4_7C3E_F247_41D7_942399A9ACB4"},{"id":"HotspotPanoramaOverlayTextImage_73BF9825_7C3F_3E41_41DE_2B1DBE808FB4","distance":50,"image":{"levels":["this.imlevel_712469AE_7DA5_C610_41D9_D2EB5F49A526"],"class":"ImageResource"},"vfov":14.47,"playbackPositions":[{"pitch":1.41,"hfov":32.27,"class":"PanoramaOverlayPlaybackPosition","yaw":82.06,"timestamp":0,"vfov":14.47}],"pitch":1.41,"yaw":82.06,"data":{"label":"Text"},"hfov":32.27,"class":"HotspotPanoramaOverlayImage"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_7277F87B_7C3F_3EC1_41D3_D364362DCBEC","displayTooltipInTouchScreens":true},{"id":"HotspotPanoramaOverlayTextImage_6C398075_7C39_0EC1_41DC_5954898D642F","distance":50,"image":{"levels":["this.imlevel_716989F7_7DA6_39F1_41DB_F8B407AC3B37"],"class":"ImageResource"},"vfov":14.47,"playbackPositions":[{"pitch":1.55,"hfov":25.43,"class":"PanoramaOverlayPlaybackPosition","yaw":-42.17,"timestamp":0,"vfov":14.47}],"pitch":1.55,"yaw":-42.17,"data":{"label":"Text"},"hfov":25.43,"class":"HotspotPanoramaOverlayImage"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_6C36C077_7C39_0EC1_41DA_EB250E29C554","displayTooltipInTouchScreens":true},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 2); this.MainViewerPanoramaPlayer.play()","mapColor":"any","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_73D0E4FC_7C3B_17C7_41C5_F57E4D8A8F79"},{"levels":[{"width":96,"url":"media/res_6FF880B9_7D66_7223_41BC_5C24C66DDAA9_0.png","class":"ImageResourceLevel","height":96}],"class":"ImageResource","id":"res_6FF880B9_7D66_7223_41BC_5C24C66DDAA9"},{"click":"this.openLink(this.translate('LinkBehaviour_6D132B9B_7CD9_F241_41DE_AD027E5EADD6.source'), '_top')","mapColor":"any","class":"HotspotPanoramaOverlayArea","toolTip":trans('HotspotPanoramaOverlayArea_6EEDCEDA_7CD9_13C3_41C0_91CDABFC6667.toolTip'),"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_6EEDCEDA_7CD9_13C3_41C0_91CDABFC6667"},{"levels":[{"width":96,"url":"media/res_6FF8E0BA_7D66_7220_41D8_67DDC8E4DFCA_0.png","class":"ImageResourceLevel","height":96}],"class":"ImageResource","id":"res_6FF8E0BA_7D66_7220_41D8_67DDC8E4DFCA"},{"click":"this.openLink(this.translate('LinkBehaviour_6E6F0B00_7CD9_123F_41DE_4F4FDB3A13B8.source'), '_blank')","mapColor":"any","class":"HotspotPanoramaOverlayArea","toolTip":trans('HotspotPanoramaOverlayArea_6DAE1A30_7CD9_F25F_41C1_59BD746BC59A.toolTip'),"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_6DAE1A30_7CD9_F25F_41C1_59BD746BC59A"},{"levels":[{"width":96,"url":"media/res_6FF8C0BA_7D66_7220_41DF_38B25D72D06C_0.png","class":"ImageResourceLevel","height":96}],"class":"ImageResource","id":"res_6FF8C0BA_7D66_7220_41DF_38B25D72D06C"},{"click":"this.openLink(this.translate('LinkBehaviour_6D13C2D4_7CD9_33C0_41DE_855D26FDF1D8.source'), '_self')","mapColor":"any","class":"HotspotPanoramaOverlayArea","toolTip":trans('HotspotPanoramaOverlayArea_6EDFE8D9_7CDB_1FC1_41D8_6EAEB163ACE1.toolTip'),"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_6EDFE8D9_7CDB_1FC1_41D8_6EAEB163ACE1"},{"id":"AnimatedImageResource_98207257_882B_3BA4_41B0_FB787D36884C","frameCount":24,"finalFrame":"first","rowCount":6,"class":"AnimatedImageResource","frameDuration":41,"colCount":4,"levels":[{"width":380,"url":"media/res_94ED4DFB_86FE_F05A_419D_CCD5D6C7493A_0.png","class":"ImageResourceLevel","height":570}]},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 1); this.MainViewerPanoramaPlayer.play()","mapColor":"any","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_9613DFB1_86FE_50E7_41D4_378616633A60"},{"id":"AnimatedImageResource_98202258_882B_3BAC_41D8_2F8C09428523","frameCount":24,"finalFrame":"first","rowCount":6,"class":"AnimatedImageResource","frameDuration":41,"colCount":4,"levels":[{"width":380,"url":"media/res_94ED7DFB_86FE_F05A_41D5_CC367E49D126_0.png","class":"ImageResourceLevel","height":570}]},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 2); this.MainViewerPanoramaPlayer.play()","mapColor":"any","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_97A29F1E_86FF_D1DD_41D1_AB13F6A0E4ED"},{"levels":[{"width":98,"url":"media/res_6FF8D0BA_7D66_7220_41C9_C9A9265554C8_0.png","class":"ImageResourceLevel","height":47}],"class":"ImageResource","id":"res_6FF8D0BA_7D66_7220_41C9_C9A9265554C8"},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 0); this.MainViewerPanoramaPlayer.play()","mapColor":"any","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_729CD035_7D6E_5221_41D6_ACF5DE5D4B95"},{"levels":[{"width":131,"url":"media/res_6FF800BA_7D66_7220_41CF_36888788F43A_0.png","class":"ImageResourceLevel","height":66}],"class":"ImageResource","id":"res_6FF800BA_7D66_7220_41CF_36888788F43A"},{"click":"this.WebFrame_9838530A_882B_39AC_41D7_1BE0D732DD80.set('url', this.translate('PopupWebFrameBehaviour_6D9E4E66_7D62_CE23_4170_1E3C362B2C32.url')); this.showWindow(this.window_6D87FE64_7D62_CE20_41DF_42C745C02055, null, false)","mapColor":"any","class":"HotspotPanoramaOverlayArea","toolTip":trans('HotspotPanoramaOverlayArea_6D147C1E_7D62_51E3_41BE_E7FCF0C29422.toolTip'),"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_6D147C1E_7D62_51E3_41BE_E7FCF0C29422"},{"click":"this.setPlayListSelectedIndex(this.mainPlayList, 0); this.MainViewerPanoramaPlayer.play()","mapColor":"any","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_6CBA89F7_7D6F_D221_41B7_B1231B52DE5E"},{"width":734.34,"url":trans('imlevel_712469AE_7DA5_C610_41D9_D2EB5F49A526.url'),"class":"ImageResourceLevel","height":322.3,"id":"imlevel_712469AE_7DA5_C610_41D9_D2EB5F49A526"},{"width":578.75,"url":trans('imlevel_716989F7_7DA6_39F1_41DB_F8B407AC3B37.url'),"class":"ImageResourceLevel","height":325.64,"id":"imlevel_716989F7_7DA6_39F1_41DB_F8B407AC3B37"}],"scrollBarColor":"#000000","scrollBarMargin":2,"height":"100%","children":["this.MainViewer"],"width":"100%","gap":10,"layout":"absolute","propagateClick":false};
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