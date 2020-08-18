/*
 * @Descripttion: 工具模块
 * @Author: 天泽
 * @Date: 2020-07-23 15:04:55
 * @LastEditors: 天泽
 * @LastEditTime: 2020-08-07 15:17:54
 */

// 获取文件名
function getFileName (fileName: string) {
  // eslint-disable-next-line
  const reg = /([^<>/\\\|:""\*\?]+)\.\w+$/;
  const match: RegExpMatchArray = fileName.match(reg) || [];
  if (match[1]) {
    return match[1];
  }
  return '';
}

function sliceFileName (filePath: string): string {
  return filePath.substring(filePath.lastIndexOf('/') + 1, filePath.lastIndexOf('.'));
}

export default {
  getFileName,
  sliceFileName
};
