
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@progress/kendo-react-buttons';
import '@progress/kendo-theme-default/dist/all.css';
import { Drawer, DrawerContent } from "@progress/kendo-react-layout";
import '../App.css'
import StartProcess from './StartProcess';

const items = [
    {
        text: <StartProcess />,
        selected: false,
    },
];

function Nav() {
    // sample testing comes here
    const [expanded, setExpanded] = React.useState(false);
    const [selectedId, setSelectedId] = React.useState(
        items.findIndex((x) => x.selected === true)
    );
    const handleClick = () => {
        setExpanded((prevState) => !prevState);
    };
    const handleSelect = (ev) => {
        setSelectedId(ev.itemIndex);
    };

    return (
        <Drawer
            expanded={expanded}
            position="end"
            mode="push"
            items={items.map((item, index) => ({
                ...item,
                selected: index === selectedId,
            }))}
            onSelect={handleSelect}
            style={{ backgroundColor: '#f9f9f9' }}
        >
            <DrawerContent style={{ backgroundColor: '#ADD8E6', flexBasis: '400px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        <Link to='/'>
                            <Button themeColor={"info"}> Work Space </Button>
                        </Link>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div>
                            <Link to='/process'>
                                <Button themeColor={"info"} onClick={() => setExpanded(false)} style={{ marginRight: '12px' }}>Create Process</Button>
                            </Link>
                        </div>
                        <div>
                            <Button themeColor={"info"}
                                className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
                                onClick={handleClick}
                            >
                                Start the Process
                            </Button>
                        </div>
                    </div>
                </div>
            </DrawerContent>
        </Drawer>
        // <div></div>
    )
}

export default Nav