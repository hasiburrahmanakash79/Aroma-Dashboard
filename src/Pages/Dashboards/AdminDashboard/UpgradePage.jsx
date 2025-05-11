import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const currentPlan = {
  schoolName: "Convince School",
  phone: "+880 1636-828200",
  email: "mahdeereshid@gmail.com",
  country: "Bangladesh",
  invoiceId: "HU-fjw-92382",
  invoiceDate: "12/09/2024",
  amount: 55,
  billingId: "7325729579",
  cardNumber: "3545-1236-1344-3373",
};

const upgradePlans = [
  {
    name: "Standard",
    price: 155,
    oldPrice: 295,
    features: [
      "Automatic bot building",
      "Team collaboration",
      "AI model training",
      "Multilingual AI",
    ],
  },
  {
    name: "Starter",
    price: 99,
    oldPrice: 150,
    features: ["Basic bot building", "Limited collaboration", "Email support"],
  },
];

const billingHistory = [
  {
    plan: "Basic",
    issueDate: "12/06/2024",
    expireDate: "12/07/2024",
    amount: "$55",
    downloadLink: "#",
  },
  {
    plan: "Standard",
    issueDate: "12/04/2023",
    expireDate: "12/05/2024",
    amount: "$265",
    downloadLink: "#",
  },
];

const UpgradePage = () => {
  return (
    <div className="p-6 space-y-10">
      {/* Upgrade Section */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Current Plan */}
        <div className="flex-1 border rounded-2xl p-6 shadow-sm bg-white space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-800">
              Current Plan
            </h2>
            <div className="text-blue-500 font-medium flex items-center gap-1">
              <span>Basic</span>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold">{currentPlan.schoolName}</h3>
            <p className="text-sm text-gray-600">Phone: {currentPlan.phone}</p>
            <p className="text-sm text-gray-600">E-mail: {currentPlan.email}</p>
            <p className="text-sm text-gray-600">
              Country: {currentPlan.country}
            </p>
          </div>
          <div className="space-y-1 text-sm text-gray-500">
            <p>Invoice: {currentPlan.invoiceId}</p>
            <p>Invoice Date: {currentPlan.invoiceDate}</p>
            <p>Invoice Amount: ${currentPlan.amount}</p>
            <p>Billing ID: {currentPlan.billingId}</p>
          </div>
          <div className="flex items-center gap-2 mt-4 border p-2 rounded-lg">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
              alt="Visa"
              className="h-6"
            />
            <span className="text-gray-700 text-sm">
              {currentPlan.cardNumber}
            </span>
          </div>
          <div className="text-blue-500 text-2xl font-bold mt-4">
            ${currentPlan.amount}
            <span className="text-base text-gray-500">/mo</span>
          </div>
        </div>

        {/* Upgrade Plan */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Upgrade Plan
            </h2>
          </div>
          {/* <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 1.5 },
              1024: { slidesPerView: 2 },
            }}
            className="upgradeSwiper"
          >
            {upgradePlans.map((plan, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-gradient-to-b from-blue-400 to-blue-600 rounded-2xl p-6 text-white flex flex-col justify-between h-[330px]">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{plan.name}</h3>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      {plan.features.map((feature, idx2) => (
                        <li key={idx2}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <p className="text-3xl font-bold">
                      ${plan.price}
                      <span className="text-base font-normal">/yr</span>
                    </p>
                    <p className="line-through text-sm opacity-70">
                      ${plan.oldPrice}
                    </p>
                    <button className="mt-4 bg-white text-blue-500 font-semibold py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition-all">
                      Buy Now
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper> */}
        </div>
      </div>

      {/* Billing History */}
      <div className="mt-10">
        <h2 className="text-lg font-semibold mb-4 text-gray-800">
          Billing History
        </h2>
        <div className="overflow-x-auto bg-white rounded-2xl shadow-sm">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="text-left text-gray-500 text-sm border-b">
                <th className="p-4">Plan</th>
                <th className="p-4">Issue</th>
                <th className="p-4">Expire</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Download</th>
              </tr>
            </thead>
            <tbody>
              {billingHistory.map((bill, idx) => (
                <tr key={idx} className="border-b last:border-none">
                  <td className="p-4">{bill.plan}</td>
                  <td className="p-4">{bill.issueDate}</td>
                  <td className="p-4 text-red-500">{bill.expireDate}</td>
                  <td className="p-4">{bill.amount}</td>
                  <td className="p-4">
                    <a
                      href={bill.downloadLink}
                      className="text-blue-500 hover:underline"
                    >
                      Download PDF
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UpgradePage;