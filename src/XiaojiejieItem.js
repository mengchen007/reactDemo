import React, {Component} from 'react'; //imrc
import PropTypes from 'prop-types'
class XiaojiejieItem extends Component { //cc
   constructor(props) {
      super(props)
      this.handleClick = this.handleClick.bind(this)
   }
   // Initialization:初始化阶段。
   // Mounting: 挂在阶段。
   // Updation: 更新阶段。
   // Unmounting: 销毁阶段
   // 现在的代码就优雅一些了，也不那么暴力了。这就算是完美解决了子组件的渲染性能问题，
   // 你写的代码质量也得到了提高。其实在面试React让写TODOList应用的，都是看这个来区分等级的，能写出来的，这算普通程序员;能写出来并作性能优化的，这算有经验的程序员
   //比较父组件传的值 控制子组件是否render
   shouldComponentUpdate(nextProps, nextState) {
      if (nextProps.content !== this.props.content) {
         return true
      } else {
         return false
      }

   }
   componentWillReceiveProps() {
      console.log('child - componentWillReceiveProps')
   }
   //当组件从页面中删除的时候执行
   componentWillUnmount() {
      console.log('child - componentWillUnmount')
   }
   handleClick() {
      this.props.deleteItem(this.props.index)
   }
   render() {
      console.log('render---组件挂载中.......')

      return (
         <div onClick={this.handleClick}>
            {this.props.avname}为你做-{this.props.content}</div>
      );
   }
}
XiaojiejieItem.defaultProps = {
   //  avname: '松岛枫'  //把avname的默认值设置成"松岛枫" ，然后把avname的属性删除掉
}
XiaojiejieItem.propTypes = {
   content: PropTypes.string,
   deleteItem: PropTypes.func,
   index: PropTypes.number,
   avname: PropTypes.string.isRequired  //它表示必须进行传递，如果不传递就报错
}
export default XiaojiejieItem;
