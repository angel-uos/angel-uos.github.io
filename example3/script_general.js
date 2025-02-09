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
var script = {"start":"this.init()","backgroundColor":["#FFFFFF"],"data":{"locales":{"en":"locale/en.txt"},"displayTooltipInTouchScreens":true,"textToSpeechConfig":{"volume":1,"rate":1,"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"speechOnTooltip":false,"pitch":1,"speechOnInfoWindow":false},"name":"Player19555","history":{},"defaultLocale":"en"},"id":"rootPlayer","scrollBarMargin":2,"hash": "f72c40a6555a873eb1675d5f6cfc986eeb94f6efe220c94181e329588fae9b0c", "definitions": [{"playbackBarHeadShadowColor":"#000000","vrPointerSelectionColor":"#FF6600","subtitlesBackgroundColor":"#000000","playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadow":true,"playbackBarHeadBorderSize":0,"toolTipPaddingTop":4,"subtitlesTextShadowOpacity":1,"data":{"name":"Main Viewer"},"vrPointerSelectionTime":2000,"progressBorderRadius":2,"progressBackgroundColor":["#000000"],"playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesFontColor":"#FFFFFF","surfaceReticleColor":"#FFFFFF","playbackBarBottom":5,"progressLeft":"33%","toolTipFontColor":"#606060","toolTipFontSize":"1.11vmin","toolTipShadowColor":"#333138","subtitlesTop":0,"playbackBarBackgroundColor":["#FFFFFF"],"progressBottom":10,"playbackBarHeight":10,"subtitlesFontSize":"3vmin","vrPointerColor":"#FFFFFF","subtitlesTextShadowColor":"#000000","playbackBarHeadWidth":6,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarProgressBorderSize":0,"playbackBarBackgroundOpacity":1,"subtitlesBackgroundOpacity":0.2,"playbackBarBackgroundColorDirection":"vertical","toolTipTextShadowColor":"#000000","toolTipBackgroundColor":"#F6F6F6","progressBackgroundColorRatios":[0],"playbackBarRight":0,"subtitlesBorderColor":"#FFFFFF","playbackBarProgressBorderRadius":0,"playbackBarProgressBackgroundColor":["#3399FF"],"progressRight":"33%","id":"MainViewer","progressHeight":2,"progressBarBackgroundColorDirection":"horizontal","playbackBarHeadShadowOpacity":0.7,"progressOpacity":0.7,"progressBorderSize":0,"progressBarBorderRadius":2,"progressBarBorderColor":"#000000","playbackBarProgressBackgroundColorRatios":[0],"subtitlesBottom":50,"toolTipFontFamily":"Arial","toolTipPaddingRight":6,"subtitlesTextShadowHorizontalLength":1,"playbackBarBorderRadius":0,"progressBarBackgroundColorRatios":[0],"firstTransitionDuration":0,"subtitlesFontFamily":"Arial","minHeight":50,"minWidth":100,"playbackBarBorderColor":"#FFFFFF","playbackBarProgressBorderColor":"#000000","progressBarBorderSize":0,"class":"ViewerArea","subtitlesTextShadowVerticalLength":1,"toolTipPaddingLeft":6,"propagateClick":false,"playbackBarHeadBorderRadius":0,"playbackBarHeadBorderColor":"#000000","progressBorderColor":"#000000","toolTipPaddingBottom":4,"subtitlesGap":0,"playbackBarHeadShadowBlurRadius":3,"progressBarBackgroundColor":["#3399FF"],"playbackBarBorderSize":0,"vrThumbstickRotationStep":20,"toolTipBorderColor":"#767676","height":"100%","playbackBarHeadHeight":15,"width":"100%","playbackBarLeft":0},{"id":"panorama_BBB1587E_EB6F_AD1C_41C3_A78C1148A4E7_camera","initialSequence":"this.sequence_A600200B_EB6F_9CE4_41D2_4530BB3D690B","enterPointingToHorizon":true,"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"class":"PanoramaCamera"},{"arrowKeysAction":"translate","keepModel3DLoadedWithoutLocation":true,"displayPlaybackBar":true,"aaEnabled":true,"mouseControlMode":"drag_rotation","class":"PanoramaPlayer","touchControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer","buttonCardboardView":"this.IconButton_B9FF184D_EB60_AD7C_4185_4990844B4E5C","viewerArea":"this.MainViewer"},{"bottom":"1.93%","tabIndex":0,"horizontalAlign":"center","data":{"name":"IconButton7201"},"right":"1.29%","id":"IconButton_B9FF184D_EB60_AD7C_4185_4990844B4E5C","maxHeight":23,"iconURL":"skin/IconButton_B9FF184D_EB60_AD7C_4185_4990844B4E5C.png","maxWidth":35,"minHeight":1,"minWidth":1,"class":"IconButton","width":35,"verticalAlign":"middle","height":23,"backgroundOpacity":0,"propagateClick":false},{"frames":[{"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_BBB1587E_EB6F_AD1C_41C3_A78C1148A4E7_t.webp","cube":{"levels":[{"class":"TiledImageResourceLevel","height":2048,"rowCount":4,"width":12288,"tags":"ondemand","url":"media/panorama_BBB1587E_EB6F_AD1C_41C3_A78C1148A4E7_0/{face}/0/{row}_{column}.webp","colCount":24},{"class":"TiledImageResourceLevel","height":1024,"rowCount":2,"width":6144,"tags":"ondemand","url":"media/panorama_BBB1587E_EB6F_AD1C_41C3_A78C1148A4E7_0/{face}/1/{row}_{column}.webp","colCount":12},{"class":"TiledImageResourceLevel","height":512,"rowCount":1,"width":3072,"tags":["ondemand","preload"],"url":"media/panorama_BBB1587E_EB6F_AD1C_41C3_A78C1148A4E7_0/{face}/2/{row}_{column}.webp","colCount":6}],"class":"ImageResource"}}],"thumbnailUrl":"media/panorama_BBB1587E_EB6F_AD1C_41C3_A78C1148A4E7_t.webp","hfovMax":130,"data":{"label":"CSI_Room_07"},"hfovMin":"135%","class":"Panorama","label":trans('panorama_BBB1587E_EB6F_AD1C_41C3_A78C1148A4E7.label'),"id":"panorama_BBB1587E_EB6F_AD1C_41C3_A78C1148A4E7","vfov":180,"hfov":360},{"class":"PlayList","id":"mainPlayList","items":[{"end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_BBB1587E_EB6F_AD1C_41C3_A78C1148A4E7_camera","media":"this.panorama_BBB1587E_EB6F_AD1C_41C3_A78C1148A4E7","class":"PanoramaPlayListItem"}]},{"movements":[{"easing":"cubic_in","yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"}],"id":"sequence_A600200B_EB6F_9CE4_41D2_4530BB3D690B","class":"PanoramaCameraSequence"}],"defaultMenu":["fullscreen","mute","rotation"],"layout":"absolute","backgroundColorRatios":[0],"children":["this.MainViewer","this.IconButton_B9FF184D_EB60_AD7C_4185_4990844B4E5C"],"scripts":{"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"openLink":TDV.Tour.Script.openLink,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"playAudioList":TDV.Tour.Script.playAudioList,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"setValue":TDV.Tour.Script.setValue,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getMainViewer":TDV.Tour.Script.getMainViewer,"startMeasurement":TDV.Tour.Script.startMeasurement,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getPixels":TDV.Tour.Script.getPixels,"getOverlays":TDV.Tour.Script.getOverlays,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getKey":TDV.Tour.Script.getKey,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"initQuiz":TDV.Tour.Script.initQuiz,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"mixObject":TDV.Tour.Script.mixObject,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"init":TDV.Tour.Script.init,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"showWindow":TDV.Tour.Script.showWindow,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"initAnalytics":TDV.Tour.Script.initAnalytics,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"downloadFile":TDV.Tour.Script.downloadFile,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"existsKey":TDV.Tour.Script.existsKey,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"isPanorama":TDV.Tour.Script.isPanorama,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"unregisterKey":TDV.Tour.Script.unregisterKey,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"setMapLocation":TDV.Tour.Script.setMapLocation,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"resumePlayers":TDV.Tour.Script.resumePlayers,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"showPopupImage":TDV.Tour.Script.showPopupImage,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"executeJS":TDV.Tour.Script.executeJS,"createTween":TDV.Tour.Script.createTween,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"textToSpeech":TDV.Tour.Script.textToSpeech,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"clone":TDV.Tour.Script.clone,"cloneBindings":TDV.Tour.Script.cloneBindings,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"historyGoForward":TDV.Tour.Script.historyGoForward,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"getMediaByName":TDV.Tour.Script.getMediaByName,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"registerKey":TDV.Tour.Script.registerKey,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"quizFinish":TDV.Tour.Script.quizFinish,"shareSocial":TDV.Tour.Script.shareSocial,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"quizStart":TDV.Tour.Script.quizStart,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"quizShowScore":TDV.Tour.Script.quizShowScore,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"disableVR":TDV.Tour.Script.disableVR,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getComponentByName":TDV.Tour.Script.getComponentByName,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"translate":TDV.Tour.Script.translate,"toggleVR":TDV.Tour.Script.toggleVR,"historyGoBack":TDV.Tour.Script.historyGoBack,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setLocale":TDV.Tour.Script.setLocale,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"enableVR":TDV.Tour.Script.enableVR,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange},"minHeight":0,"minWidth":0,"class":"Player","propagateClick":false,"gap":10,"height":"100%","width":"100%","watermark":false,"scrollBarColor":"#000000"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.0.6, Sun Feb 9 2025