import { Button, Divider } from 'antd';
import { useReducer } from 'react';

const ErrorDemo = () => {
  const [tick, dispatchTick] = useReducer((x) => x + 1, 0);
  const tickHander = () => {
    if (tick > 0) {
      tick.size();
    }
  };
  return (
    <>
      {/* 测试下一个按钮时要将其注释 */}
      {tick > 0 && tick.size()}
      <Button type="primary" onClick={() => dispatchTick()}>
        点击+1
      </Button>
      <Divider type="vertical" />
      <Button type="primary" onClick={tickHander}>
        事件处理器点击报错
      </Button>
    </>
  );
};
export default ErrorDemo;
