/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=4534968&pid=36749ad8fc7eff5c548a5c1ab35e45fa&tid=65d7c6cbcd7696b191a3298b35f8179a",
    "https://www.maimemo.com/share/page?uid=4534968&pid=8857acd4681c74ca221e995152d7e1de&tid=3631fa529d7c1b49a7b1418478135547",
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
    
    "https://www.maimemo.com/share/page?uid=4534968&pid=0517da4ff29a79acb5da1c587380e9b4&tid=5be0f7b1cd0d01de46bd653c71365d98",
    "https://www.maimemo.com/share/page?uid=4534968&pid=89f3ccba831fa31766bacd47b1d3adb3&tid=52a5f32a2f3c07925a02b10f9d2ab451",
    "https://www.maimemo.com/share/page?uid=4534968&pid=bc3cdd0661f4d7117beffd3b16200b77&tid=c22bb3c72672154937a41c7c1940a4c9",
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
