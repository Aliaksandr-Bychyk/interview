import { FC } from 'react';
import IData from '../IData';

const TableRow: FC<IData> = ({completed, title, userId}) => {
  
  const row = [
    {id: 0, name: completed}, 
    {id: 1, name: title}, 
    {id: 2, name: userId}
  ];
  
  return (
    <tr>
      {row.map(({id, name}) => <th key={id}>{name}</th>)}
    </tr>
  );
}

export default TableRow;