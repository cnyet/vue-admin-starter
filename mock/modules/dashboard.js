const Mock = require('mockjs');

// 获取dashboard数据
const DashboardData = Mock.mock({
  "code": 0,
  "message": "success",
  "data": {
    "summary": [
      {
        "key": "0",
        "name": "New Visits",
        "number|100-100000.3": 123
      }, {
        "key": "1",
        "name": "Messages",
        "number|100-100000.3": 123
      }, {
        "key": "2",
        "name": "Purchases",
        "number|100-100000.3": 123
      }, {
        "key": "3",
        "name": "Shoppings",
        "number|100-100000.3": 123
      }
    ]
  }
});

module.exports = [{
  url: '/api/dashboard/data',
  type: 'get',
  response: DashboardData
}];
