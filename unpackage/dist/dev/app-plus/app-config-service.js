
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/list/list","pages/my/my","components/common/nav-bar","components/common/f-list","components/common/f-dialog","pages/video/video"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"企业网盘","navigationBarBackgroundColor":"#ffffff","backgroundColor":"#ffffff"},"tabBar":{"backgroundColor":"#ffffff","borderStyle":"black","color":"#bdbdbd","list":[{"iconPath":"static/tabbar/index.png","selectedIconPath":"static/tabbar/index-selected.png","pagePath":"pages/index/index","text":"首页"},{"iconPath":"static/tabbar/list.png","selectedIconPath":"static/tabbar/list-selected.png","pagePath":"pages/list/list","text":"传输列表"},{"iconPath":"static/tabbar/my.png","selectedIconPath":"static/tabbar/my-selected.png","pagePath":"pages/my/my","text":"我的"}]},"darkmode":false,"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"网盘app","compilerVersion":"3.99","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"titleNView":false}},{"path":"/pages/list/list","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"传输列表","enablePullDownRefresh":false,"titleNView":{"buttons":[{"color":"#333333","colorPressed":"#009cff","float":"right","fontSize":"22px","fontSrc":"/static/iconfont.ttf","text":""}]}}},{"path":"/pages/my/my","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"个人中心","enablePullDownRefresh":false}},{"path":"/components/common/nav-bar","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/components/common/f-list","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/components/common/f-dialog","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/video/video","meta":{},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
