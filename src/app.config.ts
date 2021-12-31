export default {
    pages: [
        'pages/home/index',
        'pages/location/index',
        'pages/my/index',
    ],
    window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
    },
    tabBar: {
        color: '',
        selectedColor: '',
        backgroundColor: '',
        list: [
            {
                pagePath: 'pages/home/index',
                text: '主页'
            },
            {
                pagePath: 'pages/location/index',
                text: '位置'
            },
            {
                pagePath: 'pages/my/index',
                text: '我的'
            }
        ]
    },
    permission: {
        'scope.userLocation': {
            desc: '你的位置信息将用于小程序位置接口的效果展示'
        }
    }
}
