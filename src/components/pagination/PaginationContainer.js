import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { Container } from './PaginationContainer.style';
import { useHistory } from 'react-router-dom';


const PaginationContainer = ({ totalPages }) => {

     const history = useHistory()

     const handleChange = (e, page) => {
          history.push(`${page}`)
     }

     return (
          <Container>
               <Pagination className="pagination" count={totalPages} onChange={handleChange} />
          </Container>
     );
}

export default PaginationContainer;

