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
                    <a href="index.html" data-type="index-link">cars documentation</a>
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
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
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
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-54f6397774a548e1ab485025e4a5f2558f43b20dce1a696b6497f6a8eeab4a15ee86f002077650188155ee52a36689ef380ed9576ecd018fa6bd1bbffe81b309"' : 'data-target="#xs-controllers-links-module-AppModule-54f6397774a548e1ab485025e4a5f2558f43b20dce1a696b6497f6a8eeab4a15ee86f002077650188155ee52a36689ef380ed9576ecd018fa6bd1bbffe81b309"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-54f6397774a548e1ab485025e4a5f2558f43b20dce1a696b6497f6a8eeab4a15ee86f002077650188155ee52a36689ef380ed9576ecd018fa6bd1bbffe81b309"' :
                                            'id="xs-controllers-links-module-AppModule-54f6397774a548e1ab485025e4a5f2558f43b20dce1a696b6497f6a8eeab4a15ee86f002077650188155ee52a36689ef380ed9576ecd018fa6bd1bbffe81b309"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-54f6397774a548e1ab485025e4a5f2558f43b20dce1a696b6497f6a8eeab4a15ee86f002077650188155ee52a36689ef380ed9576ecd018fa6bd1bbffe81b309"' : 'data-target="#xs-injectables-links-module-AppModule-54f6397774a548e1ab485025e4a5f2558f43b20dce1a696b6497f6a8eeab4a15ee86f002077650188155ee52a36689ef380ed9576ecd018fa6bd1bbffe81b309"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-54f6397774a548e1ab485025e4a5f2558f43b20dce1a696b6497f6a8eeab4a15ee86f002077650188155ee52a36689ef380ed9576ecd018fa6bd1bbffe81b309"' :
                                        'id="xs-injectables-links-module-AppModule-54f6397774a548e1ab485025e4a5f2558f43b20dce1a696b6497f6a8eeab4a15ee86f002077650188155ee52a36689ef380ed9576ecd018fa6bd1bbffe81b309"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RolesModule.html" data-type="entity-link" >RolesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-RolesModule-dfccf7ead3faf8fd93ebe04a08e7a85295d106f114ba7ee11dcd7c37ce46d729ddad012d7ace5bcc57ddbf732659947908f87b9f23a3d1978fb1ed56147d705b"' : 'data-target="#xs-controllers-links-module-RolesModule-dfccf7ead3faf8fd93ebe04a08e7a85295d106f114ba7ee11dcd7c37ce46d729ddad012d7ace5bcc57ddbf732659947908f87b9f23a3d1978fb1ed56147d705b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-RolesModule-dfccf7ead3faf8fd93ebe04a08e7a85295d106f114ba7ee11dcd7c37ce46d729ddad012d7ace5bcc57ddbf732659947908f87b9f23a3d1978fb1ed56147d705b"' :
                                            'id="xs-controllers-links-module-RolesModule-dfccf7ead3faf8fd93ebe04a08e7a85295d106f114ba7ee11dcd7c37ce46d729ddad012d7ace5bcc57ddbf732659947908f87b9f23a3d1978fb1ed56147d705b"' }>
                                            <li class="link">
                                                <a href="controllers/RolesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-RolesModule-dfccf7ead3faf8fd93ebe04a08e7a85295d106f114ba7ee11dcd7c37ce46d729ddad012d7ace5bcc57ddbf732659947908f87b9f23a3d1978fb1ed56147d705b"' : 'data-target="#xs-injectables-links-module-RolesModule-dfccf7ead3faf8fd93ebe04a08e7a85295d106f114ba7ee11dcd7c37ce46d729ddad012d7ace5bcc57ddbf732659947908f87b9f23a3d1978fb1ed56147d705b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RolesModule-dfccf7ead3faf8fd93ebe04a08e7a85295d106f114ba7ee11dcd7c37ce46d729ddad012d7ace5bcc57ddbf732659947908f87b9f23a3d1978fb1ed56147d705b"' :
                                        'id="xs-injectables-links-module-RolesModule-dfccf7ead3faf8fd93ebe04a08e7a85295d106f114ba7ee11dcd7c37ce46d729ddad012d7ace5bcc57ddbf732659947908f87b9f23a3d1978fb1ed56147d705b"' }>
                                        <li class="link">
                                            <a href="injectables/RolesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UsersModule-830b24bc39bfcb307c51b3adf1d438f4043a168a15cb5f11e40891e9dbc36e3017f172fa0cc651d89120826701c901282fc1a23024d2485ee9e69f18ee71d13b"' : 'data-target="#xs-controllers-links-module-UsersModule-830b24bc39bfcb307c51b3adf1d438f4043a168a15cb5f11e40891e9dbc36e3017f172fa0cc651d89120826701c901282fc1a23024d2485ee9e69f18ee71d13b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-830b24bc39bfcb307c51b3adf1d438f4043a168a15cb5f11e40891e9dbc36e3017f172fa0cc651d89120826701c901282fc1a23024d2485ee9e69f18ee71d13b"' :
                                            'id="xs-controllers-links-module-UsersModule-830b24bc39bfcb307c51b3adf1d438f4043a168a15cb5f11e40891e9dbc36e3017f172fa0cc651d89120826701c901282fc1a23024d2485ee9e69f18ee71d13b"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsersModule-830b24bc39bfcb307c51b3adf1d438f4043a168a15cb5f11e40891e9dbc36e3017f172fa0cc651d89120826701c901282fc1a23024d2485ee9e69f18ee71d13b"' : 'data-target="#xs-injectables-links-module-UsersModule-830b24bc39bfcb307c51b3adf1d438f4043a168a15cb5f11e40891e9dbc36e3017f172fa0cc651d89120826701c901282fc1a23024d2485ee9e69f18ee71d13b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-830b24bc39bfcb307c51b3adf1d438f4043a168a15cb5f11e40891e9dbc36e3017f172fa0cc651d89120826701c901282fc1a23024d2485ee9e69f18ee71d13b"' :
                                        'id="xs-injectables-links-module-UsersModule-830b24bc39bfcb307c51b3adf1d438f4043a168a15cb5f11e40891e9dbc36e3017f172fa0cc651d89120826701c901282fc1a23024d2485ee9e69f18ee71d13b"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/RolesController.html" data-type="entity-link" >RolesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#entities-links"' :
                                'data-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Role.html" data-type="entity-link" >Role</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
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
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateRoleDTO.html" data-type="entity-link" >CreateRoleDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDTO.html" data-type="entity-link" >CreateUserDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/SerializeInterceptor.html" data-type="entity-link" >SerializeInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserDTO.html" data-type="entity-link" >UserDTO</a>
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
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CurrentUserInterceptor.html" data-type="entity-link" >CurrentUserInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CurrentUserMiddleware.html" data-type="entity-link" >CurrentUserMiddleware</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RolesService.html" data-type="entity-link" >RolesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
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
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AdminGuard.html" data-type="entity-link" >AdminGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
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
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Request.html" data-type="entity-link" >Request</a>
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
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
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