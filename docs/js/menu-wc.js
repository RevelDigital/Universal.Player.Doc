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
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AudioSourceComponent.html" data-type="entity-link" >AudioSourceComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BaseComponent.html" data-type="entity-link" >BaseComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BaseSourceComponent.html" data-type="entity-link" >BaseSourceComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BrightSignGalleryComponent.html" data-type="entity-link" >BrightSignGalleryComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BrightSignVideoSourceComponent.html" data-type="entity-link" >BrightSignVideoSourceComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ClockComponent.html" data-type="entity-link" >ClockComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EmptySourceComponent.html" data-type="entity-link" >EmptySourceComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GadgetComponent.html" data-type="entity-link" >GadgetComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GadgetSourceComponent.html" data-type="entity-link" >GadgetSourceComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GalleryComponent.html" data-type="entity-link" >GalleryComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HotspotComponent.html" data-type="entity-link" >HotspotComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ImageComponent.html" data-type="entity-link" >ImageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ImageSourceComponent.html" data-type="entity-link" >ImageSourceComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MarqueeComponent.html" data-type="entity-link" >MarqueeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/QrCodeComponent.html" data-type="entity-link" >QrCodeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RichTextComponent.html" data-type="entity-link" >RichTextComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ShapeComponent.html" data-type="entity-link" >ShapeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SlideshowComponent.html" data-type="entity-link" >SlideshowComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SlideshowTouchScrollComponent.html" data-type="entity-link" >SlideshowTouchScrollComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TemplateComponent.html" data-type="entity-link" >TemplateComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TemplateSourceComponent.html" data-type="entity-link" >TemplateSourceComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TextComponent.html" data-type="entity-link" >TextComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TextSourceComponent.html" data-type="entity-link" >TextSourceComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ThumbnailWebSourceComponent.html" data-type="entity-link" >ThumbnailWebSourceComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/TvTunerComponent.html" data-type="entity-link" >TvTunerComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/VideoSourceComponent.html" data-type="entity-link" >VideoSourceComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/VistarSourceComponent.html" data-type="entity-link" >VistarSourceComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/WebpageComponent.html" data-type="entity-link" >WebpageComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/WebSourceComponent.html" data-type="entity-link" >WebSourceComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/YoutubeSourceComponent.html" data-type="entity-link" >YoutubeSourceComponent</a>
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
                                <a href="classes/WifiImpression.html" data-type="entity-link" >WifiImpression</a>
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
                        </ul>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});