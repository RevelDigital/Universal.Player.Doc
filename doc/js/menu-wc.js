'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">revel-universal-player documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/ActivationErrorModule.html" data-type="entity-link" >ActivationErrorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ActivationErrorModule-9e1f2d8b727f62321703d0a778efd3e01624e565dd88a556009fdc06fb30f7fca32bbab2037bc35f8a087eb16e8722e00f4db1eb5d872614db8b23354abff839"' : 'data-bs-target="#xs-components-links-module-ActivationErrorModule-9e1f2d8b727f62321703d0a778efd3e01624e565dd88a556009fdc06fb30f7fca32bbab2037bc35f8a087eb16e8722e00f4db1eb5d872614db8b23354abff839"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ActivationErrorModule-9e1f2d8b727f62321703d0a778efd3e01624e565dd88a556009fdc06fb30f7fca32bbab2037bc35f8a087eb16e8722e00f4db1eb5d872614db8b23354abff839"' :
                                            'id="xs-components-links-module-ActivationErrorModule-9e1f2d8b727f62321703d0a778efd3e01624e565dd88a556009fdc06fb30f7fca32bbab2037bc35f8a087eb16e8722e00f4db1eb5d872614db8b23354abff839"' }>
                                            <li class="link">
                                                <a href="components/ActivationErrorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActivationErrorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ActivationErrorRoutingModule.html" data-type="entity-link" >ActivationErrorRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ActivationModule.html" data-type="entity-link" >ActivationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ActivationModule-004f8693ecad1230df53dfef8ab5dba711d4000eb67db5c825f22b35b27240ddbfa91659c229b300daf1f9ced4a8247fb501704111f6c79997e6d6231b6ff9fa"' : 'data-bs-target="#xs-components-links-module-ActivationModule-004f8693ecad1230df53dfef8ab5dba711d4000eb67db5c825f22b35b27240ddbfa91659c229b300daf1f9ced4a8247fb501704111f6c79997e6d6231b6ff9fa"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ActivationModule-004f8693ecad1230df53dfef8ab5dba711d4000eb67db5c825f22b35b27240ddbfa91659c229b300daf1f9ced4a8247fb501704111f6c79997e6d6231b6ff9fa"' :
                                            'id="xs-components-links-module-ActivationModule-004f8693ecad1230df53dfef8ab5dba711d4000eb67db5c825f22b35b27240ddbfa91659c229b300daf1f9ced4a8247fb501704111f6c79997e6d6231b6ff9fa"' }>
                                            <li class="link">
                                                <a href="components/ActivationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActivationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DeploymentConfigComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeploymentConfigComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ActivationRoutingModule.html" data-type="entity-link" >ActivationRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AlertModule.html" data-type="entity-link" >AlertModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AlertModule-3a927c0d43d1aaf38aca5e5f78de52f69105d7c716c5d8172fa79bef776c499e3a1b1f2f2002348dac5b5def05de84a2839af2e71cc1fb6bddd0951b1618fd9e"' : 'data-bs-target="#xs-components-links-module-AlertModule-3a927c0d43d1aaf38aca5e5f78de52f69105d7c716c5d8172fa79bef776c499e3a1b1f2f2002348dac5b5def05de84a2839af2e71cc1fb6bddd0951b1618fd9e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AlertModule-3a927c0d43d1aaf38aca5e5f78de52f69105d7c716c5d8172fa79bef776c499e3a1b1f2f2002348dac5b5def05de84a2839af2e71cc1fb6bddd0951b1618fd9e"' :
                                            'id="xs-components-links-module-AlertModule-3a927c0d43d1aaf38aca5e5f78de52f69105d7c716c5d8172fa79bef776c499e3a1b1f2f2002348dac5b5def05de84a2839af2e71cc1fb6bddd0951b1618fd9e"' }>
                                            <li class="link">
                                                <a href="components/AlertComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AlertComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AlertRoutingModule.html" data-type="entity-link" >AlertRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-55b7e21681918bc0114776c671048756729edeb4758c853b62f4ad2a19b2f5ec410bc4065b8a040ef419ebb3009b772686f098b2da08c3280979e22ef83e2a0e"' : 'data-bs-target="#xs-components-links-module-AppModule-55b7e21681918bc0114776c671048756729edeb4758c853b62f4ad2a19b2f5ec410bc4065b8a040ef419ebb3009b772686f098b2da08c3280979e22ef83e2a0e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-55b7e21681918bc0114776c671048756729edeb4758c853b62f4ad2a19b2f5ec410bc4065b8a040ef419ebb3009b772686f098b2da08c3280979e22ef83e2a0e"' :
                                            'id="xs-components-links-module-AppModule-55b7e21681918bc0114776c671048756729edeb4758c853b62f4ad2a19b2f5ec410bc4065b8a040ef419ebb3009b772686f098b2da08c3280979e22ef83e2a0e"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CockpitComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CockpitComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NetSyncComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NetSyncComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OptionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OptionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RestartRevelApplicationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RestartRevelApplicationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchPreviousDeviceDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchPreviousDeviceDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StartupDebugComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StartupDebugComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TerminalSettingsSerialComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TerminalSettingsSerialComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UsbSettingsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsbSettingsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-55b7e21681918bc0114776c671048756729edeb4758c853b62f4ad2a19b2f5ec410bc4065b8a040ef419ebb3009b772686f098b2da08c3280979e22ef83e2a0e"' : 'data-bs-target="#xs-injectables-links-module-AppModule-55b7e21681918bc0114776c671048756729edeb4758c853b62f4ad2a19b2f5ec410bc4065b8a040ef419ebb3009b772686f098b2da08c3280979e22ef83e2a0e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-55b7e21681918bc0114776c671048756729edeb4758c853b62f4ad2a19b2f5ec410bc4065b8a040ef419ebb3009b772686f098b2da08c3280979e22ef83e2a0e"' :
                                        'id="xs-injectables-links-module-AppModule-55b7e21681918bc0114776c671048756729edeb4758c853b62f4ad2a19b2f5ec410bc4065b8a040ef419ebb3009b772686f098b2da08c3280979e22ef83e2a0e"' }>
                                        <li class="link">
                                            <a href="injectables/AppInitService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppInitService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AuthGuard.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthGuard</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/NothingToPlayModule.html" data-type="entity-link" >NothingToPlayModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-NothingToPlayModule-5963d6c58821637ec0c9bf79b9e3f2a1c84ff2dc209cecc3a538309c59be92966a68a582204baf5f2bc52519861eb2c7a81bbe4f8ff5725074bd3080340cb191"' : 'data-bs-target="#xs-components-links-module-NothingToPlayModule-5963d6c58821637ec0c9bf79b9e3f2a1c84ff2dc209cecc3a538309c59be92966a68a582204baf5f2bc52519861eb2c7a81bbe4f8ff5725074bd3080340cb191"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NothingToPlayModule-5963d6c58821637ec0c9bf79b9e3f2a1c84ff2dc209cecc3a538309c59be92966a68a582204baf5f2bc52519861eb2c7a81bbe4f8ff5725074bd3080340cb191"' :
                                            'id="xs-components-links-module-NothingToPlayModule-5963d6c58821637ec0c9bf79b9e3f2a1c84ff2dc209cecc3a538309c59be92966a68a582204baf5f2bc52519861eb2c7a81bbe4f8ff5725074bd3080340cb191"' }>
                                            <li class="link">
                                                <a href="components/NothingToPlayComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NothingToPlayComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NothingToPlayRoutingModule.html" data-type="entity-link" >NothingToPlayRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ScheduleErrorModule.html" data-type="entity-link" >ScheduleErrorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ScheduleErrorModule-bbdb6a28b781fa189d01af91b70b626081c11fce15b195449589de5084384c3fd35d01dcb077df1467f118b94aa96334fe25e02d8c8d276e981333e36b5bdbd4"' : 'data-bs-target="#xs-components-links-module-ScheduleErrorModule-bbdb6a28b781fa189d01af91b70b626081c11fce15b195449589de5084384c3fd35d01dcb077df1467f118b94aa96334fe25e02d8c8d276e981333e36b5bdbd4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ScheduleErrorModule-bbdb6a28b781fa189d01af91b70b626081c11fce15b195449589de5084384c3fd35d01dcb077df1467f118b94aa96334fe25e02d8c8d276e981333e36b5bdbd4"' :
                                            'id="xs-components-links-module-ScheduleErrorModule-bbdb6a28b781fa189d01af91b70b626081c11fce15b195449589de5084384c3fd35d01dcb077df1467f118b94aa96334fe25e02d8c8d276e981333e36b5bdbd4"' }>
                                            <li class="link">
                                                <a href="components/ScheduleErrorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ScheduleErrorComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ScheduleErrorRoutingModule.html" data-type="entity-link" >ScheduleErrorRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsModule.html" data-type="entity-link" >SettingsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SettingsModule-26b3daf9a9a82da1503c8754ad9567a79de2a50239c2d365bb4b00ec6e3bba9aea83bc44971717133cc1c56376b2c618c388660dba77335596dc1fb73caaebd0"' : 'data-bs-target="#xs-components-links-module-SettingsModule-26b3daf9a9a82da1503c8754ad9567a79de2a50239c2d365bb4b00ec6e3bba9aea83bc44971717133cc1c56376b2c618c388660dba77335596dc1fb73caaebd0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SettingsModule-26b3daf9a9a82da1503c8754ad9567a79de2a50239c2d365bb4b00ec6e3bba9aea83bc44971717133cc1c56376b2c618c388660dba77335596dc1fb73caaebd0"' :
                                            'id="xs-components-links-module-SettingsModule-26b3daf9a9a82da1503c8754ad9567a79de2a50239c2d365bb4b00ec6e3bba9aea83bc44971717133cc1c56376b2c618c388660dba77335596dc1fb73caaebd0"' }>
                                            <li class="link">
                                                <a href="components/FaceDemoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FaceDemoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResetDialogComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResetDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SettingsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SettingsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsRoutingModule.html" data-type="entity-link" >SettingsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SharedModule-2f34fbc46b3b4154d6b82d0beb2fe09180209a9284beb55d5a5bd50b3f88ae1a484e558f46179e36445d71e6475750cd9fea95759a75f149e1f2c28babdac4a9"' : 'data-bs-target="#xs-components-links-module-SharedModule-2f34fbc46b3b4154d6b82d0beb2fe09180209a9284beb55d5a5bd50b3f88ae1a484e558f46179e36445d71e6475750cd9fea95759a75f149e1f2c28babdac4a9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-2f34fbc46b3b4154d6b82d0beb2fe09180209a9284beb55d5a5bd50b3f88ae1a484e558f46179e36445d71e6475750cd9fea95759a75f149e1f2c28babdac4a9"' :
                                            'id="xs-components-links-module-SharedModule-2f34fbc46b3b4154d6b82d0beb2fe09180209a9284beb55d5a5bd50b3f88ae1a484e558f46179e36445d71e6475750cd9fea95759a75f149e1f2c28babdac4a9"' }>
                                            <li class="link">
                                                <a href="components/FaceDetectionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FaceDetectionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/KeyNotActiveComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >KeyNotActiveComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoadingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoadingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NetworkCheckerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NetworkCheckerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageNotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TamperComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TamperComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TemplateModule.html" data-type="entity-link" >TemplateModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-TemplateModule-b2f6f99e937702c3383b09cd5f3c0fb01b926dd0d400fe716bdf269b0a9cbf28e2bcb782ee212158e172bab9f69aaac046fdcbf4796a1a2cc8ecfc43fd45da31"' : 'data-bs-target="#xs-components-links-module-TemplateModule-b2f6f99e937702c3383b09cd5f3c0fb01b926dd0d400fe716bdf269b0a9cbf28e2bcb782ee212158e172bab9f69aaac046fdcbf4796a1a2cc8ecfc43fd45da31"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TemplateModule-b2f6f99e937702c3383b09cd5f3c0fb01b926dd0d400fe716bdf269b0a9cbf28e2bcb782ee212158e172bab9f69aaac046fdcbf4796a1a2cc8ecfc43fd45da31"' :
                                            'id="xs-components-links-module-TemplateModule-b2f6f99e937702c3383b09cd5f3c0fb01b926dd0d400fe716bdf269b0a9cbf28e2bcb782ee212158e172bab9f69aaac046fdcbf4796a1a2cc8ecfc43fd45da31"' }>
                                            <li class="link">
                                                <a href="components/AudioSourceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AudioSourceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BaseComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BaseComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BaseSourceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BaseSourceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ClockComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClockComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmptySourceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmptySourceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GadgetComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GadgetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GadgetSourceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GadgetSourceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GalleryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GalleryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HotspotComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HotspotComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ImageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ImageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ImageSourceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ImageSourceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MarqueeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MarqueeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/QrCodeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >QrCodeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RichTextComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RichTextComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShapeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShapeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SlideshowComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SlideshowComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SlideshowTouchScrollComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SlideshowTouchScrollComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TemplateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TemplateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TemplateSourceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TemplateSourceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TextComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TextComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TextSourceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TextSourceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ThumbnailWebSourceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ThumbnailWebSourceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TvTunerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TvTunerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VideoSourceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VideoSourceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WebSourceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WebSourceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WebpageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WebpageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/YoutubeSourceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >YoutubeSourceComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-TemplateModule-b2f6f99e937702c3383b09cd5f3c0fb01b926dd0d400fe716bdf269b0a9cbf28e2bcb782ee212158e172bab9f69aaac046fdcbf4796a1a2cc8ecfc43fd45da31"' : 'data-bs-target="#xs-pipes-links-module-TemplateModule-b2f6f99e937702c3383b09cd5f3c0fb01b926dd0d400fe716bdf269b0a9cbf28e2bcb782ee212158e172bab9f69aaac046fdcbf4796a1a2cc8ecfc43fd45da31"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-TemplateModule-b2f6f99e937702c3383b09cd5f3c0fb01b926dd0d400fe716bdf269b0a9cbf28e2bcb782ee212158e172bab9f69aaac046fdcbf4796a1a2cc8ecfc43fd45da31"' :
                                            'id="xs-pipes-links-module-TemplateModule-b2f6f99e937702c3383b09cd5f3c0fb01b926dd0d400fe716bdf269b0a9cbf28e2bcb782ee212158e172bab9f69aaac046fdcbf4796a1a2cc8ecfc43fd45da31"' }>
                                            <li class="link">
                                                <a href="pipes/SafePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SafePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TemplateRoutingModule.html" data-type="entity-link" >TemplateRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/BrightSignGalleryComponent.html" data-type="entity-link" >BrightSignGalleryComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BrightSignVideoSourceComponent.html" data-type="entity-link" >BrightSignVideoSourceComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PageNotFoundComponent.html" data-type="entity-link" >PageNotFoundComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/VistarSourceComponent.html" data-type="entity-link" >VistarSourceComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Controller.html" data-type="entity-link" >Controller</a>
                            </li>
                            <li class="link">
                                <a href="classes/Event.html" data-type="entity-link" >Event</a>
                            </li>
                            <li class="link">
                                <a href="classes/FaceImpression.html" data-type="entity-link" >FaceImpression</a>
                            </li>
                            <li class="link">
                                <a href="classes/GenderType.html" data-type="entity-link" >GenderType</a>
                            </li>
                            <li class="link">
                                <a href="classes/Handler.html" data-type="entity-link" >Handler</a>
                            </li>
                            <li class="link">
                                <a href="classes/PlatformResolver.html" data-type="entity-link" >PlatformResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/Runnable.html" data-type="entity-link" >Runnable</a>
                            </li>
                            <li class="link">
                                <a href="classes/SkipSourceException.html" data-type="entity-link" >SkipSourceException</a>
                            </li>
                            <li class="link">
                                <a href="classes/SkipSourceException-1.html" data-type="entity-link" >SkipSourceException</a>
                            </li>
                            <li class="link">
                                <a href="classes/TrafficImpression.html" data-type="entity-link" >TrafficImpression</a>
                            </li>
                            <li class="link">
                                <a href="classes/WifiImpression.html" data-type="entity-link" >WifiImpression</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/BrightSignService.html" data-type="entity-link" >BrightSignService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ElectronService.html" data-type="entity-link" >ElectronService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RssFeedService.html" data-type="entity-link" >RssFeedService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SourceComponentInitService.html" data-type="entity-link" >SourceComponentInitService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StateService.html" data-type="entity-link" >StateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TimeService.html" data-type="entity-link" >TimeService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AdRequest.html" data-type="entity-link" >AdRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AdResponse.html" data-type="entity-link" >AdResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Advertisement.html" data-type="entity-link" >Advertisement</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Asset.html" data-type="entity-link" >Asset</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CacheRequest.html" data-type="entity-link" >CacheRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CacheResponse.html" data-type="entity-link" >CacheResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Command.html" data-type="entity-link" >Command</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Condition.html" data-type="entity-link" >Condition</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Condition-1.html" data-type="entity-link" >Condition</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Device.html" data-type="entity-link" >Device</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Device-1.html" data-type="entity-link" >Device</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DeviceAttribute.html" data-type="entity-link" >DeviceAttribute</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Deviceconfig.html" data-type="entity-link" >Deviceconfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DialogData.html" data-type="entity-link" >DialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DisplayArea.html" data-type="entity-link" >DisplayArea</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Displaycommand.html" data-type="entity-link" >Displaycommand</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Event.html" data-type="entity-link" >Event</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FaceInfo.html" data-type="entity-link" >FaceInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/File.html" data-type="entity-link" >File</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Gadget.html" data-type="entity-link" >Gadget</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Impression.html" data-type="entity-link" >Impression</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Information.html" data-type="entity-link" >Information</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/InterOpGadgetInterface.html" data-type="entity-link" >InterOpGadgetInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Location.html" data-type="entity-link" >Location</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Location-1.html" data-type="entity-link" >Location</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Module.html" data-type="entity-link" >Module</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Module-1.html" data-type="entity-link" >Module</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Option.html" data-type="entity-link" >Option</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Option-1.html" data-type="entity-link" >Option</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PeriodicElement.html" data-type="entity-link" >PeriodicElement</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Playlist.html" data-type="entity-link" >Playlist</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Playlist-1.html" data-type="entity-link" >Playlist</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PlaylistListener.html" data-type="entity-link" >PlaylistListener</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProofOfPlayResponse.html" data-type="entity-link" >ProofOfPlayResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RevelControl.html" data-type="entity-link" >RevelControl</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Reveldigital.html" data-type="entity-link" >Reveldigital</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RevelNative.html" data-type="entity-link" >RevelNative</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Schedule.html" data-type="entity-link" >Schedule</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Schedule-1.html" data-type="entity-link" >Schedule</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ScheduleRootObject.html" data-type="entity-link" >ScheduleRootObject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Source.html" data-type="entity-link" >Source</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Source-1.html" data-type="entity-link" >Source</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Template.html" data-type="entity-link" >Template</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Template-1.html" data-type="entity-link" >Template</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});