const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据
const produceNewsData = function() {
  let articles = [];
  let twos = [];
  for (let i = 0; i < 10; i++) {
    let newArticleObject = {
      title:  '轨迹规划技术分享', //  Random.csentence( min, max )
      content: '轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾核心模块之一。轨迹规划是无人驾核心模块之一。轨迹规划是无人驾核心模块之一。轨迹规划是无人驾驶系统...', // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      name : Random.cname(),
      bookImg:'../../../static/book.jpg',
      bookName:'人性的弱点',
      bookAuthor:'[美] 贾斯汀比伯',
      pic:Random.dataImage('550x250', '专题mock的图片'),
    }
    articles.push(newArticleObject)
  }
  for (let i = 0; i < 4; i++) {
    let newTwo = {
      title:  '轨迹规划技术分享', //  Random.csentence( min, max )
      content: '轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾核心模块之一。轨迹规划是无人驾核心模块之一。轨迹规划是无人驾核心模块之一。轨迹规划是无人驾驶系统...', // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      name : Random.cname(),
      pic:Random.dataImage('1000x500', 'mock的图片'),
      cdTitle:'给后端程序员看的 Vue 快速入门教程',
      cdContent:'轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统轨迹规划是无人驾驶系统的核心模块之几一。轨迹规划是无人驾驶系统的核心模块之一。轨迹规划是无人驾驶系统轨迹规划是无人驾驶系统的核心模块之 ... ...',
      icon:Random.dataImage('50x50', '0_0'),
      job:'老司机',
      jobType:'前端'
    }
    twos.push(newTwo)
  }

  return {
    articles: articles,
    twos:twos
  }
}

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/home/list', 'get', produceNewsData);
console.log(JSON.stringify(produceNewsData));
