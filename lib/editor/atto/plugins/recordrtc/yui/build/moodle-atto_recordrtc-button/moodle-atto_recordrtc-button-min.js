YUI.add("moodle-atto_recordrtc-button",function(e,t){var n="atto_recordrtc",r='<div class="{{PLUGINNAME}} container-fluid"><div class="{{bs_row}} hide"><div class="{{bs_col}}12"><div id="alert-warning" class="alert {{bs_al_warn}}"><strong>{{browseralert_title}}</strong> {{browseralert}}</div></div></div><div class="{{bs_row}} hide"><div class="{{bs_col}}12"><div id="alert-danger" class="alert {{bs_al_dang}}"><strong>{{insecurealert_title}}</strong> {{insecurealert}}</div></div></div><div class="{{bs_row}} hide">{{#if isAudio}}<div class="{{bs_col}}1"></div><div class="{{bs_col}}10"><audio id="player"></audio></div><div class="{{bs_col}}1"></div>{{else}}<div class="{{bs_col}}12"><video id="player"></video></div>{{/if}}</div><div class="{{bs_row}}"><div class="{{bs_col}}1"></div><div class="{{bs_col}}10"><button id="start-stop" class="{{bs_ss_btn}}">{{startrecording}}</button></div><div class="{{bs_col}}1"></div></div><div class="{{bs_row}} hide"><div class="{{bs_col}}3"></div><div class="{{bs_col}}6"><button id="upload" class="btn btn-primary btn-block">{{attachrecording}}</button></div><div class="{{bs_col}}3"></div></div></div>';e.namespace("M.atto_recordrtc").Button=e.Base.create("button",e.M.editor_atto.EditorPlugin,[],{_lang:"en",initializer:function(){if(this.get("host").canShowFilepicker("media")){var e=this.get("allowedtypes");(e==="both"||e==="audio")&&this._addButton("audio",this._audio),(e==="both"||e==="video")&&this._addButton("video",this._video);var t=this.getDialogue({width:1e3,focusAfterHide:null});t.after("visibleChange",function(){var e=!t.get("visible"),n=M.atto_recordrtc.commonmodule;e&&(window.clearInterval(n.countdownTicker),n.mediaRecorder&&n.mediaRecorder.state!=="inactive"&&n.mediaRecorder.stop(),n.stream&&n.stream.getTracks().forEach(function(e){e.readyState!=="ended"&&e.stop()}))}),t.on("click",function(){this.centered()}),require(["atto_recordrtc/adapter"],function(e){window.adapter=e}),require(["atto_recordrtc/bowser"],function(e){window.bowser=e})}},_addButton:function(e,t){this.addButton({buttonName:e,icon:this.get(e+"rtcicon"),iconComponent:n,callback:t,title:e+"rtc",tags:e+"rtc",tagMatchRequiresAll:!1})},_audio:function(){var e=this.getDialogue();e.set("headerContent",M.util.get_string("audiortc","atto_recordrtc")),e.set("bodyContent",this._createContent("audio")),e.show(),M.atto_recordrtc.audiomodule.init(this)},_video:function(){var e=this.getDialogue();e.set("headerContent",M.util.get_string("videortc","atto_recordrtc")),e.set("bodyContent",this._createContent("video")),e.show(),M.atto_recordrtc.videomodule.init(this)},_createContent:function(t){var i=t==="audio",s=this.get("oldermoodle")?"row-fluid":"row",o=this.get("oldermoodle")?"span":"col-xs-",u=this.get("oldermoodle")?"":"alert-warning",a=this.get("oldermoodle")?"alert-error":"alert-danger",f=this.get("oldermoodle")?"btn btn-large btn-danger btn-block":"btn btn-lg btn-outline-danger btn-block",l=e.Handlebars.compile(r)({PLUGINNAME:n,isAudio:i,bs_row:s,bs_col:o,bs_al_warn:u,bs_al_dang:a,bs_ss_btn:f,bs_ul_btn:"btn btn-primary btn-block",browseralert_title:M.util.get_string("browseralert_title","atto_recordrtc"),browseralert:M.util.get_string("browseralert","atto_recordrtc"),insecurealert_title:M.util.get_string("insecurealert_title","atto_recordrtc"),insecurealert:M.util.get_string("insecurealert","atto_recordrtc"),startrecording:M.util.get_string("startrecording","atto_recordrtc"),attachrecording:M.util.get_string("attachrecording","atto_recordrtc")});return l},closeDialogue:function(e){e.getDialogue().hide(),e.editor.focus()},setLink:function(e,t){e.getDialogue().hide(),e.editor.focus(),e.get("host").insertContentAtFocusPoint(t),e.markUpdated()}},{ATTRS:{contextid:{value:null},sesskey:{value:null},allowedtypes:{value:null},audiobitrate:{value:null},videobitrate:{value:null},timelimit:{value:null},audiortcicon:{value:null},videortcicon:{value:null},oldermoodle:{value:null},maxrecsize:{value:null}}})},"@VERSION@",{requires:["moodle-editor_atto-plugin","moodle-atto_recordrtc-recording"]});