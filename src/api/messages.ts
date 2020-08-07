/*
 * @Descripttion: 常见的错误信息
 * @Author: 天泽
 * @Date: 2020-07-23 16:52:21
 * @LastEditors: 天泽
 * @LastEditTime: 2020-08-04 16:48:24
 */
const errorMessages = new Map([
  [403, '暂无权限'],
  [404, '未找到相关数据'],
  [500, '未知服务器错误'],
  [undefined, '请求异常，请联系开发人员']
]);

export default errorMessages;
