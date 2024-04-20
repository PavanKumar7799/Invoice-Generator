import React, { useState } from 'react';
import jsPDF from 'jspdf';
import { FaDownload } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { selectSubtotal } from '../actions/lineItems';

const PDFGenerator = ({
  inputBoxData, 
  selectedDate, 
  planeInput,
  img,
  labels,
  boxLabel,
  isPercentVisible,
  formData,
  handleCountChange
}) => {


  const [count, setCount] = useState(1);
  const lineItems = useSelector((state) => state?.lineItems);
  const lineItemsArray = Object.values(lineItems?.lineItems);
  const BalanceDue = useSelector((state) => state?.calculation?.balanceDue);
  const discount = useSelector((state) => state?.calculation?.discount);
  const tax = useSelector((state) => state?.calculation?.tax);
  const shipping = useSelector((state) => state?.calculation?.shipping);
  const total = useSelector((state) => state?.calculation?.total);
  const amtPaid = useSelector((state) => state?.calculation?.amountPaid);
  const { Symbol } = useSelector((state) => state.currency);
  const subTotal =  useSelector(selectSubtotal);
  const date = moment(selectedDate?.date).format('MMM DD, YYYY');
  const dueDate = moment(selectedDate?.dueDate).format('MMM DD, YYYY');
  const taxLabel = isPercentVisible.Tax ? `${labels.taxLabel}(${formData.Tax}%)` : labels.taxLabel;
  const discountLabel = isPercentVisible.Discount ? `${labels.discountLabel}(${formData.Discount}%)` : labels.discountLabel;
  const isDisablel = !(inputBoxData.inVoiceFrom && inputBoxData.billTo);



  console.log(boxLabel);

  
  const generatePDF = () => {
    
    setCount(prevCount => prevCount + 1);
    handleCountChange(count);
    const doc = new jsPDF();

    doc.addImage(img, 'JPEG', 10, 10, 50, 50);

    doc.setFontSize(12);
    doc.text(`${inputBoxData?.inVoiceFrom}`, 10, 70);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text(`${labels?.billToLabel}`, 10, 85);
    doc.text(`${labels?.shipToLabel}`, 60, 85);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(`${inputBoxData?.billTo}`, 10, 95);
    doc.text(`${inputBoxData?.shipTo}`, 60, 95);
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.text(`${labels?.invoiceLabel}`, 140, 20);
    doc.setFontSize(13);
    doc.setFont('helvetica', 'normal');
    doc.text(`# ${count}`, 170, 30);
    doc.setFontSize(12);



    doc.setFont('helvetica', 'normal');
    doc.setFont('helvetica', 'bold');
    
    doc.text(`${labels?.dateLabel}: ${date}`, 140, 40);
    doc.setFont('helvetica', 'normal');
    doc.text(`${labels?.dueDateLabel}: ${dueDate}`, 140, 50);
    doc.setFont('helvetica', 'bold');
    doc.text(`${labels?.paymentTermsLabel}: ${planeInput?.paymentTerms}`, 140, 60);
    doc.setFont('helvetica', 'normal');
    doc.text(`${labels?.poNumberLabel}: ${planeInput?.poNumber}`, 140, 70);

    doc.setFillColor(211, 211, 211);
    doc.rect(130, 75, 70, 10, 'F');
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text(`${labels?.BalanceDueLabel}: ${Symbol} ${BalanceDue}`, 140, 80);

    doc.setFillColor(64, 64, 64); 
    doc.rect(10, 110, 190, 10, 'F'); 
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(255, 255, 255);
    doc.text(`${boxLabel.item}`, 12, 117);
    doc.text(`${boxLabel.quantity}`, 60, 117);
    doc.text(`${boxLabel.rate}`, 110, 117);
    doc.text(`${boxLabel.amount}`, 160, 117);

    let y = 130; 
    doc.setTextColor(0, 0, 0); 
    doc.setFont('helvetica', 'normal');
    lineItemsArray.forEach((item) => {
      doc.text(item.itemName, 12, y);
      doc.text(item.quantity, 62, y);
      doc.text(`${Symbol} ${item.rate}`, 112, y);
      doc.text(`${Symbol} ${item.amount}`, 162, y);
      y += 10; 
    });

    doc.setFont('helvetica', 'bold'); 
    doc.text(`${labels?.subtotalLabel}: `, 140, 170);
    doc.setFont('helvetica', 'normal'); 
    doc.text(`${Symbol} ${subTotal}`, 175, 170); 
    doc.setFont('helvetica', 'bold'); 
    doc.text(`${discountLabel}: `, 140, 180);
    doc.setFont('helvetica', 'normal'); 
    doc.text(`${Symbol} ${discount}`, 175, 180);
    doc.setFont('helvetica', 'bold'); 
    doc.text(`${taxLabel}: `, 140, 190);
    doc.setFont('helvetica', 'normal'); 
    doc.text(`${Symbol} ${tax}`, 175, 190);
    doc.setFont('helvetica', 'bold'); 
    doc.text(`${labels?.shippingLabel}: `, 140, 200);
    doc.setFont('helvetica', 'normal'); 
    doc.text(`${Symbol} ${shipping}`, 175, 200);
    doc.setFont('helvetica', 'bold'); 
    doc.text(`${labels?.TotalLabel}: `, 140, 210);
    doc.setFont('helvetica', 'normal'); 
    doc.text(`${Symbol} ${total}`, 175, 210);
    doc.setFont('helvetica', 'bold'); 
    doc.text(`${labels?.amountPaidLabel}: `, 140, 220);
    doc.setFont('helvetica', 'normal'); 
    doc.text(`${Symbol} ${amtPaid}`, 175, 220);

    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text(`${labels?.notesLabel}: `, 10, 230);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text(`${inputBoxData?.notes}`, 10, 240);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text(`${labels?.termsLabel}: `, 10, 250);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text(`${inputBoxData?.terms}`, 10, 260);

    doc.save(`Invoice # ${count}.pdf`); // save d pdf wid count 
  };

  return (
    <div>
      <button 
      disabled={isDisablel}
      onClick={generatePDF} style={{ opacity: isDisablel ? "0.5" : "1", padding: '10px 20px', backgroundColor: '#00c9a7', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        <FaDownload  style={{ marginRight: '5px'  }} />Download Invoice
      </button>
    </div>
  );
}

export default PDFGenerator;
