import { useRef } from "react";
import html2pdf from "html2pdf.js";

const Invoice = ({ selectedOrder }) => {
  const invoiceRef = useRef();

  if (!selectedOrder) return <div className="p-4 text-gray-600">Select an order to view details.</div>;

  const totalAmount = selectedOrder.fees?.reduce((sum, fee) => sum + fee.amount, 0) || 0;
  const payments = totalAmount * 0.6;
  const balance = totalAmount - payments;

  const handleDownloadPDF = () => {
    const element = invoiceRef.current;
    const opt = {
      margin: 0.5,
      filename: `Invoice_${selectedOrder.id}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    // window.html2pdf().from(element).set(opt).save(); // for CDN
     html2pdf().from(element).set(opt).save(); 
  };

  return (
    <div className="bg-white p-4 md:p-6 rounded-xl shadow-md w-full overflow-x-auto">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 print:hidden">
        <h2 className="text-xl font-semibold text-gray-800">Invoice</h2>
        <div className="mt-2 md:mt-0 flex gap-2">
          <button
            onClick={() => window.print()}
            className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 text-sm"
          >
            Print
          </button>
          <button
            onClick={handleDownloadPDF}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
          >
            Download PDF
          </button>
        </div>
      </div>

      <div ref={invoiceRef} className="border rounded-lg p-4 md:p-6 bg-white text-sm md:text-base">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800">VSTATE FILINGS LLC</h3>
            <p className="text-gray-600">Hewlett NY 11557 US</p>
            <p className="text-gray-600">718-569-2703</p>
          </div>
          <div className="mt-4 md:mt-0 text-right">
            <h3 className="text-xl font-bold text-gray-800">INVOICE</h3>
            <p className="text-gray-600">Date: 05/08/2025</p>
            <p className="text-gray-600">Invoice #: {selectedOrder.id}</p>
          </div>
        </div>

        {/* Bill To */}
        <div className="mb-4">
          <h4 className="font-semibold text-gray-600">Bill To</h4>
          <p className="text-gray-700">Aniket Patil</p>
          <p className="text-gray-700">Pune, Alaska 865454</p>
        </div>

        {/* Watermark */}
        <div className="relative">
          <div className="absolute inset-0 flex justify-center items-center opacity-20 pointer-events-none print:opacity-10">
            <span className="text-6xl font-bold text-red-500 transform -rotate-45">PAID</span>
          </div>

          {/* Table */}
          <table className="w-full text-gray-700 z-10 relative border-t">
            <thead>
              <tr className="border-b">
                <th className="py-2 text-left">ITEM</th>
                <th className="py-2 text-left">STATE</th>
                <th className="py-2 text-left">ENTITY ID</th>
                <th className="py-2 text-right">AMOUNT</th>
              </tr>
            </thead>
            <tbody>
              {selectedOrder.fees?.map((fee, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2">{fee.description}</td>
                  <td className="py-2">{selectedOrder.state || "N/A"}</td>
                  <td className="py-2">{selectedOrder.id}</td>
                  <td className="py-2 text-right">${fee.amount}.00</td>
                </tr>
              ))}
              <tr className="border-b">
                <td colSpan="3" className="py-2 font-medium">Payments/Credits</td>
                <td className="py-2 text-right">-${payments.toFixed(2)}</td>
              </tr>
              <tr className="font-bold">
                <td colSpan="3" className="py-2">Balance Due</td>
                <td className="py-2 text-right">${balance.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Terms */}
        <div className="mt-6 text-gray-600 text-xs md:text-sm leading-relaxed">
          <p>SERVICE FEE TERMS ARE NET 30 DAYS. A 1.5% monthly late fee is assessed on balances greater than 30 days.</p>
          <p>We reserve the right to resign as Registered Agent if your invoice is 30 days past due.</p>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
