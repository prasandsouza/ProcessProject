import React from 'react'
import { useSelector } from 'react-redux'
import '@progress/kendo-theme-default/dist/all.css';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { Label } from "@progress/kendo-react-labels";

function HomePage() {
    const data = useSelector((state) => state.allProcess)
    console.log(data)
    let filterData = data.filter((data) => data.status === 'running')
    console.log(filterData)
    return (
        <div style={{ display:'flex' , alignItems:'center', justifyContent:'center'}}>
            <div style={{width:'700px',marginTop:'70px '}}>
                <div>
                    <Label style={{ fontSize: '20px' ,margin: '10px 0' ,zIndex:'1'}}> Running Process</Label>
                </div>
                <div style={{ width: '603px', display: 'flex', justifyContent: 'center' }}>
                    <Grid data={filterData}
                        style={{ width: '650px', display: 'flex', justifyContent: 'center' }}>
                        <GridColumn field="startDate" width="200px" />
                        <GridColumn field="name" width="200px" />
                        <GridColumn field="reason" width="200px" />
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default HomePage