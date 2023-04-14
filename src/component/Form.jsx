import * as React from "react";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Error } from "@progress/kendo-react-labels";
import { Input } from "@progress/kendo-react-inputs";
import { getter } from "@progress/kendo-react-common";
import { createProcess } from "../redux/action/action";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const nameGetter = getter("user.name");
const descriptionGetter = getter("user.description");
const validator = (values) => {
     if (nameGetter(values) || descriptionGetter(values)) {
          return;
     }
     return {
          VALIDATION_SUMMARY:
               "Please fill at least one of the following fields.",
          "user.name":
               "Please check the validation summary for more information.",
          "user.description":
               "Please check the validation summary for more information.",
     };
};

const ValidatedInput = (fieldRenderProps) => {
     const { validationMessage, visited, ...others } = fieldRenderProps;
     return (
          <div>
               <Input {...others} />
               {visited && validationMessage && (
                    <Error>{validationMessage}</Error>
               )}
          </div>
     );
};

const ValidatedTextArea = (fieldRenderProps) => {
     const { validationMessage, visited, ...others } = fieldRenderProps;
     return (
          <div>
               <Input {...others} />
               {visited && validationMessage && (
                    <Error>{validationMessage}</Error>
               )}
          </div>
     );
};

const FormData = () => {
     const dispatch = useDispatch();
     const navigate = useNavigate();

     const handleSubmit = (dataItem) => {
          dispatch(createProcess(dataItem.user));
          navigate("/");
     };

     return (
          <Form
               onSubmit={handleSubmit}
               validator={validator}
               style={{border:"10px solid red",zIndex:1}}
               render={(formRenderProps) => (
                    <FormElement
                         style={{
                              maxWidth: 350,
                              margin: "auto",
                              border: "50px solid red",
                         }}
                    >
                         <fieldset className={"k-form-fieldset"}>
                              <legend className={"k-form-legend"}>
                                   Please fill in the following information:
                              </legend>
                              {formRenderProps.visited &&
                                   formRenderProps.errors &&
                                   formRenderProps.errors
                                        .VALIDATION_SUMMARY && (
                                        <div
                                             className={
                                                  "k-messagebox k-messagebox-error"
                                             }
                                        >
                                             {
                                                  formRenderProps.errors
                                                       .VALIDATION_SUMMARY
                                             }
                                        </div>
                                   )}
                              <div className="mb-3">
                                   <Field
                                        name={"user.name"}
                                        component={ValidatedInput}
                                        label={"Name"}
                                   />
                              </div>
                              <div className="mb-3">
                                   <Field
                                        name={"user.description"}
                                        component={ValidatedTextArea}
                                        label={"Description"}    
                                   />
                              </div>
                         </fieldset>
                         <div className="k-form-buttons">
                              <button
                                   type={"submit"}
                                   className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
                                   disabled={!formRenderProps.allowSubmit}
                              >
                                   Submit
                              </button>
                         </div>
                    </FormElement>
               )}
          />
     );
};

export default FormData;
