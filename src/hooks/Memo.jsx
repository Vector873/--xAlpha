import React, { useMemo } from 'react' //import useMemo from react

const Memo = ({a,b}) => { //passing props a and b
    const add = useMemo(()=>{ //we use useMemo for speedup the expensive calculations so we re execute it when one of the dependencies changes
        return a+b; //return sum of both
    },[a,b])
  return (
    <div>
      <h3>useMemo: {add}</h3>
    </div>
  )
}

export default Memo
