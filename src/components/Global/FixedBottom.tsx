import { useState } from "react";
import style from "./FixedBottom.module.scss";
function main() {
  const [count] = useState(0);
  return (
    <div className={style.root}>
      <div className={style.btn}>首页</div>
      <div className="btn">首页</div>
      <div className="btn">发现</div>
      <div className="btn">藏品</div>
      <div className="btn">我的</div>
      <div className="btn">我的</div>
    </div>
  );
}
export default main;
