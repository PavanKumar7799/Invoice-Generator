import React from 'react';
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
  labels
}) => {

  
  
  const lineItems = useSelector((state) => state?.lineItems);
  const lineItemsArray = Object.values(lineItems?.lineItems);
  const BalanceDue = useSelector((state) => state?.calculation?.balanceDue);
  const discount = useSelector((state) => state?.calculation?.discount);
  const tax = useSelector((state) => state?.calculation?.tax);
  const shipping = useSelector((state) => state?.calculation?.shipping);
  const total = useSelector((state) => state?.calculation?.total);
  const amtPaid = useSelector((state) => state?.calculation?.amountPaid);
  const {Symbol} = useSelector((state) => state.currency);
  const subTotal =  useSelector(selectSubtotal);
  const date = moment(selectedDate?.date).format('MMM DD, YYYY');
  const dueDate = moment(selectedDate?.dueDate).format('MMM DD, YYYY');
  
  { console.log(labels)}
  { console.log(amtPaid)}
  { console.log(inputBoxData?.billTo)}
  
  
  
  
  
  
  
  const generatePDF = () => {

    const doc = new jsPDF();

    doc.addImage(img, 'JPEG', 10, 10, 50, 50);

    doc.setFontSize(12);
    doc.text(`${inputBoxData?.inVoiceFrom}`, 10, 70);


    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text(`${labels?.billToLabel}`, 60, 85);
    doc.text(`${labels?.shipToLabel}`, 10, 85);


    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(`${inputBoxData?.billTo}`, 10, 95);
    doc.text(`${inputBoxData?.shipTo}`, 60, 95);

    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.text(`${labels?.invoiceLabel}`, 140, 20);

    doc.setFontSize(13);
    doc.setFont('helvetica', 'normal');
    doc.text("#3", 170, 30);


    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');


    doc.setFont('helvetica', 'bold');
    doc.text(`${labels?.dateLabel}: `, 140, 40);
    doc.setFont('helvetica', 'normal');
    doc.text(`${date}`, 155, 40);

    doc.setFont('helvetica', 'bold');
    doc.text(`${labels?.dueDateLabel}: `, 140, 50);
    doc.setFont('helvetica', 'normal');
    doc.text(`${dueDate}`, 165, 50);

    doc.setFont('helvetica', 'bold');
    doc.text(`${labels?.paymentTermsLabel}: `, 140, 60);
    doc.setFont('helvetica', 'normal');
    doc.text(`${planeInput?.paymentTerms}`, 177, 60);

    doc.setFont('helvetica', 'bold');
    doc.text(`${labels?.poNumberLabel}: `, 140, 70);
    doc.setFont('helvetica', 'normal');
    doc.text(`${planeInput?.poNumber}`, 167, 70);



    doc.setFillColor(211, 211, 211);
    doc.rect(130, 75, 70, 10, 'F');
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text(`${labels?.BalanceDueLabel}: ${Symbol} ${BalanceDue}`, 140, 80);

    doc.setFillColor(64, 64, 64); // Dark grey color
    doc.rect(10, 110, 190, 10, 'F'); // Drawing a filled rectangle
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');

    doc.setTextColor(255, 255, 255); // Setting text color to white for headings
    // doc.text("Item", 12, 117);
    // doc.text("Quantity", 60, 117);
    // doc.text("Rate", 110, 117);
    // doc.text("Amount", 160, 117);

    // doc.setTextColor(0, 0, 0); // Resetting text color to black for table data

    // const tableData = [
    //   ["Item 1", "2", "$10", "$20"],
    //   ["Item 2", "1", "$15", "$15"],
    //   ["Item 3", "3", "$8", "$24"]
    // ];


    // let y = 130;
    // tableData.forEach(row => {
    //   row.forEach((cell, index) => {
    //     if (index === 0) {
    //       doc.setFont('helvetica', 'bold'); // Set font to bold for the first column
    //     } else {
    //       doc.setFont('helvetica', 'normal'); // Reset font to normal for other columns
    //     }
    //     doc.text(cell, 12 + (index * 50), y);
    //   });
    //   y += 10;
    // });


    let y = 130; // Initial y position for the table

    // Table header
    doc.setFont('helvetica', 'bold');
    doc.text("Item Name", 12, y);
    doc.text("Quantity", 62, y);
    doc.text("Rate", 112, y);
    doc.text("Amount", 162, y);
    y += 10; // Move to the next row

    doc.setTextColor(0, 0, 0); // Resetting text color to black for table data

    // Table data
    doc.setFont('helvetica', 'normal');
    lineItemsArray.forEach((item) => {
      doc.text(item.itemName, 12, y);
      doc.text(item.quantity, 62, y);
      doc.text(`${Symbol} ${item.rate}`, 112, y);
      doc.text("$" + item.amount, 162, y);
      y += 10; // Move to the next row
      console.log(item.itemName);
    });


    doc.setFont('helvetica', 'bold'); 
    doc.text(`${labels?.subtotalLabel}`, 140, 170);
    doc.setFont('helvetica', 'normal'); 
    doc.text(`${Symbol}${subTotal}`, 175, 170); // symbol pending

    doc.setFont('helvetica', 'bold'); 
    doc.text("Discount (1%):", 140, 180);
    doc.setFont('helvetica', 'normal'); 
    doc.text(`${Symbol}${discount}`, 175, 180);

    doc.setFont('helvetica', 'bold'); 
    doc.text("Tax (1%):", 140, 190);
    doc.setFont('helvetica', 'normal'); 
    doc.text(`${Symbol}${tax}`, 175, 190);
    
    doc.setFont('helvetica', 'bold'); 
    doc.text(`${labels?.shippingLabel}`, 140, 200);
    doc.setFont('helvetica', 'normal'); 
    doc.text(`${Symbol}${shipping}`, 175, 200);

    doc.setFont('helvetica', 'bold'); 
    doc.text(`${labels?.TotalLabel}`, 140, 210);
    doc.setFont('helvetica', 'normal'); 
    doc.text(`${Symbol}${total}`, 175, 210);

    doc.setFont('helvetica', 'bold'); 
    doc.text(`${labels?.amountPaidLabel}`, 140, 210);
    doc.setFont('helvetica', 'normal'); 
    doc.text(`${Symbol}${amtPaid}`, 175, 210);


    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text(`${labels?.notesLabel}`, 10, 220);

    doc.setFontSize(12);
    doc.setFont('helvetica', 'nornal');
    doc.text(`${inputBoxData?.notes}`, 10, 230);

    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text(`${labels?.termsLabel}`, 10, 240);

    doc.setFontSize(12);
    doc.setFont('helvetica', 'nornal');
    doc.text(`${inputBoxData?.terms}`, 10, 250);



    doc.save("InvoiceGen.pdf");
  };

  return (
    <div>
      <button onClick={generatePDF} style={{ padding: '10px 20px', backgroundColor: '#00c9a7', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
      <FaDownload style={{ marginRight: '5px' }} />Download Invoice</button>
    </div>
  );
}

export default PDFGenerator;
