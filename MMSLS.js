/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=4534968&pid=36749ad8fc7eff5c548a5c1ab35e45fa&tid=65d7c6cbcd7696b191a3298b35f8179a",
    "https://www.maimemo.com/share/page?uid=15455894&pid=c8a40bd752a7bc987fc5afc0abca8ed3&tid=451a61c7eea4dc8eeba54849e0963a08",
    "https://www.maimemo.com/share/page?uid=4534968&pid=3b8dfd5cd7c9a2f77a83726e1e1372f9&tid=4ace738c709ed159f03924963e17bd0b",
  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=4534968&pid=e58f0dadf6a063b6b0be0353ad380417&tid=bc8bf7525edcfff23ac094ed00d384fb",
    "https://www.maimemo.com/share/page?uid=15455894&pid=e58f0dadf6a063b6b0be0353ad380417&tid=3ad633e65f6a99ad9a07fcd99b2bff6d",
    "https://www.maimemo.com/share/page?uid=15455894&pid=fd180ace8e37229224056427478905f9&tid=4a35a21a94d53dfc82ea2d59438e105f",
  ]
  /**
   * 生成随机数字
   * @param {number} min 最小值（包含）
   * @param {number} max 最大值（不包含）
   */
  function randomNumber(min = 0, max = 100) {
    return Math.min(Math.floor(min + Math.random() * (max - min)), max);
  }
  const MMSL_random = MMSLS[randomNumber(0, MMSLS.length)];
  
  module.exports = {
    MMSL_random
  }
