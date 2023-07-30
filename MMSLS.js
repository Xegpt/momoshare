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
    
    "https://www.maimemo.com/share/page?uid=4534968&pid=89b9d20c4cb4eddd45fa3385d19b87c7&tid=d6c898fa0af289af0c8d0a3dfd376718",
    "https://www.maimemo.com/share/page?uid=15455894&pid=8c484dade01e7874a7411ea84f478000&tid=0be58de1f58db56d62346dce050ce2a0",
    "https://www.maimemo.com/share/page?uid=15455894&pid=e93b22ed2c68089d0ee5f4048e2d82e2&tid=d48b0a81efc8084c5ffbba81bdacfbd2",
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
