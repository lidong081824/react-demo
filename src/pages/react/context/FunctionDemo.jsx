import { CustomContext } from './_Context';
import { useContext } from 'react';

const FunctionDemo = () => {
  // 与类组件比较最大的差别在于 class组件无论是声明静态变量还是consumer消费方式 都只能消费最近的一个context，
  //    而函数组件可以通过声明多个useContext从而消费多个context
  const context = useContext(CustomContext);
  return (
    <>
      <p>当前接受到的值为:{context.value}</p>
    </>
  );
};
export default FunctionDemo;
