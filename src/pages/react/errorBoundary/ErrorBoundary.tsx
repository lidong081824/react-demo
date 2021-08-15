import React from 'react';
import { Link } from 'umi';

export default class ErrorBoundary extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  // 单独申明一个就可以捕获异常
  static getDerivedStateFromError(error: any) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    console.log(error);
    return { hasError: true };
  }

  componentDidCatch(error: any, errorinfo: any) {
    console.log(error, errorinfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1>
          界面刚刚发了异常报错, <Link to="/">请尝试回到首页!</Link>{' '}
        </h1>
      );
    }
    return this.props.children;
  }
}
