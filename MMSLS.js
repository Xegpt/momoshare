/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=4534968&pid=3b8dfd5cd7c9a2f77a83726e1e1372f9&tid=4ace738c709ed159f03924963e17bd0b",
    "https://www.maimemo.com/share/page?uid=4534968&pid=3b8dfd5cd7c9a2f77a83726e1e1372f9&tid=4ace738c709ed159f03924963e17bd0b",
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
    
    "https://www.maimemo.com/share/page?uid=4534968&pid=3e108de098a5c6296ba79991ca43edd5&tid=876ffc27dabdb6d5f6b0d0cee6c99709",
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
