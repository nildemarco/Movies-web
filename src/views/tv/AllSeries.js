import React, { useContext } from 'react';
import { AllSeriesContainer } from './AllSeries.style';
import DataContext from '../../context/DataContext';
import CardContainer from '../../components/card-container/CardContainer';

const AllSeries = () => {

    const info = useContext(DataContext);

    const { series } = info;

    return (
        <AllSeriesContainer>
            {series &&
                <CardContainer
                    info={series.results}
                    title="Series en tendencia"
                />
            }
        </AllSeriesContainer>
    );
}

export default AllSeries;