import React, {useState} from 'react';

const labels = ['check 1', 'check 2', 'check 3'];

const App = () => {
  const [checkList, setCheckList] = useState([false, false, false]);
  
  const handleCheckClick = (index) => {
    setCheckList((checks) => checks.map((c, i)=> (i===index? !c:c)))
  }
  
  const isAllChecked = checkList.every((x) => x);

  return (
    <div>
      <ul>
        {labels.map((label, idx)=> {
          <li key={idx}>
            <label>
              <input
               type='checkbox'
               checked={checkList[idx]}
               onClick = {()=> handleCheckClick(idx)} 
              />
              {label}
            </label>
          </li>
        })}
      </ul>
      <p>
        <button type="button" disabled={!isAllChecked}>다음</button>
      </p>
    </div>
  )
}

export default App;