import React, { useEffect, useState } from "react";
import InputBox from "./InputBox";
import CustomeLableBox from "./CustomeLableBox";
import InvoiceName from "./invoicename";
import InputBox2 from "./InputBox2";
import SymbolInputBox from "./SymbolInputBox";
import PDFGenerator from "./PDFGenerator";
import LogoBox from "./LogoBox";
import Currency from "./Currency";
import LineItem from "./AddLine";
import DatePicker from "./DatePicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPlus } from "@fortawesome/free-solid-svg-icons";
import DiscountBox from "./discountBox";
import { updateCalculations } from "../Redux/caclulation";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectSubtotal } from "../actions/lineItems";

function MainPage() {



  const [imgUrl, setImgUrl] = useState("");

  const handleImageChange = (imageUrl) => {
    setImgUrl(imageUrl);
  };

  const [boxLabel, setBoxLabel] = useState({
    item: 'Item',
    quantity: 'Quantity',
    rate: 'Rate',
    amount: 'Amount'
  });
  const handleLabelBoxChange=(label)=>{
    setBoxLabel(label)
  }

  const subtotal = useSelector(selectSubtotal);

  const { selectedCurrency } = useSelector((state) => state.currency);
  const { Symbol } = useSelector((state) => state.currency);
  const dispatch = useDispatch();

  const { total: reduxTotal, balanceDue: reduxBalance } = useSelector(
    (state) => state.calculation
  );
  const totalAmountToDisplay = isNaN(reduxTotal)
    ? `$0.0`
    : `${selectedCurrency} ${reduxTotal}`;
  const balanceToDisplay = isNaN(reduxBalance)
    ? `$0.0`
    : `${selectedCurrency} ${reduxBalance}`;

  const [isPercentVisible, setIsPercentVisible] = useState({
    Discount: false,
    Tax: false,
  });

  const handlePercentVisibilityToggle = (field) => {
    setIsPercentVisible((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const [labels, setLabels] = useState({
    billToLabel: "Bill To",
    shipToLabel: "Ship To",
    invoiceLabel: "INVOICE",
    dateLabel: "Date",
    paymentTermsLabel: "Payment Terms",
    dueDateLabel: "Due Date",
    poNumberLabel: "PO Number",
    notesLabel: "Notes",
    termsLabel: "Terms",
    subtotalLabel: "Subtotal",
    discountLabel: "Discount",
    taxLabel: "Tax",
    shippingLabel: "Shipping",
    TotalLabel: "Total",
    amountPaidLabel: "Amount Paid",
    BalanceDueLabel: "Balance",
  });

  const [selectedDate, setSelectedDate] = useState({
    date: "",
    dueDate: "",
  });

  const [planeInput, setPlaneInput] = useState({
    paymentTerms: "",
    poNumber: "",
  });

  const [inputBoxValue, setInputBoxValue] = useState({
    inVoiceFrom: "",
    billTo: "",
    shipTo: "",
    notes: "",
    terms: "",
  });

  const [formData, setFormData] = useState({
    total: "",
    items: ["Discount", "Tax", "Shipping"],
    selectedFields: [],
    fieldsData: {
      Discount: "",
      Tax: "",
      Shipping: "",
      AmountPaid: "",
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
      selectedFields: prevFormData.selectedFields.filter(
        (field) => field !== fieldName
      ),
    }));
  };

  const handleInputBoxChange = (event) => {
    const { name, value } = event.target;
    setInputBoxValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  console.log(inputBoxValue)

  const handleLabelChange = (label, value) => {
    setLabels((prevLabels) => ({
      ...prevLabels,
      [label]: value,
    }));
  };

  const handleDatePickerChange = (date, whichDate) => {
    setSelectedDate((prevState) => ({
      ...prevState,
      [whichDate]: date,
    }));
  };

  const handlePlaneInputChange = (event) => {
    const { name, value } = event.target;
    setPlaneInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const discount = isPercentVisible.Discount
    ? formData.fieldsData.Discount + "%"
    : formData.fieldsData.Discount;
  const tax = isPercentVisible.Tax
    ? formData.fieldsData.Tax + "%"
    : formData.fieldsData.Tax;
  const shipping = formData.fieldsData.Shipping;
  const amountPaid = formData.fieldsData.AmountPaid;
  dispatch(
    updateCalculations({ discount, tax, shipping, amountPaid, subtotal })
  );
  const [count, setCount] = useState('1'); 

  const handleCountChange = (count) => {
    setCount(count)
  };
  
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
                <InvoiceName
                  width="250px"
                  height="auto"
                  onChange={(event) =>
                    handleLabelChange("invoiceLabel", event.target.value)
                  }
                  value={labels.invoiceLabel}
                />
                <SymbolInputBox width="150px" height="38px" textAlign='right' Symbol={`#`} value={count} 
                onChange={handleCountChange}/>
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
                  width="370px"
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
                      width="90%"
                      height="18px"
                      textAlign="left"
                      onChange={(event) =>
                        handleLabelChange("billToLabel", event.target.value)
                      }
                      value={labels.billToLabel}
                    />
                    <InputBox
                      width="90%"
                      height="40px"
                      placeholder="Who is this invoice to? (required)"
                      name="billTo"
                      onChange={handleInputBoxChange}
                      value={inputBoxValue.billTo}
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
                      width="90%"
                      height="18px"
                      textAlign="left"
                      onChange={(event) =>
                        handleLabelChange("shipToLabel", event.target.value)
                      }
                      value={labels.shipToLabel}
                    />
                    <InputBox
                      width="90%"
                      height="40px"
                      placeholder="(optional)"
                      name="shipTo"
                      onChange={handleInputBoxChange}
                      value={inputBoxValue.shipTo}
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
                  width: '35%'
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
                    textAlign="right"
                    onChange={(event) =>
                      handleLabelChange("dateLabel", event.target.value)
                    }
                    value={labels.dateLabel}
                  />
                  <CustomeLableBox
                    width="200px"
                    height="18px"
                    textAlign="right"
                    onChange={(event) =>
                      handleLabelChange("paymentTermsLabel", event.target.value)
                    }
                    value={labels.paymentTermsLabel}
                  />
                  <CustomeLableBox
                    width="200px"
                    height="18px"
                    textAlign="right"
                    onChange={(event) =>
                      handleLabelChange("dueDateLabel", event.target.value)
                    }
                    value={labels.dueDateLabel}
                  />
                  <CustomeLableBox
                    width="200px"
                    height="18px"
                    textAlign="right"
                    onChange={(event) =>
                      handleLabelChange("poNumberLabel", event.target.value)
                    }
                    value={labels.poNumberLabel}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0px",
                  }}
                >
                  <DatePicker
                    width="125px"
                    height="18px"
                    onChange={(date) => handleDatePickerChange(date, "date")}
                    value={selectedDate.date}
                  />
                  <InputBox2
                    width="125px"
                    height="18px"
                    textAlign="right"
                    onChange={handlePlaneInputChange}
                    value={planeInput.paymentTerms}
                    name="paymentTerms"
                  />
                  <DatePicker
                    width="125px"
                    height="18px"
                    onChange={(date) => handleDatePickerChange(date, "dueDate")}
                    value={selectedDate.dueDate}
                  />
                  <InputBox2
                    width="125px"
                    height="18px"
                    textAlign="right"
                    onChange={handlePlaneInputChange}
                    value={planeInput.poNumber}
                    name="poNumber"
                  />
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "40px" }}>
            <LineItem handleChange={handleLabelBoxChange} />
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
                  width="90%"
                  height="18px"
                  textAlign="left"
                  onChange={(event) =>
                    handleLabelChange("notesLabel", event.target.value)
                  }
                  value={labels.notesLabel}
                />
                <InputBox
                  width="90%"
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
                  width="90%"
                  height="18px"
                  textAlign="left"
                  onChange={(event) =>
                    handleLabelChange("termsLabel", event.target.value)
                  }
                  value={labels.termsLabel}
                />
                <InputBox
                  width="90%"
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
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "90px",
                  marginBottom: "10px",
                  justifyContent: 'space-between'
                }}
              >
                <CustomeLableBox
                  width="100%"
                  height="18px"
                  textAlign="right"
                  onChange={(event) =>
                    handleLabelChange("subtotalLabel", event.target.value)
                  }
                  value={labels.subtotalLabel}
                />
                <sapn
                  style={{ color: "rgb(119, 119, 119)", alignContent: 'center' }}
                >{`${selectedCurrency} ${subtotal}`}</sapn>
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
                        textAlign="right"
                        onChange={(event) =>
                          handleLabelChange("discountLabel", event.target.value)
                        }
                        value={labels.discountLabel}
                      />
                    )}
                    {field === "Tax" && (
                      <CustomeLableBox
                        width="100%"
                        height="18px"
                        textAlign="right"
                        onChange={(event) =>
                          handleLabelChange("taxLabel", event.target.value)
                        }
                        value={labels.taxLabel}
                      />
                    )}
                    {field === "Shipping" && (
                      <CustomeLableBox
                        width="100%"
                        height="18px"
                        textAlign="right"
                        onChange={(event) =>
                          handleLabelChange("shippingLabel", event.target.value)
                        }
                        value={labels.shippingLabel}
                      />
                    )}
                    {field === "Shipping" ? (
                      <div style={{ marginLeft: "30px", width: "35%" }}>
                        <SymbolInputBox
                          width="153px"
                          height="37px"
                          textAlign="left"
                          Symbol={Symbol}
                          type="number"
                          name={field.toLowerCase()}
                          value={formData.fieldsData[field]}
                          onChange={(event) => handleChange(event, field)}
                        />
                      </div>
                    ) : (
                      <div style={{ marginLeft: "30px", width: "35%" }}>
                        <DiscountBox
                          type="text"
                          name={field.toLowerCase()}
                          value={formData.fieldsData[field]}
                          onChange={(event) => handleChange(event, field)}
                          setPercentVisible={() =>
                            handlePercentVisibilityToggle(field)
                          }
                          isPercentVisible={isPercentVisible[field]}
                          symbol={Symbol}
                        />
                      </div>
                    )}
                    <div
                      className="cross-style"
                      style={{ width: "20px", height: "20px", color: "green" }}
                    >
                      <FontAwesomeIcon
                        onClick={() => {
                          removeField(field);
                        }}
                        icon={faXmark}
                        style={{ marginLeft: "31px", position: "absolute" }}
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
                        color: "#009e74 ",
                        fontWeight: "500",
                      }}
                      onClick={() => handleFieldSelection(item)}
                    >
                      <FontAwesomeIcon
                        icon={faPlus}
                        style={{ marginRight: "5px" }}
                      />
                      {item}
                    </button>
                  ))}
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <CustomeLableBox
                      width="100%"
                      height="18px"
                      textAlign="right"
                      onChange={(event) =>
                        handleLabelChange("TotalLabel", event.target.value)
                      }
                      value={labels.TotalLabel}
                    />
                    <sapn
                      style={{
                        marginLeft: "80px",
                        color: "rgb(119, 119, 119)",
                      }}
                    >
                      {totalAmountToDisplay}
                    </sapn>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "",
                      alignItems: "center",
                    }}
                  >
                    <CustomeLableBox
                      width="100%"
                      height="18px"
                      textAlign="right"
                      onChange={(event) =>
                        handleLabelChange("amountPaidLabel", event.target.value)
                      }
                      value={labels.amountPaidLabel}
                    />
                    <div style={{ marginLeft: "30px" }}>
                      <SymbolInputBox
                        width="143px"
                        height="40px"
                        textAlign="left"
                        Symbol={Symbol}
                        type="number"
                        name="AmountPaid"
                        value={formData.fieldsData.AmountPaid}
                        onChange={(event) => handleChange(event, "AmountPaid")}
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <CustomeLableBox
                      width="100%"
                      height="18px"
                      textAlign="right"
                      onChange={(event) =>
                        handleLabelChange("BalanceDueLabel", event.target.value)
                      }
                      value={labels.BalanceDueLabel}
                    />
                    <sapn
                      style={{
                        marginLeft: "80px",
                        color: "rgb(119, 119, 119)",
                      }}
                    >
                      {balanceToDisplay}
                    </sapn>
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
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "30px",
          }}
        >
          <PDFGenerator
            inputBoxData={inputBoxValue}
          selectedDate={selectedDate}
          planeInput={planeInput}
          img = {imgUrl}
          labels={labels}
          boxLabel={boxLabel}
          isPercentVisible={isPercentVisible}
          formData= {formData.fieldsData}
          handleCountChange={handleCountChange}
          />
          <div style={{ marginTop: "30px" }}>
            <Currency />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
