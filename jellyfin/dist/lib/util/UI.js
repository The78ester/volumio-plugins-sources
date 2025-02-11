"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
class UI {
    static supportsEnhancedTitles() {
        return !this.isManifestUI();
    }
    static isManifestUI() {
        const volumioManifestUIFlagFile = '/data/manifestUI';
        const volumioManifestUIDisabledFile = '/data/disableManifestUI';
        return (0, fs_1.existsSync)(volumioManifestUIFlagFile) && !(0, fs_1.existsSync)(volumioManifestUIDisabledFile);
    }
    static createLink(data) {
        const onclick = `angular.element('#browse-page').scope().browse.fetchLibrary({uri: '${data.uri}'})`;
        return `<a href="#" onclick="${onclick}">${data.text}</a>`;
    }
}
exports.default = UI;
//# sourceMappingURL=UI.js.map