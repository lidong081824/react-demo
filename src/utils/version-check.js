/* eslint-disable @typescript-eslint/no-use-before-define */

import { Modal } from 'antd';

const versionCheckTime = 10 * 1000;

export default function start() {
  if (process.env.NODE_ENV === 'production') {
    initVersion();
  }
}

const getVersion = () => {
  const basePath = BASE !== '/' ? BASE : '';
  return fetch(`${basePath}/version.js?t=${Date.now()}`).then((res) => res.json());
};

// 初始化版本号
const initVersion = () => {
  getVersion().then((version) => {
    window.APP_VERSION = version;
    setTimeout(versionCheck, versionCheckTime);
  });
};

const versionCheck = () => {
  getVersion().then((version) => {
    if (window.APP_VERSION !== version) {
      Modal.info().update({
        content: `检测到系统更新,请刷新当前浏览器!`,
        onOk: () => {
          window.location.reload();
        },
      });
    } else {
      setTimeout(versionCheck, versionCheckTime);
    }
  });
};
