import { CustomContext } from "./_Context";
import React from "react";

export default class ClassDemo extends React.Component {
    // 函数子组件有两种消费方式
    // 1. 组件声明 static contextType = xxxContext; 
    //     这种写法比较变态 等号左边必须一模一样且取值方式固定为this.context，否则将取不到值；
    // 2. 无需声明静态变量 直接<xxxContext.Consumer>{x=>x.aaa}</xxxContext.Consumer>;
    // 区别: 前者方便对数据进行校验，后者只能对数据渲染
    static contextType = CustomContext;
    render() {
        return (
            <>
                <p>我是class子组件</p>
                <p>当前接受到的值为:{this.context.value}</p>
                <CustomContext.Consumer>
                    {item=>item.value}
                </CustomContext.Consumer>
            </>
        )
    }
}