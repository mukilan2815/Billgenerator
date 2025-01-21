// components/CustomTable.js
import React from "react";

const CustomTable = () => {
  return (
    <div className="">
      <h2 className=" my-7 font-bold text-2xl uppercase text-center">
        Vendor facing website plan
      </h2>
      <table className="  w-full  border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-200 px-4 py-2">
              <strong>Section</strong>
            </th>
            <th className="border border-gray-200 px-4 py-2">
              <strong>Requirements</strong>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-200 px-4 py-2">
              <strong>Pages</strong>
            </td>
            <td className="border border-gray-200 px-4 py-2"></td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-4 py-2">- Home Page</td>
            <td className="border border-gray-200 px-4 py-2">
              - Vendor Statistics (Sales, Orders, Earnings)
              <br />- Recent Orders
              <br />- Inventory Alerts
              <br />- Performance Metrics
            </td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-4 py-2">
              - Product Management
            </td>
            <td className="border border-gray-200 px-4 py-2">
              - Add New Product
              <br />- Edit Product
              <br />- Manage Inventory
              {/* <br />- Bulk Upload */}
            </td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-4 py-2">
              - Order Management
            </td>
            <td className="border border-gray-200 px-4 py-2">
              - Order List
              <br />- Order Details
              <br />- Update Order Status
              <br />- Process Returns and Refunds
              <br />- Generate Invoices
            </td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-4 py-2">
              - Promotions and Discounts
            </td>
            <td className="border border-gray-200 px-4 py-2">
              - Create Promotions
              <br />- Manage Discounts
              <br />- Track Promotion Performance
            </td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-4 py-2">
              - Financial Overview
            </td>
            <td className="border border-gray-200 px-4 py-2">
              - Sales Summary
              <br />- Payment History
              <br />- Pending Payments
              <br />- Payout Settings
            </td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-4 py-2">
              - Customer Interaction
            </td>
            <td className="border border-gray-200 px-4 py-2">
              - Customer Messages
              <br />- Reviews and Ratings
              <br />- Q&A Management
            </td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-4 py-2">
              - Reports and Analytics
            </td>
            <td className="border border-gray-200 px-4 py-2">
              - Sales Reports
              <br />- Product Performance Reports
              <br />- Customer Insights
              <br />- Customizable Reports
            </td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-4 py-2">
              <strong>Database</strong>
            </td>
            <td className="border border-gray-200 px-4 py-2"></td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-4 py-2">- Vendor</td>
            <td className="border border-gray-200 px-4 py-2">
              - Vendor Info
              <br />- Vendor Bank Details
              <br />- Vendor Performance Data
            </td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-4 py-2">- Product</td>
            <td className="border border-gray-200 px-4 py-2">
              - Product Details
              <br />- Variations
              <br />- Stock Levels
            </td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-4 py-2">- Order</td>
            <td className="border border-gray-200 px-4 py-2">
              - Order Details
              <br />- Order Status
              <br />- Payment Info
            </td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-4 py-2">- Promotions</td>
            <td className="border border-gray-200 px-4 py-2">
              - Active Promotions
              <br />- Promotion Details
              <br />- Discount Rules
            </td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-4 py-2">- Financial</td>
            <td className="border border-gray-200 px-4 py-2">
              - Sales Records
              <br />- Payment Transactions
              <br />- Pending Payments
            </td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-4 py-2">
              - Customer Interaction
            </td>
            <td className="border border-gray-200 px-4 py-2">
              - Messages
              <br />- Reviews
              <br />- Q&A
            </td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-4 py-2">
              <strong>APIs</strong>
            </td>
            <td className="border border-gray-200 px-4 py-2"></td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-4 py-2">
              - Vendor Management
            </td>
            <td className="border border-gray-200 px-4 py-2">
              - CRUD operations for Vendor Info
              <br />- Bank Details Management
              <br />- Performance Data Retrieval
            </td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-4 py-2">
              - Product Management
            </td>
            <td className="border border-gray-200 px-4 py-2">
              - CRUD operations for Products
              <br />- Bulk Uploads
              <br />- Inventory Updates
            </td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-4 py-2">
              - Order Management
            </td>
            <td className="border border-gray-200 px-4 py-2">
              - Order CRUD operations
              <br />- Status Updates
              <br />- Returns and Refunds Processing
              <br />- Invoice Generation
            </td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-4 py-2">
              - Promotions Management
            </td>
            <td className="border border-gray-200 px-4 py-2">
              - CRUD operations for Promotions
              <br />- Track Promotion Performance
            </td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-4 py-2">
              - Financial Management
            </td>
            <td className="border border-gray-200 px-4 py-2">
              - Sales Summary Retrieval
              <br />- Payment History Management
              <br />- Payout Processing
            </td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-4 py-2">
              - Customer Interaction
            </td>
            <td className="border border-gray-200 px-4 py-2">
              - CRUD operations for Messages
              <br />- Manage Reviews and Ratings
              <br />- Q&A Handling
            </td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-4 py-2">
              - Reports and Analytics
            </td>
            <td className="border border-gray-200 px-4 py-2">
              - Generate Sales Reports
              <br />- Fetch Product Performance Data
              <br />- Retrieve Customer Insights
            </td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-4 py-2">
              <strong>Miscellaneous</strong>
            </td>
            <td className="border border-gray-200 px-4 py-2"></td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-4 py-2">
              - Notifications
            </td>
            <td className="border border-gray-200 px-4 py-2">
              - Inventory Alerts
              <br />- Order Status Updates
              <br />- Payment Reminders
            </td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-4 py-2">
              - User Management
            </td>
            <td className="border border-gray-200 px-4 py-2">
              - Vendor Profile Management
              <br />- Authentication and Authorization
            </td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-4 py-2">
              - Communication Tools
            </td>
            <td className="border border-gray-200 px-4 py-2">
              - Automated Emails
              <br />- In-App Messaging
            </td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-4 py-2">
              <strong>Tech Stack</strong>
            </td>
            <td className="border border-gray-200 px-4 py-2"></td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-4 py-2">- Frontend</td>
            <td className="border border-gray-200 px-4 py-2">
              - Next.js
              <br />- TailwindCSS
              <br />- Shadcn/UI
            </td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-4 py-2">- Backend</td>
            <td className="border border-gray-200 px-4 py-2">
              - Next.js API routes or Express.js
              <br />- MongoDB
              <br />- NextAuth for authentication
            </td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-4 py-2">
              - Deployment & Storage
            </td>
            <td className="border border-gray-200 px-4 py-2">
              - Deploy to server
              <br />- Storage setup for media files
              <br />- APIs to handle storage (Add, remove, edit)
            </td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-4 py-2">
              <strong>Important Features</strong>
            </td>
            <td className="border border-gray-200 px-4 py-2">
              - Secure API Execution
              <br />- Efficient Database Management
              <br />- Robust Search Functionality
              <br />- Automated Mailing System
              <br />- Multiple Payment Gateways
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
