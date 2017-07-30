/*
 * TokenInfo.js - View
 * 
 * Display info about specific token on phone
 */
 Ext.define('FW.view.phone.TokenInfo', {
    extend: 'Ext.Container',

    config: {
        layout: 'vbox',
        scrollable: 'vertical',
        cls: 'fw-panel',
        items:[{
            xtype: 'fw-toptoolbar',
            title: 'Information',
            menu: true
        },{
            xtype: 'container',
            layout: 'vbox',
            margin: '5 5 5 5',
            cls: 'no-label-ellipsis',
            items:[{
                xtype: 'container',
                layout: 'hbox',
                margin: '0 0 5 0',
                defaults: {
                    margin: '0 0 0 0'
                },
                items:[{
                    xtype: 'fieldset',
                    width: 65,
                    layout: {
                        type:'vbox',
                        pack:'center',
                        align: 'center'
                    },
                    items:[{
                        xtype: 'image',
                        itemId: 'image',
                        src: 'resources/images/wallet.png',
                        width: 48,
                        height: 48
                    }]
                },{
                    xtype: 'fieldset',
                    margin: '0 0 0 5',
                    flex: 1,
                    items:[{
                        labelAlign: 'top',
                        xtype: 'textfield',
                        readOnly: true,
                        label: 'Name',
                        itemId: 'asset',
                        value: ''
                    }]
                }]
            },{
                xtype: 'container',
                layout: 'hbox',
                itemId: 'actionButtons',
                margin: '0 0 5 0',
                defaults: {
                    xtype: 'button',
                    flex: 1
                },
                items: [{
                    text: '发送',
                    ui: 'confirm',
                    itemId: 'send',
                    iconCls: 'fa fa-paper-plane'
                },{
                    text: '接收',
                    ui: 'action',
                    itemId: 'receive',
                    iconCls: 'fa fa-qrcode',
                    margin: '0 0 0 5'
                }]
            },{
                xtype: 'fieldset',
                margin: '0 0 5 0',
                defaults:{
                    xtype: 'textfield',
                    labelWidth: 80,
                    readOnly: true,
                    cls: 'no-label-ellipsis'
                },
                items:[{
                    label: ' 我的余额',
                    itemId: 'balance'
                },{
                    label: ', 总供',
                    itemId: 'supply'
                },{
                    label: ' 美元价格',
                    itemId: 'usd'
                },{
                    label: ' BTC 价格',
                    itemId: 'btc'
                },{
                    label: ' XCP 价格',
                    itemId: 'xcp'
                },{
                    label: ' 可分的',
                    itemId: 'divisible'
                },{
                    label: ' 加密的',
                    itemId: 'locked'
                },{
                    label: ' 发行人',
                    itemId: 'issuer'
                },{
                    label: ' 持有人',
                    itemId: 'owner'
                },{
                    label: ' 说明',
                    itemId: 'description'
                },{
                    xtype: 'fw-actionfield',
                    cls: 'x-last-field',
                    label: ' 网站',
                    itemId: 'website',
                    iconCls: 'fa fa-globe',
                    handler: function(btn,url){
                        FW.app.getController('Main').openUrl(url);
                    }
                }]
            }]
        }]
    }

});
