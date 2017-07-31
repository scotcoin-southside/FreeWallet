/*
 * MessageBox.js - View 
 *
 * custom messagebox component which displays buttons vertically
 */

// Customize standardized set of buttons
var statics = {
    OK    : {text: '同意',     itemId: 'ok',  ui: 'action'},
    YES   : {text: ' 是',    itemId: 'yes', ui: 'action'},
    NO    : {text: ' 否',     itemId: 'no'},
    CANCEL: {text: ' 取消', itemId: 'cancel'},

    INFO    : Ext.baseCSSPrefix + 'msgbox-info',
    WARNING : Ext.baseCSSPrefix + 'msgbox-warning',
    QUESTION: Ext.baseCSSPrefix + 'msgbox-question',
    ERROR   : Ext.baseCSSPrefix + 'msgbox-error',

    OKCANCEL: [
        {text: ' 同意',     itemId: 'ok',     ui: 'confirm', iconCls: 'fa fa-thumbs-up margin-bottom-4', flex: 1},
        {text: ',取消', itemId: 'cancel', ui: 'decline', iconCls: 'fa fa-thumbs-down margin-bottom-4', flex: 1}
    ],
    YESNOCANCEL: [
        {text: ' 是',    itemId: 'yes', ui: 'confirm'},
        {text: ' 否',     itemId: 'no',  ui: 'decline'},
        {text: ',取消', itemId: 'cancel', ui: 'action'}
    ],
    YESNO: [
        {text: ',是', itemId: 'yes', ui: 'confirm', iconCls: 'fa fa-thumbs-up margin-bottom-4', flex: 1},
        {text: ' 否',  itemId: 'no',  ui: 'decline', iconCls: 'fa fa-thumbs-down margin-bottom-4', flex: 1}
    ]
};


// Override the standardized buttons in Ext.MessageBox
Ext.define('FW.view.MessageBoxOverride', {
    override: 'Ext.MessageBox',
    statics: statics
});


// Define custom messagebox component 
Ext.define('FW.view.MessageBox', {
    extend: 'Ext.MessageBox',
    singleton: true,

    // Define the standardized buttons
    statics: statics,

    // Override the updateButtons function so we handle verticalButtons and display the buttons vertically
    updateButtons: function(newButtons) {
        var me = this;
        // If there are no new buttons or it is an empty array, set newButtons
        // to false
        newButtons = (!newButtons || newButtons.length === 0) ? false : newButtons;
        if (newButtons) {
            if (me.buttonsToolbar) {
                me.buttonsToolbar.show();
                me.buttonsToolbar.removeAll();
                me.buttonsToolbar.setItems(newButtons);
            } else {
                var layout = {
                    type: 'vbox',
                    pack: 'center',
                    align: 'stretch'
                };
                var isFlexed = Ext.theme.is.CupertinoClassic  || Ext.theme.is.MountainView  || Ext.theme.is.Blackberry || Ext.theme.is.Blackberry103;
                me.buttonsToolbar = Ext.create('Ext.Toolbar', {
                    docked: 'bottom',
                    defaultType: 'button',
                    defaults: {
                        flex: (isFlexed) ? 1 : undefined,
                        ui: (Ext.theme.is.Blackberry || Ext.theme.is.Blackberry103) ? 'action' : undefined
                    },
                    layout: layout,
                    ui: me.getUi(),
                    cls: me.getBaseCls() + '-buttons',
                    items: newButtons
                });
                me.add(me.buttonsToolbar);
            }
        } else if (me.buttonsToolbar) {
            me.buttonsToolbar.hide();
        }
    }
}, function(){
    Ext.onSetup(function(){
        // Setup alias so we can just reference Ext.Msg2
        Ext.Msg2 = FW.view.MessageBox;
    });    
});

