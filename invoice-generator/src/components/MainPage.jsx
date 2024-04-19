import React, { useEffect, useState } from "react";
import InputBox from "./InputBox";
import CustomeLableBox from "./CustomeLableBox";
import InvoiceName from "./invoicename";
import PageCount from "./pageCount";
import PageCount2 from "./pageCount2";
import PDFGenerator from "./PDFGenerator";
import LogoBox from "./LogoBox";
import DateInput from "./DatePicker";
import Currency from "./Currency";
import LineItem from "./AddLine";
import DatePicker from "./DatePicker";
import { Icon } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPlus } from "@fortawesome/free-solid-svg-icons";
import DiscountBox from "./discountBox"
import { updateCalculations } from '../Redux/caclulation'; 
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


function MainPage() {
  const handleImageChange = (imageData) => {
    console.log("Image data:", imageData);
  };

  const dispatch = useDispatch();

  const { discount: reduxDiscount, tax: reduxTax, shipping: reduxShipping, total: reduxTotal, amountPaid: reduxAmount, balanceDue: reduxBalance } = useSelector(state => state.calculation);
  const totalAmountToDisplay = isNaN(reduxTotal) ? `$0.0` : `$${reduxTotal}`;
  const balanceToDisplay = isNaN(reduxBalance) ? `$0.0` : `$${reduxBalance}`;

  const [fieldOrder, setFieldOrder] = useState([]); // State to maintain the order of fields

  // Function to add a field to the top of the list
  const addFieldToTop = (field) => {
    setFieldOrder([field, ...fieldOrder]);
  };

  const [isPercentVisible, setIsPercentVisible] = useState({
    Discount: false,
    Tax: false,
  });

  const handlePercentVisibilityToggle = (field) => {
    setIsPercentVisible((prevState) => ({
      ...prevState,
      [field]: !prevState[field]
    }));
  };


  const [customeLabel, setCustomeLabel] = useState("");
  const [selectedDate, setSelectedDate] = useState({
    date: '',
    dueDate: ''
  });

  const [planeInput, setPlaneInput] = useState({
    paymentTerms: '',
    poNumber: ''
  })

  const [inputBoxValue, setInputBoxValue] = useState({
    inVoiceFrom: '',
    shipTo: '',
    billTo: '',
    notes: '',
    terms: ''
  })

  const calculateFinalTotal = () => {
    const { total, fieldsData } = formData;
    const totalValue = parseFloat(total) || 0;
    const discountValue = parseFloat(fieldsData.Discount) || 0;
    const taxValue = parseFloat(fieldsData.Tax) || 0;
    const shippingValue = parseFloat(fieldsData.Shipping) || 0;
    const AmountValue = parseFloat(fieldsData.AmountPaid) || 0;
    return totalValue - discountValue -AmountValue + taxValue + shippingValue;
  };
  const calTotalAmount = () => {
    const { total, fieldsData } = formData;
    const totalValue = parseFloat(total) || 0;
    const discountValue = parseFloat(fieldsData.Discount) || 0;
    const taxValue = parseFloat(fieldsData.Tax) || 0;
    const shippingValue = parseFloat(fieldsData.Shipping) || 0;
    const AmountValue = parseFloat(fieldsData.AmountPaid) || 0;
    return totalValue - discountValue + taxValue + shippingValue;
  };

  const [formData, setFormData] = useState({
    total: "",
    items: ["Discount", "Tax", "Shipping"],
    selectedFields: [],
    fieldsData: {
      Discount: "",
      Tax: "",
      Shipping: "",
      AmountPaid: ""
    },
  });

  const handleChange = (event, fieldName) => {
    
    const { value } = event.target;
    if (fieldName === "total") {
      setFormData({
        ...formData,
        total: value,
      });
    } else {
      setFormData({
        ...formData,
        fieldsData: {
          ...formData.fieldsData,
          [fieldName]: value,
        },
      });
    }
  };
  const handleFieldSelection = (fieldName) => {
    if (!formData.selectedFields.includes(fieldName)) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        items: prevFormData.items.filter((item) => item !== fieldName),
        selectedFields: [...prevFormData.selectedFields, fieldName],
      }));
    }
  };
  
  const removeField = (fieldName) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      items: [...prevFormData.items, fieldName],
      selectedFields: prevFormData.selectedFields.filter((field) => field !== fieldName),
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const finalTotal = calculateFinalTotal();
    console.log("Final Total:", finalTotal);  
  };


  const handleInputBoxChange=(event)=>{
    const {name, value} = event.target;
    setInputBoxValue(prevState=>({
      ...prevState,
      [name]:value
    }));
  }

  const handleCustomeLableChange=(event)=>{
    setCustomeLabel(event.target.value)
  }

  const handleDatePickerChange=(date, whichDate)=>{
    setSelectedDate(prevState=>({
      ...prevState,
      [whichDate]:date
    }))
  }

  const handlePlaneInputChange=(event)=>{
    const {name, value} = event.target
    setPlaneInput((prevState)=>({
      ...prevState,
      [name]:value
    }))

  }

  useEffect(() => {
    // console.log(customeLabel);
    // console.log(isPercentVisible.Discount);
    // console.log(formData.fieldsData.Discount+'%');
  }); 


  const discount = (isPercentVisible.Discount)?  formData.fieldsData.Discount+'%' : formData.fieldsData.Discount; 
  console.log(discount)
  const tax = (isPercentVisible.Tax)? formData.fieldsData.Tax+'%' :  formData.fieldsData.Tax
  const shipping = formData.fieldsData.Shipping; 
  const amountPaid = formData.fieldsData.AmountPaid; 
  dispatch(updateCalculations({ discount, tax, shipping,  amountPaid }));

  return (
    <div
      className="main-container"
      style={{ backgroundColor: "#fafafa", padding: "120px 0" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            backgroundColor: "#ffffff",
            width: "74%",
            height: "100%",
            border: "1px solid rgb(231 234 243 / 70%)",
            padding: "20px",
            marginLeft: "50px",
          }}
        >
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <LogoBox onImageChange={handleImageChange} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  alignItems: "flex-end",
                  paddingRight: "40px",
                }}
              >
                <InvoiceName width="250px" height="auto" />
                <PageCount2 width="150px" height="38px" textAlign='right' Symbol={'#'} />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  marginTop: "20px",
                  display: "flex",
                  gap: "30px",
                  flexDirection: "column",
                }}
              >
                <InputBox
                  width="400px"
                  height="50px"
                  placeholder="Who is this invoice from? (required)"
                  name="inVoiceFrom"
                  onChange={handleInputBoxChange}
                  value={inputBoxValue.inVoiceFrom}
                />

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "10px",
                    width: "125%",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "5px",
                      marginRight: "15px",
                      width: "100%",
                    }}
                  >
                    <CustomeLableBox
                      width="100%"
                      height="18px"
                      placeholder="Ship To"
                      textAlign="left"
                    />
                    <InputBox
                      width="100%"
                      height="40px"
                      placeholder="Who is this invoice to? (required)"
                      name="shipTo"
                      onChange={handleInputBoxChange}
                      value={inputBoxValue.shipTo}
                    />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "5px",
                      marginLeft: "15px",
                      width: "100%",
                    }}
                  >
                    <CustomeLableBox
                      width="100%"
                      height="18px"
                      placeholder="Bill To"
                      textAlign="left"
                    />
                    <InputBox
                      width="100%"
                      height="40px"
                      placeholder="(optional)"
                      name="billTo"
                      onChange={handleInputBoxChange}
                      value={inputBoxValue.billTo}
                    />
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "20px",
                  gap: "5px",
                  marginRight: "40px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                  }}
                >
                  <CustomeLableBox
                    width="200px"
                    height="18px"
                    placeholder="Date"
                    textAlign="right"
                     // onChange={handleCustomeLableChange}
                     value={customeLabel}
                  />
                  <CustomeLableBox
                    width="200px"
                    height="18px"
                    placeholder="Payment Terms"
                    textAlign="right"
                  />
                  <CustomeLableBox
                    width="200px"
                    height="18px"
                    placeholder="Due Date"
                    textAlign="right"
                  />
                  <CustomeLableBox
                    width="200px"
                    height="18px"
                    placeholder="PO Number"
                    textAlign="right"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0px",
                  }}
                >
                    <DatePicker width="125px" height="18px" onChange={(date)=>handleDatePickerChange(date, 'date')} value={selectedDate.date} />
                  <PageCount width="125px" height="18px" textAlign='right' onChange={handlePlaneInputChange} value={planeInput.paymentTerms} name="paymentTerms" />
                  <DatePicker width="125px" height="18px"onChange={(date)=>handleDatePickerChange(date, 'dueDate')} value={selectedDate.dueDate} />
                  <PageCount width="125px" height="18px" textAlign='right'  onChange={handlePlaneInputChange} value={planeInput.poNumber} name="poNumber" />
                </div>
              </div>
            </div>
          </div>
          <div style={{marginTop: '40px'}}>
            <LineItem />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginTop: "40px",
                width: "50%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                  width: "100%",
                }}
              >
                <CustomeLableBox
                  width="100%"
                  height="18px"
                  placeholder="Notes"
                  textAlign="left"
                />
                <InputBox
                  width="100%"
                  height="40px"
                  placeholder="Notes - any relevant information not already covered"
                  name="notes"
                  onChange={handleInputBoxChange}
                  value={inputBoxValue.notes}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                  width: "100%",
                }}
              >
                <CustomeLableBox
                  width="100%"
                  height="18px"
                  placeholder="Terms"
                  textAlign="left"
                />
                <InputBox
                  width="100%"
                  height="40px"
                  placeholder="Terms and conditions - late fees, payment methods, delivery schedule"
                  name="terms"
                  onChange={handleInputBoxChange}
                  value={inputBoxValue.terms}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "40px",
                paddingRight: "46px",
              }}
            >
              <div
                style={{ display: "flex", flexDirection: "row", gap: "90px" , marginBottom: '10px'}}
              >
                <CustomeLableBox
                  width="100%"
                  height="18px"
                  placeholder="Subtotal"
                  textAlign="right"
                />
                <input
                  type="text"
                  name="total"
                  placeholder="Total"
                  value={formData.total}
                  onChange={(event) => handleChange(event, "total")}
                  style={{
                    width: "100px",
                    height: "30px",
                    borderRadius: "5px",
                    outline: "none",
                    borderColor: "#ccc",
                  }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {formData.selectedFields.map((field, index) => (
                  <div
                    key={field}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "10px",
                    }}
                  >
                    {field === "Discount" && (
                      <CustomeLableBox
                        width="100%"
                        height="18px"
                        placeholder="Discount"
                        textAlign="right"
                      />
                    )}
                    {field === "Tax" && (
                      <CustomeLableBox
                        width="100%"
                        height="18px"
                        placeholder="Tax"
                        textAlign="right"
                      />
                    )}
                    {field === "Shipping" && (
                      <CustomeLableBox
                        width="100%"
                        height="18px"
                        placeholder="Shipping"
                        textAlign="right"
                      />
                    )}
                    {field === "Shipping"? (
                      <div  style={{marginLeft: '30px', width: '35%'}}>
                      <PageCount2 width="153px" height="37px" textAlign='left' Symbol={'$'} 
                        type="number"
                        name={field.toLowerCase()}
                      value={formData.fieldsData[field]}
                      onChange={(event) => handleChange(event, field)}
                      />
                      </div>
                    ):(
                    <div  style={{marginLeft: '30px', width: '35%'}}>
                    <DiscountBox 
                      type="text"
                      name={field.toLowerCase()}
                      value={formData.fieldsData[field]}
                      onChange={(event) => handleChange(event, field)}
                      setPercentVisible={() => handlePercentVisibilityToggle(field)}
                      isPercentVisible={isPercentVisible[field]} 
                    />
                    </div>
                    )}
                    {/* <input
                      type="text"
                      name={field.toLowerCase()}
                      value={formData.fieldsData[field]}
                      onChange={(event) => handleChange(event, field)}
                      style={{width: '100px', marginLeft: '80px'}}
                    /> */}
                    <div className="cross-style" style={{width:'20px', height: '20px', color: 'green'}}>
                    <FontAwesomeIcon
                      onClick={() => {
                        removeField(field);
                      }}
                      icon={faXmark}
                      style={{ marginLeft: "31px", position: 'absolute'}}
                      className="fab-cross-icon"
                    />
                    </div>
                    
                  </div>
                ))}

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                
                  {formData.items.map((item) => (
                    
                    <button
                      key={item}
                      style={{
                        marginRight: "20px",
                        cursor: "pointer",
                        backgroundColor: "white",
                        border: "none",
                        fontSize: "16px",
                        marginLeft: "20px",
                        color: '#009e74 ',
                        fontWeight: '500'
                      }}
                      onClick={() => handleFieldSelection(item)}
                    >
                    <FontAwesomeIcon icon={faPlus} style={{ marginRight: '5px' }} />
                      {item}
                    </button>
                  ))}
                </div>

                <div style={{display: 'flex', flexDirection: 'column', gap:"10px"}}>
                <div style={{display:'flex', flexDirection: 'row',  justifyContent: 'space-between', alignItems: 'center'}}>
                <CustomeLableBox
                        width="100%"
                        height="18px"
                        placeholder="Total"
                        textAlign="right"
                      />
                 <sapn style={{marginLeft: '80px', color: 'rgb(119, 119, 119)'}}>{totalAmountToDisplay}</sapn>
                </div>
               
                <div style={{display:'flex', flexDirection: 'row', justifyContent: '', alignItems: 'center'}}>
                 <CustomeLableBox
                        width="100%"
                        height="18px"
                        placeholder="Amount paid"
                        textAlign="right"
                      />
                      <div style={{marginLeft:  '30px'}}>
                      
                      <PageCount2 width="143px" height="40px" textAlign='left' Symbol={'$'} 
                        type="number"
                      name="AmountPaid"
                      value={formData.fieldsData.AmountPaid}
                      onChange={(event) => handleChange(event, "AmountPaid")}
                      />
                      
                      </div>
                 </div>
                 <div style={{display:'flex', flexDirection: 'row',  justifyContent: 'space-between', alignItems: 'center'}}>
                 <CustomeLableBox
                        width="100%"
                        height="18px"
                        placeholder="Balance Due"
                        textAlign="right"
                      />
                 <sapn style={{marginLeft: '80px', color: 'rgb(119, 119, 119)'}}>{balanceToDisplay}</sapn>
                 {/* <sapn style={{marginLeft: '80px', color: 'rgb(119, 119, 119)'}}>${calculateFinalTotal()}</sapn> */}
                 </div>
                 
                 </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            marginLeft: "30px",
          }}
        >
          <PDFGenerator />
          <div style={{ marginTop: "30px" }}>
            <Currency />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
