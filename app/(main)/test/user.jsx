// components/CustomTable2.js
import React from "react";

const CustomTable2 = () => {
  return (
    <div className=" ">
      <h2 className=" my-7 font-bold text-2xl uppercase text-center">
        User facing website plan
      </h2>
      <table className="table-auto w-full border-collapse border border-gray-200">
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
              - Featured Categories (list)
              <br />- Featured Products (list)
              <br />- Most Shopped Products (list)
              <br />- Promotional Campaign (slides)
              <br />- Best of any Category (list)
            </td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-4 py-2">
              - Category Page
            </td>
            <td className="border border-gray-200 px-4 py-2">
              - Products list
              <br />- Filter Options (complex)
              <br />- Sorting Options
              <br />- Pagination (infinite scroll)
            </td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-4 py-2">- Product Page</td>
            <td className="border border-gray-200 px-4 py-2">
              - Images
              <br />- Information
              <br />- Select Variation
              <br />- Buy & Cart, Wishlist
              <br />- Review & Rating
              <br />- Q&A
              <br />- Related Products
            </td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-4 py-2">- User Pages</td>
            <td className="border border-gray-200 px-4 py-2">
              - Login/Registration
              <br />- Multiple Auth Systems
              <br />- Forgot Password
              <br />- Dashboard
              <br />
              - User Info
              <br />
              - Orders: Info, Tracking, Status, Cancel, Refund
              <br />
              - Wishlist
              <br />
              - Recently Viewed
              <br />
              - Settings
              <br />
              - Edit Profile
              <br />
              - Saved Address
              <br />- Activity: Reviews, Q&A
            </td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-4 py-2">- Static Pages</td>
            <td className="border border-gray-200 px-4 py-2">
              - About Us
              <br />- Contact
              <br />- Terms of Service
              <br />- Additional static pages as required
            </td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-4 py-2">
              <strong>Database</strong>
            </td>
            <td className="border border-gray-200 px-4 py-2"></td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-4 py-2">- Product</td>
            <td className="border border-gray-200 px-4 py-2">
              - Product Details
              <br />- Variations
              <br />- Reviews
              <br />- Ratings
              <br />- Related Products
            </td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-4 py-2">- User</td>
            <td className="border border-gray-200 px-4 py-2">
              - User Info
              <br />- Orders
              <br />- Wishlist
              <br />- Recently Viewed
              <br />- Reviews
              <br />- Addresses
            </td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-4 py-2">- Category</td>
            <td className="border border-gray-200 px-4 py-2">
              - Category Details
              <br />- Products in Category
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
              - Authentication
            </td>
            <td className="border border-gray-200 px-4 py-2">
              - Login
              <br />- Registration
              <br />- Forgot Password
              <br />- Multiple Auth Systems (e.g., OAuth, JWT)
            </td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-4 py-2">
              - Product Management
            </td>
            <td className="border border-gray-200 px-4 py-2">
              - CRUD operations for Products
              <br />- Filter and Sorting
              <br />- Infinite Pagination
            </td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-4 py-2">
              - User Management
            </td>
            <td className="border border-gray-200 px-4 py-2">
              - CRUD operations for User Info
            </td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-4 py-2">
              - Order Management
            </td>
            <td className="border border-gray-200 px-4 py-2">
              - Create, Read, Update, Delete Orders
            </td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-4 py-2">
              - Wishlist Management
            </td>
            <td className="border border-gray-200 px-4 py-2">
              - CRUD operations for Wishlist
            </td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-4 py-2">
              - Recently Viewed Management
            </td>
            <td className="border border-gray-200 px-4 py-2">
              - CRUD operations for Recently Viewed
            </td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-4 py-2">
              - Review and Rating
            </td>
            <td className="border border-gray-200 px-4 py-2">
              - Manage Reviews and Ratings
            </td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-4 py-2">
              - Category Management
            </td>
            <td className="border border-gray-200 px-4 py-2">
              - CRUD operations for Categories
              <br />- Fetch Products by Category
            </td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-4 py-2">- Search</td>
            <td className="border border-gray-200 px-4 py-2">
              - Implement robust search functionality
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
              - Non-Logged User Cookies
            </td>
            <td className="border border-gray-200 px-4 py-2">
              - Handling data for non-logged users
            </td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-4 py-2">
              - Automated Mailing
            </td>
            <td className="border border-gray-200 px-4 py-2">
              - Automated mailing for required functions (order confirmation,
              password reset, etc.)
            </td>
          </tr>
          <tr>
            <td className="border border-gray-200 px-4 py-2">
              <strong>Important Features</strong>
            </td>
            <td className="border border-gray-200 px-4 py-2">
              - Cart
              <br />- Multiple Payment Gateway Integration
              <br />- Search Functionality
              <br />- Automated Mailing System
              <br />- Secure and Efficient Execution of APIs
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
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable2;
