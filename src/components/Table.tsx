import { FC } from 'react';
import IData from '../IData';
import TableRow from './TableRow';

interface TableProps {
  data: IData[];
}

const Table: FC<TableProps> = ({data}) => {
  
  const header = [
    {id: 0, name: 'completed'}, 
    {id: 1, name: 'title'}, 
    {id: 2, name: 'userId'}
  ];
  
  return (
    <table>
      <thead>
        <tr>
          {header.map(({id, name}) => <th key={id}>{name}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.map(({completed, title, userId, id}: IData) => <TableRow key={id} completed={completed} userId={userId} title={title} />)}
      </tbody>
    </table>
  );
}

export default Table;