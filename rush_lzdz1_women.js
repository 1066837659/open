/*
品质女装年终终
https://lzdz1-isv.isvjcloud.com/dingzhi/dz/openCard/activity?activityId=dzsdfkl20211204A&shareUuid=8208fc186f0241f785c38c0a934aa6b7
默认执行脚本。如果需要不执行
环境变量 NO_RUSH=false
10-29 11-3
12.1~12.15 12.12大牌联合 宠爱有礼 [rush_jinggengjcq_dapainew.js]
All变量适用
————————————————
入口：[ 12.1~12.15 12.12大牌联合 宠爱有礼 ()]

请求太频繁会被黑ip
过10分钟再执行
cron:47 2 1-15 12 *
============Quantumultx===============
[task_local]
#12.1~12.15 12.12品质女装
47 2 1-15 12 * https://raw.githubusercontent.com/smiek2121/scripts/master/gua_opencard75.js, tag=12.1~12.15 12.12大牌联合 宠爱有礼, enabled=true
*/
const  $  =  new  Env （“品质女装年终终” ）；
const  jdCookieNode  =  $ 。节点( ) ? 要求( './jdCookie.js' ) : '' ;
常量 通知 =  $ 。节点( ) ? 要求（'./sendNotify' ）：'' ;
让 cookiesArr  =  [ ] ,  cookie  =  '' ,  message  =  '' ;
让 自己的代码 =  null ;
让 isRush  =  true ;
如果 （$ 。isNode （）） {
    对象。键( jdCookieNode ) 。forEach ( (项目)  =>  {
        饼干Arr 。推送（jdCookieNode [项目] ）
    } )
    if  ( process . env . JD_DEBUG  &&  process . env . JD_DEBUG  ===  'false' ) 控制台。日志 =  ( )  =>  {  } ;
} 其他 {
    让 cookiesData  =  $ 。getdata ( 'CookiesJD' )  ||  "[]" ;
    cookiesData  =  JSON 。解析（cookiesData ）；
    cookiesArr  =  cookiesData 。映射（项 => 项。饼干）;
    饼干Arr 。反转( ) ;
    饼干Arr 。推（ ... [ $ 。的GetData （'CookieJD2' ）， $ 。的GetData （'CookieJD' ）] ）; 
    饼干Arr 。反转( ) ;
    cookiesArr  =  cookiesArr 。滤波器（项目 => ！ ！项）;
}
if  ( process . env . NO_RUSH  &&  process . env . NO_RUSH  !=  "" )  {
    isRush  = 过程。ENV 。NO_RUSH ;
}
！(异步 ( )  =>  {
    $ . getAuthorCodeListerr  =  false
    如果 （！cookiesArr [ 0 ] ） {
        $ . msg ( $ . name ,  '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取' ,  'https://bean.m.jd.com/bean/signIndex.action' ,  {  " open-url" : "https://bean.m.jd.com/bean/signIndex.action"  } ) ;
        返回;
    }
    authorCodeList  =  await  getAuthorCodeList ( 'https://gitee.com/fatelight/code/raw/master/lzdz1_women.json' )
    如果（$ 。getAuthorCodeListerr  === 假）{
        作者代码列表 =  [
            '8208fc186f0241f785c38c0a934aa6b7' ，
        ]
    }

    对于 （让 我 =  0 ; 我 <  cookiesArr 。长度; 我++ ） {
        if  ( cookiesArr [ i ] )  {
            cookie  =  cookiesArr [ i ]
            originCookie  =  cookiesArr [ i ]
            新曲奇 =  ''
            $ . 用户名 =  decodeURIComponent （饼干。匹配（/ pt_pin = （。+？） ; /） && 饼干。匹配（/ pt_pin = （。+？） ; /）[ 1 ] ）
            $ . 指数 =  i  +  1 ;
            $ . isLogin  = 真;
            $ . 昵称 =  '' ;
            等待 checkCookie ( ) ;
            控制台。日志（`\ n ******开始【京东账号$ { $ 。索引}】$ { $ 。昵称 ||  $ 。用户名} ********* \ N` ）;
            如果 （！$ 。isLogin ） {
                $ . 味精（$ 。名称， `【提示】饼干已失效` ， `京东账号$ { $ 。指数}  $ { $ 。绰号 ||  $ 。用户名} \ n请重新登录获取\ nhttps：//bean.m。 jd.com/bean/signIndex.action` ,  {  "open-url" : "https://bean.m.jd.com/bean/signIndex.action"  } ) ;
                如果 （$ 。isNode （）） {
                    等待 通知。sendNotify （` $ { $ 。名}饼干已失效- $ { $ 。用户名} ` ， `京东账号$ { $ 。指数}  $ { $ 。用户名} \ n请重新登录获取cookie` ）;
                }
                继续
            }
            $ . 豆 =  0 ;
            $ . ADID  =  getUUID ( 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' ,  1 ) ;
            $ . UUID  =  getUUID ( 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' ) ;
            // $.authorCode = authorCodeList[random(0, authorCodeList.length)]
            $ . 作者代码 = 自己的代码？ownCode：authorCodeList [随机（0 ， authorCodeList 。长度）]
            $ . authorNum  =  ` ${随机( 1000000 ,  9999999 ) } `
            $ . randomCode  = 随机( 1000000 ,  9999999 )
            $ . 活动 ID =  'dzsdfkl20211204A'
            $ . 活动 商店 ID =  '14287'
            $ . activityUrl  =  `https://lzdz1-isv.isvjd.com/dingzhi/dz/openCard/activity/ ${ $ . authorNum } ?activityId= ${ $ . activityId } &shareUuid= ${ encodeURIComponent ( $ . authorCode ) } &adsource=null&shareuserid4minipg=null&shopid= ${ $ . activityShopId } &lng=00.000000&lat=00.000000&sid=&un_area=`
            if  ( isRush  ===  true )  {
                控制台。log ( "未检测到不执行环境变量，执行任务" )
                等待 匆忙（）；
            } 其他 {
                控制台。log ( "检测到不执行环境变量，退出任务，环境变量NO_RUSH" )
                休息
            }
            等待 $ 。等待（3000 ）
            如果 （$ 。豆 >  0 ） {
                message  +=  `\n【京东账号${ $ . 索引}】${ $ . 昵称 ||  $ . 用户名} \n └ 获得${ $ . 豆}京豆。`
            }
        }
    }
    如果 （消息 ！==  '' ） {
        如果 （$ 。isNode （）） {
            等待 通知。sendNotify ( $ . name ,  message ,  '' ,  `\n` ) ;
        } 其他 {
            $ . msg ( $ . name ,  '有点儿收获' ,  message ) ;
        }
    }
} ) ( )
    . 抓住( ( e )  =>  {
        $ . log ( '' ,  `❌ ${ $ . name } , 失败！原因: ${ e } !` ,  '' )
    } )
    . 最后( ( )  =>  {
        $ . 完成( ) ;
    } )


异步 函数 rush ( )  {
    $ . 令牌 = 空；
    $ . 密码 = 空；
    $ . openCardActivityId  =  null
    等待 getFirstLZCK ( )
    等待 getToken ( ) ;
    如果 ( $ .令牌)  {
        等待 getMyPing ( ) ;
        如果 （$ 。secretPin ） {
            控制台。日志（“去助力- >” + $ 。authorCode ）
            AWAIT 任务（'共同/ accessLogWithAD' ， `venderId = $ { $ 。activityShopId }＆代码= 99＆销= $ { encodeURIComponent方法（$ 。secretPin ）}＆activityId = $ { $ 。activityId }＆PAGEURL = $ { $ 。activityUrl }＆子类型=应用＆adSource =null` ,  1 ) ;
            等待 任务（'wxActionCommon/getUserInfo' ， `pin= ${ encodeURIComponent （$ . secretPin ）} ` ， 1 ）
            如果 ( $ .索引 ===  1 )  {
                AWAIT 任务（'DZ / openCard / activityContent' ， `activityId = $ { $ 。activityId }＆销= $ { encodeURIComponent方法（$ 。secretPin ）}＆pinImg =＆缺口= $ { encodeURIComponent方法（$ 。销）}＆cjyxPin =＆cjhyPin =＆shareUuid = ${ encodeURIComponent ( $ . authorCode ) } ` ,  0 ,  1 )
            } 其他 {
                AWAIT 任务（'DZ / openCard / activityContent' ， `activityId = $ { $ 。activityId }＆销= $ { encodeURIComponent方法（$ 。secretPin ）}＆pinImg =＆缺口= $ { encodeURIComponent方法（$ 。销）}＆cjyxPin =＆cjhyPin =＆shareUuid = ${ encodeURIComponent ( $ . authorCode ) } ` )
            }
            AWAIT 任务（'DZ / openCard / checkOpenCard' ， `activityId = $ { $ 。activityId }＆actorUuid = $ { $ 。actorUuid }＆shareUuid = $ { $ 。authorCode }＆销= $ { encodeURIComponent方法（$ 。secretPin ）} ` ）
            $ . log ( "->关注店铺" )
            如果 （$ 。shopTask ） {
                如果 （！$ 。shopTask 。allStatus ） {
                    AWAIT 任务（'DZ / openCard / followShop' ， `activityId = $ { $ 。activityId }＆销= $ { encodeURIComponent方法（$ 。secretPin ）}＆actorUuid = $ { encodeURIComponent方法（$ 。actorUuid ）}＆任务类型= 23＆taskValue = 1000002520` ）
                } 其他 {
                    $ . log ( " >>> 已经关注过了\n" )
                    等待 $ 。等待（2000 ）
                    返回
                }
            } 其他 {
                $ . log ( "没有获取到对应的任务。\n" )
            }
            $ . 日志（“->->->>加入店铺会员” ）
            如果 （$ 。openCardStatus ） {
                对于 （让 我 =  0 ; 我 <  （$ 。openCardStatus 。cardList1 。长度 +  $ 。openCardStatus 。cardList2 。长度）; 我++ ） {
                    $ . log （“模拟上报访问记录” ）
                    AWAIT 任务（'CRM / pageVisit / insertCrmPageVisit' ， `venderId = 1000004065＆PAGEID = dz20211013skcnurdk11jhdue84752hp＆elementId = $ { encodeURIComponent方法（`去开卡$ {我} ` ）}＆销= $ { encodeURIComponent方法（$ 。secretPin ）} ` ， 1 ）
                    等待 $ 。等待（2000 ）
                }
                t1TaskList  =  [ ]
                $ . 打开卡状态。卡片列表1 。filter ( ( x )  =>  {  if  ( x . status  ===  0 )  {  t1TaskList . push ( x )  }  } )
                t2TaskList  =  [ ]
                $ . 打开卡状态。卡片列表2 。filter ( ( x )  =>  {  if  ( x . status  ===  0 )  {  t2TaskList . push ( x )  }  } )
                如果 （t1TaskList 。长度 <  1 ） {
                    控制台。log ( " >>> 已经完成入会任务" )

                } 其他 {
                    for  ( const  vo  of  t1TaskList )  {
                        $ . log ( ` >>> 去加入${ vo . name } ` )
                        await  getShopOpenCardInfo ( {  "venderId" : ` ${ vo . value } ` ,  "channel" : "401"  } ,  vo . value )
                        await  bindWithVender ( {  "venderId" : ` ${ vo . value } ` ,  "bindByVerifyCodeFlag" : 1 ,  "registerExtend" : { } ,  "writeChildFlag" : 0 ,  "activityId" : $ . openCardActivityId ,  "channel" : 401  } ,  vo .值)
                        等待 $ 。等待（2000 ）
                    }
                    for  ( const  vo  of  t2TaskList )  {
                        $ . 日志（` >>> ${ vo . name } ` ）
                        await  getShopOpenCardInfo ( {  "venderId" : ` ${ vo . value } ` ,  "channel" : "401"  } )
                        await  bindWithVender ( {  "venderId" : ` ${ vo . value } ` ,  "bindByVerifyCodeFlag" : 1 ,  "registerExtend" : { } ,  "writeChildFlag" : 0 ,  "activityId" : $ . openCardActivityId ,  "channel" : 401  } ,  vo .值)
                        等待 $ 。等待（2000 ）
                    }
                }

                AWAIT 任务（“taskact / openCardcommon / drawContent” ， `activityId = $ { $ 。activityId }＆销= $ { encodeURIComponent方法（$ 。secretPin ）} ` ）
                等待 $ 。等待（2000 ）
                AWAIT 任务（'DZ / openCard / checkOpenCard' ， `activityId = $ { $ 。activityId }＆actorUuid = $ { $ 。actorUuid }＆shareUuid = $ { $ 。authorCode }＆销= $ { encodeURIComponent方法（$ 。secretPin ）} ` ）
                等待 $ 。等待（2000 ）
                AWAIT 任务（“DZ / openCard / startDraw” ， `activityId = $ { $ 。activityId }＆actorUuid = $ { $ 。actorUuid }＆类型= 1＆销= $ { encodeURIComponent方法（$ 。secretPin ）} ` ）
                等待 $ 。等待（2000 ）
                AWAIT 任务（“DZ / openCard / startDraw” ， `activityId = $ { $ 。activityId }＆actorUuid = $ { $ 。actorUuid }＆类型= 2＆销= $ { encodeURIComponent方法（$ 。secretPin ）} ` ）

            } 其他 {
                $ . log ( "没有获取到对应的任务。\n" )
            }
            $ . log ( "->->->> 加购物车" )
            AWAIT 任务（“DZ / openCard / saveTask” ， `activityId = $ { $ 。activityId }＆销= $ { encodeURIComponent方法（$ 。secretPin ）}＆actorUuid = $ { $ 。actorUuid }＆类型= 2＆taskValue = 100025232454` ）
        }
    }
}

函数 任务（function_id ， body ， isCommon  =  0 ， own  =  0 ） {
    返回 新的 承诺（解决 =>  {
        $ . post ( taskUrl ( function_id ,  body ,  isCommon ) ,  async  ( err ,  resp ,  data )  =>  {
            试试 {
                如果 （错误） {
                    $ . 日志（错误）
                } 其他 {

                    如果 （数据） {
                        数据 =  JSON 。解析（数据）；
                        如果 （数据。结果） {
                            开关 （function_id ） {
                                案例 'wxActionCommon/getUserInfo'：
                                    打破;
                                案例 “dz/openCard/activityContent”：
                                    如果 （！数据。数据。hasEnd ） {
                                        $ . 日志（`开启【$ {数据。数据。activityName }】活动` ）
                                        $ . 日志（“-------------------” ）
                                        如果 ( $ .索引 ===  1 )  {
                                            自己的代码 = 数据。数据。演员Uuid
                                            控制台。日志（自己的代码）
                                        }
                                        $ . actorUuid  = 数据。数据。演员Uuid ;
                                        $ . skuTask  = 数据。数据。添加Sku ;
                                        $ . shopTask  = 数据。数据。关注店铺；
                                    } 其他 {
                                        $ . log ( "活动已经结束" ) ;
                                    }
                                    打破;
                                案例 “dz/openCard/checkOpenCard”：
                                    $ . openCardStatus  = 数据。数据；
                                    打破;
                                案例 “dz/openCard/saveTask”：
                                    控制台。日志（数据。数据。addBeanNum ）
                                    打破;
                                案例 “dz/openCard/saveTask”：
                                    如果 （数据。数据） {
                                        如果 （数据。数据。addBeanNum ） {
                                            $ . 豆 += 数据。数据。addBeanNum ;
                                            $ . log ( `==>获得【${ data . data . addBeanNum }】京豆\n` )
                                        }
                                    }
                                    打破;
                                案例 “dz/openCard/startDraw”：
                                    如果 （数据。数据。drawOk ） {
                                        开关 （数据。数据。绘图信息。类型） {
                                            案例 6：
                                                $ . 豆 += 数据。数据。绘制信息。豆数;
                                                $ . 日志（`==>获得【$ {数据。数据。drawInfo 。beanNum }】京豆\ N` ）
                                                打破;
                                            默认：
                                                如果 （$ 。isNode （）） {
                                                    等待 通知。sendNotify （“中奖了” ， `中奖信息：$ { JSON 。字符串化（数据。数据。drawInfo ）} \ n活动链接：$ { $ 。activityUrl } ` ）
                                                } 其他 {
                                                    $ . MSG （“中奖了” ， `获得$ {数据。数据。drawInfo 。名} ` ， `中奖信息：$ { JSON 。字符串化（数据。数据。drawInfo ）} \ n活动链接：$ { $ 。activityUrl } ` )
                                                }
                                                打破;
                                        }
                                    }
                                    打破;
                                案例 'crm/pageVisit/insertCrmPageVisit'：
                                    $ . log ( "==> 上报成功" )

                                案例 “dz/openCard/followShop”：
                                    如果 （数据。数据） {
                                        如果 （数据。数据。addBeanNum ） {
                                            $ . 豆 += 数据。数据。addBeanNum ;
                                            $ . log ( `==>获得【${ data . data . addBeanNum }】京豆\n` )
                                        }
                                    }
                                    打破;

                                    打破;
                                默认：
                                    $ . 日志（JSON 。字符串化（数据））
                                    打破;
                            }
                        } 其他 {
                            $ . 日志（JSON 。字符串化（数据））
                        }
                    } 其他 {
                        // $.log("京东没有返回数据")
                    }
                }
            } 捕捉 （错误） {
                $ . 日志（错误）
            } 最后 {
                解决( ) ;
            }
        } )
    } )
}
函数 getShopOpenCardInfo ( body ,  venderId )  {
    让 选择 =  {
        url : `https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=getShopOpenCardInfo&body= ${ encodeURIComponent ( JSON . stringify ( body ) ) } &client=H5&clientVersion=9.2.0&uuid=88888` ,
        标题：{
            主机: 'api.m.jd.com' ,
            接受: '*/*' ,
            连接：'保持活动' ，
            曲奇：曲奇，
            '用户代理'：`jdapp;iPhone;9.5.4;13.6; ${ $ . UUID } ;network/wifi;ADID/ ${ $ . ADID } ;model/iPhone10,3;addressid/0;appBuild/167668;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 ;支持JDSHWK/1` ,
            '接受语言' : 'zh-cn' ,
            引用者：`https://shopmember.m.jd.com/shopcard/?venderId= $ { venderId } }＆信道= 801＆RETURNURL = $ { encodeURIComponent方法（$ 。activityUrl ）} ` ，
            '接受编码'：'gzip，放气，br'
        }
    }
    返回 新的 承诺（解决 =>  {
        $ . 获取（选择， （错误， 响应， 数据） =>  {
            试试 {
                如果 （错误） {
                    控制台。日志（错误）
                } 其他 {
                    资源 =  JSON 。解析（数据）
                    如果 （资源。成功） {
                        如果 （RES 。结果。interestsRuleList ） {
                            $ . openCardActivityId  =  res 。结果。兴趣规则列表[ 0 ] 。兴趣信息。活动编号；
                        }
                    }
                }
            } 捕捉 （错误） {
                控制台。日志（错误）
            } 最后 {
                解决( ) ;
            }
        } )

    } )
}
函数 bindWithVender ( body ,  venderId )  {
    让 选择 =  {
        url : `https://api.m.jd.com/client.action?appid=jd_shop_member&functionId=bindWithVender&body= ${ encodeURIComponent ( JSON . stringify ( body ) ) } &client=H5&clientVersion=9.2.0&uuid=88888` ,
        标题：{
            主机: 'api.m.jd.com' ,
            接受: '*/*' ,
            连接：'保持活动' ，
            曲奇：曲奇，
            '用户代理'：`jdapp;iPhone;9.5.4;13.6; ${ $ . UUID } ;network/wifi;ADID/ ${ $ . ADID } ;model/iPhone10,3;addressid/0;appBuild/167668;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 ;支持JDSHWK/1` ,
            '接受语言' : 'zh-cn' ,
            引用者：`https://shopmember.m.jd.com/shopcard/?venderId= $ { venderId } }＆信道= 401＆RETURNURL = $ { encodeURIComponent方法（$ 。activityUrl ）} ` ，
            '接受编码'：'gzip，放气，br'
        }
    }
    返回 新的 承诺（解决 =>  {
        $ . 获取（选择， （错误， 响应， 数据） =>  {
            试试 {
                如果 （错误） {
                    控制台。日志（错误）
                } 其他 {
                    资源 =  JSON 。解析（数据）
                    如果 （资源。成功） {
                        如果 （RES 。结果。giftInfo  &&  RES 。导致。giftInfo 。giftList ） {
                            对于 （const的 VO 的 水库。导致。giftInfo 。giftList ） {
                                if  ( vo . PrizeType  ===  4 )  {
                                    $ . 日志（`==>获得【$ { VO 。数量}】京豆` ）
                                    $ . 豆 +=  vo 。数量
                                }
                            }
                        }
                    }
                }
            } 捕捉 （错误） {
                控制台。日志（错误）
            } 最后 {
                解决( ) ;
            }
        } )

    } )
}
函数 taskUrl ( function_id ,  body ,  isCommon )  {
    返回 {
        网址：isCommon？`https://lzdz1-isv.isvjd.com/$ { function_id } `：`https : //lzdz1-isv.isvjd.com/dingzhi/$ { function_id } ` ，
        标题：{
            主机：'lzdz1-isv.isvjd.com' ，
            接受：'应用程序/json' ，
            'X-Requested-With' : 'XMLHttpRequest' ,
            '接受语言' : 'zh-cn' ,
            '接受编码' : 'gzip, deflate, br' ,
            '内容类型'：'应用程序/x-www-form-urlencoded' ，
            来源：'https : //lzdz1-isv.isvjd.com' ，
            '用户代理'：`jdapp;iPhone;9.5.4;13.6; ${ $ . UUID } ;network/wifi;ADID/ ${ $ . ADID } ;model/iPhone10,3;addressid/0;appBuild/167668;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 ;支持JDSHWK/1` ,
            连接：'保持活动' ，
            推荐人：$ 。活动网址，
            曲奇：曲奇
        } ,
        身体：身体

    }
}
函数 getAuthorCodeList ( url )  {
    返回 新的 承诺（解决 =>  {
        常量 选项 =  {
            网址：` ${网址}？${ new  Date ( ) } ` ,  "timeout" : 10000 ,  headers : {
            “用户代理”：“Mozilla/5.0（iPhone；CPU iPhone OS 13_2_3，如 Mac OS X）AppleWebKit/605.1.15（KHTML，如 Gecko）版本/13.0.3 Mobile/15E148 Safari/604.1 Edg/87.0.4280.88”
            }
        } ;
        $ . 获取（选项， 异步 （错误， 响应， 数据） =>  {
            试试 {
                如果 （错误） {
                    // $.log(错误)
                    $ . getAuthorCodeListerr  =  false
                } 其他 {
                如果 （数据） 数据 =  JSON 。解析（数据）
                    $ . getAuthorCodeListerr  = 真
                }
            } 赶上 （e ） {
                $ . logErr ( e ,  resp )
                数据 = 空；
            } 最后 {
                解析（数据）；
            }
        } )
    } )
}
函数 getMyPing ( )  {
    让 选择 =  {
        网址：`https://lzdz1-isv.isvjd.com/customer/getMyPing` ，
        标题：{
            主机：'lzdz1-isv.isvjd.com' ，
            接受：'应用程序/json' ，
            'X-Requested-With' : 'XMLHttpRequest' ,
            '接受语言' : 'zh-cn' ,
            '接受编码' : 'gzip, deflate, br' ,
            '内容类型'：'应用程序/x-www-form-urlencoded' ，
            来源：'https : //lzdz1-isv.isvjd.com' ，
            '用户代理'：`jdapp;iPhone;9.5.4;13.6; ${ $ . UUID } ;network/wifi;ADID/ ${ $ . ADID } ;model/iPhone10,3;addressid/0;appBuild/167668;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 ;支持JDSHWK/1` ,
            连接：'保持活动' ，
            推荐人：$ 。活动网址，
            曲奇：曲奇，
        } ,
        正文：`userId= ${ $ . activityShopId } &token= ${ $ . 令牌} &fromType=APP&riskType=1`
    }
    返回 新的 承诺（解决 =>  {
        $ . 后（选择， （错误， 响应， 数据） =>  {
            试试 {
                如果 （错误） {
                    $ . 日志（错误）
                } 其他 {
                    if  ( resp [ 'headers' ] [ 'set-cookie' ] )  {
                        cookie  =  ` ${ originCookie } `
                        如果 （$ 。isNode （）） {
                            for  ( let  sk  of  resp [ 'headers' ] [ 'set-cookie' ] )  {
                                cookie  =  ` ${ cookie } ${ sk . 拆分( ";" ) [ 0 ] } ;`
                            }
                        } 其他 {
                            for  ( let  ck  of  resp [ 'headers' ] [ 'Set-Cookie' ] . split ( ',' ) )  {
                                cookie  =  ` ${ cookie } ${ ck . 拆分( ";" ) [ 0 ] } ;`
                            }
                        }
                    }
                    if  ( resp [ 'headers' ] [ 'Set-Cookie' ] )  {
                        cookie  =  ` ${ originCookie } `
                        如果 （$ 。isNode （）） {
                            for  ( let  sk  of  resp [ 'headers' ] [ 'set-cookie' ] )  {
                                cookie  =  ` ${ cookie } ${ sk . 拆分( ";" ) [ 0 ] } ;`
                            }
                        } 其他 {
                            for  ( let  ck  of  resp [ 'headers' ] [ 'Set-Cookie' ] . split ( ',' ) )  {
                                cookie  =  ` ${ cookie } ${ ck . 拆分( ";" ) [ 0 ] } ;`
                            }
                        }
                    }
                    如果 （数据） {
                        数据 =  JSON 。解析（数据）
                        如果 （数据。结果） {
                            $ . 日志（`你好：${数据.数据.昵称} ` ）
                            $ . 引脚 = 数据。数据。昵称；
                            $ . 密码 = 数据。数据。密码;
                            cookie  =  ` ${ cookie } ;AUTH_C_USER= ${数据。数据。密码} `
                        } 其他 {
                            $ . 日志（数据。的errorMessage ）
                        }
                    } 其他 {
                        // $.log("京东返回了空数据")
                    }
                }
            } 捕捉 （错误） {
                $ . 日志（错误）
            } 最后 {
                解决( ) ;
            }

        } )
    } )
}
函数 getFirstLZCK ( )  {
    返回 新的 承诺（解决 =>  {
        $ . 得到（{  URL：$ 。activityUrl  } ， （犯错， RESP ， 数据） =>  {
            试试 {
                如果 （错误） {
                    控制台。日志（错误）
                } 其他 {
                    if  ( resp [ 'headers' ] [ 'set-cookie' ] )  {
                        cookie  =  ` ${ originCookie } `
                        如果 （$ 。isNode （）） {
                            for  ( let  sk  of  resp [ 'headers' ] [ 'set-cookie' ] )  {
                                cookie  =  ` ${ cookie } ${ sk . 拆分( ";" ) [ 0 ] } ;`
                            }
                        } 其他 {
                            for  ( let  ck  of  resp [ 'headers' ] [ 'Set-Cookie' ] . split ( ',' ) )  {
                                cookie  =  ` ${ cookie } ${ ck . 拆分( ";" ) [ 0 ] } ;`
                            }
                        }
                    }
                    if  ( resp [ 'headers' ] [ 'Set-Cookie' ] )  {
                        cookie  =  ` ${ originCookie } `
                        如果 （$ 。isNode （）） {
                            for  ( let  sk  of  resp [ 'headers' ] [ 'set-cookie' ] )  {
                                cookie  =  ` ${ cookie } ${ sk . 拆分( ";" ) [ 0 ] } ;`
                            }
                        } 其他 {
                            for  ( let  ck  of  resp [ 'headers' ] [ 'Set-Cookie' ] . split ( ',' ) )  {
                                cookie  =  ` ${ cookie } ${ ck . 拆分( ";" ) [ 0 ] } ;`
                            }
                        }
                    }
                }
            } 捕捉 （错误） {
                控制台。日志（错误）
            } 最后 {
                解决( ) ;
            }
        } )
    } )
}
函数 getToken ( )  {
    让 选择 =  {
        网址：`https://api.m.jd.com/client.action?functionId=isvObfuscator` ，
        标题：{
            主机: 'api.m.jd.com' ,
            '内容类型'：'应用程序/x-www-form-urlencoded' ，
            接受: '*/*' ,
            连接：'保持活动' ，
            曲奇：曲奇，
            “用户代理”：“JD4iPhone/167650（iPhone；iOS 13.7；规模/3.00）” ，
            '接受语言' : 'zh-Hans-CN;q=1' ,
            '接受编码' : 'gzip, deflate, br' ,
        } ,
        正文：`body=%7B%22url%22%3A%20%22https%3A//lzkj-isv.isvjcloud.com%22%2C%20%22id%22%3A%20%22%22%7D&uuid=hjudwgohxzVu96krv&client =apple&clientVersion=9.4.0&st=1620476162000&sv=111&sign=f9d1b7e3b943b6a136d54fe4f892af05`
    }
    返回 新的 承诺（解决 =>  {
        $ . 后（选择， （错误， 响应， 数据） =>  {
            试试 {
                如果 （错误） {
                    $ . 日志（错误）
                } 其他 {
                    如果 （数据） {
                        数据 =  JSON 。解析（数据）；
                        如果 （数据。代码 ===  “0” ） {
                            $ . 令牌 = 数据。令牌
                        }
                    } 其他 {
                        $ . log ( "京东返回了空数据" )
                    }
                }
            } 捕捉 （错误） {
                $ . 日志（错误）
            } 最后 {
                解决( ) ;
            }
        } )
    } )
}
函数 随机（最小， 最大） {

    返回 数学。地板（数学。随机（） *  （最大值 - 最小）） + 分钟;

}
函数 getUUID (格式 =  'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' ,  UpperCase  =  0 )  {
    返回 格式。替换( / [ xy ] / g , 函数 ( c )  {
        无功 r  = 数学。随机( )  *  16  |  0 ,  v  =  c  ==  'x' ? r : ( r  &  0x3  |  0x8 ) ;
        如果 （大写） {
            uuid  =  v 。toString ( 36 ) 。大写（）；
        } 其他 {
            uuid  =  v 。toString ( 36 )
        }
        返回 uuid ；
    } ) ;
}
函数 checkCookie ( )  {
    常量 选项 =  {
        url : "https://me-api.jd.com/user_new/info/GetJDUserInfoUnion" ,
        标题：{
            "Host" : "me-api.jd.com" ,
            "接受" : "*/*" ,
            “连接”：“保持活动” ，
            “曲奇”：曲奇，
            "User-Agent" : "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.2 Mobile/15E148 Safari/604.1" ,
            "Accept-Language" : "zh-cn" ,
            "Referer" : "https://home.m.jd.com/myJd/newhome.action?sceneval=2&ufc=&" ,
            "Accept-Encoding" : "gzip, deflate, br" ,
        }
    } ;
    返回 新的 承诺（解决 =>  {
        $ . 获取（选项， （错误， 响应， 数据） =>  {
            试试 {
                如果 （错误） {
                    $ . 日志错误（错误）
                } 其他 {
                    如果 （数据） {
                        数据 =  JSON 。解析（数据）；
                        如果 （数据。RETCODE  ===  “1001” ） {
                            $ . isLogin  =  false ;  //cookie过期
                            返回;
                        }
                        如果 （数据。RETCODE  ===  “0”  && 数据。数据。hasOwnProperty （“USERINFO” ）） { 
                            $ . 昵称 = 数据。数据。用户信息。基础信息。昵称；
                        }
                    } 其他 {
                        $ . log ( '京东返回了空数据' ) ;
                    }
                }
            } 赶上 （e ） {
                $ . 日志错误( e )
            } 最后 {
                解决( ) ;
            }
        } )
    } )
}
// 更漂亮的忽略
！函数 ( n )  {  "使用严格" ;  函数 t ( n ,  t )  {  var  r  =  ( 65535  &  n )  +  ( 65535  &  t ) ;  返回 ( n  >>  16 )  +  ( t  >>  16 )  +  ( r  >>  16 )  <<  16  |  65535  &  r  } 函数 r ( n ,  t )  { 返回 n  <<  t  |  n  >>>  32  -  t  } 函数 e ( n ,  e ,  o ,  u ,  c ,  f )  {  return  t ( r ( t ( t ( e ,  n ) ,  t ( u ,  f ) ) ,  c ) , o )  } 函数 o ( n ,  t ,  r ,  o ,  u ,  c ,  f )  {  return  e ( t  &  r  |  ~ t  &  o ,  n ,  t ,  u ,  c ,  f )  } 函数 u ( n ,  t ,  r ,  o ,  u ,  c ,  f)  {  return  e ( t  &  o  |  r  &  ~ o ,  n ,  t ,  u ,  c ,  f )  } 函数 c ( n ,  t ,  r ,  o ,  u ,  c ,  f )  {  return  e ( t  ^  r  ^  o ,  n ,  t ,  u ,  c , f )  } 函数 f ( n ,  t ,  r ,  o ,  u ,  c ,  f )  {  return  e ( r  ^  ( t  |  ~ o ) ,  n ,  t ,  u ,  c ,  f )  } 函数 i ( n ,  r )  {  n [ r  >>  5 ]  |= 128  <<  r  %  32 ,  n [ 14  +  ( r  +  64  >>>  9  <<  4 ) ]  =  r ;  var  e ,  i ,  a ,  d ,  h ,  l  =  1732584193 ,  g  =  - 271733879 ,  v  =  - 1732584194 ,  m  =  271733878 ;  对于 ( e  =  0 ; e  <  n 。长度； e  +=  16 ) i  =  l ,  a  =  g ,  d  =  v ,  h  =  m ,  g  =  f ( g  =  f ( g  =  f ( g  =  f ( g  =  c ( g  =  c ( g  =  c ( g  =  c ( g  = u ( g  =  u ( g  =  u ( g  =  u ( g  =  o ( g  =  o ( g  =  o ( g  =  o ( g ,  v  =  o ( v ,  m  =  o ( m ,  l  =  o ( l ,  g ,  v ,  m ,  n [ e ] , 7 ， - 680876936 ）， 克， v ， Ñ [ ë  +  1 ] ， 12 ， - 389564586 ）， 升， 克， Ñ [ ë  +  2 ] ， 17 ， 606105819 ）， 米， 升， Ñ [ ë  +  3 ] ， 22 ,  - 1044525330 ) ,  v  = o ( v ,  m  =  o ( m ,  l  =  o ( l ,  g ,  v ,  m ,  n [ e  +  4 ] ,  7 ,  - 176418897 ) ,  g ,  v ,  n [ e  +  5 ] ,  12 ,  1200080426 ) ,  l ,  g ,  n [ e  +  6] ,  17 ,  - 1473231341 ) ,  m ,  l ,  n [ e  +  7 ] ,  22 ,  - 45705983 ) ,  v  =  o ( v ,  m  =  o ( m ,  l  =  o ( l ,  g ,  v ,  m ,  n [ e  +  8 ] ,  7 ,  1770035416）， 克， v ， Ñ [ ë  +  9 ] ， 12 ， - 1958414417 ）， 升， 克， Ñ [ ë  +  10 ] ， 17 ， - 42063 ）， 米， 升， Ñ [ ë  +  11 ] ， 22 ， - 1990404162 ) ,  v  =  o ( v , m  =  o ( m ,  l  =  o ( l ,  g ,  v ,  m ,  n [ e  +  12 ] ,  7 ,  1804603682 ) ,  g ,  v ,  n [ e  +  13 ] ,  12 ,  - 40341101 ) ,  l ,  g ,  n [ e  +  14 ] ,  17,  - 1502002290 ) ,  m ,  l ,  n [ e  +  15 ] ,  22 ,  1236535329 ) ,  v  =  u ( v ,  m  =  u ( m ,  l  =  u ( l ,  g ,  v ,  m ,  n [ e  +  1 ) ] ,  5 ,  - 165796510 ) ,  g， v ， Ñ [ ë  +  6 ] ， 9 ， - 1069501632 ）， 升， 克， Ñ [ ë  +  11 ] ， 14 ， 643717713 ）， 米， 升， Ñ [ ë ] ， 20 ， - 373897302 ）， v  =  û ( v ,  m  =  u ( m , l  =  u ( l ,  g ,  v ,  m ,  n [ e  +  5 ] ,  5 ,  - 701558691 ) ,  g ,  v ,  n [ e  +  10 ] ,  9 ,  38016083 ) ,  l ,  g ,  n [ e  +  15 ] ,  14 ,  - 660478335 ) , 米,  l ,  n [ e  +  4 ] ,  20 ,  - 405537848 ) ,  v  =  u ( v ,  m  =  u ( m ,  l  =  u ( l ,  g ,  v ,  m ,  n [ e  +  9 ] ,  5 ,  568446438 ) ,  g ,  v ,  n [ e  + 14 ] ， 9 ， - 1019803690 ）， 升， 克， Ñ [ ë  +  3 ] ， 14 ， - 187363961 ）， 米， 升， Ñ [ ë  +  8 ] ， 20 ， 1163531501 ）， v  =  ù （v ， 米 =  u ( m ,  l  =  u ( l,  g ,  v ,  m ,  n [ e  +  13 ] ,  5 ,  - 1444681467 ) ,  g ,  v ,  n [ e  +  2 ] ,  9 ,  - 51403784 ) ,  l ,  g ,  n [ e  +  7 ] ,  14 ,  1735328473 ) ,  m ,  l ,  n [e  +  12 ] ,  20 ,  - 1926607734 ) ,  v  =  c ( v ,  m  =  c ( m ,  l  =  c ( l ,  g ,  v ,  m ,  n [ e  +  5 ] ,  4 ,  - 378558 ) ,  g ,  v ,  n [ e  +  8 ] ,  11， - 2022574463 ）， 升， 克， Ñ [ ë  +  11 ] ， 16 ， 1839030562 ）， 米， 升， Ñ [ ë  +  14 ] ， 23 ， - 35309556 ）， v  =  Ç （v ， 米 =  Ç （米， l  =  c ( l ,  g ,  v， 米， Ñ [ ë  +  1 ] ， 4 ， - 1530992060 ）， 克， v ， Ñ [ ë  +  4 ] ， 11 ， 1272893353 ）， 升， 克， Ñ [ ë  +  7 ] ， 16 ， - 155497632 ）， 米,  l ,  n [ e  +  10 ],  23 ,  - 1094730640 ) ,  v  =  c ( v ,  m  =  c ( m ,  l  =  c ( l ,  g ,  v ,  m ,  n [ e  +  13 ] ,  4 ,  681279174 ) ,  g ,  v ,  n [ e ] ,  11 ,  - 358537222 ) ,  l,  g ,  n [ e  +  3 ] ,  16 ,  - 722521979 ) ,  m ,  l ,  n [ e  +  6 ] ,  23 ,  76029189 ) ,  v  =  c ( v ,  m  =  c ( m ,  l  =  c ( l ,  g ,  v ,  m ,  n [ e  + 9 ] ， 4 ， - 640364487 ）， 克， v ， Ñ [ ë  +  12 ] ， 11 ， - 421815835 ）， 升， 克， Ñ [ ë  +  15 ] ， 16 ， 530742520 ）， 米， 升， Ñ [ ë  +  2 ] ,  23 ,  - 995338651 ),  v  =  f ( v ,  m  =  f ( m ,  l  =  f ( l ,  g ,  v ,  m ,  n [ e ] ,  6 ,  - 198630844 ) ,  g ,  v ,  n [ e  +  7 ] ,  10 ,  1126891415 ) ,  l ,  g ,  n [ e  + 14 ] ,  15 ,  - 1416354905 ) ,  m ,  l ,  n [ e  +  5 ] ,  21 ,  - 57434055 ) ,  v  =  f ( v ,  m  =  f ( m ,  l  =  f ( l ,  g ,  v ,  m ,  n [ e  +  12 ] ,  6 , 1700485571 ）， 克， v ， Ñ [ ë  +  3 ] ， 10 ， - 1894986606 ）， 升， 克， Ñ [ ë  +  10 ] ， 15 ， - 1051523 ）， 米， 升， Ñ [ ë  +  1 ] ， 21 ， - 2054922799 ) ,  v  =  f (v ,  m  =  f ( m ,  l  =  f ( l ,  g ,  v ,  m ,  n [ e  +  8 ] ,  6 ,  1873313359 ) ,  g ,  v ,  n [ e  +  15 ] ,  10 ,  - 30611744 ) ,  l ,  g ,  n [ e  +  6 ] , 15 ,  - 1560198380 ) ,  m ,  l ,  n [ e  +  13 ] ,  21 ,  1309151649 ) ,  v  =  f ( v ,  m  =  f ( m ,  l  =  f ( l ,  g ,  v ,  m ,  n [ e  +  4 ] ,  6 ,  - 145523070 ) , 克， v ， Ñ [ ë  +  11 ] ， 10 ， - 1120210379 ）， 升， 克， Ñ [ ë  +  2 ] ， 15 ， 718787259 ）， 米， 升， Ñ [ ë  +  9 ] ， 21 ， - 343485551 ）， l  =  t ( l ,  i ) , g  =  t ( g ,  a ) ,  v  =  t ( v ,  d ) ,  m  =  t ( m ,  h ) ;  return  [ l ,  g ,  v ,  m ]  } 函数 a ( n )  {  var  t ,  r  =  "" ,  e  =  32  *  n 。长度； for  ( t  =  0 ;  t  <  e ;  t  +=  8 ) r  +=  String 。fromCharCode ( n [ t  >>  5 ]  >>>  t  %  32  &  255 ) ;  返回 r  } 函数 d ( n )  {  var  t ,  r  =  [ ] ;  对于 ( r [ ( n .长度 >>  2 )  -  1 ]  = 无效 0 ,  t  =  0 ;  t  <  r 。长度； t  +=  1 ) r [ t ]  =  0 ;  无功 e  =  8  *  n 。长度； 对于 ( t  =  0 ;  t  <  e ;  t  +=  8 ) r [ t  >> 5 ]  | =  （255  ＆ Ñ 。charCodeAt （吨 /  8 ）） << 吨 ％ 32 ;  返回 ř  } 功能 ħ （Ñ ） { 返回 一个（我（d （Ñ ）， 8  *  Ñ 。长度）） } 函数 升（Ñ ， 吨） {  VAR  - [R ， e ,  o  =  d ( n ) ,  u  =  [ ] ,  c  =  [ ] ;  对于 （û [ 15 ]  =  c ^ [ 15 ]  = 无效 0 ， ö 。长度 >  16  &&  （Ô  = 我（ø ， 8  *  Ñ 。长度））， - [R  =  0 ;  ř <  16 ;  r  +=  1 ) u [ r ]  =  909522486  ^  o [ r ] ,  c [ r ]  =  1549556828  ^  o [ r ] ;  返回 ë  = 我（Ú 。CONCAT （d （吨））， 512  +  8  * 吨。长度）， 一个（我（Ç 。CONCAT （ê ）， 640 ）） } 函数 克（Ñ ） {  VAR 吨， - [R ， È  =  “” ;  对于 ( r  =  0 ;  r  <  n .长度;  r  +=  1 ) t  =  n 。charCodeAt ( r ) ,  e  +=  "0123456789abcdef" 。字符( t  >>>  4  &  15 )  +  "0123456789abcdef" 。字符( 15  &  t ) ;  return  e  }  function  v ( n )  {  return  unescape ( encodeURIComponent ( n ) )  }  function  m ( n )  {  return  h ( v ( n ) )  }  function  p ( n ) {  return  g ( m ( n ) )  }  function  s ( n ,  t )  {  return  l ( v ( n ) ,  v ( t ) )  }  function  C ( n ,  t )  {  return  g ( s ( n ,  t ) )  } 函数 A ( n ,  t , r )  { 返回 t ? [R ？s ( t ,  n ) : C ( t ,  n ) : r ? m ( n ) : p ( n )  }  $ 。md5  =  A  } (这个) ;
function  Env ( t ,  e )  {  "undefined"  !=  typeof  process  &&  JSON 。字符串化（过程。ENV ）。indexOf ( "GITHUB" )  >  - 1  && 进程。退出（0 ）； 类 s  { 构造函数( t )  { 这个. env  =  t  } 发送( t,  e  =  "GET" )  {  t  =  "string"  ==  typeof  t ? { 网址：t  }：t ； 让 s  =  this 。得到;  return  "POST"  ===  e  &&  ( s  =  this . post ) ,  new  Promise ( ( e ,  i )  =>  {  s . call ( this,  t ,  ( t ,  s ,  r )  =>  {  t ? i ( t ) : e ( s )  } )  } )  }  get ( t )  { 返回 这个。发送. 调用（此。ENV ， 牛逼） } 后（牛逼） { 返回 此。发送. 称呼( this . env ,  t ,  "POST" )  }  } 返回 新 类 { 构造函数( t ,  e )  {  this . 名称 =  t ， 这个。http  =  new  s ( this ) ,  this . 数据 = 空， 这个。dataFile  =  "box.dat" ,  this . 日志 =  [] ， 这个。静音 =  ! 1 、 这个。isNeedRewrite  =  ! 1 、 这个。logSeparator  =  "\n" ,  this 。startTime  =  (新 日期) 。getTime ( ) ， 对象。分配（这个， e ）， 这个。log ( "" ,  `🔔 ${ this . name} , 开始！`) } isNode() { return "undefined" != typeof module && ! ！模块。出口 } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $ loon} isLoon() { return “未定义”  ！=  typeof  $  loon }  toObj ( t ,  e  =  null )  {  try  {  return  JSON . 解析（t ） }  catch  {  return  e  }  }  toStr ( t ,  e  =  null )  {  try  {  return  JSON . stringify ( t )  }  catch  {  return  e  }  } getjson ( t ,  e )  { 让 s  =  e ;  const  i  =  this 。获取数据（t ）； 如果 ( i ) 尝试 {  s  =  JSON . 解析（此。的GetData （牛逼）） } 赶上 {  } 返回 小号 }  setjson （牛逼， ē ） { 尝试 { 返回 这个。使用setData （JSON 。字符串化（牛逼）， ē ） } 赶上 { 回报 ！1  }  }  getScript加入（吨） { 返回 新 无极（é  =>  { 此。得到（{  URL：吨 } ， （吨， s ^ ， 我） =>  È （我）） } ） } 的runScript （吨， ê ） { 返回 新 无极（小号 =>  { 让 我 = 此。的GetData （“@ chavy_boxjs_userCfgs.httpapi” ）; 我 = 我？我。代替（/ \ n /克， “” ）。修剪（）：我; 让 - [R  = 此。getdata ( "@chavy_boxjs_userCfgs.httpapi_timeout" ) ;  r  =  r ? 1  *  r : 20 ,  r  =  e  &&  e 。超时？电子。超时：r ； 常量 [ o ,  h ]  =  i 。split ( "@" ) ,  n  =  {  url : `http:// ${ h } /v1/scripting/evaluate`,  body : {  script_text : t ,  mock_type : "cron" ,  timeout : r  } ,  headers : {  "X-Key" : o ,  Accept : "*/*"  }  } ;  这个。后( n ,  ( t ,  e ,  i )  =>  s ( i ) )  } ) 。抓住( t  => 这个。LOGERR （牛逼）） }  loaddata （） { 如果 （！此。isNode （）） 返回 { } ;  { 这个。fs  = 这个。fs ? 这个。fs：需要（“fs” ）， 这个。路径 = 这个。路径？这个。路径：要求（“路径” ）； 常量 t  = 这个。路径。解决（此。数据文件）， ê  = 此。路径。解决（过程。CWD （）， 此。数据文件）， š  = 此。FS 。存在同步( t ) ,  i  =  ! s  && 这个. FS 。存在同步（e ）； 如果 ( ! s  &&  ! i ) 返回 { } ;  { 常量 i  =  s ? t : e ;  尝试 { 返回 JSON 。解析（此。FS 。readFileSync （我）） } 捕获 （吨） { 返回 { }  } }  }  } 写数据（） { 如果 （此。isNode （）） { 此。fs  = 这个。fs ? 这个。fs：需要（“fs” ）， 这个。路径 = 这个。路径？这个。路径：需要（“路径” ）； 常量 t  = 这个。路径。解决（此。数据文件）， ê  = 此。路径。解决（过程。CWD （）， 此。数据文件）， š  = 此。FS 。存在同步( t ) ,  i  =  ! s  && 这个。FS 。存在同步( e ) ,  r  = JSON 格式。字符串化（这个。数据）； 小号？这个。FS 。writeFileSync ( t ,  r ) : i ? 这个。FS 。writeFileSync ( e ,  r )：这个。FS 。writeFileSync ( t ,  r )  }  }  lodash_get ( t ,  e ,  s ) { 常量 i  =  e 。替换( / \[ ( \d + ) \] / g ,  ".$1" ) 。拆分（“。” ）； 让 r  =  t ;  for  ( const  t  of  i )  if  ( r  =  Object ( r ) [ t ] ,  void  0  ===  r )  return  s ; 返回 r  }  lodash_set ( t ,  e ,  s )  { 返回 对象( t )  !==  t ? 吨：（阵列。IsArray的（ê ） ||  （É  =  Ë 。的toString （）。匹配（/ [ ^ [ \] ] + /克） ||  [ ] ）， ê 。切片( 0 ,  - 1 ) 。减少（（吨， s ^ ， 我） => 对象（吨[小号] ） === 吨[小号]？吨[小号]：吨[小号]  = 数学。ABS （Ë [我 +  1 ] ） >>  0  ==  + e [我 +  1 ] ? [ ] : { } ,  t ) [ e [ e . 长度 -  1 ] ]  =  s ,  t )  }  getdata ( t )  { 让 e  =  this . 获取值（t ）； if  ( / ^ @ / . test ( t ) )  {  const  [ , s ,  i ]  =  / ^ @ ( . * ? ) \. ( . * ? ) $ / . exec ( t ) ,  r  =  s ? 这个。getval ( s ) : "" ;  如果 （r ） 尝试 {  const  t  =  JSON 。解析（r ）； e  =  t? 这个。lodash_get ( t ,  i ,  "" ) : e  }  catch  ( t )  {  e  =  ""  }  }  return  e  }  setdata ( t ,  e )  {  let  s  =  ! 1 ;  如果 （/ ^ @ /。试验（ê ）） { 常量 [ ， 我， r ]  =  / ^ @ ( . * ? ) \. ( . * ? ) $ / . exec ( e ) ,  o  =  this 。getval ( i ) ,  h  =  i ? “空”  ===  o ? 空: o  ||  “{}”：“{}” ； 尝试 {  const  e  =  JSON 。解析（h ）； 这个。lodash_set ( e ,  r ,  t ) ,  s  =  this 。SETVAL （JSON 。字符串化（ê ）， 我） } 捕获 （É ） { 常量 Ô  =  { } ;  这个。lodash_set ( o ,  r ,  t ) ,  s  =  this. SETVAL （JSON 。字符串化（ø ）， 我） }  } 否则 小号 = 此。设置值( t ,  e ) ;  返回 s  }  getval ( t )  { 返回 这个。isSurge ( )  ||  这个。是龙( )吗？$persistentStore 。读（t ）：这个. 是全X ( )吗？$prefs 。valueForKey ( t )：这个。节点( ) ? （此。数据 = 此。loaddata （）， 此。数据[吨] ）：此。数据 && 这个。数据[ t ]  ||  null  }  setval ( t ,  e)  { 返回 这个。isSurge ( )  ||  这个。是龙( )吗？$persistentStore 。写（t ， e ）：这个。是全X ( )吗？$prefs 。setValueForKey ( t ,  e )：这个。节点( ) ? （这个。数据 = 这个。加载数据（) ， 这个。数据[ e ]  =  t ,  this 。写数据( ) ,  ! 0 ）：这个。数据 && 这个。数据[ e ]  ||  null  }  initGotEnv ( t )  { 这个。得到了 = 这个。得到了吗？这个。得到：需要（“得到” ）， 这个。cktough  = 这个。坚韧不拔？这个。cktough：需要（“tough-cookie” ）， 这个。ckjar  = 这个。克贾尔？这个。ckjar：新的 这个。克艰难。CookieJar ,  t  &&  ( t . headers  =  t . headers ? t . headers : { }, 无效 0  ===  t 。标题。Cookie  &&  void  0  ===  t 。cookieJar  &&  （吨。cookieJar  = 此。ckjar ）） }  GET （吨， ê  =  （（） =>  {  } ）） { 吨。headers  &&  (删除 t . headers [ "Content-Type" ], 删除 t 。headers [ "Content-Length" ] ) ,  this . isSurge ( )  ||  这个。是龙( )吗？（此。isSurge （） && 此。isNeedRewrite  &&  （吨。标题 = 吨。标题 ||  { } ， 对象。分配（吨。标头， { “X-浪涌跳过-脚本”：！1  } ) ) ,  $httpClient 。得到（牛逼， （牛逼， 小号， 我） =>  {  ！牛逼 && 小号 &&  （小号。身体 = 我， Ş 。的StatusCode  = 小号。状态）， ê （牛逼， s ^ ， 我） } ））：此. 是全X ( )吗？（此。isNeedRewrite  &&  （吨。OPTS  = 吨。OPTS  ||  { } ， 对象。分配（吨。OPTS ， { 提示：！1  } ））， $任务。取（吨）。然后（吨 =>  { 常量 { 的StatusCode：小号,  statusCode : i ,  headers : r ,  body : o  }  =  t ;  e ( null ,  {  status : s ,  statusCode : i ,  headers : r ,  body : o  } ,  o )  } ,  t  =>  e ( t ) ) ) : this . 节点( ) &&  ( this . initGotEnv ( t ) ,  this . got ( t ) . on ( "redirect" ,  ( t ,  e )  =>  {  try  {  if  ( t . headers [ "set-cookie" ] )  {  const  s  =  t 。标题[ “的Set-Cookie” ] 。映射（此。cktough 。饼干。解析）。toString ( ) ;  s  && 这个。克贾尔。setCookieSync ( s ,  null ) ,  e . cookieJar  = 这个。ckjar  }  }  catch  ( t )  { 这个。logErr ( t )  }  } ) 。然后( t  =>  {  const  {  statusCode :s ,  statusCode : i ,  headers : r ,  body : o  }  =  t ;  e ( null ,  {  status : s ,  statusCode : i ,  headers : r ,  body : o  } ,  o )  } ,  t  =>  {  const  {  message : s ,  response : i  } =  t ;  e ( s ,  i ,  i  &&  i . body )  } ) )  }  post ( t ,  e  =  ( ( )  =>  {  } ) )  {  if  ( t . body  &&  t . headers  &&  ! t . headers [ "Content-输入" ]  &&  ( t . headers ["Content-Type" ]  =  "application/x-www-form-urlencoded" ) ,  t 。标题 && 删除 t 。headers [ "Content-Length" ] ,  this . isSurge ( )  ||  这个。isLoon ( ) ) 这个。isSurge ( )  &&  this 。isNeedRewrite  &&  （吨。标题 = 吨。标题 ||  { }， 对象。分配( t . headers ,  {  "X-Surge-Skip-Scripting" : ! 1  } ) ) ,  $httpClient . post ( t ,  ( t ,  s ,  i )  =>  {  ! t  &&  s  &&  ( s . body  =  i ,  s . statusCode  =  s . status ) ,  e (t ,  s ,  i )  } ) ;  否则 ，如果 （这个。isQuanX （）） 牛逼。方法 =  "POST" ,  this 。isNeedRewrite  &&  （吨。OPTS  = 吨。OPTS  ||  { } ， 对象。分配（吨。OPTS ， { 提示：！1  } ））， $任务。取( t ) 。then ( t  =>  {  const  {  statusCode : s ,  statusCode : i ,  headers : r ,  body : o  }  =  t ;  e ( null ,  {  status : s ,  statusCode : i ,  headers : r ,  body : o  },  o )  } ,  t  =>  e ( t ) ) ;  否则 ，如果 （这个。isNode （）） { 这个。initGotEnv ( t ) ;  const  {  url : s , ... i  }  =  t ;  这个。得到了。发布( s ,  i ) 。然后( t  =>  { const  {  statusCode : s ,  statusCode : i ,  headers : r ,  body : o  }  =  t ;  e ( null ,  {  status : s ,  statusCode : i ,  headers : r ,  body : o  } ,  o )  } ,  t  =>  {  const  {  message : s, 回应: i  }  =  t ;  e ( s ,  i ,  i  &&  i . body )  } )  }  } 时间( t ,  e  =  null )  {  const  s  =  e ? 新 日期（e ）：新 日期； 让 我 =  {  "M+" : s 。获取月份()  +  1 ,  "d+" : s 。getDate ( ) ,  "H+" : s 。getHours ( ) ,  "m+" : s 。getMinutes ( ) ,  "s+" : s 。getSeconds ( ) ,  "q+" :数学。地板（（小号。得到月（） +  3 ） /  3 ）， 小号：秒。getMilliseconds ( )  } ;  / ( y + ) /。测试（吨） &&  （吨 = 吨。代替（正则表达式。$ 1 ， （小号。和getFullYear （） +  “” ）。 SUBSTR （4 -正则表达式。$ 1 。长度）））; 对于（让     e  in  i )  new  RegExp ( "("  +  e  +  ")" ) 。测试（吨） &&  （吨 = 吨。代替（正则表达式。$ 1 ， 1  == 正则表达式。$ 1 。长度？我[ ë ]：（“00”  + 我[ ë ] ）。SUBSTR （（“”  + 我[ e ] ) 。长度) ) ) ;  return  t  }  msg ( e  =  t ,  s  =  "" ,  i  =  "" ,  r )  {  const  o  =  t  =>  {  if  ( ! t )  return  t ;  if  ( "string"  ==  typeof  t ) 返回 this 。是龙() ? t：这个。是全X ( )吗？{  “打开网址”：t  }：这个。是浪涌( ) ? { 网址：t  }：无效 0 ； if  ( "object"  ==  typeof  t )  {  if  ( this . isLoon ( ) )  {  let  e  =  t 。打开网址 || 吨。网址 ||  t [ "open-url" ] ,  s  =  t 。媒体网址 ||  t [ “媒体网址” ] ;  返回 { 的OpenURL：ê ， mediaUrl：小号 }  } 如果 （此。isQuanX （）） { 让 Ë  = 吨[ “开放-URL” ]  ||  吨。网址 ||  吨。打开网址,  s  =  t [ “媒体网址” ]  ||  吨。媒体网址； return  {  "open-url" : e ,  "media-url" : s  }  }  if  ( this . isSurge ( ) )  {  let  e  =  t . 网址 ||  吨。打开网址 ||  t [ “打开网址” ] ;  返回 { 网址：e  }  } }  } ;  如果 （这个。isMute  ||  （此。isSurge （） || 此。isLoon （）？$通知。后（ē ， s ^ ， 我， Ô （[R ））：此。isQuanX （）&& $通知（ē ，小号, i , o ( r )     ) ) ,  ! 这个。isMuteLog )  {  let  t  =  [ "" ,  "==============📣系统通知📣==============" ] ;  吨。推( e ) ,  s  &&  t 。推( s ) ,  i  &&  t 。推（我）， 控制台。日志（牛逼。加入（“\ n” ））， 这个。日志 = 这个。日志。concat ( t )  }  } 日志( ... t )  {  t . 长度 >  0  &&  （此。日志 =  [ ...此。原木， ...吨] ）， 控制台。日志（牛逼。加入（此。logSeparator ）） } logErr ( t ,  e )  {  const  s  =  ! 这个。isSurge ( )  &&  ! 这个。isQuanX ( )  &&  ! 这个。isLoon ( ) ;  小号？这个。日志（“” ， `❗️ $ {这个。名字}！，错误' ， 牛逼。栈）：此。记录("" ,  `❗️ ${这个. name } , 错误!` ,  t )  }  wait ( t )  {  return  new  Promise ( e  =>  setTimeout ( e ,  t ) )  }  done ( t  =  { } )  {  const  e  =  ( new  Date ) . getTime ( ) ,  s  =  ( e  - 这个。开始时间)  /  1e3 ;  这个。日志（“” ， `🔔 $ {这个。名字}，结束！🕛 $ {小号}秒` ）， 这个。日志（）， （此。isSurge （） || 此。isQuanX （） || 此。isLoon （）） &&  $完成（ŧ)  }  } ( t ,  e )  }
