import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@progress/kendo-react-buttons";
import "@progress/kendo-theme-default/dist/all.css";
import { Drawer, DrawerContent } from "@progress/kendo-react-layout";
import "../App.css";
import StartProcess from "./StartProcess";

function Navbar() {
     const [expanded, setExpanded] = useState(false);
     const updatingDrawerFunction = useCallback((value) => {
          setExpanded(value);
     });
     const handleClick = () => {
          setExpanded(!expanded);
     };

     return (
          <div>
               <Drawer
                    expanded={expanded}
                    position="end"
                    mode="overlay"
                    style={{ backgroundColor: "#f9f9f9" }}
                    items={[
                         {
                              text: <StartProcess style={{ width: "200px" }} testing={updatingDrawerFunction} />,
                              selected: false,
                         },
                    ]}
                    onClose={() => setExpanded(false)}
               >
                    <DrawerContent style={{ backgroundColor: "#ADD8E6" }}>
                         <div
                              style={{
                                   display: "flex",
                                   justifyContent: "space-between",
                              }}
                         >
                              <div>
                                   <Link to="/">
                                        <Button themeColor="info">Home</Button>
                                   </Link>
                              </div>
                              <div style={{ display: "flex" }}>
                                   <div>
                                        <Link to="/process">
                                             <Button
                                                  themeColor="info"
                                                  style={{
                                                       marginRight: "12px",
                                                  }}
                                             >
                                                  Create Process
                                             </Button>
                                        </Link>
                                   </div>
                                   <div>
                                        <Button
                                             themeColor="info"
                                             className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
                                             onClick={handleClick}
                                        >
                                             Process
                                        </Button>
                                   </div>
                              </div>
                         </div>
                    </DrawerContent>
               </Drawer>
          </div>
     );
}

export default Navbar;
