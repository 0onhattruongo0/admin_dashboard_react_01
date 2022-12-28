import React from 'react';
import statusCards from '../assets/JsonData/status-card-data.json';
import StatusCard from '../components/status-card/StatusCard';

function Dashboard() {
  return (
    <div>
      <h2 className='page-header'>Dashboard</h2>
      <div className='row'>
        <div className='col-6'>
          <div className='row'>
            {
              statusCards.map((item,index)=>(
                <div className='col-6' key={index}>
                  <StatusCard 
                    icon={item.icon}
                    count={item.count}
                    title={item.title}
                   />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
