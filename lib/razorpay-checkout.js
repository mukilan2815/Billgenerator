export const RazorpayCheckout = async ({
  userId,
  amount,
  userInfo,
  credits = 0,
  currency = "INR",
}) => {
  try {
    const orderResponse = await fetch("/api/payment/razorpay/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        amount,
        currency,
        credits,
      }),
    });

    const orderData = await orderResponse.json();

    if (!orderData.success) {
      alert("Error creating order: " + orderData.error);
      return false;
    }

    const paymentId = orderData.orderDetails.id;

    if (typeof window === "undefined") {
      return false;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => {
      const options = {
        key: process.env.NEXT_RAZORPAY_KEY_ID, // Ensure this environment variable is set
        amount: orderData.orderDetails.amount,
        currency,
        name: "Bill Generator",
        image: "/images/billgenerator-icon.png",
        description: "Buy credits",
        order_id: orderData.orderDetails.id,
        handler: async (response) => {
          const verificationResponse = await fetch(
            "/api/payment/razorpay/verify",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                userId,
                orderId: orderData.orderDetails.id,
                paymentId: response.razorpay_payment_id,
                signature: response.razorpay_signature,
              }),
            }
          );

          const verificationData = await verificationResponse.json();

          if (verificationData.success) {
            window.location.href = "/payment/status/success"; // Redirect to the dashboard
            return true; // Signal successful payment
          } else {
            alert("Payment verification failed: " + verificationData.error);
            return false; // Signal failed payment
          }
        },
        prefill: {
          name: userInfo.name,
          email: userInfo.email,
        },
        notes: {},
        theme: {
          color: "#F37254",
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    };
    script.onerror = () => {
      console.error("Razorpay SDK failed to load");
    };
    document.body.appendChild(script);
  } catch (error) {
    console.error("Error in RazorpayCheckout:", error);
    return false;
  }
};
