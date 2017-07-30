/*
 * TransactionInfo.js - View
 * 
 * Display transaction information on phone
 */
 Ext.define('FW.view.phone.TransactionInfo', {
    extend: 'Ext.Container',

    config: {
        layout: 'vbox',
        scrollable: 'vertical',
        cls: 'fw-panel',
        items:[{
            xtype: 'fw-toptoolbar',
            title: 'Transaction Info',
            menu: true
        },{
            xtype: 'container',
            layout: 'vbox',
            margin: '5 5 5 5',
            items:[{
                xtype: 'container',
                itemId: 'iconContainer',
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
                        label: ' 名称',
                        itemId: 'asset',
                        value: ''
                    }]
                }]
            },{
                xtype: 'fieldset',
                margin: '0 0 5 0',
                defaults:{
                    xtype: 'textfield',
                    labelWidth: 80,
                    readOnly: true
                },
                items:[{
                    label: 'TX Type',
                    itemId: 'type'
                },{
                    xtype: 'fw-actionfield',
                    iconCls: 'fa fa-files-o',
                    label: ', 来源',
                    itemId: 'source'
                },{
                    xtype: 'fw-actionfield',
                    iconCls: 'fa fa-files-o',
                    label: ' 发行人-',
                    itemId: 'issuer'
                },{
                    xtype: 'fw-actionfield',
                    iconCls: 'fa fa-files-o',
                    label: ', 接收地址',
                    itemId: 'destination'
                },{
                    label: ' 数额',
                    itemId: 'quantity'
                },{
                    label: ' 说明',
                    itemId: 'description'
                },{
                    label: ' 可分的',
                    itemId: 'divisible'
                },{
                    label: ' 购买',
                    itemId: 'buying'
                },{
                    label: '出售',
                    itemId: 'selling'
                },{
                    label: ' 加密的',
                    itemId: 'locked'
                },{
                    label: ' 转账',
                    itemId: 'transfer'
                },{
                    label: '费用',
                    itemId: 'feePaid'
                },{
                    xtype: 'fw-actionfield',
                    label: ' TX 哈希值',
                    itemId: 'hash',
                    iconCls: 'fa fa-globe'
                },{
                    label: ' 数据大小',
                    itemId: 'block'
                },{
                    label: ' 时间戳',
                    itemId: 'timestamp'
                },{
                    label: ' 交易收',
                    itemId: 'fee'
                },{
                    label: ' 状态',
                    itemId: 'status'
                },{
                    label: '有效的',
                    itemId: 'value'
                },{
                    xtype: 'textareafield',
                    labelAlign: 'top',
                    label: ' 资讯',
                    itemId: 'message',
                    maxRows: 1,
                    height: 70
                }]
            }]
        }]
    }

});
