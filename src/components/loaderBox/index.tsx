import React from 'react';
import { ProgressSpinner } from "primereact/progressspinner";

const LoaderBox: React.FC = () => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%'
  }}>
    <ProgressSpinner style={{ width: '100px', height: '100px' }} />
  </div>
)

export {
  LoaderBox
}