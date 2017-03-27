/**
 * Sidebar component
 * @author Ritesh Patel
 * @email ritesh.patel@sencha.com
 */
Ext.define('ThemerContestApp.view.main.Sidebar', {
	extend: 'Ext.Container',

	xtype: 'sidebar',

	reference: 'sidebar',

	layout: 'vbox',

	requires:[
	'ThemerContetApp.view.main.Navigation'
	],

	cls: 'sidebar-cls',

	initialize: function() {
		if (!this.navigatorOverlay) {
			var me = this;

			this.navigatorOverlay = Ext.Viewport.add({
				xtype: 'panel',
				floated: true,
				controller: 'main',
				cls: 'nav-overlay-cls',
				closable: true,
				closeToolText: null,
				closeAction: 'hide',
				reference: 'navOverlayPanel',
				hideOnMaskTap: true,
				modal: true,
				showAnimation: {
					type: 'fadeIn',
					duration: 150,
					easing: 'ease-in'
				},
				hideAnimation: {
					type: 'fadeOut',
					duration: 150,
					easing: 'ease-out'
				},
				items: [{
					xtype: 'segmentedbutton',
					vertical: true,
					cls: 'nav-overlay-seg-btn-cls',
					items: [{
						name: 'dashboard',
						text: 'Dashboard',
						pressed: true,
						cls: 'nav-txt-btn-cls',
						handler: function(button, e) {
							me.fireEvent('navBtnClick', button, e);
						}
					}, {
						name: 'speakers',
						text: 'Speakers',
						cls: 'nav-txt-btn-cls',
						handler: function(button, e) {
							me.fireEvent('navBtnClick', button, e);
						}
					}, {
						text: 'Events',
						name: 'allevents',
						cls: 'nav-txt-btn-cls',
						handler: function(button, e) {
							me.fireEvent('navBtnClick', button, e);
						}
					}, {
						name: 'attendees',
						text: 'Attendees',
						cls: 'nav-txt-btn-cls',
						handler: function(button, e) {
							me.fireEvent('navBtnClick', button, e);
						}
					}]
				}, {
					xtype: 'dataview',
					cls: 'icons-dataview-cls',
					scrollable: false,
					data: [{
						name: "twitter",
						url: Utility.twitter_link_url
					}, {
						name: "facebook",
						url: Utility.facebook_link_url
					}, {
						name: "linkedin",
						url: Utility.linkedin_link_url
					}],

					itemTpl: [
						'<a href="{url}" class="social-link-href-cls" target="_blank"><span class="menu-{name}-cls menu-social-cls"></span></a>'
					]
				}],
				listeners: {
					close: function() {
						me.down('[reference=sideToggle]').removeCls('side-toggle-hide-btn-cls');
					},
					hide:function(){
                       me.down('[reference=sideToggle]').removeCls('side-toggle-hide-btn-cls');
					}
				}
			});
		}
	},

	listeners: {
		navBtnClick: 'onSelectionChange'
	},

	items: [{
		xtype: 'button',
		ui: 'header',
		cls: 'side-toggle-btn-cls',
		reference: 'sideToggle',
		iconCls: 'x-fa fa-navicon',
		id: 'main-navigation-btn',
		handler: function(btn, e) {
		   this.addCls('side-toggle-hide-btn-cls');

			this.up('sidebar').navigatorOverlay.show();
		}
	}, {
		xtype: 'navigation'
	}]
});