import React from 'react';
import Header from './Header';
import RowData from './RowData';

const PlayerTable = (props) => {
  const { playerData } = props
  
  return (
    <div className="table-responsive">
      <table summary="women world cup player stats" className="table table-bordered table-hover">
        <caption className="text-center"></caption>
        <Header />
        <tbody>
          {playerData.map(player => (
            <RowData player={player} key={player.id}/>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PlayerTable;
