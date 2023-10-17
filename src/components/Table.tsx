import { FC } from 'react';
import IData from '../IData';
import TableRow from './TableRow';

interface TableProps {
  data: IData[];
}

const Table: FC<TableProps> = ({data}) => {
  return (
    <table>
      <thead>
        <TableRow completed={'completed'} userId={'userId'} title={'title'} />
      </thead>
      <tbody>
        {data.map(({completed, title, userId, id}: IData) => <TableRow key={id} completed={completed ? 'Completed' : 'Uncompleted'} userId={userId} title={title} />)}
      </tbody>
    </table>
  );
}

export default Table;