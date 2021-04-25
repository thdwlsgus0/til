import React, {useState} from 'react';

const App = () => {
  const [checkList, setCheckList] = useState([false, false, false]);
  const handleCheckClick = (index) => {
    setCheckList((checks) => checks.map((c, i)=> (i===index? !c:c)))
  }
  const labels = ['check 1', 'check 2', 'check 3'];
  const isAllChecked = checkList.every((x) => x);
  const labelList = labels.map((value, idx)=>{
    <li key={idx}>
      <input
      type='checkbox'
      checked={checkList[idx]}
      onClick = {()=> handleCheckClick(idx)} 
      />
      {value}
    </li>
  });

  return (
    <div>
      <ul>
        {labelList}
      </ul>
      <button type="button" disabled={!isAllChecked}>다음</button>
    </div>
  )
}

export default App;