const Mock = require('mockjs');
// 获取产品列表
const ProjectList = Mock.mock({
  "code": 0,
  "message": "success",
  "data|3": [{
    "symbol": "@string(\"lower\", 5)",
    "medical_advice": "@sentence",
    "gene_description": "@sentence",
    "lists|3": [{
      "gene": "@string(\"lower\", 5)",
      "pos": "@string(\"lower\", 5, 10)",
      "variant_information": "@title(3)",
      "zygosity": "@word(3)",
      "disease": "@word(5)",
      "inheritance_mode": "@word(7)",
      "origin": "@word(3)",
      "classification": "@word(5)",
      "variant_description": "@sentence"
    }]
  }]
});

// 新增产品
const saveProject = Mock.mock({
  "code": 0,
  "message": "success",
  "data": [{
    "name": "@name",
    "date": "@date()",
    "status": "@integer(1,3)"
  }]
});

module.exports = [{
  url: '/api/home/projectList',
  type: 'get',
  response: ProjectList
}, {
  url: '/api/home/saveProject',
  type: 'post',
  response: saveProject
}];
