webpackJsonp([0],{

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaPlayerModule", function() { return MediaPlayerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__media_player__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_videogular2_core__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_videogular2_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_videogular2_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_videogular2_controls__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_videogular2_controls___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_videogular2_controls__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_videogular2_overlay_play__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_videogular2_overlay_play___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_videogular2_overlay_play__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_videogular2_buffering__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_videogular2_buffering___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_videogular2_buffering__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var MediaPlayerModule = (function () {
    function MediaPlayerModule() {
    }
    MediaPlayerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__media_player__["a" /* MediaPlayer */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__media_player__["a" /* MediaPlayer */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_4_videogular2_core__["VgCoreModule"],
                __WEBPACK_IMPORTED_MODULE_5_videogular2_controls__["VgControlsModule"],
                __WEBPACK_IMPORTED_MODULE_6_videogular2_overlay_play__["VgOverlayPlayModule"],
                __WEBPACK_IMPORTED_MODULE_7_videogular2_buffering__["VgBufferingModule"],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__media_player__["a" /* MediaPlayer */]
            ]
        })
    ], MediaPlayerModule);
    return MediaPlayerModule;
}());

//# sourceMappingURL=media-player.module.js.map

/***/ }),

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var vg_states_1 = __webpack_require__(338);
var VgAPI = (function () {
    function VgAPI() {
        this.medias = {};
        this.playerReadyEvent = new core_1.EventEmitter(true);
        this.isPlayerReady = false;
    }
    VgAPI.prototype.onPlayerReady = function (fsAPI) {
        this.fsAPI = fsAPI;
        this.isPlayerReady = true;
        this.playerReadyEvent.emit(this);
    };
    VgAPI.prototype.getDefaultMedia = function () {
        for (var item in this.medias) {
            if (this.medias[item]) {
                return this.medias[item];
            }
        }
    };
    VgAPI.prototype.getMasterMedia = function () {
        var master;
        for (var id in this.medias) {
            if (this.medias[id].vgMedia === 'true' || this.medias[id].vgMedia === true) {
                master = this.medias[id];
                break;
            }
        }
        return master || this.getDefaultMedia();
    };
    VgAPI.prototype.isMasterDefined = function () {
        var result = false;
        for (var id in this.medias) {
            if (this.medias[id].vgMedia === 'true' || this.medias[id].vgMedia === true) {
                result = true;
                break;
            }
        }
        return result;
    };
    VgAPI.prototype.getMediaById = function (id) {
        if (id === void 0) { id = null; }
        var media = this.medias[id];
        if (!id || id === '*') {
            media = this;
        }
        return media;
    };
    VgAPI.prototype.play = function () {
        for (var id in this.medias) {
            if (this.medias[id]) {
                this.medias[id].play();
            }
        }
    };
    VgAPI.prototype.pause = function () {
        for (var id in this.medias) {
            if (this.medias[id]) {
                this.medias[id].pause();
            }
        }
    };
    Object.defineProperty(VgAPI.prototype, "duration", {
        get: function () {
            return this.$$getAllProperties('duration');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "currentTime", {
        get: function () {
            return this.$$getAllProperties('currentTime');
        },
        set: function (seconds) {
            this.$$setAllProperties('currentTime', seconds);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "state", {
        get: function () {
            return this.$$getAllProperties('state');
        },
        set: function (state) {
            this.$$setAllProperties('state', state);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "volume", {
        get: function () {
            return this.$$getAllProperties('volume');
        },
        set: function (volume) {
            this.$$setAllProperties('volume', volume);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "playbackRate", {
        get: function () {
            return this.$$getAllProperties('playbackRate');
        },
        set: function (rate) {
            this.$$setAllProperties('playbackRate', rate);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "canPlay", {
        get: function () {
            return this.$$getAllProperties('canPlay');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "canPlayThrough", {
        get: function () {
            return this.$$getAllProperties('canPlayThrough');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "isMetadataLoaded", {
        get: function () {
            return this.$$getAllProperties('isMetadataLoaded');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "isWaiting", {
        get: function () {
            return this.$$getAllProperties('isWaiting');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "isCompleted", {
        get: function () {
            return this.$$getAllProperties('isCompleted');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "isLive", {
        get: function () {
            return this.$$getAllProperties('isLive');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "isMaster", {
        get: function () {
            return this.$$getAllProperties('isMaster');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "time", {
        get: function () {
            return this.$$getAllProperties('time');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "buffer", {
        get: function () {
            return this.$$getAllProperties('buffer');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "buffered", {
        get: function () {
            return this.$$getAllProperties('buffered');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "subscriptions", {
        get: function () {
            return this.$$getAllProperties('subscriptions');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "textTracks", {
        get: function () {
            return this.$$getAllProperties('textTracks');
        },
        enumerable: true,
        configurable: true
    });
    VgAPI.prototype.seekTime = function (value, byPercent) {
        if (byPercent === void 0) { byPercent = false; }
        for (var id in this.medias) {
            if (this.medias[id]) {
                this.$$seek(this.medias[id], value, byPercent);
            }
        }
    };
    VgAPI.prototype.$$seek = function (media, value, byPercent) {
        if (byPercent === void 0) { byPercent = false; }
        var second;
        var duration = media.duration;
        if (byPercent) {
            if (this.isMasterDefined()) {
                duration = this.getMasterMedia().duration;
            }
            second = value * duration / 100;
        }
        else {
            second = value;
        }
        media.currentTime = second;
    };
    VgAPI.prototype.addTextTrack = function (type, label, language) {
        for (var id in this.medias) {
            if (this.medias[id]) {
                this.$$addTextTrack(this.medias[id], type, label, language);
            }
        }
    };
    VgAPI.prototype.$$addTextTrack = function (media, type, label, language) {
        media.addTextTrack(type, label, language);
    };
    VgAPI.prototype.$$getAllProperties = function (property) {
        var medias = {};
        var result;
        for (var id in this.medias) {
            if (this.medias[id]) {
                medias[id] = this.medias[id];
            }
        }
        var nMedias = Object.keys(medias).length;
        switch (nMedias) {
            case 0:
                // Return default values until vgMedia is initialized
                switch (property) {
                    case 'state':
                        result = vg_states_1.VgStates.VG_PAUSED;
                        break;
                    case 'playbackRate':
                    case 'volume':
                        result = 1;
                        break;
                    case 'time':
                        result = { current: 0, total: 0, left: 0 };
                        break;
                }
                break;
            case 1:
                // If there's only one media element then return the plain value
                var firstMediaId = Object.keys(medias)[0];
                result = medias[firstMediaId][property];
                break;
            default:
                // TODO: return 'master' value
                var master = this.getMasterMedia();
                result = medias[master.id][property];
        }
        return result;
    };
    VgAPI.prototype.$$setAllProperties = function (property, value) {
        for (var id in this.medias) {
            if (this.medias[id]) {
                this.medias[id][property] = value;
            }
        }
    };
    VgAPI.prototype.registerElement = function (elem) {
        this.videogularElement = elem;
    };
    VgAPI.prototype.registerMedia = function (media) {
        this.medias[media.id] = media;
    };
    VgAPI.prototype.unregisterMedia = function (media) {
        delete this.medias[media.id];
    };
    VgAPI.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    VgAPI.ctorParameters = function () { return []; };
    return VgAPI;
}());
exports.VgAPI = VgAPI;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXVEO0FBRXZELGlEQUE2Qzs7SUFXekM7c0JBTmdCLEVBQUU7Z0NBRW9CLElBQUksbUJBQVksQ0FBQyxJQUFJLENBQUM7NkJBQ25DLEtBQUs7S0FLN0I7SUFFRCw2QkFBYSxHQUFiLFVBQWMsS0FBc0I7UUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNwQztJQUVELCtCQUFlLEdBQWY7UUFDSSxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUMzQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDNUI7U0FDSjtLQUNKO0lBRUQsOEJBQWMsR0FBZDtRQUNJLElBQUksTUFBVSxDQUFDO1FBQ2YsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDekIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3pFLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUN6QixLQUFLLENBQUM7YUFDVDtTQUNKO1FBQ0QsTUFBTSxDQUFD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QUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUM7S0FDakM7SUFFRCwrQkFBZSxHQUFmLFVBQWdCLEtBQWU7UUFDM0IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNoQzs7Z0JBbFFKLGlCQUFVOzs7O2dCQUxYOztBQU1hLHNCQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJUGxheWFibGV9IGZyb20gXCIuLi92Zy1tZWRpYS9pLXBsYXlhYmxlXCI7XG5pbXBvcnQge1ZnU3RhdGVzfSBmcm9tIFwiLi4vc3RhdGVzL3ZnLXN0YXRlc1wiO1xuaW1wb3J0IHsgVmdGdWxsc2NyZWVuQVBJIH0gZnJvbSAnLi92Zy1mdWxsc2NyZWVuLWFwaSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWZ0FQSSB7XG4gICAgbWVkaWFzOk9iamVjdCA9IHt9Oy8vIFRPRE86IHJlZmFjdG9yIHRvIFNldDxJUGxheWFibGU+IFxuICAgIHZpZGVvZ3VsYXJFbGVtZW50OiBhbnk7XG4gICAgcGxheWVyUmVhZHlFdmVudDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKHRydWUpO1xuICAgIGlzUGxheWVyUmVhZHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBmc0FQSTogVmdGdWxsc2NyZWVuQVBJO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBvblBsYXllclJlYWR5KGZzQVBJOiBWZ0Z1bGxzY3JlZW5BUEkpIHtcbiAgICAgICAgdGhpcy5mc0FQSSA9IGZzQVBJO1xuICAgICAgICB0aGlzLmlzUGxheWVyUmVhZHkgPSB0cnVlO1xuICAgICAgICB0aGlzLnBsYXllclJlYWR5RXZlbnQuZW1pdCh0aGlzKTtcbiAgICB9XG5cbiAgICBnZXREZWZhdWx0TWVkaWEoKTpJUGxheWFibGUge1xuICAgICAgICBmb3IgKGxldCBpdGVtIGluIHRoaXMubWVkaWFzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5tZWRpYXNbaXRlbV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tZWRpYXNbaXRlbV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRNYXN0ZXJNZWRpYSgpOklQbGF5YWJsZSB7XG4gICAgICAgIGxldCBtYXN0ZXI6YW55O1xuICAgICAgICBmb3IgKGxldCBpZCBpbiB0aGlzLm1lZGlhcykge1xuICAgICAgICAgICAgaWYgKHRoaXMubWVkaWFzW2lkXS52Z01lZGlhID09PSAndHJ1ZScgfHwgdGhpcy5tZWRpYXNbaWRdLnZnTWVkaWEgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBtYXN0ZXIgPSB0aGlzLm1lZGlhc1tpZF07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1hc3RlciB8fCB0aGlzLmdldERlZmF1bHRNZWRpYSgpO1xuICAgIH1cblxuICAgIGlzTWFzdGVyRGVmaW5lZCgpOmJvb2xlYW4ge1xuICAgICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGlkIGluIHRoaXMubWVkaWFzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5tZWRpYXNbaWRdLnZnTWVkaWEgPT09ICd0cnVlJyB8fCB0aGlzLm1lZGlhc1tpZF0udmdNZWRpYSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBnZXRNZWRpYUJ5SWQoaWQ6c3RyaW5nID0gbnVsbCk6SVBsYXlhYmxlIHtcbiAgICAgICAgbGV0IG1lZGlhID0gdGhpcy5tZWRpYXNbaWRdO1xuXG4gICAgICAgIGlmICghaWQgfHwgaWQgPT09ICcqJykge1xuICAgICAgICAgICAgbWVkaWEgPSB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1lZGlhO1xuICAgIH1cblxuICAgIHBsYXkoKSB7XG4gICAgICAgIGZvciAobGV0IGlkIGluIHRoaXMubWVkaWFzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5tZWRpYXNbaWRdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZWRpYXNbIGlkIF0ucGxheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGF1c2UoKSB7XG4gICAgICAgIGZvciAobGV0IGlkIGluIHRoaXMubWVkaWFzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5tZWRpYXNbaWRdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZWRpYXNbaWRdLnBhdXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgZHVyYXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkZ2V0QWxsUHJvcGVydGllcygnZHVyYXRpb24nKTtcbiAgICB9XG5cbiAgICBzZXQgY3VycmVudFRpbWUoc2Vjb25kcykge1xuICAgICAgICB0aGlzLiQkc2V0QWxsUHJvcGVydGllcygnY3VycmVudFRpbWUnLCBzZWNvbmRzKTtcbiAgICB9XG5cbiAgICBnZXQgY3VycmVudFRpbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkZ2V0QWxsUHJvcGVydGllcygnY3VycmVudFRpbWUnKTtcbiAgICB9XG5cbiAgICBzZXQgc3RhdGUoc3RhdGUpIHtcbiAgICAgICAgdGhpcy4kJHNldEFsbFByb3BlcnRpZXMoJ3N0YXRlJywgc3RhdGUpO1xuICAgIH1cblxuICAgIGdldCBzdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRnZXRBbGxQcm9wZXJ0aWVzKCdzdGF0ZScpO1xuICAgIH1cblxuICAgIHNldCB2b2x1bWUodm9sdW1lKSB7XG4gICAgICAgIHRoaXMuJCRzZXRBbGxQcm9wZXJ0aWVzKCd2b2x1bWUnLCB2b2x1bWUpO1xuICAgIH1cblxuICAgIGdldCB2b2x1bWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkZ2V0QWxsUHJvcGVydGllcygndm9sdW1lJyk7XG4gICAgfVxuXG4gICAgc2V0IHBsYXliYWNrUmF0ZShyYXRlKSB7XG4gICAgICAgIHRoaXMuJCRzZXRBbGxQcm9wZXJ0aWVzKCdwbGF5YmFja1JhdGUnLCByYXRlKTtcbiAgICB9XG5cbiAgICBnZXQgcGxheWJhY2tSYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJGdldEFsbFByb3BlcnRpZXMoJ3BsYXliYWNrUmF0ZScpO1xuICAgIH1cblxuICAgIGdldCBjYW5QbGF5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJGdldEFsbFByb3BlcnRpZXMoJ2NhblBsYXknKTtcbiAgICB9XG5cbiAgICBnZXQgY2FuUGxheVRocm91Z2goKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkZ2V0QWxsUHJvcGVydGllcygnY2FuUGxheVRocm91Z2gnKTtcbiAgICB9XG5cbiAgICBnZXQgaXNNZXRhZGF0YUxvYWRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRnZXRBbGxQcm9wZXJ0aWVzKCdpc01ldGFkYXRhTG9hZGVkJyk7XG4gICAgfVxuXG4gICAgZ2V0IGlzV2FpdGluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRnZXRBbGxQcm9wZXJ0aWVzKCdpc1dhaXRpbmcnKTtcbiAgICB9XG5cbiAgICBnZXQgaXNDb21wbGV0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkZ2V0QWxsUHJvcGVydGllcygnaXNDb21wbGV0ZWQnKTtcbiAgICB9XG5cbiAgICBnZXQgaXNMaXZlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJGdldEFsbFByb3BlcnRpZXMoJ2lzTGl2ZScpO1xuICAgIH1cblxuICAgIGdldCBpc01hc3RlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRnZXRBbGxQcm9wZXJ0aWVzKCdpc01hc3RlcicpO1xuICAgIH1cblxuICAgIGdldCB0aW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJGdldEFsbFByb3BlcnRpZXMoJ3RpbWUnKTtcbiAgICB9XG5cbiAgICBnZXQgYnVmZmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJGdldEFsbFByb3BlcnRpZXMoJ2J1ZmZlcicpO1xuICAgIH1cblxuICAgIGdldCBidWZmZXJlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRnZXRBbGxQcm9wZXJ0aWVzKCdidWZmZXJlZCcpO1xuICAgIH1cblxuICAgIGdldCBzdWJzY3JpcHRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJGdldEFsbFByb3BlcnRpZXMoJ3N1YnNjcmlwdGlvbnMnKTtcbiAgICB9XG5cbiAgICBnZXQgdGV4dFRyYWNrcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRnZXRBbGxQcm9wZXJ0aWVzKCd0ZXh0VHJhY2tzJyk7XG4gICAgfVxuXG4gICAgc2Vla1RpbWUodmFsdWU6bnVtYmVyLCBieVBlcmNlbnQ6Ym9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIGZvciAobGV0IGlkIGluIHRoaXMubWVkaWFzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5tZWRpYXNbaWRdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kJHNlZWsodGhpcy5tZWRpYXNbIGlkIF0sIHZhbHVlLCBieVBlcmNlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJCRzZWVrKG1lZGlhOklQbGF5YWJsZSwgdmFsdWU6bnVtYmVyLCBieVBlcmNlbnQ6Ym9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIGxldCBzZWNvbmQ6bnVtYmVyO1xuICAgICAgICBsZXQgZHVyYXRpb246bnVtYmVyID0gbWVkaWEuZHVyYXRpb247XG5cbiAgICAgICAgaWYgKGJ5UGVyY2VudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNNYXN0ZXJEZWZpbmVkKCkpIHtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbiA9IHRoaXMuZ2V0TWFzdGVyTWVkaWEoKS5kdXJhdGlvbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2Vjb25kID0gdmFsdWUgKiBkdXJhdGlvbiAvIDEwMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNlY29uZCA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWVkaWEuY3VycmVudFRpbWUgPSBzZWNvbmQ7XG4gICAgfVxuXG4gICAgYWRkVGV4dFRyYWNrKHR5cGU6c3RyaW5nLCBsYWJlbD86c3RyaW5nLCBsYW5ndWFnZT86c3RyaW5nKSB7XG4gICAgICAgIGZvciAobGV0IGlkIGluIHRoaXMubWVkaWFzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5tZWRpYXNbaWRdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kJGFkZFRleHRUcmFjayh0aGlzLm1lZGlhc1sgaWQgXSwgdHlwZSwgbGFiZWwsIGxhbmd1YWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAkJGFkZFRleHRUcmFjayhtZWRpYTpJUGxheWFibGUsIHR5cGU6c3RyaW5nLCBsYWJlbD86c3RyaW5nLCBsYW5ndWFnZT86c3RyaW5nKSB7XG4gICAgICAgIG1lZGlhLmFkZFRleHRUcmFjayh0eXBlLCBsYWJlbCwgbGFuZ3VhZ2UpO1xuICAgIH1cblxuICAgICQkZ2V0QWxsUHJvcGVydGllcyhwcm9wZXJ0eTpzdHJpbmcpe1xuICAgICAgICBjb25zdCBtZWRpYXMgPSB7fTtcbiAgICAgICAgbGV0IHJlc3VsdDphbnk7XG5cbiAgICAgICAgZm9yIChsZXQgaWQgaW4gdGhpcy5tZWRpYXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm1lZGlhc1tpZF0pIHtcbiAgICAgICAgICAgICAgICBtZWRpYXNbIGlkIF0gPSB0aGlzLm1lZGlhc1sgaWQgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5NZWRpYXMgPSBPYmplY3Qua2V5cyhtZWRpYXMpLmxlbmd0aDtcbiAgICAgICAgc3dpdGNoIChuTWVkaWFzKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgLy8gUmV0dXJuIGRlZmF1bHQgdmFsdWVzIHVudGlsIHZnTWVkaWEgaXMgaW5pdGlhbGl6ZWRcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHByb3BlcnR5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3N0YXRlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IFZnU3RhdGVzLlZHX1BBVVNFRDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3BsYXliYWNrUmF0ZSc6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3ZvbHVtZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndGltZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB7Y3VycmVudDogMCwgdG90YWw6IDAsIGxlZnQ6IDB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlcmUncyBvbmx5IG9uZSBtZWRpYSBlbGVtZW50IHRoZW4gcmV0dXJuIHRoZSBwbGFpbiB2YWx1ZVxuICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0TWVkaWFJZCA9IE9iamVjdC5rZXlzKG1lZGlhcylbMF07XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbWVkaWFzW2ZpcnN0TWVkaWFJZF1bcHJvcGVydHldO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiByZXR1cm4gJ21hc3RlcicgdmFsdWVcbiAgICAgICAgICAgICAgICBsZXQgbWFzdGVyID0gdGhpcy5nZXRNYXN0ZXJNZWRpYSgpO1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IG1lZGlhc1ttYXN0ZXIuaWRdW3Byb3BlcnR5XTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAkJHNldEFsbFByb3BlcnRpZXMocHJvcGVydHk6c3RyaW5nLCB2YWx1ZTphbnkpe1xuICAgICAgICBmb3IgKGxldCBpZCBpbiB0aGlzLm1lZGlhcykge1xuICAgICAgICAgICAgaWYgKHRoaXMubWVkaWFzW2lkXSkge1xuICAgICAgICAgICAgICAgIHRoaXMubWVkaWFzWyBpZCBdWyBwcm9wZXJ0eSBdID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWdpc3RlckVsZW1lbnQoZWxlbTpIVE1MRWxlbWVudCkge1xuICAgICAgICB0aGlzLnZpZGVvZ3VsYXJFbGVtZW50ID0gZWxlbTtcbiAgICB9XG5cbiAgICByZWdpc3Rlck1lZGlhKG1lZGlhOklQbGF5YWJsZSkge1xuICAgICAgICB0aGlzLm1lZGlhc1ttZWRpYS5pZF0gPSBtZWRpYTtcbiAgICB9XG5cbiAgICB1bnJlZ2lzdGVyTWVkaWEobWVkaWE6SVBsYXlhYmxlKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLm1lZGlhc1ttZWRpYS5pZF07XG4gICAgfVxuXG5cbn1cbiJdfQ==

/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var VgStates = (function () {
    function VgStates() {
    }
    VgStates.VG_ENDED = 'ended';
    VgStates.VG_PAUSED = 'paused';
    VgStates.VG_PLAYING = 'playing';
    VgStates.VG_LOADING = 'waiting';
    VgStates.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    VgStates.ctorParameters = function () { return []; };
    return VgStates;
}());
exports.VgStates = VgStates;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctc3RhdGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctc3RhdGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDOzs7O3dCQUlYLE9BQU87eUJBQ04sUUFBUTswQkFDUCxTQUFTOzBCQUNULFNBQVM7O2dCQUx4QyxpQkFBVTs7OzttQkFGWDs7QUFHYSw0QkFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWZ1N0YXRlcyB7XG4gICAgc3RhdGljIFZHX0VOREVEOiBzdHJpbmcgPSAnZW5kZWQnO1xuICAgIHN0YXRpYyBWR19QQVVTRUQ6IHN0cmluZyA9ICdwYXVzZWQnO1xuICAgIHN0YXRpYyBWR19QTEFZSU5HOiBzdHJpbmcgPSAncGxheWluZyc7XG4gICAgc3RhdGljIFZHX0xPQURJTkc6IHN0cmluZyA9ICd3YWl0aW5nJztcbn1cbiJdfQ==

/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Subject_1 = __webpack_require__(35);
var core_1 = __webpack_require__(0);
var VgControlsHidden = (function () {
    function VgControlsHidden() {
        this.isHiddenSubject = new Subject_1.Subject();
        this.isHidden = this.isHiddenSubject.asObservable();
    }
    VgControlsHidden.prototype.state = function (hidden) {
        this.isHiddenSubject.next(hidden);
    };
    VgControlsHidden.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    VgControlsHidden.ctorParameters = function () { return []; };
    return VgControlsHidden;
}());
exports.VgControlsHidden = VgControlsHidden;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctY29udHJvbHMtaGlkZGVuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctY29udHJvbHMtaGlkZGVuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsd0NBQXVDO0FBRXZDLHNDQUEyQzs7SUFRdkM7K0JBRjRDLElBQUksaUJBQU8sRUFBVztRQUc5RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDdkQ7SUFFRCxnQ0FBSyxHQUFMLFVBQU0sTUFBZTtRQUNqQixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNyQzs7Z0JBWkosaUJBQVU7Ozs7MkJBSlg7O0FBS2EsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMvU3ViamVjdCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZnQ29udHJvbHNIaWRkZW4ge1xuICAgIGlzSGlkZGVuOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gICAgcHJpdmF0ZSBpc0hpZGRlblN1YmplY3Q6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaXNIaWRkZW4gPSB0aGlzLmlzSGlkZGVuU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgICB9XG5cbiAgICBzdGF0ZShoaWRkZW46IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5pc0hpZGRlblN1YmplY3QubmV4dChoaWRkZW4pO1xuICAgIH1cbn1cbiJdfQ==

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaPlayer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MediaPlayer = (function () {
    function MediaPlayer(navParams, viewCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.source = navParams.get('source');
        this.image = navParams.get('image');
    }
    MediaPlayer.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    MediaPlayer = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/matt/projects/appp/ap3/src/pages/media-player/media-player.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      {{ \'Media Player\' | translate }}\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <vg-player>\n        <vg-overlay-play [ngStyle]="{\'background-image\': \'url(\' + image + \')\'}"></vg-overlay-play>\n        <vg-buffering></vg-buffering>\n\n        <vg-scrub-bar>\n            <vg-scrub-bar-current-time></vg-scrub-bar-current-time>\n            <vg-scrub-bar-buffering-time></vg-scrub-bar-buffering-time>\n        </vg-scrub-bar>\n\n        <vg-controls>\n            <vg-play-pause></vg-play-pause>\n            <vg-playback-button></vg-playback-button>\n\n            <vg-time-display property="current" format="mm:ss"></vg-time-display>\n\n            <vg-scrub-bar style="pointer-events: none;"></vg-scrub-bar>\n\n            <!-- <vg-time-display property="left" format="mm:ss"></vg-time-display> -->\n            <vg-time-display property="total" format="mm:ss"></vg-time-display>\n\n            <!-- <vg-track-selector></vg-track-selector>\n            <vg-mute></vg-mute> -->\n            <vg-volume></vg-volume>\n\n            <vg-fullscreen></vg-fullscreen>\n        </vg-controls>\n\n        <video [vgMedia]="media" #media preload="auto" crossorigin autoplay>\n            <source [src]="source">\n        </video>\n    </vg-player>\n\n</ion-content>'/*ion-inline-end:"/Users/matt/projects/appp/ap3/src/pages/media-player/media-player.html"*/,
            selector: 'media-player'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], MediaPlayer);
    return MediaPlayer;
}());

//# sourceMappingURL=media-player.js.map

/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var vg_utils_1 = __webpack_require__(342);
var Observable_1 = __webpack_require__(6);
var VgFullscreenAPI = (function () {
    function VgFullscreenAPI() {
        this.nativeFullscreen = true;
        this.isFullscreen = false;
        this.onChangeFullscreen = new core_1.EventEmitter();
    }
    VgFullscreenAPI.prototype.init = function (elem, medias) {
        var _this = this;
        this.videogularElement = elem;
        this.medias = medias;
        var APIs = {
            w3: {
                enabled: 'fullscreenEnabled',
                element: 'fullscreenElement',
                request: 'requestFullscreen',
                exit: 'exitFullscreen',
                onchange: 'fullscreenchange',
                onerror: 'fullscreenerror'
            },
            newWebkit: {
                enabled: 'webkitFullscreenEnabled',
                element: 'webkitFullscreenElement',
                request: 'webkitRequestFullscreen',
                exit: 'webkitExitFullscreen',
                onchange: 'webkitfullscreenchange',
                onerror: 'webkitfullscreenerror'
            },
            oldWebkit: {
                enabled: 'webkitIsFullScreen',
                element: 'webkitCurrentFullScreenElement',
                request: 'webkitRequestFullScreen',
                exit: 'webkitCancelFullScreen',
                onchange: 'webkitfullscreenchange',
                onerror: 'webkitfullscreenerror'
            },
            moz: {
                enabled: 'mozFullScreen',
                element: 'mozFullScreenElement',
                request: 'mozRequestFullScreen',
                exit: 'mozCancelFullScreen',
                onchange: 'mozfullscreenchange',
                onerror: 'mozfullscreenerror'
            },
            ios: {
                enabled: 'webkitFullscreenEnabled',
                element: 'webkitFullscreenElement',
                request: 'webkitEnterFullscreen',
                exit: 'webkitExitFullscreen',
                onchange: 'webkitendfullscreen',
                // Hack for iOS: webkitfullscreenchange it's not firing
                onerror: 'webkitfullscreenerror'
            },
            ms: {
                enabled: 'msFullscreenEnabled',
                element: 'msFullscreenElement',
                request: 'msRequestFullscreen',
                exit: 'msExitFullscreen',
                onchange: 'MSFullscreenChange',
                onerror: 'MSFullscreenError'
            }
        };
        for (var browser in APIs) {
            if (APIs[browser].enabled in document) {
                this.polyfill = APIs[browser];
                break;
            }
        }
        if (vg_utils_1.VgUtils.isiOSDevice()) {
            this.polyfill = APIs.ios;
        }
        this.isAvailable = (this.polyfill != null);
        if (this.polyfill == null) {
            return;
        }
        var fsElemDispatcher;
        switch (this.polyfill.onchange) {
            // Mozilla dispatches the fullscreen change event from document, not the element
            // See: https://bugzilla.mozilla.org/show_bug.cgi?id=724816#c3
            case 'mozfullscreenchange':
                fsElemDispatcher = document;
                break;
            // iOS dispatches the fullscreen change event from video element
            case 'webkitendfullscreen':
                fsElemDispatcher = this.medias.toArray()[0].elem;
                break;
            // HTML5 implementation dispatches the fullscreen change event from the element
            default:
                fsElemDispatcher = elem;
        }
        this.fsChangeSubscription = Observable_1.Observable.fromEvent(fsElemDispatcher, this.polyfill.onchange).subscribe(function () {
            _this.onFullscreenChange();
        });
    };
    VgFullscreenAPI.prototype.onFullscreenChange = function () {
        this.isFullscreen = !!document[this.polyfill.element];
        this.onChangeFullscreen.next(this.isFullscreen);
    };
    VgFullscreenAPI.prototype.toggleFullscreen = function (element) {
        if (element === void 0) { element = null; }
        if (this.isFullscreen) {
            this.exit();
        }
        else {
            this.request(element);
        }
    };
    VgFullscreenAPI.prototype.request = function (elem) {
        if (!elem) {
            elem = this.videogularElement;
        }
        this.isFullscreen = true;
        this.onChangeFullscreen.next(true);
        // Perform native full screen support
        if (this.isAvailable && this.nativeFullscreen) {
            // Fullscreen for mobile devices
            if (vg_utils_1.VgUtils.isMobileDevice()) {
                // We should make fullscreen the video object if it doesn't have native fullscreen support
                // Fallback! We can't set vg-player on fullscreen, only video/audio objects
                if ((!this.polyfill.enabled && elem === this.videogularElement) || vg_utils_1.VgUtils.isiOSDevice()) {
                    elem = this.medias.toArray()[0].elem;
                }
                this.enterElementInFullScreen(elem);
            }
            else {
                this.enterElementInFullScreen(this.videogularElement);
            }
        }
    };
    VgFullscreenAPI.prototype.enterElementInFullScreen = function (elem) {
        elem[this.polyfill.request]();
    };
    VgFullscreenAPI.prototype.exit = function () {
        this.isFullscreen = false;
        this.onChangeFullscreen.next(false);
        // Exit from native fullscreen
        if (this.isAvailable && this.nativeFullscreen) {
            document[this.polyfill.exit]();
        }
    };
    VgFullscreenAPI.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    VgFullscreenAPI.ctorParameters = function () { return []; };
    return VgFullscreenAPI;
}());
exports.VgFullscreenAPI = VgFullscreenAPI;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctZnVsbHNjcmVlbi1hcGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2Zy1mdWxsc2NyZWVuLWFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvRTtBQUNwRSx1Q0FBcUM7QUFHckMsOENBQTZDOztJQWdCekM7Z0NBVDRCLElBQUk7NEJBQ1IsS0FBSztrQ0FNVyxJQUFJLG1CQUFZLEVBQUU7S0FHekQ7SUFFRCw4QkFBSSxHQUFKLFVBQUssSUFBaUIsRUFBRSxNQUEwQjtRQUFsRCxpQkE4RkM7UUE3RkcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUVyQixJQUFNLElBQUksR0FBRztZQUNULEVBQUUsRUFBRTtnQkFDQSxPQUFPLEVBQUUsbUJBQW1CO2dCQUM1QixPQUFPLEVBQUUsbUJBQW1CO2dCQUM1QixPQUFPLEVBQUUsbUJBQW1CO2dCQUM1QixJQUFJLEVBQUUsZ0JBQWdCO2dCQUN0QixRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixPQUFPLEVBQUUsaUJBQWlCO2FBQzdCO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLE9BQU8sRUFBRSx5QkFBeUI7Z0JBQ2xDLE9BQU8sRUFBRSx5QkFBeUI7Z0JBQ2xDLE9BQU8sRUFBRSx5QkFBeUI7Z0JBQ2xDLElBQUksRUFBRSxzQkFBc0I7Z0JBQzVCLFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLE9BQU8sRUFBRSx1QkFBdUI7YUFDbkM7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsT0FBTyxFQUFFLG9CQUFvQjtnQkFDN0IsT0FBTyxFQUFFLGdDQUFnQztnQkFDekMsT0FBTyxFQUFFLHlCQUF5QjtnQkFDbEMsSUFBSSxFQUFFLHdCQUF3QjtnQkFDOUIsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsT0FBTyxFQUFFLHVCQUF1QjthQUNuQztZQUNELEdBQUcsRUFBRTtnQkFDRCxPQUFPLEVBQUUsZUFBZTtnQkFDeEIsT0FBTyxFQUFFLHNCQUFzQjtnQkFDL0IsT0FBTyxFQUFFLHNCQUFzQjtnQkFDL0IsSUFBSSxFQUFFLHFCQUFxQjtnQkFDM0IsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsT0FBTyxFQUFFLG9CQUFvQjthQUNoQztZQUNELEdBQUcsRUFBRTtnQkFDRCxPQUFPLEVBQUUseUJBQXlCO2dCQUNsQyxPQUFPLEVBQUUseUJBQXlCO2dCQUNsQyxPQUFPLEVBQUUsdUJBQXVCO2dCQUNoQyxJQUFJLEVBQUUsc0JBQXNCO2dCQUM1QixRQUFRLEVBQUUscUJBQXFCOztnQkFDL0IsT0FBTyxFQUFFLHVCQUF1QjthQUNuQztZQUNELEVBQUUsRUFBRTtnQkFDQSxPQUFPLEVBQUUscUJBQXFCO2dCQUM5QixPQUFPLEVBQUUscUJBQXFCO2dCQUM5QixPQUFPLEVBQUUscUJBQXFCO2dCQUM5QixJQUFJLEVBQUUsa0JBQWtCO2dCQUN4QixRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixPQUFPLEVBQUUsbUJBQW1CO2FBQy9CO1NBQ0osQ0FBQztRQUVGLEdBQUcsQ0FBQyxDQUFDLElBQUksT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDdkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFFLE9BQU8sQ0FBRSxDQUFDLE9BQU8sSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBRSxPQUFPLENBQUUsQ0FBQztnQkFDaEMsS0FBSyxDQUFDO2FBQ1Q7U0FDSjtRQUVELEVBQUUsQ0FBQyxDQUFDLGtCQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQTtTQUMzQjtRQUVELElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxDQUFDO1FBRTNDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN4QixNQUFNLENBQUM7U0FDVjtRQUVELElBQUksZ0JBQWdCLENBQUM7UUFFckIsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDOzs7WUFHN0IsS0FBSyxxQkFBcUI7Z0JBQ3RCLGdCQUFnQixHQUFHLFFBQVEsQ0FBQztnQkFDNUIsS0FBSyxDQUFDOztZQUdWLEtBQUsscUJBQXFCO2dCQUN0QixnQkFBZ0IsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFFLENBQUMsQ0FBRSxDQUFDLElBQUksQ0FBQztnQkFDbkQsS0FBSyxDQUFDOztZQUdWO2dCQUNJLGdCQUFnQixHQUFHLElBQUksQ0FBQztTQUMvQjtRQUVELElBQUksQ0FBQyxvQkFBb0IsR0FBRyx1QkFBVSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUNqRyxLQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUM3QixDQUFDLENBQUM7S0FDTjtJQUVELDRDQUFrQixHQUFsQjtRQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBRSxDQUFDO1FBQ3hELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0tBQ25EO0lBRUQsMENBQWdCLEdBQWhCLFVBQWlCLE9BQW1CO1FBQW5CLHdCQUFBLEVBQUEsY0FBbUI7UUFDaEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2Y7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDekI7S0FDSjtJQUVELGlDQUFPLEdBQVAsVUFBUSxJQUFTO1FBQ2IsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ1IsSUFBSSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztTQUNqQztRQUVELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7O1FBR25DLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQzs7WUFFNUMsRUFBRSxDQUFDLENBQUMsa0JBQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDLENBQUM7OztnQkFHM0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxJQUFJLElBQUksS0FBSyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxrQkFBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDdkYsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUUsQ0FBQyxDQUFFLENBQUMsSUFBSSxDQUFDO2lCQUMxQztnQkFFRCxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdkM7WUFDRCxJQUFJLENBQUMsQ0FBQztnQkFDRixJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7YUFDekQ7U0FDSjtLQUNKO0lBRUQsa0RBQXdCLEdBQXhCLFVBQXlCLElBQVM7UUFDOUIsSUFBSSxDQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFFLEVBQUUsQ0FBQztLQUNuQztJQUVELDhCQUFJLEdBQUo7UUFDSSxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOztRQUdwQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7WUFDNUMsUUFBUSxDQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFFLEVBQUUsQ0FBQztTQUNwQztLQUNKOztnQkFyS0osaUJBQVU7Ozs7MEJBTlg7O0FBT2EsMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIsIEluamVjdGFibGUsIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmdVdGlscyB9IGZyb20gJy4vdmctdXRpbHMnO1xuaW1wb3J0IHsgVmdNZWRpYSB9IGZyb20gJy4uL3ZnLW1lZGlhL3ZnLW1lZGlhJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmdGdWxsc2NyZWVuQVBJIHtcbiAgICBwb2x5ZmlsbDogYW55O1xuICAgIG9uY2hhbmdlOiBzdHJpbmc7XG4gICAgb25lcnJvcjogc3RyaW5nO1xuICAgIG5hdGl2ZUZ1bGxzY3JlZW46IGJvb2xlYW4gPSB0cnVlO1xuICAgIGlzRnVsbHNjcmVlbjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzQXZhaWxhYmxlOiBib29sZWFuO1xuICAgIHZpZGVvZ3VsYXJFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBtZWRpYXM6IFF1ZXJ5TGlzdDxWZ01lZGlhPjtcblxuICAgIGZzQ2hhbmdlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gICAgb25DaGFuZ2VGdWxsc2NyZWVuOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIGluaXQoZWxlbTogSFRNTEVsZW1lbnQsIG1lZGlhczogUXVlcnlMaXN0PFZnTWVkaWE+KSB7XG4gICAgICAgIHRoaXMudmlkZW9ndWxhckVsZW1lbnQgPSBlbGVtO1xuICAgICAgICB0aGlzLm1lZGlhcyA9IG1lZGlhcztcblxuICAgICAgICBjb25zdCBBUElzID0ge1xuICAgICAgICAgICAgdzM6IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiAnZnVsbHNjcmVlbkVuYWJsZWQnLFxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6ICdmdWxsc2NyZWVuRWxlbWVudCcsXG4gICAgICAgICAgICAgICAgcmVxdWVzdDogJ3JlcXVlc3RGdWxsc2NyZWVuJyxcbiAgICAgICAgICAgICAgICBleGl0OiAnZXhpdEZ1bGxzY3JlZW4nLFxuICAgICAgICAgICAgICAgIG9uY2hhbmdlOiAnZnVsbHNjcmVlbmNoYW5nZScsXG4gICAgICAgICAgICAgICAgb25lcnJvcjogJ2Z1bGxzY3JlZW5lcnJvcidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBuZXdXZWJraXQ6IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiAnd2Via2l0RnVsbHNjcmVlbkVuYWJsZWQnLFxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6ICd3ZWJraXRGdWxsc2NyZWVuRWxlbWVudCcsXG4gICAgICAgICAgICAgICAgcmVxdWVzdDogJ3dlYmtpdFJlcXVlc3RGdWxsc2NyZWVuJyxcbiAgICAgICAgICAgICAgICBleGl0OiAnd2Via2l0RXhpdEZ1bGxzY3JlZW4nLFxuICAgICAgICAgICAgICAgIG9uY2hhbmdlOiAnd2Via2l0ZnVsbHNjcmVlbmNoYW5nZScsXG4gICAgICAgICAgICAgICAgb25lcnJvcjogJ3dlYmtpdGZ1bGxzY3JlZW5lcnJvcidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbGRXZWJraXQ6IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiAnd2Via2l0SXNGdWxsU2NyZWVuJyxcbiAgICAgICAgICAgICAgICBlbGVtZW50OiAnd2Via2l0Q3VycmVudEZ1bGxTY3JlZW5FbGVtZW50JyxcbiAgICAgICAgICAgICAgICByZXF1ZXN0OiAnd2Via2l0UmVxdWVzdEZ1bGxTY3JlZW4nLFxuICAgICAgICAgICAgICAgIGV4aXQ6ICd3ZWJraXRDYW5jZWxGdWxsU2NyZWVuJyxcbiAgICAgICAgICAgICAgICBvbmNoYW5nZTogJ3dlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UnLFxuICAgICAgICAgICAgICAgIG9uZXJyb3I6ICd3ZWJraXRmdWxsc2NyZWVuZXJyb3InXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW96OiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZDogJ21vekZ1bGxTY3JlZW4nLFxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6ICdtb3pGdWxsU2NyZWVuRWxlbWVudCcsXG4gICAgICAgICAgICAgICAgcmVxdWVzdDogJ21velJlcXVlc3RGdWxsU2NyZWVuJyxcbiAgICAgICAgICAgICAgICBleGl0OiAnbW96Q2FuY2VsRnVsbFNjcmVlbicsXG4gICAgICAgICAgICAgICAgb25jaGFuZ2U6ICdtb3pmdWxsc2NyZWVuY2hhbmdlJyxcbiAgICAgICAgICAgICAgICBvbmVycm9yOiAnbW96ZnVsbHNjcmVlbmVycm9yJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlvczoge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6ICd3ZWJraXRGdWxsc2NyZWVuRW5hYmxlZCcsXG4gICAgICAgICAgICAgICAgZWxlbWVudDogJ3dlYmtpdEZ1bGxzY3JlZW5FbGVtZW50JyxcbiAgICAgICAgICAgICAgICByZXF1ZXN0OiAnd2Via2l0RW50ZXJGdWxsc2NyZWVuJyxcbiAgICAgICAgICAgICAgICBleGl0OiAnd2Via2l0RXhpdEZ1bGxzY3JlZW4nLFxuICAgICAgICAgICAgICAgIG9uY2hhbmdlOiAnd2Via2l0ZW5kZnVsbHNjcmVlbicsIC8vIEhhY2sgZm9yIGlPUzogd2Via2l0ZnVsbHNjcmVlbmNoYW5nZSBpdCdzIG5vdCBmaXJpbmdcbiAgICAgICAgICAgICAgICBvbmVycm9yOiAnd2Via2l0ZnVsbHNjcmVlbmVycm9yJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1zOiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZDogJ21zRnVsbHNjcmVlbkVuYWJsZWQnLFxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6ICdtc0Z1bGxzY3JlZW5FbGVtZW50JyxcbiAgICAgICAgICAgICAgICByZXF1ZXN0OiAnbXNSZXF1ZXN0RnVsbHNjcmVlbicsXG4gICAgICAgICAgICAgICAgZXhpdDogJ21zRXhpdEZ1bGxzY3JlZW4nLFxuICAgICAgICAgICAgICAgIG9uY2hhbmdlOiAnTVNGdWxsc2NyZWVuQ2hhbmdlJyxcbiAgICAgICAgICAgICAgICBvbmVycm9yOiAnTVNGdWxsc2NyZWVuRXJyb3InXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yIChsZXQgYnJvd3NlciBpbiBBUElzKSB7XG4gICAgICAgICAgICBpZiAoQVBJc1sgYnJvd3NlciBdLmVuYWJsZWQgaW4gZG9jdW1lbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvbHlmaWxsID0gQVBJc1sgYnJvd3NlciBdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFZnVXRpbHMuaXNpT1NEZXZpY2UoKSkge1xuICAgICAgICAgICAgdGhpcy5wb2x5ZmlsbCA9IEFQSXMuaW9zXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzQXZhaWxhYmxlID0gKHRoaXMucG9seWZpbGwgIT0gbnVsbCk7XG5cbiAgICAgICAgaWYgKHRoaXMucG9seWZpbGwgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGZzRWxlbURpc3BhdGNoZXI7XG5cbiAgICAgICAgc3dpdGNoICh0aGlzLnBvbHlmaWxsLm9uY2hhbmdlKSB7XG4gICAgICAgICAgICAvLyBNb3ppbGxhIGRpc3BhdGNoZXMgdGhlIGZ1bGxzY3JlZW4gY2hhbmdlIGV2ZW50IGZyb20gZG9jdW1lbnQsIG5vdCB0aGUgZWxlbWVudFxuICAgICAgICAgICAgLy8gU2VlOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD03MjQ4MTYjYzNcbiAgICAgICAgICAgIGNhc2UgJ21vemZ1bGxzY3JlZW5jaGFuZ2UnOlxuICAgICAgICAgICAgICAgIGZzRWxlbURpc3BhdGNoZXIgPSBkb2N1bWVudDtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgLy8gaU9TIGRpc3BhdGNoZXMgdGhlIGZ1bGxzY3JlZW4gY2hhbmdlIGV2ZW50IGZyb20gdmlkZW8gZWxlbWVudFxuICAgICAgICAgICAgY2FzZSAnd2Via2l0ZW5kZnVsbHNjcmVlbic6XG4gICAgICAgICAgICAgICAgZnNFbGVtRGlzcGF0Y2hlciA9IHRoaXMubWVkaWFzLnRvQXJyYXkoKVsgMCBdLmVsZW07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vIEhUTUw1IGltcGxlbWVudGF0aW9uIGRpc3BhdGNoZXMgdGhlIGZ1bGxzY3JlZW4gY2hhbmdlIGV2ZW50IGZyb20gdGhlIGVsZW1lbnRcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgZnNFbGVtRGlzcGF0Y2hlciA9IGVsZW07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZzQ2hhbmdlU3Vic2NyaXB0aW9uID0gT2JzZXJ2YWJsZS5mcm9tRXZlbnQoZnNFbGVtRGlzcGF0Y2hlciwgdGhpcy5wb2x5ZmlsbC5vbmNoYW5nZSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25GdWxsc2NyZWVuQ2hhbmdlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uRnVsbHNjcmVlbkNoYW5nZSgpIHtcbiAgICAgICAgdGhpcy5pc0Z1bGxzY3JlZW4gPSAhIWRvY3VtZW50WyB0aGlzLnBvbHlmaWxsLmVsZW1lbnQgXTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZUZ1bGxzY3JlZW4ubmV4dCh0aGlzLmlzRnVsbHNjcmVlbik7XG4gICAgfVxuXG4gICAgdG9nZ2xlRnVsbHNjcmVlbihlbGVtZW50OiBhbnkgPSBudWxsKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRnVsbHNjcmVlbikge1xuICAgICAgICAgICAgdGhpcy5leGl0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlcXVlc3QoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXF1ZXN0KGVsZW06IGFueSkge1xuICAgICAgICBpZiAoIWVsZW0pIHtcbiAgICAgICAgICAgIGVsZW0gPSB0aGlzLnZpZGVvZ3VsYXJFbGVtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc0Z1bGxzY3JlZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlRnVsbHNjcmVlbi5uZXh0KHRydWUpO1xuXG4gICAgICAgIC8vIFBlcmZvcm0gbmF0aXZlIGZ1bGwgc2NyZWVuIHN1cHBvcnRcbiAgICAgICAgaWYgKHRoaXMuaXNBdmFpbGFibGUgJiYgdGhpcy5uYXRpdmVGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgICAvLyBGdWxsc2NyZWVuIGZvciBtb2JpbGUgZGV2aWNlc1xuICAgICAgICAgICAgaWYgKFZnVXRpbHMuaXNNb2JpbGVEZXZpY2UoKSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIHNob3VsZCBtYWtlIGZ1bGxzY3JlZW4gdGhlIHZpZGVvIG9iamVjdCBpZiBpdCBkb2Vzbid0IGhhdmUgbmF0aXZlIGZ1bGxzY3JlZW4gc3VwcG9ydFxuICAgICAgICAgICAgICAgIC8vIEZhbGxiYWNrISBXZSBjYW4ndCBzZXQgdmctcGxheWVyIG9uIGZ1bGxzY3JlZW4sIG9ubHkgdmlkZW8vYXVkaW8gb2JqZWN0c1xuICAgICAgICAgICAgICAgIGlmICgoIXRoaXMucG9seWZpbGwuZW5hYmxlZCAmJiBlbGVtID09PSB0aGlzLnZpZGVvZ3VsYXJFbGVtZW50KSB8fCBWZ1V0aWxzLmlzaU9TRGV2aWNlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbSA9IHRoaXMubWVkaWFzLnRvQXJyYXkoKVsgMCBdLmVsZW07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5lbnRlckVsZW1lbnRJbkZ1bGxTY3JlZW4oZWxlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVudGVyRWxlbWVudEluRnVsbFNjcmVlbih0aGlzLnZpZGVvZ3VsYXJFbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVudGVyRWxlbWVudEluRnVsbFNjcmVlbihlbGVtOiBhbnkpIHtcbiAgICAgICAgZWxlbVsgdGhpcy5wb2x5ZmlsbC5yZXF1ZXN0IF0oKTtcbiAgICB9XG5cbiAgICBleGl0KCkge1xuICAgICAgICB0aGlzLmlzRnVsbHNjcmVlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlRnVsbHNjcmVlbi5uZXh0KGZhbHNlKTtcblxuICAgICAgICAvLyBFeGl0IGZyb20gbmF0aXZlIGZ1bGxzY3JlZW5cbiAgICAgICAgaWYgKHRoaXMuaXNBdmFpbGFibGUgJiYgdGhpcy5uYXRpdmVGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgICBkb2N1bWVudFsgdGhpcy5wb2x5ZmlsbC5leGl0IF0oKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==

/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var VgUtils = (function () {
    function VgUtils() {
    }
    /**
     * Inspired by Paul Irish
     * https://gist.github.com/paulirish/211209
     * @returns {number}
     */
    /**
         * Inspired by Paul Irish
         * https://gist.github.com/paulirish/211209
         * @returns {number}
         */
    VgUtils.getZIndex = /**
         * Inspired by Paul Irish
         * https://gist.github.com/paulirish/211209
         * @returns {number}
         */
    function () {
        var zIndex = 1;
        var elementZIndex;
        var tags = document.getElementsByTagName('*');
        for (var i = 0, l = tags.length; i < l; i++) {
            elementZIndex = parseInt(window.getComputedStyle(tags[i])["z-index"], 10);
            if (elementZIndex > zIndex) {
                zIndex = elementZIndex + 1;
            }
        }
        return zIndex;
    };
    // Very simple mobile detection, not 100% reliable
    // Very simple mobile detection, not 100% reliable
    VgUtils.isMobileDevice = 
    // Very simple mobile detection, not 100% reliable
    function () {
        return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf("IEMobile") !== -1);
    };
    ;
    VgUtils.isiOSDevice = function () {
        return (navigator.userAgent.match(/ip(hone|ad|od)/i) && !navigator.userAgent.match(/(iemobile)[\/\s]?([\w\.]*)/i));
    };
    ;
    VgUtils.isCordova = function () {
        return document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;
    };
    ;
    VgUtils.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    VgUtils.ctorParameters = function () { return []; };
    return VgUtils;
}());
exports.VgUtils = VgUtils;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctdXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2Zy11dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5Qzs7OztJQUlyQzs7OztPQUlHOzs7Ozs7SUFDSSxpQkFBUzs7Ozs7SUFBaEI7UUFDSSxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLGFBQW9CLENBQUM7UUFFekIsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTlDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDMUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFFMUUsRUFBRSxDQUFDLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLE1BQU0sR0FBRyxhQUFhLEdBQUcsQ0FBQyxDQUFDO2FBQzlCO1NBQ0o7UUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0lBRUQsa0RBQWtEOztJQUMzQyxzQkFBYzs7SUFBckI7UUFDSSxNQUFNLENBQUMsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxXQUFXLEtBQUssV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzFHO0lBQUEsQ0FBQztJQUVLLG1CQUFXLEdBQWxCO1FBQ0ksTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQztLQUN0SDtJQUFBLENBQUM7SUFFSyxpQkFBUyxHQUFoQjtRQUNJLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUM1RjtJQUFBLENBQUM7O2dCQW5DTCxpQkFBVTs7OztrQkFGWDs7QUFHYSwwQkFBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWZ1V0aWxzIHtcbiAgICAvKipcbiAgICAgKiBJbnNwaXJlZCBieSBQYXVsIElyaXNoXG4gICAgICogaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vcGF1bGlyaXNoLzIxMTIwOVxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgc3RhdGljIGdldFpJbmRleCgpOm51bWJlciB7XG4gICAgICAgIGxldCB6SW5kZXggPSAxO1xuICAgICAgICBsZXQgZWxlbWVudFpJbmRleDpudW1iZXI7XG5cbiAgICAgICAgbGV0IHRhZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnKicpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGFncy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGVsZW1lbnRaSW5kZXggPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0YWdzW2ldKVtcInotaW5kZXhcIl0sIDEwKTtcblxuICAgICAgICAgICAgaWYgKGVsZW1lbnRaSW5kZXggPiB6SW5kZXgpIHtcbiAgICAgICAgICAgICAgICB6SW5kZXggPSBlbGVtZW50WkluZGV4ICsgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB6SW5kZXg7XG4gICAgfVxuXG4gICAgLy8gVmVyeSBzaW1wbGUgbW9iaWxlIGRldGVjdGlvbiwgbm90IDEwMCUgcmVsaWFibGVcbiAgICBzdGF0aWMgaXNNb2JpbGVEZXZpY2UoKSB7XG4gICAgICAgIHJldHVybiAodHlwZW9mIHdpbmRvdy5vcmllbnRhdGlvbiAhPT0gXCJ1bmRlZmluZWRcIikgfHwgKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIklFTW9iaWxlXCIpICE9PSAtMSk7XG4gICAgfTtcblxuICAgIHN0YXRpYyBpc2lPU0RldmljZSgpIHtcbiAgICAgICAgcmV0dXJuIChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pcChob25lfGFkfG9kKS9pKSAmJiAhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvKGllbW9iaWxlKVtcXC9cXHNdPyhbXFx3XFwuXSopL2kpKTtcbiAgICB9O1xuXG4gICAgc3RhdGljIGlzQ29yZG92YSgpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LlVSTC5pbmRleE9mKCdodHRwOi8vJykgPT09IC0xICYmIGRvY3VtZW50LlVSTC5pbmRleE9mKCdodHRwczovLycpID09PSAtMTtcbiAgICB9O1xufVxuIl19

/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var Observable_1 = __webpack_require__(6);
var TimerObservable_1 = __webpack_require__(360);
var vg_states_1 = __webpack_require__(338);
var vg_api_1 = __webpack_require__(337);
var vg_events_1 = __webpack_require__(344);
var Subject_1 = __webpack_require__(35);
__webpack_require__(235);
__webpack_require__(368);
var VgMedia = (function () {
    function VgMedia(api, ref) {
        this.api = api;
        this.ref = ref;
        this.state = vg_states_1.VgStates.VG_PAUSED;
        this.time = { current: 0, total: 0, left: 0 };
        this.buffer = { end: 0 };
        this.canPlay = false;
        this.canPlayThrough = false;
        this.isBufferDetected = false;
        this.isMetadataLoaded = false;
        this.isReadyToPlay = false;
        this.isWaiting = false;
        this.isCompleted = false;
        this.isLive = false;
        this.checkInterval = 200;
        this.currentPlayPos = 0;
        this.lastPlayPos = 0;
        this.playAtferSync = false;
        this.bufferDetected = new Subject_1.Subject();
    }
    VgMedia.prototype.ngOnInit = function () {
        var _this = this;
        if (this.vgMedia.nodeName) {
            // It's a native element
            this.elem = this.vgMedia;
        }
        else {
            // It's an Angular Class
            this.elem = this.vgMedia.elem;
        }
        // Just in case we're creating this vgMedia dynamically register again into API
        this.api.registerMedia(this);
        this.subscriptions = {
            // Native events
            abort: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_ABORT),
            canPlay: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_CAN_PLAY),
            canPlayThrough: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_CAN_PLAY_THROUGH),
            durationChange: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_DURATION_CHANGE),
            emptied: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_EMPTIED),
            encrypted: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_ENCRYPTED),
            ended: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_ENDED),
            error: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_ERROR),
            loadedData: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_LOADED_DATA),
            loadedMetadata: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_LOADED_METADATA),
            loadStart: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_LOAD_START),
            pause: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_PAUSE),
            play: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_PLAY),
            playing: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_PLAYING),
            progress: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_PROGRESS),
            rateChange: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_RATE_CHANGE),
            seeked: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_SEEKED),
            seeking: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_SEEKING),
            stalled: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_STALLED),
            suspend: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_SUSPEND),
            timeUpdate: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_TIME_UPDATE),
            volumeChange: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_VOLUME_CHANGE),
            waiting: Observable_1.Observable.fromEvent(this.elem, vg_events_1.VgEvents.VG_WAITING),
            // Advertisement only events
            startAds: Observable_1.Observable.fromEvent(window, vg_events_1.VgEvents.VG_START_ADS),
            endAds: Observable_1.Observable.fromEvent(window, vg_events_1.VgEvents.VG_END_ADS),
            // See changes on <source> child elements to reload the video file
            mutation: Observable_1.Observable.create(function (observer) {
                var domObs = new MutationObserver(function (mutations) {
                    observer.next(mutations);
                });
                domObs.observe(_this.elem, { childList: true, attributes: true });
                return function () {
                    domObs.disconnect();
                };
            }),
            // Custom buffering detection
            bufferDetected: this.bufferDetected
        };
        this.mutationObs = this.subscriptions.mutation.subscribe(this.onMutation.bind(this));
        this.canPlayObs = this.subscriptions.canPlay.subscribe(this.onCanPlay.bind(this));
        this.canPlayThroughObs = this.subscriptions.canPlayThrough.subscribe(this.onCanPlayThrough.bind(this));
        this.loadedMetadataObs = this.subscriptions.loadedMetadata.subscribe(this.onLoadMetadata.bind(this));
        this.waitingObs = this.subscriptions.waiting.subscribe(this.onWait.bind(this));
        this.progressObs = this.subscriptions.progress.subscribe(this.onProgress.bind(this));
        this.endedObs = this.subscriptions.ended.subscribe(this.onComplete.bind(this));
        this.playingObs = this.subscriptions.playing.subscribe(this.onStartPlaying.bind(this));
        this.playObs = this.subscriptions.play.subscribe(this.onPlay.bind(this));
        this.pauseObs = this.subscriptions.pause.subscribe(this.onPause.bind(this));
        this.timeUpdateObs = this.subscriptions.timeUpdate.subscribe(this.onTimeUpdate.bind(this));
        this.volumeChangeObs = this.subscriptions.volumeChange.subscribe(this.onVolumeChange.bind(this));
        this.errorObs = this.subscriptions.error.subscribe(this.onError.bind(this));
        if (this.vgMaster) {
            this.api.playerReadyEvent.subscribe(function () {
                _this.prepareSync();
            });
        }
    };
    VgMedia.prototype.prepareSync = function () {
        var _this = this;
        var canPlayAll = [];
        for (var media in this.api.medias) {
            if (this.api.medias[media]) {
                canPlayAll.push(this.api.medias[media].subscriptions.canPlay);
            }
        }
        this.canPlayAllSubscription = Observable_1.Observable.combineLatest(canPlayAll, function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            var allReady = params.some(function (event) { return event.target.readyState === 4; });
            if (allReady && !_this.syncSubscription) {
                _this.startSync();
                _this.syncSubscription.unsubscribe();
            }
        }).subscribe();
    };
    VgMedia.prototype.startSync = function () {
        var _this = this;
        this.syncSubscription = TimerObservable_1.TimerObservable.create(0, 1000).subscribe(function () {
            for (var media in _this.api.medias) {
                if (_this.api.medias[media] !== _this) {
                    var diff = _this.api.medias[media].currentTime - _this.currentTime;
                    if (diff < -0.3 || diff > 0.3) {
                        _this.playAtferSync = (_this.state === vg_states_1.VgStates.VG_PLAYING);
                        _this.pause();
                        _this.api.medias[media].pause();
                        _this.api.medias[media].currentTime = _this.currentTime;
                    }
                    else {
                        if (_this.playAtferSync) {
                            _this.play();
                            _this.api.medias[media].play();
                            _this.playAtferSync = false;
                        }
                    }
                }
            }
        });
    };
    VgMedia.prototype.onMutation = function (mutations) {
        // Detect changes only for source elements or src attribute
        for (var i = 0, l = mutations.length; i < l; i++) {
            var mut = mutations[i];
            if (mut.type === 'attributes' && mut.attributeName === 'src') {
                // Only load src file if it's not a blob (for DASH / HLS sources)
                if (mut.target['src'] && mut.target['src'].length > 0 && mut.target['src'].indexOf('blob:') < 0) {
                    this.loadMedia();
                    break;
                }
            }
            else if (mut.type === 'childList' && mut.removedNodes.length && mut.removedNodes[0].nodeName.toLowerCase() === 'source') {
                this.loadMedia();
                break;
            }
        }
    };
    VgMedia.prototype.loadMedia = function () {
        var _this = this;
        this.vgMedia.pause();
        this.vgMedia.currentTime = 0;
        // Start buffering until we can play the media file
        this.stopBufferCheck();
        this.isBufferDetected = true;
        this.bufferDetected.next(this.isBufferDetected);
        // TODO: This is ugly, we should find something cleaner. For some reason a TimerObservable doesn't works.
        setTimeout(function () { return _this.vgMedia.load(); }, 10);
    };
    VgMedia.prototype.play = function () {
        var _this = this;
        // short-circuit if already playing
        if (this.playPromise || (this.state !== vg_states_1.VgStates.VG_PAUSED && this.state !== vg_states_1.VgStates.VG_ENDED)) {
            return;
        }
        this.playPromise = this.vgMedia.play();
        // browser has async play promise
        if (this.playPromise && this.playPromise.then && this.playPromise.catch) {
            this.playPromise
                .then(function () {
                _this.playPromise = null;
            })
                .catch(function () {
                // deliberately empty for the sake of eating console noise
            });
        }
    };
    VgMedia.prototype.pause = function () {
        var _this = this;
        // browser has async play promise
        if (this.playPromise) {
            this.playPromise
                .then(function () {
                _this.vgMedia.pause();
            });
        }
        else {
            this.vgMedia.pause();
        }
    };
    Object.defineProperty(VgMedia.prototype, "id", {
        get: function () {
            // We should return undefined if vgMedia still doesn't exist
            var result = undefined;
            if (this.vgMedia) {
                result = this.vgMedia.id;
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgMedia.prototype, "duration", {
        get: function () {
            return this.vgMedia.duration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgMedia.prototype, "currentTime", {
        get: function () {
            return this.vgMedia.currentTime;
        },
        set: function (seconds) {
            this.vgMedia.currentTime = seconds;
            // this.elem.dispatchEvent(new CustomEvent(VgEvents.VG_SEEK));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgMedia.prototype, "volume", {
        get: function () {
            return this.vgMedia.volume;
        },
        set: function (volume) {
            this.vgMedia.volume = volume;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgMedia.prototype, "playbackRate", {
        get: function () {
            return this.vgMedia.playbackRate;
        },
        set: function (rate) {
            this.vgMedia.playbackRate = rate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgMedia.prototype, "buffered", {
        get: function () {
            return this.vgMedia.buffered;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgMedia.prototype, "textTracks", {
        get: function () {
            return this.vgMedia.textTracks;
        },
        enumerable: true,
        configurable: true
    });
    VgMedia.prototype.onCanPlay = function (event) {
        this.isBufferDetected = false;
        this.bufferDetected.next(this.isBufferDetected);
        this.canPlay = true;
        this.ref.detectChanges();
    };
    VgMedia.prototype.onCanPlayThrough = function (event) {
        this.isBufferDetected = false;
        this.bufferDetected.next(this.isBufferDetected);
        this.canPlayThrough = true;
        this.ref.detectChanges();
    };
    VgMedia.prototype.onLoadMetadata = function (event) {
        this.isMetadataLoaded = true;
        this.time = {
            current: 0,
            left: 0,
            total: this.duration * 1000
        };
        this.state = vg_states_1.VgStates.VG_PAUSED;
        // Live streaming check
        var t = Math.round(this.time.total);
        this.isLive = (t === Infinity);
        this.ref.detectChanges();
    };
    VgMedia.prototype.onWait = function (event) {
        this.isWaiting = true;
        this.ref.detectChanges();
    };
    VgMedia.prototype.onComplete = function (event) {
        this.isCompleted = true;
        this.state = vg_states_1.VgStates.VG_ENDED;
        this.ref.detectChanges();
    };
    VgMedia.prototype.onStartPlaying = function (event) {
        this.state = vg_states_1.VgStates.VG_PLAYING;
        this.ref.detectChanges();
    };
    VgMedia.prototype.onPlay = function (event) {
        this.state = vg_states_1.VgStates.VG_PLAYING;
        if (this.vgMaster) {
            if (!this.syncSubscription || this.syncSubscription.closed) {
                this.startSync();
            }
        }
        this.startBufferCheck();
        this.ref.detectChanges();
    };
    VgMedia.prototype.onPause = function (event) {
        this.state = vg_states_1.VgStates.VG_PAUSED;
        if (this.vgMaster) {
            if (!this.playAtferSync) {
                this.syncSubscription.unsubscribe();
            }
        }
        this.stopBufferCheck();
        this.ref.detectChanges();
    };
    VgMedia.prototype.onTimeUpdate = function (event) {
        var end = this.buffered.length - 1;
        this.time = {
            current: this.currentTime * 1000,
            total: this.time.total,
            left: (this.duration - this.currentTime) * 1000
        };
        if (end >= 0) {
            this.buffer = { end: this.buffered.end(end) * 1000 };
        }
        this.ref.detectChanges();
    };
    VgMedia.prototype.onProgress = function (event) {
        var end = this.buffered.length - 1;
        if (end >= 0) {
            this.buffer = { end: this.buffered.end(end) * 1000 };
        }
        this.ref.detectChanges();
    };
    VgMedia.prototype.onVolumeChange = function (event) {
        // TODO: Save to localstorage the current volume
        this.ref.detectChanges();
    };
    VgMedia.prototype.onError = function (event) {
        // TODO: Handle error messages
        this.ref.detectChanges();
    };
    // http://stackoverflow.com/a/23828241/779529
    // http://stackoverflow.com/a/23828241/779529
    VgMedia.prototype.bufferCheck = 
    // http://stackoverflow.com/a/23828241/779529
    function () {
        var offset = 1 / this.checkInterval;
        this.currentPlayPos = this.currentTime;
        if (!this.isBufferDetected && this.currentPlayPos < (this.lastPlayPos + offset)) {
            this.isBufferDetected = true;
        }
        if (this.isBufferDetected && this.currentPlayPos > (this.lastPlayPos + offset)) {
            this.isBufferDetected = false;
        }
        // Prevent calls to bufferCheck after ngOnDestroy have been called
        if (!this.bufferDetected.closed) {
            this.bufferDetected.next(this.isBufferDetected);
        }
        this.lastPlayPos = this.currentPlayPos;
    };
    VgMedia.prototype.startBufferCheck = function () {
        var _this = this;
        this.checkBufferSubscription = TimerObservable_1.TimerObservable.create(0, this.checkInterval).subscribe(function () {
            _this.bufferCheck();
        });
    };
    VgMedia.prototype.stopBufferCheck = function () {
        if (this.checkBufferSubscription) {
            this.checkBufferSubscription.unsubscribe();
        }
        this.isBufferDetected = false;
        this.bufferDetected.next(this.isBufferDetected);
    };
    VgMedia.prototype.seekTime = function (value, byPercent) {
        if (byPercent === void 0) { byPercent = false; }
        var second;
        var duration = this.duration;
        if (byPercent) {
            second = value * duration / 100;
        }
        else {
            second = value;
        }
        this.currentTime = second;
    };
    VgMedia.prototype.addTextTrack = function (type, label, language, mode) {
        var newTrack = this.vgMedia.addTextTrack(type, label, language);
        if (mode) {
            newTrack.mode = mode;
        }
        return newTrack;
    };
    VgMedia.prototype.ngOnDestroy = function () {
        this.vgMedia.src = '';
        this.mutationObs.unsubscribe();
        this.canPlayObs.unsubscribe();
        this.canPlayThroughObs.unsubscribe();
        this.loadedMetadataObs.unsubscribe();
        this.waitingObs.unsubscribe();
        this.progressObs.unsubscribe();
        this.endedObs.unsubscribe();
        this.playingObs.unsubscribe();
        this.playObs.unsubscribe();
        this.pauseObs.unsubscribe();
        this.timeUpdateObs.unsubscribe();
        this.volumeChangeObs.unsubscribe();
        this.errorObs.unsubscribe();
        if (this.checkBufferSubscription) {
            this.checkBufferSubscription.unsubscribe();
        }
        if (this.syncSubscription) {
            this.syncSubscription.unsubscribe();
        }
        this.bufferDetected.complete();
        this.bufferDetected.unsubscribe();
        this.api.unregisterMedia(this);
    };
    VgMedia.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[vgMedia]'
                },] },
    ];
    /** @nocollapse */
    VgMedia.ctorParameters = function () { return [
        { type: vg_api_1.VgAPI, },
        { type: core_1.ChangeDetectorRef, },
    ]; };
    VgMedia.propDecorators = {
        "vgMedia": [{ type: core_1.Input },],
        "vgMaster": [{ type: core_1.Input },],
    };
    return VgMedia;
}());
exports.VgMedia = VgMedia;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctbWVkaWEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2Zy1tZWRpYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFtRztBQUVuRyw4Q0FBNkM7QUFDN0MsbUVBQWtFO0FBR2xFLGlEQUErQztBQUMvQyw2Q0FBMkM7QUFDM0MsaURBQStDO0FBQy9DLHdDQUF1QztBQUV2Qyx5Q0FBdUM7QUFDdkMsNkNBQTJDOztJQXNEdkMsaUJBQW9CLEdBQVUsRUFBVSxHQUFzQjtRQUExQyxRQUFHLEdBQUgsR0FBRyxDQUFPO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7cUJBM0M5QyxvQkFBUSxDQUFDLFNBQVM7b0JBRXRCLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUU7c0JBQy9CLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRTt1QkFHTCxLQUFLOzhCQUNFLEtBQUs7Z0NBQ0gsS0FBSztnQ0FDTCxLQUFLOzZCQUNSLEtBQUs7eUJBQ1QsS0FBSzsyQkFDSCxLQUFLO3NCQUNWLEtBQUs7NkJBR0MsR0FBRzs4QkFDRixDQUFDOzJCQUNKLENBQUM7NkJBS0UsS0FBSzs4QkFnQkssSUFBSSxpQkFBTyxFQUFFO0tBTS9DO0lBRUQsMEJBQVEsR0FBUjtRQUFBLGlCQW1GQztRQWxGRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7O1lBRXhCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUM1QjtRQUFDLElBQUksQ0FBQyxDQUFDOztZQUVKLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7U0FDakM7O1FBR0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFN0IsSUFBSSxDQUFDLGFBQWEsR0FBRzs7WUFFakIsS0FB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Z0IsQ0FBQyxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3ZDO1FBRUQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRWxDLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2xDOztnQkFsZkosZ0JBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsV0FBVztpQkFDeEI7Ozs7Z0JBVFEsY0FBSztnQkFQTCx3QkFBaUI7Ozs0QkFvQnJCLFlBQUs7NkJBQ0wsWUFBSzs7a0JBckJWOztBQWlCYSwwQkFBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBFbGVtZW50UmVmLCBPbkluaXQsIERpcmVjdGl2ZSwgSW5wdXQsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBJUGxheWFibGUsIElNZWRpYVN1YnNjcmlwdGlvbnMgfSBmcm9tIFwiLi9pLXBsYXlhYmxlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgVGltZXJPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9UaW1lck9ic2VydmFibGVcIjtcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzL1N1YnNjcmlwdGlvblwiO1xuaW1wb3J0IHsgT2JzZXJ2ZXIgfSBmcm9tIFwicnhqcy9PYnNlcnZlclwiO1xuaW1wb3J0IHsgVmdTdGF0ZXMgfSBmcm9tICcuLi9zdGF0ZXMvdmctc3RhdGVzJztcbmltcG9ydCB7IFZnQVBJIH0gZnJvbSAnLi4vc2VydmljZXMvdmctYXBpJztcbmltcG9ydCB7IFZnRXZlbnRzIH0gZnJvbSAnLi4vZXZlbnRzL3ZnLWV2ZW50cyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcy9TdWJqZWN0JztcblxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL2Zyb21FdmVudCc7XG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvY29tYmluZUxhdGVzdCc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW3ZnTWVkaWFdJ1xufSlcbmV4cG9ydCBjbGFzcyBWZ01lZGlhIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIElQbGF5YWJsZSB7XG4gICAgZWxlbTogYW55O1xuXG4gICAgQElucHV0KCkgdmdNZWRpYTogYW55O1xuICAgIEBJbnB1dCgpIHZnTWFzdGVyOiBib29sZWFuO1xuXG4gICAgc3RhdGU6IHN0cmluZyA9IFZnU3RhdGVzLlZHX1BBVVNFRDtcblxuICAgIHRpbWU6IGFueSA9IHsgY3VycmVudDogMCwgdG90YWw6IDAsIGxlZnQ6IDAgfTtcbiAgICBidWZmZXI6IGFueSA9IHsgZW5kOiAwIH07XG4gICAgc3Vic2NyaXB0aW9uczogSU1lZGlhU3Vic2NyaXB0aW9ucyB8IGFueTtcblxuICAgIGNhblBsYXk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBjYW5QbGF5VGhyb3VnaDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzQnVmZmVyRGV0ZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpc01ldGFkYXRhTG9hZGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgaXNSZWFkeVRvUGxheTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzV2FpdGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzQ29tcGxldGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgaXNMaXZlOiBib29sZWFuID0gZmFsc2U7XG5cblxuICAgIGNoZWNrSW50ZXJ2YWw6IG51bWJlciA9IDIwMDtcbiAgICBjdXJyZW50UGxheVBvczogbnVtYmVyID0gMDtcbiAgICBsYXN0UGxheVBvczogbnVtYmVyID0gMDtcblxuICAgIGNoZWNrQnVmZmVyU3Vic2NyaXB0aW9uOiBhbnk7XG4gICAgc3luY1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAgIGNhblBsYXlBbGxTdWJzY3JpcHRpb246IGFueTtcbiAgICBwbGF5QXRmZXJTeW5jOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBtdXRhdGlvbk9iczogU3Vic2NyaXB0aW9uO1xuICAgIGNhblBsYXlPYnM6IFN1YnNjcmlwdGlvbjtcbiAgICBjYW5QbGF5VGhyb3VnaE9iczogU3Vic2NyaXB0aW9uO1xuICAgIGxvYWRlZE1ldGFkYXRhT2JzOiBTdWJzY3JpcHRpb247XG4gICAgd2FpdGluZ09iczogU3Vic2NyaXB0aW9uO1xuICAgIHByb2dyZXNzT2JzOiBTdWJzY3JpcHRpb247XG4gICAgZW5kZWRPYnM6IFN1YnNjcmlwdGlvbjtcbiAgICBwbGF5aW5nT2JzOiBTdWJzY3JpcHRpb247XG4gICAgcGxheU9iczogU3Vic2NyaXB0aW9uO1xuICAgIHBhdXNlT2JzOiBTdWJzY3JpcHRpb247XG4gICAgdGltZVVwZGF0ZU9iczogU3Vic2NyaXB0aW9uO1xuICAgIHZvbHVtZUNoYW5nZU9iczogU3Vic2NyaXB0aW9uO1xuICAgIGVycm9yT2JzOiBTdWJzY3JpcHRpb247XG5cbiAgICBidWZmZXJEZXRlY3RlZDogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgICBwbGF5UHJvbWlzZTogUHJvbWlzZTxhbnk+O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGk6IFZnQVBJLCBwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcblxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAodGhpcy52Z01lZGlhLm5vZGVOYW1lKSB7XG4gICAgICAgICAgICAvLyBJdCdzIGEgbmF0aXZlIGVsZW1lbnRcbiAgICAgICAgICAgIHRoaXMuZWxlbSA9IHRoaXMudmdNZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEl0J3MgYW4gQW5ndWxhciBDbGFzc1xuICAgICAgICAgICAgdGhpcy5lbGVtID0gdGhpcy52Z01lZGlhLmVsZW07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBKdXN0IGluIGNhc2Ugd2UncmUgY3JlYXRpbmcgdGhpcyB2Z01lZGlhIGR5bmFtaWNhbGx5IHJlZ2lzdGVyIGFnYWluIGludG8gQVBJXG4gICAgICAgIHRoaXMuYXBpLnJlZ2lzdGVyTWVkaWEodGhpcyk7XG5cbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zID0ge1xuICAgICAgICAgICAgLy8gTmF0aXZlIGV2ZW50c1xuICAgICAgICAgICAgYWJvcnQ6IE9ic2VydmFibGUuZnJvbUV2ZW50KDxhbnk+dGhpcy5lbGVtLCBWZ0V2ZW50cy5WR19BQk9SVCksXG4gICAgICAgICAgICBjYW5QbGF5OiBPYnNlcnZhYmxlLmZyb21FdmVudCg8YW55PnRoaXMuZWxlbSwgVmdFdmVudHMuVkdfQ0FOX1BMQVkpLFxuICAgICAgICAgICAgY2FuUGxheVRocm91Z2g6IE9ic2VydmFibGUuZnJvbUV2ZW50KDxhbnk+dGhpcy5lbGVtLCBWZ0V2ZW50cy5WR19DQU5fUExBWV9USFJPVUdIKSxcbiAgICAgICAgICAgIGR1cmF0aW9uQ2hhbmdlOiBPYnNlcnZhYmxlLmZyb21FdmVudCg8YW55PnRoaXMuZWxlbSwgVmdFdmVudHMuVkdfRFVSQVRJT05fQ0hBTkdFKSxcbiAgICAgICAgICAgIGVtcHRpZWQ6IE9ic2VydmFibGUuZnJvbUV2ZW50KDxhbnk+dGhpcy5lbGVtLCBWZ0V2ZW50cy5WR19FTVBUSUVEKSxcbiAgICAgICAgICAgIGVuY3J5cHRlZDogT2JzZXJ2YWJsZS5mcm9tRXZlbnQoPGFueT50aGlzLmVsZW0sIFZnRXZlbnRzLlZHX0VOQ1JZUFRFRCksXG4gICAgICAgICAgICBlbmRlZDogT2JzZXJ2YWJsZS5mcm9tRXZlbnQoPGFueT50aGlzLmVsZW0sIFZnRXZlbnRzLlZHX0VOREVEKSxcbiAgICAgICAgICAgIGVycm9yOiBPYnNlcnZhYmxlLmZyb21FdmVudCg8YW55PnRoaXMuZWxlbSwgVmdFdmVudHMuVkdfRVJST1IpLFxuICAgICAgICAgICAgbG9hZGVkRGF0YTogT2JzZXJ2YWJsZS5mcm9tRXZlbnQoPGFueT50aGlzLmVsZW0sIFZnRXZlbnRzLlZHX0xPQURFRF9EQVRBKSxcbiAgICAgICAgICAgIGxvYWRlZE1ldGFkYXRhOiBPYnNlcnZhYmxlLmZyb21FdmVudCg8YW55PnRoaXMuZWxlbSwgVmdFdmVudHMuVkdfTE9BREVEX01FVEFEQVRBKSxcbiAgICAgICAgICAgIGxvYWRTdGFydDogT2JzZXJ2YWJsZS5mcm9tRXZlbnQoPGFueT50aGlzLmVsZW0sIFZnRXZlbnRzLlZHX0xPQURfU1RBUlQpLFxuICAgICAgICAgICAgcGF1c2U6IE9ic2VydmFibGUuZnJvbUV2ZW50KDxhbnk+dGhpcy5lbGVtLCBWZ0V2ZW50cy5WR19QQVVTRSksXG4gICAgICAgICAgICBwbGF5OiBPYnNlcnZhYmxlLmZyb21FdmVudCg8YW55PnRoaXMuZWxlbSwgVmdFdmVudHMuVkdfUExBWSksXG4gICAgICAgICAgICBwbGF5aW5nOiBPYnNlcnZhYmxlLmZyb21FdmVudCg8YW55PnRoaXMuZWxlbSwgVmdFdmVudHMuVkdfUExBWUlORyksXG4gICAgICAgICAgICBwcm9ncmVzczogT2JzZXJ2YWJsZS5mcm9tRXZlbnQoPGFueT50aGlzLmVsZW0sIFZnRXZlbnRzLlZHX1BST0dSRVNTKSxcbiAgICAgICAgICAgIHJhdGVDaGFuZ2U6IE9ic2VydmFibGUuZnJvbUV2ZW50KDxhbnk+dGhpcy5lbGVtLCBWZ0V2ZW50cy5WR19SQVRFX0NIQU5HRSksXG4gICAgICAgICAgICBzZWVrZWQ6IE9ic2VydmFibGUuZnJvbUV2ZW50KDxhbnk+dGhpcy5lbGVtLCBWZ0V2ZW50cy5WR19TRUVLRUQpLFxuICAgICAgICAgICAgc2Vla2luZzogT2JzZXJ2YWJsZS5mcm9tRXZlbnQoPGFueT50aGlzLmVsZW0sIFZnRXZlbnRzLlZHX1NFRUtJTkcpLFxuICAgICAgICAgICAgc3RhbGxlZDogT2JzZXJ2YWJsZS5mcm9tRXZlbnQoPGFueT50aGlzLmVsZW0sIFZnRXZlbnRzLlZHX1NUQUxMRUQpLFxuICAgICAgICAgICAgc3VzcGVuZDogT2JzZXJ2YWJsZS5mcm9tRXZlbnQoPGFueT50aGlzLmVsZW0sIFZnRXZlbnRzLlZHX1NVU1BFTkQpLFxuICAgICAgICAgICAgdGltZVVwZGF0ZTogT2JzZXJ2YWJsZS5mcm9tRXZlbnQoPGFueT50aGlzLmVsZW0sIFZnRXZlbnRzLlZHX1RJTUVfVVBEQVRFKSxcbiAgICAgICAgICAgIHZvbHVtZUNoYW5nZTogT2JzZXJ2YWJsZS5mcm9tRXZlbnQoPGFueT50aGlzLmVsZW0sIFZnRXZlbnRzLlZHX1ZPTFVNRV9DSEFOR0UpLFxuICAgICAgICAgICAgd2FpdGluZzogT2JzZXJ2YWJsZS5mcm9tRXZlbnQoPGFueT50aGlzLmVsZW0sIFZnRXZlbnRzLlZHX1dBSVRJTkcpLFxuXG4gICAgICAgICAgICAvLyBBZHZlcnRpc2VtZW50IG9ubHkgZXZlbnRzXG4gICAgICAgICAgICBzdGFydEFkczogT2JzZXJ2YWJsZS5mcm9tRXZlbnQoPGFueT53aW5kb3csIFZnRXZlbnRzLlZHX1NUQVJUX0FEUyksXG4gICAgICAgICAgICBlbmRBZHM6IE9ic2VydmFibGUuZnJvbUV2ZW50KDxhbnk+d2luZG93LCBWZ0V2ZW50cy5WR19FTkRfQURTKSxcblxuICAgICAgICAgICAgLy8gU2VlIGNoYW5nZXMgb24gPHNvdXJjZT4gY2hpbGQgZWxlbWVudHMgdG8gcmVsb2FkIHRoZSB2aWRlbyBmaWxlXG4gICAgICAgICAgICBtdXRhdGlvbjogT2JzZXJ2YWJsZS5jcmVhdGUoXG4gICAgICAgICAgICAgICAgKG9ic2VydmVyOiBhbnkpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBsZXQgZG9tT2JzID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9ucykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChtdXRhdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBkb21PYnMub2JzZXJ2ZSg8YW55PnRoaXMuZWxlbSwgeyBjaGlsZExpc3Q6IHRydWUsIGF0dHJpYnV0ZXM6IHRydWUgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbU9icy5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKSxcblxuICAgICAgICAgICAgLy8gQ3VzdG9tIGJ1ZmZlcmluZyBkZXRlY3Rpb25cbiAgICAgICAgICAgIGJ1ZmZlckRldGVjdGVkOiB0aGlzLmJ1ZmZlckRldGVjdGVkXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5tdXRhdGlvbk9icyA9IHRoaXMuc3Vic2NyaXB0aW9ucy5tdXRhdGlvbi5zdWJzY3JpYmUodGhpcy5vbk11dGF0aW9uLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmNhblBsYXlPYnMgPSB0aGlzLnN1YnNjcmlwdGlvbnMuY2FuUGxheS5zdWJzY3JpYmUodGhpcy5vbkNhblBsYXkuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuY2FuUGxheVRocm91Z2hPYnMgPSB0aGlzLnN1YnNjcmlwdGlvbnMuY2FuUGxheVRocm91Z2guc3Vic2NyaWJlKHRoaXMub25DYW5QbGF5VGhyb3VnaC5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5sb2FkZWRNZXRhZGF0YU9icyA9IHRoaXMuc3Vic2NyaXB0aW9ucy5sb2FkZWRNZXRhZGF0YS5zdWJzY3JpYmUodGhpcy5vbkxvYWRNZXRhZGF0YS5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy53YWl0aW5nT2JzID0gdGhpcy5zdWJzY3JpcHRpb25zLndhaXRpbmcuc3Vic2NyaWJlKHRoaXMub25XYWl0LmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLnByb2dyZXNzT2JzID0gdGhpcy5zdWJzY3JpcHRpb25zLnByb2dyZXNzLnN1YnNjcmliZSh0aGlzLm9uUHJvZ3Jlc3MuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuZW5kZWRPYnMgPSB0aGlzLnN1YnNjcmlwdGlvbnMuZW5kZWQuc3Vic2NyaWJlKHRoaXMub25Db21wbGV0ZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5wbGF5aW5nT2JzID0gdGhpcy5zdWJzY3JpcHRpb25zLnBsYXlpbmcuc3Vic2NyaWJlKHRoaXMub25TdGFydFBsYXlpbmcuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMucGxheU9icyA9IHRoaXMuc3Vic2NyaXB0aW9ucy5wbGF5LnN1YnNjcmliZSh0aGlzLm9uUGxheS5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5wYXVzZU9icyA9IHRoaXMuc3Vic2NyaXB0aW9ucy5wYXVzZS5zdWJzY3JpYmUodGhpcy5vblBhdXNlLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLnRpbWVVcGRhdGVPYnMgPSB0aGlzLnN1YnNjcmlwdGlvbnMudGltZVVwZGF0ZS5zdWJzY3JpYmUodGhpcy5vblRpbWVVcGRhdGUuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMudm9sdW1lQ2hhbmdlT2JzID0gdGhpcy5zdWJzY3JpcHRpb25zLnZvbHVtZUNoYW5nZS5zdWJzY3JpYmUodGhpcy5vblZvbHVtZUNoYW5nZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5lcnJvck9icyA9IHRoaXMuc3Vic2NyaXB0aW9ucy5lcnJvci5zdWJzY3JpYmUodGhpcy5vbkVycm9yLmJpbmQodGhpcykpO1xuXG4gICAgICAgIGlmICh0aGlzLnZnTWFzdGVyKSB7XG4gICAgICAgICAgICB0aGlzLmFwaS5wbGF5ZXJSZWFkeUV2ZW50LnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJlcGFyZVN5bmMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJlcGFyZVN5bmMoKSB7XG4gICAgICAgIGxldCBjYW5QbGF5QWxsOiBBcnJheTxPYnNlcnZhYmxlPGFueT4+ID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgbWVkaWEgaW4gdGhpcy5hcGkubWVkaWFzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hcGkubWVkaWFzWyBtZWRpYSBdKSB7XG4gICAgICAgICAgICAgICAgY2FuUGxheUFsbC5wdXNoKHRoaXMuYXBpLm1lZGlhc1sgbWVkaWEgXS5zdWJzY3JpcHRpb25zLmNhblBsYXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jYW5QbGF5QWxsU3Vic2NyaXB0aW9uID0gT2JzZXJ2YWJsZS5jb21iaW5lTGF0ZXN0KGNhblBsYXlBbGwsXG4gICAgICAgICAgICAoLi4ucGFyYW1zKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGFsbFJlYWR5OiBib29sZWFuID0gcGFyYW1zLnNvbWUoZXZlbnQgPT4gZXZlbnQudGFyZ2V0LnJlYWR5U3RhdGUgPT09IDQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGFsbFJlYWR5ICYmICF0aGlzLnN5bmNTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGFydFN5bmMoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zeW5jU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApLnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHN0YXJ0U3luYygpIHtcbiAgICAgICAgdGhpcy5zeW5jU3Vic2NyaXB0aW9uID0gVGltZXJPYnNlcnZhYmxlLmNyZWF0ZSgwLCAxMDAwKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbWVkaWEgaW4gdGhpcy5hcGkubWVkaWFzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFwaS5tZWRpYXNbIG1lZGlhIF0gIT09IHRoaXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkaWZmOiBudW1iZXIgPSB0aGlzLmFwaS5tZWRpYXNbIG1lZGlhIF0uY3VycmVudFRpbWUgLSB0aGlzLmN1cnJlbnRUaW1lO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGlmZiA8IC0wLjMgfHwgZGlmZiA+IDAuMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUF0ZmVyU3luYyA9ICh0aGlzLnN0YXRlID09PSBWZ1N0YXRlcy5WR19QTEFZSU5HKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwaS5tZWRpYXNbIG1lZGlhIF0ucGF1c2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwaS5tZWRpYXNbIG1lZGlhIF0uY3VycmVudFRpbWUgPSB0aGlzLmN1cnJlbnRUaW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGxheUF0ZmVyU3luYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcGkubWVkaWFzWyBtZWRpYSBdLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5QXRmZXJTeW5jID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIG9uTXV0YXRpb24obXV0YXRpb25zOiBBcnJheTxNdXRhdGlvblJlY29yZD4pIHtcbiAgICAgICAgLy8gRGV0ZWN0IGNoYW5nZXMgb25seSBmb3Igc291cmNlIGVsZW1lbnRzIG9yIHNyYyBhdHRyaWJ1dGVcbiAgICAgICAgZm9yIChsZXQgaT0wLCBsPW11dGF0aW9ucy5sZW5ndGg7IGk8bDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbXV0OiBNdXRhdGlvblJlY29yZCA9IG11dGF0aW9uc1tpXTtcblxuICAgICAgICAgICAgaWYgKG11dC50eXBlID09PSAnYXR0cmlidXRlcycgJiYgbXV0LmF0dHJpYnV0ZU5hbWUgPT09ICdzcmMnKSB7XG4gICAgICAgICAgICAgICAgLy8gT25seSBsb2FkIHNyYyBmaWxlIGlmIGl0J3Mgbm90IGEgYmxvYiAoZm9yIERBU0ggLyBITFMgc291cmNlcylcbiAgICAgICAgICAgICAgICBpZiAobXV0LnRhcmdldFsnc3JjJ10gJiYgbXV0LnRhcmdldFsnc3JjJ10ubGVuZ3RoID4gMCAmJiBtdXQudGFyZ2V0WydzcmMnXS5pbmRleE9mKCdibG9iOicpIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRNZWRpYSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG11dC50eXBlID09PSAnY2hpbGRMaXN0JyAmJiBtdXQucmVtb3ZlZE5vZGVzLmxlbmd0aCAmJiBtdXQucmVtb3ZlZE5vZGVzWzBdLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdzb3VyY2UnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkTWVkaWEoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvYWRNZWRpYSgpIHtcbiAgICAgICAgdGhpcy52Z01lZGlhLnBhdXNlKCk7XG4gICAgICAgIHRoaXMudmdNZWRpYS5jdXJyZW50VGltZSA9IDA7XG5cbiAgICAgICAgLy8gU3RhcnQgYnVmZmVyaW5nIHVudGlsIHdlIGNhbiBwbGF5IHRoZSBtZWRpYSBmaWxlXG4gICAgICAgIHRoaXMuc3RvcEJ1ZmZlckNoZWNrKCk7XG4gICAgICAgIHRoaXMuaXNCdWZmZXJEZXRlY3RlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuYnVmZmVyRGV0ZWN0ZWQubmV4dCh0aGlzLmlzQnVmZmVyRGV0ZWN0ZWQpO1xuXG4gICAgICAgIC8vIFRPRE86IFRoaXMgaXMgdWdseSwgd2Ugc2hvdWxkIGZpbmQgc29tZXRoaW5nIGNsZWFuZXIuIEZvciBzb21lIHJlYXNvbiBhIFRpbWVyT2JzZXJ2YWJsZSBkb2Vzbid0IHdvcmtzLlxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMudmdNZWRpYS5sb2FkKCksIDEwKTtcbiAgICB9XG5cbiAgICBwbGF5KCkge1xuICAgICAgICAvLyBzaG9ydC1jaXJjdWl0IGlmIGFscmVhZHkgcGxheWluZ1xuICAgICAgICBpZiAodGhpcy5wbGF5UHJvbWlzZSB8fCAodGhpcy5zdGF0ZSAhPT0gVmdTdGF0ZXMuVkdfUEFVU0VEICYmIHRoaXMuc3RhdGUgIT09IFZnU3RhdGVzLlZHX0VOREVEKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wbGF5UHJvbWlzZSA9IHRoaXMudmdNZWRpYS5wbGF5KCk7XG5cbiAgICAgICAgLy8gYnJvd3NlciBoYXMgYXN5bmMgcGxheSBwcm9taXNlXG4gICAgICAgIGlmICh0aGlzLnBsYXlQcm9taXNlICYmIHRoaXMucGxheVByb21pc2UudGhlbiAmJiB0aGlzLnBsYXlQcm9taXNlLmNhdGNoKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXlQcm9taXNlXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlQcm9taXNlID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRlbGliZXJhdGVseSBlbXB0eSBmb3IgdGhlIHNha2Ugb2YgZWF0aW5nIGNvbnNvbGUgbm9pc2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBhdXNlKCkge1xuICAgICAgICAvLyBicm93c2VyIGhhcyBhc3luYyBwbGF5IHByb21pc2VcbiAgICAgICAgaWYgKHRoaXMucGxheVByb21pc2UpIHtcbiAgICAgICAgICAgIHRoaXMucGxheVByb21pc2VcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmdNZWRpYS5wYXVzZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52Z01lZGlhLnBhdXNlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgaWQoKSB7XG4gICAgICAgIC8vIFdlIHNob3VsZCByZXR1cm4gdW5kZWZpbmVkIGlmIHZnTWVkaWEgc3RpbGwgZG9lc24ndCBleGlzdFxuICAgICAgICBsZXQgcmVzdWx0ID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIGlmICh0aGlzLnZnTWVkaWEpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudmdNZWRpYS5pZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZ2V0IGR1cmF0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52Z01lZGlhLmR1cmF0aW9uO1xuICAgIH1cblxuICAgIHNldCBjdXJyZW50VGltZShzZWNvbmRzKSB7XG4gICAgICAgIHRoaXMudmdNZWRpYS5jdXJyZW50VGltZSA9IHNlY29uZHM7XG4gICAgICAgIC8vIHRoaXMuZWxlbS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChWZ0V2ZW50cy5WR19TRUVLKSk7XG4gICAgfVxuXG4gICAgZ2V0IGN1cnJlbnRUaW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52Z01lZGlhLmN1cnJlbnRUaW1lO1xuICAgIH1cblxuICAgIHNldCB2b2x1bWUodm9sdW1lKSB7XG4gICAgICAgIHRoaXMudmdNZWRpYS52b2x1bWUgPSB2b2x1bWU7XG4gICAgfVxuXG4gICAgZ2V0IHZvbHVtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmdNZWRpYS52b2x1bWU7XG4gICAgfVxuXG4gICAgc2V0IHBsYXliYWNrUmF0ZShyYXRlKSB7XG4gICAgICAgIHRoaXMudmdNZWRpYS5wbGF5YmFja1JhdGUgPSByYXRlO1xuICAgIH1cblxuICAgIGdldCBwbGF5YmFja1JhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZnTWVkaWEucGxheWJhY2tSYXRlO1xuICAgIH1cblxuICAgIGdldCBidWZmZXJlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmdNZWRpYS5idWZmZXJlZDtcbiAgICB9XG5cbiAgICBnZXQgdGV4dFRyYWNrcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmdNZWRpYS50ZXh0VHJhY2tzO1xuICAgIH1cblxuICAgIG9uQ2FuUGxheShldmVudDogYW55KSB7XG4gICAgICAgIHRoaXMuaXNCdWZmZXJEZXRlY3RlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJ1ZmZlckRldGVjdGVkLm5leHQodGhpcy5pc0J1ZmZlckRldGVjdGVkKTtcbiAgICAgICAgdGhpcy5jYW5QbGF5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIG9uQ2FuUGxheVRocm91Z2goZXZlbnQ6IGFueSkge1xuICAgICAgICB0aGlzLmlzQnVmZmVyRGV0ZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5idWZmZXJEZXRlY3RlZC5uZXh0KHRoaXMuaXNCdWZmZXJEZXRlY3RlZCk7XG4gICAgICAgIHRoaXMuY2FuUGxheVRocm91Z2ggPSB0cnVlO1xuICAgICAgICB0aGlzLnJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgb25Mb2FkTWV0YWRhdGEoZXZlbnQ6IGFueSkge1xuICAgICAgICB0aGlzLmlzTWV0YWRhdGFMb2FkZWQgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMudGltZSA9IHtcbiAgICAgICAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgdG90YWw6IHRoaXMuZHVyYXRpb24gKiAxMDAwXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IFZnU3RhdGVzLlZHX1BBVVNFRDtcblxuICAgICAgICAvLyBMaXZlIHN0cmVhbWluZyBjaGVja1xuICAgICAgICBsZXQgdDpudW1iZXIgPSBNYXRoLnJvdW5kKHRoaXMudGltZS50b3RhbCk7XG4gICAgICAgIHRoaXMuaXNMaXZlID0gKHQgPT09IEluZmluaXR5KTtcbiAgICAgICAgdGhpcy5yZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIG9uV2FpdChldmVudDogYW55KSB7XG4gICAgICAgIHRoaXMuaXNXYWl0aW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIG9uQ29tcGxldGUoZXZlbnQ6IGFueSkge1xuICAgICAgICB0aGlzLmlzQ29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFZnU3RhdGVzLlZHX0VOREVEO1xuICAgICAgICB0aGlzLnJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgb25TdGFydFBsYXlpbmcoZXZlbnQ6IGFueSkge1xuICAgICAgICB0aGlzLnN0YXRlID0gVmdTdGF0ZXMuVkdfUExBWUlORztcbiAgICAgICAgdGhpcy5yZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIG9uUGxheShldmVudDogYW55KSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBWZ1N0YXRlcy5WR19QTEFZSU5HO1xuXG4gICAgICAgIGlmICh0aGlzLnZnTWFzdGVyKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc3luY1N1YnNjcmlwdGlvbiB8fCB0aGlzLnN5bmNTdWJzY3JpcHRpb24uY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFN5bmMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3RhcnRCdWZmZXJDaGVjaygpO1xuICAgICAgICB0aGlzLnJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgb25QYXVzZShldmVudDogYW55KSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBWZ1N0YXRlcy5WR19QQVVTRUQ7XG5cbiAgICAgICAgaWYgKHRoaXMudmdNYXN0ZXIpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5wbGF5QXRmZXJTeW5jKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zeW5jU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN0b3BCdWZmZXJDaGVjaygpO1xuICAgICAgICB0aGlzLnJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgb25UaW1lVXBkYXRlKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgbGV0IGVuZCA9IHRoaXMuYnVmZmVyZWQubGVuZ3RoIC0gMTtcblxuICAgICAgICB0aGlzLnRpbWUgPSB7XG4gICAgICAgICAgICBjdXJyZW50OiB0aGlzLmN1cnJlbnRUaW1lICogMTAwMCxcbiAgICAgICAgICAgIHRvdGFsOiB0aGlzLnRpbWUudG90YWwsXG4gICAgICAgICAgICBsZWZ0OiAodGhpcy5kdXJhdGlvbiAtIHRoaXMuY3VycmVudFRpbWUpICogMTAwMFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChlbmQgPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5idWZmZXIgPSB7IGVuZDogdGhpcy5idWZmZXJlZC5lbmQoZW5kKSAqIDEwMDAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgb25Qcm9ncmVzcyhldmVudDogYW55KSB7XG4gICAgICAgIGxldCBlbmQgPSB0aGlzLmJ1ZmZlcmVkLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgaWYgKGVuZCA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlciA9IHsgZW5kOiB0aGlzLmJ1ZmZlcmVkLmVuZChlbmQpICogMTAwMCB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBvblZvbHVtZUNoYW5nZShldmVudDogYW55KSB7XG4gICAgICAgIC8vIFRPRE86IFNhdmUgdG8gbG9jYWxzdG9yYWdlIHRoZSBjdXJyZW50IHZvbHVtZVxuICAgICAgICB0aGlzLnJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgb25FcnJvcihldmVudDogYW55KSB7XG4gICAgICAgIC8vIFRPRE86IEhhbmRsZSBlcnJvciBtZXNzYWdlc1xuICAgICAgICB0aGlzLnJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjM4MjgyNDEvNzc5NTI5XG4gICAgYnVmZmVyQ2hlY2soKSB7XG4gICAgICAgIGNvbnN0IG9mZnNldCA9IDEgLyB0aGlzLmNoZWNrSW50ZXJ2YWw7XG4gICAgICAgIHRoaXMuY3VycmVudFBsYXlQb3MgPSB0aGlzLmN1cnJlbnRUaW1lO1xuXG4gICAgICAgIGlmICghdGhpcy5pc0J1ZmZlckRldGVjdGVkICYmIHRoaXMuY3VycmVudFBsYXlQb3MgPCAodGhpcy5sYXN0UGxheVBvcyArIG9mZnNldCkpIHtcbiAgICAgICAgICAgIHRoaXMuaXNCdWZmZXJEZXRlY3RlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pc0J1ZmZlckRldGVjdGVkICYmIHRoaXMuY3VycmVudFBsYXlQb3MgPiAodGhpcy5sYXN0UGxheVBvcyArIG9mZnNldCkpIHtcbiAgICAgICAgICAgIHRoaXMuaXNCdWZmZXJEZXRlY3RlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHJldmVudCBjYWxscyB0byBidWZmZXJDaGVjayBhZnRlciBuZ09uRGVzdHJveSBoYXZlIGJlZW4gY2FsbGVkXG4gICAgICAgIGlmICghdGhpcy5idWZmZXJEZXRlY3RlZC5jbG9zZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyRGV0ZWN0ZWQubmV4dCh0aGlzLmlzQnVmZmVyRGV0ZWN0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sYXN0UGxheVBvcyA9IHRoaXMuY3VycmVudFBsYXlQb3M7XG4gICAgfVxuXG4gICAgc3RhcnRCdWZmZXJDaGVjaygpIHtcbiAgICAgICAgdGhpcy5jaGVja0J1ZmZlclN1YnNjcmlwdGlvbiA9IFRpbWVyT2JzZXJ2YWJsZS5jcmVhdGUoMCwgdGhpcy5jaGVja0ludGVydmFsKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5idWZmZXJDaGVjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0b3BCdWZmZXJDaGVjaygpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tCdWZmZXJTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tCdWZmZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNCdWZmZXJEZXRlY3RlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuYnVmZmVyRGV0ZWN0ZWQubmV4dCh0aGlzLmlzQnVmZmVyRGV0ZWN0ZWQpO1xuICAgIH1cblxuICAgIHNlZWtUaW1lKHZhbHVlOm51bWJlciwgYnlQZXJjZW50OmJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBsZXQgc2Vjb25kOm51bWJlcjtcbiAgICAgICAgbGV0IGR1cmF0aW9uOm51bWJlciA9IHRoaXMuZHVyYXRpb247XG5cbiAgICAgICAgaWYgKGJ5UGVyY2VudCkge1xuICAgICAgICAgICAgc2Vjb25kID0gdmFsdWUgKiBkdXJhdGlvbiAvIDEwMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNlY29uZCA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IHNlY29uZDtcbiAgICB9XG5cbiAgICBhZGRUZXh0VHJhY2sodHlwZTpzdHJpbmcsIGxhYmVsPzpzdHJpbmcsIGxhbmd1YWdlPzpzdHJpbmcsIG1vZGU/OidkaXNhYmxlZCcgfCAnaGlkZGVuJyB8ICdzaG93aW5nJyk6IFRleHRUcmFjayB7XG4gICAgICAgIGNvbnN0IG5ld1RyYWNrOlRleHRUcmFjayA9IHRoaXMudmdNZWRpYS5hZGRUZXh0VHJhY2sodHlwZSwgbGFiZWwsIGxhbmd1YWdlKTtcblxuICAgICAgICBpZiAobW9kZSkge1xuICAgICAgICAgICAgbmV3VHJhY2subW9kZSA9IG1vZGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld1RyYWNrO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnZnTWVkaWEuc3JjID0gJyc7XG4gICAgICAgIHRoaXMubXV0YXRpb25PYnMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5jYW5QbGF5T2JzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMuY2FuUGxheVRocm91Z2hPYnMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5sb2FkZWRNZXRhZGF0YU9icy51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLndhaXRpbmdPYnMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5wcm9ncmVzc09icy51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLmVuZGVkT2JzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMucGxheWluZ09icy51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLnBsYXlPYnMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5wYXVzZU9icy51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLnRpbWVVcGRhdGVPYnMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy52b2x1bWVDaGFuZ2VPYnMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5lcnJvck9icy51bnN1YnNjcmliZSgpO1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tCdWZmZXJTdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tCdWZmZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuc3luY1N1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhpcy5zeW5jU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuYnVmZmVyRGV0ZWN0ZWQuY29tcGxldGUoKTtcbiAgICAgICAgdGhpcy5idWZmZXJEZXRlY3RlZC51bnN1YnNjcmliZSgpO1xuXG4gICAgICAgIHRoaXMuYXBpLnVucmVnaXN0ZXJNZWRpYSh0aGlzKTtcbiAgICB9XG59XG4iXX0=

/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var VgEvents = (function () {
    function VgEvents() {
    }
    VgEvents.VG_ABORT = 'abort';
    VgEvents.VG_CAN_PLAY = 'canplay';
    VgEvents.VG_CAN_PLAY_THROUGH = 'canplaythrough';
    VgEvents.VG_DURATION_CHANGE = 'durationchange';
    VgEvents.VG_EMPTIED = 'emptied';
    VgEvents.VG_ENCRYPTED = 'encrypted';
    VgEvents.VG_ENDED = 'ended';
    VgEvents.VG_ERROR = 'error';
    VgEvents.VG_LOADED_DATA = 'loadeddata';
    VgEvents.VG_LOADED_METADATA = 'loadedmetadata';
    VgEvents.VG_LOAD_START = 'loadstart';
    VgEvents.VG_PAUSE = 'pause';
    VgEvents.VG_PLAY = 'play';
    VgEvents.VG_PLAYING = 'playing';
    VgEvents.VG_PROGRESS = 'progress';
    VgEvents.VG_RATE_CHANGE = 'ratechange';
    VgEvents.VG_SEEK = 'seek';
    VgEvents.VG_SEEKED = 'seeked';
    VgEvents.VG_SEEKING = 'seeking';
    VgEvents.VG_STALLED = 'stalled';
    VgEvents.VG_SUSPEND = 'suspend';
    VgEvents.VG_TIME_UPDATE = 'timeupdate';
    VgEvents.VG_VOLUME_CHANGE = 'volumechange';
    VgEvents.VG_WAITING = 'waiting';
    VgEvents.VG_LOAD = 'load';
    VgEvents.VG_ENTER = 'enter';
    VgEvents.VG_EXIT = 'exit';
    VgEvents.VG_START_ADS = 'startads';
    VgEvents.VG_END_ADS = 'endads';
    VgEvents.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    VgEvents.ctorParameters = function () { return []; };
    return VgEvents;
}());
exports.VgEvents = VgEvents;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctZXZlbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctZXZlbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDOzs7O3dCQUlYLE9BQU87MkJBQ0osU0FBUzttQ0FDRCxnQkFBZ0I7a0NBQ2pCLGdCQUFnQjswQkFDeEIsU0FBUzs0QkFDUCxXQUFXO3dCQUNmLE9BQU87d0JBQ1AsT0FBTzs4QkFDRCxZQUFZO2tDQUNSLGdCQUFnQjs2QkFDckIsV0FBVzt3QkFDaEIsT0FBTzt1QkFDUixNQUFNOzBCQUNILFNBQVM7MkJBQ1IsVUFBVTs4QkFDUCxZQUFZO3VCQUNuQixNQUFNO3lCQUNKLFFBQVE7MEJBQ1AsU0FBUzswQkFDVCxTQUFTOzBCQUNULFNBQVM7OEJBQ0wsWUFBWTtnQ0FDVixjQUFjOzBCQUNwQixTQUFTO3VCQUVaLE1BQU07d0JBQ0wsT0FBTzt1QkFDUixNQUFNOzRCQUVELFVBQVU7MEJBQ1osUUFBUTs7Z0JBaEN2QyxpQkFBVTs7OzttQkFGWDs7QUFHYSw0QkFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWZ0V2ZW50cyB7XG4gICAgc3RhdGljIFZHX0FCT1JUOiBzdHJpbmcgPSAnYWJvcnQnO1xuICAgIHN0YXRpYyBWR19DQU5fUExBWTogc3RyaW5nID0gJ2NhbnBsYXknO1xuICAgIHN0YXRpYyBWR19DQU5fUExBWV9USFJPVUdIOiBzdHJpbmcgPSAnY2FucGxheXRocm91Z2gnO1xuICAgIHN0YXRpYyBWR19EVVJBVElPTl9DSEFOR0U6IHN0cmluZyA9ICdkdXJhdGlvbmNoYW5nZSc7XG4gICAgc3RhdGljIFZHX0VNUFRJRUQ6IHN0cmluZyA9ICdlbXB0aWVkJztcbiAgICBzdGF0aWMgVkdfRU5DUllQVEVEOiBzdHJpbmcgPSAnZW5jcnlwdGVkJztcbiAgICBzdGF0aWMgVkdfRU5ERUQ6IHN0cmluZyA9ICdlbmRlZCc7XG4gICAgc3RhdGljIFZHX0VSUk9SOiBzdHJpbmcgPSAnZXJyb3InO1xuICAgIHN0YXRpYyBWR19MT0FERURfREFUQTogc3RyaW5nID0gJ2xvYWRlZGRhdGEnO1xuICAgIHN0YXRpYyBWR19MT0FERURfTUVUQURBVEE6IHN0cmluZyA9ICdsb2FkZWRtZXRhZGF0YSc7XG4gICAgc3RhdGljIFZHX0xPQURfU1RBUlQ6IHN0cmluZyA9ICdsb2Fkc3RhcnQnO1xuICAgIHN0YXRpYyBWR19QQVVTRTogc3RyaW5nID0gJ3BhdXNlJztcbiAgICBzdGF0aWMgVkdfUExBWTogc3RyaW5nID0gJ3BsYXknO1xuICAgIHN0YXRpYyBWR19QTEFZSU5HOiBzdHJpbmcgPSAncGxheWluZyc7XG4gICAgc3RhdGljIFZHX1BST0dSRVNTOiBzdHJpbmcgPSAncHJvZ3Jlc3MnO1xuICAgIHN0YXRpYyBWR19SQVRFX0NIQU5HRTogc3RyaW5nID0gJ3JhdGVjaGFuZ2UnO1xuICAgIHN0YXRpYyBWR19TRUVLOiBzdHJpbmcgPSAnc2Vlayc7XG4gICAgc3RhdGljIFZHX1NFRUtFRDogc3RyaW5nID0gJ3NlZWtlZCc7XG4gICAgc3RhdGljIFZHX1NFRUtJTkc6IHN0cmluZyA9ICdzZWVraW5nJztcbiAgICBzdGF0aWMgVkdfU1RBTExFRDogc3RyaW5nID0gJ3N0YWxsZWQnO1xuICAgIHN0YXRpYyBWR19TVVNQRU5EOiBzdHJpbmcgPSAnc3VzcGVuZCc7XG4gICAgc3RhdGljIFZHX1RJTUVfVVBEQVRFOiBzdHJpbmcgPSAndGltZXVwZGF0ZSc7XG4gICAgc3RhdGljIFZHX1ZPTFVNRV9DSEFOR0U6IHN0cmluZyA9ICd2b2x1bWVjaGFuZ2UnO1xuICAgIHN0YXRpYyBWR19XQUlUSU5HOiBzdHJpbmcgPSAnd2FpdGluZyc7XG4gICAgXG4gICAgc3RhdGljIFZHX0xPQUQ6IHN0cmluZyA9ICdsb2FkJztcbiAgICBzdGF0aWMgVkdfRU5URVI6IHN0cmluZyA9ICdlbnRlcic7XG4gICAgc3RhdGljIFZHX0VYSVQ6IHN0cmluZyA9ICdleGl0JztcblxuICAgIHN0YXRpYyBWR19TVEFSVF9BRFM6IHN0cmluZyA9ICdzdGFydGFkcyc7XG4gICAgc3RhdGljIFZHX0VORF9BRFM6IHN0cmluZyA9ICdlbmRhZHMnO1xufVxuIl19

/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var vg_api_1 = __webpack_require__(337);
var vg_fullscreen_api_1 = __webpack_require__(341);
var vg_utils_1 = __webpack_require__(342);
var vg_media_1 = __webpack_require__(343);
var vg_controls_hidden_1 = __webpack_require__(339);
var VgPlayer = (function () {
    function VgPlayer(ref, api, fsAPI, controlsHidden) {
        this.api = api;
        this.fsAPI = fsAPI;
        this.controlsHidden = controlsHidden;
        this.isFullscreen = false;
        this.isNativeFullscreen = false;
        this.areControlsHidden = false;
        this.onPlayerReady = new core_1.EventEmitter();
        this.onMediaReady = new core_1.EventEmitter();
        this.subscriptions = [];
        this.elem = ref.nativeElement;
        this.api.registerElement(this.elem);
    }
    VgPlayer.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.medias.toArray().forEach(function (media) {
            _this.api.registerMedia(media);
        });
        this.fsAPI.init(this.elem, this.medias);
        this.subscriptions.push(this.fsAPI.onChangeFullscreen.subscribe(this.onChangeFullscreen.bind(this)));
        this.subscriptions.push(this.controlsHidden.isHidden.subscribe(this.onHideControls.bind(this)));
        this.api.onPlayerReady(this.fsAPI);
        this.onPlayerReady.next(this.api);
    };
    VgPlayer.prototype.onChangeFullscreen = function (fsState) {
        if (!this.fsAPI.nativeFullscreen) {
            this.isFullscreen = fsState;
            this.zIndex = fsState ? vg_utils_1.VgUtils.getZIndex().toString() : 'auto';
        }
        else {
            this.isNativeFullscreen = fsState;
        }
    };
    VgPlayer.prototype.onHideControls = function (hidden) {
        this.areControlsHidden = hidden;
    };
    VgPlayer.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgPlayer.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-player',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "<ng-content></ng-content>",
                    styles: ["\n        vg-player {\n            font-family: 'videogular';\n            position: relative;\n            display: flex;\n            width: 100%;\n            height: 100%;\n            overflow: hidden;\n            background-color: black;\n        }\n\n        vg-player.fullscreen {\n            position: fixed;\n            left: 0;\n            top: 0;\n        }\n\n        vg-player.native-fullscreen.controls-hidden {\n            cursor: none;\n        }\n    "],
                    providers: [vg_api_1.VgAPI, vg_fullscreen_api_1.VgFullscreenAPI, vg_controls_hidden_1.VgControlsHidden]
                },] },
    ];
    /** @nocollapse */
    VgPlayer.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: vg_api_1.VgAPI, },
        { type: vg_fullscreen_api_1.VgFullscreenAPI, },
        { type: vg_controls_hidden_1.VgControlsHidden, },
    ]; };
    VgPlayer.propDecorators = {
        "isFullscreen": [{ type: core_1.HostBinding, args: ['class.fullscreen',] },],
        "isNativeFullscreen": [{ type: core_1.HostBinding, args: ['class.native-fullscreen',] },],
        "areControlsHidden": [{ type: core_1.HostBinding, args: ['class.controls-hidden',] },],
        "zIndex": [{ type: core_1.HostBinding, args: ['style.z-index',] },],
        "onPlayerReady": [{ type: core_1.Output },],
        "onMediaReady": [{ type: core_1.Output },],
        "medias": [{ type: core_1.ContentChildren, args: [vg_media_1.VgMedia,] },],
    };
    return VgPlayer;
}());
exports.VgPlayer = VgPlayer;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctcGxheWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctcGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBU3VCO0FBQ3ZCLDZDQUEyQztBQUMzQyxtRUFBZ0U7QUFDaEUsaURBQStDO0FBQy9DLGlEQUErQztBQUUvQyxxRUFBa0U7O0lBZ0Q5RCxrQkFBWSxHQUFlLEVBQVMsR0FBVSxFQUFTLEtBQXNCLEVBQVUsY0FBZ0M7UUFBbkYsUUFBRyxHQUFILEdBQUcsQ0FBTztRQUFTLFVBQUssR0FBTCxLQUFLLENBQWlCO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWtCOzRCQWhCOUQsS0FBSztrQ0FDUSxLQUFLO2lDQUNSLEtBQUs7NkJBSXJDLElBQUksbUJBQVksRUFBRTs0QkFHbkIsSUFBSSxtQkFBWSxFQUFFOzZCQUtwQixFQUFFO1FBRzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQztRQUU5QixJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDdkM7SUFFRCxxQ0FBa0IsR0FBbEI7UUFBQSxpQkFZQztRQVhHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSztZQUNoQyxLQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV4QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWhHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDckM7SUFFRCxxQ0FBa0IsR0FBbEIsVUFBbUIsT0FBZ0I7UUFDL0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQztZQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sR0FBRyxrQkFBTyxDQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsRUFBRSxHQUFHLE1BQU0sQ0FBQztTQUNuRTtRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLGtCQUFrQixHQUFHLE9BQU8sQ0FBQztTQUNyQztLQUNKO0lBRUQsaUNBQWMsR0FBZCxVQUFlLE1BQWU7UUFDMUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQztLQUNuQztJQUVELDhCQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQztLQUNwRDs7Z0JBakZKLGdCQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxNQUFNLEVBQUUsQ0FBRSw0ZEFvQlQsQ0FBRTtvQkFDSCxTQUFTLEVBQUUsQ0FBRSxjQUFLLEVBQUUsbUNBQWUsRUFBRSxxQ0FBZ0IsQ0FBRTtpQkFDMUQ7Ozs7Z0JBdkNHLGlCQUFVO2dCQU1MLGNBQUs7Z0JBQ0wsbUNBQWU7Z0JBSWYscUNBQWdCOzs7aUNBZ0NwQixrQkFBVyxTQUFDLGtCQUFrQjt1Q0FDOUIsa0JBQVcsU0FBQyx5QkFBeUI7c0NBQ3JDLGtCQUFXLFNBQUMsdUJBQXVCOzJCQUNuQyxrQkFBVyxTQUFDLGVBQWU7a0NBRTNCLGFBQU07aUNBR04sYUFBTTsyQkFHTixzQkFBZSxTQUFDLGtCQUFPOzttQkExRDVCOztBQTRDYSw0QkFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgT3V0cHV0LFxuICAgIENvbXBvbmVudCxcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgRWxlbWVudFJlZixcbiAgICBIb3N0QmluZGluZyxcbiAgICBRdWVyeUxpc3QsXG4gICAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgICBDb250ZW50Q2hpbGRyZW4sIFZpZXdFbmNhcHN1bGF0aW9uLCBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWZ0FQSSB9IGZyb20gJy4uL3NlcnZpY2VzL3ZnLWFwaSc7XG5pbXBvcnQgeyBWZ0Z1bGxzY3JlZW5BUEkgfSBmcm9tICcuLi9zZXJ2aWNlcy92Zy1mdWxsc2NyZWVuLWFwaSc7XG5pbXBvcnQgeyBWZ1V0aWxzIH0gZnJvbSAnLi4vc2VydmljZXMvdmctdXRpbHMnO1xuaW1wb3J0IHsgVmdNZWRpYSB9IGZyb20gJy4uL3ZnLW1lZGlhL3ZnLW1lZGlhJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IFZnQ29udHJvbHNIaWRkZW4gfSBmcm9tICcuLi9zZXJ2aWNlcy92Zy1jb250cm9scy1oaWRkZW4nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3ZnLXBsYXllcicsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICAgIHN0eWxlczogWyBgXG4gICAgICAgIHZnLXBsYXllciB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ3ZpZGVvZ3VsYXInO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICB9XG5cbiAgICAgICAgdmctcGxheWVyLmZ1bGxzY3JlZW4ge1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZnLXBsYXllci5uYXRpdmUtZnVsbHNjcmVlbi5jb250cm9scy1oaWRkZW4ge1xuICAgICAgICAgICAgY3Vyc29yOiBub25lO1xuICAgICAgICB9XG4gICAgYCBdLFxuICAgIHByb3ZpZGVyczogWyBWZ0FQSSwgVmdGdWxsc2NyZWVuQVBJLCBWZ0NvbnRyb2xzSGlkZGVuIF1cbn0pXG5leHBvcnQgY2xhc3MgVmdQbGF5ZXIgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xuICAgIGVsZW06IEhUTUxFbGVtZW50O1xuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5mdWxsc2NyZWVuJykgaXNGdWxsc2NyZWVuOiBib29sZWFuID0gZmFsc2U7XG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5uYXRpdmUtZnVsbHNjcmVlbicpIGlzTmF0aXZlRnVsbHNjcmVlbjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MuY29udHJvbHMtaGlkZGVuJykgYXJlQ29udHJvbHNIaWRkZW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLnotaW5kZXgnKSB6SW5kZXg6IHN0cmluZztcblxuICAgIEBPdXRwdXQoKVxuICAgIG9uUGxheWVyUmVhZHk6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgQE91dHB1dCgpXG4gICAgb25NZWRpYVJlYWR5OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBDb250ZW50Q2hpbGRyZW4oVmdNZWRpYSlcbiAgICBtZWRpYXM6IFF1ZXJ5TGlzdDxWZ01lZGlhPjtcblxuICAgIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihyZWY6IEVsZW1lbnRSZWYsIHB1YmxpYyBhcGk6IFZnQVBJLCBwdWJsaWMgZnNBUEk6IFZnRnVsbHNjcmVlbkFQSSwgcHJpdmF0ZSBjb250cm9sc0hpZGRlbjogVmdDb250cm9sc0hpZGRlbikge1xuICAgICAgICB0aGlzLmVsZW0gPSByZWYubmF0aXZlRWxlbWVudDtcblxuICAgICAgICB0aGlzLmFwaS5yZWdpc3RlckVsZW1lbnQodGhpcy5lbGVtKTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgICAgIHRoaXMubWVkaWFzLnRvQXJyYXkoKS5mb3JFYWNoKChtZWRpYSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hcGkucmVnaXN0ZXJNZWRpYShtZWRpYSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZnNBUEkuaW5pdCh0aGlzLmVsZW0sIHRoaXMubWVkaWFzKTtcblxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLmZzQVBJLm9uQ2hhbmdlRnVsbHNjcmVlbi5zdWJzY3JpYmUodGhpcy5vbkNoYW5nZUZ1bGxzY3JlZW4uYmluZCh0aGlzKSkpO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLmNvbnRyb2xzSGlkZGVuLmlzSGlkZGVuLnN1YnNjcmliZSh0aGlzLm9uSGlkZUNvbnRyb2xzLmJpbmQodGhpcykpKTtcblxuICAgICAgICB0aGlzLmFwaS5vblBsYXllclJlYWR5KHRoaXMuZnNBUEkpO1xuICAgICAgICB0aGlzLm9uUGxheWVyUmVhZHkubmV4dCh0aGlzLmFwaSk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2VGdWxsc2NyZWVuKGZzU3RhdGU6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKCF0aGlzLmZzQVBJLm5hdGl2ZUZ1bGxzY3JlZW4pIHtcbiAgICAgICAgICAgIHRoaXMuaXNGdWxsc2NyZWVuID0gZnNTdGF0ZTtcbiAgICAgICAgICAgIHRoaXMuekluZGV4ID0gZnNTdGF0ZSA/IFZnVXRpbHMuZ2V0WkluZGV4KCkudG9TdHJpbmcoKSA6ICdhdXRvJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXNOYXRpdmVGdWxsc2NyZWVuID0gZnNTdGF0ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uSGlkZUNvbnRyb2xzKGhpZGRlbjogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmFyZUNvbnRyb2xzSGlkZGVuID0gaGlkZGVuO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaChzID0+IHMudW5zdWJzY3JpYmUoKSk7XG4gICAgfVxufVxuIl19

/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var vg_events_1 = __webpack_require__(344);
var Observable_1 = __webpack_require__(6);
__webpack_require__(235);
var VgCuePoints = (function () {
    function VgCuePoints(ref) {
        this.ref = ref;
        this.onEnterCuePoint = new core_1.EventEmitter();
        this.onUpdateCuePoint = new core_1.EventEmitter();
        this.onExitCuePoint = new core_1.EventEmitter();
        this.onCompleteCuePoint = new core_1.EventEmitter();
        this.subscriptions = [];
        this.cuesSubscriptions = [];
        this.totalCues = 0;
    }
    VgCuePoints.prototype.ngOnInit = function () {
        var onLoad = Observable_1.Observable.fromEvent(this.ref.nativeElement, vg_events_1.VgEvents.VG_LOAD);
        this.subscriptions.push(onLoad.subscribe(this.onLoad.bind(this)));
    };
    VgCuePoints.prototype.onLoad = function (event) {
        var cues = event.target.track.cues;
        this.ref.nativeElement.cues = cues;
        this.updateCuePoints(cues);
    };
    VgCuePoints.prototype.updateCuePoints = function (cues) {
        this.cuesSubscriptions.forEach(function (s) { return s.unsubscribe(); });
        for (var i = 0, l = cues.length; i < l; i++) {
            var onEnter = Observable_1.Observable.fromEvent(cues[i], vg_events_1.VgEvents.VG_ENTER);
            this.cuesSubscriptions.push(onEnter.subscribe(this.onEnter.bind(this)));
            var onExit = Observable_1.Observable.fromEvent(cues[i], vg_events_1.VgEvents.VG_EXIT);
            this.cuesSubscriptions.push(onExit.subscribe(this.onExit.bind(this)));
        }
    };
    VgCuePoints.prototype.onEnter = function (event) {
        this.onEnterCuePoint.next(event.target);
    };
    VgCuePoints.prototype.onExit = function (event) {
        this.onExitCuePoint.next(event.target);
    };
    VgCuePoints.prototype.ngDoCheck = function () {
        if (this.ref.nativeElement.cues) {
            var changes = this.totalCues !== this.ref.nativeElement.track.cues.length;
            if (changes) {
                this.totalCues = this.ref.nativeElement.track.cues.length;
                this.ref.nativeElement.cues = this.ref.nativeElement.track.cues;
                this.updateCuePoints(this.ref.nativeElement.track.cues);
            }
        }
    };
    VgCuePoints.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgCuePoints.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[vgCuePoints]'
                },] },
    ];
    /** @nocollapse */
    VgCuePoints.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    VgCuePoints.propDecorators = {
        "onEnterCuePoint": [{ type: core_1.Output, args: ['onEnterCuePoint',] },],
        "onUpdateCuePoint": [{ type: core_1.Output, args: ['onUpdateCuePoint',] },],
        "onExitCuePoint": [{ type: core_1.Output, args: ['onExitCuePoint',] },],
        "onCompleteCuePoint": [{ type: core_1.Output, args: ['onCompleteCuePoint',] },],
    };
    return VgCuePoints;
}());
exports.VgCuePoints = VgCuePoints;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctY3VlLXBvaW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZnLWN1ZS1wb2ludHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBK0Y7QUFDL0YsaURBQStDO0FBQy9DLDhDQUE2QztBQUM3Qyx5Q0FBdUM7O0lBaUJuQyxxQkFBbUIsR0FBZTtRQUFmLFFBQUcsR0FBSCxHQUFHLENBQVk7K0JBVjhCLElBQUksbUJBQVksRUFBRTtnQ0FDaEIsSUFBSSxtQkFBWSxFQUFFOzhCQUN0QixJQUFJLG1CQUFZLEVBQUU7a0NBQ1YsSUFBSSxtQkFBWSxFQUFFOzZCQUV4RCxFQUFFO2lDQUNFLEVBQUU7eUJBRTFCLENBQUM7S0FHWjtJQUVELDhCQUFRLEdBQVI7UUFDSSxJQUFJLE1BQU0sR0FBRyx1QkFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxvQkFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3JFO0lBRUQsNEJBQU0sR0FBTixVQUFPLEtBQVU7UUFDYixJQUFJLElBQUksR0FBbUIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO1FBRW5ELElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFFbkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM5QjtJQUVELHFDQUFlLEdBQWYsVUFBZ0IsSUFBb0I7UUFDaEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQztRQUVyRCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzFDLElBQUksT0FBTyxHQUFHLHVCQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBRSxDQUFDLENBQUUsRUFBRSxvQkFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2pFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFeEUsSUFBSSxNQUFNLEdBQUcsdUJBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFFLENBQUMsQ0FBRSxFQUFFLG9CQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDL0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN6RTtLQUNKO0lBRUQsNkJBQU8sR0FBUCxVQUFRLEtBQVU7UUFDZCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDM0M7SUFFRCw0QkFBTSxHQUFOLFVBQU8sS0FBVTtRQUNiLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUMxQztJQUVELCtCQUFTLEdBQVQ7UUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzlCLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFFNUUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDVixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUMxRCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDaEUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDM0Q7U0FDSjtLQUNKO0lBRUQsaUNBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDO0tBQ3BEOztnQkFoRUosZ0JBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsZUFBZTtpQkFDNUI7Ozs7Z0JBUm1CLGlCQUFVOzs7b0NBVXpCLGFBQU0sU0FBQyxpQkFBaUI7cUNBQ3hCLGFBQU0sU0FBQyxrQkFBa0I7bUNBQ3pCLGFBQU0sU0FBQyxnQkFBZ0I7dUNBQ3ZCLGFBQU0sU0FBQyxvQkFBb0I7O3NCQWJoQzs7QUFTYSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWZ0V2ZW50cyB9IGZyb20gJy4uL2V2ZW50cy92Zy1ldmVudHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvZnJvbUV2ZW50JztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbdmdDdWVQb2ludHNdJ1xufSlcbmV4cG9ydCBjbGFzcyBWZ0N1ZVBvaW50cyBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBAT3V0cHV0KCdvbkVudGVyQ3VlUG9pbnQnKSBvbkVudGVyQ3VlUG9pbnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIEBPdXRwdXQoJ29uVXBkYXRlQ3VlUG9pbnQnKSBvblVwZGF0ZUN1ZVBvaW50OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCdvbkV4aXRDdWVQb2ludCcpIG9uRXhpdEN1ZVBvaW50OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCdvbkNvbXBsZXRlQ3VlUG9pbnQnKSBvbkNvbXBsZXRlQ3VlUG9pbnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgICBjdWVzU3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICAgIHRvdGFsQ3VlcyA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVmOiBFbGVtZW50UmVmKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGxldCBvbkxvYWQgPSBPYnNlcnZhYmxlLmZyb21FdmVudCh0aGlzLnJlZi5uYXRpdmVFbGVtZW50LCBWZ0V2ZW50cy5WR19MT0FEKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2gob25Mb2FkLnN1YnNjcmliZSh0aGlzLm9uTG9hZC5iaW5kKHRoaXMpKSk7XG4gICAgfVxuXG4gICAgb25Mb2FkKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgbGV0IGN1ZXM6IFRleHRUcmFja0N1ZVtdID0gZXZlbnQudGFyZ2V0LnRyYWNrLmN1ZXM7XG5cbiAgICAgICAgdGhpcy5yZWYubmF0aXZlRWxlbWVudC5jdWVzID0gY3VlcztcblxuICAgICAgICB0aGlzLnVwZGF0ZUN1ZVBvaW50cyhjdWVzKTtcbiAgICB9XG5cbiAgICB1cGRhdGVDdWVQb2ludHMoY3VlczogVGV4dFRyYWNrQ3VlW10pIHtcbiAgICAgICAgdGhpcy5jdWVzU3Vic2NyaXB0aW9ucy5mb3JFYWNoKHMgPT4gcy51bnN1YnNjcmliZSgpKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IGN1ZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgb25FbnRlciA9IE9ic2VydmFibGUuZnJvbUV2ZW50KGN1ZXNbIGkgXSwgVmdFdmVudHMuVkdfRU5URVIpO1xuICAgICAgICAgICAgdGhpcy5jdWVzU3Vic2NyaXB0aW9ucy5wdXNoKG9uRW50ZXIuc3Vic2NyaWJlKHRoaXMub25FbnRlci5iaW5kKHRoaXMpKSk7XG5cbiAgICAgICAgICAgIGxldCBvbkV4aXQgPSBPYnNlcnZhYmxlLmZyb21FdmVudChjdWVzWyBpIF0sIFZnRXZlbnRzLlZHX0VYSVQpO1xuICAgICAgICAgICAgdGhpcy5jdWVzU3Vic2NyaXB0aW9ucy5wdXNoKG9uRXhpdC5zdWJzY3JpYmUodGhpcy5vbkV4aXQuYmluZCh0aGlzKSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25FbnRlcihldmVudDogYW55KSB7XG4gICAgICAgIHRoaXMub25FbnRlckN1ZVBvaW50Lm5leHQoZXZlbnQudGFyZ2V0KTtcbiAgICB9XG5cbiAgICBvbkV4aXQoZXZlbnQ6IGFueSkge1xuICAgICAgICB0aGlzLm9uRXhpdEN1ZVBvaW50Lm5leHQoZXZlbnQudGFyZ2V0KTtcbiAgICB9XG5cbiAgICBuZ0RvQ2hlY2soKSB7XG4gICAgICAgIGlmICh0aGlzLnJlZi5uYXRpdmVFbGVtZW50LmN1ZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoYW5nZXMgPSB0aGlzLnRvdGFsQ3VlcyAhPT0gdGhpcy5yZWYubmF0aXZlRWxlbWVudC50cmFjay5jdWVzLmxlbmd0aDtcblxuICAgICAgICAgICAgaWYgKGNoYW5nZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRvdGFsQ3VlcyA9IHRoaXMucmVmLm5hdGl2ZUVsZW1lbnQudHJhY2suY3Vlcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWYubmF0aXZlRWxlbWVudC5jdWVzID0gdGhpcy5yZWYubmF0aXZlRWxlbWVudC50cmFjay5jdWVzO1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ3VlUG9pbnRzKHRoaXMucmVmLm5hdGl2ZUVsZW1lbnQudHJhY2suY3Vlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2gocyA9PiBzLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cbn1cbiJdfQ==

/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(359));
// CustomEvent polyfill for IE9/10/11
(function () {
    if (typeof window === "undefined" || typeof window['CustomEvent'] === "function")
        return false;
    function CustomEvent(event, params) {
        params = params || { bubbles: false, cancelable: false, detail: undefined };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }
    CustomEvent.prototype = window['Event'].prototype;
    window['CustomEvent'] = CustomEvent;
})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxQ0FBZ0M7O0FBR2hDLENBQUM7SUFFRyxFQUFFLENBQUMsQ0FBRSxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksT0FBTyxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQUssVUFBVyxDQUFDO1FBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUVqRyxxQkFBdUIsS0FBSyxFQUFFLE1BQU07UUFDaEMsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUM7UUFDNUUsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBRSxhQUFhLENBQUUsQ0FBQztRQUNoRCxHQUFHLENBQUMsZUFBZSxDQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBRSxDQUFDO1FBQy9FLE1BQU0sQ0FBQyxHQUFHLENBQUM7S0FDZDtJQUVELFdBQVcsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUVsRCxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsV0FBVyxDQUFDO0NBQ3ZDLENBQUMsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi9zcmMvY29yZS9jb3JlJztcblxuLy8gQ3VzdG9tRXZlbnQgcG9seWZpbGwgZm9yIElFOS8xMC8xMVxuKGZ1bmN0aW9uICgpIHtcblxuICAgIGlmICggdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIiB8fCB0eXBlb2Ygd2luZG93WydDdXN0b21FdmVudCddID09PSBcImZ1bmN0aW9uXCIgKSByZXR1cm4gZmFsc2U7XG5cbiAgICBmdW5jdGlvbiBDdXN0b21FdmVudCAoIGV2ZW50LCBwYXJhbXMgKSB7XG4gICAgICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7IGJ1YmJsZXM6IGZhbHNlLCBjYW5jZWxhYmxlOiBmYWxzZSwgZGV0YWlsOiB1bmRlZmluZWQgfTtcbiAgICAgICAgdmFyIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCAnQ3VzdG9tRXZlbnQnICk7XG4gICAgICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoIGV2ZW50LCBwYXJhbXMuYnViYmxlcywgcGFyYW1zLmNhbmNlbGFibGUsIHBhcmFtcy5kZXRhaWwgKTtcbiAgICAgICAgcmV0dXJuIGV2dDtcbiAgICB9XG5cbiAgICBDdXN0b21FdmVudC5wcm90b3R5cGUgPSB3aW5kb3dbJ0V2ZW50J10ucHJvdG90eXBlO1xuXG4gICAgd2luZG93WydDdXN0b21FdmVudCddID0gQ3VzdG9tRXZlbnQ7XG59KSgpO1xuIl19

/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var vg_player_1 = __webpack_require__(347);
var vg_media_1 = __webpack_require__(343);
var vg_cue_points_1 = __webpack_require__(348);
var vg_api_1 = __webpack_require__(337);
var vg_fullscreen_api_1 = __webpack_require__(341);
var vg_utils_1 = __webpack_require__(342);
var vg_controls_hidden_1 = __webpack_require__(339);
// components
__export(__webpack_require__(347));
__export(__webpack_require__(343));
__export(__webpack_require__(348));
// services
__export(__webpack_require__(337));
__export(__webpack_require__(341));
__export(__webpack_require__(342));
__export(__webpack_require__(339));
// types
__export(__webpack_require__(344));
__export(__webpack_require__(338));
/**
 * @internal
 */
function coreDirectives() {
    return [
        vg_player_1.VgPlayer, vg_media_1.VgMedia, vg_cue_points_1.VgCuePoints
    ];
}
exports.coreDirectives = coreDirectives;
function coreServices() {
    return [
        vg_api_1.VgAPI, vg_fullscreen_api_1.VgFullscreenAPI, vg_utils_1.VgUtils, vg_controls_hidden_1.VgControlsHidden
    ];
}
exports.coreServices = coreServices;
var VgCoreModule = (function () {
    function VgCoreModule() {
    }
    VgCoreModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: coreDirectives(),
                    exports: coreDirectives(),
                    providers: coreServices()
                },] },
    ];
    /** @nocollapse */
    VgCoreModule.ctorParameters = function () { return []; };
    return VgCoreModule;
}());
exports.VgCoreModule = VgCoreModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzQ0FBbUQ7QUFDbkQsbURBQWlEO0FBQ2pELGdEQUE4QztBQUM5QywrREFBNEQ7QUFDNUQsNENBQTBDO0FBQzFDLGtFQUErRDtBQUMvRCxnREFBOEM7QUFDOUMsb0VBQWlFO0FBR2pFLGFBQWE7QUFDYiwyQ0FBc0M7QUFDdEMseUNBQW9DO0FBQ3BDLG1EQUE4QztBQUU5QyxXQUFXO0FBQ1gsdUNBQWtDO0FBQ2xDLGtEQUE2QztBQUM3Qyx5Q0FBb0M7QUFDcEMsbURBQThDO0FBRTlDLFFBQVE7QUFDUix3Q0FBbUM7QUFDbkMsd0NBQW1DOzs7O0FBS25DO0lBQ0ksTUFBTSxDQUFDO1FBQ0gsb0JBQVEsRUFBRSxrQkFBTyxFQUFFLDJCQUFXO0tBQ2pDLENBQUM7Q0FDTDtBQUpELHdDQUlDO0FBRUQ7SUFDSSxNQUFNLENBQUM7UUFDSCxjQUFLLEVBQUUsbUNBQWUsRUFBRSxrQkFBTyxFQUFFLHFDQUFnQjtLQUNwRCxDQUFDO0NBQ0w7QUFKRCxvQ0FJQzs7Ozs7Z0JBRUEsZUFBUSxTQUFDO29CQUNOLFlBQVksRUFBRSxjQUFjLEVBQUU7b0JBQzlCLE9BQU8sRUFBRSxjQUFjLEVBQUU7b0JBQ3pCLFNBQVMsRUFBRSxZQUFZLEVBQUU7aUJBQzVCOzs7O3VCQTVDRDs7QUE2Q2Esb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZnUGxheWVyIH0gZnJvbSAnLi92Zy1wbGF5ZXIvdmctcGxheWVyJztcbmltcG9ydCB7IFZnTWVkaWEgfSBmcm9tICcuL3ZnLW1lZGlhL3ZnLW1lZGlhJztcbmltcG9ydCB7IFZnQ3VlUG9pbnRzIH0gZnJvbSAnLi92Zy1jdWUtcG9pbnRzL3ZnLWN1ZS1wb2ludHMnO1xuaW1wb3J0IHsgVmdBUEkgfSBmcm9tICcuL3NlcnZpY2VzL3ZnLWFwaSc7XG5pbXBvcnQgeyBWZ0Z1bGxzY3JlZW5BUEkgfSBmcm9tICcuL3NlcnZpY2VzL3ZnLWZ1bGxzY3JlZW4tYXBpJztcbmltcG9ydCB7IFZnVXRpbHMgfSBmcm9tICcuL3NlcnZpY2VzL3ZnLXV0aWxzJztcbmltcG9ydCB7IFZnQ29udHJvbHNIaWRkZW4gfSBmcm9tICcuL3NlcnZpY2VzL3ZnLWNvbnRyb2xzLWhpZGRlbic7XG5cblxuLy8gY29tcG9uZW50c1xuZXhwb3J0ICogZnJvbSAnLi92Zy1wbGF5ZXIvdmctcGxheWVyJztcbmV4cG9ydCAqIGZyb20gJy4vdmctbWVkaWEvdmctbWVkaWEnO1xuZXhwb3J0ICogZnJvbSAnLi92Zy1jdWUtcG9pbnRzL3ZnLWN1ZS1wb2ludHMnO1xuXG4vLyBzZXJ2aWNlc1xuZXhwb3J0ICogZnJvbSAnLi9zZXJ2aWNlcy92Zy1hcGknO1xuZXhwb3J0ICogZnJvbSAnLi9zZXJ2aWNlcy92Zy1mdWxsc2NyZWVuLWFwaSc7XG5leHBvcnQgKiBmcm9tICcuL3NlcnZpY2VzL3ZnLXV0aWxzJztcbmV4cG9ydCAqIGZyb20gJy4vc2VydmljZXMvdmctY29udHJvbHMtaGlkZGVuJztcblxuLy8gdHlwZXNcbmV4cG9ydCAqIGZyb20gJy4vZXZlbnRzL3ZnLWV2ZW50cyc7XG5leHBvcnQgKiBmcm9tICcuL3N0YXRlcy92Zy1zdGF0ZXMnO1xuXG4vKipcbiAqIEBpbnRlcm5hbFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29yZURpcmVjdGl2ZXMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgVmdQbGF5ZXIsIFZnTWVkaWEsIFZnQ3VlUG9pbnRzXG4gICAgXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvcmVTZXJ2aWNlcygpOiBQcm92aWRlcltdIHtcbiAgICByZXR1cm4gW1xuICAgICAgICBWZ0FQSSwgVmdGdWxsc2NyZWVuQVBJLCBWZ1V0aWxzLCBWZ0NvbnRyb2xzSGlkZGVuXG4gICAgXTtcbn1cblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IGNvcmVEaXJlY3RpdmVzKCksXG4gICAgZXhwb3J0czogY29yZURpcmVjdGl2ZXMoKSxcbiAgICBwcm92aWRlcnM6IGNvcmVTZXJ2aWNlcygpXG59KVxuZXhwb3J0IGNsYXNzIFZnQ29yZU1vZHVsZSB7XG59XG4iXX0=

/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var isNumeric_1 = __webpack_require__(361);
var Observable_1 = __webpack_require__(6);
var async_1 = __webpack_require__(362);
var isScheduler_1 = __webpack_require__(117);
var isDate_1 = __webpack_require__(367);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @extends {Ignored}
 * @hide true
 */
var TimerObservable = (function (_super) {
    __extends(TimerObservable, _super);
    function TimerObservable(dueTime, period, scheduler) {
        if (dueTime === void 0) { dueTime = 0; }
        _super.call(this);
        this.period = -1;
        this.dueTime = 0;
        if (isNumeric_1.isNumeric(period)) {
            this.period = Number(period) < 1 && 1 || Number(period);
        }
        else if (isScheduler_1.isScheduler(period)) {
            scheduler = period;
        }
        if (!isScheduler_1.isScheduler(scheduler)) {
            scheduler = async_1.async;
        }
        this.scheduler = scheduler;
        this.dueTime = isDate_1.isDate(dueTime) ?
            (+dueTime - this.scheduler.now()) :
            dueTime;
    }
    /**
     * Creates an Observable that starts emitting after an `initialDelay` and
     * emits ever increasing numbers after each `period` of time thereafter.
     *
     * <span class="informal">Its like {@link interval}, but you can specify when
     * should the emissions start.</span>
     *
     * <img src="./img/timer.png" width="100%">
     *
     * `timer` returns an Observable that emits an infinite sequence of ascending
     * integers, with a constant interval of time, `period` of your choosing
     * between those emissions. The first emission happens after the specified
     * `initialDelay`. The initial delay may be a {@link Date}. By default, this
     * operator uses the `async` IScheduler to provide a notion of time, but you
     * may pass any IScheduler to it. If `period` is not specified, the output
     * Observable emits only one value, `0`. Otherwise, it emits an infinite
     * sequence.
     *
     * @example <caption>Emits ascending numbers, one every second (1000ms), starting after 3 seconds</caption>
     * var numbers = Rx.Observable.timer(3000, 1000);
     * numbers.subscribe(x => console.log(x));
     *
     * @example <caption>Emits one number after five seconds</caption>
     * var numbers = Rx.Observable.timer(5000);
     * numbers.subscribe(x => console.log(x));
     *
     * @see {@link interval}
     * @see {@link delay}
     *
     * @param {number|Date} initialDelay The initial delay time to wait before
     * emitting the first value of `0`.
     * @param {number} [period] The period of time between emissions of the
     * subsequent numbers.
     * @param {Scheduler} [scheduler=async] The IScheduler to use for scheduling
     * the emission of values, and providing a notion of "time".
     * @return {Observable} An Observable that emits a `0` after the
     * `initialDelay` and ever increasing numbers after each `period` of time
     * thereafter.
     * @static true
     * @name timer
     * @owner Observable
     */
    TimerObservable.create = function (initialDelay, period, scheduler) {
        if (initialDelay === void 0) { initialDelay = 0; }
        return new TimerObservable(initialDelay, period, scheduler);
    };
    TimerObservable.dispatch = function (state) {
        var index = state.index, period = state.period, subscriber = state.subscriber;
        var action = this;
        subscriber.next(index);
        if (subscriber.closed) {
            return;
        }
        else if (period === -1) {
            return subscriber.complete();
        }
        state.index = index + 1;
        action.schedule(state, period);
    };
    TimerObservable.prototype._subscribe = function (subscriber) {
        var index = 0;
        var _a = this, period = _a.period, dueTime = _a.dueTime, scheduler = _a.scheduler;
        return scheduler.schedule(TimerObservable.dispatch, dueTime, {
            index: index, period: period, subscriber: subscriber
        });
    };
    return TimerObservable;
}(Observable_1.Observable));
exports.TimerObservable = TimerObservable;
//# sourceMappingURL=TimerObservable.js.map

/***/ }),

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isArray_1 = __webpack_require__(115);
function isNumeric(val) {
    // parseFloat NaNs numeric-cast false positives (null|true|false|"")
    // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
    // subtraction forces infinities to NaN
    // adding 1 corrects loss of precision from parseFloat (#15100)
    return !isArray_1.isArray(val) && (val - parseFloat(val) + 1) >= 0;
}
exports.isNumeric = isNumeric;
;
//# sourceMappingURL=isNumeric.js.map

/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var AsyncAction_1 = __webpack_require__(363);
var AsyncScheduler_1 = __webpack_require__(365);
/**
 *
 * Async Scheduler
 *
 * <span class="informal">Schedule task as if you used setTimeout(task, duration)</span>
 *
 * `async` scheduler schedules tasks asynchronously, by putting them on the JavaScript
 * event loop queue. It is best used to delay tasks in time or to schedule tasks repeating
 * in intervals.
 *
 * If you just want to "defer" task, that is to perform it right after currently
 * executing synchronous code ends (commonly achieved by `setTimeout(deferredTask, 0)`),
 * better choice will be the {@link asap} scheduler.
 *
 * @example <caption>Use async scheduler to delay task</caption>
 * const task = () => console.log('it works!');
 *
 * Rx.Scheduler.async.schedule(task, 2000);
 *
 * // After 2 seconds logs:
 * // "it works!"
 *
 *
 * @example <caption>Use async scheduler to repeat task in intervals</caption>
 * function task(state) {
 *   console.log(state);
 *   this.schedule(state + 1, 1000); // `this` references currently executing Action,
 *                                   // which we reschedule with new state and delay
 * }
 *
 * Rx.Scheduler.async.schedule(task, 3000, 0);
 *
 * // Logs:
 * // 0 after 3s
 * // 1 after 4s
 * // 2 after 5s
 * // 3 after 6s
 *
 * @static true
 * @name async
 * @owner Scheduler
 */
exports.async = new AsyncScheduler_1.AsyncScheduler(AsyncAction_1.AsyncAction);
//# sourceMappingURL=async.js.map

/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var root_1 = __webpack_require__(37);
var Action_1 = __webpack_require__(364);
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var AsyncAction = (function (_super) {
    __extends(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        _super.call(this, scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
        this.pending = false;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (this.closed) {
            return this;
        }
        // Always replace the current state with the new state.
        this.state = state;
        // Set the pending flag indicating that this action has been scheduled, or
        // has recursively rescheduled itself.
        this.pending = true;
        var id = this.id;
        var scheduler = this.scheduler;
        //
        // Important implementation note:
        //
        // Actions only execute once by default, unless rescheduled from within the
        // scheduled callback. This allows us to implement single and repeat
        // actions via the same code path, without adding API surface area, as well
        // as mimic traditional recursion but across asynchronous boundaries.
        //
        // However, JS runtimes and timers distinguish between intervals achieved by
        // serial `setTimeout` calls vs. a single `setInterval` call. An interval of
        // serial `setTimeout` calls can be individually delayed, which delays
        // scheduling the next `setTimeout`, and so on. `setInterval` attempts to
        // guarantee the interval callback will be invoked more precisely to the
        // interval period, regardless of load.
        //
        // Therefore, we use `setInterval` to schedule single and repeat actions.
        // If the action reschedules itself with the same delay, the interval is not
        // canceled. If the action doesn't reschedule, or reschedules with a
        // different delay, the interval will be canceled after scheduled callback
        // execution.
        //
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.delay = delay;
        // If this action has already an async Id, don't request a new one.
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        return root_1.root.setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        // If this action is rescheduled with the same delay time, don't clear the interval id.
        if (delay !== null && this.delay === delay && this.pending === false) {
            return id;
        }
        // Otherwise, if the action's delay time is different from the current delay,
        // or the action has been rescheduled before it's executed, clear the interval id
        return root_1.root.clearInterval(id) && undefined || undefined;
    };
    /**
     * Immediately executes this action and the `work` it contains.
     * @return {any}
     */
    AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            // Dequeue if the action didn't reschedule itself. Don't call
            // unsubscribe(), because the action could reschedule later.
            // For example:
            // ```
            // scheduler.schedule(function doWork(counter) {
            //   /* ... I'm a busy worker bee ... */
            //   var originalAction = this;
            //   /* wait 100ms before rescheduling the action */
            //   setTimeout(function () {
            //     originalAction.schedule(counter + 1);
            //   }, 100);
            // }, 1000);
            // ```
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, delay) {
        var errored = false;
        var errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype._unsubscribe = function () {
        var id = this.id;
        var scheduler = this.scheduler;
        var actions = scheduler.actions;
        var index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
    };
    return AsyncAction;
}(Action_1.Action));
exports.AsyncAction = AsyncAction;
//# sourceMappingURL=AsyncAction.js.map

/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscription_1 = __webpack_require__(40);
/**
 * A unit of work to be executed in a {@link Scheduler}. An action is typically
 * created from within a Scheduler and an RxJS user does not need to concern
 * themselves about creating and manipulating an Action.
 *
 * ```ts
 * class Action<T> extends Subscription {
 *   new (scheduler: Scheduler, work: (state?: T) => void);
 *   schedule(state?: T, delay: number = 0): Subscription;
 * }
 * ```
 *
 * @class Action<T>
 */
var Action = (function (_super) {
    __extends(Action, _super);
    function Action(scheduler, work) {
        _super.call(this);
    }
    /**
     * Schedules this action on its parent Scheduler for execution. May be passed
     * some context object, `state`. May happen at some point in the future,
     * according to the `delay` parameter, if specified.
     * @param {T} [state] Some contextual data that the `work` function uses when
     * called by the Scheduler.
     * @param {number} [delay] Time to wait before executing the work, where the
     * time unit is implicit and defined by the Scheduler.
     * @return {void}
     */
    Action.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        return this;
    };
    return Action;
}(Subscription_1.Subscription));
exports.Action = Action;
//# sourceMappingURL=Action.js.map

/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Scheduler_1 = __webpack_require__(366);
var AsyncScheduler = (function (_super) {
    __extends(AsyncScheduler, _super);
    function AsyncScheduler() {
        _super.apply(this, arguments);
        this.actions = [];
        /**
         * A flag to indicate whether the Scheduler is currently executing a batch of
         * queued actions.
         * @type {boolean}
         */
        this.active = false;
        /**
         * An internal ID used to track the latest asynchronous task such as those
         * coming from `setTimeout`, `setInterval`, `requestAnimationFrame`, and
         * others.
         * @type {any}
         */
        this.scheduled = undefined;
    }
    AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;
        if (this.active) {
            actions.push(action);
            return;
        }
        var error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift()); // exhaust the scheduler queue
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(Scheduler_1.Scheduler));
exports.AsyncScheduler = AsyncScheduler;
//# sourceMappingURL=AsyncScheduler.js.map

/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * An execution context and a data structure to order tasks and schedule their
 * execution. Provides a notion of (potentially virtual) time, through the
 * `now()` getter method.
 *
 * Each unit of work in a Scheduler is called an {@link Action}.
 *
 * ```ts
 * class Scheduler {
 *   now(): number;
 *   schedule(work, delay?, state?): Subscription;
 * }
 * ```
 *
 * @class Scheduler
 */
var Scheduler = (function () {
    function Scheduler(SchedulerAction, now) {
        if (now === void 0) { now = Scheduler.now; }
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    /**
     * Schedules a function, `work`, for execution. May happen at some point in
     * the future, according to the `delay` parameter, if specified. May be passed
     * some context object, `state`, which will be passed to the `work` function.
     *
     * The given arguments will be processed an stored as an Action object in a
     * queue of actions.
     *
     * @param {function(state: ?T): ?Subscription} work A function representing a
     * task, or some unit of work to be executed by the Scheduler.
     * @param {number} [delay] Time to wait before executing the work, where the
     * time unit is implicit and defined by the Scheduler itself.
     * @param {T} [state] Some contextual data that the `work` function uses when
     * called by the Scheduler.
     * @return {Subscription} A subscription in order to be able to unsubscribe
     * the scheduled work.
     */
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) { delay = 0; }
        return new this.SchedulerAction(this, work).schedule(state, delay);
    };
    Scheduler.now = Date.now ? Date.now : function () { return +new Date(); };
    return Scheduler;
}());
exports.Scheduler = Scheduler;
//# sourceMappingURL=Scheduler.js.map

/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function isDate(value) {
    return value instanceof Date && !isNaN(+value);
}
exports.isDate = isDate;
//# sourceMappingURL=isDate.js.map

/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(6);
var combineLatest_1 = __webpack_require__(369);
Observable_1.Observable.combineLatest = combineLatest_1.combineLatest;
//# sourceMappingURL=combineLatest.js.map

/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isScheduler_1 = __webpack_require__(117);
var isArray_1 = __webpack_require__(115);
var ArrayObservable_1 = __webpack_require__(116);
var combineLatest_1 = __webpack_require__(370);
/* tslint:enable:max-line-length */
/**
 * Combines multiple Observables to create an Observable whose values are
 * calculated from the latest values of each of its input Observables.
 *
 * <span class="informal">Whenever any input Observable emits a value, it
 * computes a formula using the latest values from all the inputs, then emits
 * the output of that formula.</span>
 *
 * <img src="./img/combineLatest.png" width="100%">
 *
 * `combineLatest` combines the values from all the Observables passed as
 * arguments. This is done by subscribing to each Observable in order and,
 * whenever any Observable emits, collecting an array of the most recent
 * values from each Observable. So if you pass `n` Observables to operator,
 * returned Observable will always emit an array of `n` values, in order
 * corresponding to order of passed Observables (value from the first Observable
 * on the first place and so on).
 *
 * Static version of `combineLatest` accepts either an array of Observables
 * or each Observable can be put directly as an argument. Note that array of
 * Observables is good choice, if you don't know beforehand how many Observables
 * you will combine. Passing empty array will result in Observable that
 * completes immediately.
 *
 * To ensure output array has always the same length, `combineLatest` will
 * actually wait for all input Observables to emit at least once,
 * before it starts emitting results. This means if some Observable emits
 * values before other Observables started emitting, all that values but last
 * will be lost. On the other hand, is some Observable does not emit value but
 * completes, resulting Observable will complete at the same moment without
 * emitting anything, since it will be now impossible to include value from
 * completed Observable in resulting array. Also, if some input Observable does
 * not emit any value and never completes, `combineLatest` will also never emit
 * and never complete, since, again, it will wait for all streams to emit some
 * value.
 *
 * If at least one Observable was passed to `combineLatest` and all passed Observables
 * emitted something, resulting Observable will complete when all combined
 * streams complete. So even if some Observable completes, result of
 * `combineLatest` will still emit values when other Observables do. In case
 * of completed Observable, its value from now on will always be the last
 * emitted value. On the other hand, if any Observable errors, `combineLatest`
 * will error immediately as well, and all other Observables will be unsubscribed.
 *
 * `combineLatest` accepts as optional parameter `project` function, which takes
 * as arguments all values that would normally be emitted by resulting Observable.
 * `project` can return any kind of value, which will be then emitted by Observable
 * instead of default array. Note that `project` does not take as argument that array
 * of values, but values themselves. That means default `project` can be imagined
 * as function that takes all its arguments and puts them into an array.
 *
 *
 * @example <caption>Combine two timer Observables</caption>
 * const firstTimer = Rx.Observable.timer(0, 1000); // emit 0, 1, 2... after every second, starting from now
 * const secondTimer = Rx.Observable.timer(500, 1000); // emit 0, 1, 2... after every second, starting 0,5s from now
 * const combinedTimers = Rx.Observable.combineLatest(firstTimer, secondTimer);
 * combinedTimers.subscribe(value => console.log(value));
 * // Logs
 * // [0, 0] after 0.5s
 * // [1, 0] after 1s
 * // [1, 1] after 1.5s
 * // [2, 1] after 2s
 *
 *
 * @example <caption>Combine an array of Observables</caption>
 * const observables = [1, 5, 10].map(
 *   n => Rx.Observable.of(n).delay(n * 1000).startWith(0) // emit 0 and then emit n after n seconds
 * );
 * const combined = Rx.Observable.combineLatest(observables);
 * combined.subscribe(value => console.log(value));
 * // Logs
 * // [0, 0, 0] immediately
 * // [1, 0, 0] after 1s
 * // [1, 5, 0] after 5s
 * // [1, 5, 10] after 10s
 *
 *
 * @example <caption>Use project function to dynamically calculate the Body-Mass Index</caption>
 * var weight = Rx.Observable.of(70, 72, 76, 79, 75);
 * var height = Rx.Observable.of(1.76, 1.77, 1.78);
 * var bmi = Rx.Observable.combineLatest(weight, height, (w, h) => w / (h * h));
 * bmi.subscribe(x => console.log('BMI is ' + x));
 *
 * // With output to console:
 * // BMI is 24.212293388429753
 * // BMI is 23.93948099205209
 * // BMI is 23.671253629592222
 *
 *
 * @see {@link combineAll}
 * @see {@link merge}
 * @see {@link withLatestFrom}
 *
 * @param {ObservableInput} observable1 An input Observable to combine with other Observables.
 * @param {ObservableInput} observable2 An input Observable to combine with other Observables.
 * More than one input Observables may be given as arguments
 * or an array of Observables may be given as the first argument.
 * @param {function} [project] An optional function to project the values from
 * the combined latest values into a new value on the output Observable.
 * @param {Scheduler} [scheduler=null] The IScheduler to use for subscribing to
 * each input Observable.
 * @return {Observable} An Observable of projected values from the most recent
 * values from each input Observable, or an array of the most recent values from
 * each input Observable.
 * @static true
 * @name combineLatest
 * @owner Observable
 */
function combineLatest() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    var project = null;
    var scheduler = null;
    if (isScheduler_1.isScheduler(observables[observables.length - 1])) {
        scheduler = observables.pop();
    }
    if (typeof observables[observables.length - 1] === 'function') {
        project = observables.pop();
    }
    // if the first and only other argument besides the resultSelector is an array
    // assume it's been called with `combineLatest([obs1, obs2, obs3], project)`
    if (observables.length === 1 && isArray_1.isArray(observables[0])) {
        observables = observables[0];
    }
    return new ArrayObservable_1.ArrayObservable(observables, scheduler).lift(new combineLatest_1.CombineLatestOperator(project));
}
exports.combineLatest = combineLatest;
//# sourceMappingURL=combineLatest.js.map

/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ArrayObservable_1 = __webpack_require__(116);
var isArray_1 = __webpack_require__(115);
var OuterSubscriber_1 = __webpack_require__(49);
var subscribeToResult_1 = __webpack_require__(48);
var none = {};
/* tslint:enable:max-line-length */
/**
 * Combines multiple Observables to create an Observable whose values are
 * calculated from the latest values of each of its input Observables.
 *
 * <span class="informal">Whenever any input Observable emits a value, it
 * computes a formula using the latest values from all the inputs, then emits
 * the output of that formula.</span>
 *
 * <img src="./img/combineLatest.png" width="100%">
 *
 * `combineLatest` combines the values from this Observable with values from
 * Observables passed as arguments. This is done by subscribing to each
 * Observable, in order, and collecting an array of each of the most recent
 * values any time any of the input Observables emits, then either taking that
 * array and passing it as arguments to an optional `project` function and
 * emitting the return value of that, or just emitting the array of recent
 * values directly if there is no `project` function.
 *
 * @example <caption>Dynamically calculate the Body-Mass Index from an Observable of weight and one for height</caption>
 * var weight = Rx.Observable.of(70, 72, 76, 79, 75);
 * var height = Rx.Observable.of(1.76, 1.77, 1.78);
 * var bmi = weight.combineLatest(height, (w, h) => w / (h * h));
 * bmi.subscribe(x => console.log('BMI is ' + x));
 *
 * // With output to console:
 * // BMI is 24.212293388429753
 * // BMI is 23.93948099205209
 * // BMI is 23.671253629592222
 *
 * @see {@link combineAll}
 * @see {@link merge}
 * @see {@link withLatestFrom}
 *
 * @param {ObservableInput} other An input Observable to combine with the source
 * Observable. More than one input Observables may be given as argument.
 * @param {function} [project] An optional function to project the values from
 * the combined latest values into a new value on the output Observable.
 * @return {Observable} An Observable of projected values from the most recent
 * values from each input Observable, or an array of the most recent values from
 * each input Observable.
 * @method combineLatest
 * @owner Observable
 */
function combineLatest() {
    var observables = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        observables[_i - 0] = arguments[_i];
    }
    var project = null;
    if (typeof observables[observables.length - 1] === 'function') {
        project = observables.pop();
    }
    // if the first and only other argument besides the resultSelector is an array
    // assume it's been called with `combineLatest([obs1, obs2, obs3], project)`
    if (observables.length === 1 && isArray_1.isArray(observables[0])) {
        observables = observables[0].slice();
    }
    return function (source) { return source.lift.call(new ArrayObservable_1.ArrayObservable([source].concat(observables)), new CombineLatestOperator(project)); };
}
exports.combineLatest = combineLatest;
var CombineLatestOperator = (function () {
    function CombineLatestOperator(project) {
        this.project = project;
    }
    CombineLatestOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new CombineLatestSubscriber(subscriber, this.project));
    };
    return CombineLatestOperator;
}());
exports.CombineLatestOperator = CombineLatestOperator;
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var CombineLatestSubscriber = (function (_super) {
    __extends(CombineLatestSubscriber, _super);
    function CombineLatestSubscriber(destination, project) {
        _super.call(this, destination);
        this.project = project;
        this.active = 0;
        this.values = [];
        this.observables = [];
    }
    CombineLatestSubscriber.prototype._next = function (observable) {
        this.values.push(none);
        this.observables.push(observable);
    };
    CombineLatestSubscriber.prototype._complete = function () {
        var observables = this.observables;
        var len = observables.length;
        if (len === 0) {
            this.destination.complete();
        }
        else {
            this.active = len;
            this.toRespond = len;
            for (var i = 0; i < len; i++) {
                var observable = observables[i];
                this.add(subscribeToResult_1.subscribeToResult(this, observable, observable, i));
            }
        }
    };
    CombineLatestSubscriber.prototype.notifyComplete = function (unused) {
        if ((this.active -= 1) === 0) {
            this.destination.complete();
        }
    };
    CombineLatestSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var values = this.values;
        var oldVal = values[outerIndex];
        var toRespond = !this.toRespond
            ? 0
            : oldVal === none ? --this.toRespond : this.toRespond;
        values[outerIndex] = innerValue;
        if (toRespond === 0) {
            if (this.project) {
                this._tryProject(values);
            }
            else {
                this.destination.next(values.slice());
            }
        }
    };
    CombineLatestSubscriber.prototype._tryProject = function (values) {
        var result;
        try {
            result = this.project.apply(this, values);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return CombineLatestSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
exports.CombineLatestSubscriber = CombineLatestSubscriber;
//# sourceMappingURL=combineLatest.js.map

/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(372));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDZDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vc3JjL2NvbnRyb2xzL2NvbnRyb2xzJztcbiJdfQ==

/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(39);
var vg_controls_1 = __webpack_require__(373);
var vg_fullscreen_1 = __webpack_require__(374);
var vg_mute_1 = __webpack_require__(375);
var vg_volume_1 = __webpack_require__(376);
var vg_play_pause_1 = __webpack_require__(377);
var vg_playback_button_1 = __webpack_require__(378);
var vg_scrub_bar_1 = __webpack_require__(379);
var vg_scrub_bar_buffering_time_1 = __webpack_require__(380);
var vg_scrub_bar_cue_points_1 = __webpack_require__(381);
var vg_scrub_bar_current_time_1 = __webpack_require__(382);
var vg_time_display_1 = __webpack_require__(383);
var vg_track_selector_1 = __webpack_require__(384);
var vg_controls_hidden_1 = __webpack_require__(339);
var VgControlsModule = (function () {
    function VgControlsModule() {
    }
    VgControlsModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: [
                        vg_controls_1.VgControls,
                        vg_fullscreen_1.VgFullscreen,
                        vg_mute_1.VgMute,
                        vg_volume_1.VgVolume,
                        vg_play_pause_1.VgPlayPause,
                        vg_playback_button_1.VgPlaybackButton,
                        vg_scrub_bar_1.VgScrubBar,
                        vg_scrub_bar_buffering_time_1.VgScrubBarBufferingTime,
                        vg_scrub_bar_cue_points_1.VgScrubBarCuePoints,
                        vg_scrub_bar_current_time_1.VgScrubBarCurrentTime,
                        vg_time_display_1.VgTimeDisplay,
                        vg_time_display_1.VgUtcPipe,
                        vg_track_selector_1.VgTrackSelector
                    ],
                    exports: [
                        vg_controls_1.VgControls,
                        vg_fullscreen_1.VgFullscreen,
                        vg_mute_1.VgMute,
                        vg_volume_1.VgVolume,
                        vg_play_pause_1.VgPlayPause,
                        vg_playback_button_1.VgPlaybackButton,
                        vg_scrub_bar_1.VgScrubBar,
                        vg_scrub_bar_buffering_time_1.VgScrubBarBufferingTime,
                        vg_scrub_bar_cue_points_1.VgScrubBarCuePoints,
                        vg_scrub_bar_current_time_1.VgScrubBarCurrentTime,
                        vg_time_display_1.VgTimeDisplay,
                        vg_time_display_1.VgUtcPipe,
                        vg_track_selector_1.VgTrackSelector
                    ],
                    providers: [vg_controls_hidden_1.VgControlsHidden]
                },] },
    ];
    /** @nocollapse */
    VgControlsModule.ctorParameters = function () { return []; };
    return VgControlsModule;
}());
exports.VgControlsModule = VgControlsModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QywwQ0FBK0M7QUFDL0MsNkNBQTJDO0FBQzNDLCtEQUE2RDtBQUM3RCw2Q0FBMkM7QUFDM0MsbURBQWlEO0FBQ2pELCtEQUE0RDtBQUM1RCw4RUFBMkU7QUFDM0UsNERBQXlEO0FBQ3pELHNIQUFpSDtBQUNqSCwwR0FBcUc7QUFDckcsZ0hBQTJHO0FBQzNHLHFFQUE2RTtBQUM3RSwyRUFBd0U7QUFDeEUsNEVBQXlFOzs7OztnQkFFeEUsZUFBUSxTQUFDO29CQUNOLE9BQU8sRUFBRSxDQUFFLHFCQUFZLENBQUU7b0JBQ3pCLFlBQVksRUFBRTt3QkFDVix3QkFBVTt3QkFDViw0QkFBWTt3QkFDWixnQkFBTTt3QkFDTixvQkFBUTt3QkFDUiwyQkFBVzt3QkFDWCxxQ0FBZ0I7d0JBQ2hCLHlCQUFVO3dCQUNWLHFEQUF1Qjt3QkFDdkIsNkNBQW1CO3dCQUNuQixpREFBcUI7d0JBQ3JCLCtCQUFhO3dCQUNiLDJCQUFTO3dCQUNULG1DQUFlO3FCQUNsQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsd0JBQVU7d0JBQ1YsNEJBQVk7d0JBQ1osZ0JBQU07d0JBQ04sb0JBQVE7d0JBQ1IsMkJBQVc7d0JBQ1gscUNBQWdCO3dCQUNoQix5QkFBVTt3QkFDVixxREFBdUI7d0JBQ3ZCLDZDQUFtQjt3QkFDbkIsaURBQXFCO3dCQUNyQiwrQkFBYTt3QkFDYiwyQkFBUzt3QkFDVCxtQ0FBZTtxQkFDbEI7b0JBQ0QsU0FBUyxFQUFFLENBQUUscUNBQWdCLENBQUU7aUJBQ2xDOzs7OzJCQWpERDs7QUFrRGEsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBWZ0NvbnRyb2xzIH0gZnJvbSAnLi92Zy1jb250cm9scyc7XG5pbXBvcnQgeyBWZ0Z1bGxzY3JlZW4gfSBmcm9tICcuL3ZnLWZ1bGxzY3JlZW4vdmctZnVsbHNjcmVlbic7XG5pbXBvcnQgeyBWZ011dGUgfSBmcm9tICcuL3ZnLW11dGUvdmctbXV0ZSc7XG5pbXBvcnQgeyBWZ1ZvbHVtZSB9IGZyb20gJy4vdmctdm9sdW1lL3ZnLXZvbHVtZSc7XG5pbXBvcnQgeyBWZ1BsYXlQYXVzZSB9IGZyb20gJy4vdmctcGxheS1wYXVzZS92Zy1wbGF5LXBhdXNlJztcbmltcG9ydCB7IFZnUGxheWJhY2tCdXR0b24gfSBmcm9tICcuL3ZnLXBsYXliYWNrLWJ1dHRvbi92Zy1wbGF5YmFjay1idXR0b24nO1xuaW1wb3J0IHsgVmdTY3J1YkJhciB9IGZyb20gJy4vdmctc2NydWItYmFyL3ZnLXNjcnViLWJhcic7XG5pbXBvcnQgeyBWZ1NjcnViQmFyQnVmZmVyaW5nVGltZSB9IGZyb20gJy4vdmctc2NydWItYmFyL3ZnLXNjcnViLWJhci1idWZmZXJpbmctdGltZS92Zy1zY3J1Yi1iYXItYnVmZmVyaW5nLXRpbWUnO1xuaW1wb3J0IHsgVmdTY3J1YkJhckN1ZVBvaW50cyB9IGZyb20gJy4vdmctc2NydWItYmFyL3ZnLXNjcnViLWJhci1jdWUtcG9pbnRzL3ZnLXNjcnViLWJhci1jdWUtcG9pbnRzJztcbmltcG9ydCB7IFZnU2NydWJCYXJDdXJyZW50VGltZSB9IGZyb20gJy4vdmctc2NydWItYmFyL3ZnLXNjcnViLWJhci1jdXJyZW50LXRpbWUvdmctc2NydWItYmFyLWN1cnJlbnQtdGltZSc7XG5pbXBvcnQgeyBWZ1RpbWVEaXNwbGF5LCBWZ1V0Y1BpcGUgfSBmcm9tICcuL3ZnLXRpbWUtZGlzcGxheS92Zy10aW1lLWRpc3BsYXknO1xuaW1wb3J0IHsgVmdUcmFja1NlbGVjdG9yIH0gZnJvbSAnLi92Zy10cmFjay1zZWxlY3Rvci92Zy10cmFjay1zZWxlY3Rvcic7XG5pbXBvcnQgeyBWZ0NvbnRyb2xzSGlkZGVuIH0gZnJvbSAnLi8uLi9jb3JlL3NlcnZpY2VzL3ZnLWNvbnRyb2xzLWhpZGRlbic7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogWyBDb21tb25Nb2R1bGUgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgVmdDb250cm9scyxcbiAgICAgICAgVmdGdWxsc2NyZWVuLFxuICAgICAgICBWZ011dGUsXG4gICAgICAgIFZnVm9sdW1lLFxuICAgICAgICBWZ1BsYXlQYXVzZSxcbiAgICAgICAgVmdQbGF5YmFja0J1dHRvbixcbiAgICAgICAgVmdTY3J1YkJhcixcbiAgICAgICAgVmdTY3J1YkJhckJ1ZmZlcmluZ1RpbWUsXG4gICAgICAgIFZnU2NydWJCYXJDdWVQb2ludHMsXG4gICAgICAgIFZnU2NydWJCYXJDdXJyZW50VGltZSxcbiAgICAgICAgVmdUaW1lRGlzcGxheSxcbiAgICAgICAgVmdVdGNQaXBlLFxuICAgICAgICBWZ1RyYWNrU2VsZWN0b3JcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgVmdDb250cm9scyxcbiAgICAgICAgVmdGdWxsc2NyZWVuLFxuICAgICAgICBWZ011dGUsXG4gICAgICAgIFZnVm9sdW1lLFxuICAgICAgICBWZ1BsYXlQYXVzZSxcbiAgICAgICAgVmdQbGF5YmFja0J1dHRvbixcbiAgICAgICAgVmdTY3J1YkJhcixcbiAgICAgICAgVmdTY3J1YkJhckJ1ZmZlcmluZ1RpbWUsXG4gICAgICAgIFZnU2NydWJCYXJDdWVQb2ludHMsXG4gICAgICAgIFZnU2NydWJCYXJDdXJyZW50VGltZSxcbiAgICAgICAgVmdUaW1lRGlzcGxheSxcbiAgICAgICAgVmdVdGNQaXBlLFxuICAgICAgICBWZ1RyYWNrU2VsZWN0b3JcbiAgICBdLFxuICAgIHByb3ZpZGVyczogWyBWZ0NvbnRyb2xzSGlkZGVuIF1cbn0pXG5leHBvcnQgY2xhc3MgVmdDb250cm9sc01vZHVsZSB7XG59XG4iXX0=

/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var Observable_1 = __webpack_require__(6);
var vg_api_1 = __webpack_require__(337);
var vg_controls_hidden_1 = __webpack_require__(339);
__webpack_require__(235);
var vg_states_1 = __webpack_require__(338);
var VgControls = (function () {
    function VgControls(API, ref, hidden) {
        this.API = API;
        this.ref = ref;
        this.hidden = hidden;
        this.isAdsPlaying = 'initial';
        this.hideControls = false;
        this.vgAutohide = false;
        this.vgAutohideTime = 3;
        this.subscriptions = [];
        this.elem = ref.nativeElement;
    }
    VgControls.prototype.ngOnInit = function () {
        var _this = this;
        var mouseMove = Observable_1.Observable.fromEvent(this.API.videogularElement, 'mousemove');
        this.subscriptions.push(mouseMove.subscribe(this.show.bind(this)));
        var touchStart = Observable_1.Observable.fromEvent(this.API.videogularElement, 'touchstart');
        this.subscriptions.push(touchStart.subscribe(this.show.bind(this)));
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgControls.prototype.onPlayerReady = function () {
        this.target = this.API.getMediaById(this.vgFor);
        this.subscriptions.push(this.target.subscriptions.play.subscribe(this.onPlay.bind(this)));
        this.subscriptions.push(this.target.subscriptions.pause.subscribe(this.onPause.bind(this)));
        this.subscriptions.push(this.target.subscriptions.startAds.subscribe(this.onStartAds.bind(this)));
        this.subscriptions.push(this.target.subscriptions.endAds.subscribe(this.onEndAds.bind(this)));
    };
    VgControls.prototype.ngAfterViewInit = function () {
        if (this.vgAutohide) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    VgControls.prototype.onPlay = function () {
        if (this.vgAutohide) {
            this.hide();
        }
    };
    VgControls.prototype.onPause = function () {
        clearTimeout(this.timer);
        this.hideControls = false;
        this.hidden.state(false);
    };
    VgControls.prototype.onStartAds = function () {
        this.isAdsPlaying = 'none';
    };
    VgControls.prototype.onEndAds = function () {
        this.isAdsPlaying = 'initial';
    };
    VgControls.prototype.hide = function () {
        if (this.vgAutohide) {
            clearTimeout(this.timer);
            this.hideAsync();
        }
    };
    VgControls.prototype.show = function () {
        clearTimeout(this.timer);
        this.hideControls = false;
        this.hidden.state(false);
        if (this.vgAutohide) {
            this.hideAsync();
        }
    };
    VgControls.prototype.hideAsync = function () {
        var _this = this;
        if (this.API.state === vg_states_1.VgStates.VG_PLAYING) {
            this.timer = setTimeout(function () {
                _this.hideControls = true;
                _this.hidden.state(true);
            }, this.vgAutohideTime * 1000);
        }
    };
    VgControls.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgControls.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-controls',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "<ng-content></ng-content>",
                    styles: ["\n        vg-controls {\n            position: absolute;\n            display: flex;\n            width: 100%;\n            height: 50px;\n            z-index: 300;\n            bottom: 0;\n            background-color: rgba(0, 0, 0, 0.5);\n            -webkit-transition: bottom 1s;\n            -khtml-transition: bottom 1s;\n            -moz-transition: bottom 1s;\n            -ms-transition: bottom 1s;\n            transition: bottom 1s;\n        }\n\n        vg-controls.hide {  \n            bottom: -50px;\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    VgControls.ctorParameters = function () { return [
        { type: vg_api_1.VgAPI, },
        { type: core_1.ElementRef, },
        { type: vg_controls_hidden_1.VgControlsHidden, },
    ]; };
    VgControls.propDecorators = {
        "isAdsPlaying": [{ type: core_1.HostBinding, args: ['style.pointer-events',] },],
        "hideControls": [{ type: core_1.HostBinding, args: ['class.hide',] },],
        "vgFor": [{ type: core_1.Input },],
        "vgAutohide": [{ type: core_1.Input },],
        "vgAutohideTime": [{ type: core_1.Input },],
    };
    return VgControls;
}());
exports.VgControls = VgControls;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctY29udHJvbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2Zy1jb250cm9scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUd1QjtBQUN2Qiw4Q0FBNkM7QUFDN0Msa0RBQWdEO0FBQ2hELDRFQUF5RTtBQUN6RSx5Q0FBdUM7QUFDdkMsc0RBQW9EOztJQTRDaEQsb0JBQW9CLEdBQVUsRUFBVSxHQUFlLEVBQVUsTUFBd0I7UUFBckUsUUFBRyxHQUFILEdBQUcsQ0FBTztRQUFVLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFrQjs0QkFaN0IsU0FBUzs0QkFDbEIsS0FBSzswQkFHekIsS0FBSzs4QkFDRixDQUFDOzZCQUtILEVBQUU7UUFHOUIsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDO0tBQ2pDO0lBRUQsNkJBQVEsR0FBUjtRQUFBLGlCQWFDO1FBWkcsSUFBSSxTQUFTLEdBQUcsdUJBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVuRSxJQUFJLFVBQVUsR0FBRyx1QkFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXBFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZ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O1FBQUEsaUJBT0M7UUFORyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssS0FBSyxvQkFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUM7Z0JBQ3BCLEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUN6QixLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMzQixFQUFFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLENBQUM7U0FDbEM7S0FDSjtJQUVELGdDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQztLQUNwRDs7Z0JBOUhKLGdCQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxNQUFNLEVBQUUsQ0FBRSxxaEJBbUJULENBQUM7aUJBQ0w7Ozs7Z0JBOUJRLGNBQUs7Z0JBSmdCLGlCQUFVO2dCQUsvQixxQ0FBZ0I7OztpQ0FrQ3BCLGtCQUFXLFNBQUMsc0JBQXNCO2lDQUNsQyxrQkFBVyxTQUFDLFlBQVk7MEJBRXhCLFlBQUs7K0JBQ0wsWUFBSzttQ0FDTCxZQUFLOztxQkE3Q1Y7O0FBb0NhLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBBZnRlclZpZXdJbml0LCBWaWV3RW5jYXBzdWxhdGlvbixcbiAgICBFdmVudEVtaXR0ZXIsIE91dHB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgVmdBUEkgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3ZnLWFwaSc7XG5pbXBvcnQgeyBWZ0NvbnRyb2xzSGlkZGVuIH0gZnJvbSAnLi8uLi9jb3JlL3NlcnZpY2VzL3ZnLWNvbnRyb2xzLWhpZGRlbic7XG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvZnJvbUV2ZW50JztcbmltcG9ydCB7IFZnU3RhdGVzIH0gZnJvbSAnLi4vY29yZS9zdGF0ZXMvdmctc3RhdGVzJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd2Zy1jb250cm9scycsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICAgIHN0eWxlczogWyBgXG4gICAgICAgIHZnLWNvbnRyb2xzIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIHotaW5kZXg6IDMwMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYm90dG9tIDFzO1xuICAgICAgICAgICAgLWtodG1sLXRyYW5zaXRpb246IGJvdHRvbSAxcztcbiAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYm90dG9tIDFzO1xuICAgICAgICAgICAgLW1zLXRyYW5zaXRpb246IGJvdHRvbSAxcztcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJvdHRvbSAxcztcbiAgICAgICAgfVxuXG4gICAgICAgIHZnLWNvbnRyb2xzLmhpZGUgeyAgXG4gICAgICAgICAgICBib3R0b206IC01MHB4O1xuICAgICAgICB9XG4gICAgYF1cbn0pXG5leHBvcnQgY2xhc3MgVmdDb250cm9scyBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gICAgZWxlbTogSFRNTEVsZW1lbnQ7XG4gICAgdGFyZ2V0OiBhbnk7XG5cbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLnBvaW50ZXItZXZlbnRzJykgaXNBZHNQbGF5aW5nOiBzdHJpbmcgPSAnaW5pdGlhbCc7XG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5oaWRlJykgaGlkZUNvbnRyb2xzOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBASW5wdXQoKSB2Z0Zvcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHZnQXV0b2hpZGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSB2Z0F1dG9oaWRlVGltZTogbnVtYmVyID0gMztcblxuICAgIHByaXZhdGUgdGltZXI6IGFueTtcbiAgICBwcml2YXRlIGhpZGVUaW1lcjogYW55O1xuXG4gICAgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgQVBJOiBWZ0FQSSwgcHJpdmF0ZSByZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgaGlkZGVuOiBWZ0NvbnRyb2xzSGlkZGVuKSB7XG4gICAgICAgIHRoaXMuZWxlbSA9IHJlZi5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBsZXQgbW91c2VNb3ZlID0gT2JzZXJ2YWJsZS5mcm9tRXZlbnQodGhpcy5BUEkudmlkZW9ndWxhckVsZW1lbnQsICdtb3VzZW1vdmUnKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2gobW91c2VNb3ZlLnN1YnNjcmliZSh0aGlzLnNob3cuYmluZCh0aGlzKSkpO1xuXG4gICAgICAgIGxldCB0b3VjaFN0YXJ0ID0gT2JzZXJ2YWJsZS5mcm9tRXZlbnQodGhpcy5BUEkudmlkZW9ndWxhckVsZW1lbnQsICd0b3VjaHN0YXJ0Jyk7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHRvdWNoU3RhcnQuc3Vic2NyaWJlKHRoaXMuc2hvdy5iaW5kKHRoaXMpKSk7XG5cbiAgICAgICAgaWYgKHRoaXMuQVBJLmlzUGxheWVyUmVhZHkpIHtcbiAgICAgICAgICAgIHRoaXMub25QbGF5ZXJSZWFkeSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2godGhpcy5BUEkucGxheWVyUmVhZHlFdmVudC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5vblBsYXllclJlYWR5KCkpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUGxheWVyUmVhZHkoKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGhpcy5BUEkuZ2V0TWVkaWFCeUlkKHRoaXMudmdGb3IpO1xuXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMudGFyZ2V0LnN1YnNjcmlwdGlvbnMucGxheS5zdWJzY3JpYmUodGhpcy5vblBsYXkuYmluZCh0aGlzKSkpO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLnRhcmdldC5zdWJzY3JpcHRpb25zLnBhdXNlLnN1YnNjcmliZSh0aGlzLm9uUGF1c2UuYmluZCh0aGlzKSkpO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLnRhcmdldC5zdWJzY3JpcHRpb25zLnN0YXJ0QWRzLnN1YnNjcmliZSh0aGlzLm9uU3RhcnRBZHMuYmluZCh0aGlzKSkpO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLnRhcmdldC5zdWJzY3JpcHRpb25zLmVuZEFkcy5zdWJzY3JpYmUodGhpcy5vbkVuZEFkcy5iaW5kKHRoaXMpKSk7XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICBpZiAodGhpcy52Z0F1dG9oaWRlKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25QbGF5KCkge1xuICAgICAgICBpZiAodGhpcy52Z0F1dG9oaWRlKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUGF1c2UoKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICAgICAgdGhpcy5oaWRlQ29udHJvbHMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5oaWRkZW4uc3RhdGUoZmFsc2UpO1xuICAgIH1cblxuICAgIG9uU3RhcnRBZHMoKSB7XG4gICAgICAgIHRoaXMuaXNBZHNQbGF5aW5nID0gJ25vbmUnO1xuICAgIH1cblxuICAgIG9uRW5kQWRzKCkge1xuICAgICAgICB0aGlzLmlzQWRzUGxheWluZyA9ICdpbml0aWFsJztcbiAgICB9XG5cbiAgICBoaWRlKCkge1xuICAgICAgICBpZiAodGhpcy52Z0F1dG9oaWRlKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XG4gICAgICAgICAgICB0aGlzLmhpZGVBc3luYygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgICB0aGlzLmhpZGVDb250cm9scyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhpZGRlbi5zdGF0ZShmYWxzZSk7XG5cbiAgICAgICAgaWYgKHRoaXMudmdBdXRvaGlkZSkge1xuICAgICAgICAgICAgdGhpcy5oaWRlQXN5bmMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaGlkZUFzeW5jKCkge1xuICAgICAgICBpZiAodGhpcy5BUEkuc3RhdGUgPT09IFZnU3RhdGVzLlZHX1BMQVlJTkcpIHtcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVDb250cm9scyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5oaWRkZW4uc3RhdGUodHJ1ZSk7XG4gICAgICAgICAgICB9LCB0aGlzLnZnQXV0b2hpZGVUaW1lICogMTAwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2gocyA9PiBzLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cbn1cbiJdfQ==

/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var vg_api_1 = __webpack_require__(337);
var vg_fullscreen_api_1 = __webpack_require__(341);
var VgFullscreen = (function () {
    function VgFullscreen(ref, API, fsAPI) {
        this.API = API;
        this.fsAPI = fsAPI;
        this.isFullscreen = false;
        this.subscriptions = [];
        this.ariaValue = 'normal mode';
        this.elem = ref.nativeElement;
        this.subscriptions.push(this.fsAPI.onChangeFullscreen.subscribe(this.onChangeFullscreen.bind(this)));
    }
    VgFullscreen.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgFullscreen.prototype.onPlayerReady = function () {
        this.target = this.API.getMediaById(this.vgFor);
    };
    VgFullscreen.prototype.onChangeFullscreen = function (fsState) {
        this.ariaValue = fsState ? 'fullscren mode' : 'normal mode';
        this.isFullscreen = fsState;
    };
    VgFullscreen.prototype.onClick = function () {
        this.changeFullscreenState();
    };
    VgFullscreen.prototype.onKeyDown = function (event) {
        // On press Enter (13) or Space (32)
        if (event.keyCode === 13 || event.keyCode === 32) {
            event.preventDefault();
            this.changeFullscreenState();
        }
    };
    VgFullscreen.prototype.changeFullscreenState = function () {
        var element = this.target;
        if (this.target instanceof vg_api_1.VgAPI) {
            element = null;
        }
        this.fsAPI.toggleFullscreen(element);
    };
    VgFullscreen.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgFullscreen.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-fullscreen',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "\n        <div class=\"icon\"\n             [class.vg-icon-fullscreen]=\"!isFullscreen\"\n             [class.vg-icon-fullscreen_exit]=\"isFullscreen\"\n             tabindex=\"0\"\n             role=\"button\"\n             aria-label=\"fullscreen button\"\n             [attr.aria-valuetext]=\"ariaValue\">\n        </div>",
                    styles: ["\n        vg-fullscreen {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -khtml-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 50px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n        }\n\n        vg-fullscreen .icon {\n            pointer-events: none;\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    VgFullscreen.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: vg_api_1.VgAPI, },
        { type: vg_fullscreen_api_1.VgFullscreenAPI, },
    ]; };
    VgFullscreen.propDecorators = {
        "onClick": [{ type: core_1.HostListener, args: ['click',] },],
        "onKeyDown": [{ type: core_1.HostListener, args: ['keydown', ['$event'],] },],
    };
    return VgFullscreen;
}());
exports.VgFullscreen = VgFullscreen;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctZnVsbHNjcmVlbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZnLWZ1bGxzY3JlZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEc7QUFDMUcscURBQW1EO0FBQ25ELDJFQUF3RTs7SUFnRHBFLHNCQUFZLEdBQWUsRUFBUyxHQUFVLEVBQVMsS0FBc0I7UUFBekMsUUFBRyxHQUFILEdBQUcsQ0FBTztRQUFTLFVBQUssR0FBTCxLQUFLLENBQWlCOzRCQU5yRCxLQUFLOzZCQUVHLEVBQUU7eUJBRXRCLGFBQWE7UUFHckIsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDO1FBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3hHO0lBRUQsK0JBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTkcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN4QjtRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxhQUFhLEVBQUUsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDLENBQUM7U0FDNUY7S0FDSjtJQUVELG9DQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNuRDtJQUVELHlDQUFrQixHQUFsQixVQUFtQixPQUFnQjtRQUMvQixJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sR0FBRyxnQkFBZ0IsR0FBRyxhQUFhLENBQUM7UUFDNUQsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUM7S0FDL0I7SUFHRCw4QkFBTztRQUNILElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDOztJQUlqQyxnQ0FBUyxhQUFDLEtBQW9COztRQUUxQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0MsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1NBQ2hDOztJQUdMLDRDQUFxQixHQUFyQjtRQUNJLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFMUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sWUFBWSxjQUFLLENBQUMsQ0FBQyxDQUFDO1lBQy9CLE9BQU8sR0FBRyxJQUFJLENBQUM7U0FDbEI7UUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ3hDO0lBRUQsa0NBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDO0tBQ3BEOztnQkE3RkosZ0JBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsYUFBYSxFQUFFLHdCQUFpQixDQUFDLElBQUk7b0JBQ3JDLFFBQVEsRUFBRSxzVUFRQztvQkFDWCxNQUFNLEVBQUUsQ0FBRSw2aUJBb0JULENBQUU7aUJBQ047Ozs7Z0JBdkNtQixpQkFBVTtnQkFDckIsY0FBSztnQkFDTCxtQ0FBZTs7OzRCQXVFbkIsbUJBQVksU0FBQyxPQUFPOzhCQUtwQixtQkFBWSxTQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7dUJBOUV2Qzs7QUF3Q2Esb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgT25EZXN0cm95LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWZ0FQSSB9IGZyb20gJy4uLy4uL2NvcmUvc2VydmljZXMvdmctYXBpJztcbmltcG9ydCB7IFZnRnVsbHNjcmVlbkFQSSB9IGZyb20gJy4uLy4uL2NvcmUvc2VydmljZXMvdmctZnVsbHNjcmVlbi1hcGknO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndmctZnVsbHNjcmVlbicsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaWNvblwiXG4gICAgICAgICAgICAgW2NsYXNzLnZnLWljb24tZnVsbHNjcmVlbl09XCIhaXNGdWxsc2NyZWVuXCJcbiAgICAgICAgICAgICBbY2xhc3MudmctaWNvbi1mdWxsc2NyZWVuX2V4aXRdPVwiaXNGdWxsc2NyZWVuXCJcbiAgICAgICAgICAgICB0YWJpbmRleD1cIjBcIlxuICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJmdWxsc2NyZWVuIGJ1dHRvblwiXG4gICAgICAgICAgICAgW2F0dHIuYXJpYS12YWx1ZXRleHRdPVwiYXJpYVZhbHVlXCI+XG4gICAgICAgIDwvZGl2PmAsXG4gICAgc3R5bGVzOiBbIGBcbiAgICAgICAgdmctZnVsbHNjcmVlbiB7XG4gICAgICAgICAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZnLWZ1bGxzY3JlZW4gLmljb24ge1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIH1cbiAgICBgIF1cbn0pXG5leHBvcnQgY2xhc3MgVmdGdWxsc2NyZWVuIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIGVsZW06IEhUTUxFbGVtZW50O1xuICAgIHZnRm9yOiBzdHJpbmc7XG4gICAgdGFyZ2V0OiBPYmplY3Q7XG4gICAgaXNGdWxsc2NyZWVuOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gICAgYXJpYVZhbHVlID0gJ25vcm1hbCBtb2RlJztcblxuICAgIGNvbnN0cnVjdG9yKHJlZjogRWxlbWVudFJlZiwgcHVibGljIEFQSTogVmdBUEksIHB1YmxpYyBmc0FQSTogVmdGdWxsc2NyZWVuQVBJKSB7XG4gICAgICAgIHRoaXMuZWxlbSA9IHJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLmZzQVBJLm9uQ2hhbmdlRnVsbHNjcmVlbi5zdWJzY3JpYmUodGhpcy5vbkNoYW5nZUZ1bGxzY3JlZW4uYmluZCh0aGlzKSkpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAodGhpcy5BUEkuaXNQbGF5ZXJSZWFkeSkge1xuICAgICAgICAgICAgdGhpcy5vblBsYXllclJlYWR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLkFQSS5wbGF5ZXJSZWFkeUV2ZW50LnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uUGxheWVyUmVhZHkoKSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25QbGF5ZXJSZWFkeSgpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0aGlzLkFQSS5nZXRNZWRpYUJ5SWQodGhpcy52Z0Zvcik7XG4gICAgfVxuXG4gICAgb25DaGFuZ2VGdWxsc2NyZWVuKGZzU3RhdGU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5hcmlhVmFsdWUgPSBmc1N0YXRlID8gJ2Z1bGxzY3JlbiBtb2RlJyA6ICdub3JtYWwgbW9kZSc7XG4gICAgICAgIHRoaXMuaXNGdWxsc2NyZWVuID0gZnNTdGF0ZTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gICAgb25DbGljaygpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VGdWxsc2NyZWVuU3RhdGUoKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcbiAgICBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgLy8gT24gcHJlc3MgRW50ZXIgKDEzKSBvciBTcGFjZSAoMzIpXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMyB8fCBldmVudC5rZXlDb2RlID09PSAzMikge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlRnVsbHNjcmVlblN0YXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGFuZ2VGdWxsc2NyZWVuU3RhdGUoKSB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gdGhpcy50YXJnZXQ7XG5cbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0IGluc3RhbmNlb2YgVmdBUEkpIHtcbiAgICAgICAgICAgIGVsZW1lbnQgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5mc0FQSS50b2dnbGVGdWxsc2NyZWVuKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaChzID0+IHMudW5zdWJzY3JpYmUoKSk7XG4gICAgfVxufVxuIl19

/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var vg_api_1 = __webpack_require__(337);
var VgMute = (function () {
    function VgMute(ref, API) {
        this.API = API;
        this.subscriptions = [];
        this.ariaValue = 'unmuted';
        this.elem = ref.nativeElement;
    }
    VgMute.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgMute.prototype.onPlayerReady = function () {
        this.target = this.API.getMediaById(this.vgFor);
        this.currentVolume = this.target.volume;
    };
    VgMute.prototype.onClick = function () {
        this.changeMuteState();
    };
    VgMute.prototype.onKeyDown = function (event) {
        // On press Enter (13) or Space (32)
        if (event.keyCode === 13 || event.keyCode === 32) {
            event.preventDefault();
            this.changeMuteState();
        }
    };
    VgMute.prototype.changeMuteState = function () {
        var volume = this.getVolume();
        if (volume === 0) {
            this.target.volume = this.currentVolume;
        }
        else {
            this.currentVolume = volume;
            this.target.volume = 0;
        }
    };
    VgMute.prototype.getVolume = function () {
        var volume = this.target ? this.target.volume : 0;
        this.ariaValue = volume ? 'unmuted' : 'muted';
        return volume;
    };
    VgMute.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgMute.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-mute',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "\n        <div class=\"icon\"\n             [class.vg-icon-volume_up]=\"getVolume() >= 0.75\"\n             [class.vg-icon-volume_down]=\"getVolume() >= 0.25 && getVolume() < 0.75\"\n             [class.vg-icon-volume_mute]=\"getVolume() > 0 && getVolume() < 0.25\"\n             [class.vg-icon-volume_off]=\"getVolume() === 0\"\n             tabindex=\"0\"\n             role=\"button\"\n             aria-label=\"mute button\"\n             [attr.aria-valuetext]=\"ariaValue\">\n        </div>",
                    styles: ["\n        vg-mute {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -khtml-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 50px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n        }\n\n        vg-mute .icon {\n            pointer-events: none;\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    VgMute.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: vg_api_1.VgAPI, },
    ]; };
    VgMute.propDecorators = {
        "vgFor": [{ type: core_1.Input },],
        "onClick": [{ type: core_1.HostListener, args: ['click',] },],
        "onKeyDown": [{ type: core_1.HostListener, args: ['keydown', ['$event'],] },],
    };
    return VgMute;
}());
exports.VgMute = VgMute;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctbXV0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZnLW11dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUg7QUFDakgscURBQW1EOztJQW1EL0MsZ0JBQVksR0FBZSxFQUFTLEdBQVU7UUFBVixRQUFHLEdBQUgsR0FBRyxDQUFPOzZCQUpkLEVBQUU7eUJBRXRCLFNBQVM7UUFHakIsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDO0tBQ2pDO0lBRUQseUJBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTkcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN4QjtRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxhQUFhLEVBQUUsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDLENBQUM7U0FDNUY7S0FDSjtJQUVELDhCQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0tBQzNDO0lBR0Qsd0JBQU87UUFDSCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7O0lBSTNCLDBCQUFTLGFBQUMsS0FBb0I7O1FBRTFCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQzFCOztJQUdMLGdDQUFlLEdBQWY7UUFDSSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFOUIsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQzNDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQztZQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7U0FDMUI7S0FDSjtJQUVELDBCQUFTLEdBQVQ7UUFDSSxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sR0FBRyxTQUFTLEdBQUcsT0FBTyxDQUFDO1FBQzlDLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7SUFFRCw0QkFBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUM7S0FDcEQ7O2dCQW5HSixnQkFBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxTQUFTO29CQUNuQixhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtvQkFDckMsUUFBUSxFQUFFLGlmQVVDO29CQUNYLE1BQU0sRUFBRSxDQUFFLGlpQkFvQlQsQ0FBRTtpQkFDTjs7OztnQkF4QzBCLGlCQUFVO2dCQUM1QixjQUFLOzs7MEJBeUNULFlBQUs7NEJBNEJMLG1CQUFZLFNBQUMsT0FBTzs4QkFLcEIsbUJBQVksU0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7O2lCQTNFdkM7O0FBeUNhLHdCQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZnQVBJIH0gZnJvbSAnLi4vLi4vY29yZS9zZXJ2aWNlcy92Zy1hcGknO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndmctbXV0ZScsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaWNvblwiXG4gICAgICAgICAgICAgW2NsYXNzLnZnLWljb24tdm9sdW1lX3VwXT1cImdldFZvbHVtZSgpID49IDAuNzVcIlxuICAgICAgICAgICAgIFtjbGFzcy52Zy1pY29uLXZvbHVtZV9kb3duXT1cImdldFZvbHVtZSgpID49IDAuMjUgJiYgZ2V0Vm9sdW1lKCkgPCAwLjc1XCJcbiAgICAgICAgICAgICBbY2xhc3MudmctaWNvbi12b2x1bWVfbXV0ZV09XCJnZXRWb2x1bWUoKSA+IDAgJiYgZ2V0Vm9sdW1lKCkgPCAwLjI1XCJcbiAgICAgICAgICAgICBbY2xhc3MudmctaWNvbi12b2x1bWVfb2ZmXT1cImdldFZvbHVtZSgpID09PSAwXCJcbiAgICAgICAgICAgICB0YWJpbmRleD1cIjBcIlxuICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJtdXRlIGJ1dHRvblwiXG4gICAgICAgICAgICAgW2F0dHIuYXJpYS12YWx1ZXRleHRdPVwiYXJpYVZhbHVlXCI+XG4gICAgICAgIDwvZGl2PmAsXG4gICAgc3R5bGVzOiBbIGBcbiAgICAgICAgdmctbXV0ZSB7XG4gICAgICAgICAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZnLW11dGUgLmljb24ge1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIH1cbiAgICBgIF1cbn0pXG5leHBvcnQgY2xhc3MgVmdNdXRlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIEBJbnB1dCgpIHZnRm9yOiBzdHJpbmc7XG4gICAgZWxlbTogSFRNTEVsZW1lbnQ7XG4gICAgdGFyZ2V0OiBhbnk7XG5cbiAgICBjdXJyZW50Vm9sdW1lOiBudW1iZXI7XG5cbiAgICBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gICAgYXJpYVZhbHVlID0gJ3VubXV0ZWQnO1xuXG4gICAgY29uc3RydWN0b3IocmVmOiBFbGVtZW50UmVmLCBwdWJsaWMgQVBJOiBWZ0FQSSkge1xuICAgICAgICB0aGlzLmVsZW0gPSByZWYubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuQVBJLmlzUGxheWVyUmVhZHkpIHtcbiAgICAgICAgICAgIHRoaXMub25QbGF5ZXJSZWFkeSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2godGhpcy5BUEkucGxheWVyUmVhZHlFdmVudC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5vblBsYXllclJlYWR5KCkpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUGxheWVyUmVhZHkoKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGhpcy5BUEkuZ2V0TWVkaWFCeUlkKHRoaXMudmdGb3IpO1xuICAgICAgICB0aGlzLmN1cnJlbnRWb2x1bWUgPSB0aGlzLnRhcmdldC52b2x1bWU7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICAgIG9uQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlTXV0ZVN0YXRlKCk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXG4gICAgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIC8vIE9uIHByZXNzIEVudGVyICgxMykgb3IgU3BhY2UgKDMyKVxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMgfHwgZXZlbnQua2V5Q29kZSA9PT0gMzIpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZU11dGVTdGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hhbmdlTXV0ZVN0YXRlKCkge1xuICAgICAgICBsZXQgdm9sdW1lID0gdGhpcy5nZXRWb2x1bWUoKTtcblxuICAgICAgICBpZiAodm9sdW1lID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC52b2x1bWUgPSB0aGlzLmN1cnJlbnRWb2x1bWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRWb2x1bWUgPSB2b2x1bWU7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC52b2x1bWUgPSAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0Vm9sdW1lKCkge1xuICAgICAgICBjb25zdCB2b2x1bWUgPSB0aGlzLnRhcmdldCA/IHRoaXMudGFyZ2V0LnZvbHVtZSA6IDA7XG4gICAgICAgIHRoaXMuYXJpYVZhbHVlID0gdm9sdW1lID8gJ3VubXV0ZWQnIDogJ211dGVkJztcbiAgICAgICAgcmV0dXJuIHZvbHVtZTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2gocyA9PiBzLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cbn1cbiJdfQ==

/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var vg_api_1 = __webpack_require__(337);
var VgVolume = (function () {
    function VgVolume(ref, API) {
        this.API = API;
        this.subscriptions = [];
        this.elem = ref.nativeElement;
        this.isDragging = false;
    }
    VgVolume.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgVolume.prototype.onPlayerReady = function () {
        this.target = this.API.getMediaById(this.vgFor);
        this.ariaValue = this.getVolume() * 100;
    };
    VgVolume.prototype.onClick = function (event) {
        this.setVolume(this.calculateVolume(event.clientX));
    };
    VgVolume.prototype.onMouseDown = function (event) {
        this.mouseDownPosX = event.clientX;
        this.isDragging = true;
    };
    VgVolume.prototype.onDrag = function (event) {
        if (this.isDragging) {
            this.setVolume(this.calculateVolume(event.clientX));
        }
    };
    VgVolume.prototype.onStopDrag = function (event) {
        if (this.isDragging) {
            this.isDragging = false;
            if (this.mouseDownPosX === event.clientX) {
                this.setVolume(this.calculateVolume(event.clientX));
            }
        }
    };
    VgVolume.prototype.arrowAdjustVolume = function (event) {
        if (event.keyCode === 38 || event.keyCode === 39) {
            event.preventDefault();
            this.setVolume(Math.max(0, Math.min(100, (this.getVolume() * 100) + 10)));
        }
        else if (event.keyCode === 37 || event.keyCode === 40) {
            event.preventDefault();
            this.setVolume(Math.max(0, Math.min(100, (this.getVolume() * 100) - 10)));
        }
    };
    VgVolume.prototype.calculateVolume = function (mousePosX) {
        var recObj = this.volumeBarRef.nativeElement.getBoundingClientRect();
        var volumeBarOffsetLeft = recObj.left;
        var volumeBarWidth = recObj.width;
        return (mousePosX - volumeBarOffsetLeft) / volumeBarWidth * 100;
    };
    VgVolume.prototype.setVolume = function (vol) {
        this.target.volume = Math.max(0, Math.min(1, vol / 100));
        this.ariaValue = this.target.volume * 100;
    };
    VgVolume.prototype.getVolume = function () {
        return this.target ? this.target.volume : 0;
    };
    VgVolume.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgVolume.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-volume',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "\n        <div \n            #volumeBar\n            class=\"volumeBar\"\n            tabindex=\"0\"\n            role=\"slider\"\n            aria-label=\"volume level\"\n            aria-level=\"polite\"\n            [attr.aria-valuenow]=\"ariaValue\"\n            aria-valuemin=\"0\"\n            aria-valuemax=\"100\"\n            [attr.aria-valuetext]=\"ariaValue + '%'\"\n            (click)=\"onClick($event)\"\n            (mousedown)=\"onMouseDown($event)\">\n            <div class=\"volumeBackground\" [ngClass]=\"{dragging: isDragging}\">\n                <div class=\"volumeValue\" [style.width]=\"(getVolume() * (100-15)) + '%'\"></div>\n                <div class=\"volumeKnob\" [style.left]=\"(getVolume() * (100-15)) + '%'\"></div>\n            </div>\n        </div>\n    ",
                    styles: ["\n        vg-volume {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 100px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n        }\n        vg-volume .volumeBar {\n            position: relative;\n            display: flex;\n            flex-grow: 1;\n            align-items: center;\n        }\n        vg-volume .volumeBackground {\n            display: flex;\n            flex-grow: 1;\n            height: 5px;\n            pointer-events: none;\n            background-color: #333;\n        }\n        vg-volume .volumeValue {\n            display: flex;\n            height: 5px;\n            pointer-events: none;\n            background-color: #FFF;\n            transition:all 0.2s ease-out;\n        }\n        vg-volume .volumeKnob {\n            position: absolute;\n            width: 15px; height: 15px;\n            left: 0; top: 50%;\n            transform: translateY(-50%);\n            border-radius: 15px;\n            pointer-events: none;\n            background-color: #FFF;\n            transition:all 0.2s ease-out;\n        }\n        vg-volume .volumeBackground.dragging .volumeValue,\n        vg-volume .volumeBackground.dragging .volumeKnob {\n            transition: none;\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    VgVolume.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: vg_api_1.VgAPI, },
    ]; };
    VgVolume.propDecorators = {
        "vgFor": [{ type: core_1.Input },],
        "volumeBarRef": [{ type: core_1.ViewChild, args: ['volumeBar',] },],
        "onDrag": [{ type: core_1.HostListener, args: ['document:mousemove', ['$event'],] },],
        "onStopDrag": [{ type: core_1.HostListener, args: ['document:mouseup', ['$event'],] },],
        "arrowAdjustVolume": [{ type: core_1.HostListener, args: ['keydown', ['$event'],] },],
    };
    return VgVolume;
}());
exports.VgVolume = VgVolume;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctdm9sdW1lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctdm9sdW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBR3VCO0FBQ3ZCLHFEQUFtRDs7SUF5Ri9DLGtCQUFZLEdBQWUsRUFBUyxHQUFVO1FBQVYsUUFBRyxHQUFILEdBQUcsQ0FBTzs2QkFGZCxFQUFFO1FBRzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQztRQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztLQUMzQjtJQUVELDJCQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5HLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDeEI7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsYUFBYSxFQUFFLEVBQXBCLENBQW9CLENBQUMsQ0FBQyxDQUFDO1NBQzVGO0tBQ0o7SUFFRCxnQ0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsR0FBRyxDQUFDO0tBQzNDO0lBRUQsMEJBQU8sR0FBUCxVQUFRLEtBQTBCO1FBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztLQUN2RDtJQUVELDhCQUFXLEdBQVgsVUFBWSxLQUEwQjtRQUNsQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUss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UUFBUSxFQUFFLFdBQVc7b0JBQ3JCLGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxRQUFRLEVBQUUsd3hCQW1CVDtvQkFDRCxNQUFNLEVBQUUsQ0FBRSxnL0NBaURULENBQUU7aUJBQ047Ozs7Z0JBL0VxQixpQkFBVTtnQkFHdkIsY0FBSzs7OzBCQThFVCxZQUFLO2lDQUNMLGdCQUFTLFNBQUMsV0FBVzsyQkFzQ3JCLG1CQUFZLFNBQUMsb0JBQW9CLEVBQUUsQ0FBRSxRQUFRLENBQUU7K0JBTy9DLG1CQUFZLFNBQUMsa0JBQWtCLEVBQUUsQ0FBRSxRQUFRLENBQUU7c0NBVTdDLG1CQUFZLFNBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDOzttQkExSXZDOztBQWlGYSw0QkFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29tcG9uZW50LCBJbnB1dCwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBWaWV3Q2hpbGQsXG4gICAgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmdBUEkgfSBmcm9tICcuLi8uLi9jb3JlL3NlcnZpY2VzL3ZnLWFwaSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndmctdm9sdW1lJyxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgXG4gICAgICAgICAgICAjdm9sdW1lQmFyXG4gICAgICAgICAgICBjbGFzcz1cInZvbHVtZUJhclwiXG4gICAgICAgICAgICB0YWJpbmRleD1cIjBcIlxuICAgICAgICAgICAgcm9sZT1cInNsaWRlclwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwidm9sdW1lIGxldmVsXCJcbiAgICAgICAgICAgIGFyaWEtbGV2ZWw9XCJwb2xpdGVcIlxuICAgICAgICAgICAgW2F0dHIuYXJpYS12YWx1ZW5vd109XCJhcmlhVmFsdWVcIlxuICAgICAgICAgICAgYXJpYS12YWx1ZW1pbj1cIjBcIlxuICAgICAgICAgICAgYXJpYS12YWx1ZW1heD1cIjEwMFwiXG4gICAgICAgICAgICBbYXR0ci5hcmlhLXZhbHVldGV4dF09XCJhcmlhVmFsdWUgKyAnJSdcIlxuICAgICAgICAgICAgKGNsaWNrKT1cIm9uQ2xpY2soJGV2ZW50KVwiXG4gICAgICAgICAgICAobW91c2Vkb3duKT1cIm9uTW91c2VEb3duKCRldmVudClcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2b2x1bWVCYWNrZ3JvdW5kXCIgW25nQ2xhc3NdPVwie2RyYWdnaW5nOiBpc0RyYWdnaW5nfVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2b2x1bWVWYWx1ZVwiIFtzdHlsZS53aWR0aF09XCIoZ2V0Vm9sdW1lKCkgKiAoMTAwLTE1KSkgKyAnJSdcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidm9sdW1lS25vYlwiIFtzdHlsZS5sZWZ0XT1cIihnZXRWb2x1bWUoKSAqICgxMDAtMTUpKSArICclJ1wiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgc3R5bGVzOiBbIGBcbiAgICAgICAgdmctdm9sdW1lIHtcbiAgICAgICAgICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgfVxuICAgICAgICB2Zy12b2x1bWUgLnZvbHVtZUJhciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICB2Zy12b2x1bWUgLnZvbHVtZUJhY2tncm91bmQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICAgICAgICB9XG4gICAgICAgIHZnLXZvbHVtZSAudm9sdW1lVmFsdWUge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjphbGwgMC4ycyBlYXNlLW91dDtcbiAgICAgICAgfVxuICAgICAgICB2Zy12b2x1bWUgLnZvbHVtZUtub2Ige1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDE1cHg7IGhlaWdodDogMTVweDtcbiAgICAgICAgICAgIGxlZnQ6IDA7IHRvcDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246YWxsIDAuMnMgZWFzZS1vdXQ7XG4gICAgICAgIH1cbiAgICAgICAgdmctdm9sdW1lIC52b2x1bWVCYWNrZ3JvdW5kLmRyYWdnaW5nIC52b2x1bWVWYWx1ZSxcbiAgICAgICAgdmctdm9sdW1lIC52b2x1bWVCYWNrZ3JvdW5kLmRyYWdnaW5nIC52b2x1bWVLbm9iIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG5vbmU7XG4gICAgICAgIH1cbiAgICBgIF1cbn0pXG5leHBvcnQgY2xhc3MgVmdWb2x1bWUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgQElucHV0KCkgdmdGb3I6IHN0cmluZztcbiAgICBAVmlld0NoaWxkKCd2b2x1bWVCYXInKSB2b2x1bWVCYXJSZWY6IEVsZW1lbnRSZWY7XG5cbiAgICBlbGVtOiBIVE1MRWxlbWVudDtcbiAgICB0YXJnZXQ6IGFueTtcbiAgICBpc0RyYWdnaW5nOiBib29sZWFuO1xuICAgIG1vdXNlRG93blBvc1g6IG51bWJlcjtcbiAgICBhcmlhVmFsdWU6IG51bWJlcjtcblxuICAgIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihyZWY6IEVsZW1lbnRSZWYsIHB1YmxpYyBBUEk6IFZnQVBJKSB7XG4gICAgICAgIHRoaXMuZWxlbSA9IHJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuQVBJLmlzUGxheWVyUmVhZHkpIHtcbiAgICAgICAgICAgIHRoaXMub25QbGF5ZXJSZWFkeSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2godGhpcy5BUEkucGxheWVyUmVhZHlFdmVudC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5vblBsYXllclJlYWR5KCkpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUGxheWVyUmVhZHkoKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGhpcy5BUEkuZ2V0TWVkaWFCeUlkKHRoaXMudmdGb3IpO1xuICAgICAgICB0aGlzLmFyaWFWYWx1ZSA9IHRoaXMuZ2V0Vm9sdW1lKCkgKiAxMDA7XG4gICAgfVxuXG4gICAgb25DbGljayhldmVudDogeyBjbGllbnRYOiBudW1iZXIgfSkge1xuICAgICAgICB0aGlzLnNldFZvbHVtZSh0aGlzLmNhbGN1bGF0ZVZvbHVtZShldmVudC5jbGllbnRYKSk7XG4gICAgfVxuXG4gICAgb25Nb3VzZURvd24oZXZlbnQ6IHsgY2xpZW50WDogbnVtYmVyIH0pIHtcbiAgICAgICAgdGhpcy5tb3VzZURvd25Qb3NYID0gZXZlbnQuY2xpZW50WDtcbiAgICAgICAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDptb3VzZW1vdmUnLCBbICckZXZlbnQnIF0pXG4gICAgb25EcmFnKGV2ZW50OiB7IGNsaWVudFg6IG51bWJlciB9KSB7XG4gICAgICAgIGlmICh0aGlzLmlzRHJhZ2dpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Vm9sdW1lKHRoaXMuY2FsY3VsYXRlVm9sdW1lKGV2ZW50LmNsaWVudFgpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50Om1vdXNldXAnLCBbICckZXZlbnQnIF0pXG4gICAgb25TdG9wRHJhZyhldmVudDogeyBjbGllbnRYOiBudW1iZXIgfSkge1xuICAgICAgICBpZiAodGhpcy5pc0RyYWdnaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmICh0aGlzLm1vdXNlRG93blBvc1ggPT09IGV2ZW50LmNsaWVudFgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFZvbHVtZSh0aGlzLmNhbGN1bGF0ZVZvbHVtZShldmVudC5jbGllbnRYKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcbiAgICBhcnJvd0FkanVzdFZvbHVtZShldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzggfHwgZXZlbnQua2V5Q29kZSA9PT0gMzkpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnNldFZvbHVtZShNYXRoLm1heCgwLCBNYXRoLm1pbigxMDAsKHRoaXMuZ2V0Vm9sdW1lKCkgKiAxMDApICsgMTApKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzcgfHwgZXZlbnQua2V5Q29kZSA9PT0gNDApIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnNldFZvbHVtZShNYXRoLm1heCgwLCBNYXRoLm1pbigxMDAsKHRoaXMuZ2V0Vm9sdW1lKCkgKiAxMDApIC0gMTApKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjYWxjdWxhdGVWb2x1bWUobW91c2VQb3NYOiBudW1iZXIpIHtcbiAgICAgICAgY29uc3QgcmVjT2JqID0gdGhpcy52b2x1bWVCYXJSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3Qgdm9sdW1lQmFyT2Zmc2V0TGVmdDogbnVtYmVyID0gcmVjT2JqLmxlZnQ7XG4gICAgICAgIGNvbnN0IHZvbHVtZUJhcldpZHRoOiBudW1iZXIgPSByZWNPYmoud2lkdGg7XG4gICAgICAgIHJldHVybiAobW91c2VQb3NYIC0gdm9sdW1lQmFyT2Zmc2V0TGVmdCkgLyB2b2x1bWVCYXJXaWR0aCAqIDEwMDtcbiAgICB9XG5cbiAgICBzZXRWb2x1bWUodm9sOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy50YXJnZXQudm9sdW1lID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgdm9sIC8gMTAwKSk7XG4gICAgICAgIHRoaXMuYXJpYVZhbHVlID0gdGhpcy50YXJnZXQudm9sdW1lICogMTAwO1xuICAgIH1cblxuICAgIGdldFZvbHVtZSgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy50YXJnZXQgPyB0aGlzLnRhcmdldC52b2x1bWUgOiAwO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaChzID0+IHMudW5zdWJzY3JpYmUoKSk7XG4gICAgfVxufVxuIl19

/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var vg_api_1 = __webpack_require__(337);
var vg_states_1 = __webpack_require__(338);
var VgPlayPause = (function () {
    function VgPlayPause(ref, API) {
        this.API = API;
        this.subscriptions = [];
        this.ariaValue = vg_states_1.VgStates.VG_PAUSED;
        this.elem = ref.nativeElement;
    }
    VgPlayPause.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgPlayPause.prototype.onPlayerReady = function () {
        this.target = this.API.getMediaById(this.vgFor);
    };
    VgPlayPause.prototype.onClick = function () {
        this.playPause();
    };
    VgPlayPause.prototype.onKeyDown = function (event) {
        // On press Enter (13) or Space (32)
        if (event.keyCode === 13 || event.keyCode === 32) {
            event.preventDefault();
            this.playPause();
        }
    };
    VgPlayPause.prototype.playPause = function () {
        var state = this.getState();
        switch (state) {
            case vg_states_1.VgStates.VG_PLAYING:
                this.target.pause();
                break;
            case vg_states_1.VgStates.VG_PAUSED:
            case vg_states_1.VgStates.VG_ENDED:
                this.target.play();
                break;
        }
    };
    VgPlayPause.prototype.getState = function () {
        this.ariaValue = this.target ? this.target.state : vg_states_1.VgStates.VG_PAUSED;
        return this.ariaValue;
    };
    VgPlayPause.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgPlayPause.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-play-pause',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "\n        <div class=\"icon\"\n             [class.vg-icon-pause]=\"getState() === 'playing'\"\n             [class.vg-icon-play_arrow]=\"getState() === 'paused' || getState() === 'ended'\"\n             tabindex=\"0\"\n             role=\"button\"\n             aria-label=\"play pause button\"\n             [attr.aria-valuetext]=\"ariaValue\">\n        </div>",
                    styles: ["\n        vg-play-pause {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -khtml-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 50px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n        }\n\n        vg-play-pause .icon {\n            pointer-events: none;\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    VgPlayPause.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: vg_api_1.VgAPI, },
    ]; };
    VgPlayPause.propDecorators = {
        "vgFor": [{ type: core_1.Input },],
        "onClick": [{ type: core_1.HostListener, args: ['click',] },],
        "onKeyDown": [{ type: core_1.HostListener, args: ['keydown', ['$event'],] },],
    };
    return VgPlayPause;
}());
exports.VgPlayPause = VgPlayPause;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctcGxheS1wYXVzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZnLXBsYXktcGF1c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUg7QUFDakgscURBQW1EO0FBQ25ELHlEQUF1RDs7SUErQ25ELHFCQUFZLEdBQWUsRUFBUyxHQUFVO1FBQVYsUUFBRyxHQUFILEdBQUcsQ0FBTzs2QkFKZCxFQUFFO3lCQUV0QixvQkFBUSxDQUFDLFNBQVM7UUFHMUIsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDO0tBQ2pDO0lBRUQsOEJBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTkcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN4QjtRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxhQUFhLEVBQUUsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDLENBQUM7U0FDNUY7S0FDSjtJQUVELG1DQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNuRDtJQUdELDZCQUFPO1FBQ0gsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDOztJQUlyQiwrQkFBUyxhQUFDLEtBQW9COztRQUUxQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0MsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNwQjs7SUFHTCwrQkFBUyxHQUFUO1FBQ0ksSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRTVCLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDWixLQUFLLG9CQUFRLENBQUMsVUFBVTtnQkFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDcEIsS0FBSyxDQUFDO1lBRVYsS0FBSyxvQkFBUSxDQUFDLFNBQVMsQ0FBQztZQUN4QixLQUFLLG9CQUFRLENBQUMsUUFBUTtnQkFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDbkIsS0FBSyxDQUFDO1NBQ2I7S0FDSjtJQUVELDhCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsb0JBQVEsQ0FBQyxTQUFTLENBQUM7UUFDdEUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDekI7SUFFRCxpQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUM7S0FDcEQ7O2dCQWpHSixnQkFBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxlQUFlO29CQUN6QixhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtvQkFDckMsUUFBUSxFQUFFLDRXQVFDO29CQUNYLE1BQU0sRUFBRSxDQUFFLDZpQkFvQlQsQ0FBRTtpQkFDTjs7OztnQkF0Q21CLGlCQUFVO2dCQUNyQixjQUFLOzs7MEJBdUNULFlBQUs7NEJBMEJMLG1CQUFZLFNBQUMsT0FBTzs4QkFLcEIsbUJBQVksU0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7O3NCQXZFdkM7O0FBdUNhLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIE9uSW5pdCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZnQVBJIH0gZnJvbSAnLi4vLi4vY29yZS9zZXJ2aWNlcy92Zy1hcGknO1xuaW1wb3J0IHsgVmdTdGF0ZXMgfSBmcm9tICcuLi8uLi9jb3JlL3N0YXRlcy92Zy1zdGF0ZXMnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3ZnLXBsYXktcGF1c2UnLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImljb25cIlxuICAgICAgICAgICAgIFtjbGFzcy52Zy1pY29uLXBhdXNlXT1cImdldFN0YXRlKCkgPT09ICdwbGF5aW5nJ1wiXG4gICAgICAgICAgICAgW2NsYXNzLnZnLWljb24tcGxheV9hcnJvd109XCJnZXRTdGF0ZSgpID09PSAncGF1c2VkJyB8fCBnZXRTdGF0ZSgpID09PSAnZW5kZWQnXCJcbiAgICAgICAgICAgICB0YWJpbmRleD1cIjBcIlxuICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJwbGF5IHBhdXNlIGJ1dHRvblwiXG4gICAgICAgICAgICAgW2F0dHIuYXJpYS12YWx1ZXRleHRdPVwiYXJpYVZhbHVlXCI+XG4gICAgICAgIDwvZGl2PmAsXG4gICAgc3R5bGVzOiBbIGBcbiAgICAgICAgdmctcGxheS1wYXVzZSB7XG4gICAgICAgICAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZnLXBsYXktcGF1c2UgLmljb24ge1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIH1cbiAgICBgIF1cbn0pXG5leHBvcnQgY2xhc3MgVmdQbGF5UGF1c2UgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgQElucHV0KCkgdmdGb3I6IHN0cmluZztcblxuICAgIGVsZW06IEhUTUxFbGVtZW50O1xuICAgIHRhcmdldDogYW55O1xuXG4gICAgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICAgIGFyaWFWYWx1ZSA9IFZnU3RhdGVzLlZHX1BBVVNFRDtcblxuICAgIGNvbnN0cnVjdG9yKHJlZjogRWxlbWVudFJlZiwgcHVibGljIEFQSTogVmdBUEkpIHtcbiAgICAgICAgdGhpcy5lbGVtID0gcmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLkFQSS5pc1BsYXllclJlYWR5KSB7XG4gICAgICAgICAgICB0aGlzLm9uUGxheWVyUmVhZHkoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMuQVBJLnBsYXllclJlYWR5RXZlbnQuc3Vic2NyaWJlKCgpID0+IHRoaXMub25QbGF5ZXJSZWFkeSgpKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblBsYXllclJlYWR5KCkge1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRoaXMuQVBJLmdldE1lZGlhQnlJZCh0aGlzLnZnRm9yKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gICAgb25DbGljaygpIHtcbiAgICAgICAgdGhpcy5wbGF5UGF1c2UoKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcbiAgICBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgLy8gT24gcHJlc3MgRW50ZXIgKDEzKSBvciBTcGFjZSAoMzIpXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMyB8fCBldmVudC5rZXlDb2RlID09PSAzMikge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMucGxheVBhdXNlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwbGF5UGF1c2UoKSB7XG4gICAgICAgIGxldCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoKTtcblxuICAgICAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgICAgICBjYXNlIFZnU3RhdGVzLlZHX1BMQVlJTkc6XG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQucGF1c2UoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBWZ1N0YXRlcy5WR19QQVVTRUQ6XG4gICAgICAgICAgICBjYXNlIFZnU3RhdGVzLlZHX0VOREVEOlxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0LnBsYXkoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFN0YXRlKCkge1xuICAgICAgICB0aGlzLmFyaWFWYWx1ZSA9IHRoaXMudGFyZ2V0ID8gdGhpcy50YXJnZXQuc3RhdGUgOiBWZ1N0YXRlcy5WR19QQVVTRUQ7XG4gICAgICAgIHJldHVybiB0aGlzLmFyaWFWYWx1ZTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2gocyA9PiBzLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cbn1cbiJdfQ==

/***/ }),

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var vg_api_1 = __webpack_require__(337);
var VgPlaybackButton = (function () {
    function VgPlaybackButton(ref, API) {
        this.API = API;
        this.subscriptions = [];
        this.ariaValue = 1;
        this.elem = ref.nativeElement;
        this.playbackValues = ['0.5', '1.0', '1.5', '2.0'];
        this.playbackIndex = 1;
    }
    VgPlaybackButton.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgPlaybackButton.prototype.onPlayerReady = function () {
        this.target = this.API.getMediaById(this.vgFor);
    };
    VgPlaybackButton.prototype.onClick = function () {
        this.updatePlaybackSpeed();
    };
    VgPlaybackButton.prototype.onKeyDown = function (event) {
        // On press Enter (13) or Space (32)
        if (event.keyCode === 13 || event.keyCode === 32) {
            event.preventDefault();
            this.updatePlaybackSpeed();
        }
    };
    VgPlaybackButton.prototype.updatePlaybackSpeed = function () {
        this.playbackIndex = ++this.playbackIndex % this.playbackValues.length;
        if (this.target instanceof vg_api_1.VgAPI) {
            this.target.playbackRate = (this.playbackValues[this.playbackIndex]);
        }
        else {
            this.target.playbackRate[this.vgFor] = (this.playbackValues[this.playbackIndex]);
        }
    };
    VgPlaybackButton.prototype.getPlaybackRate = function () {
        this.ariaValue = this.target ? this.target.playbackRate : 1.0;
        return this.ariaValue;
    };
    VgPlaybackButton.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgPlaybackButton.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-playback-button',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "\n    <span class=\"button\"\n          tabindex=\"0\"\n          role=\"button\"\n          aria-label=\"playback speed button\"\n          [attr.aria-valuetext]=\"ariaValue\">\n        {{getPlaybackRate()}}x\n    </span>",
                    styles: ["\n        vg-playback-button {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 50px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n        }\n\n        vg-playback-button .button {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            width: 50px;\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    VgPlaybackButton.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: vg_api_1.VgAPI, },
    ]; };
    VgPlaybackButton.propDecorators = {
        "vgFor": [{ type: core_1.Input },],
        "playbackValues": [{ type: core_1.Input },],
        "onClick": [{ type: core_1.HostListener, args: ['click',] },],
        "onKeyDown": [{ type: core_1.HostListener, args: ['keydown', ['$event'],] },],
    };
    return VgPlaybackButton;
}());
exports.VgPlaybackButton = VgPlaybackButton;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctcGxheWJhY2stYnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctcGxheWJhY2stYnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlIO0FBQ2pILHFEQUFtRDs7SUFvRC9DLDBCQUFZLEdBQWUsRUFBUyxHQUFVO1FBQVYsUUFBRyxHQUFILEdBQUcsQ0FBTzs2QkFKZCxFQUFFO3lCQUV0QixDQUFDO1FBR1QsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDO1FBQzlCLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUUsQ0FBQztRQUNyRCxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztLQUMxQjtJQUVELG1DQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5HLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDeEI7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsYUFBYSxFQUFFLEVBQXBCLENBQW9CLENBQUMsQ0FBQyxDQUFDO1NBQzVGO0tBQ0o7SUFFRCx3Q0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbkQ7SUFHRCxrQ0FBTztRQUNILElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDOztJQUkvQixvQ0FBUyxhQUFDLEtBQW9COztRQUUxQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0MsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1NBQzlCOztJQUdMLDhDQUFtQixHQUFuQjtRQUNJLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDO1FBRXZFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLFlBQVksY0FBSyxDQUFDLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBRSxDQUFDLENBQUM7U0FDMUU7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFFLElBQUksQ0FBQyxLQUFLLENBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBRSxDQUFDLENBQUM7U0FDeEY7S0FDSjtJQUVELDBDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO1FBQzlELE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0tBQ3pCO0lBRUQsc0NBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDO0tBQ3BEOztnQkFwR0osZ0JBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtvQkFDckMsUUFBUSxFQUFFLGdPQU9GO29CQUNSLE1BQU0sRUFBRSxDQUFFLHFyQkF1QlQsQ0FBRTtpQkFDTjs7OztnQkF2QzBCLGlCQUFVO2dCQUM1QixjQUFLOzs7MEJBd0NULFlBQUs7bUNBS0wsWUFBSzs0QkEwQkwsbUJBQVksU0FBQyxPQUFPOzhCQUtwQixtQkFBWSxTQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7MkJBN0V2Qzs7QUF3Q2EsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZnQVBJIH0gZnJvbSAnLi4vLi4vY29yZS9zZXJ2aWNlcy92Zy1hcGknO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3ZnLXBsYXliYWNrLWJ1dHRvbicsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxzcGFuIGNsYXNzPVwiYnV0dG9uXCJcbiAgICAgICAgICB0YWJpbmRleD1cIjBcIlxuICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJwbGF5YmFjayBzcGVlZCBidXR0b25cIlxuICAgICAgICAgIFthdHRyLmFyaWEtdmFsdWV0ZXh0XT1cImFyaWFWYWx1ZVwiPlxuICAgICAgICB7e2dldFBsYXliYWNrUmF0ZSgpfX14XG4gICAgPC9zcGFuPmAsXG4gICAgc3R5bGVzOiBbIGBcbiAgICAgICAgdmctcGxheWJhY2stYnV0dG9uIHtcbiAgICAgICAgICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICB9XG5cbiAgICAgICAgdmctcGxheWJhY2stYnV0dG9uIC5idXR0b24ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICB9XG4gICAgYCBdXG59KVxuZXhwb3J0IGNsYXNzIFZnUGxheWJhY2tCdXR0b24gaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgQElucHV0KCkgdmdGb3I6IHN0cmluZztcblxuICAgIGVsZW06IEhUTUxFbGVtZW50O1xuICAgIHRhcmdldDogYW55O1xuXG4gICAgQElucHV0KCkgcGxheWJhY2tWYWx1ZXM6IEFycmF5PHN0cmluZz47XG4gICAgcGxheWJhY2tJbmRleDogbnVtYmVyO1xuXG4gICAgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICAgIGFyaWFWYWx1ZSA9IDE7XG5cbiAgICBjb25zdHJ1Y3RvcihyZWY6IEVsZW1lbnRSZWYsIHB1YmxpYyBBUEk6IFZnQVBJKSB7XG4gICAgICAgIHRoaXMuZWxlbSA9IHJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLnBsYXliYWNrVmFsdWVzID0gWyAnMC41JywgJzEuMCcsICcxLjUnLCAnMi4wJyBdO1xuICAgICAgICB0aGlzLnBsYXliYWNrSW5kZXggPSAxO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAodGhpcy5BUEkuaXNQbGF5ZXJSZWFkeSkge1xuICAgICAgICAgICAgdGhpcy5vblBsYXllclJlYWR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLkFQSS5wbGF5ZXJSZWFkeUV2ZW50LnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uUGxheWVyUmVhZHkoKSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25QbGF5ZXJSZWFkeSgpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0aGlzLkFQSS5nZXRNZWRpYUJ5SWQodGhpcy52Z0Zvcik7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICAgIG9uQ2xpY2soKSB7XG4gICAgICAgIHRoaXMudXBkYXRlUGxheWJhY2tTcGVlZCgpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKVxuICAgIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICAvLyBPbiBwcmVzcyBFbnRlciAoMTMpIG9yIFNwYWNlICgzMilcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzIHx8IGV2ZW50LmtleUNvZGUgPT09IDMyKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQbGF5YmFja1NwZWVkKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVQbGF5YmFja1NwZWVkKCkge1xuICAgICAgICB0aGlzLnBsYXliYWNrSW5kZXggPSArK3RoaXMucGxheWJhY2tJbmRleCAlIHRoaXMucGxheWJhY2tWYWx1ZXMubGVuZ3RoO1xuXG4gICAgICAgIGlmICh0aGlzLnRhcmdldCBpbnN0YW5jZW9mIFZnQVBJKSB7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC5wbGF5YmFja1JhdGUgPSAodGhpcy5wbGF5YmFja1ZhbHVlc1sgdGhpcy5wbGF5YmFja0luZGV4IF0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50YXJnZXQucGxheWJhY2tSYXRlWyB0aGlzLnZnRm9yIF0gPSAodGhpcy5wbGF5YmFja1ZhbHVlc1sgdGhpcy5wbGF5YmFja0luZGV4IF0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UGxheWJhY2tSYXRlKCkge1xuICAgICAgICB0aGlzLmFyaWFWYWx1ZSA9IHRoaXMudGFyZ2V0ID8gdGhpcy50YXJnZXQucGxheWJhY2tSYXRlIDogMS4wO1xuICAgICAgICByZXR1cm4gdGhpcy5hcmlhVmFsdWU7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKHMgPT4gcy51bnN1YnNjcmliZSgpKTtcbiAgICB9XG59XG4iXX0=

/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var vg_api_1 = __webpack_require__(337);
var vg_controls_hidden_1 = __webpack_require__(339);
var vg_states_1 = __webpack_require__(338);
var VgScrubBar = (function () {
    function VgScrubBar(ref, API, vgControlsHiddenState) {
        var _this = this;
        this.API = API;
        this.hideScrubBar = false;
        this.vgSlider = true;
        this.isSeeking = false;
        this.wasPlaying = false;
        this.subscriptions = [];
        this.elem = ref.nativeElement;
        this.subscriptions.push(vgControlsHiddenState.isHidden.subscribe(function (hide) { return _this.onHideScrubBar(hide); }));
    }
    VgScrubBar.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgScrubBar.prototype.onPlayerReady = function () {
        this.target = this.API.getMediaById(this.vgFor);
    };
    VgScrubBar.prototype.seekStart = function () {
        if (this.target.canPlay) {
            this.isSeeking = true;
            if (this.target.state === vg_states_1.VgStates.VG_PLAYING) {
                this.wasPlaying = true;
            }
            this.target.pause();
        }
    };
    VgScrubBar.prototype.seekMove = function (offset) {
        if (this.isSeeking) {
            var percentage = Math.max(Math.min(offset * 100 / this.elem.scrollWidth, 99.9), 0);
            this.target.time.current = percentage * this.target.time.total / 100;
            this.target.seekTime(percentage, true);
        }
    };
    VgScrubBar.prototype.seekEnd = function (offset) {
        this.isSeeking = false;
        if (this.target.canPlay) {
            var percentage = Math.max(Math.min(offset * 100 / this.elem.scrollWidth, 99.9), 0);
            this.target.seekTime(percentage, true);
            if (this.wasPlaying) {
                this.wasPlaying = false;
                this.target.play();
            }
        }
    };
    VgScrubBar.prototype.touchEnd = function () {
        this.isSeeking = false;
        if (this.wasPlaying) {
            this.wasPlaying = false;
            this.target.play();
        }
    };
    VgScrubBar.prototype.getTouchOffset = function (event) {
        var offsetLeft = 0;
        var element = event.target;
        while (element) {
            offsetLeft += element.offsetLeft;
            element = element.offsetParent;
        }
        return event.touches[0].pageX - offsetLeft;
    };
    VgScrubBar.prototype.onMouseDownScrubBar = function ($event) {
        if (!this.target.isLive) {
            if (!this.vgSlider) {
                this.seekEnd($event.offsetX);
            }
            else {
                this.seekStart();
            }
        }
    };
    VgScrubBar.prototype.onMouseMoveScrubBar = function ($event) {
        if (!this.target.isLive && this.vgSlider && this.isSeeking) {
            this.seekMove($event.offsetX);
        }
    };
    VgScrubBar.prototype.onMouseOutScrubBar = function ($event) {
        if (!this.target.isLive && this.vgSlider && this.isSeeking) {
            this.seekEnd($event.offsetX);
        }
    };
    VgScrubBar.prototype.onMouseUpScrubBar = function ($event) {
        if (!this.target.isLive && this.vgSlider) {
            this.seekEnd($event.offsetX);
        }
    };
    VgScrubBar.prototype.onTouchStartScrubBar = function ($event) {
        if (!this.target.isLive) {
            if (!this.vgSlider) {
                this.seekEnd(this.getTouchOffset($event));
            }
            else {
                this.seekStart();
            }
        }
    };
    VgScrubBar.prototype.onTouchMoveScrubBar = function ($event) {
        if (!this.target.isLive && this.vgSlider && this.isSeeking) {
            this.seekMove(this.getTouchOffset($event));
        }
    };
    VgScrubBar.prototype.onTouchCancelScrubBar = function ($event) {
        if (!this.target.isLive && this.vgSlider) {
            this.touchEnd();
        }
    };
    VgScrubBar.prototype.onTouchEndScrubBar = function ($event) {
        if (!this.target.isLive && this.vgSlider) {
            this.touchEnd();
        }
    };
    VgScrubBar.prototype.onTouchLeaveScrubBar = function ($event) {
        if (!this.target.isLive && this.vgSlider) {
            this.touchEnd();
        }
    };
    VgScrubBar.prototype.arrowAdjustVolume = function (event) {
        if (event.keyCode === 38 || event.keyCode === 39) {
            event.preventDefault();
            this.target.seekTime((this.target.time.current + 5000) / 1000, false);
        }
        else if (event.keyCode === 37 || event.keyCode === 40) {
            event.preventDefault();
            this.target.seekTime((this.target.time.current - 5000) / 1000, false);
        }
    };
    VgScrubBar.prototype.getPercentage = function () {
        return this.target ? ((this.target.time.current * 100) / this.target.time.total) + '%' : '0%';
    };
    VgScrubBar.prototype.onHideScrubBar = function (hide) {
        this.hideScrubBar = hide;
    };
    VgScrubBar.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgScrubBar.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-scrub-bar',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "\n        <div class=\"scrubBar\"\n             tabindex=\"0\"\n             role=\"slider\"\n             aria-label=\"scrub bar\"\n             aria-level=\"polite\"\n             [attr.aria-valuenow]=\"getPercentage()\"\n             aria-valuemin=\"0\"\n             aria-valuemax=\"100\"\n             [attr.aria-valuetext]=\"getPercentage() + '%'\">\n            <ng-content></ng-content>\n        </div>\n        \n    ",
                    styles: ["\n        vg-scrub-bar {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            position: absolute;\n            width: 100%;\n            height: 5px;\n            bottom: 50px;\n            margin: 0;\n            cursor: pointer;\n            align-items: center;\n            background: rgba(0, 0, 0, 0.75);\n            z-index: 250;\n            -webkit-transition: bottom 1s, opacity 0.5s;\n            -khtml-transition: bottom 1s, opacity 0.5s;\n            -moz-transition: bottom 1s, opacity 0.5s;\n            -ms-transition: bottom 1s, opacity 0.5s;\n            transition: bottom 1s, opacity 0.5s;\n        }\n        \n        vg-scrub-bar .scrubBar {\n            position: relative;\n            display: flex;\n            flex-grow: 1;\n            align-items: center;\n            height: 100%;\n        }\n\n        vg-controls vg-scrub-bar {\n            position: relative;\n            bottom: 0;\n            background: transparent;\n            height: 50px;\n            flex-grow: 1;\n            flex-basis: 0;\n            margin: 0 10px;\n            -webkit-transition: initial;\n            -khtml-transition: initial;\n            -moz-transition: initial;\n            -ms-transition: initial;\n            transition: initial;\n        }\n\n        vg-scrub-bar.hide {\n            bottom: 0;\n            opacity: 0;\n        }\n\n        vg-controls vg-scrub-bar.hide {\n            bottom: initial;\n            opacity: initial;\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    VgScrubBar.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: vg_api_1.VgAPI, },
        { type: vg_controls_hidden_1.VgControlsHidden, },
    ]; };
    VgScrubBar.propDecorators = {
        "hideScrubBar": [{ type: core_1.HostBinding, args: ['class.hide',] },],
        "vgFor": [{ type: core_1.Input },],
        "vgSlider": [{ type: core_1.Input },],
        "onMouseDownScrubBar": [{ type: core_1.HostListener, args: ['mousedown', ['$event'],] },],
        "onMouseMoveScrubBar": [{ type: core_1.HostListener, args: ['mousemove', ['$event'],] },],
        "onMouseOutScrubBar": [{ type: core_1.HostListener, args: ['mouseout', ['$event'],] },],
        "onMouseUpScrubBar": [{ type: core_1.HostListener, args: ['mouseup', ['$event'],] },],
        "onTouchStartScrubBar": [{ type: core_1.HostListener, args: ['touchstart', ['$event'],] },],
        "onTouchMoveScrubBar": [{ type: core_1.HostListener, args: ['touchmove', ['$event'],] },],
        "onTouchCancelScrubBar": [{ type: core_1.HostListener, args: ['touchcancel', ['$event'],] },],
        "onTouchEndScrubBar": [{ type: core_1.HostListener, args: ['touchend', ['$event'],] },],
        "onTouchLeaveScrubBar": [{ type: core_1.HostListener, args: ['touchleave', ['$event'],] },],
        "arrowAdjustVolume": [{ type: core_1.HostListener, args: ['keydown', ['$event'],] },],
    };
    return VgScrubBar;
}());
exports.VgScrubBar = VgScrubBar;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctc2NydWItYmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctc2NydWItYmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBR3VCO0FBQ3ZCLHFEQUFtRDtBQUNuRCwrRUFBNEU7QUFDNUUseURBQXVEOztJQTBGbkQsb0JBQVksR0FBZSxFQUFTLEdBQVUsRUFBRSxxQkFBdUM7UUFBdkYsaUJBR0M7UUFIbUMsUUFBRyxHQUFILEdBQUcsQ0FBTzs0QkFaSyxLQUFLO3dCQUczQixJQUFJO3lCQUlaLEtBQUs7MEJBQ0osS0FBSzs2QkFFSyxFQUFFO1FBRzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQztRQUM5QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDLENBQUM7S0FDeEc7SUFFRCw2QkFBUSxHQUFSO1FBQUEsaUJBT0M7UUFORyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGFBQWEsRUFBRSxFQUFwQixDQUFvQixDQUFDLENBQUMsQ0FBQztTQUM1RjtLQUNKO0lBRUQsa0NBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ25EO0lBRVMsOEJBQVMsR0FBbkI7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QVEsQ0FBRTt3Q0FZdEMsbUJBQVksU0FBQyxXQUFXLEVBQUUsQ0FBRSxRQUFRLENBQUU7dUNBT3RDLG1CQUFZLFNBQUMsVUFBVSxFQUFFLENBQUUsUUFBUSxDQUFFO3NDQU9yQyxtQkFBWSxTQUFDLFNBQVMsRUFBRSxDQUFFLFFBQVEsQ0FBRTt5Q0FPcEMsbUJBQVksU0FBQyxZQUFZLEVBQUUsQ0FBRSxRQUFRLENBQUU7d0NBWXZDLG1CQUFZLFNBQUMsV0FBVyxFQUFFLENBQUUsUUFBUSxDQUFFOzBDQU90QyxtQkFBWSxTQUFDLGFBQWEsRUFBRSxDQUFFLFFBQVEsQ0FBRTt1Q0FPeEMsbUJBQVksU0FBQyxVQUFVLEVBQUUsQ0FBRSxRQUFRLENBQUU7eUNBT3JDLG1CQUFZLFNBQUMsWUFBWSxFQUFFLENBQUUsUUFBUSxDQUFFO3NDQU92QyxtQkFBWSxTQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7cUJBM092Qzs7QUFtRmEsZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIEhvc3RMaXN0ZW5lciwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiwgSG9zdEJpbmRpbmcsXG4gICAgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmdBUEkgfSBmcm9tICcuLi8uLi9jb3JlL3NlcnZpY2VzL3ZnLWFwaSc7XG5pbXBvcnQgeyBWZ0NvbnRyb2xzSGlkZGVuIH0gZnJvbSAnLi8uLi8uLi9jb3JlL3NlcnZpY2VzL3ZnLWNvbnRyb2xzLWhpZGRlbic7XG5pbXBvcnQgeyBWZ1N0YXRlcyB9IGZyb20gJy4uLy4uL2NvcmUvc3RhdGVzL3ZnLXN0YXRlcyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndmctc2NydWItYmFyJyxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzY3J1YkJhclwiXG4gICAgICAgICAgICAgdGFiaW5kZXg9XCIwXCJcbiAgICAgICAgICAgICByb2xlPVwic2xpZGVyXCJcbiAgICAgICAgICAgICBhcmlhLWxhYmVsPVwic2NydWIgYmFyXCJcbiAgICAgICAgICAgICBhcmlhLWxldmVsPVwicG9saXRlXCJcbiAgICAgICAgICAgICBbYXR0ci5hcmlhLXZhbHVlbm93XT1cImdldFBlcmNlbnRhZ2UoKVwiXG4gICAgICAgICAgICAgYXJpYS12YWx1ZW1pbj1cIjBcIlxuICAgICAgICAgICAgIGFyaWEtdmFsdWVtYXg9XCIxMDBcIlxuICAgICAgICAgICAgIFthdHRyLmFyaWEtdmFsdWV0ZXh0XT1cImdldFBlcmNlbnRhZ2UoKSArICclJ1wiPlxuICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgYCxcbiAgICBzdHlsZXM6IFsgYFxuICAgICAgICB2Zy1zY3J1Yi1iYXIge1xuICAgICAgICAgICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICBib3R0b206IDUwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgICAgICAgICAgIHotaW5kZXg6IDI1MDtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYm90dG9tIDFzLCBvcGFjaXR5IDAuNXM7XG4gICAgICAgICAgICAta2h0bWwtdHJhbnNpdGlvbjogYm90dG9tIDFzLCBvcGFjaXR5IDAuNXM7XG4gICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGJvdHRvbSAxcywgb3BhY2l0eSAwLjVzO1xuICAgICAgICAgICAgLW1zLXRyYW5zaXRpb246IGJvdHRvbSAxcywgb3BhY2l0eSAwLjVzO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYm90dG9tIDFzLCBvcGFjaXR5IDAuNXM7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHZnLXNjcnViLWJhciAuc2NydWJCYXIge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICB2Zy1jb250cm9scyB2Zy1zY3J1Yi1iYXIge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICBmbGV4LWJhc2lzOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGluaXRpYWw7XG4gICAgICAgICAgICAta2h0bWwtdHJhbnNpdGlvbjogaW5pdGlhbDtcbiAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogaW5pdGlhbDtcbiAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBpbml0aWFsO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogaW5pdGlhbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZnLXNjcnViLWJhci5oaWRlIHtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cblxuICAgICAgICB2Zy1jb250cm9scyB2Zy1zY3J1Yi1iYXIuaGlkZSB7XG4gICAgICAgICAgICBib3R0b206IGluaXRpYWw7XG4gICAgICAgICAgICBvcGFjaXR5OiBpbml0aWFsO1xuICAgICAgICB9XG4gICAgYCBdXG59KVxuZXhwb3J0IGNsYXNzIFZnU2NydWJCYXIgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5oaWRlJykgaGlkZVNjcnViQmFyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBASW5wdXQoKSB2Z0Zvcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHZnU2xpZGVyOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIGVsZW06IEhUTUxFbGVtZW50O1xuICAgIHRhcmdldDogYW55O1xuICAgIGlzU2Vla2luZzogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHdhc1BsYXlpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihyZWY6IEVsZW1lbnRSZWYsIHB1YmxpYyBBUEk6IFZnQVBJLCB2Z0NvbnRyb2xzSGlkZGVuU3RhdGU6IFZnQ29udHJvbHNIaWRkZW4pIHtcbiAgICAgICAgdGhpcy5lbGVtID0gcmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHZnQ29udHJvbHNIaWRkZW5TdGF0ZS5pc0hpZGRlbi5zdWJzY3JpYmUoaGlkZSA9PiB0aGlzLm9uSGlkZVNjcnViQmFyKGhpZGUpKSk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLkFQSS5pc1BsYXllclJlYWR5KSB7XG4gICAgICAgICAgICB0aGlzLm9uUGxheWVyUmVhZHkoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMuQVBJLnBsYXllclJlYWR5RXZlbnQuc3Vic2NyaWJlKCgpID0+IHRoaXMub25QbGF5ZXJSZWFkeSgpKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblBsYXllclJlYWR5KCkge1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRoaXMuQVBJLmdldE1lZGlhQnlJZCh0aGlzLnZnRm9yKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2Vla1N0YXJ0KCkge1xuICAgICAgICBpZiAodGhpcy50YXJnZXQuY2FuUGxheSkge1xuICAgICAgICAgICAgdGhpcy5pc1NlZWtpbmcgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHRoaXMudGFyZ2V0LnN0YXRlID09PSBWZ1N0YXRlcy5WR19QTEFZSU5HKSB7XG4gICAgICAgICAgICAgICAgdGhpcy53YXNQbGF5aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnBhdXNlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2Vla01vdmUob2Zmc2V0OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTZWVraW5nKSB7XG4gICAgICAgICAgICBsZXQgcGVyY2VudGFnZSA9IE1hdGgubWF4KE1hdGgubWluKG9mZnNldCAqIDEwMCAvIHRoaXMuZWxlbS5zY3JvbGxXaWR0aCwgOTkuOSksIDApO1xuICAgICAgICAgICAgdGhpcy50YXJnZXQudGltZS5jdXJyZW50ID0gcGVyY2VudGFnZSAqIHRoaXMudGFyZ2V0LnRpbWUudG90YWwgLyAxMDA7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC5zZWVrVGltZShwZXJjZW50YWdlLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZWVrRW5kKG9mZnNldDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuaXNTZWVraW5nID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLnRhcmdldC5jYW5QbGF5KSB7XG4gICAgICAgICAgICBsZXQgcGVyY2VudGFnZSA9IE1hdGgubWF4KE1hdGgubWluKG9mZnNldCAqIDEwMCAvIHRoaXMuZWxlbS5zY3JvbGxXaWR0aCwgOTkuOSksIDApO1xuICAgICAgICAgICAgdGhpcy50YXJnZXQuc2Vla1RpbWUocGVyY2VudGFnZSwgdHJ1ZSk7XG4gICAgICAgICAgICBpZiAodGhpcy53YXNQbGF5aW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy53YXNQbGF5aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQucGxheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHRvdWNoRW5kKCkge1xuICAgICAgICB0aGlzLmlzU2Vla2luZyA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy53YXNQbGF5aW5nKSB7XG4gICAgICAgICAgICB0aGlzLndhc1BsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnBsYXkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZXRUb3VjaE9mZnNldChldmVudDogYW55KSB7XG4gICAgICAgIGxldCBvZmZzZXRMZWZ0OiBudW1iZXIgPSAwO1xuICAgICAgICBsZXQgZWxlbWVudDogYW55ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICB3aGlsZSAoZWxlbWVudCkge1xuICAgICAgICAgICAgb2Zmc2V0TGVmdCArPSBlbGVtZW50Lm9mZnNldExlZnQ7XG4gICAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5vZmZzZXRQYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV2ZW50LnRvdWNoZXNbIDAgXS5wYWdlWCAtIG9mZnNldExlZnQ7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignbW91c2Vkb3duJywgWyAnJGV2ZW50JyBdKVxuICAgIG9uTW91c2VEb3duU2NydWJCYXIoJGV2ZW50OiBhbnkpIHtcbiAgICAgICAgaWYgKCF0aGlzLnRhcmdldC5pc0xpdmUpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy52Z1NsaWRlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vla0VuZCgkZXZlbnQub2Zmc2V0WCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlZWtTdGFydCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignbW91c2Vtb3ZlJywgWyAnJGV2ZW50JyBdKVxuICAgIG9uTW91c2VNb3ZlU2NydWJCYXIoJGV2ZW50OiBhbnkpIHtcbiAgICAgICAgaWYgKCF0aGlzLnRhcmdldC5pc0xpdmUgJiYgdGhpcy52Z1NsaWRlciAmJiB0aGlzLmlzU2Vla2luZykge1xuICAgICAgICAgICAgdGhpcy5zZWVrTW92ZSgkZXZlbnQub2Zmc2V0WCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdtb3VzZW91dCcsIFsgJyRldmVudCcgXSlcbiAgICBvbk1vdXNlT3V0U2NydWJCYXIoJGV2ZW50OiBhbnkpIHtcbiAgICAgICAgaWYgKCF0aGlzLnRhcmdldC5pc0xpdmUgJiYgdGhpcy52Z1NsaWRlciAmJiB0aGlzLmlzU2Vla2luZykge1xuICAgICAgICAgICAgdGhpcy5zZWVrRW5kKCRldmVudC5vZmZzZXRYKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNldXAnLCBbICckZXZlbnQnIF0pXG4gICAgb25Nb3VzZVVwU2NydWJCYXIoJGV2ZW50OiBhbnkpIHtcbiAgICAgICAgaWYgKCF0aGlzLnRhcmdldC5pc0xpdmUgJiYgdGhpcy52Z1NsaWRlcikge1xuICAgICAgICAgICAgdGhpcy5zZWVrRW5kKCRldmVudC5vZmZzZXRYKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBbICckZXZlbnQnIF0pXG4gICAgb25Ub3VjaFN0YXJ0U2NydWJCYXIoJGV2ZW50OiBhbnkpIHtcbiAgICAgICAgaWYgKCF0aGlzLnRhcmdldC5pc0xpdmUpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy52Z1NsaWRlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vla0VuZCh0aGlzLmdldFRvdWNoT2Zmc2V0KCRldmVudCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWVrU3RhcnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ3RvdWNobW92ZScsIFsgJyRldmVudCcgXSlcbiAgICBvblRvdWNoTW92ZVNjcnViQmFyKCRldmVudDogYW55KSB7XG4gICAgICAgIGlmICghdGhpcy50YXJnZXQuaXNMaXZlICYmIHRoaXMudmdTbGlkZXIgJiYgdGhpcy5pc1NlZWtpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuc2Vla01vdmUodGhpcy5nZXRUb3VjaE9mZnNldCgkZXZlbnQpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgWyAnJGV2ZW50JyBdKVxuICAgIG9uVG91Y2hDYW5jZWxTY3J1YkJhcigkZXZlbnQ6IGFueSkge1xuICAgICAgICBpZiAoIXRoaXMudGFyZ2V0LmlzTGl2ZSAmJiB0aGlzLnZnU2xpZGVyKSB7XG4gICAgICAgICAgICB0aGlzLnRvdWNoRW5kKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCd0b3VjaGVuZCcsIFsgJyRldmVudCcgXSlcbiAgICBvblRvdWNoRW5kU2NydWJCYXIoJGV2ZW50OiBhbnkpIHtcbiAgICAgICAgaWYgKCF0aGlzLnRhcmdldC5pc0xpdmUgJiYgdGhpcy52Z1NsaWRlcikge1xuICAgICAgICAgICAgdGhpcy50b3VjaEVuZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcigndG91Y2hsZWF2ZScsIFsgJyRldmVudCcgXSlcbiAgICBvblRvdWNoTGVhdmVTY3J1YkJhcigkZXZlbnQ6IGFueSkge1xuICAgICAgICBpZiAoIXRoaXMudGFyZ2V0LmlzTGl2ZSAmJiB0aGlzLnZnU2xpZGVyKSB7XG4gICAgICAgICAgICB0aGlzLnRvdWNoRW5kKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcbiAgICBhcnJvd0FkanVzdFZvbHVtZShldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzggfHwgZXZlbnQua2V5Q29kZSA9PT0gMzkpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC5zZWVrVGltZSgodGhpcy50YXJnZXQudGltZS5jdXJyZW50ICsgNTAwMCkgLyAxMDAwLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzcgfHwgZXZlbnQua2V5Q29kZSA9PT0gNDApIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC5zZWVrVGltZSgodGhpcy50YXJnZXQudGltZS5jdXJyZW50IC0gNTAwMCkgLyAxMDAwLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRQZXJjZW50YWdlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50YXJnZXQgPyAoKHRoaXMudGFyZ2V0LnRpbWUuY3VycmVudCAqIDEwMCkgLyB0aGlzLnRhcmdldC50aW1lLnRvdGFsKSArICclJyA6ICcwJSc7XG4gICAgfVxuXG4gICAgb25IaWRlU2NydWJCYXIoaGlkZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmhpZGVTY3J1YkJhciA9IGhpZGU7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKHMgPT4gcy51bnN1YnNjcmliZSgpKTtcbiAgICB9XG59XG4iXX0=

/***/ }),

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var vg_api_1 = __webpack_require__(337);
var VgScrubBarBufferingTime = (function () {
    function VgScrubBarBufferingTime(ref, API) {
        this.API = API;
        this.subscriptions = [];
        this.elem = ref.nativeElement;
    }
    VgScrubBarBufferingTime.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgScrubBarBufferingTime.prototype.onPlayerReady = function () {
        this.target = this.API.getMediaById(this.vgFor);
    };
    VgScrubBarBufferingTime.prototype.getBufferTime = function () {
        var bufferTime = "0%";
        if (this.target && this.target.buffer && this.target.buffered.length) {
            if (this.target.time.total === 0) {
                bufferTime = '0%';
            }
            else {
                bufferTime = ((this.target.buffer.end / this.target.time.total) * 100) + '%';
            }
        }
        return bufferTime;
    };
    VgScrubBarBufferingTime.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgScrubBarBufferingTime.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-scrub-bar-buffering-time',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "<div class=\"background\" [style.width]=\"getBufferTime()\"></div>",
                    styles: ["\n        vg-scrub-bar-buffering-time {\n            display: flex;\n            width: 100%;\n            height: 5px;\n            pointer-events: none;\n            position: absolute;\n        }\n\n        vg-scrub-bar-buffering-time .background {\n            background-color: rgba(255, 255, 255, 0.3);\n        }\n\n        vg-controls vg-scrub-bar-buffering-time {\n            position: absolute;\n            top: calc(50% - 3px);\n        }\n\n        vg-controls vg-scrub-bar-buffering-time .background {\n            -webkit-border-radius: 2px;\n            -moz-border-radius: 2px;\n            border-radius: 2px;\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    VgScrubBarBufferingTime.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: vg_api_1.VgAPI, },
    ]; };
    VgScrubBarBufferingTime.propDecorators = {
        "vgFor": [{ type: core_1.Input },],
    };
    return VgScrubBarBufferingTime;
}());
exports.VgScrubBarBufferingTime = VgScrubBarBufferingTime;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctc2NydWItYmFyLWJ1ZmZlcmluZy10aW1lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctc2NydWItYmFyLWJ1ZmZlcmluZy10aW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW1HO0FBQ25HLHdEQUFzRDs7SUF3Q2xELGlDQUFZLEdBQWUsRUFBUyxHQUFVO1FBQVYsUUFBRyxHQUFILEdBQUcsQ0FBTzs2QkFGZCxFQUFFO1FBRzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQztLQUNqQztJQUVELDBDQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5HLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDeEI7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsYUFBYSxFQUFFLEVBQXBCLENBQW9CLENBQUMsQ0FBQyxDQUFDO1NBQzVGO0tBQ0o7SUFFRCwrQ0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbkQ7SUFFRCwrQ0FBYSxHQUFiO1FBQ0ksSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBRXRCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNuRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDL0IsVUFBVSxHQUFHLElBQUksQ0FBQzthQUNyQjtZQUNELElBQUksQ0FBQyxDQUFDO2dCQUNGLFVBQVUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQzthQUNoRjtTQUNKO1FBRUQsTUFBTSxDQUFDLFVBQVUsQ0FBQztLQUNyQjtJQUVELDZDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQztLQUNwRDs7Z0JBdkVKLGdCQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLDZCQUE2QjtvQkFDdkMsYUFBYSxFQUFFLHdCQUFpQixDQUFDLElBQUk7b0JBQ3JDLFFBQVEsRUFBRSxvRUFBZ0U7b0JBQzFFLE1BQU0sRUFBRSxDQUFFLHVvQkF1QlQsQ0FBRTtpQkFDTjs7OztnQkFoQzBCLGlCQUFVO2dCQUM1QixjQUFLOzs7MEJBaUNULFlBQUs7O2tDQWxDVjs7QUFpQ2EsMERBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWZ0FQSSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc2VydmljZXMvdmctYXBpJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd2Zy1zY3J1Yi1iYXItYnVmZmVyaW5nLXRpbWUnLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiYmFja2dyb3VuZFwiIFtzdHlsZS53aWR0aF09XCJnZXRCdWZmZXJUaW1lKClcIj48L2Rpdj5gLFxuICAgIHN0eWxlczogWyBgXG4gICAgICAgIHZnLXNjcnViLWJhci1idWZmZXJpbmctdGltZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmctc2NydWItYmFyLWJ1ZmZlcmluZy10aW1lIC5iYWNrZ3JvdW5kIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZnLWNvbnRyb2xzIHZnLXNjcnViLWJhci1idWZmZXJpbmctdGltZSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IGNhbGMoNTAlIC0gM3B4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZnLWNvbnRyb2xzIHZnLXNjcnViLWJhci1idWZmZXJpbmctdGltZSAuYmFja2dyb3VuZCB7XG4gICAgICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICB9XG4gICAgYCBdXG59KVxuZXhwb3J0IGNsYXNzIFZnU2NydWJCYXJCdWZmZXJpbmdUaW1lIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIEBJbnB1dCgpIHZnRm9yOiBzdHJpbmc7XG5cbiAgICBlbGVtOiBIVE1MRWxlbWVudDtcbiAgICB0YXJnZXQ6IGFueTtcblxuICAgIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihyZWY6IEVsZW1lbnRSZWYsIHB1YmxpYyBBUEk6IFZnQVBJKSB7XG4gICAgICAgIHRoaXMuZWxlbSA9IHJlZi5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAodGhpcy5BUEkuaXNQbGF5ZXJSZWFkeSkge1xuICAgICAgICAgICAgdGhpcy5vblBsYXllclJlYWR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLkFQSS5wbGF5ZXJSZWFkeUV2ZW50LnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uUGxheWVyUmVhZHkoKSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25QbGF5ZXJSZWFkeSgpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0aGlzLkFQSS5nZXRNZWRpYUJ5SWQodGhpcy52Z0Zvcik7XG4gICAgfVxuXG4gICAgZ2V0QnVmZmVyVGltZSgpIHtcbiAgICAgICAgbGV0IGJ1ZmZlclRpbWUgPSBcIjAlXCI7XG5cbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0ICYmIHRoaXMudGFyZ2V0LmJ1ZmZlciAmJiB0aGlzLnRhcmdldC5idWZmZXJlZC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRhcmdldC50aW1lLnRvdGFsID09PSAwKSB7XG4gICAgICAgICAgICAgICAgYnVmZmVyVGltZSA9ICcwJSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBidWZmZXJUaW1lID0gKCh0aGlzLnRhcmdldC5idWZmZXIuZW5kIC8gdGhpcy50YXJnZXQudGltZS50b3RhbCkgKiAxMDApICsgJyUnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJ1ZmZlclRpbWU7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKHMgPT4gcy51bnN1YnNjcmliZSgpKTtcbiAgICB9XG59XG4iXX0=

/***/ }),

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var vg_api_1 = __webpack_require__(337);
var VgScrubBarCuePoints = (function () {
    function VgScrubBarCuePoints(ref, API) {
        this.API = API;
        this.onLoadedMetadataCalled = false;
        this.cuePoints = [];
        this.subscriptions = [];
        this.totalCues = 0;
        this.elem = ref.nativeElement;
    }
    VgScrubBarCuePoints.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgScrubBarCuePoints.prototype.onPlayerReady = function () {
        this.target = this.API.getMediaById(this.vgFor);
        var onTimeUpdate = this.target.subscriptions.loadedMetadata;
        this.subscriptions.push(onTimeUpdate.subscribe(this.onLoadedMetadata.bind(this)));
        if (this.onLoadedMetadataCalled) {
            this.onLoadedMetadata();
        }
    };
    VgScrubBarCuePoints.prototype.onLoadedMetadata = function () {
        if (this.vgCuePoints) {
            // We need to transform the TextTrackCueList to Array or it doesn't work on IE11/Edge.
            // See: https://github.com/videogular/videogular2/issues/369
            this.cuePoints = [];
            for (var i = 0, l = this.vgCuePoints.length; i < l; i++) {
                var end = (this.vgCuePoints[i].endTime >= 0) ? this.vgCuePoints[i].endTime : this.vgCuePoints[i].startTime + 1;
                var cuePointDuration = (end - this.vgCuePoints[i].startTime) * 1000;
                var position = '0';
                var percentWidth = '0';
                if (typeof cuePointDuration === 'number' && this.target.time.total) {
                    percentWidth = ((cuePointDuration * 100) / this.target.time.total) + "%";
                    position = (this.vgCuePoints[i].startTime * 100 / (Math.round(this.target.time.total / 1000))) + "%";
                }
                this.vgCuePoints[i].$$style = {
                    width: percentWidth,
                    left: position
                };
                this.cuePoints.push(this.vgCuePoints[i]);
            }
        }
    };
    VgScrubBarCuePoints.prototype.updateCuePoints = function () {
        if (!this.target) {
            this.onLoadedMetadataCalled = true;
            return;
        }
        this.onLoadedMetadata();
    };
    VgScrubBarCuePoints.prototype.ngOnChanges = function (changes) {
        if (changes['vgCuePoints'].currentValue) {
            this.updateCuePoints();
        }
    };
    VgScrubBarCuePoints.prototype.ngDoCheck = function () {
        if (this.vgCuePoints) {
            var changes = this.totalCues !== this.vgCuePoints.length;
            if (changes) {
                this.totalCues = this.vgCuePoints.length;
                this.updateCuePoints();
            }
        }
    };
    VgScrubBarCuePoints.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgScrubBarCuePoints.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-scrub-bar-cue-points',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "\n        <div class=\"cue-point-container\">\n            <span *ngFor=\"let cp of cuePoints\" [style.width]=\"cp.$$style?.width\" [style.left]=\"cp.$$style?.left\"\n                  class=\"cue-point\"></span>\n        </div>\n    ",
                    styles: ["\n        vg-scrub-bar-cue-points {\n            display: flex;\n            width: 100%;\n            height: 5px;\n            pointer-events: none;\n            position: absolute;\n        }\n\n        vg-scrub-bar-cue-points .cue-point-container .cue-point {\n            position: absolute;\n            height: 5px;\n            background-color: rgba(255, 204, 0, 0.7);\n        }\n\n        vg-controls vg-scrub-bar-cue-points {\n            position: absolute;\n            top: calc(50% - 3px);\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    VgScrubBarCuePoints.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: vg_api_1.VgAPI, },
    ]; };
    VgScrubBarCuePoints.propDecorators = {
        "vgCuePoints": [{ type: core_1.Input },],
        "vgFor": [{ type: core_1.Input },],
    };
    return VgScrubBarCuePoints;
}());
exports.VgScrubBarCuePoints = VgScrubBarCuePoints;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctc2NydWItYmFyLWN1ZS1wb2ludHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2Zy1zY3J1Yi1iYXItY3VlLXBvaW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQVN1QjtBQUN2Qix3REFBc0Q7O0lBOENsRCw2QkFBWSxHQUFlLEVBQVMsR0FBVTtRQUFWLFFBQUcsR0FBSCxHQUFHLENBQU87c0NBUFosS0FBSzt5QkFDZixFQUFFOzZCQUVNLEVBQUU7eUJBRXRCLENBQUM7UUFHVCxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUM7S0FDakM7SUFFRCxzQ0FBUSxHQUFSO1FBQUEsaUJBT0M7UUFORyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGFBQWEsRUFBRSxFQUFwQixDQUFvQixDQUFDLENBQUMsQ0FBQztTQUM1RjtLQUNKO0lBRUQsMkNBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWhELElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQztRQUM1RCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWxGLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxzQkFB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QUM7YUFDMUI7U0FDSjtLQUNKO0lBRUQseUNBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDO0tBQ3BEOztnQkF6SEosZ0JBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtvQkFDckMsUUFBUSxFQUFFLDRPQUtUO29CQUNELE1BQU0sRUFBRSxDQUFFLDRnQkFtQlQsQ0FBRTtpQkFDTjs7OztnQkF4Q0csaUJBQVU7Z0JBUUwsY0FBSzs7O2dDQWtDVCxZQUFLOzBCQUNMLFlBQUs7OzhCQTdDVjs7QUEyQ2Esa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBJbnB1dCxcbiAgICBPbkNoYW5nZXMsXG4gICAgT25EZXN0cm95LFxuICAgIE9uSW5pdCxcbiAgICBTaW1wbGVDaGFuZ2UsXG4gICAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWZ0FQSSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc2VydmljZXMvdmctYXBpJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd2Zy1zY3J1Yi1iYXItY3VlLXBvaW50cycsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY3VlLXBvaW50LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPHNwYW4gKm5nRm9yPVwibGV0IGNwIG9mIGN1ZVBvaW50c1wiIFtzdHlsZS53aWR0aF09XCJjcC4kJHN0eWxlPy53aWR0aFwiIFtzdHlsZS5sZWZ0XT1cImNwLiQkc3R5bGU/LmxlZnRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjdWUtcG9pbnRcIj48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgc3R5bGVzOiBbIGBcbiAgICAgICAgdmctc2NydWItYmFyLWN1ZS1wb2ludHMge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZnLXNjcnViLWJhci1jdWUtcG9pbnRzIC5jdWUtcG9pbnQtY29udGFpbmVyIC5jdWUtcG9pbnQge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjA0LCAwLCAwLjcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmctY29udHJvbHMgdmctc2NydWItYmFyLWN1ZS1wb2ludHMge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDNweCk7XG4gICAgICAgIH1cbiAgICBgIF1cbn0pXG5leHBvcnQgY2xhc3MgVmdTY3J1YkJhckN1ZVBvaW50cyBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICAgIEBJbnB1dCgpIHZnQ3VlUG9pbnRzOiBUZXh0VHJhY2tDdWVMaXN0O1xuICAgIEBJbnB1dCgpIHZnRm9yOiBzdHJpbmc7XG5cbiAgICBlbGVtOiBIVE1MRWxlbWVudDtcbiAgICB0YXJnZXQ6IGFueTtcbiAgICBvbkxvYWRlZE1ldGFkYXRhQ2FsbGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgY3VlUG9pbnRzOiBBcnJheTxhbnk+ID0gW107XG5cbiAgICBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gICAgdG90YWxDdWVzID0gMDtcblxuICAgIGNvbnN0cnVjdG9yKHJlZjogRWxlbWVudFJlZiwgcHVibGljIEFQSTogVmdBUEkpIHtcbiAgICAgICAgdGhpcy5lbGVtID0gcmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLkFQSS5pc1BsYXllclJlYWR5KSB7XG4gICAgICAgICAgICB0aGlzLm9uUGxheWVyUmVhZHkoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMuQVBJLnBsYXllclJlYWR5RXZlbnQuc3Vic2NyaWJlKCgpID0+IHRoaXMub25QbGF5ZXJSZWFkeSgpKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblBsYXllclJlYWR5KCkge1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRoaXMuQVBJLmdldE1lZGlhQnlJZCh0aGlzLnZnRm9yKTtcblxuICAgICAgICBsZXQgb25UaW1lVXBkYXRlID0gdGhpcy50YXJnZXQuc3Vic2NyaXB0aW9ucy5sb2FkZWRNZXRhZGF0YTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2gob25UaW1lVXBkYXRlLnN1YnNjcmliZSh0aGlzLm9uTG9hZGVkTWV0YWRhdGEuYmluZCh0aGlzKSkpO1xuXG4gICAgICAgIGlmICh0aGlzLm9uTG9hZGVkTWV0YWRhdGFDYWxsZWQpIHtcbiAgICAgICAgICAgIHRoaXMub25Mb2FkZWRNZXRhZGF0YSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Mb2FkZWRNZXRhZGF0YSgpIHtcbiAgICAgICAgaWYgKHRoaXMudmdDdWVQb2ludHMpIHtcbiAgICAgICAgICAgIC8vIFdlIG5lZWQgdG8gdHJhbnNmb3JtIHRoZSBUZXh0VHJhY2tDdWVMaXN0IHRvIEFycmF5IG9yIGl0IGRvZXNuJ3Qgd29yayBvbiBJRTExL0VkZ2UuXG4gICAgICAgICAgICAvLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS92aWRlb2d1bGFyL3ZpZGVvZ3VsYXIyL2lzc3Vlcy8zNjlcbiAgICAgICAgICAgIHRoaXMuY3VlUG9pbnRzID0gW107XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gdGhpcy52Z0N1ZVBvaW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgZW5kID0gKHRoaXMudmdDdWVQb2ludHNbIGkgXS5lbmRUaW1lID49IDApID8gdGhpcy52Z0N1ZVBvaW50c1sgaSBdLmVuZFRpbWUgOiB0aGlzLnZnQ3VlUG9pbnRzWyBpIF0uc3RhcnRUaW1lICsgMTtcbiAgICAgICAgICAgICAgICBsZXQgY3VlUG9pbnREdXJhdGlvbiA9IChlbmQgLSB0aGlzLnZnQ3VlUG9pbnRzWyBpIF0uc3RhcnRUaW1lKSAqIDEwMDA7XG4gICAgICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0gJzAnO1xuICAgICAgICAgICAgICAgIGxldCBwZXJjZW50V2lkdGggPSAnMCc7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGN1ZVBvaW50RHVyYXRpb24gPT09ICdudW1iZXInICYmIHRoaXMudGFyZ2V0LnRpbWUudG90YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgcGVyY2VudFdpZHRoID0gKChjdWVQb2ludER1cmF0aW9uICogMTAwKSAvIHRoaXMudGFyZ2V0LnRpbWUudG90YWwpICsgXCIlXCI7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gKHRoaXMudmdDdWVQb2ludHNbIGkgXS5zdGFydFRpbWUgKiAxMDAgLyAoTWF0aC5yb3VuZCh0aGlzLnRhcmdldC50aW1lLnRvdGFsIC8gMTAwMCkpKSArIFwiJVwiO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICg8YW55PnRoaXMudmdDdWVQb2ludHNbIGkgXSkuJCRzdHlsZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHBlcmNlbnRXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogcG9zaXRpb25cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdWVQb2ludHMucHVzaCh0aGlzLnZnQ3VlUG9pbnRzWyBpIF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlQ3VlUG9pbnRzKCkge1xuICAgICAgICBpZiAoIXRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLm9uTG9hZGVkTWV0YWRhdGFDYWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub25Mb2FkZWRNZXRhZGF0YSgpO1xuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW3Byb3BOYW1lOiBzdHJpbmddOiBTaW1wbGVDaGFuZ2UgfSkge1xuICAgICAgICBpZiAoY2hhbmdlc1sgJ3ZnQ3VlUG9pbnRzJyBdLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVDdWVQb2ludHMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nRG9DaGVjaygpIHtcbiAgICAgICAgaWYgKHRoaXMudmdDdWVQb2ludHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoYW5nZXMgPSB0aGlzLnRvdGFsQ3VlcyAhPT0gdGhpcy52Z0N1ZVBvaW50cy5sZW5ndGg7XG5cbiAgICAgICAgICAgIGlmIChjaGFuZ2VzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b3RhbEN1ZXMgPSB0aGlzLnZnQ3VlUG9pbnRzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUN1ZVBvaW50cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKHMgPT4gcy51bnN1YnNjcmliZSgpKTtcbiAgICB9XG59XG4iXX0=

/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var vg_api_1 = __webpack_require__(337);
var VgScrubBarCurrentTime = (function () {
    function VgScrubBarCurrentTime(ref, API) {
        this.API = API;
        this.vgSlider = false;
        this.subscriptions = [];
        this.elem = ref.nativeElement;
    }
    VgScrubBarCurrentTime.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgScrubBarCurrentTime.prototype.onPlayerReady = function () {
        this.target = this.API.getMediaById(this.vgFor);
    };
    VgScrubBarCurrentTime.prototype.getPercentage = function () {
        return this.target ? ((this.target.time.current * 100) / this.target.time.total) + '%' : '0%';
    };
    VgScrubBarCurrentTime.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgScrubBarCurrentTime.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-scrub-bar-current-time',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "<div class=\"background\" [style.width]=\"getPercentage()\"></div><span class=\"slider\" *ngIf=\"vgSlider\"></span>",
                    styles: ["\n        vg-scrub-bar-current-time {\n            display: flex;\n            width: 100%;\n            height: 5px;\n            pointer-events: none;\n            position: absolute;\n        }\n\n        vg-scrub-bar-current-time .background {\n            background-color: white;\n        }\n\n        vg-controls vg-scrub-bar-current-time {\n            position: absolute;\n            top: calc(50% - 3px);\n            -webkit-border-radius: 2px;\n            -moz-border-radius: 2px;\n            border-radius: 2px;\n        }\n\n        vg-controls vg-scrub-bar-current-time .background {\n            border: 1px solid white;\n            -webkit-border-radius: 2px;\n            -moz-border-radius: 2px;\n            border-radius: 2px;\n        }\n        \n        vg-scrub-bar-current-time .slider{\n            background: white;\n            height: 15px;\n            width: 15px;\n            border-radius: 50%;\n            box-shadow: 0px 0px 10px black;\n            margin-top: -5px;\n            margin-left: -10px;\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    VgScrubBarCurrentTime.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: vg_api_1.VgAPI, },
    ]; };
    VgScrubBarCurrentTime.propDecorators = {
        "vgFor": [{ type: core_1.Input },],
        "vgSlider": [{ type: core_1.Input },],
    };
    return VgScrubBarCurrentTime;
}());
exports.VgScrubBarCurrentTime = VgScrubBarCurrentTime;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctc2NydWItYmFyLWN1cnJlbnQtdGltZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZnLXNjcnViLWJhci1jdXJyZW50LXRpbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBbUc7QUFDbkcsd0RBQXNEOztJQXVEbEQsK0JBQVksR0FBZSxFQUFTLEdBQVU7UUFBVixRQUFHLEdBQUgsR0FBRyxDQUFPO3dCQVBqQixLQUFLOzZCQUtGLEVBQUU7UUFHOUIsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDO0tBQ2pDO0lBRUQsd0NBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTkcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN4QjtRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxhQUFhLEVBQUUsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDLENBQUM7U0FDNUY7S0FDSjtJQUVELDZDQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNuRDtJQUVELDZDQUFhLEdBQWI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUM7S0FDakc7SUFFRCwyQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUM7S0FDcEQ7O2dCQTNFSixnQkFBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxRQUFRLEVBQUUscUhBQTZHO29CQUN2SCxNQUFNLEVBQUUsQ0FBRSxzaUNBcUNULENBQUU7aUJBQ047Ozs7Z0JBOUMwQixpQkFBVTtnQkFDNUIsY0FBSzs7OzBCQStDVCxZQUFLOzZCQUNMLFlBQUs7O2dDQWpEVjs7QUErQ2Esc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWZ0FQSSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc2VydmljZXMvdmctYXBpJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvU3Vic2NyaXB0aW9uJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd2Zy1zY3J1Yi1iYXItY3VycmVudC10aW1lJyxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImJhY2tncm91bmRcIiBbc3R5bGUud2lkdGhdPVwiZ2V0UGVyY2VudGFnZSgpXCI+PC9kaXY+PHNwYW4gY2xhc3M9XCJzbGlkZXJcIiAqbmdJZj1cInZnU2xpZGVyXCI+PC9zcGFuPmAsXG4gICAgc3R5bGVzOiBbIGBcbiAgICAgICAgdmctc2NydWItYmFyLWN1cnJlbnQtdGltZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmctc2NydWItYmFyLWN1cnJlbnQtdGltZSAuYmFja2dyb3VuZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZnLWNvbnRyb2xzIHZnLXNjcnViLWJhci1jdXJyZW50LXRpbWUge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiBjYWxjKDUwJSAtIDNweCk7XG4gICAgICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgdmctY29udHJvbHMgdmctc2NydWItYmFyLWN1cnJlbnQtdGltZSAuYmFja2dyb3VuZCB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHZnLXNjcnViLWJhci1jdXJyZW50LXRpbWUgLnNsaWRlcntcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgd2lkdGg6IDE1cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggYmxhY2s7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICAgICAgICB9XG4gICAgYCBdXG59KVxuZXhwb3J0IGNsYXNzIFZnU2NydWJCYXJDdXJyZW50VGltZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBASW5wdXQoKSB2Z0Zvcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHZnU2xpZGVyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBlbGVtOiBIVE1MRWxlbWVudDtcbiAgICB0YXJnZXQ6IGFueTtcblxuICAgIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihyZWY6IEVsZW1lbnRSZWYsIHB1YmxpYyBBUEk6IFZnQVBJKSB7XG4gICAgICAgIHRoaXMuZWxlbSA9IHJlZi5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAodGhpcy5BUEkuaXNQbGF5ZXJSZWFkeSkge1xuICAgICAgICAgICAgdGhpcy5vblBsYXllclJlYWR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLkFQSS5wbGF5ZXJSZWFkeUV2ZW50LnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uUGxheWVyUmVhZHkoKSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25QbGF5ZXJSZWFkeSgpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0aGlzLkFQSS5nZXRNZWRpYUJ5SWQodGhpcy52Z0Zvcik7XG4gICAgfVxuXG4gICAgZ2V0UGVyY2VudGFnZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0ID8gKCh0aGlzLnRhcmdldC50aW1lLmN1cnJlbnQgKiAxMDApIC8gdGhpcy50YXJnZXQudGltZS50b3RhbCkgKyAnJScgOiAnMCUnO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaChzID0+IHMudW5zdWJzY3JpYmUoKSk7XG4gICAgfVxufVxuIl19

/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var vg_api_1 = __webpack_require__(337);
// Workaround until we can use UTC with Angular Date Pipe
var VgUtcPipe = (function () {
    function VgUtcPipe() {
    }
    VgUtcPipe.prototype.transform = function (value, format) {
        var date = new Date(value);
        var result = format;
        var ss = date.getUTCSeconds();
        var mm = date.getUTCMinutes();
        var hh = date.getUTCHours();
        if (ss < 10) {
            ss = '0' + ss;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        if (hh < 10) {
            hh = '0' + hh;
        }
        result = result.replace(/ss/g, ss);
        result = result.replace(/mm/g, mm);
        result = result.replace(/hh/g, hh);
        return result;
    };
    VgUtcPipe.decorators = [
        { type: core_1.Pipe, args: [{ name: 'vgUtc' },] },
    ];
    /** @nocollapse */
    VgUtcPipe.ctorParameters = function () { return []; };
    return VgUtcPipe;
}());
exports.VgUtcPipe = VgUtcPipe;
var VgTimeDisplay = (function () {
    function VgTimeDisplay(ref, API) {
        this.API = API;
        this.vgProperty = 'current';
        this.vgFormat = 'mm:ss';
        this.subscriptions = [];
        this.elem = ref.nativeElement;
    }
    VgTimeDisplay.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgTimeDisplay.prototype.onPlayerReady = function () {
        this.target = this.API.getMediaById(this.vgFor);
    };
    VgTimeDisplay.prototype.getTime = function () {
        var t = 0;
        if (this.target) {
            t = Math.round(this.target.time[this.vgProperty]);
            t = isNaN(t) || this.target.isLive ? 0 : t;
        }
        return t;
    };
    VgTimeDisplay.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgTimeDisplay.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-time-display',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "\n        <span *ngIf=\"target?.isLive\">LIVE</span>\n        <span *ngIf=\"!target?.isLive\">{{ getTime() | vgUtc:vgFormat }}</span>\n        <ng-content></ng-content>\n    ",
                    styles: ["\n        vg-time-display {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 60px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n            pointer-events: none;\n            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    VgTimeDisplay.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: vg_api_1.VgAPI, },
    ]; };
    VgTimeDisplay.propDecorators = {
        "vgFor": [{ type: core_1.Input },],
        "vgProperty": [{ type: core_1.Input },],
        "vgFormat": [{ type: core_1.Input },],
    };
    return VgTimeDisplay;
}());
exports.VgTimeDisplay = VgTimeDisplay;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctdGltZS1kaXNwbGF5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctdGltZS1kaXNwbGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdIO0FBQ3hILHFEQUFtRDs7Ozs7SUFNL0MsNkJBQVMsR0FBVCxVQUFVLEtBQWEsRUFBRSxNQUFjO1FBQ25DLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNwQixJQUFJLEVBQUUsR0FBa0IsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzdDLElBQUksRUFBRSxHQUFrQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDN0MsSUFBSSxFQUFFLEdBQWtCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUUzQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNWLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDO1NBQ2pCO1FBQ0QsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDVixFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQztTQUNqQjtRQUNELEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ1YsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7U0FDakI7UUFFRCxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQVUsRUFBRSxDQUFDLENBQUM7UUFDM0MsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFVLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBVSxFQUFFLENBQUMsQ0FBQztRQUUzQyxNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOztnQkF4QkosV0FBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTs7OztvQkFMdkI7O0FBTWEsOEJBQVM7O0lBK0RsQix1QkFBWSxHQUFlLEVBQVMsR0FBVTtRQUFWLFFBQUcsR0FBSCxHQUFHLENBQU87MEJBUmhCLFNBQVM7d0JBQ1gsT0FBTzs2QkFLSCxFQUFFO1FBRzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQztLQUNqQztJQUVELGdDQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5HLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDeEI7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsYUFBYSxFQUFFLEVBQXBCLENBQW9CLENBQUMsQ0FBQyxDQUFDO1NBQzVGO0tBQ0o7SUFFRCxxQ0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbkQ7SUFFRCwrQkFBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRVYsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDZCxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsVUFBVSxDQUFFLENBQUMsQ0FBQztZQUNwRCxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDOUM7UUFFRCxNQUFNLENBQUMsQ0FBQyxDQUFDO0tBQ1o7SUFFRCxtQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUM7S0FDcEQ7O2dCQW5FSixnQkFBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxRQUFRLEVBQUUsZ0xBSVQ7b0JBQ0QsTUFBTSxFQUFFLENBQUUsb2lCQWlCVCxDQUFFO2lCQUNOOzs7O2dCQTFEMEIsaUJBQVU7Z0JBQzVCLGNBQUs7OzswQkEyRFQsWUFBSzsrQkFDTCxZQUFLOzZCQUNMLFlBQUs7O3dCQTlEVjs7QUEyRGEsc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBFbGVtZW50UmVmLCBPbkluaXQsIFBpcGVUcmFuc2Zvcm0sIFBpcGUsIFZpZXdFbmNhcHN1bGF0aW9uLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZnQVBJIH0gZnJvbSAnLi4vLi4vY29yZS9zZXJ2aWNlcy92Zy1hcGknO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xuXG4vLyBXb3JrYXJvdW5kIHVudGlsIHdlIGNhbiB1c2UgVVRDIHdpdGggQW5ndWxhciBEYXRlIFBpcGVcbkBQaXBlKHsgbmFtZTogJ3ZnVXRjJyB9KVxuZXhwb3J0IGNsYXNzIFZnVXRjUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAgIHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyLCBmb3JtYXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUodmFsdWUpO1xuICAgICAgICBsZXQgcmVzdWx0ID0gZm9ybWF0O1xuICAgICAgICBsZXQgc3M6IHN0cmluZ3xudW1iZXIgPSBkYXRlLmdldFVUQ1NlY29uZHMoKTtcbiAgICAgICAgbGV0IG1tOiBzdHJpbmd8bnVtYmVyID0gZGF0ZS5nZXRVVENNaW51dGVzKCk7XG4gICAgICAgIGxldCBoaDogc3RyaW5nfG51bWJlciA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcblxuICAgICAgICBpZiAoc3MgPCAxMCkge1xuICAgICAgICAgICAgc3MgPSAnMCcgKyBzcztcbiAgICAgICAgfVxuICAgICAgICBpZiAobW0gPCAxMCkge1xuICAgICAgICAgICAgbW0gPSAnMCcgKyBtbTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGggPCAxMCkge1xuICAgICAgICAgICAgaGggPSAnMCcgKyBoaDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKC9zcy9nLCA8c3RyaW5nPnNzKTtcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoL21tL2csIDxzdHJpbmc+bW0pO1xuICAgICAgICByZXN1bHQgPSByZXN1bHQucmVwbGFjZSgvaGgvZywgPHN0cmluZz5oaCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndmctdGltZS1kaXNwbGF5JyxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxzcGFuICpuZ0lmPVwidGFyZ2V0Py5pc0xpdmVcIj5MSVZFPC9zcGFuPlxuICAgICAgICA8c3BhbiAqbmdJZj1cIiF0YXJnZXQ/LmlzTGl2ZVwiPnt7IGdldFRpbWUoKSB8IHZnVXRjOnZnRm9ybWF0IH19PC9zcGFuPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgYCxcbiAgICBzdHlsZXM6IFsgYFxuICAgICAgICB2Zy10aW1lLWRpc3BsYXkge1xuICAgICAgICAgICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuICAgIGAgXVxufSlcbmV4cG9ydCBjbGFzcyBWZ1RpbWVEaXNwbGF5IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIEBJbnB1dCgpIHZnRm9yOiBzdHJpbmc7XG4gICAgQElucHV0KCkgdmdQcm9wZXJ0eTogc3RyaW5nID0gJ2N1cnJlbnQnO1xuICAgIEBJbnB1dCgpIHZnRm9ybWF0OiBzdHJpbmcgPSAnbW06c3MnO1xuXG4gICAgZWxlbTogSFRNTEVsZW1lbnQ7XG4gICAgdGFyZ2V0OiBhbnk7XG5cbiAgICBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IocmVmOiBFbGVtZW50UmVmLCBwdWJsaWMgQVBJOiBWZ0FQSSkge1xuICAgICAgICB0aGlzLmVsZW0gPSByZWYubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuQVBJLmlzUGxheWVyUmVhZHkpIHtcbiAgICAgICAgICAgIHRoaXMub25QbGF5ZXJSZWFkeSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2godGhpcy5BUEkucGxheWVyUmVhZHlFdmVudC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5vblBsYXllclJlYWR5KCkpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUGxheWVyUmVhZHkoKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGhpcy5BUEkuZ2V0TWVkaWFCeUlkKHRoaXMudmdGb3IpO1xuICAgIH1cblxuICAgIGdldFRpbWUoKSB7XG4gICAgICAgIGxldCB0ID0gMDtcblxuICAgICAgICBpZiAodGhpcy50YXJnZXQpIHtcbiAgICAgICAgICAgIHQgPSBNYXRoLnJvdW5kKHRoaXMudGFyZ2V0LnRpbWVbIHRoaXMudmdQcm9wZXJ0eSBdKTtcbiAgICAgICAgICAgIHQgPSBpc05hTih0KSB8fCB0aGlzLnRhcmdldC5pc0xpdmUgPyAwIDogdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0O1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaChzID0+IHMudW5zdWJzY3JpYmUoKSk7XG4gICAgfVxufVxuIl19

/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var vg_api_1 = __webpack_require__(337);
var VgTrackSelector = (function () {
    function VgTrackSelector(ref, API) {
        this.API = API;
        this.subscriptions = [];
        this.elem = ref.nativeElement;
    }
    VgTrackSelector.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgTrackSelector.prototype.onPlayerReady = function () {
        this.target = this.API.getMediaById(this.vgFor);
        var subs = Array.from(this.API.getMasterMedia().elem.children)
            .filter(function (item) { return item.tagName === 'TRACK'; })
            .filter(function (item) { return item.kind === 'subtitles'; })
            .map(function (item) {
            return ({
                label: item.label,
                selected: item.default === true,
                id: item.srclang
            });
        });
        this.tracks = subs.concat([
            {
                id: null,
                label: 'Off',
                selected: subs.every(function (item) { return item.selected === false; })
            }
        ]);
        var track = this.tracks.filter(function (item) { return item.selected === true; })[0];
        this.trackSelected = track.id;
        this.ariaValue = track.label;
    };
    VgTrackSelector.prototype.selectTrack = function (trackId) {
        var _this = this;
        this.trackSelected = (trackId === 'null') ? null : trackId;
        this.ariaValue = 'No track selected';
        Array.from(this.API.getMasterMedia().elem.textTracks)
            .forEach(function (item) {
            if (item.language === trackId) {
                _this.ariaValue = item.label;
                item.mode = 'showing';
            }
            else {
                item.mode = 'hidden';
            }
        });
    };
    VgTrackSelector.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgTrackSelector.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-track-selector',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "\n        <div class=\"container\">\n            <div class=\"track-selected\"\n                 [class.vg-icon-closed_caption]=\"!trackSelected\">\n                {{ trackSelected || '' }}\n            </div>\n            \n            <select class=\"trackSelector\" \n                    (change)=\"selectTrack($event.target.value)\"\n                    tabindex=\"0\"\n                    aria-label=\"track selector\"\n                    [attr.aria-valuetext]=\"ariaValue\">\n                <option \n                    *ngFor=\"let track of tracks\"\n                    [value]=\"track.id\"\n                    [selected]=\"track.selected === true\">\n                    {{ track.label }}\n                </option>\n            </select>\n        </div>\n    ",
                    styles: ["\n        vg-track-selector {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            width: 50px;\n            height: 50px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n        }\n        vg-track-selector .container {\n            position: relative;\n            display: flex;\n            flex-grow: 1;\n            align-items: center;\n            \n            padding: 0;\n            margin: 5px;\n        }\n        vg-track-selector select.trackSelector {\n            width: 50px;\n            padding: 5px 8px;\n            border: none;\n            background: none;\n            -webkit-appearance: none;\n            -moz-appearance: none;\n            appearance: none;\n            color: transparent;\n            font-size: 16px;\n        }\n        vg-track-selector .track-selected {\n            position: absolute;\n            width: 100%;\n            height: 50px;\n            top: -6px;\n            text-align: center;\n            text-transform: uppercase;\n            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n            padding-top: 2px;\n            pointer-events: none;\n        }\n        vg-track-selector .vg-icon-closed_caption:before {\n            width: 100%;\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    VgTrackSelector.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: vg_api_1.VgAPI, },
    ]; };
    VgTrackSelector.propDecorators = {
        "vgFor": [{ type: core_1.Input },],
    };
    return VgTrackSelector;
}());
exports.VgTrackSelector = VgTrackSelector;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctdHJhY2stc2VsZWN0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2Zy10cmFjay1zZWxlY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFtRztBQUNuRyxxREFBbUQ7O0lBZ0cvQyx5QkFBWSxHQUFlLEVBQVMsR0FBVTtRQUFWLFFBQUcsR0FBSCxHQUFHLENBQU87NkJBSmQsRUFBRTtRQUs5QixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUM7S0FDakM7SUFFRCxrQ0FBUSxHQUFSO1FBQUEsaUJBT0M7UUFORyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGFBQWEsRUFBRSxFQUFwQixDQUFvQixDQUFDLENBQUMsQ0FBQztTQUM1RjtLQUNKO0lBRUQsdUNBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWhELElBQU0sSUFBSSxHQUFrQixLQUFLLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBeUIsQ0FBQyxRQUFRLENBQUM7YUFDaEcsTUFBTSxDQUFDLFVBQUMsSUFBaUIsSUFBSyxPQUFBLElBQUksQ0FBQyxPQUFPLEtBQUssT0FBTyxFQUF4QixDQUF3QixDQUFDO2FBQ3ZELE1BQU0sQ0FBQyxVQUFDLElBQXNCLElBQUssT0FBQSxJQUFJLENBQUMsSUFBSSxLQUFLLFdBQVcsRUFBekIsQ0FBeUIsQ0FBQzthQUM3RCxHQUFHLENBQUMsVUFBQyxJQUFzQjtZQUFLLE9BQUEsQ0FBQztnQkFDOUIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO2dCQUNqQixRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sS0FBSyxJQUFJO2dCQUMvQixFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU87YUFDbkIsQ0FBQztRQUorQixDQUkvQixDQUFDLENBQUM7UUFFUixJQUFJLENBQUMsTUFBTSxHQUNKLElBQUk7WUFDUDtnQkFDSSxFQUFFLEVBQUUsSUFBSTtnQkFDUixLQUFLLEVBQUUsS0FBSztnQkFDWixRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFDLElBQVksSUFBSyxPQUFBLElBQUksQ0FBQyxRQUFRLEtBQUssS0FBSyxFQUF2QixDQUF1QixDQUFDO2FBQ2xFO1VBQ0osQ0FBQztRQUVGLElBQU0sS0FBSyxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBWSxJQUFLLE9BQUEsSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQXRCLENBQXNCLENBQUMsQ0FBRSxDQUFDLENBQUUsQ0FBQztRQUN4RixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO0tBQ2hDO0lBRUQscUNBQVcsR0FBWCxVQUFZLE9BQWU7UUFBM0IsaUJBY0M7UUFiRyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsT0FBTyxLQUFLLE1BQU0sQ0FBQyxHQUFHLElBQUksR0FBRyxPQUFPLENBQUM7UUFFM0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxtQkFBbUIsQ0FBQztRQUVyQyxLQUFLLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBeUIsQ0FBQyxVQUFVLENBQUM7YUFDdEUsT0FBTyxDQUFDLFVBQUMsSUFBZTtZQUNyQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUM7YUFDekI7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQzthQUN4QjtTQUNKLENBQUMsQ0FBQztLQUNWO0lBRUQscUNBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDO0tBQ3BEOztnQkFoSkosZ0JBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtvQkFDckMsUUFBUSxFQUFFLHd3QkFvQlQ7b0JBQ0QsTUFBTSxFQUFFLENBQUUsNDlDQWlEVCxDQUFFO2lCQUNOOzs7O2dCQXBGbUIsaUJBQVU7Z0JBQ3JCLGNBQUs7OzswQkFxRlQsWUFBSzs7MEJBdEZWOztBQXFGYSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmdBUEkgfSBmcm9tICcuLi8uLi9jb3JlL3NlcnZpY2VzL3ZnLWFwaSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgT3B0aW9uIHtcbiAgICBpZDogc3RyaW5nO1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgc2VsZWN0ZWQ6IGJvb2xlYW47XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndmctdHJhY2stc2VsZWN0b3InLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRyYWNrLXNlbGVjdGVkXCJcbiAgICAgICAgICAgICAgICAgW2NsYXNzLnZnLWljb24tY2xvc2VkX2NhcHRpb25dPVwiIXRyYWNrU2VsZWN0ZWRcIj5cbiAgICAgICAgICAgICAgICB7eyB0cmFja1NlbGVjdGVkIHx8ICcnIH19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cInRyYWNrU2VsZWN0b3JcIiBcbiAgICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJzZWxlY3RUcmFjaygkZXZlbnQudGFyZ2V0LnZhbHVlKVwiXG4gICAgICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiMFwiXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJ0cmFjayBzZWxlY3RvclwiXG4gICAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtdmFsdWV0ZXh0XT1cImFyaWFWYWx1ZVwiPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gXG4gICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCB0cmFjayBvZiB0cmFja3NcIlxuICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwidHJhY2suaWRcIlxuICAgICAgICAgICAgICAgICAgICBbc2VsZWN0ZWRdPVwidHJhY2suc2VsZWN0ZWQgPT09IHRydWVcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgdHJhY2subGFiZWwgfX1cbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHN0eWxlczogWyBgXG4gICAgICAgIHZnLXRyYWNrLXNlbGVjdG9yIHtcbiAgICAgICAgICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgICB9XG4gICAgICAgIHZnLXRyYWNrLXNlbGVjdG9yIC5jb250YWluZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgfVxuICAgICAgICB2Zy10cmFjay1zZWxlY3RvciBzZWxlY3QudHJhY2tTZWxlY3RvciB7XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCA4cHg7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuICAgICAgICB2Zy10cmFjay1zZWxlY3RvciAudHJhY2stc2VsZWN0ZWQge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICB0b3A6IC02cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDJweDtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIHZnLXRyYWNrLXNlbGVjdG9yIC52Zy1pY29uLWNsb3NlZF9jYXB0aW9uOmJlZm9yZSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIGAgXVxufSlcbmV4cG9ydCBjbGFzcyBWZ1RyYWNrU2VsZWN0b3IgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgQElucHV0KCkgdmdGb3I6IHN0cmluZztcblxuICAgIGVsZW06IEhUTUxFbGVtZW50O1xuICAgIHRhcmdldDogYW55O1xuICAgIHRyYWNrczogQXJyYXk8T3B0aW9uPjtcbiAgICB0cmFja1NlbGVjdGVkOiBzdHJpbmc7XG5cbiAgICBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gICAgYXJpYVZhbHVlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihyZWY6IEVsZW1lbnRSZWYsIHB1YmxpYyBBUEk6IFZnQVBJKSB7XG4gICAgICAgIHRoaXMuZWxlbSA9IHJlZi5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAodGhpcy5BUEkuaXNQbGF5ZXJSZWFkeSkge1xuICAgICAgICAgICAgdGhpcy5vblBsYXllclJlYWR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLkFQSS5wbGF5ZXJSZWFkeUV2ZW50LnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uUGxheWVyUmVhZHkoKSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25QbGF5ZXJSZWFkeSgpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0aGlzLkFQSS5nZXRNZWRpYUJ5SWQodGhpcy52Z0Zvcik7XG5cbiAgICAgICAgY29uc3Qgc3ViczogQXJyYXk8T3B0aW9uPiA9IEFycmF5LmZyb20oKHRoaXMuQVBJLmdldE1hc3Rlck1lZGlhKCkuZWxlbSBhcyBIVE1MTWVkaWFFbGVtZW50KS5jaGlsZHJlbilcbiAgICAgICAgICAgIC5maWx0ZXIoKGl0ZW06IEhUTUxFbGVtZW50KSA9PiBpdGVtLnRhZ05hbWUgPT09ICdUUkFDSycpXG4gICAgICAgICAgICAuZmlsdGVyKChpdGVtOiBIVE1MVHJhY2tFbGVtZW50KSA9PiBpdGVtLmtpbmQgPT09ICdzdWJ0aXRsZXMnKVxuICAgICAgICAgICAgLm1hcCgoaXRlbTogSFRNTFRyYWNrRWxlbWVudCkgPT4gKHtcbiAgICAgICAgICAgICAgICBsYWJlbDogaXRlbS5sYWJlbCxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogaXRlbS5kZWZhdWx0ID09PSB0cnVlLFxuICAgICAgICAgICAgICAgIGlkOiBpdGVtLnNyY2xhbmdcbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICB0aGlzLnRyYWNrcyA9IFtcbiAgICAgICAgICAgIC4uLnN1YnMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdPZmYnLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBzdWJzLmV2ZXJ5KChpdGVtOiBPcHRpb24pID0+IGl0ZW0uc2VsZWN0ZWQgPT09IGZhbHNlKVxuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuXG4gICAgICAgIGNvbnN0IHRyYWNrOiBPcHRpb24gPSB0aGlzLnRyYWNrcy5maWx0ZXIoKGl0ZW06IE9wdGlvbikgPT4gaXRlbS5zZWxlY3RlZCA9PT0gdHJ1ZSlbIDAgXTtcbiAgICAgICAgdGhpcy50cmFja1NlbGVjdGVkID0gdHJhY2suaWQ7XG4gICAgICAgIHRoaXMuYXJpYVZhbHVlID0gdHJhY2subGFiZWw7XG4gICAgfVxuXG4gICAgc2VsZWN0VHJhY2sodHJhY2tJZDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudHJhY2tTZWxlY3RlZCA9ICh0cmFja0lkID09PSAnbnVsbCcpID8gbnVsbCA6IHRyYWNrSWQ7XG5cbiAgICAgICAgdGhpcy5hcmlhVmFsdWUgPSAnTm8gdHJhY2sgc2VsZWN0ZWQnO1xuXG4gICAgICAgIEFycmF5LmZyb20oKHRoaXMuQVBJLmdldE1hc3Rlck1lZGlhKCkuZWxlbSBhcyBIVE1MTWVkaWFFbGVtZW50KS50ZXh0VHJhY2tzKVxuICAgICAgICAgICAgLmZvckVhY2goKGl0ZW06IFRleHRUcmFjaykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmxhbmd1YWdlID09PSB0cmFja0lkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXJpYVZhbHVlID0gaXRlbS5sYWJlbDtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5tb2RlID0gJ3Nob3dpbmcnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ubW9kZSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaChzID0+IHMudW5zdWJzY3JpYmUoKSk7XG4gICAgfVxufVxuIl19

/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(386));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1wbGF5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib3ZlcmxheS1wbGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEscURBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi9zcmMvb3ZlcmxheS1wbGF5L292ZXJsYXktcGxheSc7XG4iXX0=

/***/ }),

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(39);
var vg_overlay_play_1 = __webpack_require__(387);
var VgOverlayPlayModule = (function () {
    function VgOverlayPlayModule() {
    }
    VgOverlayPlayModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: [
                        vg_overlay_play_1.VgOverlayPlay
                    ],
                    exports: [
                        vg_overlay_play_1.VgOverlayPlay
                    ]
                },] },
    ];
    /** @nocollapse */
    VgOverlayPlayModule.ctorParameters = function () { return []; };
    return VgOverlayPlayModule;
}());
exports.VgOverlayPlayModule = VgOverlayPlayModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1wbGF5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib3ZlcmxheS1wbGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQThDO0FBQzlDLDBDQUErQztBQUUvQyxxREFBZ0Q7Ozs7O2dCQUUvQyxlQUFRLFNBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUUscUJBQVksQ0FBRTtvQkFDekIsWUFBWSxFQUFFO3dCQUNWLCtCQUFhO3FCQUNoQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsK0JBQWE7cUJBQ2hCO2lCQUNKOzs7OzhCQWJEOztBQWNhLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7VmdPdmVybGF5UGxheX0gZnJvbSAnLi92Zy1vdmVybGF5LXBsYXknO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFsgQ29tbW9uTW9kdWxlIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFZnT3ZlcmxheVBsYXlcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgVmdPdmVybGF5UGxheVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgVmdPdmVybGF5UGxheU1vZHVsZSB7fVxuIl19

/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var vg_api_1 = __webpack_require__(337);
var vg_states_1 = __webpack_require__(338);
var vg_fullscreen_api_1 = __webpack_require__(341);
var vg_controls_hidden_1 = __webpack_require__(339);
var VgOverlayPlay = (function () {
    function VgOverlayPlay(ref, API, fsAPI, controlsHidden) {
        this.API = API;
        this.fsAPI = fsAPI;
        this.controlsHidden = controlsHidden;
        this.isNativeFullscreen = false;
        this.areControlsHidden = false;
        this.subscriptions = [];
        this.isBuffering = false;
        this.elem = ref.nativeElement;
    }
    VgOverlayPlay.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgOverlayPlay.prototype.onPlayerReady = function () {
        var _this = this;
        this.target = this.API.getMediaById(this.vgFor);
        this.subscriptions.push(this.fsAPI.onChangeFullscreen.subscribe(this.onChangeFullscreen.bind(this)));
        this.subscriptions.push(this.controlsHidden.isHidden.subscribe(this.onHideControls.bind(this)));
        this.subscriptions.push(this.target.subscriptions.bufferDetected.subscribe(function (isBuffering) { return _this.onUpdateBuffer(isBuffering); }));
    };
    VgOverlayPlay.prototype.onUpdateBuffer = function (isBuffering) {
        this.isBuffering = isBuffering;
    };
    VgOverlayPlay.prototype.onChangeFullscreen = function (fsState) {
        if (this.fsAPI.nativeFullscreen) {
            this.isNativeFullscreen = fsState;
        }
    };
    VgOverlayPlay.prototype.onHideControls = function (hidden) {
        this.areControlsHidden = hidden;
    };
    VgOverlayPlay.prototype.onClick = function () {
        var state = this.getState();
        switch (state) {
            case vg_states_1.VgStates.VG_PLAYING:
                this.target.pause();
                break;
            case vg_states_1.VgStates.VG_PAUSED:
            case vg_states_1.VgStates.VG_ENDED:
                this.target.play();
                break;
        }
    };
    VgOverlayPlay.prototype.getState = function () {
        var state = vg_states_1.VgStates.VG_PAUSED;
        if (this.target) {
            if (this.target.state instanceof Array) {
                for (var i = 0, l = this.target.state.length; i < l; i++) {
                    if (this.target.state[i] === vg_states_1.VgStates.VG_PLAYING) {
                        state = vg_states_1.VgStates.VG_PLAYING;
                        break;
                    }
                }
            }
            else {
                state = this.target.state;
            }
        }
        return state;
    };
    VgOverlayPlay.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgOverlayPlay.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-overlay-play',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "<div class=\"vg-overlay-play\"\n                    [class.native-fullscreen]=\"isNativeFullscreen\"\n                    [class.controls-hidden]=\"areControlsHidden\">\n                   <div class=\"overlay-play-container\"\n                        [class.vg-icon-play_arrow]=\"getState() !== 'playing'\">\n                   </div>\n               </div>",
                    styles: ["\n        vg-overlay-play {\n            z-index: 200;\n        }\n\n        vg-overlay-play.is-buffering {\n            display: none;\n        }\n\n        vg-overlay-play .vg-overlay-play {\n            transition: all 0.5s;\n            cursor: pointer;\n            position: absolute;\n            display: block;\n            color: white;\n            width: 100%;\n            height: 100%;\n            font-size: 80px;\n            filter: alpha(opacity=60);\n            opacity: 0.6;\n        }\n\n        vg-overlay-play .vg-overlay-play.native-fullscreen.controls-hidden {\n            cursor: none;\n        }\n\n        vg-overlay-play .vg-overlay-play .overlay-play-container.vg-icon-play_arrow {\n            pointer-events: none;\n            width: 100%;\n            height: 100%;\n            position: absolute;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            font-size: 80px;\n        }\n\n        vg-overlay-play .vg-overlay-play:hover {\n            filter: alpha(opacity=100);\n            opacity: 1;\n        }\n\n        vg-overlay-play .vg-overlay-play:hover .overlay-play-container.vg-icon-play_arrow:before {\n            transform: scale(1.2);\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    VgOverlayPlay.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: vg_api_1.VgAPI, },
        { type: vg_fullscreen_api_1.VgFullscreenAPI, },
        { type: vg_controls_hidden_1.VgControlsHidden, },
    ]; };
    VgOverlayPlay.propDecorators = {
        "vgFor": [{ type: core_1.Input },],
        "isBuffering": [{ type: core_1.HostBinding, args: ['class.is-buffering',] },],
        "onClick": [{ type: core_1.HostListener, args: ['click',] },],
    };
    return VgOverlayPlay;
}());
exports.VgOverlayPlay = VgOverlayPlay;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctb3ZlcmxheS1wbGF5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctb3ZlcmxheS1wbGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBR3VCO0FBQ3ZCLGtEQUFnRDtBQUNoRCxzREFBb0Q7QUFFcEQsd0VBQXFFO0FBQ3JFLDBFQUF1RTs7SUF1RW5FLHVCQUFZLEdBQWUsRUFBUyxHQUFVLEVBQVMsS0FBc0IsRUFBVSxjQUFnQztRQUFuRixRQUFHLEdBQUgsR0FBRyxDQUFPO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBaUI7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBa0I7a0NBUHpGLEtBQUs7aUNBQ04sS0FBSzs2QkFFRixFQUFFOzJCQUV3QixLQUFLO1FBRzNELElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQztLQUNqQztJQUVELGdDQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5HLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDeEI7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsYUFBYSxFQUFFLEVBQXBCLENBQW9CLENBQUMsQ0FBQyxDQUFDO1NBQzVGO0tBQ0o7SUFFRCxxQ0FBYSxHQUFiO1FBQUEsaUJBU0M7UUFSRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUM5QyxVQUFBLFdBQVcsSUFBSSxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLEVBQWhDLENBQWdDLENBQ2xELENBQ0osQ0FBQztLQUNMO0lBRUQsc0NBQWMsR0FBZCxVQUFlLFdBQVc7UUFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7S0FDbEM7SUFFRCwwQ0FBa0IsR0FBbEIsVUFBbUIsT0FBZ0I7UUFDL0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE9BQU8sQ0FBQztTQUNyQztLQUNKO0lBRUQsc0NBQWMsR0FBZCxVQUFlLE1BQWU7UUFDMUIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQztLQUNuQztJQUdELCtCQUFPO1FBQ0gsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRTVCLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDWixLQUFLLG9CQUFRLENBQUMsVUFBVTtnQkFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDcEIsS0FBSyxDQUFDO1lBRVYsS0FBSyxvQkFBUSxDQUFDLFNBQVMsQ0FBQztZQUN4QixLQUFLLG9CQUFRLENBQUMsUUFBUTtnQkFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDbkIsS0FBSyxDQUFDO1NBQ2I7O0lBR0wsZ0NBQVEsR0FBUjtRQUNJLElBQUksS0FBSyxHQUFHLG9CQUFRLENBQUMsU0FBUyxDQUFDO1FBRS9CLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLFlBQVksS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDckMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO29CQUN2RCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBRSxDQUFDLENBQUUsS0FBSyxvQkFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7d0JBQ2pELEtBQUssR0FBRyxvQkFBUSxDQUFDLFVBQVUsQ0FBQzt3QkFDNUIsS0FBSyxDQUFDO3FCQUNUO2lCQUNKO2FBQ0o7WUFDRCxJQUFJLENBQUMsQ0FBQztnQkFDRixLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7YUFDN0I7U0FDSjtRQUVELE1BQU0sQ0FBQyxLQUFLLENBQUM7S0FDaEI7SUFFRCxtQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUM7S0FDcEQ7O2dCQWpKSixnQkFBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxRQUFRLEVBQUUsd1dBTVE7b0JBQ2xCLE1BQU0sRUFBRSxDQUFFLDh1Q0E2Q1QsQ0FBRTtpQkFDTjs7OztnQkFqRTZCLGlCQUFVO2dCQUcvQixjQUFLO2dCQUdMLG1DQUFlO2dCQUNmLHFDQUFnQjs7OzBCQTREcEIsWUFBSztnQ0FTTCxrQkFBVyxTQUFDLG9CQUFvQjs0QkF3Q2hDLG1CQUFZLFNBQUMsT0FBTzs7d0JBckh6Qjs7QUFtRWEsc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBWaWV3RW5jYXBzdWxhdGlvbiwgT25EZXN0cm95LFxuICAgIEhvc3RCaW5kaW5nXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmdBUEkgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3ZnLWFwaSc7XG5pbXBvcnQgeyBWZ1N0YXRlcyB9IGZyb20gJy4uL2NvcmUvc3RhdGVzL3ZnLXN0YXRlcyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBWZ0Z1bGxzY3JlZW5BUEkgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3ZnLWZ1bGxzY3JlZW4tYXBpJztcbmltcG9ydCB7IFZnQ29udHJvbHNIaWRkZW4gfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3ZnLWNvbnRyb2xzLWhpZGRlbic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndmctb3ZlcmxheS1wbGF5JyxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInZnLW92ZXJsYXktcGxheVwiXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzcy5uYXRpdmUtZnVsbHNjcmVlbl09XCJpc05hdGl2ZUZ1bGxzY3JlZW5cIlxuICAgICAgICAgICAgICAgICAgICBbY2xhc3MuY29udHJvbHMtaGlkZGVuXT1cImFyZUNvbnRyb2xzSGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm92ZXJsYXktcGxheS1jb250YWluZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzLnZnLWljb24tcGxheV9hcnJvd109XCJnZXRTdGF0ZSgpICE9PSAncGxheWluZydcIj5cbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIDwvZGl2PmAsXG4gICAgc3R5bGVzOiBbIGBcbiAgICAgICAgdmctb3ZlcmxheS1wbGF5IHtcbiAgICAgICAgICAgIHotaW5kZXg6IDIwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZnLW92ZXJsYXktcGxheS5pcy1idWZmZXJpbmcge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZnLW92ZXJsYXktcGxheSAudmctb3ZlcmxheS1wbGF5IHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogODBweDtcbiAgICAgICAgICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT02MCk7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgIH1cblxuICAgICAgICB2Zy1vdmVybGF5LXBsYXkgLnZnLW92ZXJsYXktcGxheS5uYXRpdmUtZnVsbHNjcmVlbi5jb250cm9scy1oaWRkZW4ge1xuICAgICAgICAgICAgY3Vyc29yOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgdmctb3ZlcmxheS1wbGF5IC52Zy1vdmVybGF5LXBsYXkgLm92ZXJsYXktcGxheS1jb250YWluZXIudmctaWNvbi1wbGF5X2Fycm93IHtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiA4MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgdmctb3ZlcmxheS1wbGF5IC52Zy1vdmVybGF5LXBsYXk6aG92ZXIge1xuICAgICAgICAgICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTEwMCk7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgdmctb3ZlcmxheS1wbGF5IC52Zy1vdmVybGF5LXBsYXk6aG92ZXIgLm92ZXJsYXktcGxheS1jb250YWluZXIudmctaWNvbi1wbGF5X2Fycm93OmJlZm9yZSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgICAgIH1cbiAgICBgIF1cbn0pXG5leHBvcnQgY2xhc3MgVmdPdmVybGF5UGxheSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBASW5wdXQoKSB2Z0Zvcjogc3RyaW5nO1xuICAgIGVsZW06IEhUTUxFbGVtZW50O1xuICAgIHRhcmdldDogYW55O1xuXG4gICAgaXNOYXRpdmVGdWxsc2NyZWVuOiBib29sZWFuID0gZmFsc2U7XG4gICAgYXJlQ29udHJvbHNIaWRkZW46IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlzLWJ1ZmZlcmluZycpIGlzQnVmZmVyaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihyZWY6IEVsZW1lbnRSZWYsIHB1YmxpYyBBUEk6IFZnQVBJLCBwdWJsaWMgZnNBUEk6IFZnRnVsbHNjcmVlbkFQSSwgcHJpdmF0ZSBjb250cm9sc0hpZGRlbjogVmdDb250cm9sc0hpZGRlbikge1xuICAgICAgICB0aGlzLmVsZW0gPSByZWYubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuQVBJLmlzUGxheWVyUmVhZHkpIHtcbiAgICAgICAgICAgIHRoaXMub25QbGF5ZXJSZWFkeSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2godGhpcy5BUEkucGxheWVyUmVhZHlFdmVudC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5vblBsYXllclJlYWR5KCkpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUGxheWVyUmVhZHkoKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGhpcy5BUEkuZ2V0TWVkaWFCeUlkKHRoaXMudmdGb3IpO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLmZzQVBJLm9uQ2hhbmdlRnVsbHNjcmVlbi5zdWJzY3JpYmUodGhpcy5vbkNoYW5nZUZ1bGxzY3JlZW4uYmluZCh0aGlzKSkpO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLmNvbnRyb2xzSGlkZGVuLmlzSGlkZGVuLnN1YnNjcmliZSh0aGlzLm9uSGlkZUNvbnRyb2xzLmJpbmQodGhpcykpKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2goXG4gICAgICAgICAgICB0aGlzLnRhcmdldC5zdWJzY3JpcHRpb25zLmJ1ZmZlckRldGVjdGVkLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBpc0J1ZmZlcmluZyA9PiB0aGlzLm9uVXBkYXRlQnVmZmVyKGlzQnVmZmVyaW5nKVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIG9uVXBkYXRlQnVmZmVyKGlzQnVmZmVyaW5nKSB7XG4gICAgICAgIHRoaXMuaXNCdWZmZXJpbmcgPSBpc0J1ZmZlcmluZztcbiAgICB9XG5cbiAgICBvbkNoYW5nZUZ1bGxzY3JlZW4oZnNTdGF0ZTogYm9vbGVhbikge1xuICAgICAgICBpZiAodGhpcy5mc0FQSS5uYXRpdmVGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgICB0aGlzLmlzTmF0aXZlRnVsbHNjcmVlbiA9IGZzU3RhdGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkhpZGVDb250cm9scyhoaWRkZW46IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5hcmVDb250cm9sc0hpZGRlbiA9IGhpZGRlbjtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gICAgb25DbGljaygpIHtcbiAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgVmdTdGF0ZXMuVkdfUExBWUlORzpcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC5wYXVzZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFZnU3RhdGVzLlZHX1BBVVNFRDpcbiAgICAgICAgICAgIGNhc2UgVmdTdGF0ZXMuVkdfRU5ERUQ6XG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQucGxheSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0U3RhdGUoKSB7XG4gICAgICAgIGxldCBzdGF0ZSA9IFZnU3RhdGVzLlZHX1BBVVNFRDtcblxuICAgICAgICBpZiAodGhpcy50YXJnZXQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRhcmdldC5zdGF0ZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLnRhcmdldC5zdGF0ZS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudGFyZ2V0LnN0YXRlWyBpIF0gPT09IFZnU3RhdGVzLlZHX1BMQVlJTkcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0gVmdTdGF0ZXMuVkdfUExBWUlORztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RhdGUgPSB0aGlzLnRhcmdldC5zdGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2gocyA9PiBzLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cbn1cbiJdfQ==

/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(389));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVmZmVyaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYnVmZmVyaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsK0NBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi9zcmMvYnVmZmVyaW5nL2J1ZmZlcmluZyc7XG4iXX0=

/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(39);
var vg_buffering_1 = __webpack_require__(390);
var VgBufferingModule = (function () {
    function VgBufferingModule() {
    }
    VgBufferingModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: [
                        vg_buffering_1.VgBuffering
                    ],
                    exports: [
                        vg_buffering_1.VgBuffering
                    ]
                },] },
    ];
    /** @nocollapse */
    VgBufferingModule.ctorParameters = function () { return []; };
    return VgBufferingModule;
}());
exports.VgBufferingModule = VgBufferingModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVmZmVyaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYnVmZmVyaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLDBDQUErQztBQUUvQywrQ0FBNkM7Ozs7O2dCQUU1QyxlQUFRLFNBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUUscUJBQVksQ0FBRTtvQkFDekIsWUFBWSxFQUFFO3dCQUNWLDBCQUFXO3FCQUNkO29CQUNELE9BQU8sRUFBRTt3QkFDTCwwQkFBVztxQkFDZDtpQkFDSjs7Ozs0QkFiRDs7QUFjYSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgVmdCdWZmZXJpbmcgfSBmcm9tICcuL3ZnLWJ1ZmZlcmluZyc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogWyBDb21tb25Nb2R1bGUgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgVmdCdWZmZXJpbmdcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgVmdCdWZmZXJpbmdcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFZnQnVmZmVyaW5nTW9kdWxlIHtcbn1cbiJdfQ==

/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var vg_api_1 = __webpack_require__(337);
var VgBuffering = (function () {
    function VgBuffering(ref, API) {
        this.API = API;
        this.checkInterval = 50;
        this.currentPlayPos = 0;
        this.lastPlayPos = 0;
        this.subscriptions = [];
        this.isBuffering = false;
        this.elem = ref.nativeElement;
    }
    VgBuffering.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgBuffering.prototype.onPlayerReady = function () {
        var _this = this;
        this.target = this.API.getMediaById(this.vgFor);
        this.subscriptions.push(this.target.subscriptions.bufferDetected.subscribe(function (isBuffering) { return _this.onUpdateBuffer(isBuffering); }));
    };
    VgBuffering.prototype.onUpdateBuffer = function (isBuffering) {
        this.isBuffering = isBuffering;
    };
    VgBuffering.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgBuffering.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-buffering',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "<div class=\"vg-buffering\">\n            <div class=\"bufferingContainer\">\n                <div class=\"loadingSpinner\"></div>\n            </div>\n        </div>",
                    styles: ["\n        vg-buffering {\n            display: none;\n            z-index: 201;\n        }\n\n        vg-buffering.is-buffering {\n            display: block;\n        }\n        \n        .vg-buffering {\n            position: absolute;\n            display: block;\n            width: 100%;\n            height: 100%;\n        }\n\n        .vg-buffering .bufferingContainer {\n            width: 100%;\n            position: absolute;\n            cursor: pointer;\n            top: 50%;\n            margin-top: -50px;\n\n            zoom: 1;\n            filter: alpha(opacity=60);\n            opacity: 0.6;\n        }\n\n        /* Loading Spinner\n        * http://www.alessioatzeni.com/blog/css3-loading-animation-loop/\n        */\n        .vg-buffering .loadingSpinner {\n            background-color: rgba(0, 0, 0, 0);\n            border: 5px solid rgba(255, 255, 255, 1);\n            opacity: .9;\n            border-top: 5px solid rgba(0, 0, 0, 0);\n            border-left: 5px solid rgba(0, 0, 0, 0);\n            border-radius: 50px;\n            box-shadow: 0 0 35px #FFFFFF;\n            width: 50px;\n            height: 50px;\n            margin: 0 auto;\n            -moz-animation: spin .5s infinite linear;\n            -webkit-animation: spin .5s infinite linear;\n        }\n\n        .vg-buffering .loadingSpinner .stop {\n            -webkit-animation-play-state: paused;\n            -moz-animation-play-state: paused;\n        }\n\n        @-moz-keyframes spin {\n            0% {\n                -moz-transform: rotate(0deg);\n            }\n            100% {\n                -moz-transform: rotate(360deg);\n            }\n        }\n\n        @-moz-keyframes spinoff {\n            0% {\n                -moz-transform: rotate(0deg);\n            }\n            100% {\n                -moz-transform: rotate(-360deg);\n            }\n        }\n\n        @-webkit-keyframes spin {\n            0% {\n                -webkit-transform: rotate(0deg);\n            }\n            100% {\n                -webkit-transform: rotate(360deg);\n            }\n        }\n\n        @-webkit-keyframes spinoff {\n            0% {\n                -webkit-transform: rotate(0deg);\n            }\n            100% {\n                -webkit-transform: rotate(-360deg);\n            }\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    VgBuffering.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: vg_api_1.VgAPI, },
    ]; };
    VgBuffering.propDecorators = {
        "vgFor": [{ type: core_1.Input },],
        "isBuffering": [{ type: core_1.HostBinding, args: ['class.is-buffering',] },],
    };
    return VgBuffering;
}());
exports.VgBuffering = VgBuffering;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctYnVmZmVyaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctYnVmZmVyaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWdIO0FBQ2hILGtEQUFnRDs7SUFtSDVDLHFCQUFZLEdBQWUsRUFBUyxHQUFVO1FBQVYsUUFBRyxHQUFILEdBQUcsQ0FBTzs2QkFSdEIsRUFBRTs4QkFDRCxDQUFDOzJCQUNKLENBQUM7NkJBRVMsRUFBRTsyQkFFd0IsS0FBSztRQUczRCxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUM7S0FDakM7SUFFRCw4QkFBUSxHQUFSO1FBQUEsaUJBU0M7UUFSRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxhQUFhLEVBQUUsRUFBcEIsQ0FBb0IsQ0FBQyxDQUNsRSxDQUFDO1NBQ0w7S0FDSjtJQUVELG1DQUFhLEdBQWI7UUFBQSxpQkFRQztRQVBHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWhELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUM5QyxVQUFBLFdBQVcsSUFBSSxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLEVBQWhDLENBQWdDLENBQ2xELENBQ0osQ0FBQztLQUNMO0lBRUQsb0NBQWMsR0FBZCxVQUFlLFdBQVc7UUFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7S0FDbEM7SUFFRCxpQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUM7S0FDcEQ7O2dCQTdJSixnQkFBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxjQUFjO29CQUN4QixhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtvQkFDckMsUUFBUSxFQUFFLHdLQUlDO29CQUNYLE1BQU0sRUFBRSxDQUFFLHl4RUF1RlQsQ0FBRTtpQkFDTjs7OztnQkF0R21CLGlCQUFVO2dCQUNyQixjQUFLOzs7MEJBdUdULFlBQUs7Z0NBVUwsa0JBQVcsU0FBQyxvQkFBb0I7O3NCQWxIckM7O0FBdUdhLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmdBUEkgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3ZnLWFwaSc7XG5pbXBvcnQgeyBJUGxheWFibGUgfSBmcm9tICcuLi9jb3JlL3ZnLW1lZGlhL2ktcGxheWFibGUnO1xuaW1wb3J0IHsgVmdTdGF0ZXMgfSBmcm9tICcuLi9jb3JlL3N0YXRlcy92Zy1zdGF0ZXMnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9TdWJzY3JpcHRpb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3ZnLWJ1ZmZlcmluZycsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJ2Zy1idWZmZXJpbmdcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidWZmZXJpbmdDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZ1NwaW5uZXJcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5gLFxuICAgIHN0eWxlczogWyBgXG4gICAgICAgIHZnLWJ1ZmZlcmluZyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgei1pbmRleDogMjAxO1xuICAgICAgICB9XG5cbiAgICAgICAgdmctYnVmZmVyaW5nLmlzLWJ1ZmZlcmluZyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLnZnLWJ1ZmZlcmluZyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZnLWJ1ZmZlcmluZyAuYnVmZmVyaW5nQ29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtNTBweDtcblxuICAgICAgICAgICAgem9vbTogMTtcbiAgICAgICAgICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT02MCk7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgIH1cblxuICAgICAgICAvKiBMb2FkaW5nIFNwaW5uZXJcbiAgICAgICAgKiBodHRwOi8vd3d3LmFsZXNzaW9hdHplbmkuY29tL2Jsb2cvY3NzMy1sb2FkaW5nLWFuaW1hdGlvbi1sb29wL1xuICAgICAgICAqL1xuICAgICAgICAudmctYnVmZmVyaW5nIC5sb2FkaW5nU3Bpbm5lciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAgICAgICAgICAgYm9yZGVyOiA1cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICAgICAgICAgIG9wYWNpdHk6IC45O1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDM1cHggI0ZGRkZGRjtcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAtbW96LWFuaW1hdGlvbjogc3BpbiAuNXMgaW5maW5pdGUgbGluZWFyO1xuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gLjVzIGluZmluaXRlIGxpbmVhcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC52Zy1idWZmZXJpbmcgLmxvYWRpbmdTcGlubmVyIC5zdG9wIHtcbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcbiAgICAgICAgICAgIC1tb3otYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIEAtbW96LWtleWZyYW1lcyBzcGluIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQC1tb3ota2V5ZnJhbWVzIHNwaW5vZmYge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgc3Bpbm9mZiB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBgIF1cbn0pXG5leHBvcnQgY2xhc3MgVmdCdWZmZXJpbmcgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgQElucHV0KCkgdmdGb3I6IHN0cmluZztcblxuICAgIGVsZW06IEhUTUxFbGVtZW50O1xuICAgIHRhcmdldDogSVBsYXlhYmxlO1xuICAgIGNoZWNrSW50ZXJ2YWw6IG51bWJlciA9IDUwO1xuICAgIGN1cnJlbnRQbGF5UG9zOiBudW1iZXIgPSAwO1xuICAgIGxhc3RQbGF5UG9zOiBudW1iZXIgPSAwO1xuXG4gICAgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaXMtYnVmZmVyaW5nJykgaXNCdWZmZXJpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHJlZjogRWxlbWVudFJlZiwgcHVibGljIEFQSTogVmdBUEkpIHtcbiAgICAgICAgdGhpcy5lbGVtID0gcmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLkFQSS5pc1BsYXllclJlYWR5KSB7XG4gICAgICAgICAgICB0aGlzLm9uUGxheWVyUmVhZHkoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgICAgICAgICAgIHRoaXMuQVBJLnBsYXllclJlYWR5RXZlbnQuc3Vic2NyaWJlKCgpID0+IHRoaXMub25QbGF5ZXJSZWFkeSgpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUGxheWVyUmVhZHkoKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGhpcy5BUEkuZ2V0TWVkaWFCeUlkKHRoaXMudmdGb3IpO1xuXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgICAgICAgdGhpcy50YXJnZXQuc3Vic2NyaXB0aW9ucy5idWZmZXJEZXRlY3RlZC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgaXNCdWZmZXJpbmcgPT4gdGhpcy5vblVwZGF0ZUJ1ZmZlcihpc0J1ZmZlcmluZylcbiAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBvblVwZGF0ZUJ1ZmZlcihpc0J1ZmZlcmluZykge1xuICAgICAgICB0aGlzLmlzQnVmZmVyaW5nID0gaXNCdWZmZXJpbmc7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKHMgPT4gcy51bnN1YnNjcmliZSgpKTtcbiAgICB9XG59XG4iXX0=

/***/ })

});
//# sourceMappingURL=0.js.map