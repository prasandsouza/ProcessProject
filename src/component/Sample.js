import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GridLayout, GridLayoutItem } from '@progress/kendo-react-layout';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import './styles.css';
const Sample = () => {
  const [vAlign, setVAlign] = React.useState('stretch');
  const vAligns = ['top', 'middle', 'bottom', 'stretch'];
  const handleAlignChange = React.useCallback(e => {
    setVAlign(e.value);
  }, [setVAlign]);
  return <div>
        <DropDownList data={vAligns} value={vAlign} onChange={handleAlignChange} />
        <div className="example-wrapper">
          <div className="page">
            <div className="content">
              <GridLayout align={{
            vertical: vAlign
          }} rows={[ {
            height: 90
          }]} cols={[{
            width: 90
          }, {
            width: 90
          }, {
            width: 90
          }]} gap={{
            rows: 5,
            cols: 5
          }}>
                {[...Array(19)].map((_, i) => <GridLayoutItem className={`box box-${i}`} key={i}>Box</GridLayoutItem>)}
              </GridLayout>
            </div>
          </div>
        </div>
      </div>;
};

export default Sample