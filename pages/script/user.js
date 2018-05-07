
//===================选项卡里的设置===================//

//===================常规===================//
//启动FF时的动作？ 0 打开空白页；1 打开主页；2 打开上次浏览的页面；3 恢复之前的会话
user_pref("browser.startup.page",1);
//主页
user_pref("browser.startup.homepage", "/home/mike/t/project/weblink/index.html");
//下载————————————————————————————————
user_pref("browser.download.useDownloadDir",true);//使用默认下载路径？总是询问下载位置
user_pref("browser.download.folderList",2);//默认下载路径？
user_pref("browser.download.dir","D:\\FF_download");//用户自定义的默认下载的路径
user_pref("browser.download.lastDir","R:");//最后一次下载的路径
user_pref("browser.download.lastDir.savePerSite",true);//火狐7以后，下载时根据不同的站点上次保存的路径，如D：//等，
user_pref("browser.download.manager.flashCount",5);//下载完成后下载窗口闪烁次数？默认2次 ，
user_pref("browser.download.useToolkitUI",false);//使用新的下载UI？
user_pref("browser.download.manager.scanWhenDone", false);//下载完成时不扫描

//===================标签式浏览===================//
//标签+窗口+标签页组，
user_pref("browser.tabs.warnOnClose",true);//关闭多个标签时警告我？与browser.warnOnQuit同效
user_pref("browser.warnOnQuit",true);//退出时警告（菜单->退出）？若browser.tabs.warnOnClose为false，则该参数无效，默认true，
user_pref("browser.tabs.warnOnOpen",true);//打开多个可能影响Firefox速度的标签时警告我？Yes
user_pref("browser.sessionstore.restore_on_demand",true);//选择标签之前不要加载之前的会话，true有利于降低启动时资源消耗？
user_pref("browser.tabs.loadInBackground",false);//后台打开标签？false时，打开标签页立即切换到新标签页
user_pref("browser.taskbar.previews.enable",false);//在任务栏显示标签预览？
//标签页组 Panorama
user_pref("browser.panorama.animate_zoom",true);//标签页组滑动动画？Panorama意思是“全景”，就是标签页组
user_pref("browser.allTabs.previews",false);//预览标签页组？标签页组没什么价值，
//Amination
user_pref("browser.fullscreen.animateUp",0);//关闭全屏时工具栏隐藏显示动画？
user_pref("browser.tabs.animate",true);//标签滑动动画？


//===================内容===================//
//字体+语言+编码，
user_pref("font.preload-names-list","Microsoft YaHei");//启动时加载的字体？
user_pref("general.useragent.locale","zh-CN");//界面语言？
user_pref("font.language.group","zh-CN");//用户的的语言组，默认值由 chrome://global/locale/intl.properties 在安装时决定
user_pref("intl.charset.default","UTF-8");//默认字符集，国际通用的是UFT-8，该参数决定当页面没有定义使用何种编码（现在几乎很少了）
user_pref("intl.charsetmenu.browser.cache","GB2312, GBK, UFT-8");//初始缓存字符集?
//user_pref("intl.charsetmenu.browser.cache.size",3);//初始缓存字符集数，默认5
user_pref("intl.accept_languages","zh-cn,zh,zh-hk,zh-sg,zh-tw,en-us,en,en-gb");//网页语言优先显示顺序，某些网页提供几种语言编码的版本
user_pref("intl.charset.detector","zh_parallel_state_machine");//自动检查？字符编码（universal_charset_detector 自动选择，空值为关闭）
//user_pref("network.standard-url.encode-query-utf8",true);//强制网页使用UTF-8编码？
user_pref("intl.charsetmenu.browser.static","GB2312, gbk, gb18030, Big5, UTF-8");//”查看”选项中”字符编码”的固定默认列表
user_pref("browser.display.use_document_fonts",1);//允许页面选择字体设置？0 不允许；1 允许；2 始终按照页面字体定义显示
//语言组默认使用的通用字体族，全部改为非衬线字体族，貌似我们强制定义了6种语言组编码默认的通用字体族，即非衬线字体族
user_pref("font.default.x-unicode","sans-serif");
user_pref("font.default.x-user-def","sans-serif");
user_pref("font.default.x-western","sans-serif");
user_pref("font.default.zh-CN","sans-serif");
user_pref("font.default.zh-HK","sans-serif");
user_pref("font.default.zh-TW","sans-serif");
//等宽字体
user_pref("font.name.monospace.x-western","Microsoft YaHei");//西方
user_pref("font.name.monospace.zh-CN","Microsoft YaHei");//简化字
user_pref("font.name.monospace.zh-HK","Microsoft JhengHei");//香港
user_pref("font.name.monospace.zh-TW","Microsoft JhengHei");//台湾
user_pref("font.name.monospace.x-central-euro","Microsoft YaHei");//中欧
user_pref("font.name.monospace.x-unicode","Microsoft YaHei");//其他语言
user_pref("font.name.monospace.x-user-def","Microsoft YaHei");//用户定义
//衬线字体
user_pref("font.name.serif.x-central-euro","Microsoft YaHei");
user_pref("font.name.serif.x-unicode","Microsoft YaHei");
user_pref("font.name.serif.x-user-def","Microsoft YaHei");
user_pref("font.name.serif.x-western","Microsoft YaHei");
user_pref("font.name.serif.zh-CN","Microsoft YaHei");
user_pref("font.name.serif.zh-HK","Microsoft YaHei");
user_pref("font.name.serif.zh-TW","Microsoft YaHei");
//非衬线字体
user_pref("font.name.sans-serif.x-central-euro","Microsoft YaHei");
user_pref("font.name.sans-serif.x-unicode","Microsoft YaHei");
user_pref("font.name.sans-serif.x-user-def","Microsoft YaHei");
user_pref("font.name.sans-serif.x-western","Microsoft YaHei");
user_pref("font.name.sans-serif.zh-CN","Microsoft YaHei");
user_pref("font.name.sans-serif.zh-HK","Microsoft YaHei");
user_pref("font.name.sans-serif.zh-TW","Microsoft YaHei");
//等宽字体大小
user_pref("font.size.fixed.x-central-euro",16);
user_pref("font.size.fixed.x-unicode",16);
user_pref("font.size.fixed.x-user-def",16);
user_pref("font.size.fixed.x-western",16);
user_pref("font.size.fixed.zh-CN",16);
user_pref("font.size.fixed.zh-HK",16);
user_pref("font.size.fixed.zh-TW",16);
//比例字体大小
user_pref("font.size.variable.x-central-euro",16);
user_pref("font.size.variable.x-unicode",16);
user_pref("font.size.variable.x-user-def",16);
user_pref("font.size.variable.x-western",16);
user_pref("font.size.variable.zh-CN",16);
user_pref("font.size.variable.zh-HK",16);
user_pref("font.size.variable.zh-TW",16);
//各语言组最小的字体12号，一般12号就能很好的显示非衬线字体的效果了，再小就会造成视觉疲劳，不易分辨；而且12 14 16 号是网页常用的字号
user_pref("font.minimum-size.x-central-euro",12);
user_pref("font.minimum-size.x-unicode",12);
user_pref("font.minimum-size.x-user-def",12);
user_pref("font.minimum-size.x-western",12);
user_pref("font.minimum-size.zh-CN",12);
user_pref("font.minimum-size.zh-HK",12);
user_pref("font.minimum-size.zh-TW",12);
user_pref("gfx.downloadable_fonts.enabled",true);//下载CSS3页面内可用的字体？
user_pref("browser.blink_allowed",false);//允许闪烁内容？Mozilla支持<blink> HTML元素和字体装饰的CSS属性，闪烁内容是十分令人厌恶的，禁用之


//===================安全===================//
user_pref("xpinstall.whitelist.required", false);//当站点尝试安装附加组件时发出警告

user_pref("browser.safebrowsing.enabled", false);//阻止已报告的伪造站点？
user_pref("browser.safebrowsing.malware.enabled", false);//阻止已报告的攻击站点？

user_pref("signon.rememberSignons", false);//记住网站密码


//===================高级===================//
//常规 浏览
user_pref("general.autoScroll", false);//使用自动滚屏
user_pref("general.smoothScroll",false);//使用平滑滚动//禁用平滑滚动，多图会卡顿
user_pref("layers.acceleration.disabled", true);//自动启用硬件加速
user_pref("layout.spellcheckDefault", 0);//输入时即拼写检查

//系统默认程序
user_pref("browser.shell.checkDefaultBrowser", true);//启动时检查是否为默认浏览器


//===================数据选择权===================//
user_pref("datareporting.healthreport.logging.consoleEnabled",true);//开启健康报告控制台日志？
user_pref("datareporting.healthreport.service.enabled",true);//开启健康报告服务？
user_pref("datareporting.healthreport.uploadEnabled",false);//允许发送健康报告到Mozilla？
user_pref("datareporting.policy.dataSubmissionEnabled",false);//允许发送数据报告？
//user_pref("datareporting.policy.dataSubmissionPolicyBypassAcceptance",false);//默认false
//user_pref("datareporting.policy.dataSubmissionPolicyAccepted",false);//默认false
//user_pref("toolkit.telemetry.enabledPreRelease",false);
//user_pref("dom.enable_performance",false);


//===================网络缓存===================//
//缓存设置为1GB
user_pref("browser.cache.disk.capacity", 1048576);//50MB,单位KB
user_pref("browser.cache.disk.smart_size.enabled", false);//开启磁盘缓存容量自动管理？即开启smart sizing？默认true，
user_pref("browser.cache.disk.smart_size.first_run", false);//标记是否属于首次smart sizing？默认true，
//内存缓存
//user_pref("browser.cache.memory.capacity", 102400);//-1时为自动;100MB,单位KB
user_pref("browser.cache.disk.max_entry_size",4096);//最大磁盘缓存元素大小？暗月设为4MB，任何大于4MB的元素都不建议缓存
//图片缓存？
user_pref("image.cache.size", 5242880);
//缓存位置设置
user_pref("browser.cache.disk.parent_directory", "D:\\Temp");
user_pref("browser.cache.offline.parent_directory", "D:\\Temp\\offline");//据说两个值不要设置成一样


//===================关闭自动更新===================//
user_pref("app.update.auto", false);
user_pref("app.update.enabled", false);
user_pref("app.update.migrated.updateDir", false);
user_pref("app.update.lastUpdateTime.browser-cleanup-thumbnails", 0);
user_pref("app.update.lastUpdateTime.datareporting-healthreport-lastDailyCollection", 0);
user_pref("app.update.disable_button.showUpdateHistory", false);
user_pref("app.update.service.enabled", false);
user_pref("browser.search.update", false); //不自动升级搜索引擎，几乎没用


//===================下面的参数是控制“清空最近历史记录”对话框的===================//
user_pref("privacy.sanitize.timeSpan",0);//“清空最近历史记录”对话框，Ctrl+Shift+Del；0 全部；1 一小时内；2 两小时内；3 四小时内；4 今天；
user_pref("privacy.cpd.cache",true);//磁盘缓存，没用啊，我默认就禁用了
user_pref("privacy.cpd.cookies",false);//Cookie？包括HTTP Cookie/LSO Cookie，
user_pref("privacy.cpd.downloads",true);//下载记录
user_pref("privacy.cpd.formdata",true);//表单，
user_pref("privacy.cpd.history",true);//浏览历史，
user_pref("privacy.cpd.offlineApps",true);//脱机数据/AppCache/离线缓存，脱机数据很有用啊
user_pref("privacy.cpd.passwords",true);//密码，有用啊
user_pref("privacy.cpd.sessions",true);//会话存储，有用啊，下回启动继续浏览啊
user_pref("privacy.cpd.siteSettings",true);//站点权限设置，更有用啊
user_pref("privacy.cpd.extensions-dta",true);//DTA! 历史和队列（看来DTA是使用FF自带的文件来保存下载历史的啊）
user_pref("privacy.cpd.extensions-tabmix",true);//Tab Mix Plus 清理历史记录


//===================browser===================//
user_pref("general.warnOnAboutConfig", false);//关闭进入about:config时的警告
user_pref("extensions.greasemonkey.installDelay", 0);//油猴安装去掉5秒倒计时
user_pref("security.dialog_enable_delay", 0);//安装附加组件时的等待时间
user_pref("plugin.scan.plid.all", true);//禁止FF加载时定位大部分注册表中的插件的路径  
user_pref("extensions.getAddons.cache.enabled", true);//扩展页面扩展不下载自动推荐内容 扩展页面扩展不下载自动推荐内容这个参数会让这个脚本失效AddonsPage
user_pref("browser.tabs.onTop",true);//标签栏置顶
user_pref("extensions.elemhidehelper.selectelement_key", "Accel Shift S, Accel Shift K, Accel Shift F3");//Adblock Plus 修改快捷键
user_pref("browser.urlbar.trimURLs", false);//地址栏显示http 此设置跟域名高亮脚本冲突
user_pref("browser.chrome.toolbar_tips", false);//关闭标签页上面的悬停提示
user_pref("plugins.hide_infobar_for_missing_plugin", true);//关闭安装插件提醒
user_pref("browser.xul.error_pages.expert_bad_cert", true);//自动展开：此连接是不受信任的
user_pref("browser.bookmarks.autoExportHTML", true);//书签生成html
user_pref("dom.popup_maximum", 5);//能够同时弹出窗口的数目，一个非点击事件(non-click event)可同时弹出的窗口数？默认20，即使当PB被禁用时也有效
user_pref("middlemouse.paste", true);//鼠标中键粘贴
user_pref("view_source.editor.path","C:\\Program Files (x86)\\Notepad++\\notepad++.exe");//外部编辑器查看
user_pref("browser.user_preferences.animateFadeIn", false);//关闭“选项”菜单滑动效果
user_pref("extensions.blocklist.enabled", false);//关于Flash过期插件的警告

//===================不生成新标签快拨缩略图===================//
user_pref("browser.newtabpage.enabled", false);//禁九宫格
user_pref("browser.taskbar.lists.enabled", false);//WIN7 禁止在配置\jumpListCache下生成站点favion，
user_pref("browser.pagethumbnails.capturing_disabled", true);//禁止截图最新访问页面的缩略图？这个缩略图会出现在新标签页about:newtab，

//===================lastdream2013设置===================//
user_pref("extensions.autoDisableScopes", 0);//火狐的扩展都是安装到Extensions文件夹里的，升级或重装火狐可以拷贝旧的Extensions文件夹省去重装扩展的步骤,设为10省去个个启用的步骤。
user_pref("toolkit.telemetry.rejected", true); //禁用帮助改进firefox 弹窗？
user_pref("toolkit.telemetry.prompted", 2);
user_pref("extensions.checkCompatibility", false); // 不根据版本检测扩展兼容性
user_pref("browser.startup.homepage_override.mstone", "ignore");//火狐启动时检测此处版本，若有更新则，启动下面的参数，同时更新此处值
user_pref("microsoft.CLR.auto_install", false);

//===================证书自动选择===================//
user_pref("security.default_personal_cert", "Select Automatically");//但服务器请求我的证书时如何处理？Ask Every Time，每次都询问，默认；Select Automatically，自动选择一个
user_pref("security.OCSP.enabled", 0);  //禁用OSCP验证

//===================DNT不要追踪我===================//
user_pref("privacy.donottrackheader.enabled", true);
user_pref("privacy.sanitize.migrateFx3user_prefs", true);


//===================禁所有devtools 控制台之类的东西===================//
user_pref("devtools.webconsole.filter.networkinfo", false);
user_pref("devtools.webconsole.filter.network", false);
user_pref("devtools.webconsole.filter.cssparser", false);
user_pref("devtools.webconsole.filter.csserror", false);
user_pref("devtools.webconsole.filter.", false);
user_pref("devtools.webconsole.enabled", false);
user_pref("devtools.toolbox.sideEnabled", false);
user_pref("devtools.toolbar.enabled", false);
user_pref("devtools.tilt.outro_transition", false);
user_pref("devtools.tilt.intro_transition", false);
user_pref("devtools.tilt.enabled", false);
user_pref("devtools.styleeditor.transitions", false);
user_pref("devtools.styleeditor.enabled", false);
user_pref("devtools.scratchpad.enabled", false);
user_pref("devtools.responsiveUI.enabled", false);
user_pref("devtools.profiler.enabled", false);
user_pref("devtools.netmonitor.enabled", false);
user_pref("devtools.layoutview.enabled", false);
user_pref("devtools.inspector.enabled", false);
user_pref("devtools.fontinspector.enabled", false);
user_pref("devtools.errorconsole.deprecation_warnings", false);
user_pref("devtools.editor.expandtab", false);
user_pref("devtools.debugger.ui.variables-sorting-enabled", false);
user_pref("devtools.debugger.force-local", false);
user_pref("devtools.debugger.enabled", false);//调试器，Ctrl+Shift+S
user_pref("devtools.debugger.chrome-enabled", false);


//===================平滑滚动设置===================//
user_pref("mousewheel.withnokey.sysnumlines",false);//首先禁用系统滚动步长
user_pref("mousewheel.withnokey.numlines", 7);//自己适当修改大小 建议为7
user_pref("mousewheel.acceleration.factor", 4);//使滚动幅度增大、减小.卷动加速为几倍
user_pref("mousewheel.acceleration.start", 3);//鼠标滚轮连续滚动几次之后会启动加速功能,调到0-5微调有明显变化
user_pref("mousewheel.default.delta_multiplier_y", 200);
user_pref("mousewheel.transaction.ignoremovedelay",150);
user_pref("mousewheel.transaction.timeout",1600);
user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 500);
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 180);


//===================关闭烦人提示 下面安全警告是关于混合内容的，默认不存在，===================//
user_pref("security.warn_entering_weak", false);//通知用户将要从安全网站进入非安全网站？
user_pref("security.warn_viewing_mixed", false);//当网站既有加密内容又有非加密内容时通知用户？
user_pref("browser.rights.3.shown", true);//火狐首次启动时是否已显示的权利通知 "Mozilla Firefox is free and open source software..." ？
user_pref("browser.syncPromoViewsLeftMap", "{\"bookmarks\":0}");

//===================禁止屏蔽非安全传输内容===================//
user_pref("security.mixed_content.block_active_content", false);//拦截来自非加密服务器的活动内容？默认true
user_pref("services.sync.user_prefs.sync.browser.download.manager.scanWhenDone", false);
user_pref("services.sync.user_prefs.sync.browser.download.manager.showWhenStarting", false);
user_pref("signed.applets.codebase_principal_support", true);
user_pref("ui.submenuDelay", 0);

//===================网络相关===================//
//加强HTTP利用率
user_pref("network.http.pipelining.ssl"  , true);
//默认开启spdy
user_pref("network.http.spdy.enabled", true);
//默认开启流水线，目前没有出现问题
user_pref("network.http.pipelining.firstrequest", true);
//老早就有的优化，据说仍有效
user_pref("network.http.pipelining", true); //减少Firefox载入网页的时间，提升连接速度的效果，因人而异，我是感觉非常明显
user_pref("network.http.pipelining.maxrequests", 8); //配合上一条使用
user_pref("network.http.proxy.pipelining", true); //优化原理同上
user_pref("network.dns.disableIPv6", true); //关闭IPv6纠错，减少返回请求的延迟，如果你经常访问IPV6网站，请改回为false
user_pref("content.interrupt.parsing", true); //键值默认并不存在,有点像流媒体一样加载网页，加速页面元素显示
user_pref("content.max.tokenizing.time", 2250000); //指定一个循环事件的处理周期,单位是微秒,这个值取的越小，网页载入的越流畅，理论上可以加速网页的载入
user_pref("content.notify.interval", 750000);  //官方说法是低于100000将会降低 Firefox 的性能，快速获取预载入页面，减少整体页面的载入时间
user_pref("content.notify.ontimer", true); //这个键值激活上面的设置才会生效，两条配合使用
user_pref("content.notify.backoffcount", 5); //控制Firefox的内置计数器在归零之前载入页面返回的次数,上面一条为true时才生效
user_pref("content.switch.threshold", 750000);  //网页载入过程更加的平滑
user_pref("nglayout.initialpaint.delay", 0); //理论上加速阅读网页的速度

//===================连接===================//
user_pref("network.user_prefetch-next", false);//默认关闭预读引擎，同Opera SimpleU的设置
user_pref("network.dns.disableuser_prefetch", true);//禁用DNS预读，防止路由阻塞
user_pref("network.dnsCacheEntries", 20);//DNS缓存中保存条目的数目
user_pref("network.dnsCacheExpiration", 1800);
user_pref("network.dnsCacheExpirationGracePeriod", 1800);
//remote dns, 这个对提高网速，预防dns劫持有没有意义还在实验
user_pref("network.proxy.socks_remote_dns", true);


//===================扩展===================//
//===================Adblock Plus===================//
user_pref("extensions.adblockplus.hideContributeButton", true);//隐藏助力abp项
user_pref("extensions.adblockplus.patternsbackups", 0);
user_pref("extensions.adblockplus.subscriptions_exceptionscheckbox", false);//非入侵式广告
user_pref("extensions.adblockplus.subscriptions_exceptionsurl", "");//删除非入侵式广告订阅网址
//user_pref("extensions.adblockplus.please_kill_startup_performance", false);//abp延迟启动
