import { useState } from "react";
import style from "./FixedBottom.module.scss";
function main() {
  const [count] = useState(0);
  return (
    // <div className="bg-red-900 fixed bottom-0">
    //   <div className="">首页</div>
    //   <div className="">发现</div>
    //   <div className="">藏品</div>
    //   <div className="">我的</div>
    // </div>
    <div className="static ...">
      <p>Static parent</p>
      <div className="absolute bottom-0 left-0 ...">
        <p>Absolute child</p>
      </div>
    </div>
  );
}
export default main;
