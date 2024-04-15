import React from 'react';
import jsPDF from 'jspdf';


const imageUrl = 'https://i.imgur.com/abcd123.jpg';

const PDFGenerator = () => {
  const generatePDF = () => {

    const doc = new jsPDF();


    doc.addImage(imageUrl, 'JPEG', 10, 10, 50, 50);


    doc.setFontSize(12);
    doc.text("Hello", 10, 70);


    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text("Bill to:", 10, 85);
    doc.text("Shippled to:", 60, 85);


    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text("SDLC", 10, 95);
    doc.text("Zocket", 60, 95);

    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.text("INVOICE", 140, 20);

    doc.setFontSize(13);
    doc.setFont('helvetica', 'normal');
    doc.text("#3", 170, 30);


    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');


    doc.setFont('helvetica', 'bold');
    doc.text("Date:", 140, 40);
    doc.setFont('helvetica', 'normal');
    doc.text("April 15, 2024", 155, 40);

    doc.setFont('helvetica', 'bold');
    doc.text("Due Date:", 140, 50);
    doc.setFont('helvetica', 'normal');
    doc.text("April 30, 2024", 165, 50);

    doc.setFont('helvetica', 'bold');
    doc.text("Payment Terms:", 140, 60);
    doc.setFont('helvetica', 'normal');
    doc.text("Net 30 Days", 177, 60);

    doc.setFont('helvetica', 'bold');
    doc.text("PO Number:", 140, 70);
    doc.setFont('helvetica', 'normal');
    doc.text("12345", 167, 70);



    doc.setFillColor(211, 211, 211);
    doc.rect(130, 75, 70, 10, 'F');
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text("Balance Due:  $1000", 140, 80);

    doc.setFillColor(64, 64, 64); // Dark grey color
    doc.rect(10, 110, 190, 10, 'F'); // Drawing a filled rectangle
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');

    doc.setTextColor(255, 255, 255); // Setting text color to white for headings
    doc.text("Item", 12, 117);
    doc.text("Quantity", 60, 117);
    doc.text("Rate", 110, 117);
    doc.text("Amount", 160, 117);

    doc.setTextColor(0, 0, 0); // Resetting text color to black for table data

    const tableData = [
      ["Item 1", "2", "$10", "$20"],
      ["Item 2", "1", "$15", "$15"],
      ["Item 3", "3", "$8", "$24"]
    ];
    let y = 130;
    tableData.forEach(row => {
      row.forEach((cell, index) => {
        if (index === 0) {
          doc.setFont('helvetica', 'bold'); // Set font to bold for the first column
        } else {
          doc.setFont('helvetica', 'normal'); // Reset font to normal for other columns
        }
        doc.text(cell, 12 + (index * 50), y);
      });
      y += 10;
    });




    doc.setFont('helvetica', 'bold'); 
    doc.text("Subtotal:", 140, 170);
    doc.setFont('helvetica', 'normal'); 
    doc.text("$1.00", 175, 170);

    doc.setFont('helvetica', 'bold'); 
    doc.text("Discount (1%):", 140, 180);
    doc.setFont('helvetica', 'normal'); 
    doc.text("$1.00", 175, 180);

    doc.setFont('helvetica', 'bold'); 
    doc.text("Tax (1%):", 140, 190);
    doc.setFont('helvetica', 'normal'); 
    doc.text("$1.00", 175, 190);
    
    doc.setFont('helvetica', 'bold'); 
    doc.text("Shipping:", 140, 200);
    doc.setFont('helvetica', 'normal'); 
    doc.text("$1.00", 175, 200);

    doc.setFont('helvetica', 'bold'); 
    doc.text("Total:", 140, 210);
    doc.setFont('helvetica', 'normal'); 
    doc.text("$2.00", 175, 210);


    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text("Notes:", 10, 220);

    doc.setFontSize(12);
    doc.setFont('helvetica', 'nornal');
    doc.text("This is the Invoice Gen", 10, 230);

    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text("Terms:", 10, 240);

    doc.setFontSize(12);
    doc.setFont('helvetica', 'nornal');
    doc.text("Test", 10, 250);



    doc.save("InvoiceGen.pdf");
  };

  return (
    <div>
      <button onClick={generatePDF} style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Download PDF</button>
    </div>
  );
}

export default PDFGenerator;
