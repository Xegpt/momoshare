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
    
    "https://www.maimemo.com/share/page?uid=4534968&pid=cb7f31f288e08f8473112102f690f8f5&tid=376832a82b46f51635333cc18048e00c",
    "https://www.maimemo.com/share/page?uid=4534968&pid=48fb1527a9b3bf4a8848f361983bc8a4&tid=831f6268922d211bb0ab29f33728fc0d",
    "https://www.maimemo.com/share/page?uid=4534968&pid=2123ac0e2e8d84df27be458eb256c503&tid=d00cce76c586dada6c3ae7c8a77793a9",
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
