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
    
    "https://www.maimemo.com/share/page?uid=4534968&pid=ca61e29648691a4736dab4b5837e55a4&tid=dce0b29cca45de11392f9a546a9e675a",
    "https://www.maimemo.com/share/page?uid=4534968&pid=a46d2f64adda04fdb90aca6207d15636&tid=1458e6fb783c60c6b8cef5837d64d940",
    "https://www.maimemo.com/share/page?uid=4534968&pid=51406dd9e063b581acceb3363d60e3c3&tid=73120b46fe9b225117eeaa8df18e725a",
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
