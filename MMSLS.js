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
    
    "https://www.maimemo.com/share/page?uid=4534968&pid=e9200cedca0d9c0ba1a2e0664f34e8e7&tid=5ac37acaf668119945ed479135491a1c",
    "https://www.maimemo.com/share/page?uid=4534968&pid=cf2908aca3f8357f701384ad1678328f&tid=2dc873cd4429b3f69b0965fada09895a",
    "https://www.maimemo.com/share/page?uid=4534968&pid=0ba932606f21b7be08344f0891c0f8c5&tid=245bf746d5969e8d4495f9507b8c4068",
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
