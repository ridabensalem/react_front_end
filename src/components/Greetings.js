import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { retrieveGreetings } from '../redux/greetings/greetings';

 function Greeting() {
  const data = useSelector((state) => state.text);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(retrieveGreetings());
  }, [dispatch]);
  return (
    <div>
      <h3>{data}</h3>
    </div>
  );
}
export default Greeting;