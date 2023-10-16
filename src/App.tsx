import { FC, Fragment } from 'react';
import './App.css';
import { useGetPageDataQuery } from './redux/api/interviewApi';
import Table from './components/Table';

const App: FC = () => {
  const { data, error, isLoading } = useGetPageDataQuery('/todos');
  
  return (
    <>
      <Fragment>Interview Page</Fragment>
      {error || !isLoading ? <Table data={data} /> : <div>"loading data..."</div>}
    </>
  );
};
export default App;
