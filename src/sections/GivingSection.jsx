import { Copy, Gift } from 'lucide-react';
import { Toaster, toast } from 'react-hot-toast';

const accounts = [
  {
    role: "Bride's Details",
    name: 'Mary Ojoniko Abuh',
    bank: 'HI Bank',
    account: '1111111111',
  },
  {
    role: "Groom's Details",
    name: 'Victor Oluwajuwon Peter',
    bank: 'Hi Bank',
    account: '1234567890',
  },
];

const GivingSection = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success('Account number copied!');
  };

  return (
    <section className="max-w-5xl mx-auto bg-white p-6 md:p-10 h-screen flex flex-col justify-center">
      <Toaster position="top-center" reverseOrder={false} />

      <h2 className="text-2xl font-semibold text-[#5c1a00] flex items-center gap-2 mb-8">
        <Gift/> <span>Gift <span className="text-yellow-600">Details</span></span>
      </h2>

      <div className="flex flex-col md:flex-row gap-8 mb-8">
        {accounts.map((acc, idx) => (
          <div key={idx} className="flex-1 border border-yellow-300 rounded-xl p-6 shadow-sm space-y-4">
            <h3 className="text-lg font-semibold text-[#5c1a00]">{acc.role}</h3>

            <p className="text-sm text-gray-700">
              <span className="font-medium">Name:</span> {acc.name}
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-medium">Bank:</span> {acc.bank}
            </p>

            <div className="flex items-center justify-between mt-4 bg-yellow-100 px-4 py-2 rounded-md">
              <span className="text-base font-bold tracking-wide text-gray-800">{acc.account}</span>
              <button
                onClick={() => copyToClipboard(acc.account)}
                className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-full transition"
              >
                <Copy size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <p className="text-sm text-center text-gray-600">
        Thank you for your <span className="text-yellow-600 font-medium">thoughtfulness and generosity</span>! <br />
        <span className="text-lg">❤️✨🎁</span>
      </p>
    </section>
  );
};

export default GivingSection;
