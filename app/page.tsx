import Image from "next/image";

export default function Checkout() {
  return (
    <div className="min-h-screen bg-[#f4f5f9]">

      {/* FONDO AZUL */}
      <div className="bg-[#162a82] h-[320px] w-full"></div>

      <div className="-mt-[260px] relative max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="pt-6 flex justify-between text-white">
          <span className="text-sm opacity-80">← Go Back</span>
          <h1 className="text-2xl font-bold tracking-widest">2013</h1>
          <span>≡</span>
        </div>

        {/* STEPS */}
        <div className="mt-10 bg-[#23379c] rounded-md px-8 py-6 flex justify-between items-center shadow-xl">
          <div className="flex gap-8">
            <Step active number={1} label="Personal details" />
            <Step number={2} label="Order details" />
            <Step dark number={3} label="Payment" />
            <Step dark number={4} label="Confirmation" />
          </div>

          <span className="hidden md:block text-white opacity-80">
            ← Previous step
          </span>
        </div>

        {/* CONTENIDO */}
        <div className="grid lg:grid-cols-3 gap-8 mt-12">

          {/* ORDER */}
          <div className="lg:col-span-2 bg-white rounded-md shadow-xl p-8">
            <div className="flex justify-between mb-8">
              <h2 className="font-bold text-[#1c2b8f]">Order items</h2>
              <span className="text-sm text-gray-500">
                ✎ Edit shopping cart
              </span>
            </div>

            <OrderItem />
            <OrderItem />
            <OrderItem noBorder />

            {/* FRANJA DESCUENTO */}
            <div className="mt-6 -mx-8 -mb-8 bg-[#eef1f6] py-4 text-center text-sm font-medium text-[#1c2b8f] rounded-b-md">
              Have discount code? Click to enter it.
            </div>

          </div>

          {/* DERECHA */}
          <div className="space-y-8">

            {/* SUMMARY */}
            <div className="bg-white rounded-md shadow-xl p-8">
              <h2 className="font-bold text-[#1c2b8f] mb-3">Summary</h2>

              <p className="text-xs text-gray-500 mb-6">
                The total cost consist of the tax, insurance and the delivery charge.
              </p>

              <PriceRow label="Subtotal" value="€ 56.40" />
              <PriceRow label="Delivery" value="FREE" />
              <PriceRow label="Tax" value="€ 11.84" />
              <PriceRow label="Insurance" value="€ 7.00" />

              <div className="border-t mt-6 pt-6 flex justify-between font-bold text-[#1c2b8f] text-lg">
                <span>TOTAL:</span>
                <span>€ 75.24</span>
              </div>
            </div>

            {/* DELIVERY */}
            <div className="bg-white rounded-md shadow-xl p-6 flex justify-between items-center">
              <span className="font-bold text-[#1c2b8f]">Delivery</span>

              <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center shadow-sm hover:bg-gray-50 transition">
                <span className="text-[#1c2b8f] text-lg font-bold leading-none">
                  +
                </span>
              </button>
            </div>

            {/* BOTÓN */}
            <button className="w-full bg-[#1c2b8f] text-white py-4 rounded-md font-semibold shadow-lg hover:opacity-95 transition">
              Next step
            </button>

          </div>
        </div>

        {/* LÍNEA DIAGONAL FINA */}
        <div className="mt-20 h-3 bg-[repeating-linear-gradient(45deg,#d1d5db,#d1d5db_3px,transparent_3px,transparent_6px)]"></div>

        {/* FOOTER */}
        <div className="grid md:grid-cols-3 gap-10 text-center mt-14 pb-20">
          <Bottom type="lock" title="Your information is Safe" />
          <Bottom type="shield" title="Secure checkout" />
          <Bottom type="headphones" title="24/7 Support" />
        </div>

      </div>
    </div>
  );
}

/* ---------- COMPONENTES ---------- */

function OrderItem({ noBorder }: any) {
  return (
    <div className={`flex justify-between py-6 ${!noBorder && "border-b border-gray-200"}`}>
      <div className="flex gap-4">

        {/* IMAGEN */}
        <div className="w-14 h-14 bg-[#f4f5f9] rounded-md relative overflow-hidden">
          <Image
            src={
              noBorder
                ? "/products/glass.png"
                : "/products/case.png"
            }
            alt="Product image"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <p className="font-semibold text-[#1c2b8f]">
            Tempered glass for Iphone
          </p>
          <p className="text-xs text-gray-500">
            Size: Iphone 7, Iphone 8
          </p>
          <p className="text-xs text-gray-500">
            Quantity: 4 items
          </p>
        </div>
      </div>

      <div className="text-right">
        <p className="font-bold text-[#1c2b8f]">€ 20.00</p>
        <p className="text-xs text-gray-500">€ 5.00 per item</p>
      </div>
    </div>
  );
}

function Step({ number, label, active = false, dark = false }: any) {
  return (
    <div className="flex items-center gap-3 text-white">
      <div
        className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold
        ${
          active
            ? "bg-[#f4b740] text-black"
            : dark
            ? "bg-[#1c2b8f] text-white"
            : "bg-white text-[#1c2b8f]"
        }`}
      >
        {number}
      </div>

      <span className="hidden md:block font-medium">
        {label}
      </span>
    </div>
  );
}

function PriceRow({ label, value }: any) {
  return (
    <div className="flex justify-between text-sm mb-4">
      <span className="font-medium text-[#1c2b8f]">{label}</span>
      <span className="font-bold text-[#1c2b8f]">{value}</span>
    </div>
  );
}

function Bottom({ type, title }: any) {
  return (
    <div>
      <div className="flex justify-center mb-3 text-[#f4b740]">
        {type === "lock" && (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M12 11c1.104 0 2 .896 2 2v2a2 2 0 11-4 0v-2c0-1.104.896-2 2-2zm6-2V7a6 6 0 10-12 0v2" />
          </svg>
        )}

        {type === "shield" && (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M12 3l7 4v5c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V7l7-4z" />
          </svg>
        )}

        {type === "headphones" && (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M4 15v-3a8 8 0 0116 0v3M4 15a2 2 0 002 2h2v-6H6a2 2 0 00-2 2zm16 0a2 2 0 01-2 2h-2v-6h2a2 2 0 012 2z" />
          </svg>
        )}
      </div>

      <h3 className="font-semibold text-[#1c2b8f] mb-1">
        {title}
      </h3>

      <p className="text-xs text-gray-500">
        The total cost consist of the tax, insurance and the delivery charge.
      </p>
    </div>
  );
}