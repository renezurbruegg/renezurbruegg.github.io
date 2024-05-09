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
                    <a href="index.html" data-type="index-link">test-app documentation</a>
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
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-16408c92caf7b60b2f3d863d2419fdac"' : 'data-target="#xs-components-links-module-AppModule-16408c92caf7b60b2f3d863d2419fdac"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-16408c92caf7b60b2f3d863d2419fdac"' :
                                            'id="xs-components-links-module-AppModule-16408c92caf7b60b2f3d863d2419fdac"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChartComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChartFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ChartFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ConfirmDialog.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ConfirmDialog</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ControlSliderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ControlSliderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditorComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GeneralSettingsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GeneralSettingsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MDashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MDashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MeasurementConfigurationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MeasurementConfigurationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MenuListItemComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MenuListItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyNavComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MyNavComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PowerOffDialog.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PowerOffDialog</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SupplyVoltagesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SupplyVoltagesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VideostreamComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">VideostreamComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-16408c92caf7b60b2f3d863d2419fdac"' : 'data-target="#xs-injectables-links-module-AppModule-16408c92caf7b60b2f3d863d2419fdac"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-16408c92caf7b60b2f3d863d2419fdac"' :
                                        'id="xs-injectables-links-module-AppModule-16408c92caf7b60b2f3d863d2419fdac"' }>
                                        <li class="link">
                                            <a href="injectables/AppConfig.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AppConfig</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AuthenticationService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AuthenticationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/LoginComponent.html" data-type="entity-link">LoginComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link">User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppConfig.html" data-type="entity-link">AppConfig</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthenticationService.html" data-type="entity-link">AuthenticationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MeasurementUpdateService.html" data-type="entity-link">MeasurementUpdateService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/ErrorInterceptor.html" data-type="entity-link">ErrorInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/JwtInterceptor.html" data-type="entity-link">JwtInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ChartAxis.html" data-type="entity-link">ChartAxis</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChartDataset.html" data-type="entity-link">ChartDataset</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChartJsDataset.html" data-type="entity-link">ChartJsDataset</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ChartObject.html" data-type="entity-link">ChartObject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConfirmationDialogData.html" data-type="entity-link">ConfirmationDialogData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DataEntry.html" data-type="entity-link">DataEntry</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAppConfig.html" data-type="entity-link">IAppConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MeasurementDevice.html" data-type="entity-link">MeasurementDevice</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NavItem.html" data-type="entity-link">NavItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ROUTE.html" data-type="entity-link">ROUTE</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/VarSupply.html" data-type="entity-link">VarSupply</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});