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
    
    
        doc.setFontSize(12); 
        doc.setFont('helvetica', 'normal'); 
    
        
        doc.text("Date: April 15, 2024", 140, 40);
        doc.text("Due Date: April 30, 2024", 140, 50); 
    
        doc.text("Payment Terms: Net 30 Days", 140, 60); 
        doc.text("PO Number: 12345", 140, 70); 
    
    
        doc.setFillColor(211, 211, 211); 
        doc.rect(130, 75, 70, 10, 'F'); 
        doc.text("Balance Due: $1000", 140, 80); 
    
    
        doc.setFillColor(211, 211, 211); 
        doc.rect(10, 110, 190, 10, 'F'); 
        doc.setFontSize(12); 
        doc.setFont('helvetica', 'bold'); 
        doc.text("Item", 12, 117); 
        doc.text("Quantity", 60, 117); 
        doc.text("Rate", 110, 117); 
        doc.text("Amount", 160, 117); 
    
    
        const tableData = [
          ["Item 1", "2", "$10", "$20"],
          ["Item 2", "1", "$15", "$15"],
          ["Item 3", "3", "$8", "$24"]
        ];
        let y = 130; 
        tableData.forEach(row => {
          row.forEach((cell, index) => {
            doc.text(cell, 12 + (index * 50), y); 
          });
          y += 10; 
        });
    
        
        doc.text("Subtotal: $1.00", 140, 170); 
        doc.text("Discount (1%): $1.00", 140, 180); 
    
    
        doc.text("Tax (1%): $1.00", 140, 190); 
        doc.text("Shipping: $1.00", 140, 200); 
        doc.text("Total: $2.00", 140, 210); 
    
    
        doc.text("Notes:", 10, 220); 
        doc.text("This is the Invoice Gen", 10, 230); 
    
        doc.text("Terms:", 10, 240); 
        doc.text("Test", 10, 250); 
        
    
        
        doc.save("InvoiceGen.pdf");
      };

  return (
    <div>
      <button onClick={generatePDF} style={{padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer'}}>Download PDF</button>
    </div>
  );
}

export default PDFGenerator;
