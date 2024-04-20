import React from 'react';
import jsPDF from 'jspdf';
import { FaDownload } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { selectSubtotal } from '../actions/lineItems';


// const imageUrl = 'https://i.imgur.com/abcd123.jpg';

const PDFGenerator = ({
  inputBoxData, 
  selectedDate, 
  planeInput,
  check
}) => {

  console.log(check);
    const lineItems = useSelector((state) => state.lineItems);
    console.log("lineItems:-----", lineItems.lineItems);
    
    const lineItemsArray = Object.values(lineItems.lineItems);
console.log("lineItemsArray:", lineItemsArray);


const BalanceDue = useSelector((state) => state.calculation.balanceDue);
const discount = useSelector((state) => state.calculation.discount);
const tax = useSelector((state) => state.calculation.tax);
const shipping = useSelector((state) => state.calculation.shipping);
const total = useSelector((state) => state.calculation.total);
const {Symbol} = useSelector((state) => state.currency);

const subTotal =  useSelector(selectSubtotal);
  { console.log(Symbol)}
  { console.log(inputBoxData?.terms)}

  
  console.log("date");
  
  
  const date = moment(selectedDate?.date).format('MMM DD, YYYY');
  const dueDate = moment(selectedDate?.dueDate).format('MMM DD, YYYY');



  const generatePDF = () => {

    const doc = new jsPDF();

    doc.addImage(check, 'JPEG', 10, 10, 50, 50);

    doc.setFontSize(12);
    doc.text(`${inputBoxData?.inputBoxData?.inVoiceFrom}`, 10, 70);


    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text(`Ship To`, 10, 85);
    doc.text(`Bill To`, 60, 85);


    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(`${inputBoxData?.inputBoxData?.billTo}`, 10, 95);
    doc.text(`${inputBoxData?.inputBoxData?.shipTo}`, 60, 95);

    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.text("INVOICE", 140, 20);

    doc.setFontSize(13);
    doc.setFont('helvetica', 'normal');
    doc.text("#3", 170, 30);


    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');


    doc.setFont('helvetica', 'bold');
    doc.text(`Date: `, 140, 40);
    doc.setFont('helvetica', 'normal');
    doc.text(`${date}`, 155, 40);

    doc.setFont('helvetica', 'bold');
    doc.text(`Due Date: `, 140, 50);
    doc.setFont('helvetica', 'normal');
    doc.text(`${dueDate}`, 165, 50);

    doc.setFont('helvetica', 'bold');
    doc.text("Payment Terms: ", 140, 60);
    doc.setFont('helvetica', 'normal');
    doc.text(`${planeInput?.paymentTerms}`, 177, 60);

    doc.setFont('helvetica', 'bold');
    doc.text("PO Number:", 140, 70);
    doc.setFont('helvetica', 'normal');
    doc.text(`${planeInput?.poNumber}`, 167, 70);



    doc.setFillColor(211, 211, 211);
    doc.rect(130, 75, 70, 10, 'F');
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text(`Balance Due: ${Symbol} ${BalanceDue}`, 140, 80);

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
    doc.text("Subtotal:", 140, 170);
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
    doc.text("Shipping:", 140, 200);
    doc.setFont('helvetica', 'normal'); 
    doc.text(`${Symbol}${shipping}`, 175, 200);

    doc.setFont('helvetica', 'bold'); 
    doc.text("Total:", 140, 210);
    doc.setFont('helvetica', 'normal'); 
    doc.text(`${Symbol}${total}`, 175, 210);


    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text("Notes:", 10, 220);

    doc.setFontSize(12);
    doc.setFont('helvetica', 'nornal');
    doc.text(`${inputBoxData?.notes}`, 10, 230);

    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text("Terms:", 10, 240);

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
